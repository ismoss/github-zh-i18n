/**
 * GitHub 界面汉化油猴脚本 —— 入口
 * 纯本地词库、零外链依赖、不翻译用户内容。
 * 构建产物：dist/github-zh.user.js（导入 Tampermonkey 即用）
 */
import { initTranslation } from './core/observer';
import { initCollectorUI } from './core/collector';

function main(): void {
  try {
    initTranslation();
    initCollectorUI(); // 未翻译文本收集器（左下角小圆钮，点击复制）
  } catch (err) {
    // 脚本异常绝不影响 GitHub 页面本身
    console.warn('[GitHub 界面汉化] 初始化失败:', err);
  }
}

// @run-at document-idle，但保险起见仍处理 DOM 未就绪的情况
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main, { once: true });
} else {
  main();
}
