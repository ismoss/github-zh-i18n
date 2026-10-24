/**
 * 登录 + 仓库设置页全量扫查(一体化,登录后立即在同一会话继续,避免登录态落地盘丢失)
 *
 * 流程:开有头 Edge → 等用户登录(meta[user-login] 检测,不抢焦点)→ 存 state.json →
 *       打开 ismoss/read-pico-reader/settings → 从左侧导航 DOM 提取子页 BFS →
 *       逐页注入 dist 产物收集未翻译 → untranslated-repo-settings.json → 关窗。
 *
 * 用法:node scripts/login-and-sweep.mjs
 *   可选 --repo owner/name(默认 ismoss/read-pico-reader)、--wait 4500
 */
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const SCRIPT_PATH = fileURLToPath(new URL('../dist/github-zh.user.js', import.meta.url));
const waitIdx = process.argv.indexOf('--wait');
const WAIT = waitIdx > -1 && Number(process.argv[waitIdx + 1]) || 4500;
const repoIdx = process.argv.indexOf('--repo');
const REPO_SPEC = repoIdx > -1 ? process.argv[repoIdx + 1] : 'ismoss/read-pico-reader';
const [OWNER, REPO] = REPO_SPEC.split('/');
const BASE = `https://github.com/${OWNER}/${REPO}`;
const SETTINGS_PREFIX = `${BASE}/settings`;
const MAX_PAGES = 45;

const browser = await chromium.launch({ headless: false, channel: 'msedge' });
const context = await browser.newContext({ locale: 'en-US' });
const page = await context.newPage();

// ===== 阶段 1:等登录(最多 15 分钟)=====
await page.goto('https://github.com/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
console.log('浏览器已打开,请在窗口中登录 GitHub(ismoss)…登录成功后脚本会自动继续,请勿手动关窗。');

let loggedIn = false;
for (let i = 0; i < 450; i++) {
  try {
    await page.waitForTimeout(2000);
    // 首要判据:登录凭证 cookie(不依赖 DOM,GitHub 改版影响不到)
    const cookies = await context.cookies('https://github.com');
    const hasSession = cookies.some(
      (c) => c.name === 'user_session' || c.name === '__Host-user_session_sameuser' || c.name === 'dotcom_user',
    );
    if (!hasSession) {
      // 次要判据:DOM 信号(服务端渲染的 meta 登录名 / 头像)
      const dom = await page
        .evaluate(() => {
          const meta = document.querySelector('meta[name="user-login"]');
          return !!(meta && meta.content) || !!document.querySelector('.avatar-user');
        })
        .catch(() => false);
      if (!dom) continue;
    }
    loggedIn = true;
    break;
  } catch {
    console.log('浏览器窗口已被关闭,退出(未保存任何数据)。');
    process.exit(2);
  }
  if (i > 0 && i % 60 === 0) console.log(`  仍在等待登录…(已 ${Math.floor((i * 2) / 60)} 分钟)`);
}
if (!loggedIn) {
  console.log('超时(15 分钟)未检测到登录,退出。');
  await browser.close();
  process.exit(2);
}
console.log('✅ 检测到登录,正在保存登录态…');
await page.waitForTimeout(3000);
await context.storageState({ path: 'state.json' });
console.log('✅ state.json 已保存');

// ===== 阶段 2:注入产物,扫设置页 =====
await context.addInitScript(() => { try { localStorage.setItem('gh-i18n-dev', '1'); } catch {} });
await context.addInitScript({ path: SCRIPT_PATH });

async function extractSettingLinks() {
  const pathPrefix = new URL(SETTINGS_PREFIX).pathname;
  return page.evaluate((prefix, origin) => {
    const out = new Set();
    for (const a of document.querySelectorAll(`a[href^="${prefix}"]`)) {
      const href = (a.getAttribute('href') || '').split('#')[0];
      if (!href || /\/(new|create|edit)$/.test(href)) continue;
      out.add(new URL(href, origin).href);
    }
    return [...out];
  }, pathPrefix, 'https://github.com');
}

async function sweepUrl(label, url, merged) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(WAIT);
    const finalUrl = page.url();
    if (/\/login/.test(finalUrl)) {
      console.log(`[${label}] 跳到登录页,登录态失效`);
      return;
    }
    const data = await page.evaluate(() => window.__GH_I18N_EXPORT__?.() ?? null);
    const list = data?.untranslated;
    if (!Array.isArray(list)) {
      console.log(`[${label}] 无导出数据`);
      return;
    }
    for (const item of list) {
      const t = typeof item?.text === 'string' ? item.text : '';
      if (!t) continue;
      if (!merged.has(t)) {
        merged.set(t, { text: t, count: item.count ?? 1, url: item.url ?? '', tag: item.tag ?? '', cls: item.cls ?? '', attr: item.attr ?? '' });
      } else {
        merged.get(t).count += item.count ?? 1;
      }
    }
    console.log(`[${label}] ${finalUrl} → 未翻译 ${list.length} 条`);
  } catch (e) {
    console.log(`[${label}] 访问失败: ${e.message?.slice(0, 100)}`);
  }
}

const merged = new Map();
const visited = new Set();
const queue = [];

await sweepUrl('设置-主页', `${SETTINGS_PREFIX}`, merged);
queue.push(...await extractSettingLinks());
console.log(`左侧导航提取到 ${queue.length} 个设置链接`);

while (queue.length > 0 && visited.size < MAX_PAGES) {
  const url = queue.shift();
  if (!url || visited.has(url)) continue;
  visited.add(url);
  const label = url.replace(SETTINGS_PREFIX, '设置').slice(0, 60) || '设置-主页';
  await sweepUrl(label, url, merged);
  try {
    for (const link of await extractSettingLinks()) {
      if (!visited.has(link) && !queue.includes(link)) queue.push(link);
    }
  } catch {
    console.log('浏览器已关闭,停止扫描,写出已收集数据。');
    break;
  }
}

try {
  await browser.close();
} catch {
  /* 已关闭 */
}

const arr = [...merged.values()].sort((a, b) => b.count - a.count);
writeFileSync('untranslated-repo-settings.json', JSON.stringify(arr, null, 2));
console.log(`\n=== 完成:扫了 ${visited.size} 页,未翻译去重后 ${arr.length} 条 → untranslated-repo-settings.json ===`);
console.log('--- Top 25(按出现次数)---');
for (const item of arr.slice(0, 25)) {
  const attr = item.attr ? ` [${item.attr}]` : '';
  console.log(`${String(item.count).padStart(4)}  ${item.text.slice(0, 70)}${attr}`);
}
