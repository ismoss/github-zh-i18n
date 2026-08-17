# AGENTS.md

## 项目定位
GitHub 界面汉化油猴脚本（github-zh-i18n）。纯本地词库翻译 GitHub UI：零外链依赖、零 API 请求、不翻译用户内容（README/Issue 正文/评论/代码/仓库名/用户名）。

## 怎么跑起来
```bash
npm install          # 安装 esbuild（构建用）
npm run build        # 构建 → dist/github-zh.user.js（安装到 Tampermonkey 用这份）
npm run watch        # 监听模式，改代码自动重建
npm run check:dict   # 词库自检：发现「值==键」条目（刻意保留 or 漏翻）
npm run coverage     # 翻译覆盖率测试（Playwright + 系统 Edge，无需下载浏览器）
```
产物安装：油猴新建脚本 → 粘贴 `dist/github-zh.user.js` → 保存。

## 技术栈
TypeScript + esbuild（bundle 成单文件 userscript，`@grant none`）。Node 18+。无运行时依赖。

## 目录与约定
- `src/locales/zh-CN.json` —— 界面词库（纯 JSON，按键值编辑）。加词条：`"英文原文": "中文翻译"`，原文必须是 GitHub 实际 DOM 文本（大小写、标点精确一致）。**贡献者不需要懂 TS**，直接改 JSON 即可。
- `src/locales/glossary.json` —— 术语表：官方术语译名（pushed→推送）+ 强制保留原文的专有名词（Java→Java 自映射）。合并优先级 glossary > zh-CN。
- `src/core/translator.ts` —— 引擎：精确匹配 → 正则规则（时间/计数/动态句）→ 不翻；Unicode 归一化（弯撇号/弯引号/nbsp/dash/空白折叠 + **首尾 trim**——链接/加粗拆分节点可能带前导/尾随空格，词库 key 一律用 trim 版，**勿再加带首尾空格的 key**）；`contextual()` 按父元素选择器区分同词多义。
- `src/core/safe.ts` —— 豁免区：代码块/用户输入/README/评论/Issue 标题/仓库名链接等，绝不翻译；`PAGE_EXCLUDE` 按页面追加豁免（如 repo 文件列表容器）。
- `src/core/collector.ts` —— 未翻译收集器（localStorage `gh-i18n-collect-v2`；左下角「译」单击复制 JSON、**双击开关收集**、「清」清空数据；未命中属性值 placeholder/aria-label/title 也收集，带 attr 字段）+ 覆盖率导出 `window.__GH_I18N_EXPORT__()`。
- `src/core/observer.ts` —— 增量 MutationObserver（childList + characterData + aria-label/title/placeholder 属性）+ SPA 路由监听；元素一律遍历（属性翻译逐元素执行，不受文本豁免影响）；Shadow DOM（<relative-time> 等）内部文本单独翻译。
- 版本号：`build.mjs` 顶部 `VERSION` 按构建时间自动生成（`YYYY.M.D.HHmm`），可被 `GH_I18N_VERSION` 环境变量覆盖；GitHub 提交由维护者手动执行（CI 只校验不提交）。

## 当前状态与下一步
- 词库 2315 条（zh-CN.json）+ glossary 163 条，产物约 248KB。收集器闭环运转：用户逛 GitHub → 点「译」导出 JSON（数据含 url/tag/cls/attr 来源）→ 维护者批量甄别补词条。
- 未翻译收集数据甄别原则：GitHub 界面文本→加词库（原文必须与 DOM 精确一致，含大小写/标点/空格）；用户内容（项目名/用户名/分支名/许可证/日期/commit 标题/快捷键提示）→跳过；碎片（We/You can/has）→视拼接价值决定；**功能 ID/字段名（private_vulnerability_reporting、@timestamp 等）→跳过**。

## 发布流程（Moss 确定的正式约定：验证先行，推送殿后）
1. **改**：维护者（AI）在本地改词条/引擎 → `npm run build` 自检通过
2. **同步**：robocopy 同步到 E 盘 `E:\moss\github\github-zh-i18n`（**必须 /XF 排除 state.json 与 untranslated-auto.json**——登录态与收集产物绝不进 git 仓库）
3. **告知 + 用户验证**：向用户说明本轮改了哪些界面、新版本号 → 用户手动导入 Tampermonkey 检查（发现翻译问题→回到步骤 1）
4. **推送**：用户确认「没问题/提交吧」→ 提交前跑 `scripts/pii-check.py`（退出码 0 才提交）→ `git commit` + `git push origin main` → 用户去 GreasyFork 点「同步」→ Tampermonkey 自动更新

> 铁律：**任何改动未经用户本地验证，不得推送 GitHub**。公开仓库只接收已验证的版本。

## 已知噪音（混入候选但不会误翻）
- issues/PR 行元信息、repo 文件列表文件名；多数已被 `.opened-by`（全局）与 `.react-directory-listing`（页面级）豁免。
- 自动化工具：`scripts/save-state.mjs`（保存 Playwright 登录态，**须等 .avatar-user 出现才算登录成功**，防 OAuth 中途误判）、`scripts/auto-collect.mjs`（自动逛页面收集未翻译；**设置页清单从 /settings/profile 左侧导航实际提取，勿手列**）、`scripts/pii-check.py`（提交前敏感扫描，退出码 0 才提交）、`scripts/dedup-collector.py`（收集数据去重合并）。

## 已知坑（勿重犯，均已在引擎层/流程层根治）
1. **首尾空格失配**（踩过 3 次：前导×2、尾随×1）→ normalize 已 trim，词库 key 一律 trim 版，**勿再加带首尾空格的 key**（本文件第 22 行铁律）。
2. **收集数据只看 top 30**（security_analysis 漏看后半，用户二次反馈）→ **收集/甄别必须看全**，不按条数截断；同一页面功能标题+说明+弹窗+链接文本全要覆盖。
3. **页面清单手列**（漏了 security_analysis 等 5 页 + 4 个路径写错）→ 设置页清单从左侧导航 DOM 提取（`a[href^="/settings/"]`），路径以实测为准（security-log 不是 security_log、replies 不是 saved-replies）。
4. **产品名翻成中文**（Copilot→"智能助手" 踩过 2 次）→ Copilot/GitHub CLI/Desktop/Mobile/Marketplace/DevSecOps/Java 等一律保留原文（glossary 自映射），勿按字面翻译。
5. **多义词语境误翻**（Pulse→"脉冲"、On main→"开 main"）→ 标题类专有名词（Pulse→动态）与整句（On main,）优先加词条/正则挡住单词误翻。
6. **JSON 值里英文直引号 `"`**（强制"冷却"期导致 JSON 解析失败）→ 词条值里引号一律用中文引号「"」。
7. **长句含链接/加粗被拆分**（"Learn more about X" 等链接文本是独立节点）→ 拆成「前缀碎片 + 链接文本词条 + 后段碎片」，整句词条永远匹配不上拆分节点。
8. **Unicode 变体未归一化**（弯撇号’、弯引号""、左弯引号'、nbsp）→ normalize 已全覆盖，词条 key 用直引号/直撇号即可。
9. **正则缺陷**（捕获组索引错位、千分位逗号 398,187 不匹配 \d+、分支写死 main）→ 正则写完跑真实样例验证；分支用 `(main|master)`、数字用 `[\d,]+`。
10. **确认弹窗动态句**（"You're about to disable X on all public repositories in Y"）→ 正则捕获的功能名先**大写化再查词条**再输出，否则输出英文原文。
11. **测试断言笔误**（多次 FAIL 是测试期望值写错，非引擎问题）→ 写断言前先核对词条实际值（`lookup` 输出），再定期望。
12. **heredoc 陷阱**（bash heredoc 里 `${}` 被 shell 解释、printf 里 `%` 被当格式符）→ 含 `${}`/`%` 的测试用 Write 工具写文件，不用 heredoc/printf。
