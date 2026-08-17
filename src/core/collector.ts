/**
 * 未翻译文本收集器（调试辅助，默认静默运行）
 *
 * 用途：Moss 在真实 GitHub 页面上浏览时，插件把「该翻但词库没有」的
 * 英文 UI 文本自动记录到 localStorage。点击左下角悬浮按钮，把收集结果
 * 复制出来发给 AI，AI 即可批量补词条 —— 不用再手动逐条报漏翻。
 *
 * 安全性：只在「引擎认为应该翻译的界面区域」收集（调用方已过豁免区过滤），
 * 用户内容（README/评论/代码/仓库名等）不会被收集。
 */
const STORAGE_KEY = 'gh-i18n-collect-v2';
const MAX_ENTRIES = 5000;

/** 收集条目：文本 + 出现次数 + 来源上下文（用于区分同词不同语境，如 Close 在 Issue/PR/弹窗中） */
interface Entry {
  count: number;
  url: string;
  tag: string;
  cls: string;
  attr: string;
}

/** text -> 条目 */
const collected = new Map<string, Entry>();
let saveTimer = 0;

function load(): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const obj = JSON.parse(raw) as Record<string, Partial<Entry>>;
    for (const [k, v] of Object.entries(obj)) {
      if (collected.size >= MAX_ENTRIES) break;
      const count = typeof v?.count === 'number' ? v.count : 1;
      collected.set(k, {
        count,
        url: typeof v?.url === 'string' ? v.url : '',
        tag: typeof v?.tag === 'string' ? v.tag : '',
        cls: typeof v?.cls === 'string' ? v.cls : '',
        attr: typeof v?.attr === 'string' ? v.attr : '',
      });
    }
  } catch {
    /* 隐私模式等场景忽略 */
  }
}

function save(): void {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.fromEntries(collected)));
    } catch {
      /* ignore */
    }
  }, 1000);
}

/** 是否值得收集：短英文 UI 文本，排除代码/路径/URL 特征 */
function isWorthCollecting(s: string): boolean {
  if (s.length < 2 || s.length > 200) return false;
  if (!/[A-Za-z]/.test(s)) return false;
  // 已含中文的内容不收集（多半是已经被翻译过的文本，避免自污染）
  if (/[\u4e00-\u9fff]/.test(s)) return false;
  // 排除 URL / 路径 / 明显代码特征
  if (/https?:\/\/|^\s*[a-z0-9._-]+(\/[a-z0-9._~-]+)+\s*$/i.test(s)) return false;
  // 排除绝对日期（Aug 8, 2026 —— GitHub 格式化日期，不翻译）
  if (/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4}$/.test(s)) return false;
  // 排除全是符号/数字的内容
  if (!/[A-Za-z]{2,}/.test(s)) return false;
  return true;
}

/**
 * 记录一条未翻译文本（幂等，按次数计数）
 * @param ctx 来源上下文：url（页面路径）、tag（元素标签）、cls（元素类名）、attr（来源属性，如 placeholder）
 */
export function record(text: string, ctx?: { url?: string; tag?: string; cls?: string; attr?: string }): void {
  if (!isDevMode()) return; // 公开版普通用户不收集（维护工具，第一性原理）
  if (!enabled) return;
  if (!isWorthCollecting(text)) return;
  const exist = collected.get(text);
  if (exist) {
    exist.count += 1;
    return;
  }
  if (collected.size >= MAX_ENTRIES) return;
  collected.set(text, {
    count: 1,
    url: ctx?.url ?? '',
    tag: ctx?.tag ?? '',
    cls: ctx?.cls ?? '',
    attr: ctx?.attr ?? '',
  });
  save();
}

/** 生成可读报告：按出现次数降序，含来源上下文 */
export function buildReport(): string {
  const arr = [...collected.entries()]
    .map(([text, e]) => ({ text, count: e.count, url: e.url, tag: e.tag, cls: e.cls, attr: e.attr }))
    .sort((a, b) => b.count - a.count);
  return JSON.stringify(arr);
}

export function collectedCount(): number {
  return collected.size;
}

// ==================== 覆盖率支持（全部候选文本收集 + 导出接口） ====================

/**
 * 所有「引擎尝试翻译的候选文本」（safe 过滤后、含已翻译与未翻译、含保留术语）。
 * 用于计算覆盖率：coverage = 1 - untranslated / all
 */
const ALL_SET = new Set<string>();
const ALL_MAX = 50000;

/** 记录一条候选文本（供覆盖率统计；与未翻译收集同口径过滤） */
export function collectAll(text: string): void {
  if (ALL_SET.size >= ALL_MAX) return;
  if (!isWorthCollecting(text)) return;
  ALL_SET.add(text);
}

/** 覆盖率统计报告（Playwright 覆盖率测试器通过 window.__GH_I18N_EXPORT__ 调用） */
export function exportReport(): {
  untranslated: Array<{ text: string; count: number; url: string; tag: string; cls: string }>;
  all: string[];
  counts: { untranslated: number; all: number };
  coverage: number;
} {
  const untranslated = [...collected.entries()]
    .map(([text, e]) => ({ text, count: e.count, url: e.url, tag: e.tag, cls: e.cls, attr: e.attr }))
    .sort((a, b) => b.count - a.count);
  const all = [...ALL_SET];
  return {
    untranslated,
    all,
    counts: { untranslated: untranslated.length, all: all.length },
    // 覆盖口径：未翻译文本种类 / 候选文本种类（保留术语计入"已覆盖"）
    coverage: all.length > 0 ? 1 - untranslated.length / all.length : 1,
  };
}

// ==================== 收集开关（默认开启，双击按钮可关闭；状态存 localStorage） ====================

const ENABLE_KEY = 'gh-i18n-collect-enabled';
let enabled = true;

function loadEnabled(): void {
  try {
    if (localStorage.getItem(ENABLE_KEY) === '0') enabled = false;
  } catch {
    /* ignore */
  }
}

function saveEnabled(): void {
  try {
    localStorage.setItem(ENABLE_KEY, enabled ? '1' : '0');
  } catch {
    /* ignore */
  }
}

// ==================== 悬浮按钮 UI ====================

let button: HTMLButtonElement | null = null;

function toast(label: string): void {
  if (!button) return;
  // 只改最后一个文本节点（「译」），避免清掉状态角标
  const textNode = button.lastChild as Text | null;
  const prev = textNode ? textNode.nodeValue : null;
  if (textNode) textNode.nodeValue = label;
  window.setTimeout(() => {
    if (textNode && prev !== null) textNode.nodeValue = prev;
  }, 1600);
}

/** 按钮角标：绿点 = 收集开启，灰点 = 已关闭 */
function updateButtonState(): void {
  if (!button) return;
  const dot = button.firstElementChild as HTMLElement | null;
  if (dot) dot.style.background = enabled ? '#1f883d' : '#8b949e';
  button.title = enabled
    ? 'GitHub 汉化：收集未翻译文本（点击复制 JSON；双击关闭收集）'
    : 'GitHub 汉化：收集已关闭（双击开启）';
}

function setEnabled(v: boolean): void {
  enabled = v;
  saveEnabled();
  updateButtonState();
  if (button) toast(enabled ? '收集已开启' : '收集已关闭');
}

async function onButtonClick(): Promise<void> {
  const json = buildReport();
  const n = collected.size;
  try {
    await navigator.clipboard.writeText(json);
    toast(`已复制 ${n} 条`);
  } catch {
    // 剪贴板不可用时退回 prompt 显示（select-all 后可手动复制）
    window.prompt('复制以下未翻译文本（全选后 Ctrl+C）：', json);
    toast('见弹窗');
  }
}

function createButton(): HTMLButtonElement {
  const b = document.createElement('button');
  // 状态角标（绿=收集开，灰=关）
  const dot = document.createElement('span');
  dot.style.cssText = [
    'position:absolute',
    'right:2px',
    'bottom:2px',
    'width:9px',
    'height:9px',
    'border-radius:50%',
    'border:1px solid #fff',
  ].join(';');
  b.appendChild(dot);
  b.appendChild(document.createTextNode('译'));
  b.title = 'GitHub 汉化：收集未翻译的界面文本（点击复制 JSON）';
  b.style.cssText = [
    'position:fixed',
    'left:12px',
    'bottom:12px',
    'z-index:2147483646',
    'width:40px',
    'height:40px',
    'border-radius:50%',
    'border:1px solid rgba(31,35,40,.15)',
    'background:#fff',
    'color:#1f2328',
    'font:600 14px/1 -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif',
    'cursor:pointer',
    'box-shadow:0 1px 3px rgba(31,35,40,.12)',
    'opacity:.75',
    'transition:opacity .15s',
  ].join(';');
  b.addEventListener('mouseenter', () => (b.style.opacity = '1'));
  b.addEventListener('mouseleave', () => (b.style.opacity = '.75'));
  b.addEventListener('click', () => void onButtonClick());
  b.addEventListener('dblclick', () => setEnabled(!enabled));
  return b;
}

/** 清空按钮：一键清除已收集的未翻译数据（localStorage + 内存） */
function createClearButton(): HTMLButtonElement {
  const b = document.createElement('button');
  b.textContent = '清';
  b.title = '清空已收集的未翻译文本（localStorage gh-i18n-collect-v2），不可恢复';
  b.style.cssText = [
    'position:fixed',
    'left:60px',
    'bottom:12px',
    'z-index:2147483646',
    'width:40px',
    'height:40px',
    'border-radius:50%',
    'border:1px solid rgba(31,35,40,.15)',
    'background:#fff',
    'color:#8b949e',
    'font:600 14px/1 -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif',
    'cursor:pointer',
    'box-shadow:0 1px 3px rgba(31,35,40,.12)',
    'opacity:.75',
    'transition:opacity .15s',
  ].join(';');
  b.addEventListener('mouseenter', () => (b.style.opacity = '1'));
  b.addEventListener('mouseleave', () => (b.style.opacity = '.75'));
  b.addEventListener('click', () => {
    if (!window.confirm('确定清空已收集的未翻译文本吗？此操作不可恢复。')) return;
    collected.clear();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    b.textContent = '已清空';
    window.setTimeout(() => (b.textContent = '清'), 1500);
  });
  return b;
}

/** 开发者模式开关（默认关闭）：维护者（脚本作者）启用后可见「译/清」按钮并开始收集。
 *  公开版本普通用户零收集零 UI（第一性原理：收集器是维护工具，不是用户功能）。
 *  启用方式（维护者）：浏览器控制台执行 localStorage.setItem('gh-i18n-dev','1') 后刷新。
 *  Playwright 测试器（coverage/auto-collect）通过 addInitScript 注入该标记自动启用。 */
const DEV_KEY = 'gh-i18n-dev';

function isDevMode(): boolean {
  try {
    return localStorage.getItem(DEV_KEY) === '1';
  } catch {
    return false;
  }
}

/** 注入收集器 UI（幂等），同时挂载覆盖率导出接口（供 Playwright 测试器调用）。
 *  仅开发者模式启用；普通用户不建按钮、不挂导出、不收集。 */
export function initCollectorUI(): void {
  if (!isDevMode()) return;
  if (button) return;
  load();
  loadEnabled();
  button = createButton();
  (document.body || document.documentElement).appendChild(button);
  const clearBtn = createClearButton();
  (document.body || document.documentElement).appendChild(clearBtn);
  (window as unknown as Record<string, unknown>).__GH_I18N_EXPORT__ = exportReport;
  updateButtonState();
  showFirstNotice();
}

/** 首次使用提示：公开分发后保证隐私透明（只提示一次，数据仅存本机） */
function showFirstNotice(): void {
  try {
    if (localStorage.getItem('gh-i18n-notice-v1')) return;
    localStorage.setItem('gh-i18n-notice-v1', '1');
  } catch {
    return;
  }
  const tip = document.createElement('div');
  tip.textContent =
    'GitHub 汉化已启用。左下角「译」可导出页面未翻译文本、「清」可清空已收集数据（数据仅存本机浏览器，不会上传）';
  tip.style.cssText = [
    'position:fixed',
    'left:60px',
    'bottom:16px',
    'z-index:2147483646',
    'background:#fff',
    'color:#1f2328',
    'border:1px solid rgba(31,35,40,.15)',
    'box-shadow:0 1px 3px rgba(31,35,40,.12)',
    'border-radius:6px',
    'padding:8px 12px',
    'font:12px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif',
    'max-width:340px',
    'pointer-events:none',
  ].join(';');
  (document.body || document.documentElement).appendChild(tip);
  window.setTimeout(() => tip.remove(), 8000);
}
