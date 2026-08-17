/**
 * 构建脚本：将 src/index.ts bundle 成单文件 userscript
 * 产物：dist/github-zh.user.js（可直接导入 Tampermonkey）
 *
 * 用法：
 *   node build.mjs            一次构建
 *   node build.mjs --watch    监听模式（改代码自动重建）
 */
import { build, context } from 'esbuild';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf8'));

/**
 * 版本号：按「构建日期 + 时间」生成（如 2026.8.11.1359），
 * 便于区分每次构建，也满足 Tampermonkey 更新检测。
 * 手动/CI 可传环境变量覆盖：GH_I18N_VERSION=1.0.1 npm run build
 */
const VERSION = process.env.GH_I18N_VERSION || (() => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}.${pad(d.getHours())}${pad(d.getMinutes())}`;
})();

// userscript 元数据头 —— 这里就是油猴认识这个脚本的"身份证"
const banner = `// ==UserScript==
// @name         GitHub 界面汉化
// @name:zh-CN   GitHub 界面汉化
// @namespace    github-zh-i18n
// @version      ${VERSION}
// @description  基于 DeepSeek-V4-Flash 开发的自用 GitHub 翻译插件：纯本地词库、零外链依赖、不翻译用户内容（README/Issue/评论/代码），术语遵循 GitHub 官方词汇表。边用边更新中，遇到未翻译内容可自行编译或等待更新。
// @author       Moss & WorkBuddy
// @match        https://github.com/*
// @match        https://*.github.com/*
// @icon         https://github.com/favicon.ico
// @license      MIT
// @grant        none
// @run-at       document-idle
// @noframes
// ==/UserScript==

/*!
 * github-zh-i18n v${VERSION}
 * 纯本地词库汉化 GitHub 界面，零网络依赖。
 * 源码: workspace/github-zh-i18n/src
 * 构建: node build.mjs
 */
`;

const common = {
  entryPoints: [resolve(__dirname, 'src/index.ts')],
  bundle: true,
  format: 'iife',
  target: ['chrome100', 'edge100', 'firefox100', 'safari15'],
  outfile: resolve(__dirname, 'dist/github-zh.user.js'),
  banner: { js: banner },
  // 不压缩，方便用户查看/审查产物；体积本来就不大
  minify: false,
  legalComments: 'none',
  logLevel: 'info',
  sourcemap: false,
};

const watch = process.argv.includes('--watch');

if (watch) {
  const ctx = await context(common);
  await ctx.watch();
  console.log('[build] watching... (Ctrl+C 退出)');
} else {
  await build(common);
  console.log('[build] done -> dist/github-zh.user.js');
}
