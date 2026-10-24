/**
 * 翻译核心引擎
 * - 查找顺序：词库精确匹配（术语表优先）→ 正则规则（时间/计数格式）→ 不翻译
 * - 替换时保留文本节点首尾空白
 * - 对「映射到自身」的条目（如 Java→Java）返回 null，即保持原文不处理
 */
import zhCN from '../locales/zh-CN.json';
import glossary from '../locales/glossary.json';
import { record, collectAll } from './collector';

/** 最终合并词典：术语表优先于界面词库 */
const DICT: Record<string, string> = { ...zhCN, ...glossary };

/** 时间单位 → 中文 */
const TIME_UNIT_CN: Record<string, string> = {
  second: '秒',
  seconds: '秒',
  minute: '分钟',
  minutes: '分钟',
  hour: '小时',
  hours: '小时',
  day: '天',
  days: '天',
  week: '周',
  weeks: '周',
  month: '个月',
  months: '个月',
  year: '年',
  years: '年',
};

/** 英文月份 → 中文数字（贡献图日期等） */
const MONTH_CN: Record<string, string> = {
  January: '1',
  February: '2',
  March: '3',
  April: '4',
  May: '5',
  June: '6',
  July: '7',
  August: '8',
  September: '9',
  October: '10',
  November: '11',
  December: '12',
  Jan: '1',
  Feb: '2',
  Mar: '3',
  Apr: '4',
  Jun: '6',
  Jul: '7',
  Aug: '8',
  Sep: '9',
  Oct: '10',
  Nov: '11',
  Dec: '12',
};

/** 「最近…」相对周期 → 中文：'3 months' → '3 个月'、'week' → '一周' */
function periodCn(p: string): string | null {
  const m = /^(\d+)?\s*(second|minute|hour|day|week|month|year)s?$/.exec(p.trim());
  if (!m) return null;
  const unit = TIME_UNIT_CN[m[2]];
  if (!unit) return null;
  return m[1] ? `${m[1]} ${unit}` : `一${unit}`;
}

/** 英文星期 → 中文（提交活动图日期等） */
const WEEK_CN: Record<string, string> = {
  Sunday: '星期日',
  Monday: '星期一',
  Tuesday: '星期二',
  Wednesday: '星期三',
  Thursday: '星期四',
  Friday: '星期五',
  Saturday: '星期六',
};

/** 讨论帖表情名 → 中文（react with / reacted with 正则用） */
const EMOJI_CN: Record<string, string> = {
  rocket: '火箭',
  eyes: '眼睛',
  laugh: '大笑',
  hooray: '欢呼',
  confused: '困惑',
  heart: '爱心',
  'thumbs up': '点赞',
  'thumbs down': '点踩',
};

/** 动作 + 时间：「Pushed 3 days ago」→「3 天前推送」 */
const ACTION_VERB_CN: Record<string, string> = {
  Updated: '更新',
  Pushed: '推送',
  Created: '创建',
  Committed: '提交',
  Authored: '编写',
  Merged: '合并',
  Closed: '关闭',
  Opened: '打开',
  Starred: '星标',
  Forked: '复刻',
  Joined: '加入',
  'Last active': '活跃',
  Edited: '编辑',
  Reviewed: '审查',
};

// 数字：支持 123 / 1,234 / 2.1k / 2.5k 等 GitHub 常见格式
const NUM = '(\\d[\\d,]*(?:\\.\\d+)?[kK]?)';
const UNIT = '(seconds?|minutes?|hours?|days?|weeks?|months?|years?)';
// 用 \s+ 匹配分隔空白：GitHub 部分文本节点中间带换行缩进（如 "0\n  stars"）
const TIME_AGO = new RegExp(`^${NUM}\\s+${UNIT}\\s+ago$`);
const ACTION_TIME_AGO = new RegExp(`^(Updated|Pushed|Created|Committed|Authored|Merged|Closed|Opened|Starred|Forked|Joined|Last active|Edited|Reviewed)\\s+${NUM}\\s+${UNIT}\\s+ago$`);

/** 正则规则集：返回翻译后的文本，不匹配返回 null */
const RULES: Array<(s: string) => string | null> = [
  // 「3 days ago」→「3 天前」
  (s) => {
    const m = TIME_AGO.exec(s);
    if (m) return `${m[1]} ${TIME_UNIT_CN[m[2]]}前`;
    return null;
  },
  // 「Pushed 3 days ago」→「3 天前推送」
  (s) => {
    const m = ACTION_TIME_AGO.exec(s);
    if (m) return `${m[2]} ${TIME_UNIT_CN[m[3]]}前${ACTION_VERB_CN[m[1]]}`;
    return null;
  },
  // 「3 unread notifications」→「3 条未读通知」
  (s) => {
    const m = new RegExp(`^${NUM}\\s+unread notifications?$`).exec(s);
    if (m) return `${m[1]} 条未读通知`;
    return null;
  },
  // 计数：「N commits / stars / forks / branches / tags / releases / issues / PR / contributors ...」
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(commits?)$`, 'i').exec(s);
    if (m) return `${m[1]} 次提交`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(stars?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个星标`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(forks?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个复刻`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(branches?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个分支`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(tags?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个标签`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(releases?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个版本发布`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(issues?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个议题`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(pull requests?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个拉取请求`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(contributors?)$`, 'i').exec(s);
    if (m) return `${m[1]} 位贡献者`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(followers?)$`, 'i').exec(s);
    if (m) return `${m[1]} 位关注者`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(following)$`, 'i').exec(s);
    if (m) return `${m[1]} 位正在关注`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(watchers?)$`, 'i').exec(s);
    if (m) return `${m[1]} 位关注者`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(participants?)$`, 'i').exec(s);
    if (m) return `${m[1]} 位参与者`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(comments?)$`, 'i').exec(s);
    if (m) return `${m[1]} 条评论`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(replies?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个回复`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(members?)$`, 'i').exec(s);
    if (m) return `${m[1]} 位成员`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(teams?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个团队`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(repositories?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个仓库`;
    return null;
  },
  // 凭据/预算类计数（设置页）
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(tokens?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个令牌`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(keys?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个密钥`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(OAuth apps?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个 OAuth 应用`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(GitHub Apps?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个 GitHub 应用`;
    return null;
  },
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(Account budgets?)$`, 'i').exec(s);
    if (m) return `${m[1]} 个账户预算`;
    return null;
  },
  // 账户安全：'2 verified emails configured' → '已配置 2 个已验证邮箱'
  (s) => {
    const m = new RegExp(`^${NUM}\\s+verified emails? configured$`).exec(s);
    if (m) return `已配置 ${m[1]} 个已验证邮箱`;
    return null;
  },
  // 登录方式：'1 account connected' → '已连接 1 个账户'
  (s) => {
    const m = new RegExp(`^${NUM}\\s+accounts? connected$`).exec(s);
    if (m) return `已连接 ${m[1]} 个账户`;
    return null;
  },
  // 用户主页：'Unstar owner/repo' → '取消星标 owner/repo'
  (s) => {
    const m = /^Unstar (.+)$/.exec(s);
    if (m) return `取消星标 ${m[1]}`;
    return null;
  },
  // 用户主页：'Block or report owner' → '屏蔽或举报 owner'
  (s) => {
    const m = /^Block or report (.+)$/.exec(s);
    if (m) return `屏蔽或举报 ${m[1]}`;
    return null;
  },
  // 资料页社交链接：'Link to social profile 1' → '社交主页链接 1'
  (s) => {
    const m = /^Link to social profile (\d+)$/.exec(s);
    if (m) return `社交主页链接 ${m[1]}`;
    return null;
  },
  // 主题选项：'4 (Default)' → '4（默认）'
  (s) => {
    const m = /^(\d+) \(Default\)$/.exec(s);
    if (m) return `${m[1]}（默认）`;
    return null;
  },
  // 贡献提示：'First time contributing to owner/repo?' → '第一次向 owner/repo 贡献？'
  (s) => {
    const m = /^First time contributing to (.+)\?$/.exec(s);
    if (m) return `第一次向 ${m[1]} 贡献？`;
    return null;
  },
  // 资料链接 aria-label："View owner's profile" → '查看 owner 的资料'
  (s) => {
    const m = /^View (.+)'s profile$/.exec(s);
    if (m) return `查看 ${m[1]} 的资料`;
    return null;
  },
  // 提交活动图日期 aria-label："Sunday, 10 May 2026, 0. Commits." → '2026年5月10日 星期日，0 次提交。'
  (s) => {
    const m = /^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday), (\d{1,2}) ([A-Za-z]+) (\d{4}), (\d+)\. Commits\.$/.exec(s);
    if (m && MONTH_CN[m[3]]) return `${m[4]}年${MONTH_CN[m[3]]}月${m[2]}日 ${WEEK_CN[m[1]]}，${m[5]} 次提交。`;
    return null;
  },
  // pulse 页：'Excluding merges, 1 author has pushed 4 commits to main and 4 commits to all branches.'（main/master 兼容，数字可带千分位逗号）
  (s) => {
    const m = /^Excluding merges, ([\d,]+) author(?:s)? (?:has|have) pushed ([\d,]+) commit(?:s)? to (main|master) and ([\d,]+) commit(?:s)? to all branches\.$/.exec(s);
    if (m) return `排除合并提交，${m[1]} 位作者已向 ${m[3]} 推送 ${m[2]} 次提交，向所有分支推送 ${m[4]} 次提交。`;
    return null;
  },
  // pulse 页：'On main, 9 files have changed and there have been 226 additions and 54 deletions.'（main/master 兼容，数字可带千分位逗号）
  (s) => {
    const m = /^On (main|master), ([\d,]+) file(?:s)? have changed and there have been ([\d,]+) addition(?:s)? and ([\d,]+) deletion(?:s)?\.$/.exec(s);
    if (m) return `在 ${m[1]} 分支上，${m[2]} 个文件已更改，共有 ${m[3]} 处添加和 ${m[4]} 处删除。`;
    return null;
  },
  // Actions 页：'Today at  08:45' → '今天 08:45'
  (s) => {
    const m = /^Today at (.+)$/.exec(s);
    if (m) return `今天 ${m[1]}`;
    return null;
  },
  // pulse 页：'1 release published by 1 person' → '发布 1 个版本（1 人）'
  (s) => {
    const m = /^(\d+) release(?:s)? published by (\d+) person(?:s)?$/.exec(s);
    if (m) return `发布 ${m[1]} 个版本（${m[2]} 人）`;
    return null;
  },
  // pulse 页：'1 pull request merged by 1 person' → '合并 1 个拉取请求（1 人）'
  (s) => {
    const m = /^(\d+) pull requests? merged by (\d+) person(?:s)?$/.exec(s);
    if (m) return `合并 ${m[1]} 个拉取请求（${m[2]} 人）`;
    return null;
  },
  // pulse 页：'Commits over the last year of owner/repo' → '过去一年 owner/repo 的提交'
  (s) => {
    const m = /^Commits over the last year of (.+)$/.exec(s);
    if (m) return `过去一年 ${m[1]} 的提交`;
    return null;
  },
  // 邮箱设置长句（含动态邮箱）："We'll remove your public profile email and use <noreply> when performing..."
  (s) => {
    const m = /^We'll remove your public profile email and use (.+) when performing web-based Git operations \(e\.g\. edits and merges\) and sending email on your behalf\. If you want command line Git operations to use your private email you must$/.exec(s);
    if (m) return `我们将删除你的公开资料邮箱，并在执行基于网页的 Git 操作（如编辑和合并）以及代你发送邮件时使用 ${m[1]}。如果你希望命令行 Git 操作使用你的私有邮箱，则必须`;
    return null;
  },
  // 邮箱设置长句（含动态邮箱）：'Emails you can use to sign in... All web-based Git operations will be linked to <noreply>.'
  (s) => {
    const m = /^Emails you can use to sign in to your account\. Your emails will not be used as the 'from' address for web-based Git operations, e\.g\. edits and merges\. All web-based Git operations will be linked to (.+)\.$/.exec(s);
    if (m) return `可用于登录账户的邮箱。你的邮箱不会用作基于网页的 Git 操作（如编辑和合并）的发件地址。所有基于网页的 Git 操作都将关联到 ${m[1]}。`;
    return null;
  },
  // 账单页：'Gross metered usage for August 1 - August 30, 2026.'（含英文月份 → 中文）
  (s) => {
    const m = /^Gross metered usage for ([A-Za-z]+) (\d{1,2}) - ([A-Za-z]+) (\d{1,2}), (\d{4})\.$/.exec(s);
    if (m && MONTH_CN[m[1]] && MONTH_CN[m[3]]) {
      return `计量用量总额（${MONTH_CN[m[1]]}月${m[2]}日 - ${MONTH_CN[m[3]]}月${m[4]}日，${m[5]}）`;
    }
    return null;
  },
  (s) => {
    const m = /^Included usage discounts for ([A-Za-z]+) (\d{1,2}) - ([A-Za-z]+) (\d{1,2}), (\d{4})\.$/.exec(s);
    if (m && MONTH_CN[m[1]] && MONTH_CN[m[3]]) {
      return `包含用量折扣（${MONTH_CN[m[1]]}月${m[2]}日 - ${MONTH_CN[m[3]]}月${m[4]}日，${m[5]}）`;
    }
    return null;
  },
  // 账单页：'0 GB used / 1 GB included' / '112 min used / 2,000 min included'
  (s) => {
    const m = /^([\d.]+) ([\w]+) used \/ ([\d.,]+) ([\w]+) included$/.exec(s);
    if (m) return `已用 ${m[1]} ${m[2]} / 包含 ${m[3]} ${m[4]}`;
    return null;
  },
  // 账单页：'Included usage limits reset in 15 days.'
  (s) => {
    const m = /^Included usage limits reset in (\d+) days?\.$/.exec(s);
    if (m) return `包含用量限额将在 ${m[1]} 天后重置。`;
    return null;
  },
  // 账单页：'Cost calculated based on 0 Spark AI credits that exceed...'
  (s) => {
    const m = /^Cost calculated based on ([\d,]+) Spark AI credits? that exceed the AI credits usage included with your Copilot licenses\.$/.exec(s);
    if (m) return `基于超出你的 Copilot 许可证所含 AI 积分用量的 ${m[1]} 个 Spark AI 积分计算。`;
    return null;
  },
  // 账单页：'Cost calculated based on additional 0 token units'
  (s) => {
    const m = /^Cost calculated based on additional ([\d,]+) token units?$/.exec(s);
    if (m) return `基于额外的 ${m[1]} 个令牌单位计算。`;
    return null;
  },
  // 会话页：'Seen in JP, SG' → '曾在 JP、SG'
  (s) => {
    const m = /^Seen in (.+)$/.exec(s);
    if (m) return `曾在 ${m[1]}`;
    return null;
  },
  // 邮箱页：'Manage email a@b.com' → '管理邮箱 a@b.com'
  (s) => {
    const m = /^Manage email (.+)$/.exec(s);
    if (m) return `管理邮箱 ${m[1]}`;
    return null;
  },
  // 邮箱页：'Delete a@b.com' → '删除 a@b.com'
  (s) => {
    const m = /^Delete (.+@.+)$/.exec(s);
    if (m) return `删除 ${m[1]}`;
    return null;
  },
  // 会话页：'View details of session from Tokyo last accessed August 17, 2026'
  (s) => {
    const m = /^View details of session from (.+) last accessed (.+)$/.exec(s);
    if (m) return `查看来自 ${m[1]} 的会话详情，上次访问于 ${m[2]}`;
    return null;
  },
  // admin 导出：'Exports will be available for 7 days.'（兼容天数变体与可选前导句点/空白）
  (s) => {
    const m = /^\.?\s*Exports? will be available for (\d+) days?\.$/.exec(s);
    if (m) return `导出文件将在 ${m[1]} 天内可用。`;
    return null;
  },
  // admin 继任者长句（@owner 在文本内，无 strong 拆分）：'By clicking "Add Successor" below, I acknowledge that I am the owner of the @owner account, and am authorizing...my GitHub Successor,'
  (s) => {
    const m = /^By clicking "Add Successor" below, I acknowledge that I am the owner of the (.+) account, and am authorizing GitHub to transfer content within that account to my GitHub Successor,$/.exec(s);
    if (m) return `点击下方"添加继任者"，即表示我确认自己是 ${m[1]} 账户的所有者，并授权 GitHub 将该账户中的内容转移给我的 GitHub 继任者，`;
    return null;
  },
  // 仓库设置：'0 collaborators' → '0 个协作者'
  (s) => {
    const m = /^(\d+) collaborators?$/.exec(s);
    if (m) return `${m[1]} 个协作者`;
    return null;
  },
  // Copilot 设置：'0% used' → '已使用 0%'
  (s) => {
    const m = /^([\d.]+)% used$/.exec(s);
    if (m) return `已使用 ${m[1]}%`;
    return null;
  },
  // Codespaces 设置：'Selected 0 repositories.' → '已选择 0 个仓库。'
  (s) => {
    const m = /^Selected ([\d,]+) repositories?\.$/.exec(s);
    if (m) return `已选择 ${m[1]} 个仓库。`;
    return null;
  },
  // Copilot 入门步骤：'0/3 complete' → '已完成 0/3'
  (s) => {
    const m = /^(\d+)\/(\d+) complete$/.exec(s);
    if (m) return `已完成 ${m[1]}/${m[2]}`;
    return null;
  },
  // Copilot 设置生效提示：'It can take up to 30 minutes for the changes to take effect. Restart your code editor for the changes to take effect immediately.'
  (s) => {
    const m = /^It can take up to (\d+) minutes? for the changes to take effect\. Restart your code editor for the changes to take effect immediately\.$/.exec(s);
    if (m) return `更改最多可能需要 ${m[1]} 分钟才能生效。重启代码编辑器可立即生效。`;
    return null;
  },
  // Packages 设置：'No recoverable packages were found for owner.' → '未找到 owner 可恢复的软件包。'
  (s) => {
    const m = /^No recoverable packages were found for (.+)\.$/.exec(s);
    if (m) return `未找到 ${m[1]} 可恢复的软件包。`;
    return null;
  },
  // 仓库页星标提示：'1 user starred this repository' → '1 个用户给此仓库点了星标'
  (s) => {
    const m = /^(\d+) users? starred this repository$/.exec(s);
    if (m) return `${m[1]} 个用户给此仓库点了星标`;
    return null;
  },
  // 图表 aria-label：'Bar chart with 2 bars.' → '包含 2 个条形的条形图'
  (s) => {
    const m = /^Bar chart with (\d+) bars?\.$/.exec(s);
    if (m) return `包含 ${m[1]} 个条形的条形图`;
    return null;
  },
  // 设置-仓库页 commit comments 后段（链接拆分，前导空白可变）：
  // 'are enabled or disabled by default for repositories you own. Individual repositories can override this default. Existing commit comments are not affected by this setting and will remain viewable, editable, and deletable.'
  (s) => {
    const m = /^\s*are enabled or disabled by default for repositories you own\. Individual repositories can override this default\. Existing commit comments are not affected by this setting and will remain viewable, editable, and deletable\.$/.exec(s);
    if (m) return '默认对你拥有的仓库启用还是禁用。单个仓库可以覆盖此默认值。现有的提交评论不受此设置影响，将继续保持可见、可编辑和可删除。';
    return null;
  },
  // 提交图 aria-label：'commits by owner' → '由 owner 提交'
  (s) => {
    const m = /^commits by (.+)$/.exec(s);
    if (m) return `由 ${m[1]} 提交`;
    return null;
  },
  // 预算页 aria-label：'View actions for CustomerResource owner's budget' → '查看 CustomerResource owner 的预算操作'
  (s) => {
    const m = /^View actions for CustomerResource (.+)'s budget$/.exec(s);
    if (m) return `查看 CustomerResource ${m[1]} 的预算操作`;
    return null;
  },
  // 屏蔽用户字符计数：'250 characters remaining.' → '剩余 250 个字符。'
  (s) => {
    const m = /^(\d+) characters? remaining\.$/.exec(s);
    if (m) return `剩余 ${m[1]} 个字符。`;
    return null;
  },
  // 安全分析确认弹窗（动态账户名）：
  // "You're about to disable private vulnerability reporting on all public repositories in owner."
  (s) => {
    const m = /^You're about to (disable|enable) (.+?) on all public repositories in (.+)\.$/.exec(s);
    if (m) {
      // 功能名先走词条（弹窗里是小写，标题词条是大写，双查）
      const raw = m[2];
      const cap = raw.charAt(0).toUpperCase() + raw.slice(1);
      const name = lookup(raw) ?? lookup(cap) ?? raw;
      return `你即将在 ${m[3]} 的所有公共仓库中${m[1] === 'disable' ? '禁用' : '启用'} ${name}。`;
    }
    return null;
  },
  // issue/PR 时间线日期：'on Nov 19, 2015' → '2015年11月19日'
  (s) => {
    const m = /^on ([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
    if (m && MONTH_CN[m[1]]) return `${m[3]}年${MONTH_CN[m[1]]}月${m[2]}日`;
    return null;
  },
  // issue 时间线：'This user has previously committed to the vscode repository.'（动态仓库名）
  (s) => {
    const m = /^This user has previously committed to the (.+) repository\.$/.exec(s);
    if (m) return `此用户之前曾向 ${m[1]} 仓库提交过。`;
    return null;
  },
  // 用户名资料链接 aria-label：'@chrisdias's profile' → '@chrisdias 的资料'
  (s) => {
    const m = /^@(.+)'s profile$/.exec(s);
    if (m) return `@${m[1]} 的资料`;
    return null;
  },
  // 仓库归属提示 aria-label：'You own owner/repo and are not a member of any organization'
  (s) => {
    const m = /^You own (.+) and are not a member of any organization$/.exec(s);
    if (m) return `你拥有 ${m[1]} 且不属于任何组织`;
    return null;
  },
  // 主题页 title：'Topic: awesome-list' → '主题：awesome-list'
  (s) => {
    const m = /^Topic: (.+)$/.exec(s);
    if (m) return `主题：${m[1]}`;
    return null;
  },
  // Pulse 页标题：'Insights: owner/repo' → '洞察：owner/repo'
  (s) => {
    const m = /^Insights: (.+)$/.exec(s);
    if (m) return `洞察：${m[1]}`;
    return null;
  },
  // 搜索计数：'19.4M results' → '19.4M 条结果'
  (s) => {
    const m = /^([\d.]+[KMB]?) results$/.exec(s);
    if (m) return `${m[1]} 条结果`;
    return null;
  },
  // 搜索分页 aria：'Page 7...' → '第 7 页...'
  (s) => {
    const m = /^Page (\d+)\.\.\.$/.exec(s);
    if (m) return `第 ${m[1]} 页...`;
    return null;
  },
  // 文件树 aria：'README.md, (File)' / 'src, (Directory)' → 'README.md（文件）'
  (s) => {
    const m = /^(.+), \((Directory|File)\)$/.exec(s);
    if (m) return `${m[1]}（${m[2] === 'Directory' ? '目录' : '文件'}）`;
    return null;
  },
  // 提交列表 aria：'Copy full SHA for 176a773' → '复制完整 SHA：176a773'
  (s) => {
    const m = /^Copy full SHA for ([0-9a-f]+)$/.exec(s);
    if (m) return `复制完整 SHA：${m[1]}`;
    return null;
  },
  // blob 统计：'77 lines (48 loc) · 6.67 KB' → '77 行（48 行代码）· 6.67 KB'
  (s) => {
    const m = /^(\d+) lines \((\d+) loc\) · ([\d.]+ KB)$/.exec(s);
    if (m) return `${m[1]} 行（${m[2]} 行代码）· ${m[3]}`;
    return null;
  },
  // Actions 运行计数：'8 workflow runs' → '8 个工作流运行'
  (s) => {
    const m = /^(\d+) workflow runs?$/.exec(s);
    if (m) return `${m[1]} 个工作流运行`;
    return null;
  },
  // 贡献图月份轴：'Jun '26' → '2026年6月'
  (s) => {
    const m = /^([A-Z][a-z]{2}) '(\d{2})$/.exec(s);
    if (m && MONTH_CN[m[1]]) return `20${m[2]}年${MONTH_CN[m[1]]}月`;
    return null;
  },
  // 组织话题计数 aria：'Show 2 more topics' → '再显示 2 个主题'
  (s) => {
    const m = /^Show (\d+) more topics$/.exec(s);
    if (m) return `再显示 ${m[1]} 个主题`;
    return null;
  },
  // pulse 页列表：'3 Active pull requests' / '0 Merged pull requests' / '2 New issues'
  (s) => {
    const m = /^(\d+)\s+(Merged pull requests|Open pull requests|New issues|Closed issues|Active pull requests|Active issues)$/.exec(s);
    if (m) {
      const map: Record<string, string> = {
        'Merged pull requests': '已合并的拉取请求',
        'Open pull requests': '待处理的拉取请求',
        'New issues': '新议题',
        'Closed issues': '已关闭的议题',
        'Active pull requests': '活跃的拉取请求',
        'Active issues': '活跃的议题',
      };
      return `${m[1]} 个${map[m[2]]}`;
    }
    return null;
  },
  // Actions 指标页：'Showing data from 2026/8/1 to 21 分钟前' → '显示数据从 2026/8/1 到 21 分钟前'
  (s) => {
    const m = /^Showing data from (.+) to (.+)$/.exec(s);
    if (m) return `显示数据从 ${m[1]} 到 ${m[2]}`;
    return null;
  },
  // Topics 主题页：'Add a description, image, and links to the dsh-plugin topic page so that developers can more easily learn about it.'
  (s) => {
    const m = /^Add a description, image, and links to the (.+) topic page so that developers can more easily learn about it\.$/.exec(s);
    if (m) return `为主题 ${m[1]} 添加描述、图片和链接，方便开发者更轻松地了解它。`;
    return null;
  },
  // Topics 主题页：'To associate your repository with the dsh-plugin topic, visit your repo's landing page and select "manage topics."'
  (s) => {
    const m = /^To associate your repository with the (.+) topic, visit your repo's landing page and select "manage topics\."$/.exec(s);
    if (m) return `要将你的仓库与主题 ${m[1]} 关联，请访问仓库主页并选择"管理主题"。`;
    return null;
  },
  // Topics 主题页：'Here are 1,408 public repositories matching this topic...'
  (s) => {
    const m = /^Here are ([\d,]+) public repositories? matching this topic\.\.\.$/.exec(s);
    if (m) return `这里有 ${m[1]} 个匹配此主题的公共仓库...`;
    return null;
  },
  // 讨论帖：'Upvote: 1' → '赞同：1'
  (s) => {
    const m = /^Upvote: ([\d,]+)$/.exec(s);
    if (m) return `赞同：${m[1]}`;
    return null;
  },
  // 讨论帖：'Write a reply: 用户名, 时间' → '撰写回复：用户名, 时间'
  (s) => {
    const m = /^Write a reply: (.+)$/.exec(s);
    if (m) return `撰写回复：${m[1]}`;
    return null;
  },
  // 讨论帖：'react with rocket' → '用火箭回应'
  (s) => {
    const m = /^react with (.+)$/.exec(s);
    if (m) return `用 ${EMOJI_CN[m[1]] ?? m[1]} 回应`;
    return null;
  },
  // 讨论帖：'sakikoTGW reacted with rocket emoji' → 'sakikoTGW 用火箭表情回应'
  (s) => {
    const m = /^(.+) reacted with (.+) emoji$/.exec(s);
    if (m) return `${m[1]} 用 ${EMOJI_CN[m[2]] ?? m[2]} 表情回应`;
    return null;
  },
  // 讨论帖：'1 reaction' → '1 个回应'
  (s) => {
    const m = /^(\d+) reactions?$/.exec(s);
    if (m) return `${m[1]} 个回应`;
    return null;
  },
  // pulse 加粗拆分碎片：'1 author' → '1 位作者'
  (s) => {
    const m = /^(\d+) author(?:s)?$/.exec(s);
    if (m) return `${m[1]} 位作者`;
    return null;
  },
  // pulse 加粗拆分碎片：'4 commits to main and 4 commits to all branches.'
  (s) => {
    const m = /^(\d+) commit(?:s)? to main and (\d+) commit(?:s)? to all branches\.$/.exec(s);
    if (m) return `${m[1]} 次提交到 main，${m[2]} 次提交到所有分支`;
    return null;
  },
  // pulse 加粗拆分碎片：'9 files have changed and there have been '
  (s) => {
    const m = /^(\d+) file(?:s)? have changed and there have been $/.exec(s);
    if (m) return `${m[1]} 个文件已更改，共有 `;
    return null;
  },
  // pulse 加粗拆分碎片：'226 additions' / '54 deletions'
  (s) => {
    const m = /^(\d+) additions?$/.exec(s);
    if (m) return `${m[1]} 处添加`;
    return null;
  },
  (s) => {
    const m = /^(\d+) deletions?$/.exec(s);
    if (m) return `${m[1]} 处删除`;
    return null;
  },
  // 筛选周期：'6 months' / '2 years'
  (s) => {
    const m = /^(\d+) months?$/.exec(s);
    if (m) return `${m[1]} 个月`;
    return null;
  },
  (s) => {
    const m = /^(\d+) years?$/.exec(s);
    if (m) return `${m[1]} 年`;
    return null;
  },
  // 贡献图日期（含月份转换）：「No contributions on August 10th.」「7 contributions on July 26th.」
  (s) => {
    const m = /^No contributions? on ([A-Za-z]+) (\d{1,2})(?:st|nd|rd|th)?\.$/.exec(s);
    if (m && MONTH_CN[m[1]]) return `${MONTH_CN[m[1]]}月${m[2]}日无贡献`;
    return null;
  },
  (s) => {
    const m = /^(\d+) contributions? on ([A-Za-z]+) (\d{1,2})(?:st|nd|rd|th)?\.$/.exec(s);
    if (m && MONTH_CN[m[2]]) return `${m[1]} 次贡献于 ${MONTH_CN[m[2]]}月${m[3]}日`;
    return null;
  },
  // issues / PR 列表 tab：「23 Open」→「23 个待处理」「45 Closed」→「45 个已关闭」
  (s) => {
    const m = new RegExp(`^${NUM}\\s+(Open|Closed)$`).exec(s);
    if (m) return `${m[1]} 个${m[2] === 'Open' ? '待处理' : '已关闭'}`;
    return null;
  },
  // sudo 模式验证码（邮箱动态，保留原文）：
  // 「Enter the verification code sent to n***@163.com. If it doesn't appear within a few minutes, check your spam folder.」
  (s) => {
    const m = /^Enter the verification code sent to (.+)\. If it doesn't appear within a few minutes, check your spam folder\.$/.exec(s);
    if (m) return `输入发送到 ${m[1]} 的验证码。如果几分钟内没有收到，请检查垃圾邮件文件夹。`;
    return null;
  },
  // sudo 模式验证码（只有前半句时）
  (s) => {
    const m = /^Enter the verification code sent to (.+)\.$/.exec(s);
    if (m) return `输入发送到 ${m[1]} 的验证码。`;
    return null;
  },
  // 删除仓库确认（带引号整句）：'To confirm, type "owner/repo" in the box below'
  (s) => {
    const m = /^To confirm, type "(.+)" in the box below$/.exec(s);
    if (m) return `要确认，请在下方输入框中输入 "${m[1]}"`;
    return null;
  },
  // 删除仓库确认（无引号整句）
  (s) => {
    const m = /^To confirm, type (.+) in the box below$/.exec(s);
    if (m) return `要确认，请在下方输入框中输入 ${m[1]}`;
    return null;
  },
  // 仓库设置页弹窗标题（动态仓库名）：'Make ismoss/github-zh-i18n private' / 'Delete ismoss/github-zh-i18n'
  (s) => {
    const m = /^(Make|Delete) ([\w.-]+\/[\w.-]+)( private)?$/.exec(s);
    if (m) {
      const suffix = m[3] ? ' 设为私有' : '';
      return `${m[1] === 'Make' ? '将' : '删除'} ${m[2]}${suffix}`;
    }
    return null;
  },
  // 仓库设置页分支保护计数（动态数字）：'0 branch protection rules' → '0 条分支保护规则'
  (s) => {
    const m = /^(\d+) branch protection rules?$/.exec(s);
    if (m) return `${m[1]} 条分支保护规则`;
    return null;
  },
  // 精细化令牌过期选项（含动态日期）：'30 days (Nov 19, 2026)' → '30 天（2026年11月19日）'
  (s) => {
    const m = /^(\d+) days? \(([A-Za-z]+) (\d{1,2}), (\d{4})\)$/.exec(s);
    if (m && MONTH_CN[m[2]]) return `${m[1]} 天（${m[4]}年${MONTH_CN[m[2]]}月${m[3]}日）`;
    return null;
  },
  // 星期 + 完整日期：'Thursday, November 19, 2026' → '2026年11月19日 星期四'
  (s) => {
    const m = /^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday), ([A-Za-z]+) (\d{1,2}), (\d{4})$/.exec(s);
    if (m && MONTH_CN[m[2]]) return `${m[4]}年${MONTH_CN[m[2]]}月${m[3]}日 ${WEEK_CN[m[1]]}`;
    return null;
  },
  // 精细化令牌页企业策略提示（组织名/天数动态，个人账户下组织名可能为空）：
  // 'The ismoss requires a maximum lifetime of 0 days for fine-grained personal access tokens. As an enterprise administrator you are exempted from this requirement.'
  (s) => {
    const m = /^The (.*?)requires a maximum lifetime of (\d+) days? for fine-grained personal access tokens\. As an enterprise administrator you are exempted from this requirement\.$/.exec(s);
    if (m) {
      const owner = m[1].trim() || '该组织';
      return `${owner}要求精细化个人访问令牌的最长有效期为 ${m[2]} 天。作为企业管理员，你不受此要求限制。`;
    }
    return null;
  },
  // 令牌「最近使用」相对时间（周/月/年等任意粒度，末尾可能带分隔点）：
  // 'Last used within the last week' / 'Last used within the last 3 months •'
  (s) => {
    const m = /^Last used within the last (.+?)(?:\s*•)?$/.exec(s);
    if (!m) return null;
    const period = periodCn(m[1]);
    if (!period) return null;
    // 带数字时中英之间留空格（与词库既有风格一致）：'最近 3 个月内使用过' / '最近一周内使用过'
    return /^\d/.test(m[1]) ? `最近 ${period}内使用过` : `最近${period}内使用过`;
  },
  // 令牌最近使用时点：'Last used on Nov 19, 2026' → '上次使用于 2026年11月19日'
  (s) => {
    const m = /^Last used on ([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
    if (m && MONTH_CN[m[1]]) return `上次使用于 ${m[3]}年${MONTH_CN[m[1]]}月${m[2]}日`;
    return null;
  },
  // GitHub App 事件说明链接（事件名动态，先查词条再拼）：
  // 'Learn more about the Issue comment event' → '进一步了解议题评论事件'
  (s) => {
    const m = /^Learn more about the (.+) event$/.exec(s);
    if (m) {
      const name = lookup(m[1]) ?? m[1];
      // 事件名含拉丁字母（Team / Copilot Chat 等）时两侧留空格
      return /[A-Za-z]/.test(name) ? `进一步了解 ${name} 事件` : `进一步了解${name}事件`;
    }
    return null;
  },
  // 应用授权页：'You have granted 5 applications access to your account.'
  (s) => {
    const m = /^You have granted ([\d,]+) applications? access to your account\.$/.exec(s);
    if (m) return `你已授权 ${m[1]} 个应用访问你的账户。`;
    return null;
  },
  (s) => {
    const m = /^You have not granted any applications access to your account\.$/.exec(s);
    if (m) return '你尚未授权任何应用访问你的账户。';
    return null;
  },
  // 应用安装范围：'Only allow this GitHub App to be installed on the @ismoss account.'
  (s) => {
    const m = /^Only allow this GitHub App to be installed on the (@.+) account\.$/.exec(s);
    if (m) return `仅允许此 GitHub 应用安装在 ${m[1]} 账户上。`;
    return null;
  },
  // 仓库设置页隐藏标题（sr-only）：'Settings: owner/repo' → '设置：owner/repo'
  (s) => {
    const m = /^Settings: ([\w.-]+\/[\w.-]+)$/.exec(s);
    if (m) return `设置：${m[1]}`;
    return null;
  },
  // 设置页 <title>：'Settings · Branches · owner/repo' → '设置 · 分支 · owner/repo'
  (s) => {
    const m = /^Settings · (.+?) · ([\w.-]+\/[\w.-]+)$/.exec(s);
    if (m) {
      // 标题里的子页名首字母大写（'Copilot Code review'），词条是小写句首式，兜底降级再查一次
      const raw = m[1];
      const softer = raw.replace(/^([A-Z])(.*)$/, (_x, a: string, b: string) => a + b.toLowerCase());
      const name = lookup(raw) ?? lookup(softer) ?? raw;
      return `设置 · ${name} · ${m[2]}`;
    }
    return null;
  },
  // 设置页 <title>：'Actions settings · owner/repo' → 'Actions 设置 · owner/repo'
  (s) => {
    const m = /^Actions settings · ([\w.-]+\/[\w.-]+)$/.exec(s);
    if (m) return `Actions 设置 · ${m[1]}`;
    return null;
  },
  // 复刻弹窗标题：'Fork owner/repo' → '复刻 owner/repo'
  (s) => {
    const m = /^Fork ([\w.-]+\/[\w.-]+)$/.exec(s);
    if (m) return `复刻 ${m[1]}`;
    return null;
  },
  // 分支列表：'had recent pushes 57 seconds ago' → '最近推送于 57 秒前'
  (s) => {
    const m = /^had recent pushes (\d+)\s+(seconds?|minutes?|hours?|days?|weeks?|months?|years?) ago$/.exec(s);
    if (m) {
      const unit = TIME_UNIT_CN[m[2]];
      if (unit) return `最近推送于 ${m[1]} ${unit}前`;
    }
    return null;
  },
  // Actions 策略页（允许/阻止列表，owner 为动态账户名）：
  // 'Allow ismoss actions and reusable workflows' → '允许 ismoss 的 Actions 和可复用工作流'
  (s) => {
    const m = /^Allow ([\w.-]+) actions and reusable workflows$/.exec(s);
    if (m) return `允许 ${m[1]} 的 Actions 和可复用工作流`;
    return null;
  },
  // 'Any action or reusable workflow defined in a repository within ismoss can be used.'
  (s) => {
    const m = /^Any action or reusable workflow defined in a repository within ([\w.-]+) can be used\.$/.exec(s);
    if (m) return `可以使用 ${m[1]} 中任意仓库定义的所有 Actions 和可复用工作流。`;
    return null;
  },
  // 'Allow ismoss, and select non-ismoss, actions and reusable workflows'
  (s) => {
    const m = /^Allow ([\w.-]+), and select non-([\w.-]+), actions and reusable workflows$/.exec(s);
    if (m) return `允许 ${m[1]} 的 Actions 和可复用工作流，并选择非 ${m[2]} 的`;
    return null;
  },
  // 'Any action or reusable workflow that matches the specified criteria, plus those defined in a repository within ismoss, can be used.'
  (s) => {
    const m = /^Any action or reusable workflow that matches the specified criteria, plus those defined in a repository within ([\w.-]+), can be used\.$/.exec(s);
    if (m) return `可以使用符合指定条件的所有 Actions 和可复用工作流，以及 ${m[1]} 中任意仓库定义的。`;
    return null;
  },
  // OIDC 不可变主体声明（生效日期动态）：
  // 'Automatically enabled for this repository. Repositories created or renamed after July 15, 2026 use immutable subject claims.'
  (s) => {
    const m = /^Automatically enabled for this repository\. Repositories created or renamed after ([A-Z][a-z]+) (\d{1,2}), (\d{4}) use immutable subject claims\.$/.exec(s);
    if (m && MONTH_CN[m[1]]) return `已为此仓库自动启用。在 ${m[3]}年${MONTH_CN[m[1]]}月${m[2]}日 之后创建或重命名的仓库使用不可变主体声明。`;
    return null;
  },
  // Actions 策略页公告（含行内代码 pull_request_target，日期动态）：
  // 'On December 2, 2026, GitHub will restrict' → '自 2026年12月2日 起，GitHub 将限制'
  (s) => {
    const m = /^On ([A-Z][a-z]+) (\d{1,2}), (\d{4}), GitHub will restrict$/.exec(s);
    if (m && MONTH_CN[m[1]]) return `自 ${m[3]}年${MONTH_CN[m[1]]}月${m[2]}日 起，GitHub 将限制`;
    return null;
  },
  // ===== 2026-10-24 晚：read-pico-reader 仓库设置页扫查（37 页）补充 =====
  // 'Forked from wegooo-cell/read-pico-reader' → '复刻自 …'
  (s) => {
    const m = /^Forked from ([\w.-]+\/[\w.-]+)$/.exec(s);
    if (m) return `复刻自 ${m[1]}`;
    return null;
  },
  // 'Add people to ismoss/read-pico-reader' → '为 … 添加成员'
  (s) => {
    const m = /^Add people to ([\w.-]+\/[\w.-]+)$/.exec(s);
    if (m) return `为 ${m[1]} 添加成员`;
    return null;
  },
  // 'Unpublish ismoss/read-pico-reader' → '取消发布 …'
  (s) => {
    const m = /^Unpublish ([\w.-]+\/[\w.-]+)$/.exec(s);
    if (m) return `取消发布 ${m[1]}`;
    return null;
  },
  // 默认分支选择（fragment 以 'instead of' 结尾，仓库名动态）
  (s) => {
    const m = /^Choose another branch to use as the default branch of ([\w.-]+\/[\w.-]+) instead of$/.exec(s);
    if (m) return `另选一个分支作为 ${m[1]} 的默认分支，以替代`;
    return null;
  },
  // '5 of 5 languages selected' → '已选 5/5 种语言'
  (s) => {
    const m = /^(\d+) of (\d+) languages selected$/.exec(s);
    if (m) return `已选 ${m[1]}/${m[2]} 种语言`;
    return null;
  },
  // '1 protection rule' / '3 protection rules' → 'N 条保护规则'
  (s) => {
    const m = /^(\d+) protection rules?$/.exec(s);
    if (m) return `${m[1]} 条保护规则`;
    return null;
  },
];

/**
 * 归一化：GitHub 文案存在多种 Unicode 变体与排版空白，统一后再查词库，保证都能命中：
 * - 弯撇号（’ U+2019）→ 直撇号（'）
 * - 不换行空格（\u00A0）→ 普通空格（版权行等场景常见）
 * - en/em dash（– —）→ 连字符（-）
 * - 弯引号（“ ”）→ 直引号（"）
 * - 连续空白（换行 + 缩进）→ 单个空格：GitHub 很多说明文本节点是
 *   「句子 + \n + 缩进 + 句子」，词库 key 用干净单空格版本即可精确匹配
 * - 首尾空白 → 去掉（trim）：链接/加粗拆分后节点可能带前导或尾随空格
 *   （如 ' are enabled...'、'With Copilot...iterate. '），词库 key 已统一为
 *   trim 版本，节点无论带不带首尾空格都能命中（2026-08-17 根治，勿再加带空格的 key）
 */
function normalize(s: string): string {
  return s
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\u00A0/g, ' ')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * 查词库/规则，返回翻译文本；不翻译（含映射到自身的术语）返回 null。
 * 注意：传入的应是 trim 后的纯文本。
 */
export function lookup(trimmed: string): string | null {
  const text = normalize(trimmed);
  const exact = DICT[text];
  if (exact !== undefined) {
    return exact === text ? null : exact;
  }
  for (const rule of RULES) {
    const r = rule(text);
    if (r !== null) return r;
  }
  return null;
}

/** 该词条是否已在词典中（含「映射到自身」的保留术语，如 Java） */
export function isKnownTerm(trimmed: string): boolean {
  return DICT[normalize(trimmed)] !== undefined;
}

/**
 * 轻量上下文规则（语义分层的渐进版）：
 * 同一英文在不同 UI 语境下译法不同，按父元素选择器区分。
 * 当前场景：issues/PR 列表 tab 的 "Open" 是「待处理」状态，不是动词「打开」。
 */
function contextual(trimmed: string, parent: Element | null): string | null {
  if (!parent) return null;
  if (trimmed === 'Open' && parent.closest('.subnav-item, [data-hotkey="o"], [data-hotkey="p"]')) {
    return '待处理';
  }
  return null;
}

/** 翻译单个文本节点：保留首尾空白，仅替换中间内容 */
export function translateTextNode(node: Text): boolean {
  const raw = node.nodeValue ?? '';
  const trimmed = raw.trim();
  if (!trimmed) return false;
  // 记录「候选文本」供覆盖率统计（safe 过滤由调用方完成）
  collectAll(trimmed);
  const translated = contextual(trimmed, node.parentElement) ?? lookup(trimmed);
  if (translated === null) {
    // 词库没有且不是「保留术语」→ 记录给收集器（供后续批量补词条）
    if (!isKnownTerm(trimmed)) {
      const parent = node.parentElement;
      record(trimmed, {
        url: typeof location !== 'undefined' ? location.pathname + location.search : '',
        tag: parent ? parent.tagName : '',
        cls: parent && typeof parent.className === 'string' ? parent.className : '',
      });
    }
    return false;
  }
  if (translated === trimmed) return false;
  // 保留首尾空白（GitHub 的文本节点常有缩进/分隔空白）
  const lead = raw.length - raw.trimStart().length;
  const tail = raw.length - raw.trimEnd().length;
  node.nodeValue = raw.slice(0, lead) + translated + raw.slice(raw.length - tail);
  return true;
}
