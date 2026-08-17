/**
 * 保存 GitHub 登录态（一次性，供自动收集脚本复用）
 *
 * 用法：
 *   node scripts/save-state.mjs
 *
 * 流程：打开 Edge（有头模式，你能看到浏览器）→ github.com/login →
 * 你在窗口里登录（扫码/输密码/2FA 均可）→ 脚本检测到登录完成自动存档到 state.json。
 *
 * 注意：
 * - state.json 含登录凭证，已被 .gitignore 排除，绝不提交。
 * - 登录完成后脚本立即存档并关闭浏览器；之后 auto-collect.mjs 会用它访问登录后页面。
 */
import { chromium } from 'playwright';

const channel = process.argv.includes('--chromium') ? undefined : 'msedge';

const browser = await chromium.launch({ headless: false, channel });
const context = await browser.newContext({ locale: 'en-US' });
const page = await context.newPage();

await page.goto('https://github.com/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
console.log('浏览器已打开，请在窗口中登录 GitHub（扫码、输密码或第三方登录均可）…');
console.log('提示：使用 Google/Apple 等第三方登录时，会先跳转到对应网站，脚本会等授权完成回到 GitHub 才算登录成功。');

// 轮询等待登录完成，条件（全部满足）：
//   1) URL 回到 github.com 主域（排除 accounts.google.com 等 OAuth 跳转域）
//   2) URL 不含 /login、/sessions、/session（排除登录页与 2FA/会话验证页）
//   3) 页面出现登录用户头像 .avatar-user（登录成功的可靠特征）
let loggedIn = false;
for (let i = 0; i < 600; i++) {
  await page.waitForTimeout(1000);
  try {
    const url = page.url();
    const host = new URL(url).hostname;
    if (host !== 'github.com') continue; // OAuth 授权页等，继续等
    if (/github\.com\/(login|session)/.test(url)) continue;
    const hasAvatar = await page
      .evaluate(() => !!document.querySelector('.avatar-user'))
      .catch(() => false);
    if (hasAvatar) {
      loggedIn = true;
      break;
    }
  } catch {
    /* 页面导航中，忽略 */
  }
  if (i > 0 && i % 30 === 0) console.log(`  仍在等待登录完成…（已 ${Math.floor(i / 60)} 分钟）`);
}

if (!loggedIn) {
  console.log('超时（10 分钟）未检测到登录，请重跑本命令。');
} else {
  await page.waitForTimeout(3000); // 等登录跳转与页面稳定
  await context.storageState({ path: 'state.json' });
  console.log('✅ 登录态已保存到 state.json（含 cookie/localStorage，勿提交到 git）');
}

await browser.close();
