# GitHub 界面汉化（github-zh-i18n）

纯本地词库翻译 GitHub 界面的 Tampermonkey 油猴脚本。**零外链依赖、零 API 请求、不翻译用户内容**。
基于 DeepSeek-V4-Flash 开发的自用插件，边用边更新中：遇到未翻译内容可自行编译补词条（见「加词条」），或等待后续版本。

## 设计原则（对比常见 GitHub 汉化插件的常见问题）

| 常见问题 | 本插件的解法 |
|---|---|
| 输入框/标题栏/空状态/页脚漏翻 | 文本节点 + `placeholder`/`aria-label`/`title` 属性全覆盖，空状态、页脚等所有区块统一走同一套翻译引擎 |
| Java→爪哇、Python→蟒蛇、date pushed→日期推迟 | **只翻界面 UI，绝不翻译用户内容**（README/Issue/评论/代码/仓库名/用户名），术语表按 GitHub 官方词汇表翻译（pushed→推送、commit→提交），专有名词（Java/Python 等）强制保留原文 |
| CPU 占用过高、页面卡顿 | 增量 MutationObserver（只处理新增节点）+ rAF 节流，不做整页循环扫描 |
| 依赖第三方 CDN 语言包（存在投毒风险） | 语言包全部内嵌进脚本，无任何外部请求（`@grant none`） |

## 隐私说明

- 脚本**不上传任何数据**（`@grant none`，零网络请求）。
- 内置的「未翻译收集器」只在**本机浏览器** localStorage 记录页面未翻译文本，用于帮助维护者补词条；只有你主动点击左下角「译」按钮时才会复制到剪贴板。
- 首次使用时页面会显示一次提示说明，之后不再打扰。

## 贡献

- 加词条：编辑 `src/locales/zh-CN.json`（界面词库）或 `glossary.json`（术语表），一行一条 `"英文原文": "中文翻译"`，然后 `npm run build`。
- 提交前请跑 `npm run check:dict` 自检。
- 词条原文必须是 GitHub 实际 DOM 文本（大小写、标点、空格精确一致）；不要收录用户内容（README/Issue 标题/评论/代码/仓库名/用户名）。

## 安装

**方式一（推荐）：从 GreasyFork 安装**——支持自动更新，后续版本发布后 Tampermonkey 自动升级，无需手动操作。
👉 [GreasyFork 安装页](https://greasyfork.org/zh-CN/scripts/590687-github-%E7%95%8C%E9%9D%A2%E6%B1%89%E5%8C%96)

**方式二：手动导入**
1. 浏览器安装 [Tampermonkey](https://www.tampermonkey.net/) 扩展（Chrome / Edge / Firefox）。
2. 油猴面板 →「管理面板」→「+」（新建脚本）→ 全选删除默认内容 → 粘贴 `dist/github-zh.user.js` 内容 → 保存（Ctrl+S）。
   （或将文件拖入油猴管理面板导入）
3. 打开 https://github.com 即自动生效，无需任何配置。

## 开发 / 构建

需要 Node.js 18+（本仓库使用 esbuild 打包，产物是单个 `.user.js`）。

```bash
npm install        # 安装 esbuild
npm run build      # 构建 → dist/github-zh.user.js
npm run watch      # 监听模式，改代码自动重建
```

## 加词条（最常见维护操作）

所有翻译文本都在 `src/locales/` 下（**纯 JSON，不懂代码也能贡献**）：

- `zh-CN.json` —— 界面词库。`"英文原文": "中文翻译"` 一行一条。
- `glossary.json` —— 术语表。GitHub 官方术语（pushed→推送）和强制保留原文的专有名词（Java→Java）。

加完词条跑 `npm run build` + `npm run check:dict` 即可。
词条原文必须是 GitHub 实际 DOM 文本（大小写、标点、空格精确一致）；不要收录用户内容。

## 动态格式文本（正则规则）

`src/core/translator.ts` 内置了 GitHub 动态格式的翻译规则，无需加词条：
`3 days ago` → `3 天前`、`Pushed 3 days ago` → `3 天前推送`、`23 Open` → `23 个待处理`、`N commits/stars/forks/...` 等。

## 未翻译收集器（人工辅助）

插件左下角有两个悬浮按钮：「译」和「清」——「译」静默记录页面上所有「该翻但词库没有」的界面英文文本
（含出现次数、来源 URL、DOM 标签/类名），**单击**一键复制 JSON，把 JSON 发给维护者即可批量补词条；
**「清」**一键清空已收集的数据（有确认，不可恢复），适合每轮检查前重新开始。
- 「译」**双击**可关闭/开启收集（角标绿点=开，灰点=关），状态持久化。
- 数据存于 `localStorage['gh-i18n-collect-v2']`（跨会话累计，刷新/关闭浏览器不清空）。

## 翻译覆盖率测试器（Playwright）

脚本会打开 GitHub 公共页面 → 注入 `dist/github-zh.user.js` → 调用 `window.__GH_I18N_EXPORT__()`，
输出每个页面的候选文本数 / 未翻译数 / 覆盖率。

```bash
npm i -D playwright        # 只需 npm 包，不需要下载浏览器
npm run coverage           # 默认驱动【系统已装的 Edge】
node scripts/coverage.mjs --chromium   # 或改用 Playwright 内置 Chromium
```

原理：插件在翻译时收集「所有候选 UI 文本」（safe 过滤后）与「未翻译文本」，
`coverage = 1 - 未翻译 / 候选`。适合做 GitHub 改版后的回归测试。
注意：未登录只能测公共页面；测登录后页面（通知/收件箱等）需先登录一次保存登录态：

```bash
npx playwright codegen https://github.com   # 浏览器里登录，然后关闭
# codegen 会话可配合 context 保存 storageState，再传参：
node scripts/coverage.mjs --state ./state.json
```

## 自动收集未翻译文本（全自动逛页面）

维护者一键收集"当前词库还没覆盖的页面文本"：逐页打开 GitHub 主要页面（首页/仓库/议题/PR/Actions/
讨论/设置全家桶等 50+ 个，其中设置页清单从左侧导航实际提取）→ 注入脚本 → 导出每页未翻译列表 → 跨页去重合并，输出 `untranslated-auto.json`
（按出现次数排序，含来源 URL / DOM 标签 / 属性）。

```bash
# ① 一次性：登录并保存登录态（弹出的浏览器里登录 GitHub，脚本自动存档）
node scripts/save-state.mjs

# ② 自动收集（有 state.json 时自动用登录态，设置页等登录后页面也能测）
node scripts/auto-collect.mjs
#    --headed   有头模式（风控时人工验证）
#    --no-state 不用登录态（只测公共页）
#    --wait 5000  调每页等待时间（默认 4000ms）
```

产物 `state.json`（登录凭证）与 `untranslated-auto.json` 已被 .gitignore 排除，不会误提交。
收集到的数据需要**人工甄别**：界面 UI 文本→补词条/正则；用户内容（用户名/仓库名/分支名/工作流名/日期）→跳过。

## 词库自检

```bash
npm run check:dict    # 扫描值==键的条目（刻意保留的专有名词 or 漏翻，需人工确认）
```

## 豁免区（绝不翻译）

`src/core/safe.ts` 定义：代码块（`pre/code/.blob-code`）、用户输入、README（`.markdown-body`）、
评论、Issue/PR 标题、仓库描述、自定义标签、主题标签、仓库名/用户名链接（`[data-hovercard-type]`）等。
