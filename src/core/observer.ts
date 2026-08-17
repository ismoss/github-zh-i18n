/**
 * DOM 覆盖与监听
 * - 文本节点翻译 + 属性翻译（placeholder / aria-label / title）
 * - 增量 MutationObserver：只处理新增节点，避免整页重扫（老插件 CPU 卡顿的根源）
 * - SPA 路由监听：GitHub 是单页应用，hook history API，页面切换后延迟重扫
 */
import { lookup, translateTextNode, isKnownTerm } from './translator';
import { shouldSkipElement, shouldSkipTextNode } from './safe';
import { record } from './collector';

/** 需要翻译的 HTML 属性（不含 value/href/src 等用户或功能数据） */
const TRANSLATABLE_ATTRS = ['placeholder', 'aria-label', 'title'] as const;

/** 处理过的元素打标记，防止重复处理 */
const DONE_MARK = 'data-gh-i18n-done';

function translateAttributes(el: Element): void {
  for (const attr of TRANSLATABLE_ATTRS) {
    if (!el.hasAttribute(attr)) continue;
    const val = el.getAttribute(attr) ?? '';
    const trimmed = val.trim();
    if (!trimmed) continue;
    const translated = lookup(trimmed);
    if (translated !== null && translated !== trimmed) {
      el.setAttribute(attr, translated);
    } else if (translated === null) {
      // 属性类未翻译文本也进收集器（placeholder/aria-label/title 是 UI 提示，应被反馈）
      if (!isKnownTerm(trimmed)) {
        record(trimmed, {
          url: typeof location !== 'undefined' ? location.pathname + location.search : '',
          tag: el.tagName,
          cls: typeof el.className === 'string' ? el.className : '',
          attr,
        });
      }
    }
  }
  // value 属性翻译：仅表单提交/按钮类型（input[type=submit|button] 的按钮文本存在 value 里，
  // 如 /settings/admin 的「Start export」）。普通输入框的 value 是用户内容，绝不翻译。
  const tag = el.tagName;
  const type = (el.getAttribute('type') || '').toLowerCase();
  const isBtnValue = tag === 'BUTTON' || (tag === 'INPUT' && (type === 'submit' || type === 'button'));
  if (isBtnValue && el.hasAttribute('value')) {
    const v = (el.getAttribute('value') ?? '').trim();
    if (v) {
      const t = lookup(v);
      if (t !== null && t !== v) el.setAttribute('value', t);
    }
  }
}

/** 创建文本/元素遍历器（SHOW_ELEMENT|SHOW_TEXT：同时检查带 shadowRoot 的元素）
 *  元素一律 ACCEPT：每个元素都要做属性翻译（placeholder/aria-label/title），
 *  文本豁免（用户内容区）由文本节点自身的 shouldSkipTextNode 过滤，互不干扰。
 */
function createWalker(root: Node): TreeWalker {
  return document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (!(node.nodeValue ?? '').trim()) return NodeFilter.FILTER_REJECT;
        if (shouldSkipTextNode(node)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
}

/**
 * 翻译 open shadowRoot 内的文本（如 <relative-time> 等 web component）。
 * TreeWalker 默认不进 shadow DOM，需要单独处理。
 */
function translateShadowRoot(root: ShadowRoot, force: boolean): void {
  const shadow = root as ShadowRoot & { __ghI18nDone?: boolean };
  if (!force && shadow.__ghI18nDone) return;
  shadow.__ghI18nDone = true;
  const walker = createWalker(root);
  let n: Node | null;
  while ((n = walker.nextNode()) !== null) {
    if (n.nodeType === Node.TEXT_NODE) {
      translateTextNode(n as Text);
    } else {
      const elm = n as Element;
      translateAttributes(elm);
      if (elm.shadowRoot) translateShadowRoot(elm.shadowRoot, force);
    }
  }
}

/** 翻译一个元素：自身属性 + 子树内所有文本节点（含 shadowRoot）
 *  force=true 用于全量重扫：忽略自身已处理标记（SPA 路由切换后必须重新扫描）
 */
function translateElement(el: Element, force = false): void {
  if (!force && el.hasAttribute(DONE_MARK)) return;
  // 属性翻译（placeholder/aria-label/title）先于文本豁免：
  // 输入框等豁免区的 placeholder 提示语是 UI，也必须翻译
  translateAttributes(el);
  if (shouldSkipElement(el)) return;
  el.setAttribute(DONE_MARK, '1');

  const walker = createWalker(el);
  let n: Node | null;
  while ((n = walker.nextNode()) !== null) {
    if (n.nodeType === Node.TEXT_NODE) {
      translateTextNode(n as Text);
    } else {
      // 元素：属性翻译（placeholder/aria-label/title）+ 若带 open shadowRoot 翻译内部文本
      const elm = n as Element;
      translateAttributes(elm);
      if (elm.shadowRoot) translateShadowRoot(elm.shadowRoot, force);
    }
  }
}

/** 翻译单个节点（新增节点或文本变化） */
function translateNode(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) {
    if (!shouldSkipTextNode(node)) translateTextNode(node as Text);
    return;
  }
  if (node.nodeType === Node.ELEMENT_NODE) {
    translateElement(node as Element);
  }
}

/** 全量扫描整个 body（首次加载 / SPA 路由切换后调用，force 绕过已处理标记） */
export function translateRoot(): void {
  const body = document.body;
  if (!body) return;
  translateElement(body, true);
}

/** 增量观察：只处理新增/变化的节点 */
let pendingNodes = new Set<Node>();
/** 属性变化（aria-label/title/placeholder）单独入队，绕过 DONE_MARK 直接重翻属性 */
let pendingAttrs = new Set<Element>();
let pendingRaf = 0;
let rootObserver: MutationObserver | null = null;

function flush(): void {
  pendingRaf = 0;
  const batch = pendingNodes;
  pendingNodes = new Set<Node>();
  for (const node of batch) {
    try {
      translateNode(node);
    } catch {
      // 单节点失败不影响其余节点
    }
  }
  const attrs = pendingAttrs;
  pendingAttrs = new Set<Element>();
  for (const el of attrs) {
    try {
      translateAttributes(el);
    } catch {
      /* ignore */
    }
  }
}

function scheduleFlush(): void {
  if (pendingRaf) return;
  pendingRaf = requestAnimationFrame(flush);
}

export function initObserver(): void {
  if (rootObserver) return;
  rootObserver = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'childList') {
        for (const added of m.addedNodes) {
          pendingNodes.add(added);
        }
      } else if (m.type === 'characterData' && m.target.nodeType === Node.TEXT_NODE) {
        pendingNodes.add(m.target);
      } else if (m.type === 'attributes') {
        // GitHub 很多按钮/组件会动态改写 aria-label / title / placeholder
        pendingAttrs.add(m.target as Element);
      }
    }
    if (pendingNodes.size > 0 || pendingAttrs.size > 0) scheduleFlush();
  });

  rootObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['aria-label', 'title', 'placeholder'],
  });
}

// ==================== SPA 路由监听 ====================

let routeTimer = 0;

function scheduleRouteRescan(): void {
  window.clearTimeout(routeTimer);
  routeTimer = window.setTimeout(() => {
    try {
      translateRoot();
    } catch {
      /* ignore */
    }
  }, 500);
}

function hookHistory(): void {
  const h = history as unknown as {
    pushState: (data: unknown, unused: string, url?: string | URL | null) => void;
    replaceState: (data: unknown, unused: string, url?: string | URL | null) => void;
  };

  const origPush = h.pushState.bind(history);
  const origReplace = h.replaceState.bind(history);

  h.pushState = (data, unused, url) => {
    origPush(data, unused, url);
    scheduleRouteRescan();
  };
  h.replaceState = (data, unused, url) => {
    origReplace(data, unused, url);
    scheduleRouteRescan();
  };

  window.addEventListener('popstate', scheduleRouteRescan);
}

/** 初始化翻译监听（幂等） */
export function initTranslation(): void {
  translateRoot();
  initObserver();
  hookHistory();
}
