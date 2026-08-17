/**
 * 自动收集未翻译文本（全自动逛页面）
 *
 * 原理：逐页打开 GitHub 页面 → 注入 dist/github-zh.user.js（addInitScript，等同油猴注入）→
 * 等待翻译引擎稳定 → 调 window.__GH_I18N_EXPORT__() 拿该页未翻译列表 → 跨页按 text 去重合并。
 *
 * 用法：
 *   node scripts/auto-collect.mjs                  # headless + 登录态（存在 state.json 时自动用）
 *   node scripts/auto-collect.mjs --headed         # 有头模式（可观察，风控时可人工验证）
 *   node scripts/auto-collect.mjs --no-state       # 不用登录态（只测公共页面）
 *   node scripts/auto-collect.mjs --wait 6000      # 调等待时间（默认 4000ms）
 *
 * 前置：
 *   1) node scripts/save-state.mjs  登录一次存档
 *   2) npm i -D playwright
 *
 * 输出：untranslated-auto.json（按 count 降序，text 去重合并；含来源 url/tag/cls/attr）
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
const WAIT = waitIdx > -1 && process.argv[waitIdx + 1] ? Number(process.argv[waitIdx + 1]) : 4000;

if (!useState) console.log('⚠️  未使用登录态（state.json 不存在或 --no-state），设置页将被跳过（未登录跳登录页）');

const OWNER = 'ismoss';
const REPO = 'github-zh-i18n';
// 公共大仓库：覆盖有真实内容页面的通用 UI（issues/PR 详情、wiki、projects、tags、security 等）
const PUB = 'microsoft';
const PUBREPO = 'vscode';

/**
 * 页面清单 —— 按 GitHub 界面 7 大类组织（清单即分类体系，2026-08-17 建立）：
 *  ① 全局框架（导航/页脚/横幅） ② 发现与首页 ③ 仓库页 ④ 个人主页 ⑤ 组织/企业 ⑥ 账户设置 ⑦ 认证/独立页
 * 分类内每行 = 一个界面。新增页面时按类追加，勿手列游离条目。
 */
const PAGES = [
  // ========== ② 发现与首页 ==========
  { label: '首页', url: 'https://github.com/' },
  { label: '探索', url: 'https://github.com/explore' },
  { label: '主题', url: 'https://github.com/topics' },
  { label: '趋势', url: 'https://github.com/trending' },
  { label: '搜索结果', url: 'https://github.com/search?q=github&type=repositories' },
  // ========== ③ 仓库页（自己的仓库 + 公共大仓库补真实内容页） ==========
  { label: '仓库主页', url: `https://github.com/${OWNER}/${REPO}` },
  { label: '代码树', url: `https://github.com/${OWNER}/${REPO}/tree/main/src` },
  { label: '文件详情 blob', url: `https://github.com/${PUB}/${PUBREPO}/blob/main/README.md` },
  { label: '提交列表', url: `https://github.com/${OWNER}/${REPO}/commits/main` },
  { label: '提交详情', url: `https://github.com/${PUB}/${PUBREPO}/commit/1c7b9f2d9f5a3e7f4b2c8d1e0a9f6b3c4d5e6f7a` },
  { label: '议题列表', url: `https://github.com/${OWNER}/${REPO}/issues` },
  { label: '议题详情', url: `https://github.com/${PUB}/${PUBREPO}/issues/1` },
  { label: 'PR 列表', url: `https://github.com/${OWNER}/${REPO}/pulls` },
  { label: 'PR 详情', url: `https://github.com/${PUB}/${PUBREPO}/pull/1` },
  { label: 'PR 审查', url: `https://github.com/${PUB}/${PUBREPO}/pull/1/files` },
  { label: 'Actions', url: `https://github.com/${OWNER}/${REPO}/actions` },
  { label: 'Projects', url: `https://github.com/${PUB}/${PUBREPO}/projects` },
  { label: '讨论列表', url: `https://github.com/${OWNER}/${REPO}/discussions` },
  { label: 'Pulse', url: `https://github.com/${OWNER}/${REPO}/pulse` },
  { label: '贡献图', url: `https://github.com/${OWNER}/${REPO}/graphs/contributors` },
  { label: '依赖图', url: `https://github.com/${OWNER}/${REPO}/network/dependencies` },
  { label: '网络图', url: `https://github.com/${OWNER}/${REPO}/network` },
  { label: '分支', url: `https://github.com/${OWNER}/${REPO}/branches` },
  { label: '发布', url: `https://github.com/${OWNER}/${REPO}/releases` },
  { label: '标签', url: `https://github.com/${OWNER}/${REPO}/tags` },
  { label: 'Wiki', url: `https://github.com/${PUB}/${PUBREPO}/wiki` },
  { label: '安全标签页', url: `https://github.com/${OWNER}/${REPO}/security` },
  // ========== ④ 个人主页 ==========
  { label: '个人主页', url: `https://github.com/${OWNER}` },
  { label: '我的仓库', url: `https://github.com/${OWNER}?tab=repositories` },
  { label: '星标', url: `https://github.com/${OWNER}?tab=stars` },
  { label: '软件包', url: `https://github.com/${OWNER}?tab=packages` },
  { label: '项目', url: `https://github.com/${OWNER}?tab=projects` },
  { label: '成就', url: `https://github.com/${OWNER}?tab=achievements` },
  // ========== ⑤ 组织/企业 ==========
  { label: '组织主页', url: 'https://github.com/github' },
  { label: '组织-人员', url: 'https://github.com/orgs/github/people' },
  { label: '组织-仓库', url: 'https://github.com/orgs/github/repositories' },
  // ========== ⑦ 认证/独立页 ==========
  { label: '通知', url: 'https://github.com/notifications' },
  { label: '市场', url: 'https://github.com/marketplace' },
  { label: '赞助', url: 'https://github.com/sponsors' },
  { label: '代码片段', url: 'https://github.com/gists' },
  // ========== ⑥ 账户设置（37 页：34 官方导航 + billing 概述/预算/令牌） ==========
  { label: '设置-资料', url: 'https://github.com/settings/profile' },
  { label: '设置-账户管理', url: 'https://github.com/settings/admin' },
  { label: '设置-外观', url: 'https://github.com/settings/appearance' },
  { label: '设置-辅助功能', url: 'https://github.com/settings/accessibility' },
  { label: '设置-通知', url: 'https://github.com/settings/notifications' },
  { label: '设置-AI 用量', url: 'https://github.com/settings/billing/ai_usage' },
  { label: '设置-许可证', url: 'https://github.com/settings/billing/licensing' },
  { label: '设置-付款信息', url: 'https://github.com/settings/billing/payment_information' },
  { label: '设置-订阅', url: 'https://github.com/settings/billing/subscriptions' },
  { label: '设置-教育', url: 'https://github.com/settings/education/benefits' },
  { label: '设置-邮箱', url: 'https://github.com/settings/emails' },
  { label: '设置-安全', url: 'https://github.com/settings/security' },
  { label: '设置-会话', url: 'https://github.com/settings/sessions' },
  { label: '设置-密钥', url: 'https://github.com/settings/keys' },
  { label: '设置-凭据', url: 'https://github.com/settings/credentials' },
  { label: '设置-组织', url: 'https://github.com/settings/organizations' },
  { label: '设置-企业', url: 'https://github.com/settings/enterprises' },
  { label: '设置-屏蔽用户', url: 'https://github.com/settings/blocked_users' },
  { label: '设置-交互限制', url: 'https://github.com/settings/interaction_limits' },
  { label: '设置-代码审查限制', url: 'https://github.com/settings/code_review_limits' },
  { label: '设置-仓库', url: 'https://github.com/settings/repositories' },
  { label: '设置-Codespaces', url: 'https://github.com/settings/codespaces' },
  { label: '设置-Packages', url: 'https://github.com/settings/packages' },
  { label: '设置-Copilot 功能', url: 'https://github.com/settings/copilot/features' },
  { label: '设置-Copilot 云代理', url: 'https://github.com/settings/copilot/coding_agent' },
  { label: '设置-Pages', url: 'https://github.com/settings/pages' },
  { label: '设置-已保存回复', url: 'https://github.com/settings/replies' },
  { label: '设置-安全分析', url: 'https://github.com/settings/security_analysis' },
  { label: '设置-安装', url: 'https://github.com/settings/installations' },
  { label: '设置-计划提醒', url: 'https://github.com/settings/reminders' },
  { label: '设置-安全日志', url: 'https://github.com/settings/security-log' },
  { label: '设置-赞助日志', url: 'https://github.com/settings/sponsors-log' },
  { label: '设置-应用', url: 'https://github.com/settings/apps' },
  { label: '设置-ORCID 连接', url: 'https://github.com/settings/orcid_connection/new' },
  // 补充（不在左侧导航但存在）
  { label: '设置-账单', url: 'https://github.com/settings/billing' },
  { label: '设置-预算', url: 'https://github.com/settings/billing/budgets' },
  { label: '设置-令牌', url: 'https://github.com/settings/tokens' },
];

const browser = await chromium.launch({ headless, channel });

/** 跨页合并：text 去重、count 累加、保留首次来源 */
const merged = new Map();
let ok = 0;
let fail = 0;

for (const { label, url } of PAGES) {
  const context = await browser.newContext({ locale: 'en-US', ...(storageState ? { storageState } : {}) });
  await context.addInitScript(() => { try { localStorage.setItem('gh-i18n-dev', '1'); } catch {} });
  await context.addInitScript({ path: SCRIPT_PATH });
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(WAIT);
    const data = await page.evaluate(() => window.__GH_I18N_EXPORT__?.() ?? null);
    const list = data?.untranslated;
    if (!Array.isArray(list)) {
      console.log(`[${label}] 无导出数据（脚本未注入？）`);
      fail++;
      continue;
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
    console.log(`[${label}] ${url} → 未翻译 ${list.length} 条`);
    ok++;
  } catch (e) {
    console.log(`[${label}] 访问失败: ${e.message?.slice(0, 80)}`);
    fail++;
  } finally {
    await page.close();
    await context.close();
  }
}

await browser.close();

const arr = [...merged.values()].sort((a, b) => b.count - a.count);
writeFileSync('untranslated-auto.json', JSON.stringify(arr, null, 2));
console.log(`\n=== 完成：成功 ${ok} / 失败 ${fail}，未翻译去重后 ${arr.length} 条 → untranslated-auto.json ===`);
console.log('--- Top 25（按出现次数）---');
for (const item of arr.slice(0, 25)) {
  const attr = item.attr ? ` [${item.attr}]` : '';
  console.log(`${String(item.count).padStart(4)}  ${item.text.slice(0, 70)}${attr}`);
}
