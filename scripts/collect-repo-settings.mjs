/**
 * 单仓库设置页全量扫查（未翻译收集）
 *
 * 与 auto-collect.mjs 的区别：仓库设置页清单不手列，而是从左侧导航 DOM 实际提取
 * （坑#3），再逐页提取页内次级导航（Actions/Secrets 等子标签）BFS 一层，逐页注入
 * dist 产物收集未翻译文本。
 *
 * 用法：
 *   node scripts/collect-repo-settings.mjs                      # ismoss/read-pico-reader
 *   node scripts/collect-repo-settings.mjs --owner ismoss --repo github-zh-i18n
 *   node scripts/collect-repo-settings.mjs --headed --wait 6000
 *
 * 前置：node scripts/save-state.mjs 登录一次（state.json 存在）。
 * 输出：untranslated-repo-settings.json（按 count 降序，含 url/tag/cls/attr）
 */
import { chromium } from 'playwright';
import { existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const SCRIPT_PATH = fileURLToPath(new URL('../dist/github-zh.user.js', import.meta.url));
const headless = !process.argv.includes('--headed');
const channel = process.argv.includes('--chromium') ? undefined : 'msedge';
const useState = !process.argv.includes('--no-state') && existsSync('state.json');
const storageState = useState ? 'state.json' : undefined;
const waitIdx = process.argv.indexOf('--wait');
const WAIT = waitIdx > -1 && Number(process.argv[waitIdx + 1]) || 4500;
const ownerIdx = process.argv.indexOf('--owner');
const repoIdx = process.argv.indexOf('--repo');
const OWNER = ownerIdx > -1 ? process.argv[ownerIdx + 1] : 'ismoss';
const REPO = repoIdx > -1 ? process.argv[repoIdx + 1] : 'read-pico-reader';
const BASE = `https://github.com/${OWNER}/${REPO}`;
const SETTINGS_PREFIX = `${BASE}/settings`;
const MAX_PAGES = 45;

if (!useState) console.log('⚠️  state.json 不存在,设置页将跳到登录页——先跑 node scripts/save-state.mjs');

const browser = await chromium.launch({ headless, channel });
const context = await browser.newContext({ locale: 'en-US', ...(storageState ? { storageState } : {}) });
await context.addInitScript(() => { try { localStorage.setItem('gh-i18n-dev', '1'); } catch {} });
await context.addInitScript({ path: SCRIPT_PATH });
const page = await context.newPage();

/** 从当前页面 DOM 提取设置相关链接(GitHub 页内 href 是相对路径,按路径前缀匹配,归一化为绝对 URL) */
async function extractSettingLinks() {
  const pathPrefix = new URL(SETTINGS_PREFIX).pathname;
  return page.evaluate(({ prefix, origin }) => {
    const out = new Set();
    for (const a of document.querySelectorAll(`a[href^="${prefix}"]`)) {
      const href = (a.getAttribute('href') || '').split('#')[0];
      if (!href) continue;
      // 排除动作型链接(带/new、/create 等)
      if (/\/(new|create|edit)$/.test(href)) continue;
      out.add(new URL(href, origin).href);
    }
    return [...out];
  }, { prefix: pathPrefix, origin: 'https://github.com' });
}

/** 打开一页并导出未翻译列表 */
async function sweepUrl(label, url, merged) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(WAIT);
    const finalUrl = page.url();
    if (/\/login/.test(finalUrl)) {
      console.log(`[${label}] 跳到登录页,登录态失效`);
      return [];
    }
    const data = await page.evaluate(() => window.__GH_I18N_EXPORT__?.() ?? null);
    const list = data?.untranslated;
    if (!Array.isArray(list)) {
      console.log(`[${label}] 无导出数据`);
      return [];
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
    return list;
  } catch (e) {
    console.log(`[${label}] 访问失败: ${e.message?.slice(0, 100)}`);
    return [];
  }
}

const merged = new Map();
const visited = new Set();
const queue = [];

// 种子:设置主页,先从它的左侧导航提取完整清单
await sweepUrl('设置-主页', `${SETTINGS_PREFIX}`, merged);
const navLinks = await extractSettingLinks();
console.log(`左侧导航提取到 ${navLinks.length} 个设置链接`);
queue.push(...navLinks);

while (queue.length > 0 && visited.size < MAX_PAGES) {
  const url = queue.shift();
  if (!url || visited.has(url)) continue;
  visited.add(url);
  const label = url.replace(`${SETTINGS_PREFIX}`, '设置').slice(0, 60) || '设置-主页';
  await sweepUrl(label, url, merged);
  // 次级导航(子标签页)BFS 一层
  for (const link of await extractSettingLinks()) {
    if (!visited.has(link) && !queue.includes(link)) queue.push(link);
  }
}

await browser.close();

const arr = [...merged.values()].sort((a, b) => b.count - a.count);
writeFileSync('untranslated-repo-settings.json', JSON.stringify(arr, null, 2));
console.log(`\n=== 完成:扫了 ${visited.size} 页,未翻译去重后 ${arr.length} 条 → untranslated-repo-settings.json ===`);
console.log('--- Top 25(按出现次数)---');
for (const item of arr.slice(0, 25)) {
  const attr = item.attr ? ` [${item.attr}]` : '';
  console.log(`${String(item.count).padStart(4)}  ${item.text.slice(0, 70)}${attr}`);
}
