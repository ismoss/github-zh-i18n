/**
 * 豁免规则：哪些内容「绝不翻译」
 *
 * 核心原则：只翻译 GitHub 的界面 UI 文本，绝不翻译用户生成内容——
 * 仓库名、用户名、README、Issue 标题、评论、代码、自定义标签、主题标签等。
 * 这也是老插件「把项目名 Java 翻成爪哇」问题的根本解法：不是去修词，
 * 而是这些区域根本不允许翻译引擎进入。
 */

/** 选择器：命中（自身或任意祖先）即整棵子树跳过翻译 */
export const EXCLUDE_SELECTOR = [
  // 代码与代码块
  'pre',
  'code',
  'kbd',
  'samp',
  '.blob-code',
  '.highlight',
  '.CodeMirror',
  '.CodeMirror-code',
  '.file-info',
  // 用户输入区域（textarea/input 的正文文本豁免；select/option 是 UI 选项，允许翻译）
  'textarea',
  'input',
  'datalist',
  '[contenteditable="true"]',
  // 非内容元素
  'script',
  'style',
  'noscript',
  'template',
  'svg',
  'math',
  // 用户生成内容
  '.markdown-body', // README / Issue 正文 / 渲染后的评论
  '.comment-body',
  '.js-comment-body',
  '.js-issue-title', // Issue / PR 标题
  '.commit-title', // commit 消息标题（用户内容，如 "Fix #123" 绝不翻译）
  '.commit-desc',
  '.js-commit-title',
  '[data-testid="commit-row-item"]', // 新版 commit 列表行
  '.opened-by', // Issue / PR 行的「opened by X · 时间」元信息（用户内容）
  '.repo-description', // 仓库描述
  '.topic-tag', // 仓库主题标签（用户内容）
  '.Label', // 自定义标签（用户创建的 Label）
  '.author', // 作者名
  '.js-path-segment', // 文件路径
  // 用户内容链接：仓库名 / 用户名 / Issue / PR / Commit 标题的链接
  '[data-hovercard-type]',
];

/**
 * 按页面追加的豁免规则：不同页面配不同的忽略选择器。
 * match：URL pathname 正则；selectors：命中（自身或祖先）即跳过。
 * 用于处理「全局排除会误伤，但某页面整块都是用户内容」的场景，
 * 例如仓库文件列表里的文件名（/owner/repo 根路径）。
 */
export const PAGE_EXCLUDE: Array<{ match: RegExp; selectors: string[] }> = [
  // 仓库文件列表页：文件名行整块是用户内容（.react-directory-listing 为新版 React 容器）
  {
    match: /^\/[^/]+\/[^/]+\/?$/,
    selectors: ['.react-directory-listing'],
  },
];

/**
 * 判断元素是否应跳过翻译（自身或祖先命中豁免区，或已处理过）
 */
export function shouldSkipElement(el: Element): boolean {
  const path = typeof location !== 'undefined' ? location.pathname : '';
  // 例外：设置页（/settings/*）内的 .Label 是状态徽标（Primary/Verified/Private/Connected to Google 等），
  // 属于 UI 而非用户自定义标签，允许翻译；其他页面的 .Label 仍是用户内容，保持豁免。
  const inSettings = path.startsWith('/settings/');
  const selectors = inSettings ? EXCLUDE_SELECTOR.filter((s) => s !== '.Label') : EXCLUDE_SELECTOR;
  if (el.closest(selectors.join(','))) return true;
  // 页面级豁免：命中当前路径的追加选择器
  for (const rule of PAGE_EXCLUDE) {
    if (rule.match.test(path) && el.closest(rule.selectors.join(','))) return true;
  }
  return false;
}

/**
 * 判断文本节点是否应跳过翻译
 */
export function shouldSkipTextNode(node: Node): boolean {
  const parent = node.parentElement;
  if (!parent) return true;
  return shouldSkipElement(parent);
}
