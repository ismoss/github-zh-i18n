/**
 * GitHub 界面汉化 —— 翻译覆盖率测试器（Playwright）
 *
 * 原理：打开 GitHub 页面 → 注入 dist/github-zh.user.js → 等待翻译引擎稳定 →
 * 调用 window.__GH_I18N_EXPORT__() 拿到 {untranslated, all, counts, coverage} →
 * 按页面输出覆盖率与 Top 未翻译。
 *
 * 浏览器：默认驱动【系统已装的 Edge】（channel: msedge），无需下载任何浏览器；
 * 加 --chromium 参数才用 Playwright 内置 Chromium（需先 npx playwright install chromium）。
 *
 * 用法：
 *   npm i -D playwright               # 只需安装 npm 包，不需要装浏览器
 *   node scripts/coverage.mjs         # 用系统 Edge
 *   node scripts/coverage.mjs --headed # 有头模式（可观察）
 *   node scripts/coverage.mjs --chromium
 *
 * 注意：
 * - 未登录只能测公共页面（repo/issues/pulls/actions 等）；
 *   需要测登录后页面时，改用 playwright codegen 登录一次保存 storageState 后注入。
 * - GitHub 可能触发 Cloudflare 风控，重试或加 --headed 人工验证。
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';

const SCRIPT_PATH = fileURLToPath(new URL('../dist/github-zh.user.js', import.meta.url));
const headless = !process.argv.includes('--headed');
const channel = process.argv.includes('--chromium') ? undefined : 'msedge';
// 登录态：--state <storageState.json>（先 npx playwright codegen 登录后导出）
const stateIdx = process.argv.indexOf('--state');
const storageState = stateIdx > -1 && process.argv[stateIdx + 1] ? process.argv[stateIdx + 1] : undefined;

const PAGES = [
  { name: 'home', url: 'https://github.com/' },
  { name: 'repo', url: 'https://github.com/microsoft/vscode' },
  { name: 'issues', url: 'https://github.com/microsoft/vscode/issues' },
  { name: 'pulls', url: 'https://github.com/microsoft/vscode/pulls' },
  { name: 'actions', url: 'https://github.com/microsoft/vscode/actions' },
  { name: 'mcp', url: 'https://github.com/mcp' },
];

const browser = await chromium.launch({ headless, channel });

const report = [];
for (const { name, url } of PAGES) {
  // 每页独立 context：避免 localStorage（收集器）跨页累计，保证 all/untranslated 同口径
  const context = await browser.newContext({ locale: 'en-US', ...(storageState ? { storageState } : {}) });
  await context.addInitScript(() => { try { localStorage.setItem('gh-i18n-dev', '1'); } catch {} });
  await context.addInitScript({ path: SCRIPT_PATH });
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    // 等翻译引擎 + 增量观察稳定（relative-time 等异步渲染）
    await page.waitForTimeout(4500);
    const data = await page.evaluate(() => window.__GH_I18N_EXPORT__?.() ?? null);
    if (!data) {
      console.log(`[${name}] 无导出数据（脚本未注入？）`);
      continue;
    }
    const { counts, coverage, untranslated } = data;
    console.log(`\n[${name}] ${url}`);
    console.log(`  候选 ${counts.all} 条 | 未翻译 ${counts.untranslated} 条 | 覆盖率 ${(coverage * 100).toFixed(1)}%`);
    const top = untranslated
      .slice(0, 8)
      .map((t) => `${t.text}(${t.count})`)
      .join(' / ');
    console.log(`  Top 未翻译: ${top || '(无)'}`);
    report.push({ name, url, all: counts.all, untranslated: counts.untranslated, coverage: +coverage.toFixed(3) });
  } catch (e) {
    console.log(`[${name}] 访问失败: ${e.message}`);
  } finally {
    await page.close();
    await context.close();
  }
}

await browser.close();
console.log('\n=== 汇总 ===');
console.log(JSON.stringify(report, null, 2));
