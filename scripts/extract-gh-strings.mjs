/**
 * 从 GitHub 前端 JS bundle 提取硬编码英文界面文案（2026-08-17 建）
 *
 * 原理：GitHub 是 React 应用，界面文案硬编码在 JS chunk 里（内置官方多语言字典，唯独无中文）。
 * Playwright 带登录态访问核心页面 → 拦截收集页面加载的 githubassets JS → 下载 → 提取英文候选 →
 * 与词库（zh-CN.json + glossary.json）normalize 对比 → 输出缺失清单 untranslated-bundle.json。
 * 这解决人肉 URL 清单「逛不到就漏」的问题：代码里有就必被查出。
 *
 * 用法：
 *   node scripts/extract-gh-strings.mjs            # 提取候选 → scripts/candidates.json
 *   node scripts/extract-gh-strings.mjs --diff     # 提取 + 与词库对比 → untranslated-bundle.json
 *   node scripts/extract-gh-strings.mjs --headed   # 有头模式
 *   node scripts/extract-gh-strings.mjs --no-state # 不用登录态（只测公共页面）
 *
 * 前置：node scripts/save-state.mjs 登录一次存档；npm i -D playwright
 * 输出：scripts/candidates.json（全部候选）/ untranslated-bundle.json（词库缺失）
 */
import { chromium } from 'playwright';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const CAND_FILE = path.join(ROOT, 'scripts', 'candidates.json');
const DIFF_FILE = path.join(ROOT, 'untranslated-bundle.json');

const headless = !process.argv.includes('--headed');
const channel = process.argv.includes('--chromium') ? undefined : 'msedge';
const doDiff = process.argv.includes('--diff');
const useState = !process.argv.includes('--no-state') && existsSync(path.join(ROOT, 'state.json'));
const storageState = useState ? path.join(ROOT, 'state.json') : undefined;

// 登录后核心页面（bundle 提取的目标范围：仓库/议题/PR/设置/个人页等）
const PAGES = [
  { label: '仓库主页', url: 'https://github.com/ismoss/github-zh-i18n' },
  { label: '代码树', url: 'https://github.com/ismoss/github-zh-i18n/tree/main/src' },
  { label: '议题列表', url: 'https://github.com/ismoss/github-zh-i18n/issues' },
  { label: 'PR 列表', url: 'https://github.com/ismoss/github-zh-i18n/pulls' },
  { label: '仓库设置', url: 'https://github.com/ismoss/github-zh-i18n/settings' },
  { label: '账户设置', url: 'https://github.com/settings/profile' },
  { label: '个人主页', url: 'https://github.com/ismoss' },
  { label: '通知', url: 'https://github.com/notifications' },
  { label: '组织主页', url: 'https://github.com/github' },
  { label: 'Actions', url: 'https://github.com/ismoss/github-zh-i18n/actions' },
];

/** 与引擎一致的 normalize：弯引号→直引号、nbsp→空格、dash→-、空白折叠、trim */
function normalize(s) {
  return s
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\u00A0/g, ' ')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

/** 提取英文候选：双引号包裹、大写开头、含空格、10-120 字符，排除代码串 */
function extractCandidates(code) {
  const re = /"([A-Z][A-Za-z0-9 ,;:'().&/%-]{10,120})"/g;
  const out = [];
  let m;
  while ((m = re.exec(code)) !== null) {
    const t = m[1];
    if (!/\s/.test(t)) continue;
    if (/^\d/.test(t)) continue;
    if (/^(get|set|if|for|while|const|let|var|return|function|new|import|export|async|await|type|interface|enum|class|extends|implements)\b/i.test(t)) continue;
    if (/[{}[\]\\]/.test(t)) continue;
    if (t.startsWith('ActionList.') || t.includes('shouldn') || t.includes("don't use") || t.includes('Warning:')) continue;
    // 噪音过滤：V8 引擎错误 / SVG path / CSS 类名碎片 / 调试消息
    if (/^(Private |Cannot |Unable to get |The specified element|Cannot add the same|is not writable|not a (submit button|function|constructor|valid)|TypeError|ReferenceError|SyntaxError|RangeError)/.test(t)) continue;
    // SVG path：仅含 path 命令字符（MmLlHhVvCcSsQqTtAaZz + 数字/空格/./-），两种格式（点分/空格分隔）都覆盖
    if (/^[MmLlHhVvCcSsQqTtAaZz0-9 .\-\n]+$/.test(t) && /[MmLlHhVvCcSsQqTtAaZz]/.test(t) && /[0-9]/.test(t)) continue;
    if (/(flex-|justify-|items-|text-|font-|w-|h-|p-\d|m-\d|rounded|shadow-|cursor-)/.test(t)) continue;
    if (/(Aborted|endpoint provided|out of sync|Trace table|DOM Complete)/.test(t)) continue;
    out.push(t);
  }
  return out;
}

const browser = await chromium.launch({ headless, channel });

/** 收集所有页面加载的 githubassets JS */
const jsUrls = new Set();
const pageList = [];

for (const { label, url } of PAGES) {
  const context = await browser.newContext({ locale: 'en-US', ...(storageState ? { storageState } : {}) });
  const page = await context.newPage();
  page.on('response', (resp) => {
    const u = resp.url();
    if (u.startsWith('https://github.githubassets.com/') && u.endsWith('.js')) {
      jsUrls.add(u);
    }
  });
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2000);
    console.log(`[${label}] ${url} OK`);
  } catch (e) {
    console.log(`[${label}] 访问失败: ${e.message?.slice(0, 80)}`);
  } finally {
    await page.close();
    await context.close();
  }
}
await browser.close();

console.log(`收集到 JS chunk: ${jsUrls.size} 个`);
if (jsUrls.size === 0) {
  console.error('未收集到任何 JS（登录态过期或网络问题？）');
  process.exit(1);
}

// 下载并提取
mkdirSync(path.join(ROOT, 'scripts', '.chunks'), { recursive: true });
const textCount = new Map(); // normalize 后文本 → { count, chunks:Set }
const rawCount = new Map();  // 原文 → count（保留原文用于输出）
let bytes = 0;

for (const u of jsUrls) {
  const fn = path.join(ROOT, 'scripts', '.chunks', u.split('/').pop());
  let code = '';
  try {
    // 已下载过的 chunk 直接读缓存（避免重复下载 244 个文件）
    if (existsSync(fn) && readFileSync(fn).length > 0) {
      code = readFileSync(fn, 'utf8');
    } else {
      const resp = await fetch(u, { signal: AbortSignal.timeout(15000) });
      if (!resp.ok) continue;
      code = await resp.text();
      writeFileSync(fn, code);
    }
    bytes += code.length;
  } catch (e) {
    continue; // 单个 chunk 下载失败不影响整体
  }
  // 跳过多语言 chunk（非 ASCII > 5% = 西/法/葡等营销文案）
  let nonAscii = 0;
  for (let i = 0; i < code.length; i++) {
    if (code.charCodeAt(i) > 127) nonAscii++;
    if (nonAscii > code.length * 0.05) break;
  }
  if (nonAscii > code.length * 0.05) continue;

  for (const raw of extractCandidates(code)) {
    const n = normalize(raw);
    if (!n) continue;
    rawCount.set(n, raw);
    if (!textCount.has(n)) textCount.set(n, { count: 0, chunks: new Set() });
    const e = textCount.get(n);
    e.count++;
    e.chunks.add(u.split('/').pop());
  }
}

console.log(`下载解析 ${bytes / 1024 / 1024 | 0}MB，候选(去重): ${textCount.size}`);

const arr = [...textCount.entries()]
  .map(([n, e]) => ({ text: rawCount.get(n), count: e.count, chunks: [...e.chunks] }))
  .sort((a, b) => b.count - a.count);
writeFileSync(CAND_FILE, JSON.stringify(arr, null, 2));
console.log(`→ scripts/candidates.json（${arr.length} 条）`);

// --diff：与词库对比
if (doDiff) {
  const dict = {};
  for (const f of ['zh-CN.json', 'glossary.json']) {
    const p = path.join(ROOT, 'src', 'locales', f);
    if (!existsSync(p)) continue;
    const d = JSON.parse(readFileSync(p, 'utf8'));
    for (const k of Object.keys(d)) dict[normalize(k)] = true;
  }
  const missing = arr.filter((x) => !dict[normalize(x.text)]);
  writeFileSync(DIFF_FILE, JSON.stringify(missing, null, 2));
  console.log(`→ untranslated-bundle.json（词库缺失 ${missing.length} 条）`);
  console.log('--- Top 20 缺失 ---');
  for (const x of missing.slice(0, 20)) {
    console.log(`${String(x.count).padStart(3)}  ${x.text.slice(0, 80)}`);
  }
}
