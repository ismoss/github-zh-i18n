// ==UserScript==
// @name         GitHub 界面汉化
// @name:zh-CN   GitHub 界面汉化
// @namespace    github-zh-i18n
// @version      2026.10.20.1708
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
 * github-zh-i18n v2026.10.20.1708
 * 纯本地词库汉化 GitHub 界面，零网络依赖。
 * 源码: workspace/github-zh-i18n/src
 * 构建: node build.mjs
 */

"use strict";
(() => {
  // src/locales/zh-CN.json
  var zh_CN_default = {
    Dashboard: "\u9996\u9875",
    Home: "\u9996\u9875",
    Explore: "\u63A2\u7D22",
    Marketplace: "\u5E94\u7528\u5E02\u573A",
    Pricing: "\u5B9A\u4EF7",
    Help: "\u5E2E\u52A9",
    Documentation: "\u6587\u6863",
    Community: "\u793E\u533A",
    Search: "\u641C\u7D22",
    "Search or jump to...": "\u641C\u7D22\u6216\u8DF3\u8F6C...",
    "Search GitHub": "\u641C\u7D22 GitHub",
    "Search all of GitHub": "\u641C\u7D22\u6574\u4E2A GitHub",
    "Search this repository": "\u641C\u7D22\u6B64\u4ED3\u5E93",
    "Type to search": "\u8F93\u5165\u4EE5\u641C\u7D22",
    Notifications: "\u901A\u77E5",
    Inbox: "\u6536\u4EF6\u7BB1",
    Saved: "\u5DF2\u4FDD\u5B58",
    Muted: "\u5DF2\u9759\u97F3",
    "Mark as read": "\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
    "Mark as unread": "\u6807\u8BB0\u4E3A\u672A\u8BFB",
    "Mark as done": "\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210",
    "Mark as saved": "\u6807\u8BB0\u4E3A\u5DF2\u4FDD\u5B58",
    "Mark all as read": "\u5168\u90E8\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
    "Mute conversation": "\u9759\u97F3\u5BF9\u8BDD",
    "Unmute conversation": "\u53D6\u6D88\u9759\u97F3",
    Subscribe: "\u8BA2\u9605",
    Unsubscribe: "\u53D6\u6D88\u8BA2\u9605",
    Customize: "\u81EA\u5B9A\u4E49",
    "Select all": "\u5168\u9009",
    Deselect: "\u53D6\u6D88\u9009\u62E9",
    Apply: "\u5E94\u7528",
    Reset: "\u91CD\u7F6E",
    "Your subscriptions": "\u4F60\u7684\u8BA2\u9605",
    "Your thread": "\u4F60\u7684\u4F1A\u8BDD",
    "Assigned to you": "\u6307\u6D3E\u7ED9\u4F60",
    "Mentioned to you": "\u63D0\u53CA\u4F60",
    "Review requested": "\u5DF2\u8BF7\u6C42\u4F60\u5BA1\u67E5",
    "Review requests": "\u5BA1\u67E5\u8BF7\u6C42",
    "Involves you": "\u6D89\u53CA\u4F60",
    Reason: "\u539F\u56E0",
    Type: "\u7C7B\u578B",
    Focus: "\u805A\u7126",
    Focused: "\u5DF2\u805A\u7126",
    Unfocused: "\u672A\u805A\u7126",
    Everything: "\u6240\u6709\u5185\u5BB9",
    "All caught up": "\u5DF2\u5168\u90E8\u5904\u7406\u5B8C",
    "You're all caught up": "\u4F60\u5DF2\u5168\u90E8\u5904\u7406\u5B8C",
    "All done": "\u5168\u90E8\u5B8C\u6210",
    "No notifications": "\u65E0\u901A\u77E5",
    "No more notifications": "\u6CA1\u6709\u66F4\u591A\u901A\u77E5",
    "You don't have any notifications yet": "\u4F60\u8FD8\u6CA1\u6709\u4EFB\u4F55\u901A\u77E5",
    "It's all been read": "\u90FD\u5DF2\u8BFB\u5B8C",
    "Loading more notifications": "\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u901A\u77E5",
    "Notification settings": "\u901A\u77E5\u8BBE\u7F6E",
    "Your profile": "\u4F60\u7684\u4E2A\u4EBA\u8D44\u6599",
    "Your repositories": "\u4F60\u7684\u4ED3\u5E93",
    "Your projects": "\u4F60\u7684\u9879\u76EE",
    "Your stars": "\u4F60\u7684\u661F\u6807",
    "Your gists": "\u4F60\u7684\u4EE3\u7801\u7247\u6BB5",
    "Your organizations": "\u4F60\u7684\u7EC4\u7EC7",
    "Your enterprises": "\u4F60\u7684\u4F01\u4E1A",
    "Feature preview": "\u529F\u80FD\u9884\u89C8",
    "Sign out": "\u9000\u51FA\u767B\u5F55",
    "Sign in": "\u767B\u5F55",
    "Sign up": "\u6CE8\u518C",
    Upgrade: "\u5347\u7EA7",
    Sponsor: "\u8D5E\u52A9",
    Sponsors: "\u8D5E\u52A9",
    Settings: "\u8BBE\u7F6E",
    Profile: "\u4E2A\u4EBA\u8D44\u6599",
    Enterprises: "\u4F01\u4E1A",
    "Copilot settings": "Copilot \u8BBE\u7F6E",
    Appearance: "\u5916\u89C2",
    Accessibility: "\u65E0\u969C\u788D",
    "Try Enterprise": "\u8BD5\u7528\u4F01\u4E1A\u7248",
    "Open user navigation menu": "\u6253\u5F00\u7528\u6237\u5BFC\u822A\u83DC\u5355",
    "MCP registry": "MCP \u6CE8\u518C\u8868",
    "MCP servers": "MCP \u670D\u52A1\u5668",
    "All MCP servers": "\u6240\u6709 MCP \u670D\u52A1\u5668",
    "Search syntax tips": "\u641C\u7D22\u8BED\u6CD5\u63D0\u793A",
    "Chat with Copilot": "\u4E0E Copilot \u804A\u5929",
    "chat with Copilot": "\u4E0E Copilot \u804A\u5929",
    "Start a new Copilot thread": "\u65B0\u5EFA Copilot \u4F1A\u8BDD",
    "Give feedback": "\u63D0\u4F9B\u53CD\u9988",
    "give feedback": "\u63D0\u4F9B\u53CD\u9988",
    "Latest from our changelog": "\u66F4\u65B0\u65E5\u5FD7\u6700\u65B0\u52A8\u6001",
    Changelog: "\u66F4\u65B0\u65E5\u5FD7",
    "View changelog": "\u67E5\u770B\u66F4\u65B0\u65E5\u5FD7",
    New: "\u65B0\u5EFA",
    "New repository": "\u65B0\u5EFA\u4ED3\u5E93",
    "Import repository": "\u5BFC\u5165\u4ED3\u5E93",
    "New gist": "\u65B0\u5EFA\u4EE3\u7801\u7247\u6BB5",
    "New organization": "\u65B0\u5EFA\u7EC4\u7EC7",
    "New project": "\u65B0\u5EFA\u9879\u76EE",
    "Create new": "\u65B0\u5EFA",
    Create: "\u521B\u5EFA",
    Edit: "\u7F16\u8F91",
    Delete: "\u5220\u9664",
    Close: "\u5173\u95ED",
    Open: "\u6253\u5F00",
    Copy: "\u590D\u5236",
    Save: "\u4FDD\u5B58",
    Cancel: "\u53D6\u6D88",
    Confirm: "\u786E\u8BA4",
    Back: "\u8FD4\u56DE",
    View: "\u67E5\u770B",
    "View all": "\u67E5\u770B\u5168\u90E8",
    "See more": "\u67E5\u770B\u66F4\u591A",
    "Show more": "\u663E\u793A\u66F4\u591A",
    "Show less": "\u663E\u793A\u66F4\u5C11",
    "Show fewer": "\u663E\u793A\u66F4\u5C11",
    "Load more": "\u52A0\u8F7D\u66F4\u591A",
    "Read more": "\u9605\u8BFB\u66F4\u591A",
    "Learn more": "\u4E86\u89E3\u66F4\u591A",
    Add: "\u6DFB\u52A0",
    Remove: "\u79FB\u9664",
    Update: "\u66F4\u65B0",
    Filter: "\u7B5B\u9009",
    Filters: "\u7B5B\u9009\u5668",
    Clear: "\u6E05\u9664",
    Loading: "\u52A0\u8F7D\u4E2D",
    "Loading...": "\u52A0\u8F7D\u4E2D...",
    Retry: "\u91CD\u8BD5",
    "Try again": "\u91CD\u8BD5",
    "Not now": "\u6682\u65F6\u4E0D\u8981",
    "Maybe later": "\u7A0D\u540E\u518D\u8BF4",
    "Don't ask again": "\u4E0D\u518D\u8BE2\u95EE",
    Submit: "\u63D0\u4EA4",
    Send: "\u53D1\u9001",
    Preview: "\u9884\u89C8",
    Write: "\u64B0\u5199",
    "Attach files": "\u9644\u52A0\u6587\u4EF6",
    Paste: "\u7C98\u8D34",
    Select: "\u9009\u62E9",
    Selected: "\u5DF2\u9009\u62E9",
    More: "\u66F4\u591A",
    Options: "\u9009\u9879",
    All: "\u5168\u90E8",
    None: "\u65E0",
    Any: "\u4EFB\u610F",
    Others: "\u5176\u4ED6",
    Everyone: "\u6240\u6709\u4EBA",
    Private: "\u79C1\u6709",
    Public: "\u516C\u5F00",
    Internal: "\u5185\u90E8",
    Archived: "\u5DF2\u5F52\u6863",
    Closed: "\u5DF2\u5173\u95ED",
    Merged: "\u5DF2\u5408\u5E76",
    Draft: "\u8349\u7A3F",
    "In progress": "\u8FDB\u884C\u4E2D",
    Completed: "\u5DF2\u5B8C\u6210",
    Approved: "\u5DF2\u6279\u51C6",
    "Changes requested": "\u5DF2\u8BF7\u6C42\u66F4\u6539",
    "Review required": "\u9700\u8981\u5BA1\u67E5",
    Pending: "\u5F85\u5904\u7406",
    Queued: "\u6392\u961F\u4E2D",
    Waiting: "\u7B49\u5F85\u4E2D",
    Failed: "\u5931\u8D25",
    Success: "\u6210\u529F",
    Successful: "\u6210\u529F",
    Error: "\u9519\u8BEF",
    Warning: "\u8B66\u544A",
    Info: "\u4FE1\u606F",
    "Customizable line height": "\u53EF\u81EA\u5B9A\u4E49\u884C\u9AD8",
    "Enable compact line height": "\u542F\u7528\u7D27\u51D1\u884C\u9AD8",
    "The default line height has been increased for improved accessibility. You can choose to enable a more compact line height from the view settings menu.": "\u9ED8\u8BA4\u884C\u9AD8\u5DF2\u63D0\u5347\uFF0C\u4EE5\u6539\u5584\u65E0\u969C\u788D\u4F53\u9A8C\u3002\u4F60\u53EF\u4EE5\u4ECE\u89C6\u56FE\u8BBE\u7F6E\u83DC\u5355\u4E2D\u9009\u62E9\u66F4\u7D27\u51D1\u7684\u884C\u9AD8\u3002",
    Dismiss: "\u5FFD\u7565",
    Dismissed: "\u5DF2\u5FFD\u7565",
    Hide: "\u9690\u85CF",
    Show: "\u663E\u793A",
    Expand: "\u5C55\u5F00",
    Collapse: "\u6298\u53E0",
    Download: "\u4E0B\u8F7D",
    Upload: "\u4E0A\u4F20",
    Refresh: "\u5237\u65B0",
    Reload: "\u91CD\u65B0\u52A0\u8F7D",
    Share: "\u5206\u4EAB",
    Embed: "\u5D4C\u5165",
    "Copy link": "\u590D\u5236\u94FE\u63A5",
    "Copy permalink": "\u590D\u5236\u56FA\u5B9A\u94FE\u63A5",
    Permalink: "\u56FA\u5B9A\u94FE\u63A5",
    Latest: "\u6700\u65B0",
    Oldest: "\u6700\u65E9",
    "Most commented": "\u8BC4\u8BBA\u6700\u591A",
    "Most reactions": "\u53CD\u5E94\u6700\u591A",
    "Least commented": "\u8BC4\u8BBA\u6700\u5C11",
    "Recently updated": "\u6700\u8FD1\u66F4\u65B0",
    "Least recently updated": "\u6700\u8FD1\u672A\u66F4\u65B0",
    Name: "\u540D\u79F0",
    Description: "\u63CF\u8FF0",
    Owner: "\u6240\u6709\u8005",
    Language: "\u8BED\u8A00",
    Languages: "\u8BED\u8A00",
    Location: "\u4F4D\u7F6E",
    Website: "\u7F51\u7AD9",
    "Website URL": "\u7F51\u7AD9 URL",
    Email: "\u90AE\u7BB1",
    Company: "\u516C\u53F8",
    Bio: "\u7B80\u4ECB",
    Avatar: "\u5934\u50CF",
    Details: "\u8BE6\u60C5",
    Summary: "\u6458\u8981",
    Feedback: "\u53CD\u9988",
    Privacy: "\u9690\u79C1",
    Terms: "\u6761\u6B3E",
    Status: "\u72B6\u6001",
    Labels: "\u6807\u7B7E",
    Label: "\u6807\u7B7E",
    Assignee: "\u6307\u6D3E\u7ED9",
    Assignees: "\u6307\u6D3E\u7ED9",
    "No one assigned": "\u672A\u6307\u6D3E\u4EFB\u4F55\u4EBA",
    "No one": "\u65E0",
    Author: "\u4F5C\u8005",
    Reviewer: "\u5BA1\u67E5\u8005",
    Reviewers: "\u5BA1\u67E5\u8005",
    Participants: "\u53C2\u4E0E\u8005",
    "Resolve conversation": "\u89E3\u51B3\u5BF9\u8BDD",
    "Unresolve conversation": "\u53D6\u6D88\u89E3\u51B3\u5BF9\u8BDD",
    "Mark as duplicate": "\u6807\u8BB0\u4E3A\u91CD\u590D",
    "Convert to issue": "\u8F6C\u4E3A\u8BAE\u9898",
    "Convert to discussion": "\u8F6C\u4E3A\u8BA8\u8BBA",
    "Transfer issue": "\u8F6C\u79FB\u8BAE\u9898",
    "Transfer ownership": "\u8F6C\u79FB\u6240\u6709\u6743",
    "Lock conversation": "\u9501\u5B9A\u5BF9\u8BDD",
    "Unlock conversation": "\u89E3\u9501\u5BF9\u8BDD",
    "Danger Zone": "\u5371\u9669\u533A\u57DF",
    "Archive this repository": "\u5F52\u6863\u6B64\u4ED3\u5E93",
    "Change visibility": "\u66F4\u6539\u53EF\u89C1\u6027",
    "Delete this repository": "\u5220\u9664\u6B64\u4ED3\u5E93",
    "Add member": "\u6DFB\u52A0\u6210\u5458",
    "Invite someone": "\u9080\u8BF7\u6210\u5458",
    Members: "\u6210\u5458",
    Teams: "\u56E2\u961F",
    Organizations: "\u7EC4\u7EC7",
    Repositories: "\u4ED3\u5E93",
    Overview: "\u6982\u8FF0",
    "Edit profile": "\u7F16\u8F91\u4E2A\u4EBA\u8D44\u6599",
    Achievements: "\u6210\u5C31",
    Highlights: "\u4EAE\u70B9",
    Pinned: "\u7F6E\u9876",
    "Popular repositories": "\u70ED\u95E8\u4ED3\u5E93",
    "Top repositories": "\u5E38\u7528\u4ED3\u5E93",
    "Pinned repositories": "\u7F6E\u9876\u4ED3\u5E93",
    "Contribution graph": "\u8D21\u732E\u56FE",
    Streak: "\u8FDE\u7EED\u8D21\u732E",
    "Longest streak": "\u6700\u957F\u8FDE\u7EED\u8D21\u732E",
    "Current streak": "\u5F53\u524D\u8FDE\u7EED\u8D21\u732E",
    "Highest contributions": "\u6700\u9AD8\u8D21\u732E",
    "No contributions yet": "\u5C1A\u65E0\u8D21\u732E",
    "Available for hire": "\u53EF\u63A5\u5355",
    "Block or report": "\u5C4F\u853D\u6216\u4E3E\u62A5",
    Block: "\u5C4F\u853D",
    Report: "\u4E3E\u62A5",
    Follow: "\u5173\u6CE8",
    Unfollow: "\u53D6\u6D88\u5173\u6CE8",
    "Recent activity": "\u8FD1\u671F\u52A8\u6001",
    Feed: "\u52A8\u6001\u6D41",
    "Your feed": "\u4F60\u7684\u52A8\u6001",
    Suggestions: "\u5EFA\u8BAE",
    "Discover repositories": "\u53D1\u73B0\u4ED3\u5E93",
    "View profile": "\u67E5\u770B\u4E2A\u4EBA\u8D44\u6599",
    "Welcome back": "\u6B22\u8FCE\u56DE\u6765",
    "Latest changes": "\u6700\u65B0\u53D8\u66F4",
    "Get started": "\u5F00\u59CB\u4F7F\u7528",
    Code: "\u4EE3\u7801",
    Issues: "\u8BAE\u9898",
    "Pull requests": "\u62C9\u53D6\u8BF7\u6C42",
    "Pull request": "\u62C9\u53D6\u8BF7\u6C42",
    Discussions: "\u8BA8\u8BBA",
    Actions: "\u64CD\u4F5C",
    Projects: "\u9879\u76EE",
    Security: "\u5B89\u5168",
    Insights: "\u6D1E\u5BDF",
    Pulse: "\u52A8\u6001",
    Graphs: "\u56FE\u8868",
    Network: "\u7F51\u7EDC\u56FE",
    "Code frequency": "\u4EE3\u7801\u9891\u7387",
    "Commit activity": "\u63D0\u4EA4\u52A8\u6001",
    Traffic: "\u8BBF\u95EE\u91CF",
    People: "\u6210\u5458",
    General: "\u5E38\u89C4",
    Environments: "\u73AF\u5883",
    Pages: "\u9875\u9762",
    "Deploy keys": "\u90E8\u7F72\u5BC6\u94A5",
    Rules: "\u89C4\u5219",
    Moderation: "\u5BA1\u6838",
    About: "\u5173\u4E8E",
    Topics: "\u4E3B\u9898",
    "No topics": "\u65E0\u4E3B\u9898",
    "Edit topics": "\u7F16\u8F91\u4E3B\u9898",
    "Add topics": "\u6DFB\u52A0\u4E3B\u9898",
    "No description, website, or topics provided": "\u672A\u63D0\u4F9B\u63CF\u8FF0\u3001\u7F51\u7AD9\u6216\u4E3B\u9898",
    Activity: "\u52A8\u6001",
    "Stars history": "\u661F\u6807\u5386\u53F2",
    "Custom properties": "\u81EA\u5B9A\u4E49\u5C5E\u6027",
    "Clone or download": "\u514B\u9686\u6216\u4E0B\u8F7D",
    "Open with GitHub Desktop": "\u4F7F\u7528 GitHub Desktop \u6253\u5F00",
    "Open in Visual Studio Code": "\u5728 Visual Studio Code \u4E2D\u6253\u5F00",
    "Open in a codespace": "\u5728\u4EE3\u7801\u7A7A\u95F4\u4E2D\u6253\u5F00",
    "Create a new codespace": "\u521B\u5EFA\u65B0\u7684\u4EE3\u7801\u7A7A\u95F4",
    "Download ZIP": "\u4E0B\u8F7D ZIP",
    "Add file": "\u6DFB\u52A0\u6587\u4EF6",
    "Upload files": "\u4E0A\u4F20\u6587\u4EF6",
    "Create new file": "\u521B\u5EFA\u65B0\u6587\u4EF6",
    "Find file": "\u67E5\u627E\u6587\u4EF6",
    "Copy path": "\u590D\u5236\u8DEF\u5F84",
    "Copy file": "\u590D\u5236\u6587\u4EF6",
    "Edit file": "\u7F16\u8F91\u6587\u4EF6",
    "Delete file": "\u5220\u9664\u6587\u4EF6",
    Rename: "\u91CD\u547D\u540D",
    Move: "\u79FB\u52A8",
    Unstar: "\u53D6\u6D88\u661F\u6807",
    Unwatch: "\u53D6\u6D88\u5173\u6CE8",
    Unfork: "\u53D6\u6D88\u590D\u523B",
    "No releases published": "\u5C1A\u672A\u53D1\u5E03\u7248\u672C",
    "Create a new release": "\u521B\u5EFA\u65B0\u7248\u672C",
    "Draft a new release": "\u8D77\u8349\u65B0\u7248\u672C",
    "Latest release": "\u6700\u65B0\u7248\u672C",
    "View license": "\u67E5\u770B\u8BB8\u53EF\u8BC1",
    "View license file": "\u67E5\u770B\u8BB8\u53EF\u8BC1\u6587\u4EF6",
    "Default branch": "\u9ED8\u8BA4\u5206\u652F",
    "Rename branch": "\u91CD\u547D\u540D\u5206\u652F",
    "Add branch": "\u6DFB\u52A0\u5206\u652F",
    "New branch": "\u65B0\u5EFA\u5206\u652F",
    "Switch branches": "\u5207\u6362\u5206\u652F",
    "Find or create a branch": "\u67E5\u627E\u6216\u521B\u5EFA\u5206\u652F",
    "View all branches": "\u67E5\u770B\u5168\u90E8\u5206\u652F",
    "New pull request": "\u65B0\u5EFA\u62C9\u53D6\u8BF7\u6C42",
    "New issue": "\u65B0\u5EFA\u8BAE\u9898",
    Compare: "\u6BD4\u8F83",
    "Compare changes": "\u6BD4\u8F83\u66F4\u6539",
    base: "\u57FA\u7840",
    compare: "\u6BD4\u8F83",
    "Commit history": "\u63D0\u4EA4\u5386\u53F2",
    "Commits on": "\u63D0\u4EA4\u4E8E",
    Showing: "\u663E\u793A",
    entries: "\u6761",
    "Browse files": "\u6D4F\u89C8\u6587\u4EF6",
    "View commit details": "\u67E5\u770B\u63D0\u4EA4\u8BE6\u60C5",
    History: "\u5386\u53F2\u8BB0\u5F55",
    Blame: "\u8FFD\u6EAF",
    Raw: "\u539F\u59CB\u6587\u4EF6",
    "This branch is up to date with": "\u6B64\u5206\u652F\u4E0E",
    "ahead of": "\u9886\u5148",
    behind: "\u843D\u540E",
    "Open issues": "\u5F85\u5904\u7406\u8BAE\u9898",
    "Closed issues": "\u5DF2\u5173\u95ED\u8BAE\u9898",
    "All issues": "\u5168\u90E8\u8BAE\u9898",
    "All pull requests": "\u5168\u90E8\u62C9\u53D6\u8BF7\u6C42",
    "All repositories": "\u5168\u90E8\u4ED3\u5E93",
    "All forks": "\u5168\u90E8\u590D\u523B",
    "All branches": "\u5168\u90E8\u5206\u652F",
    "All tags": "\u5168\u90E8\u6807\u7B7E",
    "All releases": "\u5168\u90E8\u7248\u672C\u53D1\u5E03",
    "All packages": "\u5168\u90E8\u8F6F\u4EF6\u5305",
    "All projects": "\u5168\u90E8\u9879\u76EE",
    "All discussions": "\u5168\u90E8\u8BA8\u8BBA",
    "All contributors": "\u5168\u90E8\u8D21\u732E\u8005",
    "All members": "\u5168\u90E8\u6210\u5458",
    "All teams": "\u5168\u90E8\u56E2\u961F",
    "All organizations": "\u5168\u90E8\u7EC4\u7EC7",
    "No issues matched your search": "\u6CA1\u6709\u5339\u914D\u641C\u7D22\u6761\u4EF6\u7684\u8BAE\u9898",
    "No issues here yet": "\u8FD9\u91CC\u8FD8\u6CA1\u6709\u8BAE\u9898",
    "No pull requests here yet": "\u8FD9\u91CC\u8FD8\u6CA1\u6709\u62C9\u53D6\u8BF7\u6C42",
    "No results matched your search": "\u6CA1\u6709\u5339\u914D\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C",
    "Nothing to show": "\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9",
    "No results": "\u65E0\u7ED3\u679C",
    "This branch has no conflicts with the base branch": "\u6B64\u5206\u652F\u4E0E\u57FA\u7840\u5206\u652F\u65E0\u51B2\u7A81",
    "This pull request has no conflicts with the base branch": "\u6B64\u62C9\u53D6\u8BF7\u6C42\u4E0E\u57FA\u7840\u5206\u652F\u65E0\u51B2\u7A81",
    Sort: "\u6392\u5E8F",
    Newest: "\u6700\u65B0",
    "Best match": "\u6700\u4F73\u5339\u914D",
    "Most stars": "\u661F\u6807\u6700\u591A",
    "Fewest stars": "\u661F\u6807\u6700\u5C11",
    "Most forks": "\u590D\u523B\u6700\u591A",
    Comments: "\u8BC4\u8BBA",
    Comment: "\u8BC4\u8BBA",
    "Leave a comment": "\u53D1\u8868\u8BC4\u8BBA",
    Commenting: "\u8BC4\u8BBA\u4E2D",
    "Sign in to comment": "\u767B\u5F55\u540E\u53D1\u8868\u8BC4\u8BBA",
    Reply: "\u56DE\u590D",
    "Edit comment": "\u7F16\u8F91\u8BC4\u8BBA",
    "Delete comment": "\u5220\u9664\u8BC4\u8BBA",
    "Quote reply": "\u5F15\u7528\u56DE\u590D",
    "Close issue": "\u5173\u95ED\u8BAE\u9898",
    "Reopen issue": "\u91CD\u65B0\u6253\u5F00\u8BAE\u9898",
    "Close pull request": "\u5173\u95ED\u62C9\u53D6\u8BF7\u6C42",
    "Reopen pull request": "\u91CD\u65B0\u6253\u5F00\u62C9\u53D6\u8BF7\u6C42",
    "Close with comment": "\u8BC4\u8BBA\u540E\u5173\u95ED",
    Reopen: "\u91CD\u65B0\u6253\u5F00",
    "Show hidden": "\u663E\u793A\u9690\u85CF\u7684",
    "This issue has been locked": "\u6B64\u8BAE\u9898\u5DF2\u88AB\u9501\u5B9A",
    "This pull request has been locked": "\u6B64\u62C9\u53D6\u8BF7\u6C42\u5DF2\u88AB\u9501\u5B9A",
    "Locked by": "\u9501\u5B9A\u8005",
    Edited: "\u5DF2\u7F16\u8F91",
    "No milestone": "\u65E0\u91CC\u7A0B\u7891",
    "Milestone due date": "\u91CC\u7A0B\u7891\u622A\u6B62\u65E5\u671F",
    "Linked pull requests": "\u5173\u8054\u7684\u62C9\u53D6\u8BF7\u6C42",
    "Linked issues": "\u5173\u8054\u7684\u8BAE\u9898",
    "Files changed": "\u6587\u4EF6\u66F4\u6539",
    Checks: "\u68C0\u67E5",
    "Merge pull request": "\u5408\u5E76\u62C9\u53D6\u8BF7\u6C42",
    "Squash and merge": "\u538B\u7F29\u5408\u5E76",
    "Rebase and merge": "\u53D8\u57FA\u5408\u5E76",
    "Update branch": "\u66F4\u65B0\u5206\u652F",
    "Update with rebase": "\u53D8\u57FA\u66F4\u65B0",
    "Confirm merge": "\u786E\u8BA4\u5408\u5E76",
    "Delete branch": "\u5220\u9664\u5206\u652F",
    "Ready to merge": "\u51C6\u5907\u5408\u5E76",
    "This branch is up to date": "\u6B64\u5206\u652F\u5DF2\u4FDD\u6301\u540C\u6B65",
    "Add a review": "\u6DFB\u52A0\u5BA1\u67E5",
    "Request review": "\u8BF7\u6C42\u5BA1\u67E5",
    "Request changes": "\u8BF7\u6C42\u66F4\u6539",
    "Submit review": "\u63D0\u4EA4\u5BA1\u67E5",
    "Review changes": "\u5BA1\u67E5\u66F4\u6539",
    "No reviews yet": "\u5C1A\u65E0\u5BA1\u67E5",
    "Dismiss review": "\u5FFD\u7565\u5BA1\u67E5",
    "Re-request review": "\u91CD\u65B0\u8BF7\u6C42\u5BA1\u67E5",
    "Add your review": "\u6DFB\u52A0\u4F60\u7684\u5BA1\u67E5",
    "All checks have passed": "\u6240\u6709\u68C0\u67E5\u5DF2\u901A\u8FC7",
    "Some checks haven't completed yet": "\u90E8\u5206\u68C0\u67E5\u5C1A\u672A\u5B8C\u6210",
    "All checks have failed": "\u6240\u6709\u68C0\u67E5\u5747\u5931\u8D25",
    "Re-run": "\u91CD\u65B0\u8FD0\u884C",
    "Re-run jobs": "\u91CD\u65B0\u8FD0\u884C\u4EFB\u52A1",
    "Re-run failed jobs": "\u91CD\u65B0\u8FD0\u884C\u5931\u8D25\u7684\u4EFB\u52A1",
    "Cancel workflow": "\u53D6\u6D88\u5DE5\u4F5C\u6D41",
    "View workflow file": "\u67E5\u770B\u5DE5\u4F5C\u6D41\u6587\u4EF6",
    "Workflow file": "\u5DE5\u4F5C\u6D41\u6587\u4EF6",
    Skipped: "\u5DF2\u8DF3\u8FC7",
    Cancelled: "\u5DF2\u53D6\u6D88",
    "Timed out": "\u8D85\u65F6",
    "Action required": "\u9700\u8981\u64CD\u4F5C",
    Neutral: "\u4E2D\u6027",
    Conversations: "\u5BF9\u8BDD",
    "No conversations yet": "\u6682\u65E0\u5BF9\u8BDD",
    "You must be signed in": "\u4F60\u5FC5\u987B\u767B\u5F55",
    "You must be signed in to change notification settings": "\u4F60\u5FC5\u987B\u767B\u5F55\u624D\u80FD\u66F4\u6539\u901A\u77E5\u8BBE\u7F6E",
    "Open notifications": "\u6253\u5F00\u901A\u77E5",
    "No unread notifications": "\u65E0\u672A\u8BFB\u901A\u77E5",
    "Sign in to GitHub": "\u767B\u5F55 GitHub",
    "Jump to": "\u8DF3\u8F6C\u5230",
    "Jump to bottom": "\u8DF3\u5230\u5E95\u90E8",
    "Jump to top": "\u8DF3\u5230\u9876\u90E8",
    "Open in a new window": "\u5728\u65B0\u7A97\u53E3\u4E2D\u6253\u5F00",
    Primary: "\u4E3B\u8981",
    Secondary: "\u6B21\u8981",
    "Global navigation": "\u5168\u5C40\u5BFC\u822A",
    "Site footer": "\u7AD9\u70B9\u9875\u811A",
    "Footer navigation": "\u9875\u811A\u5BFC\u822A",
    "\xA9 2026 GitHub, Inc.": "\xA9 2026 GitHub, Inc.",
    "GitHub, Inc.": "GitHub, Inc.",
    "Terms of Service": "\u670D\u52A1\u6761\u6B3E",
    "Privacy Statement": "\u9690\u79C1\u58F0\u660E",
    "Manage cookies": "\u7BA1\u7406 Cookie",
    "Do not share my personal information": "\u4E0D\u8981\u5171\u4EAB\u6211\u7684\u4E2A\u4EBA\u4FE1\u606F",
    "Search results": "\u641C\u7D22\u7ED3\u679C",
    "Code results": "\u4EE3\u7801\u7ED3\u679C",
    "Commits results": "\u63D0\u4EA4\u7ED3\u679C",
    "Issues results": "\u8BAE\u9898\u7ED3\u679C",
    "Discussions results": "\u8BA8\u8BBA\u7ED3\u679C",
    "Repositories results": "\u4ED3\u5E93\u7ED3\u679C",
    "Packages results": "\u8F6F\u4EF6\u5305\u7ED3\u679C",
    "Users results": "\u7528\u6237\u7ED3\u679C",
    "Advanced search": "\u9AD8\u7EA7\u641C\u7D22",
    "Sort by": "\u6392\u5E8F\u65B9\u5F0F",
    Updated: "\u66F4\u65B0",
    "In this repository": "\u5728\u6B64\u4ED3\u5E93\u4E2D",
    "Sign in to search code": "\u767B\u5F55\u4EE5\u641C\u7D22\u4EE3\u7801",
    Users: "\u7528\u6237",
    "Search code": "\u641C\u7D22\u4EE3\u7801",
    "Search issues": "\u641C\u7D22\u8BAE\u9898",
    "Search commits": "\u641C\u7D22\u63D0\u4EA4",
    "Search discussions": "\u641C\u7D22\u8BA8\u8BBA",
    "Search repositories": "\u641C\u7D22\u4ED3\u5E93",
    "Search packages": "\u641C\u7D22\u8F6F\u4EF6\u5305",
    "Search users": "\u641C\u7D22\u7528\u6237",
    "Search topics": "\u641C\u7D22\u4E3B\u9898",
    "Search wikis": "\u641C\u7D22\u7EF4\u57FA",
    results: "\u6761\u7ED3\u679C",
    "View more": "\u67E5\u770B\u66F4\u591A",
    "Save search": "\u4FDD\u5B58\u641C\u7D22",
    "Saved searches": "\u5DF2\u4FDD\u5B58\u7684\u641C\u7D22",
    "Delete search": "\u5220\u9664\u641C\u7D22",
    "Update search": "\u66F4\u65B0\u641C\u7D22",
    "Search help": "\u641C\u7D22\u5E2E\u52A9",
    "Issue search": "\u8BAE\u9898\u641C\u7D22",
    "Pull request search": "\u62C9\u53D6\u8BF7\u6C42\u641C\u7D22",
    "commit search": "\u63D0\u4EA4\u641C\u7D22",
    "Repository search": "\u4ED3\u5E93\u641C\u7D22",
    "User search": "\u7528\u6237\u641C\u7D22",
    Stars: "\u661F\u6807",
    Followers: "\u5173\u6CE8\u8005",
    Following: "\u6B63\u5728\u5173\u6CE8",
    "Blocked users": "\u5DF2\u5C4F\u853D\u7684\u7528\u6237",
    "More about": "\u5173\u4E8E",
    "No results found": "\u672A\u627E\u5230\u7ED3\u679C",
    "Contributions last year": "\u8FC7\u53BB\u4E00\u5E74\u7684\u8D21\u732E",
    "Contribution activity": "\u8D21\u732E\u52A8\u6001",
    "No contributions recorded": "\u6682\u65E0\u8D21\u732E\u8BB0\u5F55",
    "Empty state": "\u7A7A\u72B6\u6001",
    "There isn't anything here yet": "\u8FD9\u91CC\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9",
    "Nothing to see here yet": "\u8FD9\u91CC\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9",
    "This repository is empty": "\u6B64\u4ED3\u5E93\u4E3A\u7A7A",
    "Quick setup \u2014 if you've done this kind of thing before": "\u5FEB\u901F\u8BBE\u7F6E\u2014\u2014\u5982\u679C\u4F60\u4EE5\u524D\u505A\u8FC7\u7C7B\u4F3C\u64CD\u4F5C",
    "or create a new repository on the command line": "\u6216\u5728\u547D\u4EE4\u884C\u521B\u5EFA\u65B0\u4ED3\u5E93",
    "or push an existing repository from the command line": "\u6216\u4ECE\u547D\u4EE4\u884C\u63A8\u9001\u73B0\u6709\u4ED3\u5E93",
    'echo "# README" >> README.md': 'echo "# README" >> README.md',
    "git init": "git init",
    "git add README.md": "git add README.md",
    'git commit -m "first commit"': 'git commit -m "first commit"',
    "git branch -M main": "git branch -M main",
    "git remote add origin": "git remote add origin",
    "git push -u origin main": "git push -u origin main",
    "These aren't just any links, they're your first links": "\u8FD9\u4E9B\u4E0D\u53EA\u662F\u666E\u901A\u94FE\u63A5\uFF0C\u800C\u662F\u4F60\u7684\u7B2C\u4E00\u6279\u94FE\u63A5",
    "You can use these links to get set up": "\u4F60\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u94FE\u63A5\u5F00\u59CB\u914D\u7F6E",
    "Learn Git and GitHub without any code!": "\u65E0\u9700\u7F16\u5199\u4EFB\u4F55\u4EE3\u7801\u5373\u53EF\u5B66\u4E60 Git \u548C GitHub\uFF01",
    "Using the command line?": "\u4F7F\u7528\u547D\u4EE4\u884C\uFF1F",
    "Set up in Desktop": "\u5728\u684C\u9762\u7AEF\u8BBE\u7F6E",
    "Quick setup": "\u5FEB\u901F\u8BBE\u7F6E",
    "Get started by creating a new file or uploading an existing file.": "\u5148\u521B\u5EFA\u65B0\u6587\u4EF6\u6216\u4E0A\u4F20\u73B0\u6709\u6587\u4EF6\u6765\u5F00\u59CB\u3002",
    "We recommend every repository include a README, LICENSE, and .gitignore.": "\u6211\u4EEC\u5EFA\u8BAE\u6BCF\u4E2A\u4ED3\u5E93\u90FD\u5305\u542B README\u3001LICENSE \u548C .gitignore\u3002",
    "Your repository is empty.": "\u4F60\u7684\u4ED3\u5E93\u4E3A\u7A7A\u3002",
    "You have no unread notifications": "\u4F60\u6CA1\u6709\u672A\u8BFB\u901A\u77E5",
    "Show all notifications": "\u663E\u793A\u6240\u6709\u901A\u77E5",
    "Mark repository notifications as read": "\u5C06\u4ED3\u5E93\u901A\u77E5\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
    "Mark selected as read": "\u5C06\u9009\u4E2D\u9879\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
    "Copy link to clipboard": "\u590D\u5236\u94FE\u63A5\u5230\u526A\u8D34\u677F",
    "Link copied": "\u94FE\u63A5\u5DF2\u590D\u5236",
    "Copied!": "\u5DF2\u590D\u5236\uFF01",
    "Close this dialog": "\u5173\u95ED\u6B64\u5BF9\u8BDD\u6846",
    "Dismiss this dialog": "\u5173\u95ED\u6B64\u5BF9\u8BDD\u6846",
    "Open dialog": "\u6253\u5F00\u5BF9\u8BDD\u6846",
    Menu: "\u83DC\u5355",
    "Main menu": "\u4E3B\u83DC\u5355",
    Submenu: "\u5B50\u83DC\u5355",
    "Open menu": "\u6253\u5F00\u83DC\u5355",
    "Close menu": "\u5173\u95ED\u83DC\u5355",
    "Loading more": "\u6B63\u5728\u52A0\u8F7D\u66F4\u591A",
    "Loading contributions": "\u6B63\u5728\u52A0\u8F7D\u8D21\u732E",
    "Loading failed": "\u52A0\u8F7D\u5931\u8D25",
    "Sign in with a passkey": "\u4F7F\u7528\u5BC6\u94A5\u767B\u5F55",
    "Sign in with your password": "\u4F7F\u7528\u5BC6\u7801\u767B\u5F55",
    "Forgot password?": "\u5FD8\u8BB0\u5BC6\u7801\uFF1F",
    "Create an account": "\u521B\u5EFA\u8D26\u53F7",
    "New to GitHub?": "\u8FD8\u6CA1\u6709 GitHub \u8D26\u53F7\uFF1F",
    "Already have an account?": "\u5DF2\u6709\u8D26\u53F7\uFF1F",
    Verify: "\u9A8C\u8BC1",
    Continue: "\u7EE7\u7EED",
    Next: "\u4E0B\u4E00\u6B65",
    Previous: "\u4E0A\u4E00\u6B65",
    Skip: "\u8DF3\u8FC7",
    Finish: "\u5B8C\u6210",
    Done: "\u5B8C\u6210",
    "Back to": "\u8FD4\u56DE",
    "Go back": "\u8FD4\u56DE",
    "Upgrade plan": "\u5347\u7EA7\u5957\u9910",
    "Compare plans": "\u6BD4\u8F83\u5957\u9910",
    Billing: "\u8BA1\u8D39",
    "Payment method": "\u652F\u4ED8\u65B9\u5F0F",
    Invoices: "\u53D1\u7968",
    Usage: "\u7528\u91CF",
    Plans: "\u5957\u9910",
    Plan: "\u5957\u9910",
    Free: "\u514D\u8D39",
    Pro: "Pro",
    Team: "Team",
    Enterprise: "\u4F01\u4E1A\u7248",
    "Current plan": "\u5F53\u524D\u5957\u9910",
    Downgrade: "\u964D\u7EA7",
    "Cancel plan": "\u53D6\u6D88\u5957\u9910",
    "Change plan": "\u66F4\u6539\u5957\u9910",
    "Add payment method": "\u6DFB\u52A0\u652F\u4ED8\u65B9\u5F0F",
    "Update payment method": "\u66F4\u65B0\u652F\u4ED8\u65B9\u5F0F",
    "Remove payment method": "\u79FB\u9664\u652F\u4ED8\u65B9\u5F0F",
    "Organization settings": "\u7EC4\u7EC7\u8BBE\u7F6E",
    "Member privileges": "\u6210\u5458\u6743\u9650",
    "Billing & plans": "\u8BA1\u8D39\u548C\u5957\u9910",
    "Manage members": "\u7BA1\u7406\u6210\u5458",
    Member: "\u6210\u5458",
    Admin: "\u7BA1\u7406\u5458",
    "Billing manager": "\u8BA1\u8D39\u7BA1\u7406\u5458",
    Role: "\u89D2\u8272",
    "Add teams": "\u6DFB\u52A0\u56E2\u961F",
    "Remove team": "\u79FB\u9664\u56E2\u961F",
    "Team settings": "\u56E2\u961F\u8BBE\u7F6E",
    "Create team": "\u521B\u5EFA\u56E2\u961F",
    "Team name": "\u56E2\u961F\u540D\u79F0",
    "Team description": "\u56E2\u961F\u63CF\u8FF0",
    "Repository access": "\u4ED3\u5E93\u8BBF\u95EE\u6743\u9650",
    "Read access": "\u8BFB\u8BBF\u95EE\u6743\u9650",
    "Write access": "\u5199\u8BBF\u95EE\u6743\u9650",
    "Admin access": "\u7BA1\u7406\u5458\u8BBF\u95EE\u6743\u9650",
    "No access": "\u65E0\u8BBF\u95EE\u6743\u9650",
    "Private repositories": "\u79C1\u6709\u4ED3\u5E93",
    "Public repositories": "\u516C\u5F00\u4ED3\u5E93",
    "This organization has no public repositories": "\u6B64\u7EC4\u7EC7\u6CA1\u6709\u516C\u5F00\u4ED3\u5E93",
    "This organization has no repositories": "\u6B64\u7EC4\u7EC7\u6CA1\u6709\u4ED3\u5E93",
    "This account doesn't have any repositories yet": "\u6B64\u8D26\u53F7\u8FD8\u6CA1\u6709\u4EFB\u4F55\u4ED3\u5E93",
    "This user doesn't have any repositories yet": "\u6B64\u7528\u6237\u8FD8\u6CA1\u6709\u4EFB\u4F55\u4ED3\u5E93",
    "No repositories found": "\u672A\u627E\u5230\u4ED3\u5E93",
    "Unable to render code block": "\u65E0\u6CD5\u6E32\u67D3\u4EE3\u7801\u5757",
    "This file is too large to display": "\u6B64\u6587\u4EF6\u8FC7\u5927\uFF0C\u65E0\u6CD5\u663E\u793A",
    "This file contains binary data": "\u6B64\u6587\u4EF6\u5305\u542B\u4E8C\u8FDB\u5236\u6570\u636E",
    "Binary file": "\u4E8C\u8FDB\u5236\u6587\u4EF6",
    Render: "\u6E32\u67D3",
    "Display the rich diff": "\u663E\u793A\u5BCC\u5DEE\u5F02",
    "View file": "\u67E5\u770B\u6587\u4EF6",
    "View raw": "\u67E5\u770B\u539F\u59CB\u6587\u4EF6",
    "Download raw file": "\u4E0B\u8F7D\u539F\u59CB\u6587\u4EF6",
    "Open raw": "\u6253\u5F00\u539F\u59CB\u6587\u4EF6",
    "View blame": "\u67E5\u770B\u8FFD\u6EAF",
    "View history": "\u67E5\u770B\u5386\u53F2",
    "No changes": "\u65E0\u66F4\u6539",
    "There are no changes": "\u6CA1\u6709\u66F4\u6539",
    "No commits yet": "\u5C1A\u65E0\u63D0\u4EA4",
    "This branch has no commits yet": "\u6B64\u5206\u652F\u8FD8\u6CA1\u6709\u63D0\u4EA4",
    "No branches yet": "\u5C1A\u65E0\u5206\u652F",
    "This repository has no branches": "\u6B64\u4ED3\u5E93\u8FD8\u6CA1\u6709\u5206\u652F",
    "No releases": "\u65E0\u7248\u672C\u53D1\u5E03",
    "No tags": "\u65E0\u6807\u7B7E",
    "No packages": "\u65E0\u8F6F\u4EF6\u5305",
    "This repository doesn't have any packages yet": "\u6B64\u4ED3\u5E93\u8FD8\u6CA1\u6709\u4EFB\u4F55\u8F6F\u4EF6\u5305",
    "Create a package": "\u521B\u5EFA\u8F6F\u4EF6\u5305",
    "No topics yet": "\u5C1A\u65E0\u4E3B\u9898",
    "No files": "\u65E0\u6587\u4EF6",
    "No description": "\u65E0\u63CF\u8FF0",
    "No website": "\u65E0\u7F51\u7AD9",
    "No email": "\u65E0\u90AE\u7BB1",
    "No location": "\u65E0\u4F4D\u7F6E",
    "No bio": "\u65E0\u7B80\u4ECB",
    "No company": "\u65E0\u516C\u53F8",
    "No blog": "\u65E0\u535A\u5BA2",
    "No license": "\u65E0\u8BB8\u53EF\u8BC1",
    "Set status": "\u8BBE\u7F6E\u72B6\u6001",
    "Clear status": "\u6E05\u9664\u72B6\u6001",
    "Set your status": "\u8BBE\u7F6E\u4F60\u7684\u72B6\u6001",
    "Custom status": "\u81EA\u5B9A\u4E49\u72B6\u6001",
    "Status emoji": "\u72B6\u6001\u8868\u60C5",
    "Status message": "\u72B6\u6001\u6D88\u606F",
    "Save status": "\u4FDD\u5B58\u72B6\u6001",
    "Clear this status": "\u6E05\u9664\u6B64\u72B6\u6001",
    "Share your status": "\u5206\u4EAB\u4F60\u7684\u72B6\u6001",
    "Enter a status message": "\u8F93\u5165\u72B6\u6001\u6D88\u606F",
    "Limited visibility": "\u53D7\u9650\u53EF\u89C1",
    "This status is visible to everyone": "\u6B64\u72B6\u6001\u5BF9\u6240\u6709\u4EBA\u53EF\u89C1",
    "Connect models to the real world": "\u8FDE\u63A5\u6A21\u578B\u4E0E\u73B0\u5B9E\u4E16\u754C",
    "Servers and tools from the community that connect models to files, APIs, databases, and more.": "\u6765\u81EA\u793E\u533A\u7684\u670D\u52A1\u5668\u4E0E\u5DE5\u5177\uFF0C\u5C06\u6A21\u578B\u8FDE\u63A5\u5230\u6587\u4EF6\u3001API\u3001\u6570\u636E\u5E93\u7B49\u3002",
    Servers: "\u670D\u52A1\u5668",
    Featured: "\u7CBE\u9009",
    "By GitHub": "\u6765\u81EA GitHub",
    Today: "\u4ECA\u5929",
    today: "\u4ECA\u5929",
    Yesterday: "\u6628\u5929",
    yesterday: "\u6628\u5929",
    "This week": "\u672C\u5468",
    "this week": "\u672C\u5468",
    "Last week": "\u4E0A\u5468",
    "last week": "\u4E0A\u5468",
    "This month": "\u672C\u6708",
    "this month": "\u672C\u6708",
    "Last month": "\u4E0A\u6708",
    "last month": "\u4E0A\u6708",
    "Last year": "\u53BB\u5E74",
    "last year": "\u53BB\u5E74",
    "Just now": "\u521A\u521A",
    "just now": "\u521A\u521A",
    "See your forks of this repository": "\u67E5\u770B\u6B64\u4ED3\u5E93\u7684\u590D\u523B",
    watching: "\u6B63\u5728\u5173\u6CE8",
    Homepage: "\u4E3B\u9875",
    "Create new...": "\u65B0\u5EFA...",
    "Open quick search dialog, type / to search": "\u6253\u5F00\u5FEB\u901F\u641C\u7D22\u5BF9\u8BDD\u6846\uFF0C\u8F93\u5165 / \u8FDB\u884C\u641C\u7D22",
    "Repository navigation": "\u4ED3\u5E93\u5BFC\u822A",
    Agents: "\u667A\u80FD\u4F53",
    "Security and quality": "\u5B89\u5168\u4E0E\u8D28\u91CF",
    "Uh oh!": "\u54CE\u5440\uFF01",
    "There was an error while loading.": "\u52A0\u8F7D\u65F6\u51FA\u73B0\u9519\u8BEF\u3002",
    "Please reload this page": "\u8BF7\u91CD\u65B0\u52A0\u8F7D\u6B64\u9875\u9762",
    Starred: "\u5DF2\u661F\u6807",
    "Star lists": "\u661F\u6807\u5217\u8868",
    "Public repository": "\u516C\u5F00\u4ED3\u5E93",
    "Go to file": "\u8F6C\u5230\u6587\u4EF6",
    "Open more actions menu": "\u6253\u5F00\u66F4\u591A\u64CD\u4F5C\u83DC\u5355",
    "Folders and files": "\u6587\u4EF6\u5939\u548C\u6587\u4EF6",
    "Last commit message": "\u6700\u65B0\u63D0\u4EA4\u6D88\u606F",
    "Last commit date": "\u6700\u65B0\u63D0\u4EA4\u65E5\u671F",
    "View all files": "\u67E5\u770B\u6240\u6709\u6587\u4EF6",
    "Repository files navigation": "\u4ED3\u5E93\u6587\u4EF6\u5BFC\u822A",
    "Ask Copilot about this repository": "\u5411 Copilot \u8BE2\u95EE\u6B64\u4ED3\u5E93",
    Resources: "\u8D44\u6E90",
    Readme: "\u81EA\u8FF0\u6587\u4EF6",
    "Report repository": "\u4E3E\u62A5\u4ED3\u5E93",
    "Open commit details": "\u67E5\u770B\u63D0\u4EA4\u8BE6\u60C5",
    "Open in github.dev": "\u5728 github.dev \u4E2D\u6253\u5F00",
    "Open in a new github.dev tab": "\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00 github.dev",
    "Open in codespace": "\u5728\u4EE3\u7801\u7A7A\u95F4\u4E2D\u6253\u5F00",
    "No packages published": "\u5C1A\u672A\u53D1\u5E03\u8F6F\u4EF6\u5305",
    "Select repositories": "\u9009\u62E9\u4ED3\u5E93",
    "Updated: Last month": "\u66F4\u65B0\uFF1A\u4E0A\u6708",
    "Authored by me": "\u6211\u521B\u5EFA\u7684",
    "Assigned to me": "\u6307\u6D3E\u7ED9\u6211",
    "Involves me": "\u6D89\u53CA\u6211",
    Views: "\u89C6\u56FE",
    "Create view": "\u521B\u5EFA\u89C6\u56FE",
    "No saved views": "\u65E0\u5DF2\u4FDD\u5B58\u7684\u89C6\u56FE",
    "View options": "\u89C6\u56FE\u9009\u9879",
    "Needs your review": "\u9700\u8981\u4F60\u7684\u5BA1\u67E5",
    'About the "Needs your review" section': "\u5173\u4E8E\u201C\u9700\u8981\u4F60\u7684\u5BA1\u67E5\u201D\u533A\u5757",
    "Needs your teams' review": "\u9700\u8981\u4F60\u7684\u56E2\u961F\u5BA1\u67E5",
    'About the "Needs your teams\' review" section': "\u5173\u4E8E\u201C\u9700\u8981\u4F60\u7684\u56E2\u961F\u5BA1\u67E5\u201D\u533A\u5757",
    "Your drafts": "\u4F60\u7684\u8349\u7A3F",
    'About the "Your drafts" section': "\u5173\u4E8E\u201C\u4F60\u7684\u8349\u7A3F\u201D\u533A\u5757",
    "Waiting for review or checks": "\u7B49\u5F85\u5BA1\u67E5\u6216\u68C0\u67E5",
    'About the "Waiting for review or checks" section': "\u5173\u4E8E\u201C\u7B49\u5F85\u5BA1\u67E5\u6216\u68C0\u67E5\u201D\u533A\u5757",
    "Needs action": "\u9700\u8981\u64CD\u4F5C",
    'About the "Needs action" section': "\u5173\u4E8E\u201C\u9700\u8981\u64CD\u4F5C\u201D\u533A\u5757",
    'About the "Ready to merge" section': "\u5173\u4E8E\u201C\u51C6\u5907\u5408\u5E76\u201D\u533A\u5757",
    Merging: "\u5408\u5E76\u4E2D",
    "Committed to this repository in the past month": "\u8FD1\u4E00\u4E2A\u6708\u5185\u6709\u63D0\u4EA4\u5230\u6B64\u4ED3\u5E93",
    "Press escape to close this hovercard": "\u6309 Esc \u5173\u95ED\u6B64\u60AC\u6D6E\u5361\u7247",
    "Skip to content": "\u8DF3\u5230\u5185\u5BB9",
    "You signed in with another tab or window.": "\u4F60\u5728\u53E6\u4E00\u4E2A\u6807\u7B7E\u9875\u6216\u7A97\u53E3\u4E2D\u767B\u5F55\u4E86\u3002",
    "You signed out in another tab or window.": "\u4F60\u5728\u53E6\u4E00\u4E2A\u6807\u7B7E\u9875\u6216\u7A97\u53E3\u4E2D\u9000\u51FA\u4E86\u3002",
    "You switched accounts on another tab or window.": "\u4F60\u5728\u53E6\u4E00\u4E2A\u6807\u7B7E\u9875\u6216\u7A97\u53E3\u4E2D\u5207\u6362\u4E86\u8D26\u53F7\u3002",
    "Dismiss alert": "\u5173\u95ED\u63D0\u793A",
    "You can't perform that action at this time.": "\u4F60\u76EE\u524D\u65E0\u6CD5\u6267\u884C\u6B64\u64CD\u4F5C\u3002",
    Footer: "\u9875\u811A",
    Docs: "\u6587\u6863",
    Contact: "\u8054\u7CFB",
    "Repository settings": "\u4ED3\u5E93\u8BBE\u7F6E",
    Access: "\u8BBF\u95EE",
    Collaborators: "\u534F\u4F5C\u8005",
    "Moderation options": "\u5BA1\u6838\u9009\u9879",
    "Interaction limits": "\u4E92\u52A8\u9650\u5236",
    "Code review limits": "\u4EE3\u7801\u5BA1\u67E5\u9650\u5236",
    "Code, planning, and automation": "\u4EE3\u7801\u3001\u89C4\u5212\u4E0E\u81EA\u52A8\u5316",
    Runners: "\u8FD0\u884C\u5668",
    Policies: "\u7B56\u7565",
    "Cloud agent": "\u4E91\u7AEF\u667A\u80FD\u4F53",
    Planning: "\u89C4\u5212",
    "Agent suggestions for issues": "\u8BAE\u9898\u7684\u667A\u80FD\u4F53\u5EFA\u8BAE",
    "Advanced Security": "\u9AD8\u7EA7\u5B89\u5168",
    "Secrets and variables": "\u5BC6\u94A5\u548C\u53D8\u91CF",
    Integrations: "\u96C6\u6210",
    "Email notifications": "\u90AE\u4EF6\u901A\u77E5",
    Features: "\u529F\u80FD",
    Wikis: "\u7EF4\u57FA",
    Rulesets: "\u89C4\u5219\u96C6",
    Pushes: "\u63A8\u9001",
    Archives: "\u5B58\u6863",
    Transfer: "\u8F6C\u79FB",
    "Repository name": "\u4ED3\u5E93\u540D\u79F0",
    "Template repository": "\u6A21\u677F\u4ED3\u5E93",
    "Learn more about template repositories": "\u4E86\u89E3\u6A21\u677F\u4ED3\u5E93\u7684\u66F4\u591A\u4FE1\u606F",
    "Rename this branch": "\u91CD\u547D\u540D\u6B64\u5206\u652F",
    "Switch to another branch": "\u5207\u6362\u5230\u5176\u4ED6\u5206\u652F",
    "Switch default branch to another branch": "\u5C06\u9ED8\u8BA4\u5206\u652F\u5207\u6362\u5230\u5176\u4ED6\u5206\u652F",
    "Update default branch": "\u66F4\u65B0\u9ED8\u8BA4\u5206\u652F",
    "Changing your default branch": "\u66F4\u6539\u9ED8\u8BA4\u5206\u652F",
    "I understand, update the default branch.": "\u6211\u4E86\u89E3\uFF0C\u66F4\u65B0\u9ED8\u8BA4\u5206\u652F\u3002",
    "Enable release immutability": "\u542F\u7528\u7248\u672C\u53D1\u5E03\u4E0D\u53EF\u53D8\u6027",
    "Disallow assets and tags from being modified once a release is published.": "\u7248\u672C\u53D1\u5E03\u540E\uFF0C\u7981\u6B62\u4FEE\u6539\u8D44\u6E90\u548C\u6807\u7B7E\u3002",
    "Social preview": "\u793E\u4EA4\u9884\u89C8",
    "Download template": "\u4E0B\u8F7D\u6A21\u677F",
    "Uploading...": "\u4E0A\u4F20\u4E2D...",
    "This file is empty.": "\u6B64\u6587\u4EF6\u4E3A\u7A7A\u3002",
    "Remove image": "\u79FB\u9664\u56FE\u7247",
    "Wikis host documentation for your repository.": "\u7EF4\u57FA\u627F\u8F7D\u4ED3\u5E93\u7684\u6587\u6863\u3002",
    "Restrict editing to collaborators only": "\u4EC5\u9650\u534F\u4F5C\u8005\u7F16\u8F91",
    "Public wikis will still be readable by everyone.": "\u516C\u5F00\u7684\u7EF4\u57FA\u4ECD\u5BF9\u6240\u6709\u4EBA\u53EF\u8BFB\u3002",
    "Issue permissions": "\u8BAE\u9898\u6743\u9650",
    "Anyone can create an issue": "\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u521B\u5EFA\u8BAE\u9898",
    "Only collaborators can create issues": "\u4EC5\u534F\u4F5C\u8005\u53EF\u4EE5\u521B\u5EFA\u8BAE\u9898",
    Sponsorships: "\u8D5E\u52A9",
    "Set up sponsor button": "\u8BBE\u7F6E\u8D5E\u52A9\u6309\u94AE",
    "Preserve this repository": "\u4FDD\u7559\u6B64\u4ED3\u5E93",
    "GitHub Archive Program": "GitHub \u5B58\u6863\u8BA1\u5212",
    "Get started with Discussions": "\u5F00\u59CB\u4F7F\u7528\u8BA8\u8BBA",
    "Pull request permissions": "\u62C9\u53D6\u8BF7\u6C42\u6743\u9650",
    "Anyone can create a pull request": "\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u521B\u5EFA\u62C9\u53D6\u8BF7\u6C42",
    "Only collaborators can create PRs": "\u4EC5\u534F\u4F5C\u8005\u53EF\u4EE5\u521B\u5EFA\u62C9\u53D6\u8BF7\u6C42",
    "You must select at least one option": "\u4F60\u81F3\u5C11\u9700\u8981\u9009\u62E9\u4E00\u4E2A\u9009\u9879",
    "Allow merge commits": "\u5141\u8BB8\u5408\u5E76\u63D0\u4EA4",
    "Allow squash merging": "\u5141\u8BB8\u538B\u7F29\u5408\u5E76",
    "Allow rebase merging": "\u5141\u8BB8\u53D8\u57FA\u5408\u5E76",
    "Pull request title and commit details": "\u62C9\u53D6\u8BF7\u6C42\u6807\u9898\u548C\u63D0\u4EA4\u8BE6\u60C5",
    "Pull request title and description": "\u62C9\u53D6\u8BF7\u6C42\u6807\u9898\u548C\u63CF\u8FF0",
    "Always suggest updating pull request branches": "\u59CB\u7EC8\u5EFA\u8BAE\u66F4\u65B0\u62C9\u53D6\u8BF7\u6C42\u5206\u652F",
    "Allow auto-merge": "\u5141\u8BB8\u81EA\u52A8\u5408\u5E76",
    "Automatically delete head branches": "\u81EA\u52A8\u5220\u9664\u5934\u5206\u652F",
    "Deleted branches will still be able to be restored.": "\u5DF2\u5220\u9664\u7684\u5206\u652F\u4ECD\u53EF\u6062\u590D\u3002",
    "Require contributors to sign off on web-based commits": "\u8981\u6C42\u8D21\u732E\u8005\u5728\u57FA\u4E8E\u7F51\u9875\u7684\u63D0\u4EA4\u4E0A\u7B7E\u540D",
    "Developer Certificate of Origin (DCO)": "\u5F00\u53D1\u8005\u539F\u521B\u8BC1\u4E66 (DCO)",
    "Learn more about signing off on commits": "\u4E86\u89E3\u63D0\u4EA4\u7B7E\u540D\u7684\u66F4\u591A\u4FE1\u606F",
    "Allow comments on individual commits": "\u5141\u8BB8\u5BF9\u5355\u4E2A\u63D0\u4EA4\u53D1\u8868\u8BC4\u8BBA",
    "commit comments": "\u63D0\u4EA4\u8BC4\u8BBA",
    "Include Git LFS objects in archives": "\u5728\u5B58\u6863\u4E2D\u5305\u542B Git LFS \u5BF9\u8C61",
    "Limit how many branches and tags can be updated in a single push": "\u9650\u5236\u5355\u6B21\u63A8\u9001\u53EF\u66F4\u65B0\u7684\u5206\u652F\u548C\u6807\u7B7E\u6570\u91CF",
    "Learn more about this setting": "\u4E86\u89E3\u6B64\u8BBE\u7F6E\u7684\u66F4\u591A\u4FE1\u606F",
    "Change repository visibility": "\u66F4\u6539\u4ED3\u5E93\u53EF\u89C1\u6027",
    "For security reasons, you cannot change the visibility of a fork.": "\u51FA\u4E8E\u5B89\u5168\u539F\u56E0\uFF0C\u4F60\u65E0\u6CD5\u66F4\u6539\u590D\u523B\u7684\u53EF\u89C1\u6027\u3002",
    "Disable branch protection rules enforcement and APIs": "\u7981\u7528\u5206\u652F\u4FDD\u62A4\u89C4\u5219\u5F3A\u5236\u6267\u884C\u548C API",
    "Disable branch protection rules": "\u7981\u7528\u5206\u652F\u4FDD\u62A4\u89C4\u5219",
    "This action will disable:": "\u6B64\u64CD\u4F5C\u5C06\u7981\u7528\uFF1A",
    "Branch protection rule enforcement": "\u5206\u652F\u4FDD\u62A4\u89C4\u5219\u5F3A\u5236\u6267\u884C",
    "Branch protection rule APIs": "\u5206\u652F\u4FDD\u62A4\u89C4\u5219 API",
    "Default message": "\u9ED8\u8BA4\u6D88\u606F",
    "Default commit message": "\u9ED8\u8BA4\u63D0\u4EA4\u6D88\u606F",
    "Pull request title": "\u62C9\u53D6\u8BF7\u6C42\u6807\u9898",
    "Creation allowed by:": "\u5141\u8BB8\u521B\u5EFA\u8005\uFF1A",
    "Collaborators only": "\u4EC5\u534F\u4F5C\u8005",
    "All users": "\u6240\u6709\u7528\u6237",
    "Leave fork network": "\u9000\u51FA\u590D\u523B\u7F51\u7EDC",
    "Unexpected bad things will happen if you don't read this!": "\u5982\u679C\u4F60\u4E0D\u9605\u8BFB\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u53EF\u80FD\u4F1A\u53D1\u751F\u610F\u60F3\u4E0D\u5230\u7684\u7CDF\u7CD5\u60C5\u51B5\uFF01",
    "This will permanently remove the fork relationship to the upstream repository": "\u8FD9\u5C06\u6C38\u4E45\u79FB\u9664\u4E0E\u4E0A\u6E38\u4ED3\u5E93\u7684\u590D\u523B\u5173\u7CFB",
    "I have read and understand these effects": "\u6211\u5DF2\u9605\u8BFB\u5E76\u7406\u89E3\u8FD9\u4E9B\u5F71\u54CD",
    "Unlink this repository from the fork network and make it standalone.": "\u5C06\u6B64\u4ED3\u5E93\u4ECE\u590D\u523B\u7F51\u7EDC\u4E2D\u65AD\u5F00\u5E76\u4F7F\u5176\u72EC\u7ACB\u3002",
    "Mark this repository as archived and read-only.": "\u5C06\u6B64\u4ED3\u5E93\u6807\u8BB0\u4E3A\u5DF2\u5F52\u6863\u548C\u53EA\u8BFB\u3002",
    "Archive repository": "\u5F52\u6863\u4ED3\u5E93",
    "This repository will become read-only.": "\u6B64\u4ED3\u5E93\u5C06\u53D8\u4E3A\u53EA\u8BFB\u3002",
    "You will still be able to fork the repository and unarchive it at any time.": "\u4F60\u4ECD\u7136\u53EF\u4EE5\u968F\u65F6\u590D\u523B\u8BE5\u4ED3\u5E93\u5E76\u53D6\u6D88\u5F52\u6863\u3002",
    "All scheduled workflows will stop running.": "\u6240\u6709\u8BA1\u5212\u7684\u5DE5\u4F5C\u6D41\u5C06\u505C\u6B62\u8FD0\u884C\u3002",
    "Security features will be interrupted:": "\u5B89\u5168\u529F\u80FD\u5C06\u4E2D\u65AD\uFF1A",
    "Code scanning will be paused": "\u4EE3\u7801\u626B\u63CF\u5C06\u6682\u505C",
    "Before you archive, please consider:": "\u5F52\u6863\u524D\u8BF7\u8003\u8651\uFF1A",
    "Updating any repository settings": "\u66F4\u65B0\u4EFB\u4F55\u4ED3\u5E93\u8BBE\u7F6E",
    "Closing all open issues and pull requests": "\u5173\u95ED\u6240\u6709\u5F85\u5904\u7406\u7684\u8BAE\u9898\u548C\u62C9\u53D6\u8BF7\u6C42",
    "Making a note in your README": "\u5728 README \u4E2D\u505A\u8BB0\u5F55",
    "I understand the consequences, archive this repository": "\u6211\u4E86\u89E3\u540E\u679C\uFF0C\u5F52\u6863\u6B64\u4ED3\u5E93",
    "I want to delete this repository": "\u6211\u8981\u5220\u9664\u6B64\u4ED3\u5E93",
    "Once you delete a repository, there is no going back. Please be certain.": "\u5220\u9664\u4ED3\u5E93\u540E\u65E0\u6CD5\u6062\u590D\u3002\u8BF7\u52A1\u5FC5\u786E\u8BA4\u3002",
    "Global navigation menu": "\u5168\u5C40\u5BFC\u822A\u83DC\u5355",
    "My repositories": "\u6211\u7684\u4ED3\u5E93",
    "My forks": "\u6211\u7684\u590D\u523B",
    "My contributions": "\u6211\u7684\u8D21\u732E",
    "Loading repositories": "\u6B63\u5728\u52A0\u8F7D\u4ED3\u5E93",
    "Search for repositories": "\u641C\u7D22\u4ED3\u5E93",
    "Change the repository type filter": "\u66F4\u6539\u4ED3\u5E93\u7C7B\u578B\u7B5B\u9009\u5668",
    "Clear filter": "\u6E05\u9664\u7B5B\u9009\u5668",
    "Repositories list": "\u4ED3\u5E93\u5217\u8868",
    Relevance: "\u76F8\u5173\u6027",
    "Comfortable display density": "\u8212\u9002\u663E\u793A\u5BC6\u5EA6",
    "Compact display density": "\u7D27\u51D1\u663E\u793A\u5BC6\u5EA6",
    "No repositories matched your search.": "\u6CA1\u6709\u5339\u914D\u641C\u7D22\u6761\u4EF6\u7684\u4ED3\u5E93\u3002",
    "Try a different search query.": "\u8BF7\u5C1D\u8BD5\u4E0D\u540C\u7684\u641C\u7D22\u6761\u4EF6\u3002",
    "ProTip!": "\u5C0F\u8D34\u58EB\uFF01",
    feedback: "\u53CD\u9988",
    "Confirm access": "\u786E\u8BA4\u8BBF\u95EE",
    "Signed in as": "\u5DF2\u767B\u5F55\u4E3A",
    "When you are ready, trigger a mailer to verify your identity.": "\u5F53\u4F60\u51C6\u5907\u597D\u65F6\uFF0C\u89E6\u53D1\u90AE\u4EF6\u4EE5\u9A8C\u8BC1\u4F60\u7684\u8EAB\u4EFD\u3002",
    "Verify via email": "\u901A\u8FC7\u90AE\u7BB1\u9A8C\u8BC1",
    "Tip:": "\u63D0\u793A\uFF1A",
    "You are entering": "\u4F60\u6B63\u5728\u8FDB\u5165",
    "sudo mode": "sudo \u6A21\u5F0F",
    "Contact GitHub Support": "\u8054\u7CFB GitHub \u652F\u6301",
    "MIT license": "MIT \u8BB8\u53EF\u8BC1",
    "MIT License": "MIT \u8BB8\u53EF\u8BC1",
    "GNU General Public License v3.0": "GNU \u901A\u7528\u516C\u5171\u8BB8\u53EF\u8BC1 v3.0",
    "Apache License 2.0": "Apache \u8BB8\u53EF\u8BC1 2.0",
    "Collaborators and teams": "\u534F\u4F5C\u8005\u548C\u56E2\u961F",
    "This repository is public and visible to anyone": "\u6B64\u4ED3\u5E93\u662F\u516C\u5F00\u7684\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u770B\u5230",
    "Manage visibility": "\u7BA1\u7406\u53EF\u89C1\u6027",
    "Direct access": "\u76F4\u63A5\u8BBF\u95EE",
    "Manage access": "\u7BA1\u7406\u8BBF\u95EE",
    "You haven't invited any collaborators yet": "\u4F60\u8FD8\u6CA1\u6709\u9080\u8BF7\u4EFB\u4F55\u534F\u4F5C\u8005",
    "Add people": "\u6DFB\u52A0\u6210\u5458",
    "Search by username, full name, or email": "\u6309\u7528\u6237\u540D\u3001\u5168\u540D\u6216\u90AE\u7BB1\u641C\u7D22",
    "Add to repository": "\u6DFB\u52A0\u5230\u4ED3\u5E93",
    "Add all commits from the head branch to the base branch with a merge commit.": "\u901A\u8FC7\u5408\u5E76\u63D0\u4EA4\u5C06\u5934\u5206\u652F\u7684\u6240\u6709\u63D0\u4EA4\u6DFB\u52A0\u5230\u57FA\u7840\u5206\u652F\u3002",
    "Presented when merging a pull request with merge.": "\u4F7F\u7528\u5408\u5E76\u65B9\u5F0F\u5408\u5E76\u62C9\u53D6\u8BF7\u6C42\u65F6\u663E\u793A\u3002",
    "Presented when merging a pull request with squash.": "\u4F7F\u7528\u538B\u7F29\u65B9\u5F0F\u5408\u5E76\u62C9\u53D6\u8BF7\u6C42\u65F6\u663E\u793A\u3002",
    "Add all commits from the head branch onto the base branch individually.": "\u5C06\u5934\u5206\u652F\u7684\u6240\u6709\u63D0\u4EA4\u9010\u4E2A\u6DFB\u52A0\u5230\u57FA\u7840\u5206\u652F\u3002",
    "Waits for merge requirements to be met and then merges automatically.": "\u7B49\u5F85\u6EE1\u8DB3\u5408\u5E76\u8981\u6C42\u540E\u81EA\u52A8\u5408\u5E76\u3002",
    "Upload an image to customize your repository's social media preview.": "\u4E0A\u4F20\u56FE\u7247\u4EE5\u81EA\u5B9A\u4E49\u4ED3\u5E93\u7684\u793E\u4EA4\u5A92\u4F53\u9884\u89C8\u3002",
    "Images should be at least 640\xD7320px (1280\xD7640px for best display).": "\u56FE\u7247\u5E94\u81F3\u5C11\u4E3A 640\xD7320px\uFF08\u6700\u4F73\u663E\u793A\u4E3A 1280\xD7640px\uFF09\u3002",
    "Please upload a picture smaller than 1 MB.": "\u8BF7\u4E0A\u4F20\u5C0F\u4E8E 1 MB \u7684\u56FE\u7247\u3002",
    "Please upload a picture smaller than 10,000x10,000.": "\u8BF7\u4E0A\u4F20\u5C0F\u4E8E 10,000x10,000 \u7684\u56FE\u7247\u3002",
    "We only support PNG, GIF, or JPG pictures.": "\u6211\u4EEC\u4EC5\u652F\u6301 PNG\u3001GIF \u6216 JPG \u56FE\u7247\u3002",
    "Something went really wrong and we can't process that picture.": "\u51FA\u73B0\u4E86\u4E25\u91CD\u9519\u8BEF\uFF0C\u6211\u4EEC\u65E0\u6CD5\u5904\u7406\u8BE5\u56FE\u7247\u3002",
    "File contents don't match the file extension.": "\u6587\u4EF6\u5185\u5BB9\u4E0E\u6587\u4EF6\u6269\u5C55\u540D\u4E0D\u5339\u914D\u3002",
    "Upload an image\u2026": "\u4E0A\u4F20\u56FE\u7247\u2026",
    "Git LFS usage in archives is billed at the same rate as usage with the client.": "\u5B58\u6863\u4E2D\u7684 Git LFS \u4F7F\u7528\u91CF\u6309\u4E0E\u5BA2\u6237\u7AEF\u76F8\u540C\u7684\u8D39\u7387\u8BA1\u8D39\u3002",
    "Pushes will be rejected if they attempt to update more than this.": "\u5982\u679C\u5C1D\u8BD5\u66F4\u65B0\u7684\u6570\u91CF\u8D85\u8FC7\u6B64\u9650\u5236\uFF0C\u63A8\u9001\u5C06\u88AB\u62D2\u7EDD\u3002",
    "Pull requests allow others to suggest changes to your repository.": "\u62C9\u53D6\u8BF7\u6C42\u5141\u8BB8\u4ED6\u4EBA\u5EFA\u8BAE\u5BF9\u4ED3\u5E93\u7684\u66F4\u6539\u3002",
    'Display a "Sponsor" button': '\u663E\u793A"\u8D5E\u52A9"\u6309\u94AE',
    "can have unintended consequences that can affect new pull requests and clones.": "\u53EF\u80FD\u4F1A\u4EA7\u751F\u610F\u60F3\u4E0D\u5230\u7684\u540E\u679C\uFF0C\u5F71\u54CD\u65B0\u7684\u62C9\u53D6\u8BF7\u6C42\u548C\u514B\u9686\u3002",
    "will be disabled as part of this action": "\u5C06\u5728\u6B64\u64CD\u4F5C\u4E2D\u88AB\u7981\u7528",
    "cannot rejoin the fork network.": "\u65E0\u6CD5\u91CD\u65B0\u52A0\u5165\u590D\u523B\u7F51\u7EDC\u3002",
    "branches and tags can be updated in a push": "\u53EF\u4EE5\u5728\u4E00\u6B21\u63A8\u9001\u4E2D\u66F4\u65B0\u7684\u5206\u652F\u548C\u6807\u7B7E",
    "Branch protection rules": "\u5206\u652F\u4FDD\u62A4\u89C4\u5219",
    "Classic branch protections have not been configured": "\u5C1A\u672A\u914D\u7F6E\u7ECF\u5178\u5206\u652F\u4FDD\u62A4",
    "Define branch rules to disable force pushing, prevent branches from being deleted, or require pull requests before merging. Learn more about repository rules and protected branches.": "\u5B9A\u4E49\u5206\u652F\u89C4\u5219\u4EE5\u7981\u6B62\u5F3A\u5236\u63A8\u9001\u3001\u9632\u6B62\u5206\u652F\u88AB\u5220\u9664\uFF0C\u6216\u5728\u5408\u5E76\u524D\u8981\u6C42\u62C9\u53D6\u8BF7\u6C42\u3002\u4E86\u89E3\u4ED3\u5E93\u89C4\u5219\u548C\u53D7\u4FDD\u62A4\u5206\u652F\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "Learn more about repository rules and protected branches.": "\u4E86\u89E3\u4ED3\u5E93\u89C4\u5219\u548C\u53D7\u4FDD\u62A4\u5206\u652F\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "New branch protection rule": "\u65B0\u5EFA\u5206\u652F\u4FDD\u62A4\u89C4\u5219",
    "Add rule": "\u6DFB\u52A0\u89C4\u5219",
    "Dependabot secrets": "Dependabot \u5BC6\u94A5",
    "Actions secrets": "\u64CD\u4F5C\u5BC6\u94A5",
    "Secrets are credentials that are encrypted. Anyone with collaborator access to this repository can use these secrets for Dependabot.": "\u5BC6\u94A5\u662F\u52A0\u5BC6\u7684\u51ED\u636E\u3002\u4EFB\u4F55\u5BF9\u6B64\u4ED3\u5E93\u5177\u6709\u534F\u4F5C\u8005\u8BBF\u95EE\u6743\u9650\u7684\u4EBA\u90FD\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u5BC6\u94A5\u7528\u4E8E Dependabot\u3002",
    "Secrets are not passed to forks.": "\u5BC6\u94A5\u4E0D\u4F1A\u4F20\u9012\u7ED9\u590D\u523B\u3002",
    "Repository secrets": "\u4ED3\u5E93\u5BC6\u94A5",
    "This repository has no secrets.": "\u6B64\u4ED3\u5E93\u6CA1\u6709\u5BC6\u94A5\u3002",
    "Add secret": "\u6DFB\u52A0\u5BC6\u94A5",
    "New secret": "\u65B0\u5EFA\u5BC6\u94A5",
    "This will permanently delete the": "\u8FD9\u5C06\u6C38\u4E45\u5220\u9664",
    "repository, wiki, issues, comments, packages, secrets, workflow runs, and remove all collaborator associations.": "\u4ED3\u5E93\u3001\u7EF4\u57FA\u3001\u8BAE\u9898\u3001\u8BC4\u8BBA\u3001\u8F6F\u4EF6\u5305\u3001\u5BC6\u94A5\u3001\u5DE5\u4F5C\u6D41\u8FD0\u884C\uFF0C\u5E76\u79FB\u9664\u6240\u6709\u534F\u4F5C\u8005\u5173\u8054\u3002",
    "To confirm, type": "\u8981\u786E\u8BA4\uFF0C\u8BF7\u5728\u4E0B\u65B9\u8F93\u5165\u6846\u4E2D\u8F93\u5165",
    "Read customer story": "\u9605\u8BFB\u5BA2\u6237\u6545\u4E8B",
    "Read customer stories": "\u9605\u8BFB\u5BA2\u6237\u6545\u4E8B",
    Platform: "\u5E73\u53F0",
    "Why GitHub": "\u4E3A\u4EC0\u4E48\u9009\u62E9 GitHub",
    Blog: "\u535A\u5BA2",
    "Financial services": "\u91D1\u878D\u670D\u52A1",
    "GitHub Advanced Security": "GitHub \u9AD8\u7EA7\u5B89\u5168",
    "MCP Registry": "MCP \u6CE8\u518C\u8868",
    "Code of conduct": "\u884C\u4E3A\u51C6\u5219",
    Contributing: "\u8D21\u732E\u6307\u5357",
    Install: "\u5B89\u88C5",
    By: "\u6765\u81EA",
    "Loading\u2026": "\u52A0\u8F7D\u4E2D\u2026",
    "View all solutions": "\u67E5\u770B\u6240\u6709\u89E3\u51B3\u65B9\u6848",
    Partners: "\u5408\u4F5C\u4F19\u4F34",
    "Premium Support": "\u9AD8\u7EA7\u652F\u6301",
    "Enter your email": "\u8F93\u5165\u4F60\u7684\u90AE\u7BB1",
    "Sign up for GitHub": "\u6CE8\u518C GitHub",
    "Try GitHub Copilot": "\u8BD5\u7528 GitHub Copilot",
    "By industry": "\u6309\u884C\u4E1A",
    "Appearance settings": "\u5916\u89C2\u8BBE\u7F6E",
    "Filter by this user": "\u6309\u6B64\u7528\u6237\u7B5B\u9009",
    "Navigation Menu": "\u5BFC\u822A\u83DC\u5355",
    "Sorry, something went wrong.": "\u62B1\u6B49\uFF0C\u51FA\u9519\u4E86\u3002",
    "GitHub Copilot app": "GitHub Copilot \u5E94\u7528",
    "Direct agents from issue to merge": "\u76F4\u63A5\u8BA9\u667A\u80FD\u4F53\u4ECE\u8BAE\u9898\u8D70\u5411\u5408\u5E76",
    "AI CODE CREATION": "AI \u4EE3\u7801\u521B\u4F5C",
    "Write better code with AI": "\u4F7F\u7528 AI \u7F16\u5199\u66F4\u597D\u7684\u4EE3\u7801",
    "Integrate external tools": "\u96C6\u6210\u5916\u90E8\u5DE5\u5177",
    "DEVELOPER WORKFLOWS": "\u5F00\u53D1\u8005\u5DE5\u4F5C\u6D41",
    "Automate any workflow": "\u81EA\u52A8\u5316\u4EFB\u4F55\u5DE5\u4F5C\u6D41",
    "Instant dev environments": "\u5373\u65F6\u5F00\u53D1\u73AF\u5883",
    "Plan and track work": "\u89C4\u5212\u5E76\u8DDF\u8E2A\u5DE5\u4F5C",
    "Code Review": "\u4EE3\u7801\u5BA1\u67E5",
    "Issue requires more information from poster": "\u8BAE\u9898\u9700\u8981\u53D1\u5E03\u8005\u63D0\u4F9B\u66F4\u591A\u4FE1\u606F",
    "Request for new features or functionality": "\u65B0\u529F\u80FD\u6216\u529F\u80FD\u8BF7\u6C42",
    "Generate new token": "\u751F\u6210\u65B0\u4EE4\u724C",
    "Developer Settings": "\u5F00\u53D1\u8005\u8BBE\u7F6E",
    "GitHub Apps": "GitHub \u5E94\u7528",
    "OAuth Apps": "OAuth \u5E94\u7528",
    "Personal access tokens": "\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C",
    "Fine-grained tokens": "\u7CBE\u7EC6\u5316\u4EE4\u724C",
    "Tokens (classic)": "\u7ECF\u5178\u4EE4\u724C",
    "Personal access tokens (classic)": "\u7ECF\u5178\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C",
    "Fine-grained, repo-scoped": "\u7CBE\u7EC6\u5316\u3001\u4ED3\u5E93\u8303\u56F4",
    "Generate new token (classic)": "\u751F\u6210\u65B0\u7ECF\u5178\u4EE4\u724C",
    "For general use": "\u7528\u4E8E\u5E38\u89C4\u7528\u9014",
    "Tokens you have generated that can be used to access the": "\u4F60\u751F\u6210\u7684\u4EE4\u724C\u53EF\u7528\u4E8E\u8BBF\u95EE",
    "Are you sure you want to delete this token?": "\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u4EE4\u724C\u5417\uFF1F",
    "Any applications or scripts using this token will no longer be able to access the GitHub API. You cannot undo this action.": "\u4F7F\u7528\u6B64\u4EE4\u724C\u7684\u4EFB\u4F55\u5E94\u7528\u6216\u811A\u672C\u90FD\u5C06\u65E0\u6CD5\u518D\u8BBF\u95EE GitHub API\u3002\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",
    "I understand, delete this token": "\u6211\u4E86\u89E3\uFF0C\u5220\u9664\u6B64\u4EE4\u724C",
    "Last used within the last week": "\u6700\u8FD1\u4E00\u5468\u5185\u4F7F\u7528\u8FC7",
    "This token has no expiration date": "\u6B64\u4EE4\u724C\u6CA1\u6709\u8FC7\u671F\u65F6\u95F4",
    "authenticate to the API over Basic Authentication": "\u901A\u8FC7\u57FA\u672C\u8EAB\u4EFD\u9A8C\u8BC1\u8BBF\u95EE API",
    "New Fine-grained Personal Access Token": "\u65B0\u5EFA\u7CBE\u7EC6\u5316\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C",
    "New fine-grained personal access token": "\u65B0\u5EFA\u7CBE\u7EC6\u5316\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C",
    "New personal access token": "\u65B0\u5EFA\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C",
    "Create a fine-grained, repository-scoped token suitable for personal API use and for using Git over HTTPS.": "\u521B\u5EFA\u7CBE\u7EC6\u5316\u7684\u4ED3\u5E93\u8303\u56F4\u4EE4\u724C\uFF0C\u9002\u7528\u4E8E\u4E2A\u4EBA API \u8C03\u7528\u4EE5\u53CA\u901A\u8FC7 HTTPS \u4F7F\u7528 Git\u3002",
    "These are fine-grained, repository-scoped tokens suitable for personal API use and for using Git over HTTPS.": "\u8FD9\u4E9B\u662F\u7CBE\u7EC6\u5316\u7684\u4ED3\u5E93\u8303\u56F4\u4EE4\u724C\uFF0C\u9002\u7528\u4E8E\u4E2A\u4EBA API \u8C03\u7528\u4EE5\u53CA\u901A\u8FC7 HTTPS \u4F7F\u7528 Git\u3002",
    "Token name": "\u4EE4\u724C\u540D\u79F0",
    "' is available.": "\u53EF\u7528\u3002",
    "personal access token": "\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C",
    "A unique name for this token. May be visible to resource owners or users with possession of the token.": "\u6B64\u4EE4\u724C\u7684\u552F\u4E00\u540D\u79F0\u3002\u8D44\u6E90\u6240\u6709\u8005\u6216\u6301\u6709\u6B64\u4EE4\u724C\u7684\u7528\u6237\u53EF\u80FD\u4F1A\u770B\u5230\u5B83\u3002",
    "Resource owner": "\u8D44\u6E90\u6240\u6709\u8005",
    "Select resource owner": "\u9009\u62E9\u8D44\u6E90\u6240\u6709\u8005",
    "You may only select resource owners with fine-grained PATs enabled.": "\u4F60\u53EA\u80FD\u9009\u62E9\u5DF2\u542F\u7528\u7CBE\u7EC6\u5316 PAT \u7684\u8D44\u6E90\u6240\u6709\u8005\u3002",
    "The token will only be able to make changes to resources owned by the selected resource owner. Tokens can always read all public repositories.": "\u6B64\u4EE4\u724C\u53EA\u80FD\u4FEE\u6539\u6240\u9009\u8D44\u6E90\u6240\u6709\u8005\u62E5\u6709\u7684\u8D44\u6E90\u3002\u4EE4\u724C\u59CB\u7EC8\u53EF\u4EE5\u8BFB\u53D6\u6240\u6709\u516C\u5F00\u4ED3\u5E93\u3002",
    Expiration: "\u8FC7\u671F\u65F6\u95F4",
    "No expiration": "\u6C38\u4E0D\u8FC7\u671F",
    "Select date": "\u9009\u62E9\u65E5\u671F",
    "Select date *": "\u9009\u62E9\u65E5\u671F *",
    "Expiration date can't be blank": "\u8FC7\u671F\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A",
    "The token will expire on the selected date": "\u4EE4\u724C\u5C06\u5728\u6240\u9009\u65E5\u671F\u8FC7\u671F",
    "GitHub strongly recommends that you set an expiration date for your token to help keep your information secure.": "GitHub \u5F3A\u70C8\u5EFA\u8BAE\u4E3A\u4EE4\u724C\u8BBE\u7F6E\u8FC7\u671F\u65E5\u671F\uFF0C\u4EE5\u4FDD\u969C\u4F60\u7684\u4FE1\u606F\u5B89\u5168\u3002",
    "Read-only": "\u53EA\u8BFB",
    "Read and write": "\u8BFB\u5199",
    "Read-only access to public repositories.": "\u5BF9\u516C\u5F00\u4ED3\u5E93\u7684\u53EA\u8BFB\u8BBF\u95EE\u6743\u9650\u3002",
    "This applies to all current and future repositories you own. Also includes public repositories (read-only).": "\u8FD9\u9002\u7528\u4E8E\u4F60\u62E5\u6709\u7684\u6240\u6709\u73B0\u6709\u53CA\u672A\u6765\u4ED3\u5E93\u3002\u540C\u65F6\u5305\u542B\u516C\u5F00\u4ED3\u5E93\uFF08\u53EA\u8BFB\uFF09\u3002",
    "Only select repositories": "\u4EC5\u9009\u62E9\u4ED3\u5E93",
    "Select at least one repository. Max 50 repositories. Also includes public repositories (read-only).": "\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u4ED3\u5E93\uFF0C\u6700\u591A 50 \u4E2A\u3002\u540C\u65F6\u5305\u542B\u516C\u5F00\u4ED3\u5E93\uFF08\u53EA\u8BFB\uFF09\u3002",
    Permissions: "\u6743\u9650",
    "Choose the minimal permissions necessary for your needs.": "\u9009\u62E9\u6EE1\u8DB3\u9700\u6C42\u6240\u9700\u7684\u6700\u5C0F\u6743\u9650\u3002",
    "Learn more about permissions.": "\u8FDB\u4E00\u6B65\u4E86\u89E3\u6743\u9650\u3002",
    "Add permissions": "\u6DFB\u52A0\u6743\u9650",
    "Permission Blank Slate": "\u6743\u9650\u7A7A\u72B6\u6001\u63D0\u793A",
    "No account permissions added yet": "\u5C1A\u672A\u6DFB\u52A0\u8D26\u6237\u6743\u9650",
    "No repository permissions added yet": "\u5C1A\u672A\u6DFB\u52A0\u4ED3\u5E93\u6743\u9650",
    "No organization permissions added yet": "\u5C1A\u672A\u6DFB\u52A0\u7EC4\u7EC7\u6743\u9650",
    "User permissions permit access to resources under your personal GitHub account.": "\u7528\u6237\u6743\u9650\u5141\u8BB8\u8BBF\u95EE\u4F60\u4E2A\u4EBA GitHub \u8D26\u6237\u4E0B\u7684\u8D44\u6E90\u3002",
    "Generate token": "\u751F\u6210\u4EE4\u724C",
    "Your new personal access token": "\u4F60\u7684\u65B0\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C",
    "will be ready for use immediately. It will expire on": "\u5DF2\u53EF\u7ACB\u5373\u4F7F\u7528\uFF0C\u8FC7\u671F\u65F6\u95F4\u4E3A",
    "This token will be ready for use immediately.": "\u6B64\u4EE4\u724C\u5C06\u7ACB\u5373\u53EF\u7528\u3002",
    "Make sure to copy your personal access token now as you will not be able to see this again.": "\u8BF7\u7ACB\u5373\u590D\u5236\u4F60\u7684\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\uFF0C\u4E4B\u540E\u5C06\u65E0\u6CD5\u518D\u6B21\u67E5\u770B\u3002",
    "Make sure to copy your personal access token now as you will not be able to see it again.": "\u8BF7\u7ACB\u5373\u590D\u5236\u4F60\u7684\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\uFF0C\u4E4B\u540E\u5C06\u65E0\u6CD5\u518D\u6B21\u67E5\u770B\u3002",
    "Make sure to copy your personal access token now. You won't be able to see it again!": "\u8BF7\u7ACB\u5373\u590D\u5236\u4F60\u7684\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\uFF0C\u4E4B\u540E\u5C06\u65E0\u6CD5\u518D\u6B21\u67E5\u770B\uFF01",
    "Make sure to copy your personal access token now. You won't be able to see it again.": "\u8BF7\u7ACB\u5373\u590D\u5236\u4F60\u7684\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\uFF0C\u4E4B\u540E\u5C06\u65E0\u6CD5\u518D\u6B21\u67E5\u770B\u3002",
    "Authorization check": "\u6388\u6743\u68C0\u67E5",
    "Something went wrong while checking. Please retry.": "\u68C0\u67E5\u65F6\u51FA\u9519\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    "See the documentation": "\u67E5\u770B\u6587\u6863",
    "for more information.": "\u4EE5\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002",
    "Retry check": "\u91CD\u8BD5\u68C0\u67E5",
    "Authorization failed": "\u6388\u6743\u5931\u8D25",
    "At this time, you do not meet all requirements to access this organization.": "\u76EE\u524D\u4F60\u5C1A\u672A\u6EE1\u8DB3\u8BBF\u95EE\u6B64\u7EC4\u7EC7\u7684\u5168\u90E8\u8981\u6C42\u3002",
    "Authorizing...": "\u6388\u6743\u4E2D...",
    Account: "\u8D26\u6237",
    "Public profile": "\u516C\u5F00\u8D44\u6599",
    "Budgets and alerts": "\u9884\u7B97\u548C\u63D0\u9192",
    Licensing: "\u8BB8\u53EF",
    "Payment information": "\u4ED8\u6B3E\u4FE1\u606F",
    "Payment history": "\u4ED8\u6B3E\u8BB0\u5F55",
    Emails: "\u90AE\u7BB1",
    "Password and authentication": "\u5BC6\u7801\u548C\u8EAB\u4EFD\u9A8C\u8BC1",
    Credentials: "\u51ED\u636E",
    "Billing and licensing": "\u8D26\u5355\u548C\u8BB8\u53EF",
    "AI usage": "AI \u7528\u91CF",
    "Additional billing details": "\u9644\u52A0\u8D26\u5355\u4FE1\u606F",
    "Education benefits": "\u6559\u80B2\u4F18\u60E0",
    Sessions: "\u4F1A\u8BDD",
    "SSH and GPG keys": "SSH \u548C GPG \u5BC6\u94A5",
    "Saved replies": "\u5DF2\u4FDD\u5B58\u7684\u56DE\u590D",
    "Code security": "\u4EE3\u7801\u5B89\u5168",
    Applications: "\u5E94\u7528\u7A0B\u5E8F",
    "Scheduled reminders": "\u5B9A\u65F6\u63D0\u9192",
    "Security log": "\u5B89\u5168\u65E5\u5FD7",
    "Sponsorship log": "\u8D5E\u52A9\u65E5\u5FD7",
    "Developer settings": "\u5F00\u53D1\u8005\u8BBE\u7F6E",
    "Your personal account": "\u4F60\u7684\u4E2A\u4EBA\u8D26\u6237",
    "Settings menu": "\u8BBE\u7F6E\u83DC\u5355",
    "User navigation": "\u7528\u6237\u5BFC\u822A",
    "Manage email preferences": "\u7BA1\u7406\u90AE\u7BB1\u504F\u597D",
    "Disconnect from Google": "\u65AD\u5F00\u4E0E Google \u7684\u8FDE\u63A5",
    Manage: "\u7BA1\u7406",
    "Selected theme:": "\u5DF2\u9009\u4E3B\u9898\uFF1A",
    "Light default": "\u6D45\u8272\u9ED8\u8BA4",
    "Light protanopia and deuteranopia": "\u6D45\u8272\u7EA2\u8272\u76F2\u548C\u7EFF\u8272\u76F2",
    "Light tritanopia": "\u6D45\u8272\u84DD\u8272\u76F2",
    "Dark default": "\u6DF1\u8272\u9ED8\u8BA4",
    "Dark protanopia and deuteranopia": "\u6DF1\u8272\u7EA2\u8272\u76F2\u548C\u7EFF\u8272\u76F2",
    "Dark tritanopia": "\u6DF1\u8272\u84DD\u8272\u76F2",
    "Soft dark": "\u67D4\u548C\u6DF1\u8272",
    "Theme preferences": "\u4E3B\u9898\u504F\u597D",
    "Theme mode": "\u4E3B\u9898\u6A21\u5F0F",
    "GitHub will use your selected theme": "GitHub \u5C06\u4F7F\u7528\u4F60\u9009\u62E9\u7684\u4E3B\u9898",
    "GitHub theme will match your system active settings": "GitHub \u4E3B\u9898\u5C06\u5339\u914D\u4F60\u7684\u7CFB\u7EDF\u6D3B\u52A8\u8BBE\u7F6E",
    "Light theme": "\u6D45\u8272\u4E3B\u9898",
    'This theme will be active when your system is set to "light mode"': '\u5F53\u4F60\u7684\u7CFB\u7EDF\u8BBE\u7F6E\u4E3A"\u6D45\u8272\u6A21\u5F0F"\u65F6\uFF0C\u6B64\u4E3B\u9898\u5C06\u751F\u6548',
    "Dark theme": "\u6DF1\u8272\u4E3B\u9898",
    'This theme will be active when your system is set to "dark mode"': '\u5F53\u4F60\u7684\u7CFB\u7EDF\u8BBE\u7F6E\u4E3A"\u6DF1\u8272\u6A21\u5F0F"\u65F6\uFF0C\u6B64\u4E3B\u9898\u5C06\u751F\u6548',
    "Emoji skin tone preference": "\u8868\u60C5\u7B26\u53F7\u80A4\u8272\u504F\u597D",
    "Preferred default emoji skin tone": "\u9996\u9009\u9ED8\u8BA4\u8868\u60C5\u7B26\u53F7\u80A4\u8272",
    "Light Skin Tone": "\u6D45\u80A4\u8272",
    "Medium-Light Skin Tone": "\u4E2D\u6D45\u80A4\u8272",
    "Medium Skin Tone": "\u4E2D\u7B49\u80A4\u8272",
    "Medium-Dark Skin Tone": "\u4E2D\u6DF1\u80A4\u8272",
    "Dark Skin Tone": "\u6DF1\u80A4\u8272",
    "Tab size preference": "\u5236\u8868\u7B26\u5BBD\u5EA6\u504F\u597D",
    "Choose the number of spaces a tab is equal to when rendering code": "\u9009\u62E9\u6E32\u67D3\u4EE3\u7801\u65F6\u5236\u8868\u7B26\u7B49\u4E8E\u7684\u7A7A\u683C\u6570",
    "Markdown editor font preference": "Markdown \u7F16\u8F91\u5668\u5B57\u4F53\u504F\u597D",
    "Use a fixed-width (monospace) font when editing Markdown": "\u7F16\u8F91 Markdown \u65F6\u4F7F\u7528\u7B49\u5BBD\u5B57\u4F53",
    Contrast: "\u5BF9\u6BD4\u5EA6",
    "Increase contrast": "\u589E\u52A0\u5BF9\u6BD4\u5EA6",
    "Enable high contrast for light or dark mode (or both) based on your system settings": "\u6839\u636E\u4F60\u7684\u7CFB\u7EDF\u8BBE\u7F6E\uFF0C\u4E3A\u6D45\u8272\u6216\u6DF1\u8272\u6A21\u5F0F\uFF08\u6216\u4E24\u8005\uFF09\u542F\u7528\u9AD8\u5BF9\u6BD4\u5EA6",
    "Light mode": "\u6D45\u8272\u6A21\u5F0F",
    "Dark mode": "\u6DF1\u8272\u6A21\u5F0F",
    Off: "\u5173",
    On: "\u5F00",
    Yes: "\u662F",
    "Notify me:": "\u901A\u77E5\u6211\uFF1A",
    "Default notifications email": "\u9ED8\u8BA4\u901A\u77E5\u90AE\u7BB1",
    "Custom routing": "\u81EA\u5B9A\u4E49\u8DEF\u7531",
    Subscriptions: "\u8BA2\u9605",
    Watching: "\u6B63\u5728\u5173\u6CE8",
    "View watched repositories": "\u67E5\u770B\u5DF2\u5173\u6CE8\u7684\u4ED3\u5E93",
    "Participating, @mentions and custom": "\u53C2\u4E0E\u3001@\u63D0\u53CA\u548C\u81EA\u5B9A\u4E49",
    "Customize email updates": "\u81EA\u5B9A\u4E49\u90AE\u4EF6\u66F4\u65B0",
    "Reviews, Pushes, Comments": "\u5BA1\u67E5\u3001\u63A8\u9001\u3001\u8BC4\u8BBA",
    "Ignored repositories": "\u5DF2\u5FFD\u7565\u7684\u4ED3\u5E93",
    "You'll never be notified.": "\u4F60\u5C06\u6C38\u8FDC\u4E0D\u4F1A\u6536\u5230\u901A\u77E5\u3002",
    "View ignored repositories": "\u67E5\u770B\u5DF2\u5FFD\u7565\u7684\u4ED3\u5E93",
    System: "\u7CFB\u7EDF",
    "Failed workflows only": "\u4EC5\u5931\u8D25\u7684\u5DE5\u4F5C\u6D41",
    "Dependabot alerts: New vulnerabilities": "Dependabot \u8B66\u62A5\uFF1A\u65B0\u6F0F\u6D1E",
    "Dependabot alerts": "Dependabot \u8B66\u62A5",
    "Dependabot alerts: Email digest": "Dependabot \u8B66\u62A5\uFF1A\u90AE\u4EF6\u6458\u8981",
    "Don't send": "\u4E0D\u53D1\u9001",
    "Security campaign emails": "\u5B89\u5168\u6D3B\u52A8\u90AE\u4EF6",
    "Agent sessions": "\u667A\u80FD\u4F53\u4F1A\u8BDD",
    "'Deploy key' alert email": '"\u90E8\u7F72\u5BC6\u94A5"\u8B66\u62A5\u90AE\u4EF6',
    "In-product messages": "\u4EA7\u54C1\u5185\u6D88\u606F",
    "Budgets let you set monthly usage limits for specific GitHub products or SKUs. If no budget is set, usage for that product is unlimited.": "\u9884\u7B97\u53EF\u8BA9\u4F60\u4E3A\u7279\u5B9A GitHub \u4EA7\u54C1\u6216 SKU \u8BBE\u7F6E\u6BCF\u6708\u7528\u91CF\u4E0A\u9650\u3002\u5982\u679C\u672A\u8BBE\u7F6E\u9884\u7B97\uFF0C\u8BE5\u4EA7\u54C1\u7684\u7528\u91CF\u4E0D\u53D7\u9650\u5236\u3002",
    "New budget": "\u65B0\u5EFA\u9884\u7B97",
    "Account budgets": "\u8D26\u6237\u9884\u7B97",
    Budgets: "\u9884\u7B97",
    Product: "\u4EA7\u54C1",
    "Stop usage": "\u505C\u6B62\u4F7F\u7528",
    spent: "\u5DF2\u82B1\u8D39",
    budget: "\u9884\u7B97",
    "Included usage alerts:": "\u5305\u542B\u7684\u7528\u91CF\u63D0\u9192\uFF1A",
    "Learn more.": "\u4E86\u89E3\u66F4\u591A\u3002",
    "Amounts shown in USD": "\u91D1\u989D\u4EE5\u7F8E\u5143\u663E\u793A",
    "You have not made any payments.": "\u4F60\u8FD8\u6CA1\u6709\u8FDB\u884C\u4EFB\u4F55\u4ED8\u6B3E\u3002",
    "Start your first organization": "\u521B\u5EFA\u4F60\u7684\u7B2C\u4E00\u4E2A\u7EC4\u7EC7",
    "Create an organization": "\u521B\u5EFA\u7EC4\u7EC7",
    "GitHub Sponsors": "GitHub \u8D5E\u52A9",
    "Start sponsoring": "\u5F00\u59CB\u8D5E\u52A9",
    "You're currently not sponsoring anyone.": "\u4F60\u76EE\u524D\u6CA1\u6709\u8D5E\u52A9\u4EFB\u4F55\u4EBA\u3002",
    "Learn more about GitHub Sponsors": "\u4E86\u89E3 GitHub \u8D5E\u52A9\u7684\u66F4\u591A\u4FE1\u606F",
    Hovercards: "\u60AC\u6D6E\u5361\u7247",
    "Keyboard shortcuts": "\u952E\u76D8\u5FEB\u6377\u952E",
    "Character keys": "\u5B57\u7B26\u952E",
    Enable: "\u542F\u7528",
    "GitHub shortcuts": "GitHub \u5FEB\u6377\u952E",
    "question mark": "\u95EE\u53F7",
    "Save keyboard shortcut preferences": "\u4FDD\u5B58\u952E\u76D8\u5FEB\u6377\u952E\u504F\u597D",
    Motion: "\u52A8\u6001\u6548\u679C",
    "Autoplay animated images": "\u81EA\u52A8\u64AD\u653E\u52A8\u753B\u56FE\u7247",
    "Sync with system": "\u4E0E\u7CFB\u7EDF\u540C\u6B65",
    Enabled: "\u5DF2\u542F\u7528",
    Disabled: "\u5DF2\u7981\u7528",
    "Save motion preferences": "\u4FDD\u5B58\u52A8\u6001\u6548\u679C\u504F\u597D",
    Content: "\u5185\u5BB9",
    "Link underlines": "\u94FE\u63A5\u4E0B\u5212\u7EBF",
    "Hide link underlines": "\u9690\u85CF\u94FE\u63A5\u4E0B\u5212\u7EBF",
    "Show link underlines": "\u663E\u793A\u94FE\u63A5\u4E0B\u5212\u7EBF",
    "Save content preferences": "\u4FDD\u5B58\u5185\u5BB9\u504F\u597D",
    "Show hovercards": "\u663E\u793A\u60AC\u6D6E\u5361\u7247",
    "Save hovercard preferences": "\u4FDD\u5B58\u60AC\u6D6E\u5361\u7247\u504F\u597D",
    "Editor settings": "\u7F16\u8F91\u5668\u8BBE\u7F6E",
    "URL paste behavior": "URL \u7C98\u8D34\u884C\u4E3A",
    "Formatted link": "\u683C\u5F0F\u5316\u94FE\u63A5",
    "Plain text": "\u7EAF\u6587\u672C",
    "Save editor settings": "\u4FDD\u5B58\u7F16\u8F91\u5668\u8BBE\u7F6E",
    "Assistive technology hints": "\u8F85\u52A9\u6280\u672F\u63D0\u793A",
    "Enable screen reader hint": "\u542F\u7528\u5C4F\u5E55\u9605\u8BFB\u5668\u63D0\u793A",
    "Disable screen reader hint": "\u7981\u7528\u5C4F\u5E55\u9605\u8BFB\u5668\u63D0\u793A",
    "Save assistive technology hint preferences": "\u4FDD\u5B58\u8F85\u52A9\u6280\u672F\u63D0\u793A\u504F\u597D",
    "Public email": "\u516C\u5F00\u90AE\u7BB1",
    Pronouns: "\u4EE3\u8BCD",
    URL: "\u7F51\u5740",
    "Social accounts": "\u793E\u4EA4\u8D26\u53F7",
    "Display current local time": "\u663E\u793A\u5F53\u524D\u672C\u5730\u65F6\u95F4",
    "Time zone": "\u65F6\u533A",
    "ORCID iD": "ORCID iD",
    "Connect your ORCID iD": "\u8FDE\u63A5\u4F60\u7684 ORCID iD",
    "Update profile": "\u66F4\u65B0\u8D44\u6599",
    "Profile picture": "\u5934\u50CF",
    "Upload a photo\u2026": "\u4E0A\u4F20\u7167\u7247\u2026",
    "Contributions & activity": "\u8D21\u732E\u4E0E\u6D3B\u52A8",
    "Make profile private and hide activity": "\u5C06\u8D44\u6599\u8BBE\u4E3A\u79C1\u6709\u5E76\u9690\u85CF\u6D3B\u52A8",
    "Include private contributions on my profile": "\u5728\u6211\u7684\u8D44\u6599\u4E2D\u5305\u542B\u79C1\u6709\u8D21\u732E",
    "Profile settings": "\u8D44\u6599\u8BBE\u7F6E",
    "Show Achievements on my profile": "\u5728\u6211\u7684\u8D44\u6599\u4E0A\u663E\u793A\u6210\u5C31",
    "GitHub Developer Program": "GitHub \u5F00\u53D1\u8005\u8BA1\u5212",
    "Join the GitHub Developer Program": "\u52A0\u5165 GitHub \u5F00\u53D1\u8005\u8BA1\u5212",
    "Jobs profile": "\u6C42\u804C\u8D44\u6599",
    "Save jobs profile": "\u4FDD\u5B58\u6C42\u804C\u8D44\u6599",
    "Trending settings": "\u8D8B\u52BF\u8BBE\u7F6E",
    "Preferred spoken language": "\u9996\u9009\u8BED\u8A00",
    "Trending Repositories": "\u70ED\u95E8\u4ED3\u5E93",
    "Change username": "\u66F4\u6539\u7528\u6237\u540D",
    "Really change your username?": "\u771F\u7684\u8981\u66F4\u6539\u4F60\u7684\u7528\u6237\u540D\u5417\uFF1F",
    "I understand, let's change my username": "\u6211\u4E86\u89E3\uFF0C\u66F4\u6539\u6211\u7684\u7528\u6237\u540D",
    "Enter a new username": "\u8F93\u5165\u65B0\u7528\u6237\u540D",
    "Change my username": "\u66F4\u6539\u6211\u7684\u7528\u6237\u540D",
    "Renaming may take a few minutes to complete.": "\u91CD\u547D\u540D\u53EF\u80FD\u9700\u8981\u51E0\u5206\u949F\u624D\u80FD\u5B8C\u6210\u3002",
    "Link Patreon account": "\u5173\u8054 Patreon \u8D26\u6237",
    "Connect with Patreon": "\u8FDE\u63A5 Patreon",
    "Export account data": "\u5BFC\u51FA\u8D26\u6237\u6570\u636E",
    "Successor settings": "\u7EE7\u4EFB\u8005\u8BBE\u7F6E",
    "Add Successor": "\u6DFB\u52A0\u7EE7\u4EFB\u8005",
    "You have not designated a successor.": "\u4F60\u5C1A\u672A\u6307\u5B9A\u7EE7\u4EFB\u8005\u3002",
    "Search by username, full name, or email address": "\u6309\u7528\u6237\u540D\u3001\u5168\u540D\u6216\u90AE\u7BB1\u5730\u5740\u641C\u7D22",
    "Delete account": "\u5220\u9664\u8D26\u6237",
    "Once you delete your account, there is no going back. Please be certain.": "\u5220\u9664\u8D26\u6237\u540E\u65E0\u6CD5\u6062\u590D\u3002\u8BF7\u52A1\u5FC5\u786E\u8BA4\u3002",
    "Delete your account": "\u5220\u9664\u4F60\u7684\u8D26\u6237",
    "Are you sure you want to do this?": "\u4F60\u786E\u5B9A\u8981\u8FD9\u6837\u505A\u5417\uFF1F",
    "This is extremely important.": "\u8FD9\u975E\u5E38\u91CD\u8981\u3002",
    "Your username or email:": "\u4F60\u7684\u7528\u6237\u540D\u6216\u90AE\u7BB1\uFF1A",
    "To verify, type": "\u8981\u9A8C\u8BC1\uFF0C\u8BF7\u8F93\u5165",
    "delete my account": "delete my account",
    "exactly as it appears:": "\u5B8C\u5168\u6309\u7167\u663E\u793A\u7684\u6837\u5B50\uFF1A",
    "You'll be prompted to verify your identity before account deletion.": "\u5220\u9664\u8D26\u6237\u524D\uFF0C\u7CFB\u7EDF\u4F1A\u63D0\u793A\u4F60\u9A8C\u8BC1\u8EAB\u4EFD\u3002",
    "Cancel plan and delete this account": "\u53D6\u6D88\u5957\u9910\u5E76\u5220\u9664\u6B64\u8D26\u6237",
    "Add email address": "\u6DFB\u52A0\u90AE\u7BB1\u5730\u5740",
    "Primary email address": "\u4E3B\u90AE\u7BB1\u5730\u5740",
    "Backup email address": "\u5907\u7528\u90AE\u7BB1\u5730\u5740",
    "Keep my email addresses private": "\u4FDD\u6301\u6211\u7684\u90AE\u7BB1\u5730\u5740\u4E3A\u79C1\u6709",
    "Block command line pushes that expose my email": "\u963B\u6B62\u66B4\u9732\u6211\u90AE\u7BB1\u7684\u547D\u4EE4\u884C\u63A8\u9001",
    Disconnect: "\u65AD\u5F00\u8FDE\u63A5",
    "Are you sure you want to disable two-factor authentication?": "\u4F60\u786E\u5B9A\u8981\u7981\u7528\u53CC\u56E0\u7D20\u8EAB\u4EFD\u9A8C\u8BC1\u5417\uFF1F",
    "Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to sign in.": "\u53CC\u56E0\u7D20\u8EAB\u4EFD\u9A8C\u8BC1\u8981\u6C42\u767B\u5F55\u65F6\u4E0D\u4EC5\u9700\u8981\u5BC6\u7801\uFF0C\u4E3A\u4F60\u7684\u8D26\u6237\u589E\u52A0\u4E86\u4E00\u5C42\u989D\u5916\u7684\u5B89\u5168\u4FDD\u969C\u3002",
    "Sign in methods": "\u767B\u5F55\u65B9\u5F0F",
    Password: "\u5BC6\u7801",
    Configured: "\u5DF2\u914D\u7F6E",
    "Change password": "\u66F4\u6539\u5BC6\u7801",
    "Old password": "\u65E7\u5BC6\u7801",
    "New password": "\u65B0\u5BC6\u7801",
    "Confirm new password": "\u786E\u8BA4\u65B0\u5BC6\u7801",
    "Update password": "\u66F4\u65B0\u5BC6\u7801",
    "I forgot my password": "\u6211\u5FD8\u8BB0\u4E86\u6211\u7684\u5BC6\u7801",
    Passkeys: "\u901A\u884C\u5BC6\u94A5",
    "Passwordless sign-in with biometrics or security keys": "\u4F7F\u7528\u751F\u7269\u8BC6\u522B\u6216\u5B89\u5168\u5BC6\u94A5\u8FDB\u884C\u65E0\u5BC6\u7801\u767B\u5F55",
    "Add passkey": "\u6DFB\u52A0\u901A\u884C\u5BC6\u94A5",
    "Sign in with your Apple account": "\u4F7F\u7528\u4F60\u7684 Apple \u8D26\u6237\u767B\u5F55",
    Connect: "\u8FDE\u63A5",
    Disable: "\u7981\u7528",
    "Two-factor authentication": "\u53CC\u56E0\u7D20\u8EAB\u4EFD\u9A8C\u8BC1",
    "Two-factor authentication is not enabled yet.": "\u5C1A\u672A\u542F\u7528\u53CC\u56E0\u7D20\u8EAB\u4EFD\u9A8C\u8BC1\u3002",
    "Enable two-factor authentication": "\u542F\u7528\u53CC\u56E0\u7D20\u8EAB\u4EFD\u9A8C\u8BC1",
    "Add account": "\u6DFB\u52A0\u8D26\u6237",
    "SSH keys": "SSH \u5BC6\u94A5",
    "New SSH key": "\u65B0\u5EFA SSH \u5BC6\u94A5",
    "There are no SSH keys associated with your account.": "\u4F60\u7684\u8D26\u6237\u6CA1\u6709\u5173\u8054 SSH \u5BC6\u94A5\u3002",
    "GPG keys": "GPG \u5BC6\u94A5",
    "New GPG key": "\u65B0\u5EFA GPG \u5BC6\u94A5",
    "There are no GPG keys associated with your account.": "\u4F60\u7684\u8D26\u6237\u6CA1\u6709\u5173\u8054 GPG \u5BC6\u94A5\u3002",
    "Vigilant mode": "\u8B66\u60D5\u6A21\u5F0F",
    "Flag unsigned commits as unverified": "\u5C06\u672A\u7B7E\u540D\u63D0\u4EA4\u6807\u8BB0\u4E3A\u672A\u9A8C\u8BC1",
    "Learn about vigilant mode": "\u4E86\u89E3\u8B66\u60D5\u6A21\u5F0F",
    "Web sessions": "\u7F51\u9875\u4F1A\u8BDD",
    "This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.": "\u8FD9\u662F\u5DF2\u767B\u5F55\u4F60\u8D26\u6237\u7684\u8BBE\u5907\u5217\u8868\u3002\u64A4\u9500\u4EFB\u4F55\u4F60\u4E0D\u8BA4\u8BC6\u7684\u4F1A\u8BDD\u3002",
    active: "\u6D3B\u8DC3",
    "Your current session": "\u4F60\u5F53\u524D\u7684\u4F1A\u8BDD",
    stale: "\u8FC7\u671F",
    "Last accessed on": "\u4E0A\u6B21\u8BBF\u95EE\u4E8E",
    "GitHub Mobile sessions": "GitHub \u79FB\u52A8\u7AEF\u4F1A\u8BDD",
    "View and manage all the credentials generated or authorized by your personal account.": "\u67E5\u770B\u5E76\u7BA1\u7406\u7531\u4F60\u7684\u4E2A\u4EBA\u8D26\u6237\u751F\u6210\u6216\u6388\u6743\u7684\u6240\u6709\u51ED\u636E\u3002",
    "Fine-grained personal access tokens": "\u7CBE\u7EC6\u5316\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C",
    "Fine-grained personal access tokens generated by your personal account.": "\u7531\u4F60\u7684\u4E2A\u4EBA\u8D26\u6237\u751F\u6210\u7684\u7CBE\u7EC6\u5316\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u3002",
    "Personal access tokens (classic) generated by your personal account.": "\u7531\u4F60\u7684\u4E2A\u4EBA\u8D26\u6237\u751F\u6210\u7684\u7ECF\u5178\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u3002",
    "Authorized OAuth apps": "\u5DF2\u6388\u6743\u7684 OAuth \u5E94\u7528",
    "OAuth apps that have been authorized to access your account.": "\u5DF2\u88AB\u6388\u6743\u8BBF\u95EE\u4F60\u8D26\u6237\u7684 OAuth \u5E94\u7528\u3002",
    "Authorized GitHub Apps": "\u5DF2\u6388\u6743\u7684 GitHub \u5E94\u7528",
    "GitHub Apps that have been authorized to access your account.": "\u5DF2\u88AB\u6388\u6743\u8BBF\u95EE\u4F60\u8D26\u6237\u7684 GitHub \u5E94\u7528\u3002",
    "SSH keys associated with your account.": "\u4E0E\u4F60\u8D26\u6237\u5173\u8054\u7684 SSH \u5BC6\u94A5\u3002",
    "Billing information": "\u8D26\u5355\u4FE1\u606F",
    "First name": "\u540D\u5B57",
    "Last name": "\u59D3\u6C0F",
    Address: "\u5730\u5740",
    "(Street, P.O. box)": "\uFF08\u8857\u9053\u3001\u90AE\u653F\u4FE1\u7BB1\uFF09",
    "Address line 2": "\u5730\u5740\u7B2C\u4E8C\u884C",
    "(Apartment, suite, unit)": "\uFF08\u516C\u5BD3\u3001\u5957\u623F\u3001\u5355\u5143\uFF09",
    City: "\u57CE\u5E02",
    "Postal/Zip code": "\u90AE\u653F\u7F16\u7801",
    "(9-digit zip code for US)": "\uFF08\u7F8E\u56FD 9 \u4F4D\u90AE\u653F\u7F16\u7801\uFF09",
    "VAT/GST ID": "VAT/GST \u7A0E\u53F7",
    "Save billing information": "\u4FDD\u5B58\u8D26\u5355\u4FE1\u606F",
    "Pay with": "\u652F\u4ED8\u65B9\u5F0F",
    "Credit or debit card": "\u4FE1\u7528\u5361\u6216\u501F\u8BB0\u5361",
    "PayPal account": "PayPal \u8D26\u6237",
    Coupon: "\u4F18\u60E0\u5238",
    "Redeem a coupon": "\u5151\u6362\u4F18\u60E0\u5238",
    "You don't have an active coupon.": "\u4F60\u6CA1\u6709\u4EFB\u4F55\u6709\u6548\u7684\u4F18\u60E0\u5238\u3002",
    "Additional information": "\u9644\u52A0\u4FE1\u606F",
    "Add information": "\u6DFB\u52A0\u4FE1\u606F",
    "Extra billing information": "\u989D\u5916\u8D26\u5355\u4FE1\u606F",
    "Save contact information": "\u4FDD\u5B58\u8054\u7CFB\u4FE1\u606F",
    "Full business name or address of record": "\u5B8C\u6574\u7684\u516C\u53F8\u540D\u79F0\u6216\u6CE8\u518C\u5730\u5740",
    "Your AI pair programmer": "\u4F60\u7684 AI \u7ED3\u5BF9\u7A0B\u5E8F\u5458",
    "Upgrade Copilot": "\u5347\u7EA7 Copilot",
    "Active subscription": "\u5F53\u524D\u8BA2\u9605",
    "Copilot Free": "Copilot Free",
    "Current GitHub base plan": "\u5F53\u524D GitHub \u57FA\u7840\u5957\u9910",
    "Compare base plans": "\u6BD4\u8F83\u57FA\u7840\u5957\u9910",
    "Upgrade to GitHub Pro": "\u5347\u7EA7\u5230 GitHub Pro",
    "GitHub Free": "GitHub Free",
    "The basics for all developers": "\u6240\u6709\u5F00\u53D1\u8005\u7684\u57FA\u7840\u529F\u80FD",
    "Unlimited public/private repos": "\u65E0\u9650\u516C\u5171/\u79C1\u6709\u4ED3\u5E93",
    "Unlimited collaborators": "\u65E0\u9650\u534F\u4F5C\u8005",
    "2,000 Actions minutes/month": "\u6BCF\u6708 2,000 \u5206\u949F\u64CD\u4F5C\u65F6\u957F",
    "500MB of Packages storage": "500MB \u8F6F\u4EF6\u5305\u5B58\u50A8",
    "120 core-hours of Codespaces compute per developer": "\u6BCF\u4F4D\u5F00\u53D1\u8005 120 \u6838\u5FC3\u5C0F\u65F6\u7684 Codespaces \u8BA1\u7B97",
    "15GB of Codespaces storage per developer": "\u6BCF\u4F4D\u5F00\u53D1\u8005 15GB \u7684 Codespaces \u5B58\u50A8",
    "Community support": "\u793E\u533A\u652F\u6301",
    "Not included:": "\u4E0D\u5305\u62EC\uFF1A",
    "Free Codespaces usage per organization": "\u6BCF\u4E2A\u7EC4\u7EC7\u7684\u514D\u8D39 Codespaces \u7528\u91CF",
    "Protected branches on all repos": "\u6240\u6709\u4ED3\u5E93\u7684\u5206\u652F\u4FDD\u62A4",
    "Increase Codespaces": "\u589E\u52A0 Codespaces",
    "spend limits": "\u652F\u51FA\u9650\u5236",
    "Multiple reviewers in pull requests": "\u62C9\u53D6\u8BF7\u6C42\u7684\u591A\u4E2A\u5BA1\u67E5\u8005",
    "Required status checks": "\u5FC5\u9700\u7684\u72B6\u6001\u68C0\u67E5",
    "Code owners": "\u4EE3\u7801\u6240\u6709\u8005",
    "Required reviewers": "\u5FC5\u9700\u7684\u5BA1\u67E5\u8005",
    "Pages for static website hosting": "\u7528\u4E8E\u9759\u6001\u7F51\u7AD9\u6258\u7BA1\u7684 Pages",
    "Web-based support": "\u57FA\u4E8E\u7F51\u9875\u7684\u652F\u6301",
    "See all features and compare plans": "\u67E5\u770B\u6240\u6709\u529F\u80FD\u5E76\u6BD4\u8F83\u5957\u9910",
    documentation: "\u6587\u6863",
    "for more details.": "\u4E86\u89E3\u66F4\u591A\u8BE6\u60C5\u3002",
    "Education Benefits Application": "\u6559\u80B2\u4F18\u60E0\u7533\u8BF7",
    "GitHub Education": "GitHub \u6559\u80B2",
    "Free GitHub developer resources for students and teachers": "\u4E3A\u5B66\u751F\u548C\u6559\u5E08\u63D0\u4F9B\u7684\u514D\u8D39 GitHub \u5F00\u53D1\u8005\u8D44\u6E90",
    "Education Benefits": "\u6559\u80B2\u4F18\u60E0",
    "Start an application": "\u5F00\u59CB\u7533\u8BF7",
    "Gathering available school information...": "\u6B63\u5728\u6536\u96C6\u53EF\u7528\u7684\u5B66\u6821\u4FE1\u606F...",
    "Block user": "\u5C4F\u853D\u7528\u6237",
    "Report abuse": "\u4E3E\u62A5\u6EE5\u7528",
    "Year:": "\u5E74\u4EFD\uFF1A",
    "Block or report user": "\u5C4F\u853D\u6216\u4E3E\u62A5\u7528\u6237",
    "blocking users": "\u5C4F\u853D\u7528\u6237",
    "Add an optional note": "\u6DFB\u52A0\u53EF\u9009\u5907\u6CE8",
    "reporting abuse": "\u4E3E\u62A5\u6EE5\u7528",
    "Something went wrong, please refresh the page to try again.": "\u51FA\u9519\u4E86\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5\u3002",
    "GitHub status page": "GitHub \u72B6\u6001\u9875",
    "contact support": "\u8054\u7CFB\u652F\u6301",
    "Contribution Graph": "\u8D21\u732E\u56FE",
    "Day of Week": "\u661F\u671F",
    "Learn how we count contributions": "\u4E86\u89E3\u6211\u4EEC\u5982\u4F55\u7EDF\u8BA1\u8D21\u732E",
    "No contributions.": "\u65E0\u8D21\u732E\u3002",
    "Low contributions.": "\u5C11\u91CF\u8D21\u732E\u3002",
    "Medium-low contributions.": "\u4E2D\u7B49\u504F\u5C11\u8D21\u732E\u3002",
    "Medium-high contributions.": "\u4E2D\u7B49\u504F\u591A\u8D21\u732E\u3002",
    "High contributions.": "\u5927\u91CF\u8D21\u732E\u3002",
    "Built by": "\u7531",
    "Show more activity": "\u663E\u793A\u66F4\u591A\u6D3B\u52A8",
    "Gitty up!": "\u52A0\u6CB9\uFF01",
    "100% unlocked": "100% \u5DF2\u89E3\u9501",
    Unlocked: "\u5DF2\u89E3\u9501",
    inaccessible: "\u4E0D\u53EF\u8BBF\u95EE",
    "Closed within 5 minutes of opening": "\u5728\u6253\u5F00\u540E 5 \u5206\u949F\u5185\u5173\u95ED",
    "Close user navigation menu": "\u5173\u95ED\u7528\u6237\u5BFC\u822A\u83DC\u5355",
    "Account switcher": "\u8D26\u6237\u5207\u6362\u5668",
    "Create new repository": "\u521B\u5EFA\u65B0\u4ED3\u5E93",
    Gists: "\u4EE3\u7801\u7247\u6BB5",
    January: "\u4E00\u6708",
    February: "\u4E8C\u6708",
    March: "\u4E09\u6708",
    April: "\u56DB\u6708",
    May: "\u4E94\u6708",
    June: "\u516D\u6708",
    July: "\u4E03\u6708",
    August: "\u516B\u6708",
    September: "\u4E5D\u6708",
    October: "\u5341\u6708",
    November: "\u5341\u4E00\u6708",
    December: "\u5341\u4E8C\u6708",
    Jan: "1\u6708",
    Feb: "2\u6708",
    Mar: "3\u6708",
    Apr: "4\u6708",
    Jun: "6\u6708",
    Jul: "7\u6708",
    Aug: "8\u6708",
    Sep: "9\u6708",
    Oct: "10\u6708",
    Nov: "11\u6708",
    Dec: "12\u6708",
    Sunday: "\u661F\u671F\u65E5",
    Monday: "\u661F\u671F\u4E00",
    Tuesday: "\u661F\u671F\u4E8C",
    Wednesday: "\u661F\u671F\u4E09",
    Thursday: "\u661F\u671F\u56DB",
    Friday: "\u661F\u671F\u4E94",
    Saturday: "\u661F\u671F\u516D",
    Sun: "\u5468\u65E5",
    Mon: "\u5468\u4E00",
    Tue: "\u5468\u4E8C",
    Wed: "\u5468\u4E09",
    Thu: "\u5468\u56DB",
    Fri: "\u5468\u4E94",
    Sat: "\u5468\u516D",
    "Choose where you'd like emails to be sent. You can add more email addresses. Use custom routes to specify different email addresses to be used for individual organizations.": "\u9009\u62E9\u4F60\u5E0C\u671B\u90AE\u4EF6\u53D1\u9001\u5230\u7684\u4F4D\u7F6E\u3002\u4F60\u53EF\u4EE5\u6DFB\u52A0\u66F4\u591A\u90AE\u7BB1\u5730\u5740\u3002\u4F7F\u7528\u81EA\u5B9A\u4E49\u8DEF\u7531\u4E3A\u4E0D\u540C\u7684\u7EC4\u7EC7\u6307\u5B9A\u4E0D\u540C\u7684\u90AE\u7BB1\u5730\u5740\u3002",
    "Notifications for all repositories, teams, or conversations you're watching.": "\u4F60\u6B63\u5728\u5173\u6CE8\u7684\u6240\u6709\u4ED3\u5E93\u3001\u56E2\u961F\u6216\u5BF9\u8BDD\u7684\u901A\u77E5\u3002",
    "Notifications for the conversations you are participating in, or if someone cites you with an @mention. Also for all activity when subscribed to specific events.": "\u4F60\u53C2\u4E0E\u5BF9\u8BDD\u65F6\u7684\u901A\u77E5\uFF0C\u6216\u6709\u4EBA\u7528 @\u63D0\u53CA\u4F60\u65F6\u7684\u901A\u77E5\u3002\u8BA2\u9605\u7279\u5B9A\u4E8B\u4EF6\u65F6\u4E5F\u4F1A\u6536\u5230\u6240\u6709\u6D3B\u52A8\u901A\u77E5\u3002",
    "Choose which additional events you'll receive emails for when participating or watching.": "\u9009\u62E9\u53C2\u4E0E\u6216\u5173\u6CE8\u65F6\uFF0C\u4F60\u4F1A\u6536\u5230\u54EA\u4E9B\u989D\u5916\u4E8B\u4EF6\u7684\u90AE\u4EF6\u3002",
    "automatically receive notifications when a new vulnerability is found in one of your dependencies.": "\u5F53\u4F60\u7684\u67D0\u4E2A\u4F9D\u8D56\u4E2D\u53D1\u73B0\u65B0\u6F0F\u6D1E\u65F6\u81EA\u52A8\u6536\u5230\u901A\u77E5\u3002",
    "Email a regular summary of Dependabot alerts for up to 10 of your repositories.": "\u5B9A\u671F\u901A\u8FC7\u90AE\u4EF6\u53D1\u9001\u6700\u591A 10 \u4E2A\u4ED3\u5E93\u7684 Dependabot \u8B66\u62A5\u6458\u8981\u3002",
    "Receive email notifications about security campaigns in repositories where you have access to security alerts.": "\u5728\u4F60\u6709\u6743\u8BBF\u95EE\u5B89\u5168\u8B66\u62A5\u7684\u4ED3\u5E93\u4E2D\u63A5\u6536\u5B89\u5168\u6D3B\u52A8\u7684\u90AE\u4EF6\u901A\u77E5\u3002",
    "Notifications for agent sessions that you started.": "\u4F60\u542F\u52A8\u7684\u667A\u80FD\u4F53\u4F1A\u8BDD\u7684\u901A\u77E5\u3002",
    "When you are given admin permissions to an organization, automatically receive notifications when a new deploy key is added.": "\u5F53\u4F60\u83B7\u5F97\u7EC4\u7EC7\u7684\u7BA1\u7406\u5458\u6743\u9650\u65F6\uFF0C\u81EA\u52A8\u63A5\u6536\u65B0\u589E\u90E8\u7F72\u5BC6\u94A5\u7684\u901A\u77E5\u3002",
    "Get tips, solutions and exclusive offers from GitHub about products, services and events we think you might find interesting.": "\u83B7\u53D6\u6211\u4EEC\u53EF\u80FD\u8BA4\u4E3A\u4F60\u611F\u5174\u8DA3\u7684 GitHub \u4EA7\u54C1\u3001\u670D\u52A1\u548C\u6D3B\u52A8\u7684\u63D0\u793A\u3001\u89E3\u51B3\u65B9\u6848\u548C\u4E13\u5C5E\u4F18\u60E0\u3002",
    "Select whether animated images should play automatically.": "\u9009\u62E9\u52A8\u753B\u56FE\u7247\u662F\u5426\u81EA\u52A8\u64AD\u653E\u3002",
    "Adopts your system preference for reduced motion": "\u91C7\u7528\u4F60\u7CFB\u7EDF\u7684\u51CF\u5C11\u52A8\u6001\u6548\u679C\u504F\u597D",
    "Automatically plays animated images": "\u81EA\u52A8\u64AD\u653E\u52A8\u753B\u56FE\u7247",
    "Prevents animated images from playing automatically": "\u963B\u6B62\u52A8\u753B\u56FE\u7247\u81EA\u52A8\u64AD\u653E",
    "Toggle the visibility of underlines on links that are adjacent to text.": "\u5207\u6362\u4E0E\u6587\u672C\u76F8\u90BB\u7684\u94FE\u63A5\u4E0B\u5212\u7EBF\u7684\u53EF\u89C1\u6027\u3002",
    "Add or remove instructions for how to operate complex controls.": "\u6DFB\u52A0\u6216\u79FB\u9664\u64CD\u4F5C\u590D\u6742\u63A7\u4EF6\u7684\u8BF4\u660E\u3002",
    "GitHub's standard light theme with full color contrast and brightness.": "GitHub \u7684\u6807\u51C6\u6D45\u8272\u4E3B\u9898\uFF0C\u5177\u6709\u5B8C\u6574\u7684\u989C\u8272\u5BF9\u6BD4\u5EA6\u548C\u4EAE\u5EA6\u3002",
    "For people who may find it difficult to distinguish between reds and greens.": "\u9002\u5408\u96BE\u4EE5\u533A\u5206\u7EA2\u8272\u548C\u7EFF\u8272\u7684\u4EBA\u3002",
    "For people who find it difficult to distinguish between blues and greens, as well as yellows and purples.": "\u9002\u5408\u96BE\u4EE5\u533A\u5206\u84DD\u8272\u548C\u7EFF\u8272\u3001\u9EC4\u8272\u548C\u7D2B\u8272\u7684\u4EBA\u3002",
    "GitHub's standard dark theme with full color contrast and brightness on a dark background.": "GitHub \u7684\u6807\u51C6\u6DF1\u8272\u4E3B\u9898\uFF0C\u5728\u6DF1\u8272\u80CC\u666F\u4E0A\u5177\u6709\u5B8C\u6574\u7684\u989C\u8272\u5BF9\u6BD4\u5EA6\u548C\u4EAE\u5EA6\u3002",
    "For people who may find it difficult to distinguish between reds and greens, with a dark background.": "\u9002\u5408\u96BE\u4EE5\u533A\u5206\u7EA2\u8272\u548C\u7EFF\u8272\u7684\u4EBA\uFF0C\u91C7\u7528\u6DF1\u8272\u80CC\u666F\u3002",
    "For people who find it difficult to distinguish between blues and greens, as well as yellows and purples, with a dark background.": "\u9002\u5408\u96BE\u4EE5\u533A\u5206\u84DD\u8272\u548C\u7EFF\u8272\u3001\u9EC4\u8272\u548C\u7D2B\u8272\u7684\u4EBA\uFF0C\u91C7\u7528\u6DF1\u8272\u80CC\u666F\u3002",
    "A dark theme with reduced contrast for comfortable viewing in low-light environments.": "\u964D\u4F4E\u5BF9\u6BD4\u5EA6\u7684\u6DF1\u8272\u4E3B\u9898\uFF0C\u9002\u5408\u5728\u4F4E\u5149\u73AF\u5883\u4E0B\u8212\u9002\u67E5\u770B\u3002",
    "Font preference for plain text editors that support Markdown styling (e.g. pull request and issue descriptions, comments.)": "\u652F\u6301 Markdown \u6837\u5F0F\u7684\u7EAF\u6587\u672C\u7F16\u8F91\u5668\u7684\u5B57\u4F53\u504F\u597D\uFF08\u4F8B\u5982\u62C9\u53D6\u8BF7\u6C42\u548C\u8BAE\u9898\u63CF\u8FF0\u3001\u8BC4\u8BBA\uFF09\u3002",
    "Other users will see the time difference from their local time.": "\u5176\u4ED6\u7528\u6237\u5C06\u770B\u5230\u4E0E\u4F60\u672C\u5730\u65F6\u95F4\u7684\u65F6\u5DEE\u3002",
    "Your achievements will be shown on your profile.": "\u4F60\u7684\u6210\u5C31\u5C06\u663E\u793A\u5728\u4F60\u7684\u8D44\u6599\u4E0A\u3002",
    "Building an application, service, or tool that integrates with GitHub?": "\u6B63\u5728\u6784\u5EFA\u4E0E GitHub \u96C6\u6210\u7684\u5E94\u7528\u3001\u670D\u52A1\u6216\u5DE5\u5177\uFF1F",
    "unintended side effects": "\u610F\u60F3\u4E0D\u5230\u7684\u526F\u4F5C\u7528",
    "set up redirects for your old profile page.": "\u4E3A\u4F60\u7684\u65E7\u8D44\u6599\u9875\u8BBE\u7F6E\u91CD\u5B9A\u5411\u3002",
    "set up redirects for Pages sites.": "\u4E3A Pages \u7AD9\u70B9\u8BBE\u7F6E\u91CD\u5B9A\u5411\u3002",
    "Learn more about account successors.": "\u4E86\u89E3\u8D26\u6237\u7EE7\u4EFB\u8005\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "Deleting your user account": "\u5220\u9664\u4F60\u7684\u7528\u6237\u8D26\u6237",
    "GitHub Mobile can be used to verify your identity when signing in from a new device and as a two-factor authentication method.": "GitHub Mobile \u53EF\u7528\u4E8E\u5728\u65B0\u8BBE\u5907\u4E0A\u767B\u5F55\u65F6\u9A8C\u8BC1\u4F60\u7684\u8EAB\u4EFD\uFF0C\u5E76\u4F5C\u4E3A\u53CC\u56E0\u7D20\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u6CD5\u3002",
    "Learn more about authentication with GitHub Mobile.": "\u4E86\u89E3 GitHub Mobile \u8EAB\u4EFD\u9A8C\u8BC1\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "and sign in to your account.": "\u5E76\u767B\u5F55\u4F60\u7684\u8D26\u6237\u3002",
    "This email address is the default for GitHub notifications, such as replies to issues, pull requests, and similar activity.": "\u6B64\u90AE\u7BB1\u5730\u5740\u662F GitHub \u901A\u77E5\uFF08\u4F8B\u5982\u8BAE\u9898\u3001\u62C9\u53D6\u8BF7\u6C42\u7684\u56DE\u590D\u4EE5\u53CA\u7C7B\u4F3C\u6D3B\u52A8\uFF09\u7684\u9ED8\u8BA4\u5730\u5740\u3002",
    "Select an email to be used for account-related notifications and can be used for password reset.": "\u9009\u62E9\u4E00\u4E2A\u7528\u4E8E\u8D26\u6237\u76F8\u5173\u901A\u77E5\u7684\u90AE\u7BB1\uFF0C\u8BE5\u90AE\u7BB1\u4E5F\u53EF\u7528\u4E8E\u5BC6\u7801\u91CD\u7F6E\u3002",
    "Your backup GitHub email address will be used as an additional destination for security-relevant account notifications and can also be used for password resets.": "\u4F60\u7684\u5907\u7528 GitHub \u90AE\u7BB1\u5730\u5740\u5C06\u4F5C\u4E3A\u5B89\u5168\u76F8\u5173\u8D26\u6237\u901A\u77E5\u7684\u989D\u5916\u63A5\u6536\u5730\u5740\uFF0C\u4E5F\u53EF\u7528\u4E8E\u5BC6\u7801\u91CD\u7F6E\u3002",
    "set your email in Git": "\u5728 Git \u4E2D\u8BBE\u7F6E\u4F60\u7684\u90AE\u7BB1",
    "Previously authored commits associated with a public email will remain public.": "\u4E0E\u516C\u5F00\u90AE\u7BB1\u5173\u8054\u7684\u5148\u524D\u63D0\u4EA4\u5C06\u4FDD\u6301\u516C\u5F00\u3002",
    "at least 15 characters": "\u81F3\u5C11 15 \u4E2A\u5B57\u7B26",
    "at least 8 characters": "\u81F3\u5C11 8 \u4E2A\u5B57\u7B26",
    "including a number": "\u5305\u542B\u4E00\u4E2A\u6570\u5B57",
    "and a lowercase letter": "\u548C\u4E00\u4E2A\u5C0F\u5199\u5B57\u6BCD",
    "With CI/CD, Dependabot, and the world's largest developer community, GitHub gives your team everything they need to ship better software faster": "\u51ED\u501F CI/CD\u3001Dependabot \u548C\u5168\u7403\u6700\u5927\u7684\u5F00\u53D1\u8005\u793E\u533A\uFF0CGitHub \u4E3A\u4F60\u7684\u56E2\u961F\u63D0\u4F9B\u66F4\u5FEB\u4EA4\u4ED8\u66F4\u597D\u8F6F\u4EF6\u6240\u9700\u7684\u4E00\u5207",
    "Connect with the community that builds the tools you use": "\u4E0E\u6784\u5EFA\u4F60\u6240\u4F7F\u7528\u5DE5\u5177\u7684\u793E\u533A\u5EFA\u7ACB\u8054\u7CFB",
    "Please update your billing information in order to add a payment method.": "\u8BF7\u66F4\u65B0\u4F60\u7684\u8D26\u5355\u4FE1\u606F\u4EE5\u6DFB\u52A0\u4ED8\u6B3E\u65B9\u5F0F\u3002",
    "You have not added any billing information.": "\u4F60\u8FD8\u6CA1\u6709\u6DFB\u52A0\u4EFB\u4F55\u8D26\u5355\u4FE1\u606F\u3002",
    "Add your information to show on every invoice": "\u6DFB\u52A0\u4F60\u7684\u4FE1\u606F\u4EE5\u663E\u793A\u5728\u6BCF\u5F20\u53D1\u7968\u4E0A",
    "You have not added a payment method.": "\u4F60\u8FD8\u6CA1\u6709\u6DFB\u52A0\u4ED8\u6B3E\u65B9\u5F0F\u3002",
    "Prepaid debit and credit cards are not accepted as a valid form of payment.": "\u4E0D\u63A5\u53D7\u9884\u4ED8\u501F\u8BB0\u5361\u548C\u4FE1\u7528\u5361\u4F5C\u4E3A\u6709\u6548\u4ED8\u6B3E\u65B9\u5F0F\u3002",
    "We may place a temporary hold on your payment method to verify its validity. This is not a charge, and it will be released automatically after verification.": "\u6211\u4EEC\u53EF\u80FD\u4F1A\u5BF9\u4F60\u7684\u4ED8\u6B3E\u65B9\u5F0F\u4E34\u65F6\u51BB\u7ED3\u4EE5\u9A8C\u8BC1\u5176\u6709\u6548\u6027\u3002\u8FD9\u4E0D\u662F\u6263\u6B3E\uFF0C\u9A8C\u8BC1\u540E\u4F1A\u81EA\u52A8\u89E3\u9664\u3002",
    "No additional information added to your receipts.": "\u4F60\u7684\u6536\u636E\u672A\u6DFB\u52A0\u989D\u5916\u4FE1\u606F\u3002",
    "This information will appear on all your receipts.": "\u6B64\u4FE1\u606F\u5C06\u663E\u793A\u5728\u4F60\u6240\u6709\u7684\u6536\u636E\u4E0A\u3002",
    "Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.": "\u4F60\u7684\u540D\u5B57\u53EF\u80FD\u51FA\u73B0\u5728\u4F60\u8D21\u732E\u6216\u88AB\u63D0\u53CA\u7684 GitHub \u5404\u5904\u3002\u4F60\u53EF\u4EE5\u968F\u65F6\u5220\u9664\u3002",
    "You have set your email address to private. To toggle email privacy, go to": "\u4F60\u5DF2\u5C06\u90AE\u7BB1\u5730\u5740\u8BBE\u4E3A\u79C1\u6709\u3002\u8981\u5207\u6362\u90AE\u7BB1\u9690\u79C1\u8BBE\u7F6E\uFF0C\u8BF7\u524D\u5F80",
    "email settings": "\u90AE\u7BB1\u8BBE\u7F6E",
    'and uncheck "Keep my email address private."': '\u5E76\u53D6\u6D88\u52FE\u9009"\u4FDD\u6301\u6211\u7684\u90AE\u7BB1\u5730\u5740\u79C1\u6709"\u3002',
    "Select a verified email to display": "\u9009\u62E9\u8981\u663E\u793A\u7684\u5DF2\u9A8C\u8BC1\u90AE\u7BB1",
    "You can": "\u4F60\u53EF\u4EE5",
    "other users and organizations to link to them.": "\u5176\u4ED6\u7528\u6237\u548C\u7EC4\u7EC7\uFF0C\u4EE5\u4FBF\u4E0E\u4ED6\u4EEC\u5173\u8054\u3002",
    "@mention": "@\u63D0\u53CA",
    "your company's GitHub organization to link it.": "\u4F60\u516C\u53F8\u7684 GitHub \u7EC4\u7EC7\uFF0C\u4EE5\u4FBF\u5173\u8054\u5B83\u3002",
    ", or read more about it at our": "\uFF0C\u6216\u9605\u8BFB\u6211\u4EEC\u7684",
    "GitHub developer program": "GitHub \u5F00\u53D1\u8005\u8BA1\u5212",
    "Don't specify": "\u4E0D\u6307\u5B9A",
    Custom: "\u81EA\u5B9A\u4E49",
    "Tell us a little bit about yourself": "\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u4F60\u81EA\u5DF1",
    "ORCID provides a persistent identifier - an ORCID iD - that distinguishes you from other researchers. Learn more at": "ORCID \u63D0\u4F9B\u4E00\u4E2A\u6301\u4E45\u6807\u8BC6\u7B26\u2014\u2014ORCID iD\u2014\u2014\u7528\u4E8E\u5C06\u4F60\u4E0E\u5176\u4ED6\u7814\u7A76\u4EBA\u5458\u533A\u5206\u5F00\u6765\u3002\u4E86\u89E3\u66F4\u591A\u8BF7\u8BBF\u95EE",
    "All of the fields on this page are optional and can be deleted at any time, and by filling them out, you're giving us consent to share this data wherever your user profile appears. Please see our": "\u672C\u9875\u6240\u6709\u5B57\u6BB5\u5747\u4E3A\u53EF\u9009\uFF0C\u53EF\u968F\u65F6\u5220\u9664\u3002\u586B\u5199\u5373\u8868\u793A\u4F60\u540C\u610F\u6211\u4EEC\u5728\u4F60\u7684\u7528\u6237\u8D44\u6599\u51FA\u73B0\u7684\u4EFB\u4F55\u5730\u65B9\u5171\u4EAB\u8FD9\u4E9B\u6570\u636E\u3002\u8BF7\u67E5\u770B\u6211\u4EEC\u7684",
    "privacy statement": "\u9690\u79C1\u58F0\u660E",
    "to learn more about how we use this information.": "\u4E86\u89E3\u6211\u4EEC\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u4FE1\u606F\u3002",
    "Enabling this will hide your contributions and activity from your GitHub profile and from social features like followers, stars, feeds, leaderboards and releases.": "\u542F\u7528\u6B64\u9009\u9879\u5C06\u9690\u85CF\u4F60\u5728 GitHub \u8D44\u6599\u4E2D\u7684\u8D21\u732E\u548C\u6D3B\u52A8\uFF0C\u4EE5\u53CA\u5173\u6CE8\u8005\u3001\u661F\u6807\u3001\u52A8\u6001\u3001\u6392\u884C\u699C\u548C\u53D1\u5E03\u7B49\u793E\u4EA4\u529F\u80FD\u4E2D\u7684\u5185\u5BB9\u3002",
    "Your contribution graph, achievements, and activity overview will show your private contributions without revealing any repository or organization information.": "\u4F60\u7684\u8D21\u732E\u56FE\u3001\u6210\u5C31\u548C\u6D3B\u52A8\u6982\u89C8\u5C06\u663E\u793A\u4F60\u7684\u79C1\u6709\u8D21\u732E\uFF0C\u800C\u4E0D\u4F1A\u900F\u9732\u4EFB\u4F55\u4ED3\u5E93\u6216\u7EC4\u7EC7\u4FE1\u606F\u3002",
    "Update preferences": "\u66F4\u65B0\u504F\u597D",
    "We'll use this language preference to filter the trending repository lists on": "\u6211\u4EEC\u5C06\u4F7F\u7528\u6B64\u8BED\u8A00\u504F\u597D\u6765\u7B5B\u9009",
    "Save Trending settings": "\u4FDD\u5B58\u8D8B\u52BF\u8BBE\u7F6E",
    our: "\u6211\u4EEC\u7684",
    "page.": "\u9875\u9762\u3002",
    "When you're given access to": "\u5F53\u4F60\u83B7\u5F97\u8BBF\u95EE\u6743\u9650\u65F6\uFF1A",
    "Notifications for workflow runs on repositories set up with": "\u4F7F\u7528\u4EE5\u4E0B\u5DE5\u5177\u8BBE\u7F6E\u7684\u4ED3\u5E93\u7684\u5DE5\u4F5C\u6D41\u8FD0\u884C\u901A\u77E5\uFF1A",
    "Single theme": "\u5355\u4E00\u4E3B\u9898",
    "View details": "\u67E5\u770B\u8BE6\u60C5",
    "Current metered usage": "\u5F53\u524D\u8BA1\u91CF\u7528\u91CF",
    "Current included usage": "\u5F53\u524D\u5305\u542B\u7528\u91CF",
    "More details": "\u66F4\u591A\u8BE6\u60C5",
    "Next payment due": "\u4E0B\u6B21\u4ED8\u6B3E\u65E5\u671F",
    "Manage subscriptions": "\u7BA1\u7406\u8BA2\u9605",
    "Metered usage": "\u8BA1\u91CF\u7528\u91CF",
    "Timeframe: Current month": "\u65F6\u95F4\u8303\u56F4\uFF1A\u5F53\u524D\u6708\u4EFD",
    "Usage by products": "\u6309\u4EA7\u54C1\u67E5\u770B\u7528\u91CF",
    Models: "\u6A21\u578B",
    Sandbox: "\u6C99\u7BB1",
    Spark: "Spark",
    "Copilot usage": "Copilot \u7528\u91CF",
    "Total gross spend on Copilot for the selected timeframe including licenses and AI Credits.": "\u6240\u9009\u65F6\u95F4\u8303\u56F4\u5185 Copilot \u7684\u603B\u652F\u51FA\uFF08\u542B\u8BB8\u53EF\u8BC1\u548C AI \u79EF\u5206\uFF09\u3002",
    "Additional usage": "\u989D\u5916\u7528\u91CF",
    "About Copilot AI credits": "\u5173\u4E8E Copilot AI \u79EF\u5206",
    "Based on 0 additional AI credits beyond your included usage.": "\u57FA\u4E8E\u8D85\u51FA\u4F60\u5305\u542B\u7528\u91CF\u7684 0 \u4E2A\u989D\u5916 AI \u79EF\u5206\u3002",
    "Usage by repository": "\u6309\u4ED3\u5E93\u67E5\u770B\u7528\u91CF",
    "Open repository usage options": "\u6253\u5F00\u4ED3\u5E93\u7528\u91CF\u9009\u9879",
    "Top three repositories this month": "\u672C\u6708\u7528\u91CF\u6700\u9AD8\u7684\u4E09\u4E2A\u4ED3\u5E93",
    "Gross amount": "\u603B\u91D1\u989D",
    Created: "\u521B\u5EFA",
    "Open Copilot\u2026": "\u6253\u5F00 Copilot\u2026",
    Breadcrumbs: "\u9762\u5305\u5C51\u5BFC\u822A",
    "Status: Open.": "\u72B6\u6001\uFF1A\u5F85\u5904\u7406\u3002",
    "Interactive chart": "\u4EA4\u4E92\u5F0F\u56FE\u8868",
    "View as data table, Chart": "\u4EE5\u6570\u636E\u8868\u67E5\u770B\uFF0C\u56FE\u8868",
    "End of interactive chart.": "\u4EA4\u4E92\u5F0F\u56FE\u8868\u7ED3\u675F\u3002",
    "Filter by Action": "\u6309\u64CD\u4F5C\u7B5B\u9009",
    "Filter by Member": "\u6309\u6210\u5458\u7B5B\u9009",
    "Show more details": "\u663E\u793A\u66F4\u591A\u8BE6\u60C5",
    "GitHub Homepage": "GitHub \u9996\u9875",
    "Dismiss error": "\u5173\u95ED\u9519\u8BEF\u63D0\u793A",
    "More information available below.": "\u4E0B\u65B9\u6709\u66F4\u591A\u4FE1\u606F\u3002",
    "Social account": "\u793E\u4EA4\u8D26\u53F7",
    "Copy code to clipboard": "\u590D\u5236\u4EE3\u7801\u5230\u526A\u8D34\u677F",
    "Switch repository": "\u5207\u6362\u4ED3\u5E93",
    "If you know how to fix an": "\u5982\u679C\u4F60\u77E5\u9053\u5982\u4F55\u4FEE\u590D\u67D0\u4E2A",
    ", consider opening a pull request for it.": "\uFF0C\u53EF\u4EE5\u8003\u8651\u4E3A\u5B83\u53D1\u8D77\u62C9\u53D6\u8BF7\u6C42\u3002",
    "Learn more about pull requests": "\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u62C9\u53D6\u8BF7\u6C42\u7684\u4FE1\u606F",
    "Pro tip!": "\u5C0F\u8D34\u58EB\uFF01",
    "Find everything you created by searching": "\u901A\u8FC7\u641C\u7D22\u627E\u5230\u4F60\u521B\u5EFA\u7684\u6240\u6709\u5185\u5BB9",
    "Collapse sidebar": "\u6536\u8D77\u4FA7\u8FB9\u680F",
    "Created by me": "\u6211\u521B\u5EFA\u7684",
    Mentioned: "\u63D0\u53CA\u6211\u7684",
    "No projects found": "\u672A\u627E\u5230\u9879\u76EE",
    "There are no projects linked to this repository.": "\u6CA1\u6709\u4E0E\u6B64\u4ED3\u5E93\u5173\u8054\u7684\u9879\u76EE\u3002",
    "Suggest a security policy": "\u5EFA\u8BAE\u5B89\u5168\u7B56\u7565",
    "This project has not set up a SECURITY.md file yet.": "\u6B64\u9879\u76EE\u5C1A\u672A\u521B\u5EFA SECURITY.md \u6587\u4EF6\u3002",
    "There aren't any published security advisories": "\u5C1A\u672A\u53D1\u5E03\u4EFB\u4F55\u5B89\u5168\u516C\u544A",
    "Suggest a policy": "\u5EFA\u8BAE\u7B56\u7565",
    "Community Standards": "\u793E\u533A\u6807\u51C6",
    "Here's how this project compares to": "\u6B64\u9879\u76EE\u4E0E",
    "recommended community standards": "\u63A8\u8350\u7684\u793E\u533A\u6807\u51C6",
    "Contributions per week to main, excluding merge commits": "\u6BCF\u5468\u5BF9 main \u5206\u652F\u7684\u8D21\u732E\uFF08\u4E0D\u542B\u5408\u5E76\u63D0\u4EA4\uFF09",
    "Dependency graph": "\u4F9D\u8D56\u56FE",
    Dependents: "\u4E0B\u6E38\u4F9D\u8D56",
    "Dependency graph is disabled": "\u4F9D\u8D56\u56FE\u5DF2\u7981\u7528",
    "The owner of this repository has not enabled the dependency graph. Once enabled, you can track this repository's dependencies.": "\u6B64\u4ED3\u5E93\u7684\u6240\u6709\u8005\u5C1A\u672A\u542F\u7528\u4F9D\u8D56\u56FE\u3002\u542F\u7528\u540E\uFF0C\u4F60\u53EF\u4EE5\u8DDF\u8E2A\u6B64\u4ED3\u5E93\u7684\u4F9D\u8D56\u9879\u3002",
    "Learn more about how we use your data.": "\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u6211\u4EEC\u5982\u4F55\u4F7F\u7528\u4F60\u7684\u6570\u636E\u7684\u4FE1\u606F\u3002",
    "Network graph": "\u7F51\u7EDC\u56FE",
    "Timeline of the most recent commits to this repository and its network ordered by most recently pushed to and updated daily.": "\u6B64\u4ED3\u5E93\u53CA\u5176\u7F51\u7EDC\u4E2D\u6700\u8FD1\u63D0\u4EA4\u7684\u65F6\u95F4\u7EBF\uFF0C\u6309\u6700\u8FD1\u63A8\u9001\u6392\u5E8F\uFF0C\u6BCF\u65E5\u66F4\u65B0\u3002",
    "The repository network shows the 50 most recently pushed forks.": "\u4ED3\u5E93\u7F51\u7EDC\u663E\u793A\u6700\u8FD1\u63A8\u9001\u7684 50 \u4E2A\u590D\u523B\u3002",
    "Choose how GitHub looks to you. Select a single theme, or sync with your system and automatically switch between day and night themes. Selections are applied immediately and saved automatically.": "\u9009\u62E9 GitHub \u7684\u663E\u793A\u65B9\u5F0F\u3002\u9009\u62E9\u4E00\u4E2A\u4E3B\u9898\uFF0C\u6216\u4E0E\u7CFB\u7EDF\u540C\u6B65\u5E76\u5728\u767D\u5929\u548C\u591C\u95F4\u4E3B\u9898\u4E4B\u95F4\u81EA\u52A8\u5207\u6362\u3002\u9009\u62E9\u4F1A\u7ACB\u5373\u751F\u6548\u5E76\u81EA\u52A8\u4FDD\u5B58\u3002",
    "Personal access tokens (classic) function like ordinary OAuth access tokens. They can be used instead of a password for Git over HTTPS, or can be used to": "\u7ECF\u5178\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u7684\u529F\u80FD\u7C7B\u4F3C\u4E8E\u666E\u901A OAuth \u8BBF\u95EE\u4EE4\u724C\u3002\u5B83\u4EEC\u53EF\u4EE5\u4EE3\u66FF\u5BC6\u7801\u7528\u4E8E\u901A\u8FC7 HTTPS \u8FDB\u884C Git \u64CD\u4F5C\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E",
    "No fine-grained tokens created": "\u5C1A\u672A\u521B\u5EFA\u7CBE\u7EC6\u5316\u4EE4\u724C",
    "Need an API token for scripts or testing? Generate a personal access token for quick access to the GitHub API.": "\u811A\u672C\u6216\u6D4B\u8BD5\u9700\u8981 API \u4EE4\u724C\uFF1F\u751F\u6210\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u5373\u53EF\u5FEB\u901F\u8BBF\u95EE GitHub API\u3002",
    "No OAuth apps": "\u6CA1\u6709 OAuth \u5E94\u7528",
    "OAuth apps are used to access the GitHub API. Read the docs to find out more.": "OAuth \u5E94\u7528\u7528\u4E8E\u8BBF\u95EE GitHub API\u3002\u9605\u8BFB\u6587\u6863\u4E86\u89E3\u66F4\u591A\u3002",
    "View documentation": "\u67E5\u770B\u6587\u6863",
    "New OAuth app": "\u65B0\u5EFA OAuth \u5E94\u7528",
    "Active pull requests": "\u6D3B\u8DC3\u7684\u62C9\u53D6\u8BF7\u6C42",
    "Active issues": "\u6D3B\u8DC3\u7684\u8BAE\u9898",
    "No GitHub Apps": "\u6CA1\u6709 GitHub \u5E94\u7528",
    "Want to build something that integrates with and extends GitHub? Register a new GitHub App to get started developing on the GitHub API.": "\u60F3\u6784\u5EFA\u4E0E GitHub \u96C6\u6210\u5E76\u6269\u5C55 GitHub \u7684\u5E94\u7528\uFF1F\u6CE8\u518C\u4E00\u4E2A\u65B0\u7684 GitHub \u5E94\u7528\uFF0C\u5F00\u59CB\u4F7F\u7528 GitHub API \u8FDB\u884C\u5F00\u53D1\u3002",
    "New GitHub App": "\u65B0\u5EFA GitHub \u5E94\u7528",
    "Merged pull requests": "\u5DF2\u5408\u5E76\u7684\u62C9\u53D6\u8BF7\u6C42",
    "Open pull requests": "\u5F85\u5904\u7406\u7684\u62C9\u53D6\u8BF7\u6C42",
    "New issues": "\u65B0\u8BAE\u9898",
    "Community standards": "\u793E\u533A\u6807\u51C6",
    "Actions usage metrics": "\u64CD\u4F5C\u7528\u91CF\u6307\u6807",
    "Actions performance metrics": "\u64CD\u4F5C\u6027\u80FD\u6307\u6807",
    "Security policy": "\u5B89\u5168\u7B56\u7565",
    "Issue templates": "\u8BAE\u9898\u6A21\u677F",
    "Pull request template": "\u62C9\u53D6\u8BF7\u6C42\u6A21\u677F",
    "Set up a security policy": "\u8BBE\u7F6E\u5B89\u5168\u7B56\u7565",
    "Writing contributing guidelines": "\u7F16\u5199\u8D21\u732E\u6307\u5357",
    Propose: "\u63D0\u8BAE",
    "Switch to tree view": "\u5207\u6362\u5230\u6811\u72B6\u89C6\u56FE",
    "Period:": "\u5468\u671F\uFF1A",
    "Repository type:": "\u4ED3\u5E93\u7C7B\u578B\uFF1A",
    Active: "\u6D3B\u8DC3",
    "Sort:": "\u6392\u5E8F\uFF1A",
    "Most starred": "\u6700\u591A\u661F\u6807",
    "Defaults Saved": "\u9ED8\u8BA4\u8BBE\u7F6E\u5DF2\u4FDD\u5B58",
    "Filter by repository type": "\u6309\u4ED3\u5E93\u7C7B\u578B\u7B5B\u9009",
    "Repositories with push activity": "\u6709\u63A8\u9001\u6D3B\u52A8\u7684\u4ED3\u5E93",
    "Repositories with no push activity": "\u6CA1\u6709\u63A8\u9001\u6D3B\u52A8\u7684\u4ED3\u5E93",
    "Forks of other forks": "\u5176\u4ED6\u590D\u523B\u7684\u590D\u523B",
    "Archived repositories": "\u5DF2\u5F52\u6863\u7684\u4ED3\u5E93",
    "Repositories with at least 1 star": "\u81F3\u5C11\u6709 1 \u4E2A\u661F\u6807\u7684\u4ED3\u5E93",
    "Filter by period": "\u6309\u5468\u671F\u7B5B\u9009",
    "1 month": "1 \u4E2A\u6708",
    "All time": "\u5168\u90E8\u65F6\u95F4",
    "Any repository that has not been created or updated during this period will be excluded.": "\u5728\u6B64\u671F\u95F4\u672A\u521B\u5EFA\u6216\u66F4\u65B0\u7684\u4EFB\u4F55\u4ED3\u5E93\u90FD\u5C06\u88AB\u6392\u9664\u3002",
    "Showing data from": "\u663E\u793A\u6570\u636E\u4ECE",
    "Total minutes": "\u603B\u5206\u949F\u6570",
    "Total minutes across all workflows in this repository for current month": "\u6B64\u4ED3\u5E93\u5F53\u524D\u6708\u4EFD\u6240\u6709\u5DE5\u4F5C\u6D41\u7684\u603B\u5206\u949F\u6570",
    "Total job runs": "\u603B\u4F5C\u4E1A\u8FD0\u884C\u6B21\u6570",
    "Total job runs across all workflows in this repository for current month": "\u6B64\u4ED3\u5E93\u5F53\u524D\u6708\u4EFD\u6240\u6709\u5DE5\u4F5C\u6D41\u7684\u603B\u4F5C\u4E1A\u8FD0\u884C\u6B21\u6570",
    Workflows: "\u5DE5\u4F5C\u6D41",
    Jobs: "\u4F5C\u4E1A",
    "Runtime OS": "\u8FD0\u884C\u7CFB\u7EDF",
    "Runner type": "\u8FD0\u884C\u5668\u7C7B\u578B",
    "No table data available yet.": "\u6682\u65E0\u8868\u683C\u6570\u636E\u3002",
    "You don't have workflows on any of your organization repositories.": "\u4F60\u7684\u4EFB\u4F55\u7EC4\u7EC7\u4ED3\u5E93\u4E2D\u90FD\u6CA1\u6709\u5DE5\u4F5C\u6D41\u3002",
    "Get started with GitHub Actions": "\u5F00\u59CB\u4F7F\u7528 GitHub \u64CD\u4F5C",
    "Avg job run time": "\u5E73\u5747\u4F5C\u4E1A\u8FD0\u884C\u65F6\u95F4",
    "Average run time of jobs in this repository for current month": "\u6B64\u4ED3\u5E93\u5F53\u524D\u6708\u4EFD\u4F5C\u4E1A\u7684\u5E73\u5747\u8FD0\u884C\u65F6\u95F4",
    "Avg job queue time": "\u5E73\u5747\u4F5C\u4E1A\u6392\u961F\u65F6\u95F4",
    "Average queue time of jobs in this repository for current month": "\u6B64\u4ED3\u5E93\u5F53\u524D\u6708\u4EFD\u4F5C\u4E1A\u7684\u5E73\u5747\u6392\u961F\u65F6\u95F4",
    "Job failure rate": "\u4F5C\u4E1A\u5931\u8D25\u7387",
    "Failure rate across jobs in this repository for current month": "\u6B64\u4ED3\u5E93\u5F53\u524D\u6708\u4EFD\u5404\u4F5C\u4E1A\u7684\u5931\u8D25\u7387",
    "Failed job usage": "\u5931\u8D25\u4F5C\u4E1A\u7528\u91CF",
    "Total minutes used across failed jobs in this repository for current month": "\u6B64\u4ED3\u5E93\u5F53\u524D\u6708\u4EFD\u5931\u8D25\u4F5C\u4E1A\u4F7F\u7528\u7684\u603B\u5206\u949F\u6570",
    "Excluding merges,": "\u6392\u9664\u5408\u5E76\u63D0\u4EA4\uFF0C",
    "On main,": "\u5728 main \u5206\u652F\u4E0A\uFF0C",
    has: "\u5DF2",
    and: "\u548C",
    pushed: "\u63A8\u9001",
    "Actions Performance Metrics": "\u64CD\u4F5C\u6027\u80FD\u6307\u6807",
    "Actions Usage Metrics": "\u64CD\u4F5C\u7528\u91CF\u6307\u6807",
    "Current month": "\u5F53\u524D\u6708\u4EFD",
    "Current week (Mon-Sun)": "\u672C\u5468\uFF08\u5468\u4E00\u81F3\u5468\u65E5\uFF09",
    "Last 30 days": "\u6700\u8FD1 30 \u5929",
    "Last 90 days": "\u6700\u8FD1 90 \u5929",
    "to search": "\u8FDB\u884C\u641C\u7D22",
    "Ask Copilot...": "\u8BE2\u95EE Copilot...",
    "In full page chat": "\u5728\u5168\u9875\u804A\u5929\u4E2D",
    "In a space": "\u5728\u7A7A\u95F4\u4E2D",
    "Download for...": "\u4E0B\u8F7D\u9002\u7528\u4E8E...",
    "Improve this page": "\u6539\u8FDB\u6B64\u9875\u9762",
    "Curate this topic": "\u6574\u7406\u6B64\u4E3B\u9898",
    "Add this topic to your repo": "\u5C06\u6B64\u4E3B\u9898\u6DFB\u52A0\u5230\u4F60\u7684\u4ED3\u5E93",
    Trending: "\u70ED\u95E8",
    Collections: "\u5408\u96C6",
    Events: "\u6D3B\u52A8",
    Categories: "\u5206\u7C7B",
    "View all discussions": "\u67E5\u770B\u6240\u6709\u8BA8\u8BBA",
    Announcements: "\u516C\u544A",
    Ideas: "\u60F3\u6CD5",
    Polls: "\u6295\u7968",
    "Q&A": "\u95EE\u7B54",
    "Show and tell": "\u5C55\u793A\u4E0E\u5206\u4EAB",
    "Most helpful": "\u6700\u6709\u5E2E\u52A9",
    "New discussion": "\u65B0\u5EFA\u8BA8\u8BBA",
    "Sort by:": "\u6392\u5E8F\u4F9D\u636E\uFF1A",
    "Latest activity": "\u6700\u65B0\u6D3B\u52A8",
    "Date created": "\u521B\u5EFA\u65E5\u671F",
    "Top: Past day": "\u70ED\u95E8\uFF1A\u8FC7\u53BB\u4E00\u5929",
    "Top: Past week": "\u70ED\u95E8\uFF1A\u8FC7\u53BB\u4E00\u5468",
    "Top: Past month": "\u70ED\u95E8\uFF1A\u8FC7\u53BB\u4E00\u6708",
    "Top: Past year": "\u70ED\u95E8\uFF1A\u8FC7\u53BB\u4E00\u5E74",
    "Top: All": "\u70ED\u95E8\uFF1A\u5168\u90E8",
    "Filter: Open": "\u7B5B\u9009\uFF1A\u5F85\u5904\u7406",
    Locked: "\u5DF2\u9501\u5B9A",
    Answered: "\u5DF2\u56DE\u7B54",
    Unanswered: "\u672A\u56DE\u7B54",
    Verified: "\u5DF2\u9A8C\u8BC1",
    "started this conversation in": "\u53D1\u8D77\u4E86\u6B64\u8BA8\u8BBA\uFF0C\u6240\u5728\u5206\u7C7B\uFF1A",
    "None yet": "\u6682\u65E0",
    "You're not receiving notifications from this thread.": "\u4F60\u672A\u6536\u5230\u6B64\u8BDD\u9898\u7684\u901A\u77E5\u3002",
    "Add a comment": "\u6DFB\u52A0\u8BC4\u8BBA",
    "Write a reply": "\u64B0\u5199\u56DE\u590D",
    "Add your comment here...": "\u5728\u6B64\u5904\u6DFB\u52A0\u8BC4\u8BBA...",
    "Markdown is supported": "\u652F\u6301 Markdown",
    "Paste, drop, or click to add files": "\u7C98\u8D34\u3001\u62D6\u653E\u6216\u70B9\u51FB\u6DFB\u52A0\u6587\u4EF6",
    "Remember, contributions to this repository should follow its contributing guidelines.": "\u8BF7\u8BB0\u4F4F\uFF0C\u5BF9\u6B64\u4ED3\u5E93\u7684\u8D21\u732E\u5E94\u9075\u5FAA\u5176\u8D21\u732E\u6307\u5357\u3002",
    "Remember, contributions to this repository should follow its": "\u8BF7\u8BB0\u4F4F\uFF0C\u5BF9\u6B64\u4ED3\u5E93\u7684\u8D21\u732E\u5E94\u9075\u5FAA\u5176",
    "contributing guidelines": "\u8D21\u732E\u6307\u5357",
    Category: "\u5206\u7C7B",
    "is supported": "\u53D7\u652F\u6301",
    "All reactions": "\u5168\u90E8\u56DE\u5E94",
    "Add or remove reactions": "\u6DFB\u52A0\u6216\u79FB\u9664\u56DE\u5E94",
    "Loading content...": "\u6B63\u5728\u52A0\u8F7D\u5185\u5BB9...",
    "Comment options": "\u8BC4\u8BBA\u9009\u9879",
    "Slash commands": "\u659C\u6760\u547D\u4EE4",
    "Return to top": "\u8FD4\u56DE\u9876\u90E8",
    "Discussion options": "\u8BA8\u8BBA\u9009\u9879",
    "Replies:": "\u56DE\u590D\uFF1A",
    "Sort comments": "\u6392\u5E8F\u8BC4\u8BBA",
    Top: "\u9876\u90E8",
    "Add files": "\u6DFB\u52A0\u6587\u4EF6",
    "Select a reply": "\u9009\u62E9\u56DE\u590D",
    "Create a new saved reply": "\u521B\u5EFA\u65B0\u7684\u5DF2\u4FDD\u5B58\u56DE\u590D",
    "There was an error creating your Discussion.": "\u521B\u5EFA\u8BA8\u8BBA\u65F6\u51FA\u9519\u3002",
    "An unexpected error has occurred": "\u53D1\u751F\u610F\u5916\u9519\u8BEF",
    "We don't support that file type.": "\u4E0D\u652F\u6301\u8BE5\u6587\u4EF6\u7C7B\u578B\u3002",
    "Attaching documents requires write permission to this repository.": "\u9644\u52A0\u6587\u6863\u9700\u8981\u6B64\u4ED3\u5E93\u7684\u5199\u5165\u6743\u9650\u3002",
    "Try again with a file that's not empty.": "\u8BF7\u5C1D\u8BD5\u4F7F\u7528\u975E\u7A7A\u6587\u4EF6\u3002",
    "This file is hidden.": "\u6B64\u6587\u4EF6\u5DF2\u9690\u85CF\u3002",
    "Try again with another file.": "\u8BF7\u5C1D\u8BD5\u4F7F\u7528\u53E6\u4E00\u4E2A\u6587\u4EF6\u3002",
    "Something went really wrong, and we can't process that file.": "\u51FA\u73B0\u4E86\u4E25\u91CD\u9519\u8BEF\uFF0C\u6211\u4EEC\u65E0\u6CD5\u5904\u7406\u8BE5\u6587\u4EF6\u3002",
    "Try again.": "\u91CD\u8BD5\u3002",
    "Sorry, something went wrong and we weren't able to fetch your subscription status.": "\u62B1\u6B49\uFF0C\u51FA\u4E86\u70B9\u95EE\u9898\uFF0C\u6211\u4EEC\u65E0\u6CD5\u83B7\u53D6\u4F60\u7684\u8BA2\u9605\u72B6\u6001\u3002",
    "This user is the author of this discussion.": "\u6B64\u7528\u6237\u662F\u672C\u8BA8\u8BBA\u7684\u4F5C\u8005\u3002",
    Heading: "\u6807\u9898",
    Bold: "\u52A0\u7C97",
    Italic: "\u659C\u4F53",
    Quote: "\u5F15\u7528",
    Link: "\u94FE\u63A5",
    "Numbered list": "\u7F16\u53F7\u5217\u8868",
    "Unordered list": "\u65E0\u5E8F\u5217\u8868",
    "Task list": "\u4EFB\u52A1\u5217\u8868",
    Mention: "\u63D0\u53CA",
    Reference: "\u5F15\u7528",
    rocket: "\u706B\u7BAD",
    eyes: "\u773C\u775B",
    "thumbs up": "\u70B9\u8D5E",
    "thumbs down": "\u70B9\u8E29",
    laugh: "\u5927\u7B11",
    hooray: "\u6B22\u547C",
    confused: "\u56F0\u60D1",
    heart: "\u7231\u5FC3",
    "If you would like to submit code to this repository, consider opening a pull request. You can read this repository's": "\u5982\u679C\u4F60\u60F3\u5411\u6B64\u4ED3\u5E93\u63D0\u4EA4\u4EE3\u7801\uFF0C\u53EF\u4EE5\u8003\u8651\u53D1\u8D77\u62C9\u53D6\u8BF7\u6C42\u3002\u4F60\u53EF\u4EE5\u9605\u8BFB\u6B64\u4ED3\u5E93\u7684",
    or: "\u6216",
    "GitHub Help": "GitHub \u5E2E\u52A9",
    "to learn how to open a good pull request.": "\u4EE5\u4E86\u89E3\u5982\u4F55\u53D1\u8D77\u4E00\u4E2A\u597D\u7684\u62C9\u53D6\u8BF7\u6C42\u3002",
    "There aren't any open pull requests.": "\u6CA1\u6709\u4EFB\u4F55\u5F85\u5904\u7406\u7684\u62C9\u53D6\u8BF7\u6C42\u3002",
    "You could search": "\u4F60\u53EF\u4EE5\u641C\u7D22",
    "or try an": "\u6216\u5C1D\u8BD5",
    "all of GitHub": "\u6574\u4E2A GitHub",
    "advanced search": "\u9AD8\u7EA7\u641C\u7D22",
    "Mix and match filters to narrow down what you're looking for.": "\u7EC4\u5408\u642D\u914D\u7B5B\u9009\u6761\u4EF6\uFF0C\u7F29\u5C0F\u4F60\u67E5\u627E\u7684\u8303\u56F4\u3002",
    "No sessions match your filters": "\u6CA1\u6709\u7B26\u5408\u4F60\u7B5B\u9009\u6761\u4EF6\u7684\u4F1A\u8BDD",
    "Try adjusting your search or filters.": "\u8BF7\u5C1D\u8BD5\u8C03\u6574\u4F60\u7684\u641C\u7D22\u6216\u7B5B\u9009\u6761\u4EF6\u3002",
    "uses AI. Check for mistakes.": "\u4F7F\u7528 AI\u3002\u8BF7\u6CE8\u610F\u68C0\u67E5\u9519\u8BEF\u3002",
    "Needs attention": "\u9700\u8981\u5173\u6CE8",
    "Run duration": "\u8FD0\u884C\u65F6\u957F",
    "Show options": "\u663E\u793A\u9009\u9879",
    "pushed by": "\u7531",
    "completed successfully:": "\u5DF2\u6210\u529F\u5B8C\u6210\uFF1A",
    have: "\u5DF2",
    "to master": "\u5230 master",
    "On master,": "\u5728 master \u5206\u652F\u4E0A\uFF0C",
    "Top committers": "\u9876\u7EA7\u8D21\u732E\u8005",
    "Repository admins accept content reports": "\u4ED3\u5E93\u7BA1\u7406\u5458\u63A5\u53D7\u5185\u5BB9\u4E3E\u62A5",
    "What is": "\u4EC0\u4E48\u662F",
    "the community profile": "\u793E\u533A\u6863\u6848",
    "Number of commits per week": "\u6BCF\u5468\u63D0\u4EA4\u6570",
    "Crunching the latest data, just for you. Hang tight...": "\u6B63\u5728\u4E3A\u4F60\u5206\u6790\u6700\u65B0\u6570\u636E\uFF0C\u8BF7\u7A0D\u5019...",
    "There are too many commits to generate this graph.": "\u63D0\u4EA4\u6570\u91CF\u8FC7\u591A\uFF0C\u65E0\u6CD5\u751F\u6210\u6B64\u56FE\u8868\u3002",
    "More information about this data can be found in the": "\u6709\u5173\u6B64\u6570\u636E\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605",
    "activity documentation": "\u6D3B\u52A8\u6587\u6863",
    "Dependency graph has not been enabled by an organization owner or a user with admin permissions for this repository. Once enabled, you can": "\u4F9D\u8D56\u56FE\u5C1A\u672A\u7531\u7EC4\u7EC7\u6240\u6709\u8005\u6216\u5177\u6709\u7BA1\u7406\u5458\u6743\u9650\u7684\u7528\u6237\u4E3A\u6B64\u4ED3\u5E93\u542F\u7528\u3002\u542F\u7528\u540E\uFF0C\u4F60\u53EF\u4EE5",
    "track this repository's dependencies": "\u8DDF\u8E2A\u6B64\u4ED3\u5E93\u7684\u4F9D\u8D56\u9879",
    "No forked repositories found": "\u672A\u627E\u5230\u590D\u523B\u7684\u4ED3\u5E93",
    "Try changing your filters, or search for": "\u5C1D\u8BD5\u66F4\u6539\u7B5B\u9009\u6761\u4EF6\uFF0C\u6216\u641C\u7D22",
    "active forked repositories": "\u6D3B\u8DC3\u7684\u590D\u523B\u4ED3\u5E93",
    Owners: "\u6240\u6709\u8005",
    "Contributions per week to master, line counts have been omitted because commit count exceeds 10,000.": "\u6BCF\u5468\u5BF9 master \u5206\u652F\u7684\u8D21\u732E\uFF0C\u56E0\u63D0\u4EA4\u6570\u8D85\u8FC7 10,000 \u800C\u7701\u7565\u884C\u6570\u7EDF\u8BA1\u3002",
    "When you push to GitHub, we'll check the most recent commit. If the author email on that commit is a private email on your GitHub account, we will block the push and warn you about exposing your private email.": "\u5F53\u4F60\u63A8\u9001\u5230 GitHub \u65F6\uFF0C\u6211\u4EEC\u4F1A\u68C0\u67E5\u6700\u8FD1\u7684\u63D0\u4EA4\u3002\u5982\u679C\u8BE5\u63D0\u4EA4\u7684\u4F5C\u8005\u90AE\u7BB1\u662F\u4F60 GitHub \u8D26\u6237\u4E2D\u7684\u79C1\u6709\u90AE\u7BB1\uFF0C\u6211\u4EEC\u5C06\u963B\u6B62\u63A8\u9001\u5E76\u63D0\u9192\u4F60\u66B4\u9732\u79C1\u6709\u90AE\u7BB1\u7684\u98CE\u9669\u3002",
    "Connected to Google": "\u5DF2\u8FDE\u63A5 Google",
    "Email address": "\u90AE\u7BB1\u5730\u5740",
    "Seen in": "\u66FE\u5728",
    "To get started, install GitHub Mobile for": "\u8981\u5F00\u59CB\u4F7F\u7528\uFF0C\u8BF7\u5B89\u88C5\u9002\u7528\u4E8E",
    "per month": "\u6BCF\u6708",
    "Billable usage": "\u8BA1\u8D39\u7528\u91CF",
    "Included usage": "\u5305\u542B\u7528\u91CF",
    "Total billable usage after subtracting discounts from consumed usage": "\u6263\u9664\u5DF2\u7528\u91CF\u6298\u6263\u540E\u7684\u603B\u8BA1\u8D39\u7528\u91CF",
    "consumed usage": "\u5DF2\u4F7F\u7528\u91CF",
    discounts: "\u6298\u6263",
    "Billable spend for Packages for the selected timeframe. Applicable discounts cover Packages usage in public repositories and included usage for Packages data transfer and storage.": "\u6240\u9009\u65F6\u95F4\u6BB5\u5185\u8F6F\u4EF6\u5305\u7684\u8BA1\u8D39\u652F\u51FA\u3002\u9002\u7528\u6298\u6263\u6DB5\u76D6\u516C\u5171\u4ED3\u5E93\u4E2D\u7684\u8F6F\u4EF6\u5305\u7528\u91CF\uFF0C\u4EE5\u53CA\u8F6F\u4EF6\u5305\u6570\u636E\u4F20\u8F93\u548C\u5B58\u50A8\u7684\u5305\u542B\u7528\u91CF\u3002",
    "Manage budgets": "\u7BA1\u7406\u9884\u7B97",
    "Packages data transfer": "\u8F6F\u4EF6\u5305\u6570\u636E\u4F20\u8F93",
    "Packages storage": "\u8F6F\u4EF6\u5305\u5B58\u50A8",
    "Spark AI credits": "Spark AI \u79EF\u5206",
    "GitHub Models": "GitHub \u6A21\u578B",
    "Billable spend for Sandbox for the selected timeframe.": "\u6240\u9009\u65F6\u95F4\u6BB5\u5185\u6C99\u7BB1\u7684\u8BA1\u8D39\u652F\u51FA\u3002",
    "Billable spend for Git LFS for the selected timeframe. Applicable discounts cover included usage for Git LFS bandwidth and storage.": "\u6240\u9009\u65F6\u95F4\u6BB5\u5185 Git LFS \u7684\u8BA1\u8D39\u652F\u51FA\u3002\u9002\u7528\u6298\u6263\u6DB5\u76D6 Git LFS \u5E26\u5BBD\u548C\u5B58\u50A8\u7684\u5305\u542B\u7528\u91CF\u3002",
    "Git LFS bandwidth": "Git LFS \u5E26\u5BBD",
    "Git LFS storage": "Git LFS \u5B58\u50A8",
    "Billable spend for Codespaces for the selected timeframe.": "\u6240\u9009\u65F6\u95F4\u6BB5\u5185\u4EE3\u7801\u7A7A\u95F4\u7684\u8BA1\u8D39\u652F\u51FA\u3002",
    "Billable spend for Actions and Actions Runners for the selected timeframe. Applicable discounts cover Actions usage in public repositories and included usage for Actions minutes and storage.": "\u6240\u9009\u65F6\u95F4\u6BB5\u5185\u64CD\u4F5C\u548C\u64CD\u4F5C\u8FD0\u884C\u5668\u7684\u8BA1\u8D39\u652F\u51FA\u3002\u9002\u7528\u6298\u6263\u6DB5\u76D6\u516C\u5171\u4ED3\u5E93\u4E2D\u7684\u64CD\u4F5C\u7528\u91CF\uFF0C\u4EE5\u53CA\u64CD\u4F5C\u5206\u949F\u6570\u548C\u5B58\u50A8\u7684\u5305\u542B\u7528\u91CF\u3002",
    "Actions minutes": "\u64CD\u4F5C\u5206\u949F\u6570",
    "Actions storage": "\u64CD\u4F5C\u5B58\u50A8",
    "We'll remove your public profile email and use": "\u6211\u4EEC\u5C06\u5220\u9664\u4F60\u7684\u516C\u5F00\u8D44\u6599\u90AE\u7BB1\uFF0C\u5E76\u4F7F\u7528",
    "when performing web-based Git operations (e.g. edits and merges) and sending email on your behalf. If you want command line Git operations to use your private email you must": "\u7528\u4E8E\u57FA\u4E8E\u7F51\u9875\u7684 Git \u64CD\u4F5C\uFF08\u5982\u7F16\u8F91\u548C\u5408\u5E76\uFF09\u4EE5\u53CA\u4EE3\u4F60\u53D1\u9001\u90AE\u4EF6\u3002\u5982\u679C\u4F60\u5E0C\u671B\u547D\u4EE4\u884C Git \u64CD\u4F5C\u4F7F\u7528\u4F60\u7684\u79C1\u6709\u90AE\u7BB1\uFF0C\u5219\u5FC5\u987B",
    "Allow all verified emails": "\u5141\u8BB8\u6240\u6709\u5DF2\u9A8C\u8BC1\u90AE\u7BB1",
    "Only allow primary email": "\u4EC5\u5141\u8BB8\u4E3B\u90AE\u7BB1",
    "User settings": "\u7528\u6237\u8BBE\u7F6E",
    "You must set a password first before you can disconnect this email from its identity provider.": "\u4F60\u5FC5\u987B\u5148\u8BBE\u7F6E\u5BC6\u7801\uFF0C\u624D\u80FD\u5C06\u6B64\u90AE\u7BB1\u4E0E\u5176\u8EAB\u4EFD\u63D0\u4F9B\u5546\u65AD\u5F00\u8FDE\u63A5\u3002",
    "Microsoft Edge on Windows": "Windows \u4E0A\u7684 Microsoft Edge",
    per: "\u6BCF",
    month: "\u6708",
    "Changing your username can have": "\u66F4\u6539\u7528\u6237\u540D\u53EF\u80FD\u4F1A\u4EA7\u751F",
    "Looking to manage account security settings? You can find them in the": "\u60F3\u7BA1\u7406\u8D26\u6237\u5B89\u5168\u8BBE\u7F6E\uFF1F\u4F60\u53EF\u4EE5\u5728",
    "Connect a Patreon account for": "\u5173\u8054\u4E00\u4E2A Patreon \u8D26\u6237\uFF0C\u4EE5\u4FBF",
    "to sponsor maintainers with. Get recognition on GitHub for sponsorships made on Patreon when the sponsored person has linked Patreon and GitHub, too, and has a public GitHub Sponsors profile.": "\u7528\u5176\u8D5E\u52A9\u7EF4\u62A4\u8005\u3002\u5F53\u88AB\u8D5E\u52A9\u7684\u4EBA\u540C\u6837\u5173\u8054\u4E86 Patreon \u548C GitHub\uFF0C\u5E76\u62E5\u6709\u516C\u5F00\u7684 GitHub \u8D5E\u52A9\u8D44\u6599\u65F6\uFF0C\u4F60\u4F1A\u56E0\u5728 Patreon \u4E0A\u8FDB\u884C\u7684\u8D5E\u52A9\u800C\u5728 GitHub \u4E0A\u83B7\u5F97\u8BA4\u53EF\u3002",
    "Export all repositories and profile metadata for": "\u5BFC\u51FA\u4EE5\u4E0B\u8D26\u6237\u7684\u6240\u6709\u4ED3\u5E93\u548C\u8D44\u6599\u5143\u6570\u636E\uFF1A",
    "Exports will be available for 7 days.": "\u5BFC\u51FA\u6587\u4EF6\u5C06\u5728 7 \u5929\u5185\u53EF\u7528\u3002",
    "Start export": "\u5F00\u59CB\u5BFC\u51FA",
    'By clicking "Add Successor" below, I acknowledge that I am the owner of the': '\u70B9\u51FB\u4E0B\u65B9"\u6DFB\u52A0\u7EE7\u4EFB\u8005"\uFF0C\u5373\u8868\u793A\u6211\u786E\u8BA4\u81EA\u5DF1\u662F',
    "account, and am authorizing GitHub to transfer content within that account to my GitHub Successor, designated below, in the event of my death. I understand that this appointment of a successor does not override legally binding next-of-kin rules or estate laws of any relevant jurisdiction, and does not create a binding will.": "\u8D26\u6237\u7684\u6240\u6709\u8005\uFF0C\u5E76\u6388\u6743 GitHub \u5728\u6211\u53BB\u4E16\u65F6\u5C06\u8D26\u6237\u4E2D\u7684\u5185\u5BB9\u8F6C\u79FB\u7ED9\u6211\u6307\u5B9A\u7684\u7EE7\u4EFB\u8005\u3002\u6211\u7406\u89E3\uFF0C\u7EE7\u4EFB\u8005\u6307\u5B9A\u4E0D\u51CC\u9A7E\u4E8E\u4EFB\u4F55\u76F8\u5173\u53F8\u6CD5\u8F96\u533A\u7684\u5177\u6709\u6CD5\u5F8B\u7EA6\u675F\u529B\u7684\u8FD1\u4EB2\u5C5E\u89C4\u5219\u6216\u9057\u4EA7\u6CD5\u5F8B\u4E4B\u4E0A\uFF0C\u4E5F\u4E0D\u6784\u6210\u5177\u6709\u7EA6\u675F\u529B\u7684\u9057\u5631\u3002",
    "that don't use modifier keys in their activation. For example, the": "\u5728\u6FC0\u6D3B\u65F6\u4E0D\u4F7F\u7528\u4FEE\u9970\u952E\u3002\u4F8B\u5982\uFF0C",
    "shortcut to navigate notifications, or": "\u5FEB\u6377\u65B9\u5F0F\u7528\u4E8E\u6D4F\u89C8\u901A\u77E5\uFF0C\u6216",
    "to view context relevant shortcuts.": "\u7528\u4E8E\u67E5\u770B\u76F8\u5173\u4E0A\u4E0B\u6587\u5FEB\u6377\u952E\u3002",
    "preview information about other parts of GitHub.": "\u9884\u89C8 GitHub \u5176\u4ED6\u90E8\u5206\u7684\u4FE1\u606F\u3002",
    "Enable previewing link content via mouse hover or keyboard focus before navigation. Move focus to hovercard content using": "\u5728\u5BFC\u822A\u524D\u542F\u7528\u901A\u8FC7\u9F20\u6807\u60AC\u505C\u6216\u952E\u76D8\u7126\u70B9\u9884\u89C8\u94FE\u63A5\u5185\u5BB9\u3002\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u5C06\u7126\u70B9\u79FB\u52A8\u5230\u60AC\u6D6E\u5361\u7247\u5185\u5BB9\uFF1A",
    "Select if URLs should be formatted on paste. You can use": "\u9009\u62E9\u7C98\u8D34\u65F6\u662F\u5426\u683C\u5F0F\u5316 URL\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528",
    "to paste a link in the opposite way.": "\u4EE5\u76F8\u53CD\u7684\u65B9\u5F0F\u7C98\u8D34\u94FE\u63A5\u3002",
    "Pasting a URL while having text selected will format to a Markdown link": "\u9009\u4E2D\u6587\u672C\u65F6\u7C98\u8D34 URL \u5C06\u683C\u5F0F\u5316\u4E3A Markdown \u94FE\u63A5",
    "Pasting a URL while having text selected will replace the text": "\u9009\u4E2D\u6587\u672C\u65F6\u7C98\u8D34 URL \u5C06\u66FF\u6362\u6587\u672C",
    "Not enabled": "\u672A\u542F\u7528",
    "No usage": "\u65E0\u7528\u91CF",
    "If enabled, your enterprise will be billed for additional AI credits usage after your included credits have been exhausted.": "\u5982\u679C\u542F\u7528\uFF0C\u4F60\u7684\u4F01\u4E1A\u5728\u5305\u542B\u79EF\u5206\u7528\u5B8C\u540E\u5C06\u6309\u989D\u5916 AI \u79EF\u5206\u7528\u91CF\u8BA1\u8D39\u3002",
    "You can upgrade to Copilot Pro at any time. Check out this": "\u4F60\u53EF\u4EE5\u968F\u65F6\u5347\u7EA7\u5230 Copilot Pro\u3002\u67E5\u770B\u6B64",
    "Required for certain countries": "\u90E8\u5206\u56FD\u5BB6/\u5730\u533A\u5FC5\u586B",
    "Get Copilot for free, 180 monthly Codespaces hours for cloud coding, unlimited private repositories with GitHub Pro or Team, and dozens of premium tools in the Student Developer Pack.": "\u514D\u8D39\u83B7\u53D6 Copilot\u3001\u6BCF\u6708 180 \u5C0F\u65F6\u7684 Codespaces \u4E91\u7AEF\u7F16\u7801\u65F6\u957F\u3001GitHub Pro \u6216 Team \u7684\u65E0\u9650\u79C1\u6709\u4ED3\u5E93\uFF0C\u4EE5\u53CA\u5B66\u751F\u5F00\u53D1\u8005\u5DE5\u5177\u5305\u4E2D\u7684\u6570\u5341\u6B3E\u9AD8\u7EA7\u5DE5\u5177\u3002",
    "Complete a teacher or student application to unlock tools and resources for your educational journey.": "\u5B8C\u6210\u6559\u5E08\u6216\u5B66\u751F\u7533\u8BF7\uFF0C\u89E3\u9501\u4F60\u7684\u5B66\u4E60\u4E4B\u65C5\u6240\u9700\u7684\u5DE5\u5177\u548C\u8D44\u6E90\u3002",
    "Check out our guide to": "\u67E5\u770B\u6211\u4EEC\u7684\u6307\u5357",
    "or troubleshoot": "\uFF0C\u6216\u6392\u67E5",
    "connecting to GitHub using SSH keys": "\u4F7F\u7528 SSH \u5BC6\u94A5\u8FDE\u63A5 GitHub",
    "common SSH problems": "\u5E38\u89C1 SSH \u95EE\u9898",
    "Learn how to": "\u4E86\u89E3\u5982\u4F55",
    "generate a GPG key and add it to your account": "\u751F\u6210 GPG \u5BC6\u94A5\u5E76\u5C06\u5176\u6DFB\u52A0\u5230\u4F60\u7684\u8D26\u6237",
    "This will include any commit attributed to your account but not signed with your GPG or S/MIME key.": "\u8FD9\u5C06\u5305\u62EC\u5F52\u5C5E\u4E8E\u4F60\u8D26\u6237\u4F46\u672A\u4F7F\u7528\u4F60\u7684 GPG \u6216 S/MIME \u5BC6\u94A5\u7B7E\u540D\u7684\u4EFB\u4F55\u63D0\u4EA4\u3002",
    "Note that this will include your existing unsigned commits.": "\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u5C06\u5305\u62EC\u4F60\u73B0\u6709\u7684\u672A\u7B7E\u540D\u63D0\u4EA4\u3002",
    "You are not a member of any organizations.": "\u4F60\u4E0D\u662F\u4EFB\u4F55\u7EC4\u7EC7\u7684\u6210\u5458\u3002",
    "Move to an organization": "\u8FC1\u79FB\u5230\u7EC4\u7EC7",
    "Your personal account cannot be converted to an organization. You must create a new organization and transfer your repositories and projects to it instead. You can then rename your personal account and the organization if you want your organization to have the same name that you are currently using for your personal account.": "\u4F60\u7684\u4E2A\u4EBA\u8D26\u6237\u65E0\u6CD5\u8F6C\u6362\u4E3A\u7EC4\u7EC7\u3002\u4F60\u5FC5\u987B\u521B\u5EFA\u4E00\u4E2A\u65B0\u7EC4\u7EC7\uFF0C\u5E76\u5C06\u4F60\u7684\u4ED3\u5E93\u548C\u9879\u76EE\u8F6C\u79FB\u5230\u5176\u4E2D\u3002\u5982\u679C\u4F60\u5E0C\u671B\u7EC4\u7EC7\u4F7F\u7528\u4F60\u5F53\u524D\u4E2A\u4EBA\u8D26\u6237\u7684\u540D\u79F0\uFF0C\u4E4B\u540E\u53EF\u4EE5\u91CD\u547D\u540D\u4E2A\u4EBA\u8D26\u6237\u548C\u7EC4\u7EC7\u3002",
    "Move work to an organization": "\u5C06\u5DE5\u4F5C\u8FC1\u79FB\u5230\u7EC4\u7EC7",
    "You don't have any enterprises": "\u4F60\u6CA1\u6709\u4EFB\u4F55\u4F01\u4E1A\u8D26\u6237",
    "Designed for businesses or teams who collaborate on GitHub.com": "\u4E13\u4E3A\u5728 GitHub.com \u4E0A\u534F\u4F5C\u7684\u4F01\u4E1A\u6216\u56E2\u961F\u8BBE\u8BA1",
    "Learn more about enterprises": "\u4E86\u89E3\u4F01\u4E1A\u8D26\u6237\u7684\u66F4\u591A\u4FE1\u606F",
    "Start free for 30 days": "\u514D\u8D39\u5F00\u59CB 30 \u5929",
    "You can block a user to deny them access to repositories and more.": "\u4F60\u53EF\u4EE5\u5C4F\u853D\u7528\u6237\u4EE5\u62D2\u7EDD\u4ED6\u4EEC\u8BBF\u95EE\u4ED3\u5E93\u7B49\u3002",
    "Learn more about blocking a user": "\u4E86\u89E3\u5173\u4E8E\u5C4F\u853D\u7528\u6237\u7684\u66F4\u591A\u4FE1\u606F",
    "Block a user": "\u5C4F\u853D\u7528\u6237",
    "Warn me when blocked users have contributed to a repository": "\u5F53\u88AB\u5C4F\u853D\u7684\u7528\u6237\u5728\u4ED3\u5E93\u4E2D\u6709\u8D21\u732E\u65F6\u8B66\u544A\u6211",
    "Search by username, full name or email address": "\u6309\u7528\u6237\u540D\u3001\u5168\u540D\u6216\u90AE\u7BB1\u5730\u5740\u641C\u7D22",
    "We will show this warning each time you visit a repository where someone you blocked has committed code, unless you own the repository or have also contributed a commit. This warning does not restrict your access.": "\u6BCF\u6B21\u4F60\u8BBF\u95EE\u88AB\u5C4F\u853D\u8005\u63D0\u4EA4\u8FC7\u4EE3\u7801\u7684\u4ED3\u5E93\u65F6\uFF0C\u6211\u4EEC\u90FD\u4F1A\u663E\u793A\u6B64\u8B66\u544A\uFF0C\u9664\u975E\u4F60\u662F\u8BE5\u4ED3\u5E93\u7684\u6240\u6709\u8005\u6216\u4E5F\u8D21\u732E\u8FC7\u63D0\u4EA4\u3002\u6B64\u8B66\u544A\u4E0D\u4F1A\u9650\u5236\u4F60\u7684\u8BBF\u95EE\u3002",
    "You have not blocked any users.": "\u4F60\u5C1A\u672A\u5C4F\u853D\u4EFB\u4F55\u7528\u6237\u3002",
    "Currently blocked": "\u5F53\u524D\u5DF2\u5C4F\u853D",
    "Temporarily restrict which external users can interact with your repositories (comment, open issues, or create pull requests) for a configurable period of time.": "\u5728\u53EF\u914D\u7F6E\u7684\u65F6\u95F4\u6BB5\u5185\uFF0C\u4E34\u65F6\u9650\u5236\u54EA\u4E9B\u5916\u90E8\u7528\u6237\u53EF\u4EE5\u4E0E\u4F60\u4ED3\u5E93\u4EA4\u4E92\uFF08\u8BC4\u8BBA\u3001\u6253\u5F00\u8BAE\u9898\u6216\u521B\u5EFA\u62C9\u53D6\u8BF7\u6C42\uFF09\u3002",
    'This may be used to force a "cool-down" period during heated discussions or prevent unwanted interactions.': "\u8FD9\u53EF\u7528\u4E8E\u5728\u6FC0\u70C8\u8BA8\u8BBA\u671F\u95F4\u5F3A\u5236\u201C\u51B7\u5374\u201D\u671F\uFF0C\u6216\u9632\u6B62\u4E0D\u60F3\u8981\u7684\u4EA4\u4E92\u3002",
    "Interaction limits may already exist in your account's": "\u4F60\u7684\u8D26\u6237\u4E2D\u53EF\u80FD\u5DF2\u5B58\u5728\u4EA4\u4E92\u9650\u5236",
    "Any changes here will override those limits.": "\u6B64\u5904\u7684\u4EFB\u4F55\u66F4\u6539\u90FD\u5C06\u8986\u76D6\u8FD9\u4E9B\u9650\u5236\u3002",
    "Limit to existing users": "\u9650\u5236\u4E3A\u73B0\u6709\u7528\u6237",
    "Users that have recently created their account will be unable to interact with your repositories.": "\u6700\u8FD1\u521B\u5EFA\u8D26\u6237\u7684\u7528\u6237\u5C06\u65E0\u6CD5\u4E0E\u4F60\u7684\u4ED3\u5E93\u4EA4\u4E92\u3002",
    "Limit to prior contributors": "\u9650\u5236\u4E3A\u5148\u524D\u7684\u8D21\u732E\u8005",
    "Users that have not previously committed to the default branch of one of your repositories will be unable to interact with that repository.": "\u4E4B\u524D\u672A\u5728\u4F60\u67D0\u4E2A\u4ED3\u5E93\u7684\u9ED8\u8BA4\u5206\u652F\u4E0A\u63D0\u4EA4\u8FC7\u7684\u7528\u6237\u5C06\u65E0\u6CD5\u4E0E\u8BE5\u4ED3\u5E93\u4EA4\u4E92\u3002",
    "New users": "\u65B0\u7528\u6237",
    "Limit to repository collaborators": "\u9650\u5236\u4E3A\u4ED3\u5E93\u534F\u4F5C\u8005",
    "Users that are not collaborators of one of your repositories will not be able to interact with that repository.": "\u4E0D\u662F\u4F60\u67D0\u4E2A\u4ED3\u5E93\u534F\u4F5C\u8005\u7684\u7528\u6237\u5C06\u65E0\u6CD5\u4E0E\u8BE5\u4ED3\u5E93\u4EA4\u4E92\u3002",
    "Restrict users who are permitted to approve or request changes on pull requests in your public repositories.": "\u9650\u5236\u5141\u8BB8\u5728\u4F60\u7684\u516C\u5171\u4ED3\u5E93\u4E2D\u6279\u51C6\u6216\u8BF7\u6C42\u66F4\u6539\u62C9\u53D6\u8BF7\u6C42\u7684\u7528\u6237\u3002",
    "Code review limits may already be specified by individual repositories. Any changes here will override those limits until unset.": "\u4EE3\u7801\u5BA1\u67E5\u9650\u5236\u53EF\u80FD\u5DF2\u7531\u5404\u4E2A\u4ED3\u5E93\u6307\u5B9A\u3002\u6B64\u5904\u7684\u4EFB\u4F55\u66F4\u6539\u90FD\u5C06\u8986\u76D6\u8FD9\u4E9B\u9650\u5236\uFF0C\u76F4\u5230\u53D6\u6D88\u8BBE\u7F6E\u3002",
    'Code review limits are currently managed individually for all repositories. Enable limits to permit only users who have explicitly been granted access to each repository to submit reviews that "approve" or "request changes". Remove limits to allow all users to submit pull request reviews. All users able to submit comment pull request reviews will continue to be able to do so.': "\u4EE3\u7801\u5BA1\u67E5\u9650\u5236\u76EE\u524D\u9488\u5BF9\u6240\u6709\u4ED3\u5E93\u5355\u72EC\u7BA1\u7406\u3002\u542F\u7528\u9650\u5236\u4EE5\u4EC5\u5141\u8BB8\u5DF2\u88AB\u660E\u786E\u6388\u4E88\u6BCF\u4E2A\u4ED3\u5E93\u8BBF\u95EE\u6743\u9650\u7684\u7528\u6237\u63D0\u4EA4\u201C\u6279\u51C6\u201D\u6216\u201C\u8BF7\u6C42\u66F4\u6539\u201D\u7684\u5BA1\u67E5\u3002\u79FB\u9664\u9650\u5236\u4EE5\u5141\u8BB8\u6240\u6709\u7528\u6237\u63D0\u4EA4\u62C9\u53D6\u8BF7\u6C42\u5BA1\u67E5\u3002\u6240\u6709\u80FD\u591F\u63D0\u4EA4\u8BC4\u8BBA\u5F0F\u62C9\u53D6\u8BF7\u6C42\u5BA1\u67E5\u7684\u7528\u6237\u5C06\u7EE7\u7EED\u53EF\u4EE5\u8FD9\u6837\u505A\u3002",
    "Limit reviews on all repositories": "\u9650\u5236\u6240\u6709\u4ED3\u5E93\u7684\u5BA1\u67E5",
    "Remove review limits from all repositories": "\u79FB\u9664\u6240\u6709\u4ED3\u5E93\u7684\u5BA1\u67E5\u9650\u5236",
    ". Any changes here will override those limits.": "\u3002\u6B64\u5904\u7684\u4EFB\u4F55\u66F4\u6539\u90FD\u5C06\u8986\u76D6\u8FD9\u4E9B\u9650\u5236\u3002",
    "public repositories": "\u516C\u5171\u4ED3\u5E93",
    "Search deleted packages": "\u641C\u7D22\u5DF2\u5220\u9664\u7684\u8F6F\u4EF6\u5305",
    "Selected repositories": "\u5DF2\u9009\u4E2D\u7684\u4ED3\u5E93",
    "Select repository": "\u9009\u62E9\u4ED3\u5E93",
    "Enabled by default": "\u9ED8\u8BA4\u542F\u7528",
    "Packages permissions": "\u8F6F\u4EF6\u5305\u6743\u9650",
    "You will have access to the feature": "\u4F60\u5C06\u53EF\u4EE5\u4F7F\u7528\u6B64\u529F\u80FD",
    "You won't have access to the feature": "\u4F60\u5C06\u65E0\u6CD5\u4F7F\u7528\u6B64\u529F\u80FD",
    "Copilot Spaces": "Copilot Spaces",
    "Semantic indexing for Non-GitHub Repositories": "\u975E GitHub \u4ED3\u5E93\u7684\u8BED\u4E49\u7D22\u5F15",
    "You can use": "\u4F60\u53EF\u4EE5\u4F7F\u7528",
    Allowed: "\u5DF2\u5141\u8BB8",
    "Verified domains": "\u5DF2\u9A8C\u8BC1\u7684\u57DF\u540D",
    "There are no verified domains.": "\u6CA1\u6709\u5DF2\u9A8C\u8BC1\u7684\u57DF\u540D\u3002",
    "Verify domains to restrict who can publish GitHub Pages on them.": "\u9A8C\u8BC1\u57DF\u540D\u4EE5\u9650\u5236\u8C01\u53EF\u4EE5\u5728\u8FD9\u4E9B\u57DF\u540D\u4E0A\u53D1\u5E03 GitHub Pages\u3002",
    "Add a domain": "\u6DFB\u52A0\u57DF\u540D",
    "Saved replies are re-usable text snippets that you can use throughout GitHub comment fields. Saved replies can save you time if you're often typing similar responses.": "\u5DF2\u4FDD\u5B58\u7684\u56DE\u590D\u662F\u53EF\u590D\u7528\u7684\u6587\u672C\u7247\u6BB5\uFF0C\u4F60\u53EF\u4EE5\u5728 GitHub \u7684\u5404\u4E2A\u8BC4\u8BBA\u5B57\u6BB5\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u4F60\u7ECF\u5E38\u8F93\u5165\u7C7B\u4F3C\u7684\u56DE\u590D\uFF0C\u5DF2\u4FDD\u5B58\u7684\u56DE\u590D\u53EF\u4EE5\u8282\u7701\u4F60\u7684\u65F6\u95F4\u3002",
    "Learn more about working with saved replies": "\u4E86\u89E3\u5173\u4E8E\u4F7F\u7528\u5DF2\u4FDD\u5B58\u56DE\u590D\u7684\u66F4\u591A\u4FE1\u606F",
    "No saved replies yet.": "\u8FD8\u6CA1\u6709\u5DF2\u4FDD\u5B58\u7684\u56DE\u590D\u3002",
    "Add a saved reply": "\u6DFB\u52A0\u5DF2\u4FDD\u5B58\u7684\u56DE\u590D",
    "Saved reply title": "\u5DF2\u4FDD\u5B58\u56DE\u590D\u7684\u6807\u9898",
    "Add a short title to your reply": "\u4E3A\u4F60\u7684\u56DE\u590D\u6DFB\u52A0\u7B80\u77ED\u6807\u9898",
    "Add your saved reply": "\u6DFB\u52A0\u4F60\u7684\u5DF2\u4FDD\u5B58\u56DE\u590D",
    "Add saved reply": "\u6DFB\u52A0\u5DF2\u4FDD\u5B58\u56DE\u590D",
    "Repository default branch": "\u4ED3\u5E93\u9ED8\u8BA4\u5206\u652F",
    'Choose the default branch for your new personal repositories. You might want to change the default name due to different workflows, or because your integrations still require "master" as the default branch name. You can always change the default branch name on individual repositories.': '\u4E3A\u65B0\u4E2A\u4EBA\u4ED3\u5E93\u9009\u62E9\u9ED8\u8BA4\u5206\u652F\u3002\u7531\u4E8E\u5DE5\u4F5C\u6D41\u4E0D\u540C\uFF0C\u6216\u8005\u4F60\u7684\u96C6\u6210\u4ECD\u8981\u6C42\u4EE5"master"\u4F5C\u4E3A\u9ED8\u8BA4\u5206\u652F\u540D\uFF0C\u4F60\u53EF\u80FD\u5E0C\u671B\u66F4\u6539\u9ED8\u8BA4\u540D\u79F0\u3002\u4F60\u968F\u65F6\u53EF\u4EE5\u66F4\u6539\u5404\u4E2A\u4ED3\u5E93\u7684\u9ED8\u8BA4\u5206\u652F\u540D\u3002',
    "Learn more about default branches.": "\u4E86\u89E3\u9ED8\u8BA4\u5206\u652F\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "Commit comments": "\u63D0\u4EA4\u8BC4\u8BBA",
    "Choose whether": "\u9009\u62E9",
    "are enabled or disabled by default for repositories you own. Individual repositories can override this default. Existing commit comments are not affected by this setting and will remain viewable, editable, and deletable.": "\u9ED8\u8BA4\u5BF9\u4F60\u62E5\u6709\u7684\u4ED3\u5E93\u542F\u7528\u8FD8\u662F\u7981\u7528\u3002\u5355\u4E2A\u4ED3\u5E93\u53EF\u4EE5\u8986\u76D6\u6B64\u9ED8\u8BA4\u503C\u3002\u73B0\u6709\u7684\u63D0\u4EA4\u8BC4\u8BBA\u4E0D\u53D7\u6B64\u8BBE\u7F6E\u5F71\u54CD\uFF0C\u5C06\u7EE7\u7EED\u4FDD\u6301\u53EF\u89C1\u3001\u53EF\u7F16\u8F91\u548C\u53EF\u5220\u9664\u3002",
    "Disabled by default": "\u9ED8\u8BA4\u7981\u7528",
    "Deleted repositories": "\u5DF2\u5220\u9664\u7684\u4ED3\u5E93",
    "Automatically install dotfiles": "\u81EA\u52A8\u5B89\u88C5 dotfiles",
    "Codespaces can automatically install your dotfiles into every codespace you create.": "\u4EE3\u7801\u7A7A\u95F4\u53EF\u4EE5\u5C06\u4F60\u7684 dotfiles \u81EA\u52A8\u5B89\u88C5\u5230\u4F60\u521B\u5EFA\u7684\u6BCF\u4E2A\u4EE3\u7801\u7A7A\u95F4\u4E2D\u3002",
    "Learn how to set up your dotfiles for Codespaces.": "\u4E86\u89E3\u5982\u4F55\u4E3A\u4EE3\u7801\u7A7A\u95F4\u8BBE\u7F6E dotfiles\u3002",
    "Codespace user secrets": "\u4EE3\u7801\u7A7A\u95F4\u7528\u6237\u5BC6\u94A5",
    "Development environment secrets are environment variables that are encrypted. They are available to any codespace you create using repositories with access to that secret.": "\u5F00\u53D1\u73AF\u5883\u5BC6\u94A5\u662F\u52A0\u5BC6\u7684\u73AF\u5883\u53D8\u91CF\u3002\u5B83\u4EEC\u53EF\u7528\u4E8E\u4F60\u4F7F\u7528\u6709\u6743\u8BBF\u95EE\u8BE5\u5BC6\u94A5\u7684\u4ED3\u5E93\u521B\u5EFA\u7684\u4EFB\u4F55\u4EE3\u7801\u7A7A\u95F4\u3002",
    "There are no Codespace secrets.": "\u6CA1\u6709\u4EE3\u7801\u7A7A\u95F4\u5BC6\u94A5\u3002",
    "GPG verification": "GPG \u9A8C\u8BC1",
    "Codespaces can have GPG commit signing capabilities so that GitHub can verify that commits made in the codespace come from a trusted source. When enabled, this setting will be applied to your list of trusted repositories.": "\u4EE3\u7801\u7A7A\u95F4\u53EF\u4EE5\u5177\u5907 GPG \u63D0\u4EA4\u7B7E\u540D\u80FD\u529B\uFF0C\u4EE5\u4FBF GitHub \u9A8C\u8BC1\u4EE3\u7801\u7A7A\u95F4\u4E2D\u8FDB\u884C\u7684\u63D0\u4EA4\u6765\u81EA\u53EF\u4FE1\u6765\u6E90\u3002\u542F\u7528\u540E\uFF0C\u6B64\u8BBE\u7F6E\u5C06\u5E94\u7528\u4E8E\u4F60\u7684\u53EF\u4FE1\u4ED3\u5E93\u5217\u8868\u3002",
    "GPG signing will be available in Codespaces": "GPG \u7B7E\u540D\u5C06\u5728\u4EE3\u7801\u7A7A\u95F4\u4E2D\u53EF\u7528",
    "When enabled, you will receive emails when your codespaces are nearing deletion due to inactivity.": "\u542F\u7528\u540E\uFF0C\u5F53\u4F60\u7684\u4EE3\u7801\u7A7A\u95F4\u56E0\u4E0D\u6D3B\u52A8\u800C\u63A5\u8FD1\u5220\u9664\u65F6\uFF0C\u4F60\u5C06\u6536\u5230\u90AE\u4EF6\u3002",
    "Warning notifications for codespace deletions will be enabled": "\u4EE3\u7801\u7A7A\u95F4\u5220\u9664\u8B66\u544A\u901A\u77E5\u5C06\u542F\u7528",
    "Trusted repositories": "\u53EF\u4FE1\u4ED3\u5E93",
    "The following repositories will be referenced by GPG verification and Settings Sync.": "\u4EE5\u4E0B\u4ED3\u5E93\u5C06\u88AB GPG \u9A8C\u8BC1\u548C\u8BBE\u7F6E\u540C\u6B65\u5F15\u7528\u3002",
    "GPG signing and VS Code Settings Sync will be available for codespaces for all repositories": "GPG \u7B7E\u540D\u548C VS Code \u8BBE\u7F6E\u540C\u6B65\u5C06\u5BF9\u6240\u6709\u4ED3\u5E93\u7684\u4EE3\u7801\u7A7A\u95F4\u53EF\u7528",
    "GPG signing and VS Code Settings Sync will be available for codespaces from the selected repositories": "GPG \u7B7E\u540D\u548C VS Code \u8BBE\u7F6E\u540C\u6B65\u5C06\u5BF9\u6240\u9009\u4ED3\u5E93\u7684\u4EE3\u7801\u7A7A\u95F4\u53EF\u7528",
    "GPG and VS Code Settings Sync will be available for Codespaces from these repositories.": "GPG \u548C VS Code \u8BBE\u7F6E\u540C\u6B65\u5C06\u5BF9\u8FD9\u4E9B\u4ED3\u5E93\u7684\u4EE3\u7801\u7A7A\u95F4\u53EF\u7528\u3002",
    "Access and security": "\u8BBF\u95EE\u4E0E\u5B89\u5168",
    Deprecated: "\u5DF2\u5F03\u7528",
    "Codespaces you create for your personal account can either be restricted to accessing the repository it was opened for, or granted read access to other repositories you own.": "\u4F60\u4E3A\u4E2A\u4EBA\u8D26\u6237\u521B\u5EFA\u7684\u4EE3\u7801\u7A7A\u95F4\u53EF\u4EE5\u9650\u5236\u4E3A\u4EC5\u8BBF\u95EE\u5176\u6253\u5F00\u7684\u4ED3\u5E93\uFF0C\u6216\u6388\u4E88\u5BF9\u4F60\u62E5\u6709\u7684\u5176\u4ED6\u4ED3\u5E93\u7684\u8BFB\u53D6\u6743\u9650\u3002",
    "Limit access of personal Codespaces to the repository they were opened for": "\u5C06\u4E2A\u4EBA\u4EE3\u7801\u7A7A\u95F4\u7684\u8BBF\u95EE\u9650\u5236\u4E3A\u5176\u6253\u5F00\u7684\u4ED3\u5E93",
    "All Codespaces can access other repositories I own": "\u6240\u6709\u4EE3\u7801\u7A7A\u95F4\u90FD\u53EF\u4EE5\u8BBF\u95EE\u6211\u62E5\u6709\u7684\u5176\u4ED6\u4ED3\u5E93",
    "Personal Codespaces created for specific repositories can access other repositories I own": "\u4E3A\u7279\u5B9A\u4ED3\u5E93\u521B\u5EFA\u7684\u4E2A\u4EBA\u4EE3\u7801\u7A7A\u95F4\u53EF\u4EE5\u8BBF\u95EE\u6211\u62E5\u6709\u7684\u5176\u4ED6\u4ED3\u5E93",
    "Editor preference": "\u7F16\u8F91\u5668\u504F\u597D",
    "Connect to the cloud from your local desktop client. Requires": "\u4ECE\u4F60\u7684\u672C\u5730\u684C\u9762\u5BA2\u6237\u7AEF\u8FDE\u63A5\u5230\u4E91\u7AEF\u3002\u9700\u8981",
    "Edit and preview changes straight from the browser.": "\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u7F16\u8F91\u548C\u9884\u89C8\u66F4\u6539\u3002",
    "Edit and run notebooks from the browser with JupyterLab.": "\u4F7F\u7528 JupyterLab \u4ECE\u6D4F\u89C8\u5668\u7F16\u8F91\u548C\u8FD0\u884C\u7B14\u8BB0\u672C\u3002",
    "Default idle timeout": "\u9ED8\u8BA4\u7A7A\u95F2\u8D85\u65F6",
    "A codespace will suspend after a period of inactivity. You can specify a default idle timeout value, which will apply to all codespaces created after the default is changed. You will be charged for the entire time your codespace is running, even if it is idle. The maximum value is": "\u4EE3\u7801\u7A7A\u95F4\u5728\u4E00\u6BB5\u65F6\u95F4\u4E0D\u6D3B\u52A8\u540E\u5C06\u6302\u8D77\u3002\u4F60\u53EF\u4EE5\u6307\u5B9A\u9ED8\u8BA4\u7A7A\u95F2\u8D85\u65F6\u503C\uFF0C\u8BE5\u503C\u5C06\u5E94\u7528\u4E8E\u9ED8\u8BA4\u503C\u66F4\u6539\u540E\u521B\u5EFA\u7684\u6240\u6709\u4EE3\u7801\u7A7A\u95F4\u3002\u5373\u4F7F\u4EE3\u7801\u7A7A\u95F4\u5904\u4E8E\u7A7A\u95F2\u72B6\u6001\uFF0C\u4E5F\u4F1A\u6309\u5176\u8FD0\u884C\u7684\u5168\u90E8\u65F6\u95F4\u8BA1\u8D39\u3002\u6700\u5927\u503C\u4E3A",
    "minutes (4 hours).": "\u5206\u949F\uFF084 \u5C0F\u65F6\uFF09\u3002",
    "Default retention period": "\u9ED8\u8BA4\u4FDD\u7559\u671F\u9650",
    "Inactive codespaces are automatically deleted 30 days after the last time they were stopped. A shorter retention period can be set, and will apply to all codespaces created going forward. The default and maximum value is": "\u4E0D\u6D3B\u52A8\u7684\u4EE3\u7801\u7A7A\u95F4\u4F1A\u5728\u6700\u540E\u4E00\u6B21\u505C\u6B62 30 \u5929\u540E\u81EA\u52A8\u5220\u9664\u3002\u53EF\u4EE5\u8BBE\u7F6E\u66F4\u77ED\u7684\u4FDD\u7559\u671F\u9650\uFF0C\u8BE5\u671F\u9650\u5C06\u9002\u7528\u4E8E\u4E4B\u540E\u521B\u5EFA\u7684\u6240\u6709\u4EE3\u7801\u7A7A\u95F4\u3002\u9ED8\u8BA4\u503C\u548C\u6700\u5927\u503C\u4E3A",
    "days.": "\u5929\u3002",
    "Learn about retention setting": "\u4E86\u89E3\u4FDD\u7559\u8BBE\u7F6E",
    "Host image version preference": "\u4E3B\u673A\u6620\u50CF\u7248\u672C\u504F\u597D",
    "The host image defines the operating system in which development containers run. These images receive periodic upgrades for security, functionality, and performance. GitHub Codespaces offers early access to beta images to ensure compatibility with existing development container configurations. Any codespace created or resumed after changing this setting will use the specified image configuration.": "\u4E3B\u673A\u6620\u50CF\u5B9A\u4E49\u4E86\u5F00\u53D1\u5BB9\u5668\u8FD0\u884C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u3002\u8FD9\u4E9B\u6620\u50CF\u4F1A\u5B9A\u671F\u8FDB\u884C\u5B89\u5168\u3001\u529F\u80FD\u548C\u6027\u80FD\u5347\u7EA7\u3002GitHub Codespaces \u63D0\u4F9B\u6D4B\u8BD5\u7248\u6620\u50CF\u7684\u65E9\u671F\u8BBF\u95EE\uFF0C\u4EE5\u786E\u4FDD\u4E0E\u73B0\u6709\u5F00\u53D1\u5BB9\u5668\u914D\u7F6E\u517C\u5BB9\u3002\u66F4\u6539\u6B64\u8BBE\u7F6E\u540E\u521B\u5EFA\u6216\u6062\u590D\u7684\u4EFB\u4F55\u4EE3\u7801\u7A7A\u95F4\u90FD\u5C06\u4F7F\u7528\u6307\u5B9A\u7684\u6620\u50CF\u914D\u7F6E\u3002",
    "Learn more about host images": "\u4E86\u89E3\u4E3B\u673A\u6620\u50CF\u7684\u66F4\u591A\u4FE1\u606F",
    Stable: "\u7A33\u5B9A\u7248",
    "Always use the latest stable configuration.": "\u59CB\u7EC8\u4F7F\u7528\u6700\u65B0\u7684\u7A33\u5B9A\u914D\u7F6E\u3002",
    Beta: "\u6D4B\u8BD5\u7248",
    "Use a beta image configuration when available. Otherwise, use the latest stable configuration.": "\u53EF\u7528\u65F6\u4F7F\u7528\u6D4B\u8BD5\u7248\u6620\u50CF\u914D\u7F6E\u3002\u5426\u5219\uFF0C\u4F7F\u7528\u6700\u65B0\u7684\u7A33\u5B9A\u914D\u7F6E\u3002",
    Region: "\u533A\u57DF",
    "Your default region will be used to designate compute resources to your codespaces. GitHub can set your region automatically based on your location, or you can set it yourself. Codespaces are deployed to a subset of Azure regions.": "\u4F60\u7684\u9ED8\u8BA4\u533A\u57DF\u5C06\u7528\u4E8E\u4E3A\u4F60\u7684\u4EE3\u7801\u7A7A\u95F4\u6307\u5B9A\u8BA1\u7B97\u8D44\u6E90\u3002GitHub \u53EF\u4EE5\u6839\u636E\u4F60\u7684\u4F4D\u7F6E\u81EA\u52A8\u8BBE\u7F6E\u533A\u57DF\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u884C\u8BBE\u7F6E\u3002\u4EE3\u7801\u7A7A\u95F4\u90E8\u7F72\u5728\u90E8\u5206 Azure \u533A\u57DF\u3002",
    "Set automatically": "\u81EA\u52A8\u8BBE\u7F6E",
    "We will determine the closest available region based on your location (IP address) at codespace creation time.": "\u6211\u4EEC\u5C06\u5728\u521B\u5EFA\u4EE3\u7801\u7A7A\u95F4\u65F6\u6839\u636E\u4F60\u7684\u4F4D\u7F6E\uFF08IP \u5730\u5740\uFF09\u786E\u5B9A\u6700\u8FD1\u7684\u53EF\u7528\u533A\u57DF\u3002",
    "Set manually": "\u624B\u52A8\u8BBE\u7F6E",
    "Choose your default region": "\u9009\u62E9\u4F60\u7684\u9ED8\u8BA4\u533A\u57DF",
    "designated below, in the event of my death. I understand that this appointment of a successor does not override legally binding next-of-kin rules or estate laws of any relevant jurisdiction, and does not create a binding will.": "\u5728\u4E0B\u65B9\u6307\u5B9A\uFF0C\u7528\u4E8E\u6211\u53BB\u4E16\u4E4B\u65F6\u3002\u6211\u7406\u89E3\uFF0C\u7EE7\u4EFB\u8005\u6307\u5B9A\u4E0D\u51CC\u9A7E\u4E8E\u4EFB\u4F55\u76F8\u5173\u53F8\u6CD5\u8F96\u533A\u7684\u5177\u6709\u6CD5\u5F8B\u7EA6\u675F\u529B\u7684\u8FD1\u4EB2\u5C5E\u89C4\u5219\u6216\u9057\u4EA7\u6CD5\u5F8B\u4E4B\u4E0A\uFF0C\u4E5F\u4E0D\u6784\u6210\u5177\u6709\u7EA6\u675F\u529B\u7684\u9057\u5631\u3002",
    "Settings Sync": "\u8BBE\u7F6E\u540C\u6B65",
    "By enabling, your codespaces will be able to pull from VS Code Settings Sync service and push only for the trusted repositories you specify. Only enable this for repositories that you trust.": "\u542F\u7528\u540E\uFF0C\u4F60\u7684\u4EE3\u7801\u7A7A\u95F4\u5C06\u80FD\u591F\u4ECE VS Code \u8BBE\u7F6E\u540C\u6B65\u670D\u52A1\u62C9\u53D6\u5185\u5BB9\uFF0C\u5E76\u4E14\u4EC5\u5411\u4F60\u6307\u5B9A\u7684\u53EF\u4FE1\u4ED3\u5E93\u63A8\u9001\u3002\u53EA\u5BF9\u60A8\u4FE1\u4EFB\u7684\u4ED3\u5E93\u542F\u7528\u6B64\u529F\u80FD\u3002",
    "VS Code Settings Sync will be available in Codespaces": "VS Code \u8BBE\u7F6E\u540C\u6B65\u5C06\u5728\u4EE3\u7801\u7A7A\u95F4\u4E2D\u53EF\u7528",
    "with the": "\u914D\u5408",
    "extension.": "\u6269\u5C55\u3002",
    "Visual Studio Code for the Web": "Visual Studio Code \u7F51\u9875\u7248",
    "Default Package Setting": "\u9ED8\u8BA4\u8F6F\u4EF6\u5305\u8BBE\u7F6E",
    "This setting will be applied to new Container, npm, rubygems and NuGet packages.": "\u6B64\u8BBE\u7F6E\u5C06\u5E94\u7528\u4E8E\u65B0\u7684 Container\u3001npm\u3001rubygems \u548C NuGet \u8F6F\u4EF6\u5305\u3002",
    "Inherit access from source repository": "\u4ECE\u6E90\u4ED3\u5E93\u7EE7\u627F\u8BBF\u95EE\u6743\u9650",
    "Deleted Packages": "\u5DF2\u5220\u9664\u7684\u8F6F\u4EF6\u5305",
    "These are packages that have been previously deleted belonging to you. You can restore a package deleted within the last 30 days.": "\u8FD9\u4E9B\u662F\u4F60\u4E4B\u524D\u5220\u9664\u7684\u8F6F\u4EF6\u5305\u3002\u4F60\u53EF\u4EE5\u6062\u590D\u6700\u8FD1 30 \u5929\u5185\u5220\u9664\u7684\u8F6F\u4EF6\u5305\u3002",
    "Getting started": "\u5165\u95E8",
    "Ask about coding problems and get code completions while you work.": "\u5728\u5DE5\u4F5C\u65F6\u8BE2\u95EE\u7F16\u7801\u95EE\u9898\u5E76\u83B7\u53D6\u4EE3\u7801\u8865\u5168\u3002",
    "Inline suggestions": "\u5185\u8054\u5EFA\u8BAE",
    "Included credits": "\u5305\u542B\u7684\u79EF\u5206",
    "Upgrade your Copilot plan for higher usage limits, premium models, AI reviews and more.": "\u5347\u7EA7\u4F60\u7684 Copilot \u5957\u9910\u4EE5\u83B7\u5F97\u66F4\u9AD8\u7684\u7528\u91CF\u9650\u989D\u3001\u9AD8\u7EA7\u6A21\u578B\u3001AI \u5BA1\u67E5\u7B49\u529F\u80FD\u3002",
    "If enabled you can use": "\u542F\u7528\u540E\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528",
    "to index your non-GitHub repositories in VSCode.": "\u5728 VSCode \u4E2D\u7D22\u5F15\u4F60\u7684\u975E GitHub \u4ED3\u5E93\u3002",
    "Copilot Chat in GitHub.com": "GitHub.com \u4E2D\u7684 Copilot \u804A\u5929",
    "You can use Copilot Chat in GitHub.com. Preview features are only available for paid licenses.": "\u4F60\u53EF\u4EE5\u5728 GitHub.com \u4E2D\u4F7F\u7528 Copilot \u804A\u5929\u3002\u9884\u89C8\u529F\u80FD\u4EC5\u9002\u7528\u4E8E\u4ED8\u8D39\u8BB8\u53EF\u8BC1\u3002",
    "Learn more about Copilot in GitHub.com": "\u4E86\u89E3 GitHub.com \u4E2D Copilot \u7684\u66F4\u591A\u4FE1\u606F",
    "Copilot in GitHub Desktop": "GitHub Desktop \u4E2D\u7684 Copilot",
    "GitHub Copilot for assistance in terminal": "GitHub Copilot \u7EC8\u7AEF\u8F85\u52A9",
    "GitHub Copilot for assistance in GitHub Desktop": "GitHub Desktop \u4E2D\u7684 GitHub Copilot \u8F85\u52A9",
    "Copilot can search the web": "Copilot \u53EF\u4EE5\u641C\u7D22\u7F51\u7EDC",
    "Copilot can answer questions about new trends and give improved answers, via Bing. See": "Copilot \u53EF\u4EE5\u901A\u8FC7 Bing \u56DE\u7B54\u5173\u4E8E\u65B0\u8D8B\u52BF\u7684\u95EE\u9898\u5E76\u63D0\u4F9B\u6539\u8FDB\u7684\u7B54\u6848\u3002\u8BF7\u53C2\u9605",
    "Microsoft Privacy Statement": "Microsoft \u9690\u79C1\u58F0\u660E",
    "Evaluation models in Copilot auto model selection": "Copilot \u81EA\u52A8\u6A21\u578B\u9009\u62E9\u4E2D\u7684\u8BC4\u4F30\u6A21\u578B",
    "If enabled, you may be served": "\u542F\u7528\u540E\uFF0C\u4F60\u53EF\u80FD\u4F1A\u83B7\u5F97",
    "evaluation models": "\u8BC4\u4F30\u6A21\u578B",
    through: "\u901A\u8FC7",
    "Copilot Auto model selection": "Copilot \u81EA\u52A8\u6A21\u578B\u9009\u62E9",
    "Dashboard Entry Point": "\u4EEA\u8868\u76D8\u5165\u53E3",
    "Allows instant chatting when landing on GitHub.com": "\u5141\u8BB8\u5728\u8FDB\u5165 GitHub.com \u65F6\u7ACB\u5373\u804A\u5929",
    "Copilot cloud agent": "Copilot \u4E91\u4EE3\u7406",
    "Delegate tasks to Copilot cloud agent in repositories where it is enabled": "\u5728\u542F\u7528\u4E86 Copilot \u4E91\u4EE3\u7406\u7684\u4ED3\u5E93\u4E2D\u5411\u5176\u59D4\u6D3E\u4EFB\u52A1",
    "MCP servers in Copilot": "Copilot \u4E2D\u7684 MCP \u670D\u52A1\u5668",
    "Connect MCP servers to Copilot in all Copilot editors and Copilot cloud agent.": "\u5728\u6240\u6709 Copilot \u7F16\u8F91\u5668\u548C Copilot \u4E91\u4EE3\u7406\u4E2D\u5C06 MCP \u670D\u52A1\u5668\u8FDE\u63A5\u5230 Copilot\u3002",
    "Copilot-generated commit messages": "Copilot \u751F\u6210\u7684\u63D0\u4EA4\u6D88\u606F",
    "Allow Copilot to suggest commit messages when you make changes on GitHub.com.": "\u5141\u8BB8 Copilot \u5728\u4F60\u66F4\u6539 GitHub.com \u4E0A\u7684\u5185\u5BB9\u65F6\u5EFA\u8BAE\u63D0\u4EA4\u6D88\u606F\u3002",
    "Learn more about Copilot-generated commit messages.": "\u4E86\u89E3\u6709\u5173 Copilot \u751F\u6210\u7684\u63D0\u4EA4\u6D88\u606F\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "If enabled, you can view and create": "\u542F\u7528\u540E\uFF0C\u4F60\u53EF\u4EE5\u67E5\u770B\u548C\u521B\u5EFA",
    "When disabled, you cannot view or create any Copilot Spaces.": "\u7981\u7528\u540E\uFF0C\u4F60\u5C06\u65E0\u6CD5\u67E5\u770B\u6216\u521B\u5EFA\u4EFB\u4F55 Copilot Spaces\u3002",
    "Copilot Spaces Individual Access": "Copilot Spaces \u4E2A\u4EBA\u8BBF\u95EE",
    "If enabled, you can create individually owned": "\u542F\u7528\u540E\uFF0C\u4F60\u53EF\u4EE5\u521B\u5EFA\u4E2A\u4EBA\u62E5\u6709\u7684",
    "When disabled, you cannot create individual spaces.": "\u7981\u7528\u540E\uFF0C\u4F60\u5C06\u65E0\u6CD5\u521B\u5EFA\u4E2A\u4EBA\u7A7A\u95F4\u3002",
    "Copilot Spaces Individual Sharing": "Copilot Spaces \u4E2A\u4EBA\u5171\u4EAB",
    "If enabled, you can share individually owned": "\u542F\u7528\u540E\uFF0C\u4F60\u53EF\u4EE5\u5171\u4EAB\u4E2A\u4EBA\u62E5\u6709\u7684",
    "When disabled, you cannot share individual spaces.": "\u7981\u7528\u540E\uFF0C\u4F60\u5C06\u65E0\u6CD5\u5171\u4EAB\u4E2A\u4EBA\u7A7A\u95F4\u3002",
    "Suggestions matching public code": "\u5339\u914D\u516C\u5171\u4EE3\u7801\u7684\u5EFA\u8BAE",
    "Copilot can allow or block suggestions matching public code. Learn more about": "Copilot \u53EF\u4EE5\u5141\u8BB8\u6216\u963B\u6B62\u5339\u914D\u516C\u5171\u4EE3\u7801\u7684\u5EFA\u8BAE\u3002\u4E86\u89E3\u66F4\u591A\u5173\u4E8E",
    "code suggestions": "\u4EE3\u7801\u5EFA\u8BAE",
    "Allow GitHub to use my data for AI model training": "\u5141\u8BB8 GitHub \u5C06\u6211\u7684\u6570\u636E\u7528\u4E8E AI \u6A21\u578B\u8BAD\u7EC3",
    "Allow GitHub to collect and use my Inputs, Outputs, and associated context to train and improve AI models. Read more in the": "\u5141\u8BB8 GitHub \u6536\u96C6\u548C\u4F7F\u7528\u6211\u7684\u8F93\u5165\u3001\u8F93\u51FA\u53CA\u76F8\u5173\u4E0A\u4E0B\u6587\u6765\u8BAD\u7EC3\u548C\u6539\u8FDB AI \u6A21\u578B\u3002\u66F4\u591A\u4FE1\u606F\u8BF7\u53C2\u9605",
    "For more information about the data your organization receives regarding your use of GitHub Copilot, please review": "\u6709\u5173\u4F60\u7684\u7EC4\u7EC7\u6536\u5230\u7684\u5173\u4E8E\u4F60\u4F7F\u7528 GitHub Copilot \u7684\u6570\u636E\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u67E5\u770B",
    "GitHub's Privacy Statement": "GitHub \u9690\u79C1\u58F0\u660E",
    "Show Copilot": "\u663E\u793A Copilot",
    "Enable Copilot for all GitHub features, including navigation bar, search, and dashboard.": "\u4E3A\u6240\u6709 GitHub \u529F\u80FD\u542F\u7528 Copilot\uFF0C\u5305\u62EC\u5BFC\u822A\u680F\u3001\u641C\u7D22\u548C\u4EEA\u8868\u76D8\u3002",
    "When disabled, Copilot will be hidden and unavailable. This setting does not apply to Copilot search on GitHub Docs.": "\u7981\u7528\u540E\uFF0CCopilot \u5C06\u88AB\u9690\u85CF\u4E14\u4E0D\u53EF\u7528\u3002\u6B64\u8BBE\u7F6E\u4E0D\u9002\u7528\u4E8E GitHub Docs \u4E0A\u7684 Copilot \u641C\u7D22\u3002",
    "Get Copilot from an organization": "\u4ECE\u7EC4\u7EC7\u83B7\u53D6 Copilot",
    "Organizations can provide their members (including you) and their teams access to GitHub Copilot.": "\u7EC4\u7EC7\u53EF\u4EE5\u4E3A\u5176\u6210\u5458\uFF08\u5305\u62EC\u4F60\uFF09\u53CA\u5176\u56E2\u961F\u63D0\u4F9B GitHub Copilot \u7684\u8BBF\u95EE\u6743\u9650\u3002",
    "You do not belong to any organizations.": "\u4F60\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u7EC4\u7EC7\u3002",
    "You can enable Copilot cloud agent for other users, but you won't be able to assign tasks to Copilot because you don't have a Copilot Pro, Copilot Pro+, Copilot Business or Copilot Enterprise license.": "\u4F60\u53EF\u4EE5\u4E3A\u5176\u4ED6\u7528\u6237\u542F\u7528 Copilot \u4E91\u4EE3\u7406\uFF0C\u4F46\u7531\u4E8E\u4F60\u6CA1\u6709 Copilot Pro\u3001Copilot Pro+\u3001Copilot Business \u6216 Copilot Enterprise \u8BB8\u53EF\u8BC1\uFF0C\u4F60\u5C06\u65E0\u6CD5\u5411 Copilot \u5206\u914D\u4EFB\u52A1\u3002",
    "With Copilot cloud agent, you can delegate tasks to Copilot, freeing you to focus on the creative, complex, and high-impact work that matters most. Simply assign an issue to Copilot, wait for the agent to request your review, then leave feedback on the pull request to iterate.": "\u501F\u52A9 Copilot \u4E91\u4EE3\u7406\uFF0C\u4F60\u53EF\u4EE5\u5C06\u4EFB\u52A1\u59D4\u6D3E\u7ED9 Copilot\uFF0C\u4ECE\u800C\u817E\u51FA\u7CBE\u529B\u4E13\u6CE8\u4E8E\u6700\u91CD\u8981\u7684\u521B\u9020\u6027\u3001\u590D\u6742\u6027\u548C\u9AD8\u5F71\u54CD\u529B\u5DE5\u4F5C\u3002\u53EA\u9700\u5C06\u8BAE\u9898\u5206\u914D\u7ED9 Copilot\uFF0C\u7B49\u5F85\u4EE3\u7406\u8BF7\u6C42\u4F60\u5BA1\u67E5\uFF0C\u7136\u540E\u5728\u62C9\u53D6\u8BF7\u6C42\u4E0A\u7559\u4E0B\u53CD\u9988\u4EE5\u8FDB\u884C\u8FED\u4EE3\u3002",
    "Learn more in the docs.": "\u5728\u6587\u6863\u4E2D\u4E86\u89E3\u66F4\u591A\u3002",
    "Choose which repositories Copilot cloud agent should be enabled in. Copilot cloud agent will only be available where it is enabled for the repository and in the Copilot license policies.": "\u9009\u62E9\u5E94\u5728\u54EA\u4E9B\u4ED3\u5E93\u4E2D\u542F\u7528 Copilot \u4E91\u4EE3\u7406\u3002Copilot \u4E91\u4EE3\u7406\u4EC5\u5728\u8BE5\u4ED3\u5E93\u53CA Copilot \u8BB8\u53EF\u8BC1\u7B56\u7565\u5141\u8BB8\u7684\u5730\u65B9\u53EF\u7528\u3002",
    ".": "\u3002",
    "External link": "\u5916\u90E8\u94FE\u63A5",
    "Not available": "\u4E0D\u53EF\u7528",
    "User profile": "\u7528\u6237\u8D44\u6599",
    "Search or jump to, type / to search": "\u641C\u7D22\u6216\u8DF3\u8F6C\uFF0C\u8F93\u5165 / \u8FDB\u884C\u641C\u7D22",
    "Dismiss this message": "\u5173\u95ED\u6B64\u6D88\u606F",
    "More actions": "\u66F4\u591A\u64CD\u4F5C",
    "Additional navigation options": "\u66F4\u591A\u5BFC\u822A\u9009\u9879",
    "Browse repository at this point": "\u6D4F\u89C8\u6B64\u63D0\u4EA4\u70B9\u7684\u4ED3\u5E93",
    "Username or email address": "\u7528\u6237\u540D\u6216\u90AE\u7BB1\u5730\u5740",
    "Continue with Google": "\u7EE7\u7EED\u4F7F\u7528 Google",
    "Continue with Apple": "\u7EE7\u7EED\u4F7F\u7528 Apple",
    "Continue with passkey": "\u7EE7\u7EED\u4F7F\u7528\u901A\u884C\u5BC6\u94A5",
    "This browser or device is reporting partial passkey support.": "\u6B64\u6D4F\u89C8\u5668\u6216\u8BBE\u5907\u62A5\u544A\u90E8\u5206\u901A\u884C\u5BC6\u94A5\u652F\u6301\u3002",
    "Webauthn isn't supported. Use a different browser or device": "\u4E0D\u652F\u6301 Webauthn\u3002\u8BF7\u4F7F\u7528\u5176\u4ED6\u6D4F\u89C8\u5668\u6216\u8BBE\u5907",
    "Waiting for input from browser interaction...": "\u7B49\u5F85\u6D4F\u89C8\u5668\u4EA4\u4E92\u8F93\u5165...",
    EXPLORE: "\u63A2\u7D22",
    Solutions: "\u89E3\u51B3\u65B9\u6848",
    "View all features": "\u67E5\u770B\u6240\u6709\u529F\u80FD",
    "BY COMPANY SIZE": "\u6309\u516C\u53F8\u89C4\u6A21",
    "Small and medium teams": "\u4E2D\u5C0F\u56E2\u961F",
    Startups: "\u521D\u521B\u516C\u53F8",
    Nonprofits: "\u975E\u8425\u5229\u7EC4\u7EC7",
    "BY USE CASE": "\u6309\u4F7F\u7528\u573A\u666F",
    Manufacturing: "\u5236\u9020\u4E1A",
    Government: "\u653F\u5E9C",
    "View all industries": "\u67E5\u770B\u6240\u6709\u884C\u4E1A",
    "EXPLORE BY TOPIC": "\u6309\u4E3B\u9898\u63A2\u7D22",
    "Software Development": "\u8F6F\u4EF6\u5F00\u53D1",
    "View all topics": "\u67E5\u770B\u6240\u6709\u4E3B\u9898",
    "EXPLORE BY TYPE": "\u6309\u7C7B\u578B\u63A2\u7D22",
    "Customer stories": "\u5BA2\u6237\u6848\u4F8B",
    "Events & webinars": "\u6D3B\u52A8\u4E0E\u7F51\u7EDC\u7814\u8BA8\u4F1A",
    "Ebooks & reports": "\u7535\u5B50\u4E66\u4E0E\u62A5\u544A",
    "Business insights": "\u5546\u4E1A\u6D1E\u5BDF",
    "GitHub Skills": "GitHub \u6280\u80FD",
    "SUPPORT & SERVICES": "\u652F\u6301\u4E0E\u670D\u52A1",
    "Customer support": "\u5BA2\u6237\u652F\u6301",
    "Community forum": "\u793E\u533A\u8BBA\u575B",
    "Trust center": "\u4FE1\u4EFB\u4E2D\u5FC3",
    "View all resources": "\u67E5\u770B\u6240\u6709\u8D44\u6E90",
    "Open Source": "\u5F00\u6E90",
    COMMUNITY: "\u793E\u533A",
    "Fund open source developers": "\u8D44\u52A9\u5F00\u6E90\u5F00\u53D1\u8005",
    PROGRAMS: "\u9879\u76EE\u8BA1\u5212",
    "Security Lab": "\u5B89\u5168\u5B9E\u9A8C\u5BA4",
    "Maintainer Community": "\u7EF4\u62A4\u8005\u793E\u533A",
    Accelerator: "\u52A0\u901F\u5668",
    "Archive Program": "\u5F52\u6863\u8BA1\u5212",
    REPOSITORIES: "\u4ED3\u5E93",
    "ENTERPRISE SOLUTIONS": "\u4F01\u4E1A\u89E3\u51B3\u65B9\u6848",
    "Enterprise platform": "\u4F01\u4E1A\u5E73\u53F0",
    "AI-powered developer platform": "AI \u9A71\u52A8\u7684\u5F00\u53D1\u8005\u5E73\u53F0",
    "AVAILABLE ADD-ONS": "\u53EF\u7528\u9644\u52A0\u7EC4\u4EF6",
    "Enterprise-grade security features": "\u4F01\u4E1A\u7EA7\u5B89\u5168\u529F\u80FD",
    "Enterprise-grade AI features": "\u4F01\u4E1A\u7EA7 AI \u529F\u80FD",
    "Enterprise-grade 24/7 support": "\u4F01\u4E1A\u7EA7 24/7 \u652F\u6301",
    "Manage code changes": "\u7BA1\u7406\u4EE3\u7801\u66F4\u6539",
    "Enforce quality at merge": "\u5728\u5408\u5E76\u65F6\u5F3A\u5236\u6267\u884C\u8D28\u91CF",
    "APPLICATION SECURITY": "\u5E94\u7528\u5B89\u5168",
    "Find and fix vulnerabilities": "\u67E5\u627E\u5E76\u4FEE\u590D\u6F0F\u6D1E",
    "Secure your code as you build": "\u5728\u6784\u5EFA\u65F6\u4FDD\u62A4\u4F60\u7684\u4EE3\u7801",
    "Secret protection": "\u5BC6\u94A5\u4FDD\u62A4",
    "Stop leaks before they start": "\u9632\u60A3\u4E8E\u672A\u7136\uFF0C\u963B\u6B62\u6CC4\u5BC6",
    "Site-wide Links": "\u5168\u7AD9\u94FE\u63A5",
    "Go to GitHub homepage": "\u524D\u5F80 GitHub \u4E3B\u9875",
    "The developer newsletter": "\u5F00\u53D1\u8005\u901A\u8BAF",
    "Get tips, technical guides, and best practices. Twice a month.": "\u83B7\u53D6\u6280\u5DE7\u3001\u6280\u672F\u6307\u5357\u548C\u6700\u4F73\u5B9E\u8DF5\u3002\u6BCF\u6708\u4E24\u6B21\u3002",
    Roadmap: "\u8DEF\u7EBF\u56FE",
    "Compare GitHub": "\u6BD4\u8F83 GitHub",
    Ecosystem: "\u751F\u6001\u7CFB\u7EDF",
    "Developer API": "\u5F00\u53D1\u8005 API",
    Education: "\u6559\u80B2",
    Support: "\u652F\u6301",
    "Professional Services": "\u4E13\u4E1A\u670D\u52A1",
    Skills: "\u6280\u80FD",
    "Contact GitHub": "\u8054\u7CFB GitHub",
    "What is Git?": "\u4EC0\u4E48\u662F Git\uFF1F",
    Sitemap: "\u7AD9\u70B9\u5730\u56FE",
    "Customer Stories": "\u5BA2\u6237\u6848\u4F8B",
    "The ReadME Project": "ReadME \u9879\u76EE",
    Careers: "\u804C\u4E1A\u673A\u4F1A",
    Newsroom: "\u65B0\u95FB\u4E2D\u5FC3",
    Inclusion: "\u5305\u5BB9\u6027",
    "Social Impact": "\u793E\u4F1A\u5F71\u54CD\u529B",
    Shop: "\u5546\u5E97",
    "Legal and Resource Links": "\u6CD5\u5F8B\u4E0E\u8D44\u6E90\u94FE\u63A5",
    "GitHub's Social Media Links": "GitHub \u793E\u4EA4\u5A92\u4F53\u94FE\u63A5",
    "GitHub on LinkedIn": "GitHub \u5728 LinkedIn",
    "GitHub on Instagram": "GitHub \u5728 Instagram",
    "GitHub on YouTube": "GitHub \u5728 YouTube",
    "GitHub on X": "GitHub \u5728 X",
    "GitHub on TikTok": "GitHub \u5728 TikTok",
    "GitHub on Twitch": "GitHub \u5728 Twitch",
    "to refresh your session.": "\u4EE5\u5237\u65B0\u4F60\u7684\u4F1A\u8BDD\u3002",
    "You must be signed in to star a repository": "\u4F60\u5FC5\u987B\u767B\u5F55\u624D\u80FD\u7ED9\u4ED3\u5E93\u70B9\u661F\u6807",
    "Close navigation menu": "\u5173\u95ED\u5BFC\u822A\u83DC\u5355",
    "Toggle navigation": "\u5207\u6362\u5BFC\u822A",
    Global: "\u5168\u5C40",
    "Code Quality": "\u4EE3\u7801\u8D28\u91CF",
    "App Modernization": "\u5E94\u7528\u73B0\u4EE3\u5316",
    "View all use cases": "\u67E5\u770B\u6240\u6709\u7528\u4F8B",
    "BY INDUSTRY": "\u6309\u884C\u4E1A",
    Healthcare: "\u533B\u7597\u4FDD\u5065",
    "Get tips, technical guides, and best practices. Twice a month. Right in your inbox.": "\u83B7\u53D6\u6280\u5DE7\u3001\u6280\u672F\u6307\u5357\u548C\u6700\u4F73\u5B9E\u8DF5\u3002\u6BCF\u6708\u4E24\u6B21\uFF0C\u76F4\u8FBE\u4F60\u7684\u6536\u4EF6\u7BB1\u3002",
    "Community Forum": "\u793E\u533A\u8BBA\u575B",
    "GitHub's organization on GitHub": "GitHub \u7EC4\u7EC7",
    "English - Select language": "\u82F1\u8BED - \u9009\u62E9\u8BED\u8A00",
    "This recommendation was generated by GitHub computers": "\u6B64\u63A8\u8350\u7531 GitHub \u8BA1\u7B97\u673A\u751F\u6210",
    "Trending repository": "\u70ED\u95E8\u4ED3\u5E93",
    "to exclude": "\u4EE5\u6392\u9664",
    "Unknown user": "\u672A\u77E5\u7528\u6237",
    "Filter users": "\u7B5B\u9009\u7528\u6237",
    "Filter workflow runs": "\u7B5B\u9009\u5DE5\u4F5C\u6D41\u8FD0\u884C",
    "Find code, projects, and people on GitHub:": "\u5728 GitHub \u4E0A\u641C\u7D22\u4EE3\u7801\u3001\u9879\u76EE\u548C\u4EBA\u5458\uFF1A",
    "Contact Support": "\u8054\u7CFB\u652F\u6301",
    "GitHub Status": "GitHub \u72B6\u6001",
    "Status checks: success": "\u72B6\u6001\u68C0\u67E5\uFF1A\u6210\u529F",
    "Start, percent": "\u8D77\u59CB\uFF0C\u767E\u5206\u6BD4",
    "End, percent": "\u7ED3\u675F\uFF0C\u767E\u5206\u6BD4",
    "You must be logged in to block users.": "\u4F60\u5FC5\u987B\u767B\u5F55\u624D\u80FD\u5C4F\u853D\u7528\u6237\u3002",
    "Prevent this user from interacting with your repositories and sending you notifications.\n            Learn more about": "\u963B\u6B62\u6B64\u7528\u6237\u4E0E\u4F60\u7684\u4ED3\u5E93\u4EA4\u4E92\u5E76\u5411\u4F60\u53D1\u9001\u901A\u77E5\u3002\n            \u4E86\u89E3\u66F4\u591A\u5173\u4E8E",
    "Maximum 250 characters. Please don\u2019t include any personal information such as legal names or email addresses. Markdown is supported. This note will only be visible to you.": "\u6700\u591A 250 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u4F8B\u5982\u6CD5\u5B9A\u59D3\u540D\u6216\u90AE\u7BB1\u5730\u5740\u3002\u652F\u6301 Markdown\u3002\u6B64\u5907\u6CE8\u4EC5\u5BF9\u4F60\u53EF\u89C1\u3002",
    "Contact GitHub support about this user\u2019s behavior.\n          Learn more about": "\u8054\u7CFB GitHub \u652F\u6301\u4EBA\u5458\u53CD\u9988\u6B64\u7528\u6237\u7684\u884C\u4E3A\u3002\n          \u4E86\u89E3\u66F4\u591A\u5173\u4E8E",
    "Enable interaction limits for:": "\u4E3A\u4EE5\u4E0B\u5BF9\u8C61\u542F\u7528\u4EA4\u4E92\u9650\u5236\uFF1A",
    "24 hours": "24 \u5C0F\u65F6",
    "3 days": "3 \u5929",
    "1 week": "1 \u5468",
    "Active Mode": "\u6D3B\u52A8\u6A21\u5F0F",
    "Single theme picker": "\u5355\u4E00\u4E3B\u9898\u9009\u62E9\u5668",
    "Light theme picker": "\u6D45\u8272\u4E3B\u9898\u9009\u62E9\u5668",
    "Dark theme picker": "\u6DF1\u8272\u4E3B\u9898\u9009\u62E9\u5668",
    User: "\u7528\u6237",
    "Budget utilization": "\u9884\u7B97\u4F7F\u7528\u7387",
    "Products selector navigation": "\u4EA7\u54C1\u9009\u62E9\u5668\u5BFC\u822A",
    "Products selector": "\u4EA7\u54C1\u9009\u62E9\u5668",
    "Loading budgets": "\u6B63\u5728\u52A0\u8F7D\u9884\u7B97",
    "Included usage alerts: On": "\u5305\u542B\u7684\u7528\u91CF\u63D0\u9192\uFF1A\u5F00",
    "Choose your country/region": "\u9009\u62E9\u4F60\u7684\u56FD\u5BB6/\u5730\u533A",
    "Select state": "\u9009\u62E9\u5DDE",
    "Select province": "\u9009\u62E9\u7701",
    "Credit Card Form": "\u4FE1\u7528\u5361\u8868\u5355",
    "Loading payment information\u2026": "\u6B63\u5728\u52A0\u8F7D\u4ED8\u6B3E\u4FE1\u606F\u2026",
    "Add billing information": "\u6DFB\u52A0\u8D26\u5355\u4FE1\u606F",
    "Add specific contact or tax information to your receipts, like your full business name, VAT/GST identification number, or address of record here. We'll make sure it shows up on every receipt.": "\u5411\u4F60\u7684\u6536\u636E\u6DFB\u52A0\u7279\u5B9A\u8054\u7CFB\u4EBA\u6216\u7A0E\u52A1\u4FE1\u606F\uFF0C\u4F8B\u5982\u4F60\u7684\u5B8C\u6574\u4F01\u4E1A\u540D\u79F0\u3001VAT/GST \u8BC6\u522B\u53F7\u6216\u767B\u8BB0\u5730\u5740\u3002\u6211\u4EEC\u5C06\u786E\u4FDD\u5B83\u663E\u793A\u5728\u6BCF\u5F20\u6536\u636E\u4E0A\u3002",
    "To update the information that appears on": "\u8981\u66F4\u65B0\u663E\u793A\u5728",
    invoices: "\u53D1\u7968",
    "(if enabled), visit the": "\uFF08\u5982\u5DF2\u542F\u7528\uFF09\uFF0C\u8BF7\u8BBF\u95EE",
    "billing information section": "\u8D26\u5355\u4FE1\u606F\u90E8\u5206",
    "For your security, do not include any confidential or financial information (like credit card numbers).": "\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u8BF7\u52FF\u5305\u542B\u4EFB\u4F55\u673A\u5BC6\u6216\u8D22\u52A1\u4FE1\u606F\uFF08\u5982\u4FE1\u7528\u5361\u53F7\uFF09\u3002",
    Dotfiles: "\u70B9\u6587\u4EF6",
    "Select Repository": "\u9009\u62E9\u4ED3\u5E93",
    minutes: "\u5206\u949F",
    "Timeout must be 240 minutes or less.": "\u8D85\u65F6\u65F6\u95F4\u5FC5\u987B\u4E3A 240 \u5206\u949F\u6216\u66F4\u77ED\u3002",
    "Timeout must be 5 minutes or more.": "\u8D85\u65F6\u65F6\u95F4\u5FC5\u987B\u4E3A 5 \u5206\u949F\u6216\u66F4\u957F\u3002",
    days: "\u5929",
    "Retention period must be 30 days or less.": "\u4FDD\u7559\u671F\u9650\u5FC5\u987B\u4E3A 30 \u5929\u6216\u66F4\u77ED\u3002",
    "Retention period must be between 0 and 30 days.": "\u4FDD\u7559\u671F\u9650\u5FC5\u987B\u5728 0 \u5230 30 \u5929\u4E4B\u95F4\u3002",
    "US East": "\u7F8E\u56FD\u4E1C\u90E8",
    "US West": "\u7F8E\u56FD\u897F\u90E8",
    "Europe West": "\u6B27\u6D32\u897F\u90E8",
    "Southeast Asia": "\u4E1C\u5357\u4E9A",
    "No matching repositories.": "\u6CA1\u6709\u5339\u914D\u7684\u4ED3\u5E93\u3002",
    "Default branch name": "\u9ED8\u8BA4\u5206\u652F\u540D",
    "Commit comments:": "\u63D0\u4EA4\u8BC4\u8BBA\uFF1A",
    "You don\u2019t have any repositories yet. Would you like to": "\u4F60\u8FD8\u6CA1\u6709\u4EFB\u4F55\u4ED3\u5E93\u3002\u662F\u5426\u8981",
    "create one": "\u521B\u5EFA\u4E00\u4E2A",
    ". When disabled, you cannot view or create any Copilot Spaces.": "\u3002\u7981\u7528\u540E\uFF0C\u4F60\u5C06\u65E0\u6CD5\u67E5\u770B\u6216\u521B\u5EFA\u4EFB\u4F55 Copilot Spaces\u3002",
    ". When disabled, you cannot create individual spaces.": "\u3002\u7981\u7528\u540E\uFF0C\u4F60\u5C06\u65E0\u6CD5\u521B\u5EFA\u4E2A\u4EBA\u7A7A\u95F4\u3002",
    ". When disabled, you cannot share individual spaces.": "\u3002\u7981\u7528\u540E\uFF0C\u4F60\u5C06\u65E0\u6CD5\u5171\u4EAB\u4E2A\u4EBA\u7A7A\u95F4\u3002",
    complete: "\u5DF2\u5B8C\u6210",
    "Remove section": "\u79FB\u9664\u5206\u533A",
    "Install Copilot in your editor": "\u5728\u4F60\u7684\u7F16\u8F91\u5668\u4E2D\u5B89\u88C5 Copilot",
    "More editors": "\u66F4\u591A\u7F16\u8F91\u5668",
    "Chat with Copilot anywhere": "\u968F\u65F6\u968F\u5730\u4E0E Copilot \u804A\u5929",
    "Copilot chat in the navigation from anywhere on GitHub. Try asking": "\u5728 GitHub \u4EFB\u610F\u4F4D\u7F6E\u7684\u5BFC\u822A\u4E2D\u4E0E Copilot \u804A\u5929\u3002\u8BD5\u8BD5\u8BE2\u95EE",
    "\u201Cwhat can I do with Copilot?\u201D": "\u201C\u6211\u80FD\u7528 Copilot \u505A\u4EC0\u4E48\uFF1F\u201D",
    "to get started.": "\u5F00\u59CB\u4F7F\u7528\u3002",
    "Go to Copilot": "\u524D\u5F80 Copilot",
    "Start building with Copilot": "\u5F00\u59CB\u4F7F\u7528 Copilot \u6784\u5EFA",
    "Learn how to build with Copilot in Visual Studio Code or Visual Studio.": "\u4E86\u89E3\u5982\u4F55\u5728 Visual Studio Code \u6216 Visual Studio \u4E2D\u4F7F\u7528 Copilot \u6784\u5EFA\u3002",
    Visibility: "\u53EF\u89C1\u6027",
    Blocked: "\u5DF2\u963B\u6B62",
    "GitHub Copilot will show suggestions matching public code.": "GitHub Copilot \u5C06\u663E\u793A\u5339\u914D\u516C\u5171\u4EE3\u7801\u7684\u5EFA\u8BAE\u3002",
    "GitHub Copilot won't show suggestions matching public code.": "GitHub Copilot \u4E0D\u4F1A\u663E\u793A\u5339\u914D\u516C\u5171\u4EE3\u7801\u7684\u5EFA\u8BAE\u3002",
    "You are about to block:": "\u4F60\u5C06\u5C4F\u853D\uFF1A",
    "Blocking a user prevents the following on all your repositories:": "\u5C4F\u853D\u7528\u6237\u5C06\u963B\u6B62\u5BF9\u4F60\u7684\u6240\u6709\u4ED3\u5E93\u8FDB\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A",
    "opening or commenting on issues or pull requests": "\u6253\u5F00\u8BAE\u9898\u6216\u62C9\u53D6\u8BF7\u6C42\u6216\u53D1\u8868\u8BC4\u8BBA",
    "starring, forking, or watching": "\u661F\u6807\u3001\u590D\u523B\u6216\u5173\u6CE8",
    "adding or editing wiki pages": "\u6DFB\u52A0\u6216\u7F16\u8F91 Wiki \u9875\u9762",
    "Additionally, blocked users are not able to:": "\u6B64\u5916\uFF0C\u88AB\u5C4F\u853D\u7684\u7528\u6237\u65E0\u6CD5\uFF1A",
    "invite you as a collaborator to their repositories": "\u9080\u8BF7\u4F60\u4F5C\u4E3A\u534F\u4F5C\u8005\u52A0\u5165\u4ED6\u4EEC\u7684\u4ED3\u5E93",
    "follow your account's public activity": "\u5173\u6CE8\u4F60\u8D26\u6237\u7684\u516C\u5F00\u6D3B\u52A8",
    "send you notifications by @mentioning your username in public repositories": "\u5728\u516C\u5171\u4ED3\u5E93\u4E2D\u901A\u8FC7 @\u63D0\u53CA\u4F60\u7684\u7528\u6237\u540D\u5411\u4F60\u53D1\u9001\u901A\u77E5",
    "Reminders allow you to push certain events to authorized instances of Microsoft Teams or Slack.": "\u63D0\u9192\u5141\u8BB8\u4F60\u5C06\u67D0\u4E9B\u4E8B\u4EF6\u63A8\u9001\u5230 Microsoft Teams \u6216 Slack \u7684\u6388\u6743\u5B9E\u4F8B\u3002",
    "No reminders": "\u6CA1\u6709\u63D0\u9192",
    "Application settings": "\u5E94\u7528\u8BBE\u7F6E",
    "Installed GitHub Apps": "\u5DF2\u5B89\u88C5\u7684 GitHub \u5E94\u7528",
    "Authorized OAuth Apps": "\u5DF2\u6388\u6743\u7684 OAuth \u5E94\u7528",
    "No installed GitHub Apps": "\u6CA1\u6709\u5DF2\u5B89\u88C5\u7684 GitHub \u5E94\u7528",
    "You have no GitHub Apps installed on this account.": "\u4F60\u5728\u6B64\u8D26\u6237\u4E0A\u672A\u5B89\u88C5 GitHub \u5E94\u7528\u3002",
    "Visit Marketplace": "\u8BBF\u95EE\u5E02\u573A",
    "My GitHub Apps": "\u6211\u7684 GitHub \u5E94\u7528",
    "Confirm token deletion": "\u786E\u8BA4\u5220\u9664\u4EE4\u724C",
    "Close dialog": "\u5173\u95ED\u5BF9\u8BDD\u6846",
    "Last used within the last 2 weeks": "\u6700\u8FD1 2 \u5468\u5185\u4F7F\u7528\u8FC7",
    "Full control of private repositories": "\u5BF9\u79C1\u6709\u4ED3\u5E93\u7684\u5B8C\u5168\u63A7\u5236",
    "Update github action workflows": "\u66F4\u65B0 GitHub \u64CD\u4F5C\u5DE5\u4F5C\u6D41",
    "Add this repository to a list": "\u5C06\u6B64\u4ED3\u5E93\u6DFB\u52A0\u5230\u5217\u8868",
    Lists: "\u5217\u8868",
    "You don't have any lists yet.": "\u4F60\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5217\u8868\u3002",
    "Create list": "\u521B\u5EFA\u5217\u8868",
    "Starred, click to unstar this topic": "\u5DF2\u661F\u6807\uFF0C\u70B9\u51FB\u53D6\u6D88\u661F\u6807\u6B64\u4E3B\u9898",
    "Star this topic": "\u661F\u6807\u6B64\u4E3B\u9898",
    "Delete workflow run": "\u5220\u9664\u5DE5\u4F5C\u6D41\u8FD0\u884C",
    "Based on repositories you've starred": "\u57FA\u4E8E\u4F60\u661F\u6807\u7684\u4ED3\u5E93",
    "Starred, click to unstar this repository": "\u5DF2\u661F\u6807\uFF0C\u70B9\u51FB\u53D6\u6D88\u661F\u6807\u6B64\u4ED3\u5E93",
    China: "\u4E2D\u56FD",
    Taiwan: "\u4E2D\u56FD\u53F0\u6E7E",
    "Hong Kong": "\u4E2D\u56FD\u9999\u6E2F",
    Macau: "\u4E2D\u56FD\u6FB3\u95E8",
    Japan: "\u65E5\u672C",
    "Korea, South": "\u97E9\u56FD",
    Singapore: "\u65B0\u52A0\u5761",
    Malaysia: "\u9A6C\u6765\u897F\u4E9A",
    Thailand: "\u6CF0\u56FD",
    Vietnam: "\u8D8A\u5357",
    Indonesia: "\u5370\u5EA6\u5C3C\u897F\u4E9A",
    India: "\u5370\u5EA6",
    Philippines: "\u83F2\u5F8B\u5BBE",
    "United States of America": "\u7F8E\u56FD",
    Canada: "\u52A0\u62FF\u5927",
    "United Kingdom": "\u82F1\u56FD",
    Australia: "\u6FB3\u5927\u5229\u4E9A",
    "New Zealand": "\u65B0\u897F\u5170",
    Germany: "\u5FB7\u56FD",
    France: "\u6CD5\u56FD",
    Italy: "\u610F\u5927\u5229",
    Spain: "\u897F\u73ED\u7259",
    Netherlands: "\u8377\u5170",
    Switzerland: "\u745E\u58EB",
    Sweden: "\u745E\u5178",
    Brazil: "\u5DF4\u897F",
    "Russian Federation": "\u4FC4\u7F57\u65AF\u8054\u90A6",
    "United Arab Emirates": "\u963F\u62C9\u4F2F\u8054\u5408\u914B\u957F\u56FD",
    Packages: "\u8F6F\u4EF6\u5305",
    "Disable all": "\u5168\u90E8\u7981\u7528",
    "Enable all": "\u5168\u90E8\u542F\u7528",
    "Enable by default for new repositories": "\u9ED8\u8BA4\u5BF9\u65B0\u4ED3\u5E93\u542F\u7528",
    "Automatically enable for new repositories": "\u81EA\u52A8\u5BF9\u65B0\u4ED3\u5E93\u542F\u7528",
    "Disable push protection for yourself": "\u4E3A\u81EA\u5DF1\u7981\u7528\u63A8\u9001\u4FDD\u62A4",
    "Disable private vulnerability reporting": "\u7981\u7528\u79C1\u6709\u6F0F\u6D1E\u62A5\u544A",
    "Enable private vulnerability reporting": "\u542F\u7528\u79C1\u6709\u6F0F\u6D1E\u62A5\u544A",
    "Enable by default for new public repositories": "\u9ED8\u8BA4\u5BF9\u65B0\u7684\u516C\u5171\u4ED3\u5E93\u542F\u7528",
    "Enable by default for new private repositories": "\u9ED8\u8BA4\u5BF9\u65B0\u7684\u79C1\u6709\u4ED3\u5E93\u542F\u7528",
    "Disable dependency graph": "\u7981\u7528\u4F9D\u8D56\u56FE",
    "Enable dependency graph": "\u542F\u7528\u4F9D\u8D56\u56FE",
    "Disable Dependabot alerts": "\u7981\u7528 Dependabot \u8B66\u62A5",
    "Enable Dependabot alerts": "\u542F\u7528 Dependabot \u8B66\u62A5",
    "Disable Dependabot security updates": "\u7981\u7528 Dependabot \u5B89\u5168\u66F4\u65B0",
    "Enable Dependabot security updates": "\u542F\u7528 Dependabot \u5B89\u5168\u66F4\u65B0",
    "Disable grouped security updates": "\u7981\u7528\u5206\u7EC4\u5B89\u5168\u66F4\u65B0",
    "Enable grouped security updates": "\u542F\u7528\u5206\u7EC4\u5B89\u5168\u66F4\u65B0",
    "Disable dependabot self-hosted": "\u7981\u7528 dependabot \u81EA\u6258\u7BA1",
    "Enable dependabot self-hosted": "\u542F\u7528 dependabot \u81EA\u6258\u7BA1",
    "Security and analysis features help keep your repositories secure and updated. By enabling these features, you're granting us permission to perform read-only analysis on your repositories.": "\u5B89\u5168\u4E0E\u5206\u6790\u529F\u80FD\u6709\u52A9\u4E8E\u4FDD\u6301\u4F60\u7684\u4ED3\u5E93\u5B89\u5168\u548C\u6700\u65B0\u3002\u542F\u7528\u8FD9\u4E9B\u529F\u80FD\uFF0C\u5373\u8868\u793A\u4F60\u6388\u6743\u6211\u4EEC\u5BF9\u4F60\u7684\u4ED3\u5E93\u6267\u884C\u53EA\u8BFB\u5206\u6790\u3002",
    "Security and analysis features help keep you secure and updated, wherever you are.": "\u5B89\u5168\u4E0E\u5206\u6790\u529F\u80FD\u53EF\u8BA9\u4F60\u65E0\u8BBA\u8EAB\u5728\u4F55\u5904\u90FD\u4FDD\u6301\u5B89\u5168\u548C\u6700\u65B0\u3002",
    "Security and analysis features help keep your repositories secure and updated.": "\u5B89\u5168\u4E0E\u5206\u6790\u529F\u80FD\u6709\u52A9\u4E8E\u4FDD\u6301\u4F60\u7684\u4ED3\u5E93\u5B89\u5168\u548C\u6700\u65B0\u3002",
    "Push protection for yourself": "\u4E3A\u81EA\u5DF1\u542F\u7528\u63A8\u9001\u4FDD\u62A4",
    "Block commits that contain": "\u963B\u6B62\u5305\u542B",
    "supported secrets": "\u53D7\u652F\u6301\u5BC6\u94A5",
    "across all public repositories on GitHub.": "\u7684\u63D0\u4EA4\u63A8\u9001\u5230 GitHub \u4E0A\u7684\u6240\u6709\u516C\u5171\u4ED3\u5E93\u3002",
    "Pushes that contain secrets will not be blocked.": "\u5305\u542B\u5BC6\u94A5\u7684\u63A8\u9001\u4E0D\u4F1A\u88AB\u963B\u6B62\u3002",
    "Disable push protection": "\u7981\u7528\u63A8\u9001\u4FDD\u62A4",
    "Private vulnerability reporting": "\u79C1\u6709\u6F0F\u6D1E\u62A5\u544A",
    "Allow your community to privately report potential security vulnerabilities to maintainers and repository owners.": "\u5141\u8BB8\u4F60\u7684\u793E\u533A\u79C1\u4E0B\u5411\u7EF4\u62A4\u8005\u548C\u4ED3\u5E93\u6240\u6709\u8005\u62A5\u544A\u6F5C\u5728\u7684\u5B89\u5168\u6F0F\u6D1E\u3002",
    "Learn more about private vulnerability reporting": "\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u79C1\u6709\u6F0F\u6D1E\u62A5\u544A\u7684\u4FE1\u606F",
    "Disable all private vulnerability reporting": "\u7981\u7528\u6240\u6709\u79C1\u6709\u6F0F\u6D1E\u62A5\u544A",
    "Enable all private vulnerability reporting": "\u542F\u7528\u6240\u6709\u79C1\u6709\u6F0F\u6D1E\u62A5\u544A",
    "Automatically enable for new public repositories": "\u81EA\u52A8\u5BF9\u65B0\u7684\u516C\u5171\u4ED3\u5E93\u542F\u7528",
    "Understand your dependencies.": "\u4E86\u89E3\u4F60\u7684\u4F9D\u8D56\u5173\u7CFB\u3002",
    "Disable all dependency graph": "\u7981\u7528\u6240\u6709\u4F9D\u8D56\u56FE",
    "You're about to disable dependency graph on all your private repositories. This will also disable Dependabot alerts and Dependabot security updates on those repositories.": "\u4F60\u5373\u5C06\u5728\u4F60\u6240\u6709\u7684\u79C1\u6709\u4ED3\u5E93\u4E2D\u7981\u7528\u4F9D\u8D56\u56FE\u3002\u8FD9\u4E5F\u4F1A\u7981\u7528\u8FD9\u4E9B\u4ED3\u5E93\u7684 Dependabot \u8B66\u62A5\u548C Dependabot \u5B89\u5168\u66F4\u65B0\u3002",
    "Enable all dependency graph": "\u542F\u7528\u6240\u6709\u4F9D\u8D56\u56FE",
    "You're about to enable dependency graph on all your private repositories.": "\u4F60\u5373\u5C06\u5728\u4F60\u6240\u6709\u7684\u79C1\u6709\u4ED3\u5E93\u4E2D\u542F\u7528\u4F9D\u8D56\u56FE\u3002",
    "Keep your dependencies secure and up-to-date.": "\u4FDD\u6301\u4F60\u7684\u4F9D\u8D56\u9879\u5B89\u5168\u548C\u6700\u65B0\u3002",
    "Learn more about Dependabot": "\u4E86\u89E3\u66F4\u591A\u5173\u4E8E Dependabot \u7684\u4FE1\u606F",
    "Receive alerts for vulnerabilities that affect your dependencies and manually generate Dependabot pull requests to resolve these vulnerabilities.": "\u63A5\u6536\u5F71\u54CD\u4F60\u4F9D\u8D56\u9879\u7684\u6F0F\u6D1E\u8B66\u62A5\uFF0C\u5E76\u624B\u52A8\u751F\u6210 Dependabot \u62C9\u53D6\u8BF7\u6C42\u4EE5\u89E3\u51B3\u8FD9\u4E9B\u6F0F\u6D1E\u3002",
    "Configure alert notifications": "\u914D\u7F6E\u8B66\u62A5\u901A\u77E5",
    "Disable all Dependabot alerts": "\u7981\u7528\u6240\u6709 Dependabot \u8B66\u62A5",
    "You're about to disable Dependabot alerts on all your repositories. This will also disable Dependabot security updates on those repositories.": "\u4F60\u5373\u5C06\u5728\u4F60\u6240\u6709\u7684\u4ED3\u5E93\u4E2D\u7981\u7528 Dependabot \u8B66\u62A5\u3002\u8FD9\u4E5F\u4F1A\u7981\u7528\u8FD9\u4E9B\u4ED3\u5E93\u7684 Dependabot \u5B89\u5168\u66F4\u65B0\u3002",
    "Enable all Dependabot alerts": "\u542F\u7528\u6240\u6709 Dependabot \u8B66\u62A5",
    "Dependabot security updates": "Dependabot \u5B89\u5168\u66F4\u65B0",
    "Enabling this option will result in Dependabot automatically attempting to open pull requests to resolve every open Dependabot alert with an available patch.": "\u542F\u7528\u6B64\u9009\u9879\u540E\uFF0CDependabot \u5C06\u81EA\u52A8\u5C1D\u8BD5\u6253\u5F00\u62C9\u53D6\u8BF7\u6C42\uFF0C\u4EE5\u89E3\u51B3\u6BCF\u4E2A\u6709\u53EF\u7528\u8865\u4E01\u7684\u672A\u5904\u7406 Dependabot \u8B66\u62A5\u3002",
    "Disable all Dependabot security updates": "\u7981\u7528\u6240\u6709 Dependabot \u5B89\u5168\u66F4\u65B0",
    "You're about to disable Dependabot security updates on all your repositories.": "\u4F60\u5373\u5C06\u5728\u4F60\u6240\u6709\u7684\u4ED3\u5E93\u4E2D\u7981\u7528 Dependabot \u5B89\u5168\u66F4\u65B0\u3002",
    "Enable all Dependabot security updates": "\u542F\u7528\u6240\u6709 Dependabot \u5B89\u5168\u66F4\u65B0",
    "Grouped security updates": "\u5206\u7EC4\u5B89\u5168\u66F4\u65B0",
    "Learn how to group updates.": "\u4E86\u89E3\u5982\u4F55\u5BF9\u66F4\u65B0\u8FDB\u884C\u5206\u7EC4\u3002",
    "Disable all grouped security updates": "\u7981\u7528\u6240\u6709\u5206\u7EC4\u5B89\u5168\u66F4\u65B0",
    "You're about to disable grouped security updates on all your repositories.": "\u4F60\u5373\u5C06\u5728\u4F60\u6240\u6709\u7684\u4ED3\u5E93\u4E2D\u7981\u7528\u5206\u7EC4\u5B89\u5168\u66F4\u65B0\u3002",
    "Enable all grouped security updates": "\u542F\u7528\u6240\u6709\u5206\u7EC4\u5B89\u5168\u66F4\u65B0",
    "Dependabot on self-hosted runners": "\u81EA\u6258\u7BA1\u8FD0\u884C\u5668\u4E0A\u7684 Dependabot",
    "Run Dependabot security and version updates on self-hosted Actions runners.": "\u5728\u81EA\u6258\u7BA1\u7684 Actions \u8FD0\u884C\u5668\u4E0A\u8FD0\u884C Dependabot \u5B89\u5168\u66F4\u65B0\u548C\u7248\u672C\u66F4\u65B0\u3002",
    "Disable all dependabot self-hosted": "\u7981\u7528\u6240\u6709 dependabot \u81EA\u6258\u7BA1",
    "You're about to disable dependabot self-hosted on all your repositories.": "\u4F60\u5373\u5C06\u5728\u4F60\u6240\u6709\u7684\u4ED3\u5E93\u4E2D\u7981\u7528 dependabot \u81EA\u6258\u7BA1\u3002",
    "Enable all dependabot self-hosted": "\u542F\u7528\u6240\u6709 dependabot \u81EA\u6258\u7BA1",
    "You're about to enable dependabot self-hosted on all your repositories. Dependabot self-hosted depends on Dependabot on Actions so we'll also turn that on for all repositories.": "\u4F60\u5373\u5C06\u5728\u4F60\u6240\u6709\u7684\u4ED3\u5E93\u4E2D\u542F\u7528 dependabot \u81EA\u6258\u7BA1\u3002dependabot \u81EA\u6258\u7BA1\u4F9D\u8D56\u4E8E Actions \u4E0A\u7684 Dependabot\uFF0C\u56E0\u6B64\u6211\u4EEC\u4E5F\u4F1A\u4E3A\u6240\u6709\u4ED3\u5E93\u542F\u7528\u5B83\u3002",
    "Groups all available updates that resolve a Dependabot alert into one pull request (per package manager and directory of requirement manifests). This option may be overridden by group rules specified in dependabot.yml -": "\u5C06\u6240\u6709\u53EF\u89E3\u51B3 Dependabot \u8B66\u62A5\u7684\u53EF\u7528\u66F4\u65B0\u5408\u5E76\u5230\u4E00\u4E2A\u62C9\u53D6\u8BF7\u6C42\u4E2D\uFF08\u6309\u5305\u7BA1\u7406\u5668\u548C\u4F9D\u8D56\u6E05\u5355\u76EE\u5F55\u5206\u7EC4\uFF09\u3002\u6B64\u9009\u9879\u53EF\u80FD\u88AB dependabot.yml \u4E2D\u6307\u5B9A\u7684\u5206\u7EC4\u89C4\u5219\u8986\u76D6 - ",
    "mentioned this": "\u63D0\u53CA\u4E86\u6B64\u8BAE\u9898",
    "Issues mentioned": "\u63D0\u53CA\u7684\u8BAE\u9898",
    Reactions: "\u56DE\u5E94",
    commented: "\u53D1\u8868\u4E86\u8BC4\u8BBA",
    Contributor: "\u8D21\u732E\u8005",
    Committed: "\u5DF2\u63D0\u4EA4",
    "added a commit that references this issue": "\u6DFB\u52A0\u4E86\u4E00\u4E2A\u5F15\u7528\u6B64\u8BAE\u9898\u7684\u63D0\u4EA4",
    "This user is the author of this issue": "\u6B64\u7528\u6237\u662F\u6B64\u8BAE\u9898\u7684\u4F5C\u8005",
    Metadata: "\u5143\u6570\u636E",
    "No labels": "\u65E0\u6807\u7B7E",
    Relationships: "\u5173\u8054",
    Development: "\u5F00\u53D1",
    "No branches or pull requests": "\u6CA1\u6709\u5206\u652F\u6216\u62C9\u53D6\u8BF7\u6C42",
    "Star this repository": "\u661F\u6807\u6B64\u4ED3\u5E93",
    "Are you sure you want to permanently delete this workflow run?": "\u4F60\u786E\u5B9A\u8981\u6C38\u4E45\u5220\u9664\u6B64\u5DE5\u4F5C\u6D41\u8FD0\u884C\u5417\uFF1F",
    "This action cannot be undone.": "\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",
    "Yes, delete this workflow run": "\u662F\uFF0C\u5220\u9664\u6B64\u5DE5\u4F5C\u6D41\u8FD0\u884C",
    Files: "\u6587\u4EF6",
    "More options": "\u66F4\u591A\u9009\u9879",
    "Find a repository\u2026": "\u67E5\u627E\u4ED3\u5E93\u2026",
    "Search Issues": "\u641C\u7D22\u8BAE\u9898",
    "JavaScript language": "JavaScript \u8BED\u8A00",
    "Draggable pane splitter": "\u53EF\u62D6\u62FD\u7684\u9762\u677F\u5206\u9694\u6761",
    "Filter labels": "\u7B5B\u9009\u6807\u7B7E",
    "Filter milestones": "\u7B5B\u9009\u91CC\u7A0B\u7891",
    opened: "\u5DF2\u6253\u5F00",
    Templates: "\u6A21\u677F",
    "See your top dependencies": "\u67E5\u770B\u4F60\u7684\u4E3B\u8981\u4F9D\u8D56\u9879",
    "Get sponsored": "\u83B7\u5F97\u8D5E\u52A9",
    "Change your avatar": "\u66F4\u6539\u5934\u50CF",
    "Add a bio": "\u6DFB\u52A0\u4E2A\u4EBA\u7B80\u4ECB",
    "Label: Public": "\u6807\u7B7E\uFF1A\u516C\u5F00",
    "File Tree Navigation": "\u6587\u4EF6\u6811\u5BFC\u822A",
    "Directory actions": "\u76EE\u5F55\u64CD\u4F5C",
    "This path skips through empty directories": "\u6B64\u8DEF\u5F84\u8DF3\u8FC7\u7A7A\u76EE\u5F55",
    "Drop to upload your files": "\u62D6\u653E\u4EE5\u4E0A\u4F20\u4F60\u7684\u6587\u4EF6",
    Outline: "\u5927\u7EB2",
    "Related Projects": "\u76F8\u5173\u9879\u76EE",
    "Learn to Code": "\u5B66\u4E60\u7F16\u7A0B",
    "These results are generated by GitHub computers": "\u8FD9\u4E9B\u7ED3\u679C\u7531 GitHub \u8BA1\u7B97\u673A\u751F\u6210",
    "More languages...": "\u66F4\u591A\u8BED\u8A00...",
    Size: "\u5927\u5C0F",
    "Number of followers": "\u5173\u6CE8\u8005\u6570\u91CF",
    "Number of forks": "\u590D\u523B\u6570\u91CF",
    "Number of stars": "\u661F\u6807\u6570\u91CF",
    "Date pushed": "\u63A8\u9001\u65E5\u671F",
    Topic: "\u4E3B\u9898",
    "Open column options": "\u6253\u5F00\u5217\u9009\u9879",
    "Public archive": "\u516C\u5171\u5F52\u6863",
    "Sponsor open source projects you depend on": "\u8D5E\u52A9\u4F60\u4F9D\u8D56\u7684\u5F00\u6E90\u9879\u76EE",
    "Explore sponsorable projects": "\u63A2\u7D22\u53EF\u8D5E\u52A9\u7684\u9879\u76EE",
    "How can we improve search?": "\u6211\u4EEC\u5982\u4F55\u6539\u8FDB\u641C\u7D22\uFF1F",
    "Next Page": "\u4E0B\u4E00\u9875",
    "Search all issues": "\u641C\u7D22\u6240\u6709\u8BAE\u9898",
    "Something went wrong.": "\u51FA\u4E86\u70B9\u95EE\u9898\u3002",
    "New workflow": "\u65B0\u5EFA\u5DE5\u4F5C\u6D41",
    "Clear filters": "\u6E05\u9664\u7B5B\u9009",
    "will be ignored since log searching is not yet available": "\u5C06\u88AB\u5FFD\u7565\uFF0C\u56E0\u4E3A\u65E5\u5FD7\u641C\u7D22\u529F\u80FD\u5C1A\u4E0D\u53EF\u7528",
    "Copy branch name to clipboard": "\u5C06\u5206\u652F\u540D\u590D\u5236\u5230\u526A\u8D34\u677F",
    "Find a release": "\u67E5\u627E\u53D1\u5E03",
    "Releases and Tags": "\u53D1\u5E03\u4E0E\u6807\u7B7E",
    "There aren't any releases here": "\u8FD9\u91CC\u6CA1\u6709\u4EFB\u4F55\u53D1\u5E03",
    "our docs": "\u6211\u4EEC\u7684\u6587\u6863",
    "Find a member\u2026": "\u67E5\u627E\u6210\u5458\u2026",
    "Contributed by me": "\u6211\u8D21\u732E\u7684",
    Other: "\u5176\u4ED6",
    "Manage notifications": "\u7BA1\u7406\u901A\u77E5",
    "Watched repositories": "\u5173\u6CE8\u7684\u4ED3\u5E93",
    "Switch inbox": "\u5207\u6362\u6536\u4EF6\u7BB1",
    "Customize filters": "\u81EA\u5B9A\u4E49\u7B5B\u9009",
    "Search notifications": "\u641C\u7D22\u901A\u77E5",
    "Newest to oldest": "\u4ECE\u6700\u65B0\u5230\u6700\u65E7",
    Date: "\u65E5\u671F",
    "Clean up your inbox": "\u6E05\u7406\u4F60\u7684\u6536\u4EF6\u7BB1",
    "Search Marketplace": "\u641C\u7D22\u5E02\u573A",
    "Agent apps": "\u4EE3\u7406\u5E94\u7528",
    "AI Assisted": "AI \u8F85\u52A9",
    "API management": "API \u7BA1\u7406",
    "Backup Utilities": "\u5907\u4EFD\u5DE5\u5177",
    Chat: "\u804A\u5929",
    "Code review": "\u4EE3\u7801\u5BA1\u67E5",
    "Code Scanning Ready": "\u4EE3\u7801\u626B\u63CF\u5C31\u7EEA",
    "Code search": "\u4EE3\u7801\u641C\u7D22",
    "Container CI": "\u5BB9\u5668 CI",
    "Continuous integration": "\u6301\u7EED\u96C6\u6210",
    "Dependency management": "\u4F9D\u8D56\u7BA1\u7406",
    Deployment: "\u90E8\u7F72",
    "Deployment Protection Rules": "\u90E8\u7F72\u4FDD\u62A4\u89C4\u5219",
    "Desktop tools": "\u684C\u9762\u5DE5\u5177",
    IDEs: "IDE",
    Learning: "\u5B66\u4E60",
    Localization: "\u672C\u5730\u5316",
    Mobile: "\u79FB\u52A8\u7AEF",
    "Mobile CI": "\u79FB\u52A8\u7AEF CI",
    Monitoring: "\u76D1\u63A7",
    "Open Source management": "\u5F00\u6E90\u7BA1\u7406",
    Publishing: "\u53D1\u5E03",
    "Recently added": "\u6700\u8FD1\u6DFB\u52A0",
    Sustainability: "\u53EF\u6301\u7EED\u6027",
    Testing: "\u6D4B\u8BD5",
    "Time tracking": "\u65F6\u95F4\u8DDF\u8E2A",
    Utilities: "\u5B9E\u7528\u5DE5\u5177",
    "All-time": "\u5168\u90E8\u65F6\u95F4",
    "Interactive chart.": "\u4EA4\u4E92\u5F0F\u56FE\u8868\u3002",
    "General settings": "\u5E38\u89C4\u8BBE\u7F6E",
    "Template repositories let users generate new repositories with the same directory structure and files.": "\u6A21\u677F\u4ED3\u5E93\u53EF\u8BA9\u7528\u6237\u751F\u6210\u5177\u6709\u76F8\u540C\u76EE\u5F55\u7ED3\u6784\u548C\u6587\u4EF6\u7684\u65B0\u4ED3\u5E93\u3002",
    'The default branch is considered the "base" branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.': "\u9ED8\u8BA4\u5206\u652F\u88AB\u89C6\u4E3A\u4ED3\u5E93\u7684\u201C\u57FA\u7840\u201D\u5206\u652F\uFF0C\u9664\u975E\u4F60\u6307\u5B9A\u5176\u4ED6\u5206\u652F\uFF0C\u5426\u5219\u6240\u6709\u62C9\u53D6\u8BF7\u6C42\u548C\u4EE3\u7801\u63D0\u4EA4\u90FD\u4F1A\u81EA\u52A8\u57FA\u4E8E\u8BE5\u5206\u652F\u3002",
    "Issues integrate lightweight task tracking into your repository. Keep projects on track with issue labels and milestones, and reference them in commit messages.": "\u8BAE\u9898\u4E3A\u4F60\u7684\u4ED3\u5E93\u63D0\u4F9B\u8F7B\u91CF\u7EA7\u4EFB\u52A1\u8DDF\u8E2A\u3002\u901A\u8FC7\u8BAE\u9898\u6807\u7B7E\u548C\u91CC\u7A0B\u7891\u4FDD\u6301\u9879\u76EE\u8FDB\u5EA6\uFF0C\u5E76\u5728\u63D0\u4EA4\u4FE1\u606F\u4E2D\u5F15\u7528\u5B83\u4EEC\u3002",
    "If restricted, issues will still be readable by everyone who can see this repository.": "\u5982\u679C\u53D7\u9650\uFF0C\u80FD\u770B\u5230\u6B64\u4ED3\u5E93\u7684\u6BCF\u4E2A\u4EBA\u4ECD\u53EF\u9605\u8BFB\u8BAE\u9898\u3002",
    "Get organized with issue templates": "\u4F7F\u7528\u8BAE\u9898\u6A21\u677F\u8BA9\u7BA1\u7406\u66F4\u6709\u5E8F",
    "Give contributors issue templates that help you cut through the noise and help them push your project forward.": "\u4E3A\u8D21\u732E\u8005\u63D0\u4F9B\u8BAE\u9898\u6A21\u677F\uFF0C\u5E2E\u52A9\u4ED6\u4EEC\u6392\u9664\u5E72\u6270\uFF0C\u63A8\u52A8\u4F60\u7684\u9879\u76EE\u524D\u8FDB\u3002",
    "Set up templates": "\u8BBE\u7F6E\u6A21\u677F",
    "Sponsorships help your community know how to financially support this repository.": "\u8D5E\u52A9\u529F\u80FD\u53EF\u8BA9\u793E\u533A\u4E86\u89E3\u5982\u4F55\u4E3A\u4F60\u7684\u4ED3\u5E93\u63D0\u4F9B\u8D22\u52A1\u652F\u6301\u3002",
    "Add links to GitHub Sponsors or third-party methods your repository accepts for financial contributions to your project.": "\u6DFB\u52A0 GitHub \u8D5E\u52A9\u6216\u4F60\u7684\u4ED3\u5E93\u63A5\u53D7\u7684\u7B2C\u4E09\u65B9\u6E20\u9053\u94FE\u63A5\uFF0C\u7528\u4E8E\u4E3A\u4F60\u7684\u9879\u76EE\u63D0\u4F9B\u8D22\u52A1\u8D21\u732E\u3002",
    "Discussions is the space for your community to have conversations, ask questions and post answers without opening issues.": "\u8BA8\u8BBA\u662F\u793E\u533A\u8FDB\u884C\u5BF9\u8BDD\u3001\u63D0\u95EE\u548C\u53D1\u5E03\u56DE\u7B54\u7684\u7A7A\u95F4\uFF0C\u65E0\u9700\u6253\u5F00\u8BAE\u9898\u3002",
    "Engage your community by having discussions right in your repository, where your community already lives": "\u76F4\u63A5\u5728\u793E\u533A\u6240\u5728\u7684\u4ED3\u5E93\u4E2D\u53D1\u8D77\u8BA8\u8BBA\uFF0C\u4E0E\u793E\u533A\u4E92\u52A8",
    "If restricted, pull requests will still be readable by everyone who can see this repository.": "\u5982\u679C\u53D7\u9650\uFF0C\u80FD\u770B\u5230\u6B64\u4ED3\u5E93\u7684\u6BCF\u4E2A\u4EBA\u4ECD\u53EF\u9605\u8BFB\u62C9\u53D6\u8BF7\u6C42\u3002",
    "You must select squashing or rebasing option. This is because linear history is required on at least one protected branch.": "\u4F60\u5FC5\u987B\u9009\u62E9\u538B\u7F29\u6216\u53D8\u57FA\u9009\u9879\u3002\u8FD9\u662F\u56E0\u4E3A\u81F3\u5C11\u4E00\u4E2A\u53D7\u4FDD\u62A4\u5206\u652F\u8981\u6C42\u7EBF\u6027\u5386\u53F2\u3002",
    "Combine all commits from the head branch into a single commit in the base branch.": "\u5C06 head \u5206\u652F\u7684\u6240\u6709\u63D0\u4EA4\u5408\u5E76\u4E3A\u57FA\u7840\u5206\u652F\u4E2D\u7684\u5355\u4E2A\u63D0\u4EA4\u3002",
    "Control how and when users are prompted to update their branches if there are new changes available in the base branch.": "\u63A7\u5236\u57FA\u7840\u5206\u652F\u6709\u65B0\u66F4\u6539\u65F6\u63D0\u793A\u7528\u6237\u66F4\u65B0\u5206\u652F\u7684\u65B9\u5F0F\u548C\u65F6\u95F4\u3002",
    'Whenever there are new changes available in the base branch, present an "update branch" option in the pull request.': "\u6BCF\u5F53\u57FA\u7840\u5206\u652F\u6709\u65B0\u66F4\u6539\u65F6\uFF0C\u5728\u62C9\u53D6\u8BF7\u6C42\u4E2D\u63D0\u4F9B\u201C\u66F4\u65B0\u5206\u652F\u201D\u9009\u9879\u3002",
    "You can allow setting pull requests to merge automatically once all required reviews and status checks have passed.": "\u4F60\u53EF\u4EE5\u5141\u8BB8\u5728\u6240\u6709\u5FC5\u9700\u7684\u5BA1\u67E5\u548C\u72B6\u6001\u68C0\u67E5\u901A\u8FC7\u540E\u81EA\u52A8\u5408\u5E76\u62C9\u53D6\u8BF7\u6C42\u3002",
    "Learn more about auto-merge": "\u4E86\u89E3\u5173\u4E8E\u81EA\u52A8\u5408\u5E76\u7684\u66F4\u591A\u4FE1\u606F",
    "After pull requests are merged, you can have head branches deleted automatically.": "\u62C9\u53D6\u8BF7\u6C42\u5408\u5E76\u540E\uFF0C\u4F60\u53EF\u4EE5\u81EA\u52A8\u5220\u9664 head \u5206\u652F\u3002",
    "When creating source code archives, you can choose to include files stored using Git LFS in the archive.": "\u521B\u5EFA\u6E90\u4EE3\u7801\u5B58\u6863\u65F6\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u5728\u5B58\u6863\u4E2D\u5305\u542B\u4F7F\u7528 Git LFS \u5B58\u50A8\u7684\u6587\u4EF6\u3002",
    "After merging a pull request, linked issues can be closed automatically.": "\u5408\u5E76\u62C9\u53D6\u8BF7\u6C42\u540E\uFF0C\u5173\u8054\u7684\u8BAE\u9898\u53EF\u4EE5\u81EA\u52A8\u5173\u95ED\u3002",
    "Auto-close issues with merged linked pull requests": "\u5408\u5E76\u5173\u8054\u7684\u62C9\u53D6\u8BF7\u6C42\u65F6\u81EA\u52A8\u5173\u95ED\u8BAE\u9898",
    "Whenever linked pull requests have merged, auto-close the issue.": "\u6BCF\u5F53\u5173\u8054\u7684\u62C9\u53D6\u8BF7\u6C42\u5408\u5E76\u540E\uFF0C\u81EA\u52A8\u5173\u95ED\u8BE5\u8BAE\u9898\u3002",
    "Change to private": "\u6539\u4E3A\u79C1\u6709",
    "Effects of making this repository private": "\u5C06\u6B64\u4ED3\u5E93\u8BBE\u4E3A\u79C1\u6709\u7684\u5F71\u54CD",
    "I want to make this repository private": "\u6211\u8981\u5C06\u6B64\u4ED3\u5E93\u8BBE\u4E3A\u79C1\u6709",
    "This repository is currently public.": "\u6B64\u4ED3\u5E93\u5F53\u524D\u4E3A\u516C\u5F00\u3002",
    "This will hide the branch protection settings and disable branch protection rules for this repository.": "\u8FD9\u5C06\u9690\u85CF\u5206\u652F\u4FDD\u62A4\u8BBE\u7F6E\u5E76\u7981\u7528\u6B64\u4ED3\u5E93\u7684\u5206\u652F\u4FDD\u62A4\u89C4\u5219\u3002",
    "Disabling branch protection rules allows you to enforce branch and tag protections exclusively with Repository Rules.": "\u7981\u7528\u5206\u652F\u4FDD\u62A4\u89C4\u5219\u540E\uFF0C\u4F60\u53EF\u4EE5\u4EC5\u901A\u8FC7\u4ED3\u5E93\u89C4\u5219\u6765\u5F3A\u5236\u6267\u884C\u5206\u652F\u548C\u6807\u7B7E\u4FDD\u62A4\u3002",
    "Transfer this repository to another user or to an organization where you have the ability to create repositories.": "\u5C06\u6B64\u4ED3\u5E93\u8F6C\u79FB\u5230\u5176\u4ED6\u7528\u6237\u6216\u4F60\u6709\u6743\u521B\u5EFA\u4ED3\u5E93\u7684\u7EC4\u7EC7\u3002",
    "Please type": "\u8BF7\u8F93\u5165",
    "to confirm.": "\u4EE5\u786E\u8BA4\u3002",
    "Effects of deleting this repository": "\u5220\u9664\u6B64\u4ED3\u5E93\u7684\u5F71\u54CD",
    "Include this code in the": "\u5C06\u6B64\u4EE3\u7801\u5305\u542B\u5728",
    "Enabling this setting will allow anyone who can view this repository to add": "\u542F\u7528\u6B64\u8BBE\u7F6E\u540E\uFF0C\u4EFB\u4F55\u80FD\u67E5\u770B\u6B64\u4ED3\u5E93\u7684\u4EBA\u90FD\u53EF\u4EE5\u6DFB\u52A0",
    "Single sign-on": "\u5355\u70B9\u767B\u5F55",
    "Try searching with a different query for results.": "\u5C1D\u8BD5\u7528\u4E0D\u540C\u7684\u641C\u7D22\u8BCD\u6765\u83B7\u53D6\u7ED3\u679C\u3002",
    "You have used": "\u4F60\u5DF2\u4F7F\u7528",
    "Select a repository": "\u9009\u62E9\u4ED3\u5E93",
    "An error occurred while submitting your feedback.": "\u63D0\u4EA4\u53CD\u9988\u65F6\u53D1\u751F\u9519\u8BEF\u3002",
    "Something went wrong": "\u51FA\u9519\u4E86",
    "Unblock user": "\u89E3\u9664\u7528\u6237\u5C4F\u853D",
    "No matches found": "\u672A\u627E\u5230\u5339\u914D\u9879",
    "Error in request": "\u8BF7\u6C42\u51FA\u9519",
    "Enable additional usage": "\u542F\u7528\u989D\u5916\u7528\u91CF",
    "Enable additional requests": "\u542F\u7528\u989D\u5916\u8BF7\u6C42",
    "Failed to submit latest message": "\u63D0\u4EA4\u6700\u65B0\u6D88\u606F\u5931\u8D25",
    "Performance Timeline": "\u6027\u80FD\u65F6\u95F4\u7EBF",
    "Operation not supported": "\u4E0D\u652F\u6301\u6B64\u64CD\u4F5C",
    "Create issue": "\u521B\u5EFA\u8BAE\u9898",
    "Save changes": "\u4FDD\u5B58\u66F4\u6539",
    "You've used": "\u4F60\u5DF2\u4F7F\u7528",
    "Increase budget": "\u589E\u52A0\u9884\u7B97",
    "Issues Dashboard": "\u8BAE\u9898\u4EEA\u8868\u76D8",
    "Copilot Chat": "Copilot \u804A\u5929",
    "Select a branch": "\u9009\u62E9\u5206\u652F",
    "Filter projects": "\u7B5B\u9009\u9879\u76EE",
    "Limit reached": "\u5DF2\u8FBE\u4E0A\u9650",
    "Branch Infobar": "\u5206\u652F\u4FE1\u606F\u680F",
    "Search in this organization": "\u5728\u6B64\u7EC4\u7EC7\u4E2D\u641C\u7D22",
    "Unknown error": "\u672A\u77E5\u9519\u8BEF",
    "Files and folders": "\u6587\u4EF6\u548C\u6587\u4EF6\u5939",
    "Assignment failed": "\u5206\u914D\u5931\u8D25",
    "Failed to update assignees": "\u66F4\u65B0\u6307\u6D3E\u5BF9\u8C61\u5931\u8D25",
    "View pull request": "\u67E5\u770B\u62C9\u53D6\u8BF7\u6C42",
    "Last updated": "\u6700\u8FD1\u66F4\u65B0",
    "Copy to clipboard": "\u590D\u5236\u5230\u526A\u8D34\u677F",
    "Something went wrong. Please try again.": "\u51FA\u9519\u4E86\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    "What it does": "\u5B83\u7684\u4F5C\u7528",
    "Send message": "\u53D1\u9001\u6D88\u606F",
    "Add or change blocked by": "\u6DFB\u52A0\u6216\u66F4\u6539\u201C\u88AB\u963B\u585E\u201D\u5173\u7CFB",
    "Add or change blocking": "\u6DFB\u52A0\u6216\u66F4\u6539\u201C\u963B\u585E\u201D\u5173\u7CFB",
    "Select issue type": "\u9009\u62E9\u8BAE\u9898\u7C7B\u578B",
    "Remove request": "\u79FB\u9664\u8BF7\u6C42",
    "Try a different search term.": "\u5C1D\u8BD5\u4E0D\u540C\u7684\u641C\u7D22\u8BCD\u3002",
    "Open pull request": "\u6253\u5F00\u62C9\u53D6\u8BF7\u6C42",
    "Parent issue": "\u7236\u8BAE\u9898",
    "Not planned": "\u672A\u8BA1\u5212",
    "Keep editing": "\u7EE7\u7EED\u7F16\u8F91",
    "Search in this directory": "\u5728\u6B64\u76EE\u5F55\u4E2D\u641C\u7D22",
    "Search in this repository": "\u5728\u6B64\u4ED3\u5E93\u4E2D\u641C\u7D22",
    "Search in this enterprise": "\u5728\u6B64\u4F01\u4E1A\u4E2D\u641C\u7D22",
    "Switch account": "\u5207\u6362\u8D26\u6237",
    "Draggable item": "\u53EF\u62D6\u52A8\u9879\u76EE",
    "Azure OpenAI": "Azure OpenAI",
    "Code insights": "\u4EE3\u7801\u6D1E\u5BDF",
    "You have used all premium requests available this month.": "\u4F60\u5DF2\u7528\u5B8C\u672C\u6708\u53EF\u7528\u7684\u6240\u6709\u9AD8\u7EA7\u8BF7\u6C42\u3002",
    "Run command": "\u8FD0\u884C\u547D\u4EE4",
    "Monthly limit": "\u6BCF\u6708\u9650\u989D",
    "Increase your budget": "\u589E\u52A0\u4F60\u7684\u9884\u7B97",
    "No session ID provided": "\u672A\u63D0\u4F9B\u4F1A\u8BDD ID",
    "You've run out of your budget for additional usage of AI credits.": "\u4F60\u7528\u4E8E AI \u79EF\u5206\u989D\u5916\u7528\u91CF\u7684\u9884\u7B97\u5DF2\u7528\u5B8C\u3002",
    "Report content": "\u4E3E\u62A5\u5185\u5BB9",
    "Queued messages": "\u6392\u961F\u4E2D\u7684\u6D88\u606F",
    "No files found": "\u672A\u627E\u5230\u6587\u4EF6",
    "Please select a rating.": "\u8BF7\u9009\u62E9\u8BC4\u5206\u3002",
    "Rename task": "\u91CD\u547D\u540D\u4EFB\u52A1",
    "Plan approved": "\u8BA1\u5212\u5DF2\u6279\u51C6",
    "Expand sidebar": "\u5C55\u5F00\u4FA7\u8FB9\u680F",
    "Explain repository": "\u89E3\u91CA\u4ED3\u5E93",
    "Create a plan": "\u521B\u5EFA\u8BA1\u5212",
    "First, create a new draft issue. Then ask for additional information to fill out the issue.": "\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8349\u7A3F\u8BAE\u9898\uFF0C\u7136\u540E\u8BF7\u6C42\u66F4\u591A\u4FE1\u606F\u6765\u5B8C\u5584\u8BE5\u8BAE\u9898\u3002",
    "Content preview": "\u5185\u5BB9\u9884\u89C8",
    "Create artifact": "\u521B\u5EFA\u5DE5\u4EF6",
    "Access denied": "\u8BBF\u95EE\u88AB\u62D2\u7EDD",
    "Discard changes": "\u653E\u5F03\u66F4\u6539",
    "Couldn't load the content": "\u65E0\u6CD5\u52A0\u8F7D\u5185\u5BB9",
    "Explain this code.": "\u89E3\u91CA\u6B64\u4EE3\u7801\u3002",
    "Explain changes": "\u89E3\u91CA\u66F4\u6539",
    "Explain these changes.": "\u89E3\u91CA\u8FD9\u4E9B\u66F4\u6539\u3002",
    "Copied to clipboard": "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",
    "Open in GitHub Copilot app": "\u5728 GitHub Copilot \u5E94\u7528\u4E2D\u6253\u5F00",
    "Select projects": "\u9009\u62E9\u9879\u76EE",
    "Expand file tree": "\u5C55\u5F00\u6587\u4EF6\u6811",
    "Commit changes": "\u63D0\u4EA4\u66F4\u6539",
    "Create sub-issue": "\u521B\u5EFA\u5B50\u8BAE\u9898",
    "No channel name": "\u7F3A\u5C11\u9891\u9053\u540D\u79F0",
    "An unexpected error occurred. Please try again.": "\u53D1\u751F\u610F\u5916\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    "Filter symbols": "\u7B5B\u9009\u7B26\u53F7",
    "Try again later.": "\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
    "This branch is": "\u6B64\u5206\u652F",
    "Add a README": "\u6DFB\u52A0 README",
    "Repository files": "\u4ED3\u5E93\u6587\u4EF6",
    "Create immutable action": "\u521B\u5EFA\u4E0D\u53EF\u53D8\u64CD\u4F5C",
    "Deploy to Pages": "\u90E8\u7F72\u5230 Pages",
    "Cite this repository": "\u5F15\u7528\u6B64\u4ED3\u5E93",
    "Copilot CLI": "Copilot CLI",
    "Copilot in VS Code": "VS Code \u4E2D\u7684 Copilot",
    "Copilot in JetBrains": "JetBrains \u4E2D\u7684 Copilot",
    "An unexpected error occurred while loading models.": "\u52A0\u8F7D\u6A21\u578B\u65F6\u53D1\u751F\u610F\u5916\u9519\u8BEF\u3002",
    "Ask your admin to upgrade": "\u8BF7\u4F60\u7684\u7BA1\u7406\u5458\u5347\u7EA7",
    "Select branch": "\u9009\u62E9\u5206\u652F",
    "Add a description": "\u6DFB\u52A0\u63CF\u8FF0",
    "Usage blocked": "\u7528\u91CF\u5DF2\u88AB\u963B\u6B62",
    "Plan ready for review": "\u8BA1\u5212\u5DF2\u51C6\u5907\u597D\u4F9B\u5BA1\u67E5",
    "In merge queue": "\u5728\u5408\u5E76\u961F\u5217\u4E2D",
    "Waiting for user": "\u7B49\u5F85\u7528\u6237",
    "Choose an option": "\u9009\u62E9\u4E00\u4E2A\u9009\u9879",
    "No option found": "\u672A\u627E\u5230\u9009\u9879",
    "Is blocking": "\u6B63\u5728\u963B\u585E",
    "Failed to update issue type": "\u66F4\u65B0\u8BAE\u9898\u7C7B\u578B\u5931\u8D25",
    "Please keep your feedback within 2000 characters or less.": "\u8BF7\u5C06\u53CD\u9988\u63A7\u5236\u5728 2000 \u4E2A\u5B57\u7B26\u4EE5\u5185\u3002",
    "Failed to unblock user": "\u89E3\u9664\u7528\u6237\u5C4F\u853D\u5931\u8D25",
    "This user is": "\u6B64\u7528\u6237",
    "Choose a reason": "\u9009\u62E9\u539F\u56E0",
    "Learn more about ": "\u4E86\u89E3\u66F4\u591A\u5173\u4E8E",
    "Queued to merge": "\u5DF2\u6392\u961F\u7B49\u5F85\u5408\u5E76",
    "Toggle sidebar": "\u5207\u6362\u4FA7\u8FB9\u680F",
    "You don't have enough AI credits to start or steer a session.": "\u4F60\u7684 AI \u79EF\u5206\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u5F00\u59CB\u6216\u5F15\u5BFC\u4F1A\u8BDD\u3002",
    "Search for files or folders": "\u641C\u7D22\u6587\u4EF6\u6216\u6587\u4EF6\u5939",
    "Personal instructions": "\u4E2A\u4EBA\u8BF4\u660E",
    "Single sign-on to see results": "\u767B\u5F55\u540E\u5373\u53EF\u67E5\u770B\u7ED3\u679C",
    "Single sign-on to see results in the ": "\u767B\u5F55\u540E\u5373\u53EF\u5728",
    "Creating task": "\u6B63\u5728\u521B\u5EFA\u4EFB\u52A1",
    "Single sign-on information": "\u5355\u70B9\u767B\u5F55\u4FE1\u606F",
    "First, create an issue with sub issues. Then ask for additional information to fill out these issues.": "\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u5E26\u5B50\u8BAE\u9898\u7684\u8BAE\u9898\uFF0C\u7136\u540E\u8BF7\u6C42\u66F4\u591A\u4FE1\u606F\u6765\u5B8C\u5584\u8FD9\u4E9B\u8BAE\u9898\u3002",
    "Approaching limit": "\u63A5\u8FD1\u4E0A\u9650",
    "Improve test coverage": "\u6539\u8FDB\u6D4B\u8BD5\u8986\u76D6\u7387",
    "Create a new issue": "\u521B\u5EFA\u65B0\u8BAE\u9898",
    "Improve my workflow": "\u6539\u8FDB\u6211\u7684\u5DE5\u4F5C\u6D41\u7A0B",
    "Filter by author": "\u6309\u4F5C\u8005\u7B5B\u9009",
    "Create 1 issue": "\u521B\u5EFA 1 \u4E2A\u8BAE\u9898",
    "Select a template": "\u9009\u62E9\u6A21\u677F",
    "Open file in a new tab": "\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00\u6587\u4EF6",
    "Close panel": "\u5173\u95ED\u9762\u677F",
    "Suggestion approved": "\u5EFA\u8BAE\u5DF2\u6279\u51C6",
    "Suggestion rejected": "\u5EFA\u8BAE\u5DF2\u62D2\u7EDD",
    "Thumbs down": "\u70B9\u8E29",
    "Closed issue (completed)": "\u5DF2\u5173\u95ED\u7684\u8BAE\u9898\uFF08\u5DF2\u5B8C\u6210\uFF09",
    "Closed issue (not planned)": "\u5DF2\u5173\u95ED\u7684\u8BAE\u9898\uFF08\u672A\u8BA1\u5212\uFF09",
    "Add assignees": "\u6DFB\u52A0\u6307\u6D3E\u5BF9\u8C61",
    "Add milestone": "\u6DFB\u52A0\u91CC\u7A0B\u7891",
    "Hide details": "\u9690\u85CF\u8BE6\u60C5",
    "Show details": "\u663E\u793A\u8BE6\u60C5",
    "Reload page": "\u91CD\u65B0\u52A0\u8F7D\u9875\u9762",
    "Filter by issue fields": "\u6309\u8BAE\u9898\u5B57\u6BB5\u7B5B\u9009",
    "Link a template": "\u94FE\u63A5\u6A21\u677F",
    "Link a project": "\u94FE\u63A5\u9879\u76EE",
    "Copy as template": "\u590D\u5236\u4E3A\u6A21\u677F",
    "Search in this owner": "\u5728\u6B64\u6240\u6709\u8005\u4E2D\u641C\u7D22",
    "Submit search": "\u63D0\u4EA4\u641C\u7D22",
    "Search with Copilot": "\u4F7F\u7528 Copilot \u641C\u7D22",
    "Value is negative or greater than the allowed amount": "\u6570\u503C\u4E3A\u8D1F\u6216\u8D85\u8FC7\u5141\u8BB8\u7684\u989D\u5EA6",
    "Unable to load page.": "\u65E0\u6CD5\u52A0\u8F7D\u9875\u9762\u3002",
    "Please reload page and try again": "\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u5E76\u91CD\u8BD5",
    "Error submitting new codespace form:": "\u63D0\u4EA4\u65B0 codespace \u8868\u5355\u65F6\u51FA\u9519\uFF1A",
    "Sudo authentication failed.": "Sudo \u8EAB\u4EFD\u9A8C\u8BC1\u5931\u8D25\u3002",
    "Too many authentication attempts. Please try again later.": "\u8EAB\u4EFD\u9A8C\u8BC1\u5C1D\u8BD5\u6B21\u6570\u8FC7\u591A\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
    "An unknown error occurred. Please try again later.": "\u53D1\u751F\u672A\u77E5\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
    "Incorrect password.": "\u5BC6\u7801\u4E0D\u6B63\u786E\u3002",
    "Too many password attempts. Please wait and try again.": "\u5BC6\u7801\u5C1D\u8BD5\u6B21\u6570\u8FC7\u591A\uFF0C\u8BF7\u7A0D\u7B49\u540E\u91CD\u8BD5\u3002",
    "Previous page": "\u4E0A\u4E00\u9875",
    "Summarize this issue.": "\u603B\u7ED3\u6B64\u8BAE\u9898\u3002",
    "Suggest next steps for this issue.": "\u4E3A\u6B64\u8BAE\u9898\u5EFA\u8BAE\u540E\u7EED\u6B65\u9AA4\u3002",
    "Summarize this file for me.": "\u4E3A\u6211\u603B\u7ED3\u6B64\u6587\u4EF6\u3002",
    "Help me review": "\u5E2E\u6211\u5BA1\u67E5",
    "Try a different search term": "\u5C1D\u8BD5\u4E0D\u540C\u7684\u641C\u7D22\u8BCD",
    "Could not create milestone": "\u65E0\u6CD5\u521B\u5EFA\u91CC\u7A0B\u7891",
    "Original file line number": "\u539F\u6587\u4EF6\u884C\u53F7",
    "Diff line number": "\u5DEE\u5F02\u884C\u53F7",
    "Diff line change": "\u5DEE\u5F02\u884C\u66F4\u6539",
    "Create branch": "\u521B\u5EFA\u5206\u652F",
    "Tag cannot be blank": "\u6807\u7B7E\u4E0D\u80FD\u4E3A\u7A7A",
    "Unable to validate tag name. Please try again.": "\u65E0\u6CD5\u9A8C\u8BC1\u6807\u7B7E\u540D\u79F0\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    "Create new tag": "\u521B\u5EFA\u65B0\u6807\u7B7E",
    "Switch branches/tags": "\u5207\u6362\u5206\u652F/\u6807\u7B7E",
    "Failed to approve workflows": "\u6279\u51C6\u5DE5\u4F5C\u6D41\u5931\u8D25",
    "Select assignees": "\u9009\u62E9\u6307\u6D3E\u5BF9\u8C61",
    "No due date": "\u65E0\u622A\u6B62\u65E5\u671F",
    "Failed to update": "\u66F4\u65B0\u5931\u8D25",
    "Site-wide shortcuts": "\u5168\u7AD9\u5FEB\u6377\u952E",
    "Keyboard shortcuts could not be loaded due to an unknown error. If the problem persists, please contact support.": "\u7531\u4E8E\u672A\u77E5\u9519\u8BEF\uFF0C\u65E0\u6CD5\u52A0\u8F7D\u952E\u76D8\u5FEB\u6377\u952E\u3002\u5982\u679C\u95EE\u9898\u6301\u7EED\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u652F\u6301\u3002",
    "Copy URL to clipboard": "\u590D\u5236 URL \u5230\u526A\u8D34\u677F",
    "Codespace access limited": "Codespace \u8BBF\u95EE\u53D7\u9650",
    "Failed to search": "\u641C\u7D22\u5931\u8D25",
    "Collapse file tree": "\u6298\u53E0\u6587\u4EF6\u6811",
    "There was an error loading the folder contents.": "\u52A0\u8F7D\u6587\u4EF6\u5939\u5185\u5BB9\u65F6\u51FA\u9519\u3002",
    "Loading file tree": "\u6B63\u5728\u52A0\u8F7D\u6587\u4EF6\u6811",
    "Some files could not be loaded.": "\u90E8\u5206\u6587\u4EF6\u65E0\u6CD5\u52A0\u8F7D\u3002",
    "Couldn't load.": "\u65E0\u6CD5\u52A0\u8F7D\u3002",
    "View file on default branch": "\u5728\u9ED8\u8BA4\u5206\u652F\u4E0A\u67E5\u770B\u6587\u4EF6",
    "Find in file": "\u5728\u6587\u4EF6\u4E2D\u67E5\u627E",
    "Toggle comments": "\u5207\u6362\u8BC4\u8BBA",
    "Toggle between collapsed and expanded comments": "\u5728\u6298\u53E0\u548C\u5C55\u5F00\u7684\u8BC4\u8BBA\u4E4B\u95F4\u5207\u6362",
    "Open Write with Copilot panel": "\u6253\u5F00\u201C\u4F7F\u7528 Copilot \u64B0\u5199\u201D\u9762\u677F",
    "Open the Copilot panel to generate an issue description": "\u6253\u5F00 Copilot \u9762\u677F\u4EE5\u751F\u6210\u8BAE\u9898\u63CF\u8FF0",
    "Add or change an issue that blocks the current issue": "\u6DFB\u52A0\u6216\u66F4\u6539\u963B\u585E\u5F53\u524D\u8BAE\u9898\u7684\u8BAE\u9898",
    "Add or change an issue that is blocked by the current issue": "\u6DFB\u52A0\u6216\u66F4\u6539\u88AB\u5F53\u524D\u8BAE\u9898\u963B\u585E\u7684\u8BAE\u9898",
    "Open issue creation in fullscreen": "\u5168\u5C4F\u6253\u5F00\u8BAE\u9898\u521B\u5EFA",
    "Add or change relates to": "\u6DFB\u52A0\u6216\u66F4\u6539\u201C\u5173\u8054\u201D\u5173\u7CFB",
    "Submit comment and review": "\u63D0\u4EA4\u8BC4\u8BBA\u548C\u5BA1\u67E5",
    "Submit the new comment and any pending review comments": "\u63D0\u4EA4\u65B0\u8BC4\u8BBA\u548C\u6240\u6709\u5F85\u5904\u7406\u7684\u5BA1\u67E5\u8BC4\u8BBA",
    "Jump to next result": "\u8DF3\u5230\u4E0B\u4E00\u4E2A\u7ED3\u679C",
    "Move to the next search result": "\u79FB\u52A8\u5230\u4E0B\u4E00\u4E2A\u641C\u7D22\u7ED3\u679C",
    "Jump to previous result": "\u8DF3\u5230\u4E0A\u4E00\u4E2A\u7ED3\u679C",
    "Move to the previous search result": "\u79FB\u52A8\u5230\u4E0A\u4E00\u4E2A\u641C\u7D22\u7ED3\u679C",
    "Go to settings": "\u524D\u5F80\u8BBE\u7F6E",
    "Add existing issue": "\u6DFB\u52A0\u5DF2\u6709\u8BAE\u9898",
    "Move focus out of editor": "\u5C06\u7126\u70B9\u79FB\u51FA\u7F16\u8F91\u5668",
    "Move focus out of the editor to other elements": "\u5C06\u7126\u70B9\u4ECE\u7F16\u8F91\u5668\u79FB\u5230\u5176\u4ED6\u5143\u7D20",
    "Error fetching visibility settings": "\u83B7\u53D6\u53EF\u89C1\u6027\u8BBE\u7F6E\u51FA\u9519",
    "Error fetching menu actions": "\u83B7\u53D6\u83DC\u5355\u64CD\u4F5C\u51FA\u9519",
    "Failed to dismiss survey": "\u5173\u95ED\u8C03\u67E5\u5931\u8D25",
    "Copied permalink.": "\u5DF2\u590D\u5236\u6C38\u4E45\u94FE\u63A5\u3002",
    "Copilot menu": "Copilot \u83DC\u5355",
    "Cancel and close": "\u53D6\u6D88\u5E76\u5173\u95ED",
    "You can enter up to ": "\u4F60\u6700\u591A\u53EF\u4EE5\u8F93\u5165",
    "Leave UI preview mode": "\u9000\u51FA UI \u9884\u89C8\u6A21\u5F0F",
    "Command palette": "\u547D\u4EE4\u9762\u677F",
    "View remainder of file in raw view": "\u5728\u539F\u59CB\u89C6\u56FE\u4E2D\u67E5\u770B\u6587\u4EF6\u5176\u4F59\u90E8\u5206",
    "Code blob focused hotkeys": "\u4EE3\u7801\u5757\u805A\u7126\u5FEB\u6377\u952E",
    "Create a new Space": "\u521B\u5EFA\u65B0\u7684 Space",
    "Select a space": "\u9009\u62E9 Space",
    "No spaces found": "\u672A\u627E\u5230 Space",
    "You can create a new space to get started.": "\u4F60\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Space \u6765\u5F00\u59CB\u3002",
    "Create a new space": "\u521B\u5EFA\u65B0\u7684 Space",
    "Create a space": "\u521B\u5EFA Space",
    "Jump to line": "\u8DF3\u8F6C\u5230\u884C",
    "More file actions": "\u66F4\u591A\u6587\u4EF6\u64CD\u4F5C",
    "Filter headings": "\u7B5B\u9009\u6807\u9898",
    "Close symbols": "\u5173\u95ED\u7B26\u53F7",
    "Learn more about this error.": "\u4E86\u89E3\u5173\u4E8E\u6B64\u9519\u8BEF\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "Learn more about CITATION files.": "\u4E86\u89E3\u5173\u4E8E CITATION \u6587\u4EF6\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "Failed to create list": "\u521B\u5EFA\u5217\u8868\u5931\u8D25",
    "Create a list to organize your starred repositories.": "\u521B\u5EFA\u4E00\u4E2A\u5217\u8868\u6765\u6574\u7406\u4F60\u52A0\u661F\u6807\u7684\u4ED3\u5E93\u3002",
    "Filter lists": "\u7B5B\u9009\u5217\u8868",
    "Use this template": "\u4F7F\u7528\u6B64\u6A21\u677F",
    "Unable to create template. Please try again.": "\u65E0\u6CD5\u521B\u5EFA\u6A21\u677F\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    "Discarding changes...": "\u6B63\u5728\u653E\u5F03\u66F4\u6539...",
    "Learn more about syncing a fork": "\u4E86\u89E3\u5173\u4E8E\u540C\u6B65\u590D\u523B\u7684\u66F4\u591A\u4FE1\u606F",
    "Update branch to merge the latest changes from the upstream repository into this branch.": "\u66F4\u65B0\u5206\u652F\u4EE5\u5C06\u4E0A\u6E38\u4ED3\u5E93\u7684\u6700\u65B0\u66F4\u6539\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\u3002",
    "Something went wrong loading citation data.": "\u52A0\u8F7D\u5F15\u7528\u6570\u636E\u65F6\u51FA\u9519\u3002",
    "Error saving your changes.": "\u4FDD\u5B58\u66F4\u6539\u65F6\u51FA\u9519\u3002",
    "Enter a valid URL": "\u8F93\u5165\u6709\u6548\u7684 URL",
    "Licenses found": "\u627E\u5230\u7684\u8BB8\u53EF\u8BC1",
    "Edit README": "\u7F16\u8F91 README",
    "Sponsor this project": "\u8D5E\u52A9\u6B64\u9879\u76EE",
    "Dismiss suggestions": "\u5173\u95ED\u5EFA\u8BAE",
    "Code 55% faster with GitHub Copilot": "\u4F7F\u7528 GitHub Copilot \u5C06\u7F16\u7801\u901F\u5EA6\u63D0\u5347 55%",
    "Only you will be able to see this space.": "\u53EA\u6709\u4F60\u80FD\u770B\u5230\u6B64 Space\u3002",
    "Only visible to you and organization admins. You can share it later.": "\u4EC5\u4F60\u548C\u7EC4\u7EC7\u7BA1\u7406\u5458\u53EF\u89C1\uFF0C\u4E4B\u540E\u53EF\u4EE5\u5206\u4EAB\u3002",
    "Space owner. Required.": "Space \u6240\u6709\u8005\uFF08\u5FC5\u586B\uFF09\u3002",
    "Choose an owner": "\u9009\u62E9\u6240\u6709\u8005",
    "An error occurred while loading owners. Please reopen the dialog to try again.": "\u52A0\u8F7D\u6240\u6709\u8005\u65F6\u51FA\u9519\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u5BF9\u8BDD\u6846\u91CD\u8BD5\u3002",
    "Unsupported resource": "\u4E0D\u652F\u6301\u7684\u8D44\u6E90",
    "Something went wrong. Please try again later.": "\u51FA\u9519\u4E86\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
    "Creation date": "\u521B\u5EFA\u65E5\u671F",
    "Filter by label": "\u6309\u6807\u7B7E\u7B5B\u9009",
    "Filter by project": "\u6309\u9879\u76EE\u7B5B\u9009",
    "Close and discard": "\u5173\u95ED\u5E76\u653E\u5F03",
    "Maximum accounts reached": "\u5DF2\u8FBE\u5230\u8D26\u6237\u6570\u91CF\u4E0A\u9650",
    "Sign out...": "\u9000\u51FA\u767B\u5F55...",
    "An error has occurred while switching accounts. Please try again.": "\u5207\u6362\u8D26\u6237\u65F6\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    "An error occurred while switching accounts. Please try again.": "\u5207\u6362\u8D26\u6237\u65F6\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    "Unable to switch to the selected account.": "\u65E0\u6CD5\u5207\u6362\u5230\u6240\u9009\u8D26\u6237\u3002",
    "Please try again. If the issue persists, try adding the account again.": "\u8BF7\u91CD\u8BD5\u3002\u5982\u679C\u95EE\u9898\u6301\u7EED\u5B58\u5728\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u6DFB\u52A0\u8D26\u6237\u3002",
    "Edit status": "\u7F16\u8F91\u72B6\u6001",
    "Draft a PR comment": "\u8D77\u8349 PR \u8BC4\u8BBA",
    "Custom agent": "\u81EA\u5B9A\u4E49\u4EE3\u7406",
    "A new branch will be created based on the selected branch": "\u5C06\u57FA\u4E8E\u6240\u9009\u5206\u652F\u521B\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F",
    "Cloud agents": "\u4E91\u7AEF\u4EE3\u7406",
    "You're approaching the limit of your included usage with the free plan.": "\u4F60\u5DF2\u63A5\u8FD1\u514D\u8D39\u8BA1\u5212\u5305\u542B\u7528\u91CF\u7684\u4E0A\u9650\u3002",
    "You have used all requests available this month.": "\u4F60\u5DF2\u7528\u5B8C\u672C\u6708\u53EF\u7528\u7684\u6240\u6709\u8BF7\u6C42\u3002",
    "Manage billing": "\u7BA1\u7406\u8D26\u5355",
    "Requires authorization": "\u9700\u8981\u6388\u6743",
    "Custom agents": "\u81EA\u5B9A\u4E49\u4EE3\u7406",
    "Create a custom agent": "\u521B\u5EFA\u81EA\u5B9A\u4E49\u4EE3\u7406",
    "Image limit reached (4)": "\u5DF2\u8FBE\u5230\u56FE\u7247\u6570\u91CF\u4E0A\u9650\uFF084\uFF09",
    "You can attach up to 4 images per task": "\u6BCF\u4E2A\u4EFB\u52A1\u6700\u591A\u53EF\u9644\u52A0 4 \u5F20\u56FE\u7247",
    "No repository": "\u65E0\u4ED3\u5E93",
    "Add a suggestion": "\u6DFB\u52A0\u5EFA\u8BAE",
    "Blank issue": "\u7A7A\u767D\u8BAE\u9898",
    "Write with Copilot": "\u4F7F\u7528 Copilot \u64B0\u5199",
    "Field is visible to the public.": "\u8BE5\u5B57\u6BB5\u5BF9\u516C\u4F17\u53EF\u89C1\u3002",
    "Field is visible to all organizations in this enterprise.": "\u8BE5\u5B57\u6BB5\u5BF9\u6B64\u4F01\u4E1A\u4E2D\u7684\u6240\u6709\u7EC4\u7EC7\u53EF\u89C1\u3002",
    "Suggest changes...": "\u5EFA\u8BAE\u66F4\u6539...",
    "Suggest changes": "\u5EFA\u8BAE\u66F4\u6539",
    "Other (type your answer)": "\u5176\u4ED6\uFF08\u8F93\u5165\u4F60\u7684\u7B54\u6848\uFF09",
    "Ready for review": "\u5DF2\u51C6\u5907\u597D\u63A5\u53D7\u5BA1\u67E5",
    "Error creating policy": "\u521B\u5EFA\u7B56\u7565\u51FA\u9519",
    "An unexpected error has occurred.": "\u53D1\u751F\u610F\u5916\u9519\u8BEF\u3002",
    "CLI session connected": "CLI \u4F1A\u8BDD\u5DF2\u8FDE\u63A5",
    "CLI session": "CLI \u4F1A\u8BDD",
    "Stop session": "\u505C\u6B62\u4F1A\u8BDD",
    "Send a message to the CLI session...": "\u5411 CLI \u4F1A\u8BDD\u53D1\u9001\u6D88\u606F...",
    "VS Code session connected": "VS Code \u4F1A\u8BDD\u5DF2\u8FDE\u63A5",
    "VS Code session": "VS Code \u4F1A\u8BDD",
    "JetBrains session connected": "JetBrains \u4F1A\u8BDD\u5DF2\u8FDE\u63A5",
    "JetBrains session": "JetBrains \u4F1A\u8BDD",
    "Check changes with Copilot code review and CodeQL": "\u4F7F\u7528 Copilot \u4EE3\u7801\u5BA1\u67E5\u548C CodeQL \u68C0\u67E5\u66F4\u6539",
    "Setting up environment": "\u6B63\u5728\u8BBE\u7F6E\u73AF\u5883",
    "Store memory": "\u5B58\u50A8\u8BB0\u5FC6",
    "Insufficient AI credits": "AI \u79EF\u5206\u4E0D\u8DB3",
    "Manage budget": "\u7BA1\u7406\u9884\u7B97",
    "Formatting tools": "\u683C\u5F0F\u5316\u5DE5\u5177",
    "Closed issue": "\u5DF2\u5173\u95ED\u7684\u8BAE\u9898",
    "Closed pull request": "\u5DF2\u5173\u95ED\u7684\u62C9\u53D6\u8BF7\u6C42",
    "Merged pull request": "\u5DF2\u5408\u5E76\u7684\u62C9\u53D6\u8BF7\u6C42",
    "Draft pull request": "\u8349\u7A3F\u62C9\u53D6\u8BF7\u6C42",
    "Hide full attachment names": "\u9690\u85CF\u5B8C\u6574\u9644\u4EF6\u540D\u79F0",
    "Show full attachment names": "\u663E\u793A\u5B8C\u6574\u9644\u4EF6\u540D\u79F0",
    "Upload from computer": "\u4ECE\u8BA1\u7B97\u673A\u4E0A\u4F20",
    "Attached images": "\u5DF2\u9644\u52A0\u7684\u56FE\u7247",
    "Give Copilot a background task to work on": "\u7ED9 Copilot \u4E00\u4E2A\u540E\u53F0\u4EFB\u52A1\u6765\u5904\u7406",
    "Task creation failed": "\u4EFB\u52A1\u521B\u5EFA\u5931\u8D25",
    "Filter options": "\u7B5B\u9009\u9009\u9879",
    "Change or remove parent": "\u66F4\u6539\u6216\u79FB\u9664\u7236\u7EA7",
    "Mark as blocked by": "\u6807\u8BB0\u4E3A\u88AB\u963B\u585E",
    "Mark as blocking": "\u6807\u8BB0\u4E3A\u963B\u585E",
    "Title can not be empty": "\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A",
    "Choose a date": "\u9009\u62E9\u65E5\u671F",
    "Failed to update issue labels": "\u66F4\u65B0\u8BAE\u9898\u6807\u7B7E\u5931\u8D25",
    "Issue field option results": "\u8BAE\u9898\u5B57\u6BB5\u9009\u9879\u7ED3\u679C",
    "No issues found": "\u672A\u627E\u5230\u8BAE\u9898",
    "Try changing your search term or selecting a different repository.": "\u5C1D\u8BD5\u66F4\u6539\u641C\u7D22\u8BCD\u6216\u9009\u62E9\u5176\u4ED6\u4ED3\u5E93\u3002",
    "Back to repository selection": "\u8FD4\u56DE\u4ED3\u5E93\u9009\u62E9",
    "No repository selected": "\u672A\u9009\u62E9\u4ED3\u5E93",
    "No repositories match": "\u6CA1\u6709\u5339\u914D\u7684\u4ED3\u5E93",
    "Failed to update issue milestone": "\u66F4\u65B0\u8BAE\u9898\u91CC\u7A0B\u7891\u5931\u8D25",
    "Tool execution failed": "\u5DE5\u5177\u6267\u884C\u5931\u8D25",
    "Assistant response": "\u52A9\u624B\u56DE\u590D",
    "Session timeline": "\u4F1A\u8BDD\u65F6\u95F4\u7EBF",
    "Similar to public code": "\u4E0E\u516C\u5171\u4EE3\u7801\u76F8\u4F3C",
    "Run Bash command": "\u8FD0\u884C Bash \u547D\u4EE4",
    "Edit file(s)": "\u7F16\u8F91\u6587\u4EF6",
    "Task complete": "\u4EFB\u52A1\u5B8C\u6210",
    "Create pull request": "\u521B\u5EFA\u62C9\u53D6\u8BF7\u6C42",
    "File edit: ": "\u6587\u4EF6\u7F16\u8F91\uFF1A",
    "Tool output: ": "\u5DE5\u5177\u8F93\u51FA\uFF1A",
    "Good response": "\u597D\u56DE\u590D",
    "Bad response": "\u5DEE\u56DE\u590D",
    "Copy Markdown": "\u590D\u5236 Markdown",
    "This user has": "\u6B64\u7528\u6237",
    "Failed to block user from organization": "\u963B\u6B62\u7528\u6237\u52A0\u5165\u7EC4\u7EC7\u5931\u8D25",
    "Failed to block user": "\u963B\u6B62\u7528\u6237\u5931\u8D25",
    "Are you sure you want to unblock ": "\u786E\u5B9A\u8981\u89E3\u9664\u5BF9",
    "No description provided.": "\u672A\u63D0\u4F9B\u63CF\u8FF0\u3002",
    "This commit was created on GitHub Enterprise Server and signed with a": "\u6B64\u63D0\u4EA4\u521B\u5EFA\u4E8E GitHub Enterprise Server\uFF0C\u5E76\u4F7F\u7528",
    "This commit was created on GitHub.com and signed with GitHub's": "\u6B64\u63D0\u4EA4\u521B\u5EFA\u4E8E GitHub.com\uFF0C\u5E76\u4F7F\u7528 GitHub \u7684",
    "This commit was signed with the committer's ": "\u6B64\u63D0\u4EA4\u4F7F\u7528\u63D0\u4EA4\u8005\u7684",
    "Couldn't load": "\u65E0\u6CD5\u52A0\u8F7D",
    "Task actions": "\u4EFB\u52A1\u64CD\u4F5C",
    "Enter a name": "\u8F93\u5165\u540D\u79F0",
    "Name cannot exceed 100 characters": "\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC7 100 \u4E2A\u5B57\u7B26",
    "Archive session": "\u5F52\u6863\u4F1A\u8BDD",
    "Exited plan mode": "\u5DF2\u9000\u51FA\u8BA1\u5212\u6A21\u5F0F",
    "Requested plan changes": "\u5DF2\u8BF7\u6C42\u8BA1\u5212\u66F4\u6539",
    "Continue in Copilot CLI": "\u5728 Copilot CLI \u4E2D\u7EE7\u7EED",
    "Usage details": "\u7528\u91CF\u8BE6\u60C5",
    "Something went wrong renaming the task. Please try again.": "\u91CD\u547D\u540D\u4EFB\u52A1\u65F6\u51FA\u9519\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    "This pull request was closed. To continue iterating, reopen the pull request.": "\u6B64\u62C9\u53D6\u8BF7\u6C42\u5DF2\u5173\u95ED\u3002\u8981\u7EE7\u7EED\u8FED\u4EE3\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u62C9\u53D6\u8BF7\u6C42\u3002",
    "This session is open in read-only mode.": "\u6B64\u4F1A\u8BDD\u4EE5\u53EA\u8BFB\u6A21\u5F0F\u6253\u5F00\u3002",
    "Select folders and files in ": "\u5728\u4EE5\u4E0B\u4F4D\u7F6E\u9009\u62E9\u6587\u4EF6\u5939\u548C\u6587\u4EF6\uFF1A",
    "GitHub status": "GitHub \u72B6\u6001",
    "Scroll to bottom": "\u6EDA\u52A8\u5230\u5E95\u90E8",
    "The environment for this session is offline. Steering will resume when the host reconnects.": "\u6B64\u4F1A\u8BDD\u7684\u73AF\u5883\u5904\u4E8E\u79BB\u7EBF\u72B6\u6001\uFF0C\u4E3B\u673A\u91CD\u65B0\u8FDE\u63A5\u540E\u5C06\u6062\u590D\u5F15\u5BFC\u3002",
    "Delete chat": "\u5220\u9664\u804A\u5929",
    "Rename chat": "\u91CD\u547D\u540D\u804A\u5929",
    "Chat shared": "\u804A\u5929\u5DF2\u5206\u4EAB",
    "Manage chat": "\u7BA1\u7406\u804A\u5929",
    "Agent sessions and chats": "\u4EE3\u7406\u4F1A\u8BDD\u548C\u804A\u5929",
    "Your shared conversations will appear here.": "\u4F60\u5206\u4EAB\u7684\u5BF9\u8BDD\u5C06\u663E\u793A\u5728\u8FD9\u91CC\u3002",
    "No shared conversations": "\u65E0\u5206\u4EAB\u7684\u5BF9\u8BDD",
    "Manage shared conversations": "\u7BA1\u7406\u5206\u4EAB\u7684\u5BF9\u8BDD",
    "Unshare chat": "\u53D6\u6D88\u5206\u4EAB\u804A\u5929",
    "Copilot used the ": "Copilot \u4F7F\u7528\u4E86",
    "Bing search": "Bing \u641C\u7D22",
    "Give additional feedback": "\u63D0\u4F9B\u989D\u5916\u53CD\u9988",
    "Drafting issue": "\u6B63\u5728\u8D77\u8349\u8BAE\u9898",
    "Drafted issue": "\u5DF2\u8D77\u8349\u8BAE\u9898",
    "Gathering what I need...": "\u6B63\u5728\u6536\u96C6\u6240\u9700\u4FE1\u606F...",
    "Gathering agent logs...": "\u6B63\u5728\u6536\u96C6\u4EE3\u7406\u65E5\u5FD7...",
    "Searching agent sessions...": "\u6B63\u5728\u641C\u7D22\u4EE3\u7406\u4F1A\u8BDD...",
    "Unable to load tasks, try again later.": "\u65E0\u6CD5\u52A0\u8F7D\u4EFB\u52A1\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
    "No agent sessions": "\u65E0\u4EE3\u7406\u4F1A\u8BDD",
    "Start a new session to see it here.": "\u5F00\u59CB\u4E00\u4E2A\u65B0\u4F1A\u8BDD\u5373\u53EF\u5728\u6B64\u67E5\u770B\u3002",
    "Initializing session...": "\u6B63\u5728\u521D\u59CB\u5316\u4F1A\u8BDD...",
    "Thread not found": "\u672A\u627E\u5230\u7EBF\u7A0B",
    "Start a new conversation": "\u5F00\u59CB\u65B0\u5BF9\u8BDD",
    "Pasted content": "\u7C98\u8D34\u7684\u5185\u5BB9",
    "An unknown error occurred": "\u53D1\u751F\u672A\u77E5\u9519\u8BEF",
    "The size of the space exceeds the current limit": "Space \u7684\u5927\u5C0F\u8D85\u8FC7\u5F53\u524D\u9650\u5236",
    "Chats could not be loaded.": "\u804A\u5929\u8BB0\u5F55\u65E0\u6CD5\u52A0\u8F7D\u3002",
    "No chats yet.": "\u8FD8\u6CA1\u6709\u804A\u5929\u3002",
    "Start new chat": "\u5F00\u59CB\u65B0\u804A\u5929",
    "Explain this repository. Help me understand the codebase structure, key technologies used, and how the code is organized.": "\u89E3\u91CA\u6B64\u4ED3\u5E93\u3002\u5E2E\u52A9\u6211\u7406\u89E3\u4EE3\u7801\u5E93\u7ED3\u6784\u3001\u4F7F\u7528\u7684\u5173\u952E\u6280\u672F\u4EE5\u53CA\u4EE3\u7801\u7684\u7EC4\u7EC7\u65B9\u5F0F\u3002",
    "Create an issue with sub-issues": "\u521B\u5EFA\u5E26\u5B50\u8BAE\u9898\u7684\u8BAE\u9898",
    "Create a profile README": "\u521B\u5EFA\u4E2A\u4EBA\u8D44\u6599 README",
    "Generate a simple calculator using HTML, CSS, and JavaScript.": "\u4F7F\u7528 HTML\u3001CSS \u548C JavaScript \u751F\u6210\u4E00\u4E2A\u7B80\u5355\u7684\u8BA1\u7B97\u5668\u3002",
    "Generate a simple calculator": "\u751F\u6210\u4E00\u4E2A\u7B80\u5355\u7684\u8BA1\u7B97\u5668",
    "Make a Pong game": "\u5236\u4F5C\u4E00\u4E2A\u4E52\u4E53\u6E38\u620F",
    "Create a Markdown file with a Mermaid diagram showing an architecture overview.": "\u521B\u5EFA\u4E00\u4E2A\u5E26 Mermaid \u67B6\u6784\u6982\u89C8\u56FE\u7684 Markdown \u6587\u4EF6\u3002",
    "Design a Mermaid architecture overview": "\u8BBE\u8BA1 Mermaid \u67B6\u6784\u6982\u89C8\u56FE",
    "Basic Git commands": "\u57FA\u672C Git \u547D\u4EE4",
    "Git branching": "Git \u5206\u652F",
    "Advanced Git commands": "\u9AD8\u7EA7 Git \u547D\u4EE4",
    "List the latest open issues assigned to me.": "\u5217\u51FA\u6307\u6D3E\u7ED9\u6211\u7684\u6700\u65B0\u672A\u5173\u95ED\u8BAE\u9898\u3002",
    "Issues assigned to me": "\u6307\u6D3E\u7ED9\u6211\u7684\u8BAE\u9898",
    "Summarize my latest issue": "\u603B\u7ED3\u6211\u6700\u8FD1\u7684\u8BAE\u9898",
    "List my latest open pull requests.": "\u5217\u51FA\u6211\u6700\u8FD1\u6253\u5F00\u7684\u62C9\u53D6\u8BF7\u6C42\u3002",
    "My open pull requests": "\u6211\u6253\u5F00\u7684\u62C9\u53D6\u8BF7\u6C42",
    "Summarize my latest PR": "\u603B\u7ED3\u6211\u6700\u8FD1\u7684 PR",
    "Response error": "\u56DE\u590D\u51FA\u9519",
    "Response ready": "\u56DE\u590D\u5DF2\u5C31\u7EEA",
    "Delete all conversations": "\u5220\u9664\u6240\u6709\u5BF9\u8BDD",
    "Continue in immersive": "\u5728\u6C89\u6D78\u5F0F\u6A21\u5F0F\u4E2D\u7EE7\u7EED",
    "Minimize chat": "\u6700\u5C0F\u5316\u804A\u5929",
    "Configure experiments": "\u914D\u7F6E\u5B9E\u9A8C",
    "Adjust prompts": "\u8C03\u6574\u63D0\u793A\u8BCD",
    "Content preview panel": "\u5185\u5BB9\u9884\u89C8\u9762\u677F",
    "Repository not found": "\u672A\u627E\u5230\u4ED3\u5E93",
    "Issue not found": "\u672A\u627E\u5230\u8BAE\u9898",
    "Issue title is invalid": "\u8BAE\u9898\u6807\u9898\u65E0\u6548",
    "Issue body is invalid": "\u8BAE\u9898\u6B63\u6587\u65E0\u6548",
    "Other errors": "\u5176\u4ED6\u9519\u8BEF",
    "Remove dependency": "\u79FB\u9664\u4F9D\u8D56",
    "Issues are disabled": "\u8BAE\u9898\u529F\u80FD\u5DF2\u7981\u7528",
    "Open issue in new tab": "\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00\u8BAE\u9898",
    "Malformed draft issue": "\u683C\u5F0F\u9519\u8BEF\u7684\u8349\u7A3F\u8BAE\u9898",
    "The drafted issue contains malformed data and the preview is not available. Please retry.": "\u8349\u7A3F\u8BAE\u9898\u5305\u542B\u683C\u5F0F\u9519\u8BEF\u7684\u6570\u636E\uFF0C\u9884\u89C8\u4E0D\u53EF\u7528\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    "Download code": "\u4E0B\u8F7D\u4EE3\u7801",
    "Message tools": "\u6D88\u606F\u5DE5\u5177",
    "Edit message": "\u7F16\u8F91\u6D88\u606F",
    "Chat failed to load": "\u804A\u5929\u52A0\u8F7D\u5931\u8D25",
    "Reload the page": "\u91CD\u65B0\u52A0\u8F7D\u9875\u9762",
    "Chat is disabled": "\u804A\u5929\u529F\u80FD\u5DF2\u7981\u7528",
    "Enable tracing": "\u542F\u7528\u8FFD\u8E2A",
    "Single sign-on to see results in ": "\u767B\u5F55\u540E\u5373\u53EF\u5728\u4EE5\u4E0B\u4F4D\u7F6E\u67E5\u770B\u7ED3\u679C\uFF1A",
    "Single sign-on to see results in your organizations": "\u767B\u5F55\u540E\u5373\u53EF\u5728\u4F60\u7684\u7EC4\u7EC7\u4E2D\u67E5\u770B\u7ED3\u679C",
    "Select an organization": "\u9009\u62E9\u7EC4\u7EC7",
    "Failed to minimize comment": "\u6700\u5C0F\u5316\u8BC4\u8BBA\u5931\u8D25",
    "Failed to update comment": "\u66F4\u65B0\u8BC4\u8BBA\u5931\u8D25",
    "The content you are editing has changed. Please copy your edits and refresh the page.": "\u4F60\u6B63\u5728\u7F16\u8F91\u7684\u5185\u5BB9\u5DF2\u66F4\u6539\uFF0C\u8BF7\u590D\u5236\u4F60\u7684\u7F16\u8F91\u5185\u5BB9\u5E76\u5237\u65B0\u9875\u9762\u3002",
    "Failed to update issue body": "\u66F4\u65B0\u8BAE\u9898\u6B63\u6587\u5931\u8D25",
    "Edit artifact": "\u7F16\u8F91\u5DE5\u4EF6",
    "Add artifact": "\u6DFB\u52A0\u5DE5\u4EF6",
    "Failed to update issue title": "\u66F4\u65B0\u8BAE\u9898\u6807\u9898\u5931\u8D25",
    "Failed to link pull requests": "\u5173\u8054\u62C9\u53D6\u8BF7\u6C42\u5931\u8D25",
    "Failed to link branches": "\u5173\u8054\u5206\u652F\u5931\u8D25",
    "Repository destination": "\u76EE\u6807\u4ED3\u5E93",
    "Branch source": "\u6E90\u5206\u652F",
    "Unexpected error": "\u610F\u5916\u9519\u8BEF",
    "Failed to lock the conversation": "\u9501\u5B9A\u5BF9\u8BDD\u5931\u8D25",
    "Failed to unlock the conversation": "\u89E3\u9501\u5BF9\u8BDD\u5931\u8D25",
    "Could not unpin issue": "\u65E0\u6CD5\u53D6\u6D88\u56FA\u5B9A\u8BAE\u9898",
    "Failed to pin issue": "\u56FA\u5B9A\u8BAE\u9898\u5931\u8D25",
    "Agent suggestions": "\u4EE3\u7406\u5EFA\u8BAE",
    "Issue actions": "\u8BAE\u9898\u64CD\u4F5C",
    "You have unsaved changes": "\u4F60\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539",
    "Failed to unpin issue": "\u53D6\u6D88\u56FA\u5B9A\u8BAE\u9898\u5931\u8D25",
    "Failed to update issue subscription": "\u66F4\u65B0\u8BAE\u9898\u8BA2\u9605\u5931\u8D25",
    "Status: Closed (completed).": "\u72B6\u6001\uFF1A\u5DF2\u5173\u95ED\uFF08\u5DF2\u5B8C\u6210\uFF09\u3002",
    "Failed to add sub-issue": "\u6DFB\u52A0\u5B50\u8BAE\u9898\u5931\u8D25",
    "Sub-issue limit reached": "\u5DF2\u8FBE\u5230\u5B50\u8BAE\u9898\u6570\u91CF\u4E0A\u9650",
    "Updating issues": "\u6B63\u5728\u66F4\u65B0\u8BAE\u9898",
    "Delete view": "\u5220\u9664\u89C6\u56FE",
    "Duplicate view": "\u590D\u5236\u89C6\u56FE",
    "Choose teams that show up in your sidebar.": "\u9009\u62E9\u663E\u793A\u5728\u4FA7\u8FB9\u680F\u4E2D\u7684\u56E2\u961F\u3002",
    "Save changes to new view": "\u5C06\u66F4\u6539\u4FDD\u5B58\u5230\u65B0\u89C6\u56FE",
    "Sort by reactions": "\u6309\u53CD\u5E94\u6392\u5E8F",
    "Bulk actions": "\u6279\u91CF\u64CD\u4F5C",
    "Issue filters": "\u8BAE\u9898\u7B5B\u9009\u5668",
    "Total comments": "\u8BC4\u8BBA\u603B\u6570",
    "Filter issues": "\u7B5B\u9009\u8BAE\u9898",
    "Bulk update had an error": "\u6279\u91CF\u66F4\u65B0\u51FA\u9519",
    "Failed to load issues.": "\u52A0\u8F7D\u8BAE\u9898\u5931\u8D25\u3002",
    "Choose an Issue Template": "\u9009\u62E9\u8BAE\u9898\u6A21\u677F",
    "Filter templates": "\u7B5B\u9009\u6A21\u677F",
    "Make a copy": "\u521B\u5EFA\u526F\u672C",
    "Search owners": "\u641C\u7D22\u6240\u6709\u8005",
    "Unlink project": "\u53D6\u6D88\u5173\u8054\u9879\u76EE",
    "What's happening": "\u53D1\u751F\u4E86\u4EC0\u4E48",
    "An unknown error occured.": "\u53D1\u751F\u672A\u77E5\u9519\u8BEF\u3002",
    "This response cannot be shown because it references public code, which is restricted by": "\u6B64\u56DE\u590D\u65E0\u6CD5\u663E\u793A\uFF0C\u56E0\u4E3A\u5B83\u5F15\u7528\u4E86\u53D7\u9650\u5236\u7684\u516C\u5171\u4EE3\u7801\uFF0C\u5177\u4F53\u9650\u5236\u7531",
    "Open more options": "\u66F4\u591A\u9009\u9879",
    "Disable clusters": "\u7981\u7528\u96C6\u7FA4",
    "Remove this file": "\u79FB\u9664\u6B64\u6587\u4EF6",
    "Label preview": "\u6807\u7B7E\u9884\u89C8",
    "Dismiss banner": "\u5173\u95ED\u6A2A\u5E45",
    "Filter items": "\u7B5B\u9009\u9879\u76EE",
    "Select items": "\u9009\u62E9\u9879\u76EE",
    "Select an item": "\u9009\u62E9\u4E00\u4E2A\u9879\u76EE",
    "Save and close": "\u4FDD\u5B58\u5E76\u5173\u95ED",
    "Remove token": "\u79FB\u9664\u4EE4\u724C",
    "Copy file path": "\u590D\u5236\u6587\u4EF6\u8DEF\u5F84",
    "Copy raw content": "\u590D\u5236\u539F\u59CB\u5185\u5BB9",
    "Download the raw file content": "\u4E0B\u8F7D\u539F\u59CB\u6587\u4EF6\u5185\u5BB9",
    "View preview": "\u67E5\u770B\u9884\u89C8",
    "Create permalink": "\u521B\u5EFA\u6C38\u4E45\u94FE\u63A5",
    "Add attachment": "\u6DFB\u52A0\u9644\u4EF6",
    "Select item": "\u9009\u62E9\u9879\u76EE",
    "Submit form": "\u63D0\u4EA4\u8868\u5355",
    "Submit input": "\u63D0\u4EA4\u8F93\u5165",
    "Open repository switcher": "\u6253\u5F00\u4ED3\u5E93\u5207\u6362\u5668",
    "Open search bar": "\u6253\u5F00\u641C\u7D22\u680F",
    "Add or change parent issue": "\u6DFB\u52A0\u6216\u66F4\u6539\u7236\u8BAE\u9898",
    "Submit and create more": "\u63D0\u4EA4\u5E76\u7EE7\u7EED\u521B\u5EFA",
    "Edit parent issue": "\u7F16\u8F91\u7236\u8BAE\u9898",
    "Add or change security alert": "\u6DFB\u52A0\u6216\u66F4\u6539\u5B89\u5168\u8B66\u62A5",
    "Open assignees panel": "\u6253\u5F00\u6307\u6D3E\u9762\u677F",
    "Open author panel": "\u6253\u5F00\u4F5C\u8005\u9762\u677F",
    "Open development panel": "\u6253\u5F00\u5F00\u53D1\u9762\u677F",
    "Open fields panel": "\u6253\u5F00\u5B57\u6BB5\u9762\u677F",
    "Open issue type panel": "\u6253\u5F00\u8BAE\u9898\u7C7B\u578B\u9762\u677F",
    "Open labels panel": "\u6253\u5F00\u6807\u7B7E\u9762\u677F",
    "Open milestone panel": "\u6253\u5F00\u91CC\u7A0B\u7891\u9762\u677F",
    "Open projects panel": "\u6253\u5F00\u9879\u76EE\u9762\u677F",
    "Open focused item": "\u6253\u5F00\u805A\u7126\u7684\u9879\u76EE",
    "Open manage item dialog": "\u6253\u5F00\u7BA1\u7406\u9879\u76EE\u5BF9\u8BDD\u6846",
    "Go to next commit": "\u8F6C\u5230\u4E0B\u4E00\u4E2A\u63D0\u4EA4",
    "Go to previous commit": "\u8F6C\u5230\u4E0A\u4E00\u4E2A\u63D0\u4EA4",
    "Open commit selector": "\u6253\u5F00\u63D0\u4EA4\u9009\u62E9\u5668",
    "Add comment on line": "\u5728\u884C\u4E0A\u6DFB\u52A0\u8BC4\u8BBA",
    "Reply to a comment with quoted text": "\u5F15\u7528\u6587\u672C\u56DE\u590D\u8BC4\u8BBA",
    "Go to actions": "\u8F6C\u5230\u64CD\u4F5C",
    "Go to agents": "\u8F6C\u5230\u4EE3\u7406",
    "Go to discussions": "\u8F6C\u5230\u8BA8\u8BBA",
    "Go to insights": "\u8F6C\u5230\u6D1E\u5BDF",
    "Go to issues": "\u8F6C\u5230\u8BAE\u9898",
    "Go to models": "\u8F6C\u5230\u6A21\u578B",
    "Go to projects": "\u8F6C\u5230\u9879\u76EE",
    "Go to pull requests": "\u8F6C\u5230\u62C9\u53D6\u8BF7\u6C42",
    "Go to security": "\u8F6C\u5230\u5B89\u5168",
    "Create label": "\u521B\u5EFA\u6807\u7B7E",
    "Add an existing issue as a sub-issue": "\u5C06\u73B0\u6709\u8BAE\u9898\u6DFB\u52A0\u4E3A\u5B50\u8BAE\u9898",
    "Create a new sub-issue": "\u521B\u5EFA\u65B0\u7684\u5B50\u8BAE\u9898",
    "Select a tag": "\u9009\u62E9\u6807\u7B7E",
    "Search or create a new tag": "\u641C\u7D22\u6216\u521B\u5EFA\u65B0\u6807\u7B7E",
    "Filter tags": "\u7B5B\u9009\u6807\u7B7E",
    "Filter branches": "\u7B5B\u9009\u5206\u652F",
    "Learn more about approving workflows.": "\u4E86\u89E3\u5173\u4E8E\u6279\u51C6\u5DE5\u4F5C\u6D41\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "Approve workflows to run": "\u6279\u51C6\u8981\u8FD0\u884C\u7684\u5DE5\u4F5C\u6D41",
    "Dismiss workflow approval notice": "\u5173\u95ED\u5DE5\u4F5C\u6D41\u6279\u51C6\u901A\u77E5",
    "Edit labels": "\u7F16\u8F91\u6807\u7B7E",
    "Choose issue": "\u9009\u62E9\u8BAE\u9898",
    "Filter organizations": "\u7B5B\u9009\u7EC4\u7EC7",
    "Select milestone": "\u9009\u62E9\u91CC\u7A0B\u7891",
    "Select issue": "\u9009\u62E9\u8BAE\u9898",
    "Select issue field": "\u9009\u62E9\u8BAE\u9898\u5B57\u6BB5",
    "Select an option": "\u9009\u62E9\u4E00\u4E2A\u9009\u9879",
    "Select options": "\u9009\u62E9\u9009\u9879",
    "Select labels": "\u9009\u62E9\u6807\u7B7E",
    "Select a pull request": "\u9009\u62E9\u62C9\u53D6\u8BF7\u6C42",
    "Search pull requests": "\u641C\u7D22\u62C9\u53D6\u8BF7\u6C42",
    "Filter issue types": "\u7B5B\u9009\u8BAE\u9898\u7C7B\u578B",
    "Filter by user": "\u6309\u7528\u6237\u7B5B\u9009",
    "Label results": "\u6807\u7B7E\u7ED3\u679C",
    "Request removed.": "\u8BF7\u6C42\u5DF2\u79FB\u9664\u3002",
    "Request sent": "\u8BF7\u6C42\u5DF2\u53D1\u9001",
    "Request sent.": "\u8BF7\u6C42\u5DF2\u53D1\u9001\u3002",
    "Request more budget": "\u7533\u8BF7\u66F4\u591A\u9884\u7B97",
    "Select all requests": "\u9009\u62E9\u6240\u6709\u8BF7\u6C42",
    "Approve and increase": "\u6279\u51C6\u5E76\u589E\u52A0",
    "Select at least one request to approve.": "\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u8981\u6279\u51C6\u7684\u8BF7\u6C42\u3002",
    "Choose a GitHub Copilot app download": "\u9009\u62E9 GitHub Copilot \u5E94\u7528\u4E0B\u8F7D",
    "Show fewer recommendations": "\u663E\u793A\u66F4\u5C11\u63A8\u8350",
    "Show more recommendations": "\u663E\u793A\u66F4\u591A\u63A8\u8350",
    "Select Labels": "\u9009\u62E9\u6807\u7B7E",
    "Clone with HTTPS": "\u4F7F\u7528 HTTPS \u514B\u9686",
    "Clone with SSH": "\u4F7F\u7528 SSH \u514B\u9686",
    "Clone with GitHub CLI": "\u4F7F\u7528 GitHub CLI \u514B\u9686",
    "Open with Visual Studio": "\u4F7F\u7528 Visual Studio \u6253\u5F00",
    "Open with Xcode": "\u4F7F\u7528 Xcode \u6253\u5F00",
    "Clone with HTTPS url": "\u4F7F\u7528 HTTPS URL \u514B\u9686",
    "Clone using the web URL.": "\u4F7F\u7528\u7F51\u9875 URL \u514B\u9686\u3002",
    "Clone with SSH url": "\u4F7F\u7528 SSH URL \u514B\u9686",
    "Copy command to clipboard": "\u590D\u5236\u547D\u4EE4\u5230\u526A\u8D34\u677F",
    "Clone with GitHub CLI command": "\u4F7F\u7528 GitHub CLI \u547D\u4EE4\u514B\u9686",
    "Learn more about the GitHub CLI": "\u4E86\u89E3\u5173\u4E8E GitHub CLI \u7684\u66F4\u591A\u4FE1\u606F",
    "Refresh the page and try again.": "\u5237\u65B0\u9875\u9762\u5E76\u91CD\u8BD5\u3002",
    "Close side panel": "\u5173\u95ED\u4FA7\u8FB9\u9762\u677F",
    "Close Copilot panel": "\u5173\u95ED Copilot \u9762\u677F",
    "Show code folding buttons": "\u663E\u793A\u4EE3\u7801\u6298\u53E0\u6309\u94AE",
    "Open symbols on click": "\u70B9\u51FB\u6253\u5F00\u7B26\u53F7",
    "Learn more about bidirectional Unicode characters": "\u4E86\u89E3\u5173\u4E8E\u53CC\u5411 Unicode \u5B57\u7B26\u7684\u66F4\u591A\u4FE1\u606F",
    "Hide revealed characters": "\u9690\u85CF\u5DF2\u663E\u793A\u7684\u5B57\u7B26",
    "Show hidden characters": "\u663E\u793A\u9690\u85CF\u5B57\u7B26",
    "View git blame": "\u67E5\u770B git blame",
    "View file in GitHub.dev": "\u5728 github.dev \u4E2D\u67E5\u770B\u6587\u4EF6",
    "View file in different branch/tag": "\u5728\u5176\u4ED6\u5206\u652F/\u6807\u7B7E\u4E2D\u67E5\u770B\u6587\u4EF6",
    "Open as prompt in GitHub Models": "\u5728 GitHub Models \u4E2D\u4F5C\u4E3A\u63D0\u793A\u8BCD\u6253\u5F00",
    "View CODEOWNERS errors": "\u67E5\u770B CODEOWNERS \u9519\u8BEF",
    "Fork this repository": "\u590D\u523B\u6B64\u4ED3\u5E93",
    "Update your fork": "\u66F4\u65B0\u4F60\u7684\u590D\u523B",
    "Learn more repository limits": "\u4E86\u89E3\u4ED3\u5E93\u9650\u5236\u7684\u66F4\u591A\u4FE1\u606F",
    "Learn more about forks": "\u4E86\u89E3\u5173\u4E8E\u590D\u523B\u7684\u66F4\u591A\u4FE1\u606F",
    "View commit history for this file.": "\u67E5\u770B\u6B64\u6587\u4EF6\u7684\u63D0\u4EA4\u5386\u53F2\u3002",
    "Add to space": "\u6DFB\u52A0\u5230 Space",
    "Close find in file": "\u5173\u95ED\u6587\u4EF6\u4E2D\u67E5\u627E",
    "Search this file": "\u641C\u7D22\u6B64\u6587\u4EF6",
    "Learn more about Git LFS": "\u4E86\u89E3\u5173\u4E8E Git LFS \u7684\u66F4\u591A\u4FE1\u606F",
    "Open with...": "\u4F7F\u7528...\u6253\u5F00",
    "Edit file...": "\u7F16\u8F91\u6587\u4EF6...",
    "Jump to line...": "\u8DF3\u8F6C\u5230\u884C...",
    "Delete directory": "\u5220\u9664\u76EE\u5F55",
    "Cancel changes": "\u53D6\u6D88\u66F4\u6539",
    "Edit prompt": "\u7F16\u8F91\u63D0\u793A\u8BCD",
    "Edit and raw actions": "\u7F16\u8F91\u548C\u539F\u59CB\u64CD\u4F5C",
    "Copy raw file": "\u590D\u5236\u539F\u59CB\u6587\u4EF6",
    "Close symbols panel": "\u5173\u95ED\u7B26\u53F7\u9762\u677F",
    "Open symbols panel": "\u6253\u5F00\u7B26\u53F7\u9762\u677F",
    "Close outline": "\u5173\u95ED\u5927\u7EB2",
    "Back to all symbols": "\u8FD4\u56DE\u6240\u6709\u7B26\u53F7",
    "Search for this symbol": "\u641C\u7D22\u6B64\u7B26\u53F7",
    "Learn more about issue templates.": "\u4E86\u89E3\u5173\u4E8E\u8BAE\u9898\u6A21\u677F\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "Learn more about repository licenses": "\u4E86\u89E3\u5173\u4E8E\u4ED3\u5E93\u8BB8\u53EF\u8BC1\u7684\u66F4\u591A\u4FE1\u606F",
    "View organization funding file.": "\u67E5\u770B\u7EC4\u7EC7\u8D5E\u52A9\u6587\u4EF6\u3002",
    "View update status": "\u67E5\u770B\u66F4\u65B0\u72B6\u6001",
    "Create new issue to see results": "\u521B\u5EFA\u65B0\u8BAE\u9898\u4EE5\u67E5\u770B\u7ED3\u679C",
    "Go to default branch": "\u8F6C\u5230\u9ED8\u8BA4\u5206\u652F",
    "Copy path to clipboard": "\u590D\u5236\u8DEF\u5F84\u5230\u526A\u8D34\u677F",
    "Pin or unpin this repository on your profile": "\u5728\u4F60\u7684\u4E2A\u4EBA\u8D44\u6599\u4E0A\u56FA\u5B9A\u6216\u53D6\u6D88\u56FA\u5B9A\u6B64\u4ED3\u5E93",
    "Pin repository locations": "\u56FA\u5B9A\u4ED3\u5E93\u4F4D\u7F6E",
    "Add this repository to one or more lists": "\u5C06\u6B64\u4ED3\u5E93\u6DFB\u52A0\u5230\u4E00\u4E2A\u6216\u591A\u4E2A\u5217\u8868",
    "Create a new repository": "\u521B\u5EFA\u65B0\u4ED3\u5E93",
    "Create a new fork": "\u521B\u5EFA\u65B0\u7684\u590D\u523B",
    "Learn more about funding links in repositories": "\u4E86\u89E3\u5173\u4E8E\u4ED3\u5E93\u4E2D\u8D5E\u52A9\u94FE\u63A5\u7684\u66F4\u591A\u4FE1\u606F",
    "Copy create commands to clipboard": "\u590D\u5236\u521B\u5EFA\u547D\u4EE4\u5230\u526A\u8D34\u677F",
    "Copy push commands to clipboard": "\u590D\u5236\u63A8\u9001\u547D\u4EE4\u5230\u526A\u8D34\u677F",
    "Clone protocol": "\u514B\u9686\u534F\u8BAE",
    "Open Contribute dropdown": "\u6253\u5F00\u8D21\u732E\u4E0B\u62C9\u83DC\u5355",
    "Open Fetch upstream dropdown": "\u6253\u5F00\u83B7\u53D6\u4E0A\u6E38\u4E0B\u62C9\u83DC\u5355",
    "Show all files": "\u663E\u793A\u6240\u6709\u6587\u4EF6",
    "Learn more about configuring a template chooser.": "\u4E86\u89E3\u5173\u4E8E\u914D\u7F6E\u6A21\u677F\u9009\u62E9\u5668\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "Add a README with an overview of your project.": "\u6DFB\u52A0\u4E00\u4E2A\u5305\u542B\u9879\u76EE\u6982\u89C8\u7684 README\u3002",
    "View invitation": "\u67E5\u770B\u9080\u8BF7",
    "View documentation.": "\u67E5\u770B\u6587\u6863\u3002",
    "Protect this branch": "\u4FDD\u62A4\u6B64\u5206\u652F",
    "View on Marketplace": "\u5728\u5E94\u7528\u5E02\u573A\u4E0A\u67E5\u770B",
    "Retry migration": "\u91CD\u8BD5\u8FC1\u79FB",
    "View progress": "\u67E5\u770B\u8FDB\u5EA6",
    "Learn more about immutable actions.": "\u4E86\u89E3\u5173\u4E8E\u4E0D\u53EF\u53D8\u64CD\u4F5C\u7684\u66F4\u591A\u4FE1\u606F\u3002",
    "Dismiss deploy banner": "\u5173\u95ED\u90E8\u7F72\u6A2A\u5E45",
    "Manage blocked users": "\u7BA1\u7406\u88AB\u5C4F\u853D\u7684\u7528\u6237",
    "Copy update commands to clipboard": "\u590D\u5236\u66F4\u65B0\u547D\u4EE4\u5230\u526A\u8D34\u677F",
    "Go to Branches page": "\u8F6C\u5230\u5206\u652F\u9875\u9762",
    "Go to Tags page": "\u8F6C\u5230\u6807\u7B7E\u9875\u9762",
    "Upload file": "\u4E0A\u4F20\u6587\u4EF6",
    "Generate a README": "\u751F\u6210 README",
    "Generate a README for this repository.": "\u4E3A\u6B64\u4ED3\u5E93\u751F\u6210 README\u3002",
    "View citation file": "\u67E5\u770B\u5F15\u7528\u6587\u4EF6",
    "Edit repository details": "\u7F16\u8F91\u4ED3\u5E93\u8BE6\u60C5",
    "Edit repository metadata": "\u7F16\u8F91\u4ED3\u5E93\u5143\u6570\u636E",
    "Share to Profile": "\u5206\u4EAB\u5230\u4E2A\u4EBA\u8D44\u6599",
    "Deploy in progress": "\u90E8\u7F72\u8FDB\u884C\u4E2D",
    "Publish your first package": "\u53D1\u5E03\u4F60\u7684\u7B2C\u4E00\u4E2A\u8F6F\u4EF6\u5305",
    "Open agents panel": "\u6253\u5F00\u4EE3\u7406\u9762\u677F",
    "Manage Cookies": "\u7BA1\u7406 Cookie",
    "Manage cookie preferences": "\u7BA1\u7406 Cookie \u504F\u597D",
    "Close search": "\u5173\u95ED\u641C\u7D22",
    "Show even more": "\u663E\u793A\u66F4\u591A",
    "Comment count": "\u8BC4\u8BBA\u6570",
    "Search for draft items": "\u641C\u7D22\u8349\u7A3F\u9879\u76EE",
    "Sort results": "\u5BF9\u7ED3\u679C\u6392\u5E8F",
    "Update date": "\u66F4\u65B0\u65E5\u671F",
    "Filter by repository": "\u6309\u4ED3\u5E93\u7B5B\u9009",
    "Filter by organization": "\u6309\u7EC4\u7EC7\u7B5B\u9009",
    "Search or jump to": "\u641C\u7D22\u6216\u8DF3\u8F6C\u5230",
    "Open Copilot chat": "\u6253\u5F00 Copilot \u804A\u5929",
    "Search suggestions": "\u641C\u7D22\u5EFA\u8BAE",
    "Choose Date...": "\u9009\u62E9\u65E5\u671F...",
    "Open date picker": "\u6253\u5F00\u65E5\u671F\u9009\u62E9\u5668",
    "Go to month": "\u8F6C\u5230\u6708\u4EFD",
    "Go to previous month": "\u8F6C\u5230\u4E0A\u4E2A\u6708",
    "Go to next month": "\u8F6C\u5230\u4E0B\u4E2A\u6708",
    "Go to today's date": "\u8F6C\u5230\u4ECA\u5929",
    "Choose Date": "\u9009\u62E9\u65E5\u671F",
    "Move item before": "\u5C06\u9879\u76EE\u79FB\u5230\u524D\u9762",
    "Move item after": "\u5C06\u9879\u76EE\u79FB\u5230\u540E\u9762",
    "Move to position": "\u79FB\u52A8\u5230\u4F4D\u7F6E",
    "Move selected items": "\u79FB\u52A8\u9009\u4E2D\u7684\u9879\u76EE",
    "Move selected item": "\u79FB\u52A8\u9009\u4E2D\u7684\u9879\u76EE",
    "Cancel drag mode": "\u53D6\u6D88\u62D6\u62FD\u6A21\u5F0F",
    "Move item one position": "\u5C06\u9879\u76EE\u79FB\u52A8\u4E00\u4E2A\u4F4D\u7F6E",
    "Add a filter": "\u6DFB\u52A0\u7B5B\u9009\u5668",
    "Select a filter": "\u9009\u62E9\u7B5B\u9009\u5668",
    "Filter values": "\u7B5B\u9009\u503C",
    "Enter search text": "\u8F93\u5165\u641C\u7D22\u6587\u672C",
    "Search or filter": "\u641C\u7D22\u6216\u7B5B\u9009",
    "Retry with model": "\u4F7F\u7528\u6A21\u578B\u91CD\u8BD5",
    "Select base branch": "\u9009\u62E9\u57FA\u7840\u5206\u652F",
    "Select an agent": "\u9009\u62E9\u4E00\u4E2A\u4EE3\u7406",
    "Search saved replies": "\u641C\u7D22\u5DF2\u4FDD\u5B58\u7684\u56DE\u590D",
    "Approve plan and start work": "\u6279\u51C6\u8BA1\u5212\u5E76\u5F00\u59CB\u5DE5\u4F5C",
    "View full plan": "\u67E5\u770B\u5B8C\u6574\u8BA1\u5212",
    "Allow all edits this session": "\u5141\u8BB8\u672C\u6B21\u4F1A\u8BDD\u7684\u6240\u6709\u7F16\u8F91",
    "Allow for session": "\u5141\u8BB8\u7528\u4E8E\u4F1A\u8BDD",
    "Show previous permission request": "\u663E\u793A\u4E0A\u4E00\u4E2A\u6743\u9650\u8BF7\u6C42",
    "Show next permission request": "\u663E\u793A\u4E0B\u4E00\u4E2A\u6743\u9650\u8BF7\u6C42",
    "Choose a different template": "\u9009\u62E9\u4E0D\u540C\u7684\u6A21\u677F",
    "Add a title": "\u6DFB\u52A0\u6807\u9898",
    "Create a new issue from scratch": "\u4ECE\u5934\u521B\u5EFA\u65B0\u8BAE\u9898",
    "Report a security vulnerability": "\u62A5\u544A\u5B89\u5168\u6F0F\u6D1E",
    "Edit templates": "\u7F16\u8F91\u6A21\u677F",
    "View templates": "\u67E5\u770B\u6A21\u677F",
    "Generate issue content with Copilot": "\u4F7F\u7528 Copilot \u751F\u6210\u8BAE\u9898\u5185\u5BB9",
    "Generate content": "\u751F\u6210\u5185\u5BB9",
    "Back to all issues": "\u8FD4\u56DE\u6240\u6709\u8BAE\u9898",
    "View token usage": "\u67E5\u770B\u4EE4\u724C\u7528\u91CF",
    "Refresh for latest usage": "\u5237\u65B0\u4EE5\u83B7\u53D6\u6700\u65B0\u7528\u91CF",
    "Edit budget": "\u7F16\u8F91\u9884\u7B97",
    "Copy logs to add in feedback": "\u590D\u5236\u65E5\u5FD7\u4EE5\u6DFB\u52A0\u5230\u53CD\u9988\u4E2D",
    "Learn more about remote session privacy": "\u4E86\u89E3\u5173\u4E8E\u8FDC\u7A0B\u4F1A\u8BDD\u9690\u79C1\u7684\u66F4\u591A\u4FE1\u606F",
    "Dismiss remote session banner": "\u5173\u95ED\u8FDC\u7A0B\u4F1A\u8BDD\u6A2A\u5E45",
    "Copy resume command": "\u590D\u5236\u6062\u590D\u547D\u4EE4",
    "Search all session content by keyword or topic": "\u6309\u5173\u952E\u8BCD\u6216\u4E3B\u9898\u641C\u7D22\u6240\u6709\u4F1A\u8BDD\u5185\u5BB9",
    "Choose repository to clone issue in": "\u9009\u62E9\u8981\u514B\u9686\u8BAE\u9898\u7684\u4ED3\u5E93",
    "Select parent issue": "\u9009\u62E9\u7236\u8BAE\u9898",
    "View message token usage": "\u67E5\u770B\u6D88\u606F\u4EE4\u724C\u7528\u91CF",
    "Copy file name to clipboard": "\u590D\u5236\u6587\u4EF6\u540D\u5230\u526A\u8D34\u677F",
    "Assign to Agent": "\u6307\u6D3E\u7ED9\u4EE3\u7406",
    "Assign to Copilot": "\u6307\u6D3E\u7ED9 Copilot",
    "Comment can not be empty": "\u8BC4\u8BBA\u4E0D\u80FD\u4E3A\u7A7A",
    "View latest session": "\u67E5\u770B\u6700\u8FD1\u7684\u4F1A\u8BDD",
    "View session": "\u67E5\u770B\u4F1A\u8BDD",
    "Choose options": "\u9009\u62E9\u9009\u9879",
    "Assign yourself": "\u6307\u6D3E\u7ED9\u81EA\u5DF1",
    "Choose an iteration": "\u9009\u62E9\u8FED\u4EE3",
    "Move card to column": "\u5C06\u5361\u7247\u79FB\u5230\u5217",
    "Show more project fields": "\u663E\u793A\u66F4\u591A\u9879\u76EE\u5B57\u6BB5",
    "Hide project fields": "\u9690\u85CF\u9879\u76EE\u5B57\u6BB5",
    "Filter types": "\u7B5B\u9009\u7C7B\u578B",
    "Milestone results": "\u91CC\u7A0B\u7891\u7ED3\u679C",
    "Filter option": "\u7B5B\u9009\u9009\u9879",
    "Request timed out": "\u8BF7\u6C42\u8D85\u65F6",
    "Copy response": "\u590D\u5236\u56DE\u590D",
    "Remove queued message": "\u79FB\u9664\u6392\u961F\u4E2D\u7684\u6D88\u606F",
    "Add a Slack reaction": "\u6DFB\u52A0 Slack \u56DE\u5E94",
    "Remove a Slack reaction": "\u79FB\u9664 Slack \u56DE\u5E94",
    "Upload a file to Slack": "\u4E0A\u4F20\u6587\u4EF6\u5230 Slack",
    "Create a Slack code channel": "\u521B\u5EFA Slack \u4EE3\u7801\u9891\u9053",
    "Search repositories on GitHub": "\u5728 GitHub \u4E0A\u641C\u7D22\u4ED3\u5E93",
    "Search code on GitHub": "\u5728 GitHub \u4E0A\u641C\u7D22\u4EE3\u7801",
    "Search pull requests on GitHub": "\u5728 GitHub \u4E0A\u641C\u7D22\u62C9\u53D6\u8BF7\u6C42",
    "Search issues on GitHub": "\u5728 GitHub \u4E0A\u641C\u7D22\u8BAE\u9898",
    "Download GitHub Actions workflow run artifact": "\u4E0B\u8F7D GitHub Actions \u5DE5\u4F5C\u6D41\u8FD0\u884C\u5DE5\u4EF6",
    "Remove comment": "\u79FB\u9664\u8BC4\u8BBA",
    "Search directory": "\u641C\u7D22\u76EE\u5F55",
    "Search file": "\u641C\u7D22\u6587\u4EF6",
    "Reply to comment": "\u56DE\u590D\u8BC4\u8BBA",
    "Create draft pull request": "\u521B\u5EFA\u8349\u7A3F\u62C9\u53D6\u8BF7\u6C42",
    "Try the GitHub Copilot App": "\u8BD5\u8BD5 GitHub Copilot \u5E94\u7528",
    "Download now": "\u7ACB\u5373\u4E0B\u8F7D",
    "Generate with Copilot": "\u4F7F\u7528 Copilot \u751F\u6210",
    "Generate an AGENTS.md file for this repository": "\u4E3A\u6B64\u4ED3\u5E93\u751F\u6210 AGENTS.md \u6587\u4EF6",
    "Try asking Copilot to plan before implementing": "\u5C1D\u8BD5\u8BA9 Copilot \u5728\u5B9E\u73B0\u524D\u5148\u505A\u8BA1\u5212",
    "Remove from queue": "\u4ECE\u961F\u5217\u4E2D\u79FB\u9664",
    "Comment must have a URL to be copied": "\u8BC4\u8BBA\u5FC5\u987B\u5305\u542B URL \u624D\u80FD\u590D\u5236",
    "Update issue": "\u66F4\u65B0\u8BAE\u9898",
    "Block options": "\u5C4F\u853D\u9009\u9879",
    "Hide this user's comments": "\u9690\u85CF\u6B64\u7528\u6237\u7684\u8BC4\u8BBA",
    "Block user from organization": "\u5C4F\u853D\u7EC4\u7EC7\u4E2D\u7684\u7528\u6237",
    "Report submitted": "\u4E3E\u62A5\u5DF2\u63D0\u4EA4",
    "Report to repository admins": "\u5411\u4ED3\u5E93\u7BA1\u7406\u5458\u4E3E\u62A5",
    "Report abuse to GitHub support": "\u5411 GitHub \u652F\u6301\u4E3E\u62A5\u6EE5\u7528",
    "Convert to sub-issue": "\u8F6C\u6362\u4E3A\u5B50\u8BAE\u9898",
    "Enter file contents here": "\u5728\u6B64\u8F93\u5165\u6587\u4EF6\u5185\u5BB9",
    "Manage session": "\u7BA1\u7406\u4F1A\u8BDD",
    "Archive only": "\u4EC5\u5F52\u6863",
    "Archive and close": "\u5F52\u6863\u5E76\u5173\u95ED",
    "Delete session": "\u5220\u9664\u4F1A\u8BDD",
    "Share session": "\u5206\u4EAB\u4F1A\u8BDD",
    "Create file": "\u521B\u5EFA\u6587\u4EF6",
    "View verbose logs": "\u67E5\u770B\u8BE6\u7EC6\u65E5\u5FD7",
    "Copy original prompt": "\u590D\u5236\u539F\u59CB\u63D0\u793A\u8BCD",
    "Open in VS Code": "\u5728 VS Code \u4E2D\u6253\u5F00",
    "Open in VS Code Insiders": "\u5728 VS Code Insiders \u4E2D\u6253\u5F00",
    "Create a codespace": "\u521B\u5EFA codespace",
    "View files changed": "\u67E5\u770B\u66F4\u6539\u7684\u6587\u4EF6",
    "View changed files": "\u67E5\u770B\u66F4\u6539\u7684\u6587\u4EF6",
    "Send a message": "\u53D1\u9001\u6D88\u606F",
    "Back to repositories": "\u8FD4\u56DE\u4ED3\u5E93\u5217\u8868",
    "Search files": "\u641C\u7D22\u6587\u4EF6",
    "Close diff overlay": "\u5173\u95ED\u5DEE\u5F02\u8986\u76D6\u5C42",
    "Close file tree": "\u5173\u95ED\u6587\u4EF6\u6811",
    "Go to pull request": "\u8F6C\u5230\u62C9\u53D6\u8BF7\u6C42",
    "Go to parent conversation": "\u8F6C\u5230\u7236\u5BF9\u8BDD",
    "Open in GitHub Copilot App": "\u5728 GitHub Copilot \u5E94\u7528\u4E2D\u6253\u5F00",
    "Hide templates": "\u9690\u85CF\u6A21\u677F",
    "Show templates": "\u663E\u793A\u6A21\u677F",
    "Copy share link": "\u590D\u5236\u5206\u4EAB\u94FE\u63A5",
    "Close sidebar": "\u5173\u95ED\u4FA7\u8FB9\u680F",
    "Add documentation": "\u6DFB\u52A0\u6587\u6863",
    "Add a new feature": "\u6DFB\u52A0\u65B0\u529F\u80FD",
    "Search authors...": "\u641C\u7D22\u4F5C\u8005...",
    "Filter by session status": "\u6309\u4F1A\u8BDD\u72B6\u6001\u7B5B\u9009",
    "Sort sessions": "\u5BF9\u4F1A\u8BDD\u6392\u5E8F",
    "Filter by detailed session status": "\u6309\u8BE6\u7EC6\u4F1A\u8BDD\u72B6\u6001\u7B5B\u9009",
    "Filter by agent": "\u6309\u4EE3\u7406\u7B5B\u9009",
    "Filter by agent type": "\u6309\u4EE3\u7406\u7C7B\u578B\u7B5B\u9009",
    "Add comment failed": "\u6DFB\u52A0\u8BC4\u8BBA\u5931\u8D25",
    "Delete comment failed": "\u5220\u9664\u8BC4\u8BBA\u5931\u8D25",
    "Update comment failed": "\u66F4\u65B0\u8BC4\u8BBA\u5931\u8D25",
    "Edit issue body": "\u7F16\u8F91\u8BAE\u9898\u6B63\u6587",
    "Copy artifact content": "\u590D\u5236\u5DE5\u4EF6\u5185\u5BB9",
    "Open artifacts": "\u6253\u5F00\u5DE5\u4EF6",
    "Create new artifact": "\u521B\u5EFA\u65B0\u5DE5\u4EF6",
    "Copy as prompt": "\u590D\u5236\u4E3A\u63D0\u793A\u8BCD",
    "Open in coding assistant": "\u5728\u7F16\u7801\u52A9\u624B\u4E2D\u6253\u5F00",
    "Dismiss issue is in transfer notification": "\u5173\u95ED\u8BAE\u9898\u8F6C\u79FB\u901A\u77E5",
    "Show issue details": "\u663E\u793A\u8BAE\u9898\u8BE6\u60C5",
    "Select code repository": "\u9009\u62E9\u4EE3\u7801\u4ED3\u5E93",
    "Link a branch or pull request": "\u5173\u8054\u5206\u652F\u6216\u62C9\u53D6\u8BF7\u6C42",
    "Open branch with GitHub Desktop": "\u4F7F\u7528 GitHub Desktop \u6253\u5F00\u5206\u652F",
    "Create a branch for this issue": "\u4E3A\u6B64\u8BAE\u9898\u521B\u5EFA\u5206\u652F",
    "Choose a source branch": "\u9009\u62E9\u6E90\u5206\u652F",
    "Search alerts...": "\u641C\u7D22\u8B66\u62A5...",
    "Search repositories...": "\u641C\u7D22\u4ED3\u5E93...",
    "Add security alert": "\u6DFB\u52A0\u5B89\u5168\u8B66\u62A5",
    "Hide commit message body": "\u9690\u85CF\u63D0\u4EA4\u4FE1\u606F\u6B63\u6587",
    "Show commit message body": "\u663E\u793A\u63D0\u4EA4\u4FE1\u606F\u6B63\u6587",
    "Delete issue": "\u5220\u9664\u8BAE\u9898",
    "Update comment": "\u66F4\u65B0\u8BC4\u8BBA",
    "Add issue type": "\u6DFB\u52A0\u8BAE\u9898\u7C7B\u578B",
    "Clone issue": "\u514B\u9686\u8BAE\u9898",
    "Edit issue title": "\u7F16\u8F91\u8BAE\u9898\u6807\u9898",
    "Link pull requests": "\u5173\u8054\u62C9\u53D6\u8BF7\u6C42",
    "Add relates to": "\u6DFB\u52A0\u201C\u5173\u8054\u201D\u5173\u7CFB",
    "Create a branch": "\u521B\u5EFA\u5206\u652F",
    "Open in Workspace": "\u5728\u5DE5\u4F5C\u533A\u4E2D\u6253\u5F00",
    "Convert issue to a discussion": "\u5C06\u8BAE\u9898\u8F6C\u6362\u4E3A\u8BA8\u8BBA",
    "View more sub-issue options": "\u67E5\u770B\u66F4\u591A\u5B50\u8BAE\u9898\u9009\u9879",
    "Duplicate sub-issue": "\u590D\u5236\u5B50\u8BAE\u9898",
    "Rename conversation": "\u91CD\u547D\u540D\u5BF9\u8BDD",
    "Convert to file": "\u8F6C\u6362\u4E3A\u6587\u4EF6",
    "Remove attachments": "\u79FB\u9664\u9644\u4EF6",
    "Create a GitHub issue from your conversation": "\u4ECE\u4F60\u7684\u5BF9\u8BDD\u521B\u5EFA GitHub \u8BAE\u9898",
    "Create space": "\u521B\u5EFA Space",
    "Enable feature": "\u542F\u7528\u529F\u80FD",
    "Request access": "\u8BF7\u6C42\u8BBF\u95EE",
    "Select organization to enable access": "\u9009\u62E9\u8981\u542F\u7528\u8BBF\u95EE\u7684\u7EC4\u7EC7",
    "Select organization to request access": "\u9009\u62E9\u8981\u8BF7\u6C42\u8BBF\u95EE\u7684\u7EC4\u7EC7",
    "Filter sessions": "\u7B5B\u9009\u4F1A\u8BDD",
    "Filter by status": "\u6309\u72B6\u6001\u7B5B\u9009",
    "Open session in VS Code": "\u5728 VS Code \u4E2D\u6253\u5F00\u4F1A\u8BDD",
    "Manage overage": "\u7BA1\u7406\u8D85\u989D",
    "Create issues": "\u521B\u5EFA\u8BAE\u9898",
    "Manage item": "\u7BA1\u7406\u9879\u76EE",
    "Manage this item": "\u7BA1\u7406\u6B64\u9879\u76EE",
    "Restore chat": "\u6062\u590D\u804A\u5929",
    "Dismiss chat": "\u5173\u95ED\u804A\u5929",
    "Move chat panel": "\u79FB\u52A8\u804A\u5929\u9762\u677F",
    "Disable custom instructions": "\u7981\u7528\u81EA\u5B9A\u4E49\u8BF4\u660E",
    "Enable custom instructions": "\u542F\u7528\u81EA\u5B9A\u4E49\u8BF4\u660E",
    "Delete conversation": "\u5220\u9664\u5BF9\u8BDD",
    "View all conversations": "\u67E5\u770B\u6240\u6709\u5BF9\u8BDD",
    "Delete tool": "\u5220\u9664\u5DE5\u5177",
    "Add another tool": "\u6DFB\u52A0\u53E6\u4E00\u4E2A\u5DE5\u5177",
    "Update issues": "\u66F4\u65B0\u8BAE\u9898",
    "Remove the blocking dependency from the issue": "\u79FB\u9664\u8BAE\u9898\u7684\u963B\u585E\u4F9D\u8D56",
    "Unlink the sub-issue from its parent issue": "\u53D6\u6D88\u5B50\u8BAE\u9898\u4E0E\u5176\u7236\u8BAE\u9898\u7684\u5173\u8054",
    "Unlink sub-issue": "\u53D6\u6D88\u5B50\u8BAE\u9898\u5173\u8054",
    "Remove the template": "\u79FB\u9664\u6A21\u677F",
    "Update failed": "\u66F4\u65B0\u5931\u8D25",
    "Open diff view settings": "\u6253\u5F00\u5DEE\u5F02\u89C6\u56FE\u8BBE\u7F6E",
    "View files directly within Copilot": "\u76F4\u63A5\u5728 Copilot \u4E2D\u67E5\u770B\u6587\u4EF6",
    "Open resource panel": "\u6253\u5F00\u8D44\u6E90\u9762\u677F",
    "Download all files": "\u4E0B\u8F7D\u6240\u6709\u6587\u4EF6",
    "Close all tabs": "\u5173\u95ED\u6240\u6709\u6807\u7B7E\u9875",
    "Close workbench": "\u5173\u95ED\u5DE5\u4F5C\u53F0",
    "Select trace": "\u9009\u62E9\u8DDF\u8E2A",
    "Copy trace JSON": "\u590D\u5236\u8DDF\u8E2A JSON",
    "Copy request ID": "\u590D\u5236\u8BF7\u6C42 ID",
    "Copy thread ID": "\u590D\u5236\u7EBF\u7A0B ID",
    "Close trace display": "\u5173\u95ED\u8DDF\u8E2A\u663E\u793A",
    "Select a repository to view files": "\u9009\u62E9\u8981\u67E5\u770B\u6587\u4EF6\u7684\u4ED3\u5E93",
    "Select Repo": "\u9009\u62E9\u4ED3\u5E93",
    "Close resource panel": "\u5173\u95ED\u8D44\u6E90\u9762\u677F",
    "View all keyboard shortcuts": "\u67E5\u770B\u6240\u6709\u952E\u76D8\u5FEB\u6377\u952E",
    "Open image thumbnail": "\u6253\u5F00\u56FE\u7247\u7F29\u7565\u56FE",
    "Search Issues and PRs": "\u641C\u7D22\u8BAE\u9898\u548C PR",
    "Create new issue": "\u521B\u5EFA\u65B0\u8BAE\u9898",
    "Add a title for your saved view": "\u4E3A\u4F60\u7684\u5DF2\u4FDD\u5B58\u89C6\u56FE\u6DFB\u52A0\u6807\u9898",
    "Back to views": "\u8FD4\u56DE\u89C6\u56FE",
    "View not found": "\u672A\u627E\u5230\u89C6\u56FE",
    "Filter by milestone": "\u6309\u91CC\u7A0B\u7891\u7B5B\u9009",
    "Filter by assignees": "\u6309\u6307\u6D3E\u5BF9\u8C61\u7B5B\u9009",
    "Filter by issue type": "\u6309\u8BAE\u9898\u7C7B\u578B\u7B5B\u9009",
    "Try adjusting your search filters.": "\u5C1D\u8BD5\u8C03\u6574\u4F60\u7684\u641C\u7D22\u7B5B\u9009\u5668\u3002",
    "Update view with current query": "\u4F7F\u7528\u5F53\u524D\u67E5\u8BE2\u66F4\u65B0\u89C6\u56FE",
    "Back to Milestones": "\u8FD4\u56DE\u91CC\u7A0B\u7891",
    "Close Milestone": "\u5173\u95ED\u91CC\u7A0B\u7891",
    "Back to milestones": "\u8FD4\u56DE\u91CC\u7A0B\u7891",
    "Milestone cannot be loaded.": "\u91CC\u7A0B\u7891\u65E0\u6CD5\u52A0\u8F7D\u3002",
    "Create a milestone": "\u521B\u5EFA\u91CC\u7A0B\u7891",
    "Create milestone": "\u521B\u5EFA\u91CC\u7A0B\u7891",
    "Choose date...": "\u9009\u62E9\u65E5\u671F...",
    "Milestone name": "\u91CC\u7A0B\u7891\u540D\u79F0",
    "Close milestone": "\u5173\u95ED\u91CC\u7A0B\u7891",
    "Edit milestone": "\u7F16\u8F91\u91CC\u7A0B\u7891",
    "Delete milestone": "\u5220\u9664\u91CC\u7A0B\u7891",
    "Copy project": "\u590D\u5236\u9879\u76EE",
    "Select an owner": "\u9009\u62E9\u6240\u6709\u8005",
    "Filter projects by state": "\u6309\u72B6\u6001\u7B5B\u9009\u9879\u76EE",
    "Sort projects by": "\u6309\u4EE5\u4E0B\u65B9\u5F0F\u5BF9\u9879\u76EE\u6392\u5E8F\uFF1A",
    "Search projects": "\u641C\u7D22\u9879\u76EE",
    "Open sidebar": "\u6253\u5F00\u4FA7\u8FB9\u680F",
    "Back to templates": "\u8FD4\u56DE\u6A21\u677F",
    "View all potential duplicates": "\u67E5\u770B\u6240\u6709\u53EF\u80FD\u7684\u91CD\u590D\u9879",
    "Create more": "\u7EE7\u7EED\u521B\u5EFA",
    "Create more sub-issues": "\u7EE7\u7EED\u521B\u5EFA\u5B50\u8BAE\u9898",
    "Dismiss for this repository only": "\u4EC5\u5BF9\u6B64\u4ED3\u5E93\u5173\u95ED",
    "Dismiss for all repositories": "\u5BF9\u6240\u6709\u4ED3\u5E93\u5173\u95ED",
    "Select an emoji": "\u9009\u62E9\u8868\u60C5\u7B26\u53F7",
    "Select an Emoji": "\u9009\u62E9\u8868\u60C5\u7B26\u53F7",
    "Filter Emojis": "\u7B5B\u9009\u8868\u60C5\u7B26\u53F7",
    "Create GitHub App": "\u521B\u5EFA GitHub \u5E94\u7528",
    "GitHub App": "GitHub \u5E94\u7528",
    "GitHub App name": "GitHub \u5E94\u7528\u540D\u79F0",
    "The name of your GitHub App.": "\u4F60\u7684 GitHub \u5E94\u7528\u7684\u540D\u79F0\u3002",
    "Markdown supported": "\u652F\u6301 Markdown",
    "This is displayed to users of your GitHub App": "\u8FD9\u4F1A\u5C55\u793A\u7ED9\u4F60\u7684 GitHub \u5E94\u7528\u7684\u7528\u6237",
    "Homepage URL": "\u4E3B\u9875 URL",
    "The full URL to your GitHub App's website.": "\u4F60\u7684 GitHub \u5E94\u7528\u7F51\u7AD9\u7684\u5B8C\u6574 URL\u3002",
    "Identifying and authorizing users": "\u8BC6\u522B\u5E76\u6388\u6743\u7528\u6237",
    "The URIs to redirect to after a user authorizes your application. You may add up to 10 redirect URIs. Wildcard matching allows tokens to be sent to all subdomains and additional paths of the redirect URI. Only enable this if you are sure you have control over all possible matches.": "\u7528\u6237\u6388\u6743\u4F60\u7684\u5E94\u7528\u540E\u8981\u91CD\u5B9A\u5411\u5230\u7684 URI\u3002\u6700\u591A\u53EF\u6DFB\u52A0 10 \u4E2A\u91CD\u5B9A\u5411 URI\u3002\u901A\u914D\u7B26\u5339\u914D\u5141\u8BB8\u628A\u4EE4\u724C\u53D1\u9001\u5230\u91CD\u5B9A\u5411 URI \u7684\u6240\u6709\u5B50\u57DF\u540D\u548C\u9644\u52A0\u8DEF\u5F84\u3002\u4EC5\u5F53\u4F60\u786E\u5B9A\u80FD\u63A7\u5236\u6240\u6709\u53EF\u80FD\u7684\u5339\u914D\u65F6\u624D\u542F\u7528\u3002",
    "Learn more about secure use of redirect URIs": "\u8FDB\u4E00\u6B65\u4E86\u89E3\u91CD\u5B9A\u5411 URI \u7684\u5B89\u5168\u7528\u6CD5",
    "Add redirect URI": "\u6DFB\u52A0\u91CD\u5B9A\u5411 URI",
    "Redirect URI": "\u91CD\u5B9A\u5411 URI",
    "e.g. https://example.com/auth": "\u4F8B\u5982 https://example.com/auth",
    "Allow wildcard matching": "\u5141\u8BB8\u901A\u914D\u7B26\u5339\u914D",
    "Expire user authorization tokens": "\u7528\u6237\u6388\u6743\u4EE4\u724C\u8FC7\u671F",
    "This will provide a": "\u8FD9\u5C06\u63D0\u4F9B\u4E00\u4E2A",
    "which can be used to request an updated access token when this access token expires.": "\u53EF\u7528\u4E8E\u5728\u6B64\u8BBF\u95EE\u4EE4\u724C\u8FC7\u671F\u65F6\u8BF7\u6C42\u66F4\u65B0\u540E\u7684\u8BBF\u95EE\u4EE4\u724C\u3002",
    "Request user authorization (OAuth) during installation": "\u5B89\u88C5\u671F\u95F4\u8BF7\u6C42\u7528\u6237\u6388\u6743\uFF08OAuth\uFF09",
    "Requests that the installing user": "\u8981\u6C42\u5B89\u88C5\u7528\u6237",
    "grants access to their identity": "\u6388\u4E88\u8BBF\u95EE\u5176\u8EAB\u4EFD\u7684\u6743\u9650",
    "during installation of your App.": "\u5728\u4F60\u7684\u5E94\u7528\u5B89\u88C5\u671F\u95F4\u3002",
    "Enable Device Flow": "\u542F\u7528\u8BBE\u5907\u6D41\u7A0B",
    "Allow this GitHub App to authorize users via the": "\u5141\u8BB8\u6B64 GitHub \u5E94\u7528\u901A\u8FC7",
    "device flow": "\u8BBE\u5907\u6D41\u7A0B",
    "Post installation": "\u5B89\u88C5\u540E",
    "Setup URL (optional)": "\u8BBE\u7F6E URL\uFF08\u53EF\u9009\uFF09",
    "Users will be redirected to this URL after installing your GitHub App to complete additional setup.": "\u7528\u6237\u5B89\u88C5\u4F60\u7684 GitHub \u5E94\u7528\u540E\u4F1A\u88AB\u91CD\u5B9A\u5411\u5230\u6B64 URL\uFF0C\u4EE5\u5B8C\u6210\u989D\u5916\u8BBE\u7F6E\u3002",
    "Redirect on update": "\u66F4\u65B0\u65F6\u91CD\u5B9A\u5411",
    "Redirect users to the 'Setup URL' after installations are updated (E.g. repositories added/removed).": "\u5B89\u88C5\u66F4\u65B0\u540E\uFF08\u4F8B\u5982\u6DFB\u52A0\u6216\u79FB\u9664\u4ED3\u5E93\uFF09\u5C06\u7528\u6237\u91CD\u5B9A\u5411\u5230\u300C\u8BBE\u7F6E URL\u300D\u3002",
    "We will deliver event details when this hook is triggered.": "\u5F53\u6B64\u94A9\u5B50\u89E6\u53D1\u65F6\uFF0C\u6211\u4EEC\u4F1A\u6295\u9012\u4E8B\u4EF6\u8BE6\u60C5\u3002",
    "Webhook URL": "Webhook URL",
    "Events will POST to this URL with a": "\u4E8B\u4EF6\u5C06\u4EE5 POST \u8BF7\u6C42\u53D1\u9001\u5230\u6B64 URL\uFF0C\u5E76\u5E26\u6709",
    Secret: "\u5BC6\u94A5",
    "Set a secret to": "\u8BBE\u7F6E\u5BC6\u94A5\u4EE5",
    "secure your webhooks": "\u4FDD\u62A4\u4F60\u7684 Webhook",
    "SSL verification": "SSL \u9A8C\u8BC1",
    "By default, we verify SSL certificates when delivering payloads.": "\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5728\u6295\u9012\u8D1F\u8F7D\u65F6\u4F1A\u9A8C\u8BC1 SSL \u8BC1\u4E66\u3002",
    "Enable SSL verification": "\u542F\u7528 SSL \u9A8C\u8BC1",
    "(not recommended)": "\uFF08\u4E0D\u63A8\u8350\uFF09",
    "Are you sure?": "\u786E\u5B9A\u5417\uFF1F",
    ": Disabling SSL verification has serious implications.": "\uFF1A\u7981\u7528 SSL \u9A8C\u8BC1\u4F1A\u5E26\u6765\u4E25\u91CD\u540E\u679C\u3002",
    "SSL verification helps ensure that hook payloads are delivered to your URL endpoint securely, keeping your data away from prying eyes. Disabling this option is": "SSL \u9A8C\u8BC1\u6709\u52A9\u4E8E\u786E\u4FDD\u94A9\u5B50\u8D1F\u8F7D\u5B89\u5168\u5730\u6295\u9012\u5230\u4F60\u7684 URL \u7AEF\u70B9\uFF0C\u907F\u514D\u6570\u636E\u88AB\u7AA5\u63A2\u3002\u7981\u7528\u6B64\u9009\u9879",
    "not recommended": "\u4E0D\u63A8\u8350",
    "Disable, I understand my webhooks may not be secure": "\u7981\u7528\uFF0C\u6211\u4E86\u89E3\u6211\u7684 Webhook \u53EF\u80FD\u4E0D\u5B89\u5168",
    These: "\u8FD9\u4E9B",
    "user permissions": "\u7528\u6237\u6743\u9650",
    "are granted on an individual user basis as part of the": "\u662F\u6309\u5355\u4E2A\u7528\u6237\u6388\u4E88\u7684\uFF0C\u5C5E\u4E8E",
    "user authorization flow": "\u7528\u6237\u6388\u6743\u6D41\u7A0B",
    "Repository permissions": "\u4ED3\u5E93\u6743\u9650",
    "Organization permissions": "\u7EC4\u7EC7\u6743\u9650",
    "Account permissions": "\u8D26\u6237\u6743\u9650",
    "Enterprise permissions": "\u4F01\u4E1A\u6743\u9650",
    "Repository permissions permit access to repositories and related resources.": "\u4ED3\u5E93\u6743\u9650\u5141\u8BB8\u8BBF\u95EE\u4ED3\u5E93\u53CA\u76F8\u5173\u8D44\u6E90\u3002",
    "Organization permissions permit access to organization related resources.": "\u7EC4\u7EC7\u6743\u9650\u5141\u8BB8\u8BBF\u95EE\u7EC4\u7EC7\u76F8\u5173\u8D44\u6E90\u3002",
    "These permissions are granted on an individual user basis as part of the User authorization flow.": "\u8FD9\u4E9B\u6743\u9650\u662F\u6309\u5355\u4E2A\u7528\u6237\u6388\u4E88\u7684\uFF0C\u5C5E\u4E8E\u7528\u6237\u6388\u6743\u6D41\u7A0B\u7684\u4E00\u90E8\u5206\u3002",
    "Enterprise permissions permit access to enterprise account resources.": "\u4F01\u4E1A\u6743\u9650\u5141\u8BB8\u8BBF\u95EE\u4F01\u4E1A\u8D26\u6237\u8D44\u6E90\u3002",
    selected: "\u5DF2\u9009\u62E9",
    mandatory: "\u5FC5\u9700",
    Mandatory: "\u5FC5\u9700",
    "Access:": "\u8BBF\u95EE\u6743\u9650\uFF1A",
    "Can't be used for Agentic Apps": "\u4E0D\u80FD\u7528\u4E8E Agentic \u5E94\u7528",
    "This is a mandatory permission and cannot be changed": "\u8FD9\u662F\u5FC5\u9700\u6743\u9650\uFF0C\u65E0\u6CD5\u66F4\u6539",
    Administration: "\u7BA1\u7406",
    "Repository creation, deletion, settings, teams, and collaborators.": "\u4ED3\u5E93\u521B\u5EFA\u3001\u5220\u9664\u3001\u8BBE\u7F6E\u3001\u56E2\u961F\u548C\u534F\u4F5C\u8005\u3002",
    "Agent secrets": "Agent \u673A\u5BC6",
    "Manage agent repository secrets.": "\u7BA1\u7406 Agent \u4ED3\u5E93\u673A\u5BC6\u3002",
    "Agent tasks": "Agent \u4EFB\u52A1",
    "View, create, and manage agent tasks in a repository.": "\u67E5\u770B\u3001\u521B\u5EFA\u548C\u7BA1\u7406\u4ED3\u5E93\u4E2D\u7684 Agent \u4EFB\u52A1\u3002",
    "Agent variables": "Agent \u53D8\u91CF",
    "Manage agent repository variables.": "\u7BA1\u7406 Agent \u4ED3\u5E93\u53D8\u91CF\u3002",
    "Artifact metadata": "\u6784\u4EF6\u5143\u6570\u636E",
    "Create and retrieve artifact metadata for a repository.": "\u521B\u5EFA\u5E76\u83B7\u53D6\u4ED3\u5E93\u7684\u6784\u4EF6\u5143\u6570\u636E\u3002",
    Attestations: "\u8BC1\u660E",
    "Create and retrieve attestations for a repository.": "\u521B\u5EFA\u5E76\u83B7\u53D6\u4ED3\u5E93\u7684\u8BC1\u660E\u3002",
    "Workflows, workflow runs and artifacts.": "\u5DE5\u4F5C\u6D41\u3001\u5DE5\u4F5C\u6D41\u8FD0\u884C\u548C\u6784\u4EF6\u3002",
    "Code quality": "\u4EE3\u7801\u8D28\u91CF",
    "Access and manage code quality data for a repository.": "\u8BBF\u95EE\u5E76\u7BA1\u7406\u4ED3\u5E93\u7684\u4EE3\u7801\u8D28\u91CF\u6570\u636E\u3002",
    "Code scanning alerts": "\u4EE3\u7801\u626B\u63CF\u8B66\u62A5",
    "View and manage code scanning alerts.": "\u67E5\u770B\u5E76\u7BA1\u7406\u4EE3\u7801\u626B\u63CF\u8B66\u62A5\u3002",
    "Create, edit, delete and list Codespaces.": "\u521B\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u548C\u5217\u51FA Codespaces\u3002",
    "Codespaces lifecycle admin": "Codespaces \u751F\u547D\u5468\u671F\u7BA1\u7406",
    "Manage the lifecycle of Codespaces, including starting and stopping.": "\u7BA1\u7406 Codespaces \u7684\u751F\u547D\u5468\u671F\uFF0C\u5305\u62EC\u542F\u52A8\u548C\u505C\u6B62\u3002",
    "Codespaces metadata": "Codespaces \u5143\u6570\u636E",
    "Access Codespaces metadata including the devcontainers and machine type.": "\u8BBF\u95EE Codespaces \u5143\u6570\u636E\uFF0C\u5305\u62EC devcontainer \u548C\u673A\u5668\u7C7B\u578B\u3002",
    "Codespaces secrets": "Codespaces \u673A\u5BC6",
    "Restrict Codespaces user secrets modifications to specific repositories.": "\u5C06 Codespaces \u7528\u6237\u673A\u5BC6\u7684\u4FEE\u6539\u9650\u5236\u5728\u7279\u5B9A\u4ED3\u5E93\u3002",
    "Commit statuses": "\u63D0\u4EA4\u72B6\u6001",
    "Commit statuses.": "\u63D0\u4EA4\u72B6\u6001\u3002",
    Contents: "\u5185\u5BB9",
    "Repository contents, commits, branches, downloads, releases, and merges.": "\u4ED3\u5E93\u5185\u5BB9\u3001\u63D0\u4EA4\u3001\u5206\u652F\u3001\u4E0B\u8F7D\u3001\u7248\u672C\u53D1\u5E03\u548C\u5408\u5E76\u3002",
    "Copilot agent settings": "Copilot Agent \u8BBE\u7F6E",
    "View and manage Copilot cloud agent settings for a repository.": "\u67E5\u770B\u5E76\u7BA1\u7406\u4ED3\u5E93\u7684 Copilot \u4E91\u7AEF Agent \u8BBE\u7F6E\u3002",
    "Read and write repository custom properties values at the repository level, when allowed by the property.": "\u5728\u5C5E\u6027\u5141\u8BB8\u7684\u524D\u63D0\u4E0B\uFF0C\u5728\u4ED3\u5E93\u7EA7\u522B\u8BFB\u5199\u4ED3\u5E93\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u503C\u3002",
    "Retrieve Dependabot alerts.": "\u83B7\u53D6 Dependabot \u8B66\u62A5\u3002",
    "Manage Dependabot repository secrets.": "\u7BA1\u7406 Dependabot \u4ED3\u5E93\u673A\u5BC6\u3002",
    "Deployments and deployment statuses.": "\u90E8\u7F72\u548C\u90E8\u7F72\u72B6\u6001\u3002",
    "Discussions and related comments and labels.": "\u8BA8\u8BBA\u53CA\u76F8\u5173\u8BC4\u8BBA\u548C\u6807\u7B7E\u3002",
    "Manage repository environments.": "\u7BA1\u7406\u4ED3\u5E93\u73AF\u5883\u3002",
    "GitHub App installation repository access": "GitHub \u5E94\u7528\u5B89\u88C5\u4ED3\u5E93\u8BBF\u95EE\u6743\u9650",
    "Manage which GitHub Apps can access a repository": "\u7BA1\u7406\u54EA\u4E9B GitHub \u5E94\u7528\u53EF\u4EE5\u8BBF\u95EE\u4ED3\u5E93",
    "Issues and related comments, assignees, labels, and milestones.": "\u8BAE\u9898\u53CA\u76F8\u5173\u8BC4\u8BBA\u3001\u53D7\u7406\u4EBA\u3001\u6807\u7B7E\u548C\u91CC\u7A0B\u7891\u3002",
    "License compliance alerts": "\u8BB8\u53EF\u8BC1\u5408\u89C4\u8B66\u62A5",
    "Retrieve license compliance alerts.": "\u83B7\u53D6\u8BB8\u53EF\u8BC1\u5408\u89C4\u8B66\u62A5\u3002",
    "Merge queues": "\u5408\u5E76\u961F\u5217",
    "Manage a repository's merge queues": "\u7BA1\u7406\u4ED3\u5E93\u7684\u5408\u5E76\u961F\u5217",
    "Search repositories, list collaborators, and access repository metadata.": "\u641C\u7D22\u4ED3\u5E93\u3001\u5217\u51FA\u534F\u4F5C\u8005\u5E76\u8BBF\u95EE\u4ED3\u5E93\u5143\u6570\u636E\u3002",
    "Packages published to the GitHub Package Platform.": "\u53D1\u5E03\u5230 GitHub Packages \u5E73\u53F0\u7684\u8F6F\u4EF6\u5305\u3002",
    "Retrieve Pages statuses, configuration, and builds, as well as create new builds.": "\u83B7\u53D6 Pages \u72B6\u6001\u3001\u914D\u7F6E\u548C\u6784\u5EFA\uFF0C\u4EE5\u53CA\u521B\u5EFA\u65B0\u6784\u5EFA\u3002",
    "Manage classic projects within a repository.": "\u7BA1\u7406\u4ED3\u5E93\u5185\u7684\u7ECF\u5178\u9879\u76EE\u3002",
    "Pull requests and related comments, assignees, labels, milestones, and merges.": "\u62C9\u53D6\u8BF7\u6C42\u53CA\u76F8\u5173\u8BC4\u8BBA\u3001\u53D7\u7406\u4EBA\u3001\u6807\u7B7E\u3001\u91CC\u7A0B\u7891\u548C\u5408\u5E76\u3002",
    "Repository creation": "\u521B\u5EFA\u4ED3\u5E93",
    "Create repositories.": "\u521B\u5EFA\u4ED3\u5E93\u3002",
    "Repository license policy": "\u4ED3\u5E93\u8BB8\u53EF\u8BC1\u7B56\u7565",
    "View the repository license policy and check package compliance.": "\u67E5\u770B\u4ED3\u5E93\u8BB8\u53EF\u8BC1\u7B56\u7565\u5E76\u68C0\u67E5\u8F6F\u4EF6\u5305\u5408\u89C4\u6027\u3002",
    "Repository security advisories": "\u4ED3\u5E93\u5B89\u5168\u516C\u544A",
    "View and manage repository security advisories.": "\u67E5\u770B\u5E76\u7BA1\u7406\u4ED3\u5E93\u5B89\u5168\u516C\u544A\u3002",
    "Secret scanning alert dismissal requests": "\u673A\u5BC6\u626B\u63CF\u8B66\u62A5\u5173\u95ED\u8BF7\u6C42",
    "View and manage secret scanning alert dismissal requests": "\u67E5\u770B\u5E76\u7BA1\u7406\u673A\u5BC6\u626B\u63CF\u8B66\u62A5\u5173\u95ED\u8BF7\u6C42",
    "Review and manage secret scanning alert dismissal requests": "\u5BA1\u67E5\u5E76\u7BA1\u7406\u673A\u5BC6\u626B\u63CF\u8B66\u62A5\u5173\u95ED\u8BF7\u6C42",
    "Secret scanning alerts": "\u673A\u5BC6\u626B\u63CF\u8B66\u62A5",
    "View and manage secret scanning alerts.": "\u67E5\u770B\u5E76\u7BA1\u7406\u673A\u5BC6\u626B\u63CF\u8B66\u62A5\u3002",
    "Secret scanning push protection bypass requests": "\u673A\u5BC6\u626B\u63CF\u63A8\u9001\u4FDD\u62A4\u7ED5\u8FC7\u8BF7\u6C42",
    "Review and manage repository secret scanning push protection bypass requests.": "\u5BA1\u67E5\u5E76\u7BA1\u7406\u4ED3\u5E93\u673A\u5BC6\u626B\u63CF\u63A8\u9001\u4FDD\u62A4\u7ED5\u8FC7\u8BF7\u6C42\u3002",
    "Manage Actions repository secrets.": "\u7BA1\u7406 Actions \u4ED3\u5E93\u673A\u5BC6\u3002",
    "Single file": "\u5355\u4E2A\u6587\u4EF6",
    "Manage just a single file.": "\u4EC5\u7BA1\u7406\u5355\u4E2A\u6587\u4EF6\u3002",
    Path: "\u8DEF\u5F84",
    "Add path": "\u6DFB\u52A0\u8DEF\u5F84",
    "The content paths to single files your app can access.": "\u4F60\u7684\u5E94\u7528\u53EF\u8BBF\u95EE\u7684\u5355\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u8DEF\u5F84\u3002",
    "One or more paths were too long (maximum is 255 characters)": "\u4E00\u4E2A\u6216\u591A\u4E2A\u8DEF\u5F84\u8FC7\u957F\uFF08\u6700\u591A 255 \u4E2A\u5B57\u7B26\uFF09",
    "One or more paths contain invalid characters": "\u4E00\u4E2A\u6216\u591A\u4E2A\u8DEF\u5F84\u5305\u542B\u65E0\u6548\u5B57\u7B26",
    "Manage Actions repository variables.": "\u7BA1\u7406 Actions \u4ED3\u5E93\u53D8\u91CF\u3002",
    "Manage the post-receive hooks for a repository.": "\u7BA1\u7406\u4ED3\u5E93\u7684 post-receive \u94A9\u5B50\u3002",
    "Update GitHub Action workflow files.": "\u66F4\u65B0 GitHub Actions \u5DE5\u4F5C\u6D41\u6587\u4EF6\u3002",
    "API Insights": "API \u6D1E\u5BDF",
    "View statistics on how the API is being used for an organization.": "\u67E5\u770B\u7EC4\u7EC7 API \u4F7F\u7528\u60C5\u51B5\u7684\u7EDF\u8BA1\u3002",
    "Manage access to an organization.": "\u7BA1\u7406\u5BF9\u7EC4\u7EC7\u7684\u8BBF\u95EE\u6743\u9650\u3002",
    "Manage agent organization secrets.": "\u7BA1\u7406 Agent \u7EC4\u7EC7\u673A\u5BC6\u3002",
    "Manage agent organization variables.": "\u7BA1\u7406 Agent \u7EC4\u7EC7\u53D8\u91CF\u3002",
    "Blocking users": "\u5C4F\u853D\u7528\u6237",
    "View and manage users blocked by the organization.": "\u67E5\u770B\u5E76\u7BA1\u7406\u88AB\u7EC4\u7EC7\u5C4F\u853D\u7684\u7528\u6237\u3002",
    Campaigns: "\u6D3B\u52A8",
    "Manage campaigns.": "\u7BA1\u7406\u6D3B\u52A8\u3002",
    "View and manage Copilot Spaces for an organization.": "\u67E5\u770B\u5E76\u7BA1\u7406\u7EC4\u7EC7\u7684 Copilot Spaces\u3002",
    "Manage Copilot cloud agent settings for an organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684 Copilot \u4E91\u7AEF Agent \u8BBE\u7F6E\u3002",
    "Copilot content exclusion": "Copilot \u5185\u5BB9\u6392\u9664",
    "Manage Copilot content exclusion rules for the organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684 Copilot \u5185\u5BB9\u6392\u9664\u89C4\u5219\u3002",
    "Custom organization roles": "\u81EA\u5B9A\u4E49\u7EC4\u7EC7\u89D2\u8272",
    "Create, edit, delete and list custom organization roles. View system organization roles.": "\u521B\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u548C\u5217\u51FA\u81EA\u5B9A\u4E49\u7EC4\u7EC7\u89D2\u8272\uFF0C\u5E76\u53EF\u67E5\u770B\u7CFB\u7EDF\u7EC4\u7EC7\u89D2\u8272\u3002",
    "Read and write repository custom properties values and administer definitions at the organization level.": "\u5728\u7EC4\u7EC7\u7EA7\u522B\u8BFB\u5199\u4ED3\u5E93\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u503C\u5E76\u7BA1\u7406\u5176\u5B9A\u4E49\u3002",
    "Custom properties for organizations": "\u7EC4\u7EC7\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027",
    "Read and write organization custom properties values at the organization level, when allowed by the property.": "\u5728\u5C5E\u6027\u5141\u8BB8\u7684\u524D\u63D0\u4E0B\uFF0C\u5728\u7EC4\u7EC7\u7EA7\u522B\u8BFB\u5199\u7EC4\u7EC7\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u503C\u3002",
    "Custom repository roles": "\u81EA\u5B9A\u4E49\u4ED3\u5E93\u89D2\u8272",
    "Create, edit, delete and list custom repository roles.": "\u521B\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u548C\u5217\u51FA\u81EA\u5B9A\u4E49\u4ED3\u5E93\u89D2\u8272\u3002",
    "View events triggered by an activity in an organization.": "\u67E5\u770B\u7EC4\u7EC7\u5185\u6D3B\u52A8\u89E6\u53D1\u7684\u4E8B\u4EF6\u3002",
    "External custom properties for repositories": "\u4ED3\u5E93\u7684\u5916\u90E8\u81EA\u5B9A\u4E49\u5C5E\u6027",
    "View and edit external custom properties for repositories, and manage the app installations that provide them, at the organization level.": "\u5728\u7EC4\u7EC7\u7EA7\u522B\u67E5\u770B\u5E76\u7F16\u8F91\u4ED3\u5E93\u7684\u5916\u90E8\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5E76\u7BA1\u7406\u63D0\u4F9B\u8FD9\u4E9B\u5C5E\u6027\u7684\u5E94\u7528\u5B89\u88C5\u3002",
    "GitHub Copilot Business": "GitHub Copilot Business",
    "Manage Copilot Business seats and settings": "\u7BA1\u7406 Copilot Business \u5E2D\u4F4D\u4E0E\u8BBE\u7F6E",
    "Hosted runner custom images": "\u6258\u7BA1\u8FD0\u884C\u5668\u81EA\u5B9A\u4E49\u955C\u50CF",
    "View and manage hosted runner custom images available to an organization.": "\u67E5\u770B\u5E76\u7BA1\u7406\u7EC4\u7EC7\u53EF\u7528\u7684\u6258\u7BA1\u8FD0\u884C\u5668\u81EA\u5B9A\u4E49\u955C\u50CF\u3002",
    "Issue Fields": "\u8BAE\u9898\u5B57\u6BB5",
    "Manage issue fields for an organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684\u8BAE\u9898\u5B57\u6BB5\u3002",
    "Issue Types": "\u8BAE\u9898\u7C7B\u578B",
    "Manage issue types for an organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684\u8BAE\u9898\u7C7B\u578B\u3002",
    "Organization members and teams.": "\u7EC4\u7EC7\u6210\u5458\u548C\u56E2\u961F\u3002",
    "Manage model access for an organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684\u6A21\u578B\u8BBF\u95EE\u6743\u9650\u3002",
    "Network configurations": "\u7F51\u7EDC\u914D\u7F6E",
    "View and manage hosted compute network configurations available to an organization.": "\u67E5\u770B\u5E76\u7BA1\u7406\u7EC4\u7EC7\u53EF\u7528\u7684\u6258\u7BA1\u8BA1\u7B97\u7F51\u7EDC\u914D\u7F6E\u3002",
    "Organization Copilot metrics": "\u7EC4\u7EC7 Copilot \u6307\u6807",
    "View organization Copilot metrics.": "\u67E5\u770B\u7EC4\u7EC7 Copilot \u6307\u6807\u3002",
    "Organization announcement banners": "\u7EC4\u7EC7\u516C\u544A\u6A2A\u5E45",
    "View and modify announcement banners for an organization.": "\u67E5\u770B\u5E76\u4FEE\u6539\u7EC4\u7EC7\u7684\u516C\u544A\u6A2A\u5E45\u3002",
    "Organization bypass requests for secret scanning": "\u7EC4\u7EC7\u7684\u673A\u5BC6\u626B\u63CF\u7ED5\u8FC7\u8BF7\u6C42",
    "Review and manage secret scanning push protection bypass requests.": "\u5BA1\u67E5\u5E76\u7BA1\u7406\u673A\u5BC6\u626B\u63CF\u63A8\u9001\u4FDD\u62A4\u7ED5\u8FC7\u8BF7\u6C42\u3002",
    "Organization codespaces": "\u7EC4\u7EC7 Codespaces",
    "Manage Codespaces for an organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684 Codespaces\u3002",
    "Organization codespaces secrets": "\u7EC4\u7EC7 Codespaces \u673A\u5BC6",
    "Manage Codespaces Secrets for an organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684 Codespaces \u673A\u5BC6\u3002",
    "Organization codespaces settings": "\u7EC4\u7EC7 Codespaces \u8BBE\u7F6E",
    "Manage Codespaces settings for an organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684 Codespaces \u8BBE\u7F6E\u3002",
    "Organization credentials": "\u7EC4\u7EC7\u51ED\u636E",
    "View and manage organization credentials": "\u67E5\u770B\u5E76\u7BA1\u7406\u7EC4\u7EC7\u51ED\u636E",
    "Organization dependabot secrets": "\u7EC4\u7EC7 Dependabot \u673A\u5BC6",
    "Manage Dependabot organization secrets.": "\u7BA1\u7406 Dependabot \u7EC4\u7EC7\u673A\u5BC6\u3002",
    "Organization dismissal requests for Dependabot": "\u7EC4\u7EC7\u7684 Dependabot \u5173\u95ED\u8BF7\u6C42",
    "Review and manage Dependabot alert dismissal requests.": "\u5BA1\u67E5\u5E76\u7BA1\u7406 Dependabot \u8B66\u62A5\u5173\u95ED\u8BF7\u6C42\u3002",
    "Organization dismissal requests for code scanning": "\u7EC4\u7EC7\u7684\u4EE3\u7801\u626B\u63CF\u5173\u95ED\u8BF7\u6C42",
    "Review and manage code scanning alert dismissal requests.": "\u5BA1\u67E5\u5E76\u7BA1\u7406\u4EE3\u7801\u626B\u63CF\u8B66\u62A5\u5173\u95ED\u8BF7\u6C42\u3002",
    "Organization innersource vulnerabilities": "\u7EC4\u7EC7\u5185\u6E90\u6F0F\u6D1E",
    "View and manage innersource vulnerabilities across the organization": "\u67E5\u770B\u5E76\u7BA1\u7406\u6574\u4E2A\u7EC4\u7EC7\u7684\u5185\u6E90\u6F0F\u6D1E",
    "Organization private registries": "\u7EC4\u7EC7\u79C1\u6709\u6CE8\u518C\u8868",
    "Manage private registries for an organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684\u79C1\u6709\u6CE8\u518C\u8868\u3002",
    "Personal access token requests": "\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u8BF7\u6C42",
    "Manage personal access token requests from organization members.": "\u7BA1\u7406\u7EC4\u7EC7\u6210\u5458\u7684\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u8BF7\u6C42\u3002",
    "View and revoke personal access tokens that have been granted access to an organization.": "\u67E5\u770B\u5E76\u64A4\u9500\u5DF2\u88AB\u6388\u4E88\u7EC4\u7EC7\u8BBF\u95EE\u6743\u9650\u7684\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u3002",
    "View an organization's plan.": "\u67E5\u770B\u7EC4\u7EC7\u7684\u65B9\u6848\u3002",
    "Manage projects for an organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684\u9879\u76EE\u3002",
    "Manage Actions organization secrets.": "\u7BA1\u7406 Actions \u7EC4\u7EC7\u673A\u5BC6\u3002",
    "Self-hosted runners": "\u81EA\u6258\u7BA1\u8FD0\u884C\u5668",
    "View and manage Actions self-hosted runners available to an organization.": "\u67E5\u770B\u5E76\u7BA1\u7406\u7EC4\u7EC7\u53EF\u7528\u7684 Actions \u81EA\u6258\u7BA1\u8FD0\u884C\u5668\u3002",
    "Manage Actions organization variables.": "\u7BA1\u7406 Actions \u7EC4\u7EC7\u53D8\u91CF\u3002",
    "Manage the post-receive hooks for an organization.": "\u7BA1\u7406\u7EC4\u7EC7\u7684 post-receive \u94A9\u5B50\u3002",
    "Block another user": "\u5C4F\u853D\u5176\u4ED6\u7528\u6237",
    "View and manage users blocked by the user.": "\u67E5\u770B\u5E76\u7BA1\u7406\u8BE5\u7528\u6237\u5C4F\u853D\u7684\u7528\u6237\u3002",
    "Codespaces user secrets": "Codespaces \u7528\u6237\u673A\u5BC6",
    "Manage Codespaces user secrets.": "\u7BA1\u7406 Codespaces \u7528\u6237\u673A\u5BC6\u3002",
    "This application will receive your GitHub ID, your GitHub Copilot Chat session messages (not including messages sent to another application), and timestamps of provided GitHub Copilot Chat session messages. This permission must be enabled for Copilot Extensions.": "\u6B64\u5E94\u7528\u5C06\u6536\u5230\u4F60\u7684 GitHub ID\u3001\u4F60\u7684 GitHub Copilot Chat \u4F1A\u8BDD\u6D88\u606F\uFF08\u4E0D\u542B\u53D1\u9001\u7ED9\u5176\u4ED6\u5E94\u7528\u7684\u6D88\u606F\uFF09\u4EE5\u53CA\u63D0\u4F9B\u8FD9\u4E9B\u6D88\u606F\u7684\u65F6\u95F4\u6233\u3002Copilot \u6269\u5C55\u5FC5\u987B\u542F\u7528\u6B64\u6743\u9650\u3002",
    "Copilot Editor Context": "Copilot \u7F16\u8F91\u5668\u4E0A\u4E0B\u6587",
    "This application will receive bits of Editor Context (e.g. currently opened file) whenever you send it a message through Copilot Chat.": "\u5F53\u4F60\u901A\u8FC7 Copilot Chat \u5411\u6B64\u5E94\u7528\u53D1\u9001\u6D88\u606F\u65F6\uFF0C\u5B83\u4F1A\u6536\u5230\u90E8\u5206\u7F16\u8F91\u5668\u4E0A\u4E0B\u6587\uFF08\u4F8B\u5982\u5F53\u524D\u6253\u5F00\u7684\u6587\u4EF6\uFF09\u3002",
    "Email addresses": "\u90AE\u7BB1\u5730\u5740",
    "Manage a user's email addresses.": "\u7BA1\u7406\u7528\u6237\u7684\u90AE\u7BB1\u5730\u5740\u3002",
    "View events triggered by a user's activity.": "\u67E5\u770B\u7528\u6237\u6D3B\u52A8\u89E6\u53D1\u7684\u4E8B\u4EF6\u3002",
    "A user's followers": "\u7528\u6237\u7684\u5173\u6CE8\u8005",
    "View and manage a user's GPG keys.": "\u67E5\u770B\u5E76\u7BA1\u7406\u7528\u6237\u7684 GPG \u5BC6\u94A5\u3002",
    "Create and modify a user's gists and comments.": "\u521B\u5EFA\u5E76\u4FEE\u6539\u7528\u6237\u7684 Gist \u548C\u8BC4\u8BBA\u3002",
    "Git SSH keys": "Git SSH \u5BC6\u94A5",
    "Interaction limits on repositories": "\u4ED3\u5E93\u4E0A\u7684\u4EA4\u4E92\u9650\u5236",
    "Manage issue fields for a user.": "\u7BA1\u7406\u7528\u6237\u7684\u8BAE\u9898\u5B57\u6BB5\u3002",
    "Manage issue types for a user.": "\u7BA1\u7406\u7528\u6237\u7684\u8BAE\u9898\u7C7B\u578B\u3002",
    "Allows access to GitHub Models.": "\u5141\u8BB8\u8BBF\u95EE GitHub Models\u3002",
    "View a user's plan.": "\u67E5\u770B\u7528\u6237\u7684\u65B9\u6848\u3002",
    "Plugin gateway connections": "\u63D2\u4EF6\u7F51\u5173\u8FDE\u63A5",
    "Manage plugin gateway connections, their MCP configuration, and MCP invocation through them.": "\u7BA1\u7406\u63D2\u4EF6\u7F51\u5173\u8FDE\u63A5\u3001\u5B83\u4EEC\u7684 MCP \u914D\u7F6E\u4EE5\u53CA\u901A\u8FC7\u5B83\u4EEC\u7684 MCP \u8C03\u7528\u3002",
    "Manage a user's profile settings.": "\u7BA1\u7406\u7528\u6237\u7684\u8D44\u6599\u8BBE\u7F6E\u3002",
    "SSH signing keys": "SSH \u7B7E\u540D\u5BC6\u94A5",
    "View and manage a user's SSH signing keys.": "\u67E5\u770B\u5E76\u7BA1\u7406\u7528\u6237\u7684 SSH \u7B7E\u540D\u5BC6\u94A5\u3002",
    Starring: "\u661F\u6807",
    "List and manage repositories a user is starring.": "\u5217\u51FA\u5E76\u7BA1\u7406\u7528\u6237\u661F\u6807\u7684\u4ED3\u5E93\u3002",
    "List and change repositories a user is subscribed to.": "\u5217\u51FA\u5E76\u66F4\u6539\u7528\u6237\u8BA2\u9605\u7684\u4ED3\u5E93\u3002",
    "Copilot usage records": "Copilot \u4F7F\u7528\u8BB0\u5F55",
    "View enterprise Copilot API usage records.": "\u67E5\u770B\u4F01\u4E1A Copilot API \u4F7F\u7528\u8BB0\u5F55\u3002",
    "Custom enterprise roles": "\u81EA\u5B9A\u4E49\u4F01\u4E1A\u89D2\u8272",
    "Manage enterprise custom roles and assignments.": "\u7BA1\u7406\u4F01\u4E1A\u81EA\u5B9A\u4E49\u89D2\u8272\u4E0E\u5206\u914D\u3002",
    "View repository custom properties and administer definitions at the enterprise level.": "\u5728\u4F01\u4E1A\u7EA7\u522B\u67E5\u770B\u4ED3\u5E93\u81EA\u5B9A\u4E49\u5C5E\u6027\u5E76\u7BA1\u7406\u5176\u5B9A\u4E49\u3002",
    "Enterprise AI controls": "\u4F01\u4E1A AI \u63A7\u5236",
    "Manage enterprise-wide AI controls configuration": "\u7BA1\u7406\u4F01\u4E1A\u8303\u56F4\u7684 AI \u63A7\u5236\u914D\u7F6E",
    "Enterprise Copilot metrics": "\u4F01\u4E1A Copilot \u6307\u6807",
    "View enterprise Copilot metrics.": "\u67E5\u770B\u4F01\u4E1A Copilot \u6307\u6807\u3002",
    "Enterprise SCIM": "\u4F01\u4E1A SCIM",
    "View and manage enterprise SCIM configuration in an Enterprise Managed User enterprise.": "\u5728 Enterprise Managed User \u4F01\u4E1A\u4E2D\u67E5\u770B\u5E76\u7BA1\u7406\u4F01\u4E1A SCIM \u914D\u7F6E\u3002",
    "Enterprise billing": "\u4F01\u4E1A\u8BA1\u8D39",
    "Access usage, budgets, cost centers, and payment information for the enterprise": "\u8BBF\u95EE\u4F01\u4E1A\u7684\u7528\u91CF\u3001\u9884\u7B97\u3001\u6210\u672C\u4E2D\u5FC3\u548C\u4ED8\u6B3E\u4FE1\u606F",
    "Enterprise credentials": "\u4F01\u4E1A\u51ED\u636E",
    "View and manage enterprise credentials": "\u67E5\u770B\u5E76\u7BA1\u7406\u4F01\u4E1A\u51ED\u636E",
    "Enterprise custom organization roles": "\u4F01\u4E1A\u81EA\u5B9A\u4E49\u7EC4\u7EC7\u89D2\u8272",
    "Create, edit, delete and list custom organization roles at the enterprise level. View system organization roles.": "\u5728\u4F01\u4E1A\u7EA7\u522B\u521B\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u548C\u5217\u51FA\u81EA\u5B9A\u4E49\u7EC4\u7EC7\u89D2\u8272\uFF0C\u5E76\u53EF\u67E5\u770B\u7CFB\u7EDF\u7EC4\u7EC7\u89D2\u8272\u3002",
    "Enterprise custom properties for organizations": "\u7EC4\u7EC7\u7684\u4F01\u4E1A\u81EA\u5B9A\u4E49\u5C5E\u6027",
    "View organization custom properties and administer definitions at the enterprise level.": "\u5728\u4F01\u4E1A\u7EA7\u522B\u67E5\u770B\u7EC4\u7EC7\u81EA\u5B9A\u4E49\u5C5E\u6027\u5E76\u7BA1\u7406\u5176\u5B9A\u4E49\u3002",
    "Enterprise innersource vulnerabilities": "\u4F01\u4E1A\u5185\u6E90\u6F0F\u6D1E",
    "View and manage innersource vulnerabilities across the enterprise": "\u67E5\u770B\u5E76\u7BA1\u7406\u6574\u4E2A\u4F01\u4E1A\u7684\u5185\u6E90\u6F0F\u6D1E",
    "Enterprise license policy": "\u4F01\u4E1A\u8BB8\u53EF\u8BC1\u7B56\u7565",
    "View and manage the enterprise license policy": "\u67E5\u770B\u5E76\u7BA1\u7406\u4F01\u4E1A\u8BB8\u53EF\u8BC1\u7B56\u7565",
    "Enterprise organization installation repositories": "\u4F01\u4E1A\u7EC4\u7EC7\u5B89\u88C5\u4ED3\u5E93",
    "Manage repository access of GitHub Apps on Enterprise-owned organizations. Requesting this permission will prevent it from being installed on other enterprises.": "\u7BA1\u7406\u4F01\u4E1A\u62E5\u6709\u7684\u7EC4\u7EC7\u4E2D GitHub \u5E94\u7528\u7684\u4ED3\u5E93\u8BBF\u95EE\u6743\u9650\u3002\u8BF7\u6C42\u6B64\u6743\u9650\u4F1A\u5BFC\u81F4\u8BE5\u5E94\u7528\u65E0\u6CD5\u5B89\u88C5\u5728\u5176\u4ED6\u4F01\u4E1A\u4E0A\u3002",
    "Enterprise organization installations": "\u4F01\u4E1A\u7EC4\u7EC7\u5B89\u88C5",
    "Manage installation of GitHub Apps on Enterprise-owned organizations. Requesting this permission will prevent it from being installed on other enterprises.": "\u7BA1\u7406\u4F01\u4E1A\u62E5\u6709\u7684\u7EC4\u7EC7\u4E2D GitHub \u5E94\u7528\u7684\u5B89\u88C5\u3002\u8BF7\u6C42\u6B64\u6743\u9650\u4F1A\u5BFC\u81F4\u8BE5\u5E94\u7528\u65E0\u6CD5\u5B89\u88C5\u5728\u5176\u4ED6\u4F01\u4E1A\u4E0A\u3002",
    "Enterprise organizations": "\u4F01\u4E1A\u7EC4\u7EC7",
    "Create and remove enterprise organizations": "\u521B\u5EFA\u548C\u79FB\u9664\u4F01\u4E1A\u7EC4\u7EC7",
    "Enterprise people": "\u4F01\u4E1A\u4EBA\u5458",
    "Manage user access to the enterprise": "\u7BA1\u7406\u7528\u6237\u5BF9\u4F01\u4E1A\u7684\u8BBF\u95EE\u6743\u9650",
    "Enterprise single sign-on": "\u4F01\u4E1A\u5355\u70B9\u767B\u5F55",
    "View and manage enterprise single sign-on configuration": "\u67E5\u770B\u5E76\u7BA1\u7406\u4F01\u4E1A\u5355\u70B9\u767B\u5F55\u914D\u7F6E",
    "Enterprise teams": "\u4F01\u4E1A\u56E2\u961F",
    "Create, edit, remove and view enterprise teams": "\u521B\u5EFA\u3001\u7F16\u8F91\u3001\u79FB\u9664\u548C\u67E5\u770B\u4F01\u4E1A\u56E2\u961F",
    "Subscribe to events": "\u8BA2\u9605\u4E8B\u4EF6",
    "Based on the permissions you've selected, what events would you like to subscribe to?": "\u6839\u636E\u4F60\u9009\u62E9\u7684\u6743\u9650\uFF0C\u4F60\u60F3\u8BA2\u9605\u54EA\u4E9B\u4E8B\u4EF6\uFF1F",
    "Change privileges to be able to select events": "\u53D8\u66F4\u6743\u9650\u540E\u624D\u80FD\u9009\u62E9\u4E8B\u4EF6",
    "Installation target": "\u5B89\u88C5\u76EE\u6807",
    "A GitHub App installation target is renamed.": "GitHub \u5E94\u7528\u7684\u5B89\u88C5\u76EE\u6807\u88AB\u91CD\u547D\u540D\u3002",
    Meta: "\u5143\u4FE1\u606F",
    "When this App is deleted and the associated hook is removed.": "\u5F53\u6B64\u5E94\u7528\u88AB\u5220\u9664\u5E76\u79FB\u9664\u5173\u8054\u94A9\u5B50\u65F6\u3002",
    "Security advisory": "\u5B89\u5168\u516C\u544A",
    "Security advisory published, updated, or withdrawn.": "\u5B89\u5168\u516C\u544A\u88AB\u53D1\u5E03\u3001\u66F4\u65B0\u6216\u64A4\u56DE\u3002",
    "Branch protection configuration": "\u5206\u652F\u4FDD\u62A4\u914D\u7F6E",
    "All branch protections disabled or enabled for a repository.": "\u4ED3\u5E93\u7684\u6240\u6709\u5206\u652F\u4FDD\u62A4\u88AB\u7981\u7528\u6216\u542F\u7528\u3002",
    "Branch protection rule": "\u5206\u652F\u4FDD\u62A4\u89C4\u5219",
    "Branch protection rule created, deleted or edited.": "\u5206\u652F\u4FDD\u62A4\u89C4\u5219\u88AB\u521B\u5EFA\u3001\u5220\u9664\u6216\u7F16\u8F91\u3002",
    "Code scanning alert": "\u4EE3\u7801\u626B\u63CF\u8B66\u62A5",
    "Code Scanning alert updated. This event is triggered when the assignees or state of the alert changes. The state can be created, fixed in branch, or closed.": "\u4EE3\u7801\u626B\u63CF\u8B66\u62A5\u5DF2\u66F4\u65B0\u3002\u8B66\u62A5\u7684\u53D7\u7406\u4EBA\u6216\u72B6\u6001\u53D8\u5316\u65F6\u89E6\u53D1\u3002\u72B6\u6001\u53EF\u4EE5\u662F\u5DF2\u521B\u5EFA\u3001\u5DF2\u5728\u5206\u652F\u4E2D\u4FEE\u590D\u6216\u5DF2\u5173\u95ED\u3002",
    "Check run": "\u68C0\u67E5\u8FD0\u884C",
    "Check run is created, requested, rerequested, or completed.": "\u68C0\u67E5\u8FD0\u884C\u88AB\u521B\u5EFA\u3001\u8BF7\u6C42\u3001\u91CD\u65B0\u8BF7\u6C42\u6216\u5B8C\u6210\u3002",
    "Check suite": "\u68C0\u67E5\u5957\u4EF6",
    "Check suite is requested, rerequested, or completed.": "\u68C0\u67E5\u5957\u4EF6\u88AB\u8BF7\u6C42\u3001\u91CD\u65B0\u8BF7\u6C42\u6216\u5B8C\u6210\u3002",
    "Commit comment": "\u63D0\u4EA4\u8BC4\u8BBA",
    "Commit or diff commented on.": "\u5BF9\u63D0\u4EA4\u6216\u5DEE\u5F02\u53D1\u8868\u4E86\u8BC4\u8BBA\u3002",
    "Branch or tag created.": "\u5206\u652F\u6216\u6807\u7B7E\u88AB\u521B\u5EFA\u3002",
    "Custom property": "\u81EA\u5B9A\u4E49\u5C5E\u6027",
    "Custom property is created, updated, deleted, or promoted.": "\u81EA\u5B9A\u4E49\u5C5E\u6027\u88AB\u521B\u5EFA\u3001\u66F4\u65B0\u3001\u5220\u9664\u6216\u63D0\u5347\u3002",
    "Custom property values": "\u81EA\u5B9A\u4E49\u5C5E\u6027\u503C",
    "Custom property values are changed for a repository": "\u4ED3\u5E93\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u503C\u53D1\u751F\u53D8\u5316",
    Discussion: "\u8BA8\u8BBA",
    "Discussion created, edited, closed, reopened, pinned, unpinned, locked, unlocked, transferred, answered, unanswered, labeled, unlabeled, had its category changed, or was deleted.": "\u8BA8\u8BBA\u88AB\u521B\u5EFA\u3001\u7F16\u8F91\u3001\u5173\u95ED\u3001\u91CD\u65B0\u6253\u5F00\u3001\u7F6E\u9876\u3001\u53D6\u6D88\u7F6E\u9876\u3001\u9501\u5B9A\u3001\u89E3\u9501\u3001\u8F6C\u79FB\u3001\u6807\u8BB0\u4E3A\u5DF2\u89E3\u7B54\u3001\u53D6\u6D88\u89E3\u7B54\u3001\u52A0\u6807\u7B7E\u3001\u79FB\u9664\u6807\u7B7E\u3001\u66F4\u6539\u5206\u7C7B\u6216\u5220\u9664\u3002",
    "Discussion comment": "\u8BA8\u8BBA\u8BC4\u8BBA",
    "Discussion comment created, edited, or deleted.": "\u8BA8\u8BBA\u8BC4\u8BBA\u88AB\u521B\u5EFA\u3001\u7F16\u8F91\u6216\u5220\u9664\u3002",
    "Branch or tag deleted.": "\u5206\u652F\u6216\u6807\u7B7E\u88AB\u5220\u9664\u3002",
    "Dependabot alert": "Dependabot \u8B66\u62A5",
    "Dependabot alert assignees_changed, auto_dismissed, auto_reopened, created, dismissed, reopened, fixed, reintroduced, or withdrawn.": "Dependabot \u8B66\u62A5\u7684\u53D7\u7406\u4EBA\u53D8\u66F4\u3001\u81EA\u52A8\u5173\u95ED\u3001\u81EA\u52A8\u91CD\u65B0\u6253\u5F00\u3001\u521B\u5EFA\u3001\u5173\u95ED\u3001\u91CD\u65B0\u6253\u5F00\u3001\u4FEE\u590D\u3001\u91CD\u65B0\u5F15\u5165\u6216\u64A4\u56DE\u3002",
    "Deploy key": "\u90E8\u7F72\u5BC6\u94A5",
    "A deploy key is created or deleted from a repository.": "\u4ED3\u5E93\u7684\u90E8\u7F72\u5BC6\u94A5\u88AB\u521B\u5EFA\u6216\u5220\u9664\u3002",
    "Repository was deployed or a deployment was deleted.": "\u4ED3\u5E93\u88AB\u90E8\u7F72\u6216\u90E8\u7F72\u88AB\u5220\u9664\u3002",
    "Deployment protection rule": "\u90E8\u7F72\u4FDD\u62A4\u89C4\u5219",
    "Deployment protection rule requested for an environment.": "\u4E3A\u73AF\u5883\u8BF7\u6C42\u4E86\u90E8\u7F72\u4FDD\u62A4\u89C4\u5219\u3002",
    "Deployment review": "\u90E8\u7F72\u5BA1\u67E5",
    "Deployment review requested, approved or rejected": "\u90E8\u7F72\u5BA1\u67E5\u88AB\u8BF7\u6C42\u3001\u6279\u51C6\u6216\u62D2\u7EDD",
    "Deployment status": "\u90E8\u7F72\u72B6\u6001",
    "Deployment status updated from the API.": "\u90E8\u7F72\u72B6\u6001\u901A\u8FC7 API \u66F4\u65B0\u3002",
    "Dismissal request code scanning": "\u5173\u95ED\u8BF7\u6C42\uFF08\u4EE3\u7801\u626B\u63CF\uFF09",
    "Code scanning alert dismissal request was created, or received a response (approved or rejected).": "\u4EE3\u7801\u626B\u63CF\u8B66\u62A5\u5173\u95ED\u8BF7\u6C42\u88AB\u521B\u5EFA\uFF0C\u6216\u6536\u5230\u4E86\u54CD\u5E94\uFF08\u6279\u51C6\u6216\u62D2\u7EDD\uFF09\u3002",
    "Dismissal request dependabot": "\u5173\u95ED\u8BF7\u6C42\uFF08Dependabot\uFF09",
    "Dependabot alert dismissal request was created, cancelled, or received a response (approved or rejected).": "Dependabot \u8B66\u62A5\u5173\u95ED\u8BF7\u6C42\u88AB\u521B\u5EFA\u3001\u53D6\u6D88\uFF0C\u6216\u6536\u5230\u4E86\u54CD\u5E94\uFF08\u6279\u51C6\u6216\u62D2\u7EDD\uFF09\u3002",
    "Dismissal request license compliance": "\u5173\u95ED\u8BF7\u6C42\uFF08\u8BB8\u53EF\u8BC1\u5408\u89C4\uFF09",
    "License compliance alert closure request was created, cancelled, or received a response (approved or rejected).": "\u8BB8\u53EF\u8BC1\u5408\u89C4\u8B66\u62A5\u5173\u95ED\u8BF7\u6C42\u88AB\u521B\u5EFA\u3001\u53D6\u6D88\uFF0C\u6216\u6536\u5230\u4E86\u54CD\u5E94\uFF08\u6279\u51C6\u6216\u62D2\u7EDD\uFF09\u3002",
    "Dismissal request secret scanning": "\u5173\u95ED\u8BF7\u6C42\uFF08\u673A\u5BC6\u626B\u63CF\uFF09",
    "Secret scanning alert dismissal request was created, cancelled, or received a response.": "\u673A\u5BC6\u626B\u63CF\u8B66\u62A5\u5173\u95ED\u8BF7\u6C42\u88AB\u521B\u5EFA\u3001\u53D6\u6D88\uFF0C\u6216\u6536\u5230\u4E86\u54CD\u5E94\u3002",
    "Exemption request push ruleset": "\u8C41\u514D\u8BF7\u6C42\uFF08\u63A8\u9001\u89C4\u5219\u96C6\uFF09",
    "Push ruleset bypass request was created, cancelled, completed, received a response, or a response was dismissed.": "\u63A8\u9001\u89C4\u5219\u96C6\u7ED5\u8FC7\u8BF7\u6C42\u88AB\u521B\u5EFA\u3001\u53D6\u6D88\u3001\u5B8C\u6210\u3001\u6536\u5230\u54CD\u5E94\uFF0C\u6216\u54CD\u5E94\u88AB\u5173\u95ED\u3002",
    "Exemption request secret scanning": "\u8C41\u514D\u8BF7\u6C42\uFF08\u673A\u5BC6\u626B\u63CF\uFF09",
    "Secret scanning push protection bypass request was created, cancelled, completed, received a response, or a response was dismissed.": "\u673A\u5BC6\u626B\u63CF\u63A8\u9001\u4FDD\u62A4\u7ED5\u8FC7\u8BF7\u6C42\u88AB\u521B\u5EFA\u3001\u53D6\u6D88\u3001\u5B8C\u6210\u3001\u6536\u5230\u54CD\u5E94\uFF0C\u6216\u54CD\u5E94\u88AB\u5173\u95ED\u3002",
    "Repository forked.": "\u4ED3\u5E93\u88AB\u590D\u523B\u3002",
    "Wiki page updated.": "Wiki \u9875\u9762\u5DF2\u66F4\u65B0\u3002",
    "Issue comment": "\u8BAE\u9898\u8BC4\u8BBA",
    "Issue comment created, edited, or deleted.": "\u8BAE\u9898\u8BC4\u8BBA\u88AB\u521B\u5EFA\u3001\u7F16\u8F91\u6216\u5220\u9664\u3002",
    "Issue opened, edited, deleted, transferred, pinned, unpinned, closed, reopened, assigned, unassigned, labeled, unlabeled, milestoned, demilestoned, locked, unlocked, typed, untyped, field_added, or field_removed.": "\u8BAE\u9898\u88AB\u6253\u5F00\u3001\u7F16\u8F91\u3001\u5220\u9664\u3001\u8F6C\u79FB\u3001\u7F6E\u9876\u3001\u53D6\u6D88\u7F6E\u9876\u3001\u5173\u95ED\u3001\u91CD\u65B0\u6253\u5F00\u3001\u5206\u914D\u3001\u53D6\u6D88\u5206\u914D\u3001\u52A0\u6807\u7B7E\u3001\u79FB\u9664\u6807\u7B7E\u3001\u52A0\u5165\u91CC\u7A0B\u7891\u3001\u79FB\u51FA\u91CC\u7A0B\u7891\u3001\u9501\u5B9A\u3001\u89E3\u9501\u3001\u8BBE\u7F6E\u7C7B\u578B\u3001\u53D6\u6D88\u7C7B\u578B\u3001\u6DFB\u52A0\u5B57\u6BB5\u6216\u79FB\u9664\u5B57\u6BB5\u3002",
    "Label created, edited, deleted, archived, or unarchived.": "\u6807\u7B7E\u88AB\u521B\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u3001\u5F52\u6863\u6216\u53D6\u6D88\u5F52\u6863\u3002",
    "Milestone created, closed, opened, edited, or deleted.": "\u91CC\u7A0B\u7891\u88AB\u521B\u5EFA\u3001\u5173\u95ED\u3001\u6253\u5F00\u3001\u7F16\u8F91\u6216\u5220\u9664\u3002",
    "Collaborator added to, removed from, or has changed permissions for a repository.": "\u534F\u4F5C\u8005\u88AB\u6DFB\u52A0\u5230\u4ED3\u5E93\u3001\u4ECE\u4ED3\u5E93\u79FB\u9664\uFF0C\u6216\u88AB\u66F4\u6539\u4E86\u4ED3\u5E93\u6743\u9650\u3002",
    Membership: "\u6210\u5458\u5173\u7CFB",
    "Team membership added or removed.": "\u56E2\u961F\u6210\u5458\u5173\u7CFB\u88AB\u6DFB\u52A0\u6216\u79FB\u9664\u3002",
    "Merge group": "\u5408\u5E76\u7EC4",
    "Merge Group requested checks, or was destroyed.": "\u5408\u5E76\u7EC4\u8BF7\u6C42\u4E86\u68C0\u67E5\uFF0C\u6216\u88AB\u9500\u6BC1\u3002",
    "Merge queue entry": "\u5408\u5E76\u961F\u5217\u6761\u76EE",
    "Merge Queue entry added": "\u5408\u5E76\u961F\u5217\u6761\u76EE\u88AB\u6DFB\u52A0",
    Organization: "\u7EC4\u7EC7",
    "Organization deleted, renamed, member invited, member added, or member removed.": "\u7EC4\u7EC7\u88AB\u5220\u9664\u3001\u91CD\u547D\u540D\uFF0C\u6210\u5458\u88AB\u9080\u8BF7\u3001\u6DFB\u52A0\u6216\u79FB\u9664\u3002",
    "Organization custom property values": "\u7EC4\u7EC7\u81EA\u5B9A\u4E49\u5C5E\u6027\u503C",
    "Custom property values are changed for an organization": "\u7EC4\u7EC7\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u503C\u53D1\u751F\u53D8\u5316",
    "Page build": "\u9875\u9762\u6784\u5EFA",
    "Pages site built.": "Pages \u7AD9\u70B9\u5DF2\u6784\u5EFA\u3002",
    "Personal access token request": "\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u8BF7\u6C42",
    "Personal access token request created, approved, denied, or cancelled.": "\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u8BF7\u6C42\u88AB\u521B\u5EFA\u3001\u6279\u51C6\u3001\u62D2\u7EDD\u6216\u53D6\u6D88\u3002",
    "Projects v2 item": "Projects v2 \u6761\u76EE",
    "Project item created, edited, deleted, archived, restored, converted, or reordered.": "\u9879\u76EE\u6761\u76EE\u88AB\u521B\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u3001\u5F52\u6863\u3001\u6062\u590D\u3001\u8F6C\u6362\u6216\u91CD\u65B0\u6392\u5E8F\u3002",
    "Projects v2": "Projects v2",
    "Project created, updated, deleted, closed, or reopened.": "\u9879\u76EE\u88AB\u521B\u5EFA\u3001\u66F4\u65B0\u3001\u5220\u9664\u3001\u5173\u95ED\u6216\u91CD\u65B0\u6253\u5F00\u3002",
    "Projects v2 status update": "Projects v2 \u72B6\u6001\u66F4\u65B0",
    "Project status updates created, updated, or deleted.": "\u9879\u76EE\u72B6\u6001\u66F4\u65B0\u88AB\u521B\u5EFA\u3001\u66F4\u65B0\u6216\u5220\u9664\u3002",
    "Repository changes from private to public.": "\u4ED3\u5E93\u4ECE\u79C1\u6709\u53D8\u4E3A\u516C\u5F00\u3002",
    "Pull request assigned, auto merge disabled, auto merge enabled, closed, converted to draft, demilestoned, dequeued, edited, enqueued, labeled, locked, milestoned, opened, ready for review, reopened, review request removed, review requested, stacked, synchronized, unassigned, unlabeled, or unlocked.": "\u62C9\u53D6\u8BF7\u6C42\u88AB\u5206\u914D\u3001\u7981\u7528\u81EA\u52A8\u5408\u5E76\u3001\u542F\u7528\u81EA\u52A8\u5408\u5E76\u3001\u5173\u95ED\u3001\u8F6C\u4E3A\u8349\u7A3F\u3001\u79FB\u51FA\u91CC\u7A0B\u7891\u3001\u51FA\u961F\u3001\u7F16\u8F91\u3001\u5165\u961F\u3001\u52A0\u6807\u7B7E\u3001\u9501\u5B9A\u3001\u52A0\u5165\u91CC\u7A0B\u7891\u3001\u6253\u5F00\u3001\u51C6\u5907\u5BA1\u67E5\u3001\u91CD\u65B0\u6253\u5F00\u3001\u79FB\u9664\u5BA1\u67E5\u8BF7\u6C42\u3001\u8BF7\u6C42\u5BA1\u67E5\u3001\u5806\u53E0\u3001\u540C\u6B65\u3001\u53D6\u6D88\u5206\u914D\u3001\u79FB\u9664\u6807\u7B7E\u6216\u89E3\u9501\u3002",
    "Pull request review": "\u62C9\u53D6\u8BF7\u6C42\u5BA1\u67E5",
    "Pull request review submitted, edited, or dismissed.": "\u62C9\u53D6\u8BF7\u6C42\u5BA1\u67E5\u88AB\u63D0\u4EA4\u3001\u7F16\u8F91\u6216\u5173\u95ED\u3002",
    "Pull request review comment": "\u62C9\u53D6\u8BF7\u6C42\u5BA1\u67E5\u8BC4\u8BBA",
    "Pull request diff comment created, edited, or deleted.": "\u62C9\u53D6\u8BF7\u6C42\u5DEE\u5F02\u8BC4\u8BBA\u88AB\u521B\u5EFA\u3001\u7F16\u8F91\u6216\u5220\u9664\u3002",
    "Pull request review thread": "\u62C9\u53D6\u8BF7\u6C42\u5BA1\u67E5\u4F1A\u8BDD",
    "A pull request review thread was resolved or unresolved.": "\u62C9\u53D6\u8BF7\u6C42\u5BA1\u67E5\u4F1A\u8BDD\u88AB\u6807\u8BB0\u4E3A\u5DF2\u89E3\u51B3\u6216\u672A\u89E3\u51B3\u3002",
    Push: "\u63A8\u9001",
    "Git push to a repository.": "\u5411\u4ED3\u5E93\u6267\u884C Git \u63A8\u9001\u3002",
    "Registry package": "\u6CE8\u518C\u8868\u8F6F\u4EF6\u5305",
    "Registry package published or updated in a repository.": "\u4ED3\u5E93\u4E2D\u7684\u6CE8\u518C\u8868\u8F6F\u4EF6\u5305\u88AB\u53D1\u5E03\u6216\u66F4\u65B0\u3002",
    Release: "\u7248\u672C\u53D1\u5E03",
    "Release created, edited, published, unpublished, or deleted.": "\u7248\u672C\u53D1\u5E03\u88AB\u521B\u5EFA\u3001\u7F16\u8F91\u3001\u53D1\u5E03\u3001\u53D6\u6D88\u53D1\u5E03\u6216\u5220\u9664\u3002",
    "Repository created, deleted, archived, unarchived, publicized, privatized, edited, renamed, or transferred.": "\u4ED3\u5E93\u88AB\u521B\u5EFA\u3001\u5220\u9664\u3001\u5F52\u6863\u3001\u53D6\u6D88\u5F52\u6863\u3001\u516C\u5F00\u3001\u8F6C\u4E3A\u79C1\u6709\u3001\u7F16\u8F91\u3001\u91CD\u547D\u540D\u6216\u8F6C\u79FB\u3002",
    "Repository dispatch": "\u4ED3\u5E93\u5206\u53D1",
    "When a message is dispatched from a repository.": "\u5F53\u4ECE\u4ED3\u5E93\u5206\u53D1\u6D88\u606F\u65F6\u3002",
    "Repository ruleset": "\u4ED3\u5E93\u89C4\u5219\u96C6",
    "Repository ruleset created, deleted or edited.": "\u4ED3\u5E93\u89C4\u5219\u96C6\u88AB\u521B\u5EFA\u3001\u5220\u9664\u6216\u7F16\u8F91\u3002",
    "Security and analysis": "\u5B89\u5168\u4E0E\u5206\u6790",
    "Code security features enabled or disabled for a repository.": "\u4ED3\u5E93\u7684\u4EE3\u7801\u5B89\u5168\u529F\u80FD\u88AB\u542F\u7528\u6216\u7981\u7528\u3002",
    "Secret scanning alert": "\u673A\u5BC6\u626B\u63CF\u8B66\u62A5",
    "Secret scanning alert created, resolved, reopened, validated, publicly leaked, assigned, or unassigned.": "\u673A\u5BC6\u626B\u63CF\u8B66\u62A5\u88AB\u521B\u5EFA\u3001\u89E3\u51B3\u3001\u91CD\u65B0\u6253\u5F00\u3001\u9A8C\u8BC1\u3001\u516C\u5F00\u6CC4\u9732\u3001\u5206\u914D\u6216\u53D6\u6D88\u5206\u914D\u3002",
    "Secret scanning alert location": "\u673A\u5BC6\u626B\u63CF\u8B66\u62A5\u4F4D\u7F6E",
    "Secrets scanning alert location created.": "\u673A\u5BC6\u626B\u63CF\u8B66\u62A5\u4F4D\u7F6E\u88AB\u521B\u5EFA\u3002",
    "Secret scanning scan": "\u673A\u5BC6\u626B\u63CF",
    "Secrets scanning scan completed.": "\u673A\u5BC6\u626B\u63CF\u5DF2\u5B8C\u6210\u3002",
    "A star is created or deleted from a repository.": "\u4ED3\u5E93\u7684\u661F\u6807\u88AB\u6DFB\u52A0\u6216\u53D6\u6D88\u3002",
    "Commit status updated from the API.": "\u63D0\u4EA4\u72B6\u6001\u901A\u8FC7 API \u66F4\u65B0\u3002",
    "Team is created, deleted, edited, or added to/removed from a repository.": "\u56E2\u961F\u88AB\u521B\u5EFA\u3001\u5220\u9664\u3001\u7F16\u8F91\uFF0C\u6216\u88AB\u6DFB\u52A0\u5230\u4ED3\u5E93\u3001\u4ECE\u4ED3\u5E93\u79FB\u9664\u3002",
    "Team add": "\u6DFB\u52A0\u56E2\u961F",
    "Team added or modified on a repository.": "\u4ED3\u5E93\u4E0A\u7684\u56E2\u961F\u88AB\u6DFB\u52A0\u6216\u4FEE\u6539\u3002",
    "User stars a repository.": "\u7528\u6237\u661F\u6807\u4E86\u4E00\u4E2A\u4ED3\u5E93\u3002",
    "Workflow dispatch": "\u5DE5\u4F5C\u6D41\u5206\u53D1",
    "A manual workflow run is requested.": "\u8BF7\u6C42\u624B\u52A8\u8FD0\u884C\u5DE5\u4F5C\u6D41\u3002",
    "Workflow job": "\u5DE5\u4F5C\u6D41\u4F5C\u4E1A",
    "Workflow job queued, waiting, in progress, or completed on a repository.": "\u4ED3\u5E93\u4E2D\u7684\u5DE5\u4F5C\u6D41\u4F5C\u4E1A\u88AB\u6392\u961F\u3001\u7B49\u5F85\u3001\u8FDB\u884C\u4E2D\u6216\u5DF2\u5B8C\u6210\u3002",
    "Workflow run": "\u5DE5\u4F5C\u6D41\u8FD0\u884C",
    "Workflow run requested or completed on a repository.": "\u4ED3\u5E93\u4E2D\u7684\u5DE5\u4F5C\u6D41\u8FD0\u884C\u88AB\u8BF7\u6C42\u6216\u5B8C\u6210\u3002",
    "Issue dependencies": "\u8BAE\u9898\u4F9D\u8D56",
    "Issue dependencies - such as blocked by or blocking - added or removed.": "\u8BAE\u9898\u4F9D\u8D56\uFF08\u4F8B\u5982\u88AB\u963B\u65AD\u6216\u88AB\u963B\u65AD\u5176\u4ED6\u8BAE\u9898\uFF09\u88AB\u6DFB\u52A0\u6216\u79FB\u9664\u3002",
    "Issue relates to": "\u8BAE\u9898\u5173\u8054",
    "Related issues - such as relates to - added or removed.": "\u76F8\u5173\u8BAE\u9898\uFF08\u4F8B\u5982\u5173\u8054\u5230\uFF09\u88AB\u6DFB\u52A0\u6216\u79FB\u9664\u3002",
    "Org block": "\u7EC4\u7EC7\u5C4F\u853D",
    "A user has been blocked or unblocked.": "\u7528\u6237\u88AB\u5C4F\u853D\u6216\u53D6\u6D88\u5C4F\u853D\u3002",
    "Repository advisory": "\u4ED3\u5E93\u516C\u544A",
    "Repository advisory published or reported.": "\u4ED3\u5E93\u516C\u544A\u88AB\u53D1\u5E03\u6216\u62A5\u544A\u3002",
    "Sub issues": "\u5B50\u8BAE\u9898",
    "Sub-issues added or removed, and parent issues added or removed.": "\u5B50\u8BAE\u9898\u88AB\u6DFB\u52A0\u6216\u79FB\u9664\uFF0C\u7236\u8BAE\u9898\u88AB\u6DFB\u52A0\u6216\u79FB\u9664\u3002",
    "Where can this GitHub App be installed?": "\u6B64 GitHub \u5E94\u7528\u53EF\u4EE5\u5B89\u88C5\u5728\u54EA\u4E9B\u5730\u65B9\uFF1F",
    "Only on this account": "\u4EC5\u5728\u6B64\u8D26\u6237\u4E0A",
    "Any account": "\u4EFB\u4F55\u8D26\u6237",
    "Allow this GitHub App to be installed by any user or organization.": "\u5141\u8BB8\u4EFB\u4F55\u7528\u6237\u6216\u7EC4\u7EC7\u5B89\u88C5\u6B64 GitHub \u5E94\u7528\u3002",
    "GitHub Apps augment and extend your workflows on GitHub with commercial, open source, and homegrown tools.": "GitHub \u5E94\u7528\u8BA9\u4F60\u80FD\u7528\u5546\u4E1A\u3001\u5F00\u6E90\u548C\u81EA\u7814\u5DE5\u5177\u589E\u5F3A\u5E76\u6269\u5C55 GitHub \u4E0A\u7684\u5DE5\u4F5C\u6D41\u3002",
    "augment and extend your workflows on GitHub with commercial, open source, and homegrown tools.": "\u7528\u5546\u4E1A\u3001\u5F00\u6E90\u548C\u81EA\u7814\u5DE5\u5177\u589E\u5F3A\u5E76\u6269\u5C55\u4F60\u5728 GitHub \u4E0A\u7684\u5DE5\u4F5C\u6D41\u3002",
    "Revoke all": "\u5168\u90E8\u64A4\u9500",
    Revoke: "\u64A4\u9500",
    "New sponsorships, changes, and cancellations": "\u65B0\u7684\u8D5E\u52A9\u3001\u53D8\u66F4\u4E0E\u53D6\u6D88",
    "No sponsorship activity in this time period": "\u8BE5\u65F6\u95F4\u6BB5\u5185\u6CA1\u6709\u8D5E\u52A9\u6D3B\u52A8",
    "This is where you can review activity from your sponsorships.": "\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u67E5\u770B\u8D5E\u52A9\u6D3B\u52A8\u3002",
    "Checks on code.": "\u4EE3\u7801\u68C0\u67E5\u3002",
    Variables: "\u53D8\u91CF"
  };

  // src/locales/glossary.json
  var glossary_default = {
    Java: "Java",
    Python: "Python",
    JavaScript: "JavaScript",
    TypeScript: "TypeScript",
    Go: "Go",
    Rust: "Rust",
    Ruby: "Ruby",
    PHP: "PHP",
    Swift: "Swift",
    Kotlin: "Kotlin",
    Dart: "Dart",
    Shell: "Shell",
    Bash: "Bash",
    C: "C",
    "C++": "C++",
    "C#": "C#",
    "F#": "F#",
    HTML: "HTML",
    CSS: "CSS",
    SCSS: "SCSS",
    Less: "Less",
    JSON: "JSON",
    YAML: "YAML",
    XML: "XML",
    SQL: "SQL",
    Markdown: "Markdown",
    GitHub: "GitHub",
    Git: "Git",
    "Git LFS": "Git LFS",
    "GitHub Actions": "GitHub \u64CD\u4F5C",
    Actions: "\u64CD\u4F5C",
    "GitHub API": "GitHub API",
    README: "README",
    CI: "CI",
    CD: "CD",
    npm: "npm",
    yarn: "yarn",
    pnpm: "pnpm",
    DevOps: "DevOps",
    AI: "AI",
    PR: "PR",
    Wiki: "\u7EF4\u57FA",
    Docker: "Docker",
    Kubernetes: "Kubernetes",
    Linux: "Linux",
    macOS: "macOS",
    Windows: "Windows",
    Android: "Android",
    iOS: "iOS",
    Codespaces: "\u4EE3\u7801\u7A7A\u95F4",
    Copilot: "\u667A\u80FD\u52A9\u624B",
    "GitHub Copilot": "GitHub \u667A\u80FD\u52A9\u624B",
    Dependabot: "Dependabot",
    GraphQL: "GraphQL",
    Webhooks: "Webhooks",
    Webhook: "Webhook",
    repository: "\u4ED3\u5E93",
    repositories: "\u4ED3\u5E93",
    Repository: "\u4ED3\u5E93",
    branch: "\u5206\u652F",
    branches: "\u5206\u652F",
    Branch: "\u5206\u652F",
    Branches: "\u5206\u652F",
    commit: "\u63D0\u4EA4",
    commits: "\u63D0\u4EA4",
    Commit: "\u63D0\u4EA4",
    Commits: "\u63D0\u4EA4",
    committed: "\u5DF2\u63D0\u4EA4",
    push: "\u63A8\u9001",
    pushed: "\u63A8\u9001",
    Pushed: "\u63A8\u9001",
    pull: "\u62C9\u53D6",
    fork: "\u590D\u523B",
    Fork: "\u590D\u523B",
    forks: "\u590D\u523B",
    Forks: "\u590D\u523B",
    star: "\u661F\u6807",
    Star: "\u661F\u6807",
    stars: "\u661F\u6807",
    Stars: "\u661F\u6807",
    watch: "\u5173\u6CE8",
    Watch: "\u5173\u6CE8",
    watcher: "\u5173\u6CE8\u8005",
    watchers: "\u5173\u6CE8\u8005",
    Watchers: "\u5173\u6CE8\u8005",
    issue: "\u8BAE\u9898",
    Issue: "\u8BAE\u9898",
    issues: "\u8BAE\u9898",
    "pull request": "\u62C9\u53D6\u8BF7\u6C42",
    "pull requests": "\u62C9\u53D6\u8BF7\u6C42",
    "Pull Request": "\u62C9\u53D6\u8BF7\u6C42",
    "Pull Requests": "\u62C9\u53D6\u8BF7\u6C42",
    "pull-request": "\u62C9\u53D6\u8BF7\u6C42",
    merge: "\u5408\u5E76",
    Merge: "\u5408\u5E76",
    merged: "\u5DF2\u5408\u5E76",
    Merged: "\u5DF2\u5408\u5E76",
    rebase: "\u53D8\u57FA",
    Rebase: "\u53D8\u57FA",
    squash: "\u538B\u7F29",
    Squash: "\u538B\u7F29",
    clone: "\u514B\u9686",
    Clone: "\u514B\u9686",
    license: "\u8BB8\u53EF\u8BC1",
    License: "\u8BB8\u53EF\u8BC1",
    licenses: "\u8BB8\u53EF\u8BC1",
    contributor: "\u8D21\u732E\u8005",
    contributors: "\u8D21\u732E\u8005",
    Contributors: "\u8D21\u732E\u8005",
    contribution: "\u8D21\u732E",
    Contributions: "\u8D21\u732E",
    release: "\u7248\u672C\u53D1\u5E03",
    releases: "\u7248\u672C\u53D1\u5E03",
    Releases: "\u7248\u672C\u53D1\u5E03",
    tag: "\u6807\u7B7E",
    tags: "\u6807\u7B7E",
    Tags: "\u6807\u7B7E",
    milestone: "\u91CC\u7A0B\u7891",
    Milestone: "\u91CC\u7A0B\u7891",
    Milestones: "\u91CC\u7A0B\u7891",
    workflow: "\u5DE5\u4F5C\u6D41",
    Workflow: "\u5DE5\u4F5C\u6D41",
    workflow_run: "\u5DE5\u4F5C\u6D41\u8FD0\u884C",
    dependency: "\u4F9D\u8D56\u9879",
    dependencies: "\u4F9D\u8D56\u9879",
    Dependencies: "\u4F9D\u8D56\u9879",
    deployment: "\u90E8\u7F72",
    Deployments: "\u90E8\u7F72",
    artifact: "\u6784\u5EFA\u4EA7\u7269",
    artifacts: "\u6784\u5EFA\u4EA7\u7269",
    Artifacts: "\u6784\u5EFA\u4EA7\u7269",
    secret: "\u5BC6\u94A5",
    Secrets: "\u5BC6\u94A5",
    notification: "\u901A\u77E5",
    notifications: "\u901A\u77E5",
    Notifications: "\u901A\u77E5",
    followers: "\u5173\u6CE8\u8005",
    Followers: "\u5173\u6CE8\u8005",
    following: "\u6B63\u5728\u5173\u6CE8",
    Following: "\u6B63\u5728\u5173\u6CE8",
    "main branch": "\u4E3B\u5206\u652F",
    "Main branch": "\u4E3B\u5206\u652F",
    "default branch": "\u9ED8\u8BA4\u5206\u652F",
    "Default branch": "\u9ED8\u8BA4\u5206\u652F",
    "up to date": "\u4FDD\u6301\u540C\u6B65",
    "ahead of": "\u9886\u5148",
    behind: "\u843D\u540E",
    "Last commit": "\u6700\u65B0\u63D0\u4EA4",
    "Latest commit": "\u6700\u65B0\u63D0\u4EA4",
    "Latest commit date pushed": "\u6700\u65B0\u63A8\u9001\u63D0\u4EA4",
    "commits on": "\u63D0\u4EA4\u4E8E",
    "no description": "\u65E0\u63CF\u8FF0",
    "they/them": "they/them",
    "she/her": "she/her",
    "he/him": "he/him",
    "GitHub CLI": "GitHub CLI",
    "GitHub Desktop": "GitHub Desktop",
    "GitHub Mobile": "GitHub Mobile",
    "GitHub Marketplace": "GitHub Marketplace",
    "Copilot for Business": "Copilot for Business",
    "GitHub Stars": "GitHub Stars",
    "GitHub Skills": "GitHub Skills",
    DevSecOps: "DevSecOps"
  };

  // src/core/collector.ts
  var STORAGE_KEY = "gh-i18n-collect-v2";
  var MAX_ENTRIES = 5e3;
  var collected = /* @__PURE__ */ new Map();
  var saveTimer = 0;
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const obj = JSON.parse(raw);
      for (const [k, v] of Object.entries(obj)) {
        if (collected.size >= MAX_ENTRIES) break;
        const count = typeof v?.count === "number" ? v.count : 1;
        collected.set(k, {
          count,
          url: typeof v?.url === "string" ? v.url : "",
          tag: typeof v?.tag === "string" ? v.tag : "",
          cls: typeof v?.cls === "string" ? v.cls : "",
          attr: typeof v?.attr === "string" ? v.attr : ""
        });
      }
    } catch {
    }
  }
  function save() {
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.fromEntries(collected)));
      } catch {
      }
    }, 1e3);
  }
  function isWorthCollecting(s) {
    if (s.length < 2 || s.length > 200) return false;
    if (!/[A-Za-z]/.test(s)) return false;
    if (/[\u4e00-\u9fff]/.test(s)) return false;
    if (/https?:\/\/|^\s*[a-z0-9._-]+(\/[a-z0-9._~-]+)+\s*$/i.test(s)) return false;
    if (/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4}$/.test(s)) return false;
    if (!/[A-Za-z]{2,}/.test(s)) return false;
    return true;
  }
  function record(text, ctx) {
    if (!isDevMode()) return;
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
      url: ctx?.url ?? "",
      tag: ctx?.tag ?? "",
      cls: ctx?.cls ?? "",
      attr: ctx?.attr ?? ""
    });
    save();
  }
  function buildReport() {
    const arr = [...collected.entries()].map(([text, e]) => ({ text, count: e.count, url: e.url, tag: e.tag, cls: e.cls, attr: e.attr })).sort((a, b) => b.count - a.count);
    return JSON.stringify(arr);
  }
  var ALL_SET = /* @__PURE__ */ new Set();
  var ALL_MAX = 5e4;
  function collectAll(text) {
    if (ALL_SET.size >= ALL_MAX) return;
    if (!isWorthCollecting(text)) return;
    ALL_SET.add(text);
  }
  function exportReport() {
    const untranslated = [...collected.entries()].map(([text, e]) => ({ text, count: e.count, url: e.url, tag: e.tag, cls: e.cls, attr: e.attr })).sort((a, b) => b.count - a.count);
    const all = [...ALL_SET];
    return {
      untranslated,
      all,
      counts: { untranslated: untranslated.length, all: all.length },
      // 覆盖口径：未翻译文本种类 / 候选文本种类（保留术语计入"已覆盖"）
      coverage: all.length > 0 ? 1 - untranslated.length / all.length : 1
    };
  }
  var ENABLE_KEY = "gh-i18n-collect-enabled";
  var enabled = true;
  function loadEnabled() {
    try {
      if (localStorage.getItem(ENABLE_KEY) === "0") enabled = false;
    } catch {
    }
  }
  function saveEnabled() {
    try {
      localStorage.setItem(ENABLE_KEY, enabled ? "1" : "0");
    } catch {
    }
  }
  var button = null;
  function toast(label) {
    if (!button) return;
    const textNode = button.lastChild;
    const prev = textNode ? textNode.nodeValue : null;
    if (textNode) textNode.nodeValue = label;
    window.setTimeout(() => {
      if (textNode && prev !== null) textNode.nodeValue = prev;
    }, 1600);
  }
  function updateButtonState() {
    if (!button) return;
    const dot = button.firstElementChild;
    if (dot) dot.style.background = enabled ? "#1f883d" : "#8b949e";
    button.title = enabled ? "GitHub \u6C49\u5316\uFF1A\u6536\u96C6\u672A\u7FFB\u8BD1\u6587\u672C\uFF08\u70B9\u51FB\u590D\u5236 JSON\uFF1B\u53CC\u51FB\u5173\u95ED\u6536\u96C6\uFF09" : "GitHub \u6C49\u5316\uFF1A\u6536\u96C6\u5DF2\u5173\u95ED\uFF08\u53CC\u51FB\u5F00\u542F\uFF09";
  }
  function setEnabled(v) {
    enabled = v;
    saveEnabled();
    updateButtonState();
    if (button) toast(enabled ? "\u6536\u96C6\u5DF2\u5F00\u542F" : "\u6536\u96C6\u5DF2\u5173\u95ED");
  }
  async function onButtonClick() {
    const json = buildReport();
    const n = collected.size;
    try {
      await navigator.clipboard.writeText(json);
      toast(`\u5DF2\u590D\u5236 ${n} \u6761`);
    } catch {
      window.prompt("\u590D\u5236\u4EE5\u4E0B\u672A\u7FFB\u8BD1\u6587\u672C\uFF08\u5168\u9009\u540E Ctrl+C\uFF09\uFF1A", json);
      toast("\u89C1\u5F39\u7A97");
    }
  }
  function createButton() {
    const b = document.createElement("button");
    const dot = document.createElement("span");
    dot.style.cssText = [
      "position:absolute",
      "right:2px",
      "bottom:2px",
      "width:9px",
      "height:9px",
      "border-radius:50%",
      "border:1px solid #fff"
    ].join(";");
    b.appendChild(dot);
    b.appendChild(document.createTextNode("\u8BD1"));
    b.title = "GitHub \u6C49\u5316\uFF1A\u6536\u96C6\u672A\u7FFB\u8BD1\u7684\u754C\u9762\u6587\u672C\uFF08\u70B9\u51FB\u590D\u5236 JSON\uFF09";
    b.style.cssText = [
      "position:fixed",
      "left:12px",
      "bottom:12px",
      "z-index:2147483646",
      "width:40px",
      "height:40px",
      "border-radius:50%",
      "border:1px solid rgba(31,35,40,.15)",
      "background:#fff",
      "color:#1f2328",
      'font:600 14px/1 -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif',
      "cursor:pointer",
      "box-shadow:0 1px 3px rgba(31,35,40,.12)",
      "opacity:.75",
      "transition:opacity .15s"
    ].join(";");
    b.addEventListener("mouseenter", () => b.style.opacity = "1");
    b.addEventListener("mouseleave", () => b.style.opacity = ".75");
    b.addEventListener("click", () => void onButtonClick());
    b.addEventListener("dblclick", () => setEnabled(!enabled));
    return b;
  }
  function createClearButton() {
    const b = document.createElement("button");
    b.textContent = "\u6E05";
    b.title = "\u6E05\u7A7A\u5DF2\u6536\u96C6\u7684\u672A\u7FFB\u8BD1\u6587\u672C\uFF08localStorage gh-i18n-collect-v2\uFF09\uFF0C\u4E0D\u53EF\u6062\u590D";
    b.style.cssText = [
      "position:fixed",
      "left:60px",
      "bottom:12px",
      "z-index:2147483646",
      "width:40px",
      "height:40px",
      "border-radius:50%",
      "border:1px solid rgba(31,35,40,.15)",
      "background:#fff",
      "color:#8b949e",
      'font:600 14px/1 -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif',
      "cursor:pointer",
      "box-shadow:0 1px 3px rgba(31,35,40,.12)",
      "opacity:.75",
      "transition:opacity .15s"
    ].join(";");
    b.addEventListener("mouseenter", () => b.style.opacity = "1");
    b.addEventListener("mouseleave", () => b.style.opacity = ".75");
    b.addEventListener("click", () => {
      if (!window.confirm("\u786E\u5B9A\u6E05\u7A7A\u5DF2\u6536\u96C6\u7684\u672A\u7FFB\u8BD1\u6587\u672C\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002")) return;
      collected.clear();
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
      }
      b.textContent = "\u5DF2\u6E05\u7A7A";
      window.setTimeout(() => b.textContent = "\u6E05", 1500);
    });
    return b;
  }
  var DEV_KEY = "gh-i18n-dev";
  function isDevMode() {
    try {
      return localStorage.getItem(DEV_KEY) === "1";
    } catch {
      return false;
    }
  }
  function initCollectorUI() {
    if (!isDevMode()) return;
    if (button) return;
    load();
    loadEnabled();
    button = createButton();
    (document.body || document.documentElement).appendChild(button);
    const clearBtn = createClearButton();
    (document.body || document.documentElement).appendChild(clearBtn);
    window.__GH_I18N_EXPORT__ = exportReport;
    updateButtonState();
    showFirstNotice();
  }
  function showFirstNotice() {
    try {
      if (localStorage.getItem("gh-i18n-notice-v1")) return;
      localStorage.setItem("gh-i18n-notice-v1", "1");
    } catch {
      return;
    }
    const tip = document.createElement("div");
    tip.textContent = "GitHub \u6C49\u5316\u5DF2\u542F\u7528\u3002\u5DE6\u4E0B\u89D2\u300C\u8BD1\u300D\u53EF\u5BFC\u51FA\u9875\u9762\u672A\u7FFB\u8BD1\u6587\u672C\u3001\u300C\u6E05\u300D\u53EF\u6E05\u7A7A\u5DF2\u6536\u96C6\u6570\u636E\uFF08\u6570\u636E\u4EC5\u5B58\u672C\u673A\u6D4F\u89C8\u5668\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF09";
    tip.style.cssText = [
      "position:fixed",
      "left:60px",
      "bottom:16px",
      "z-index:2147483646",
      "background:#fff",
      "color:#1f2328",
      "border:1px solid rgba(31,35,40,.15)",
      "box-shadow:0 1px 3px rgba(31,35,40,.12)",
      "border-radius:6px",
      "padding:8px 12px",
      'font:12px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif',
      "max-width:340px",
      "pointer-events:none"
    ].join(";");
    (document.body || document.documentElement).appendChild(tip);
    window.setTimeout(() => tip.remove(), 8e3);
  }

  // src/core/translator.ts
  var DICT = { ...zh_CN_default, ...glossary_default };
  var TIME_UNIT_CN = {
    second: "\u79D2",
    seconds: "\u79D2",
    minute: "\u5206\u949F",
    minutes: "\u5206\u949F",
    hour: "\u5C0F\u65F6",
    hours: "\u5C0F\u65F6",
    day: "\u5929",
    days: "\u5929",
    week: "\u5468",
    weeks: "\u5468",
    month: "\u4E2A\u6708",
    months: "\u4E2A\u6708",
    year: "\u5E74",
    years: "\u5E74"
  };
  var MONTH_CN = {
    January: "1",
    February: "2",
    March: "3",
    April: "4",
    May: "5",
    June: "6",
    July: "7",
    August: "8",
    September: "9",
    October: "10",
    November: "11",
    December: "12",
    Jan: "1",
    Feb: "2",
    Mar: "3",
    Apr: "4",
    Jun: "6",
    Jul: "7",
    Aug: "8",
    Sep: "9",
    Oct: "10",
    Nov: "11",
    Dec: "12"
  };
  function periodCn(p) {
    const m = /^(\d+)?\s*(second|minute|hour|day|week|month|year)s?$/.exec(p.trim());
    if (!m) return null;
    const unit = TIME_UNIT_CN[m[2]];
    if (!unit) return null;
    return m[1] ? `${m[1]} ${unit}` : `\u4E00${unit}`;
  }
  var WEEK_CN = {
    Sunday: "\u661F\u671F\u65E5",
    Monday: "\u661F\u671F\u4E00",
    Tuesday: "\u661F\u671F\u4E8C",
    Wednesday: "\u661F\u671F\u4E09",
    Thursday: "\u661F\u671F\u56DB",
    Friday: "\u661F\u671F\u4E94",
    Saturday: "\u661F\u671F\u516D"
  };
  var EMOJI_CN = {
    rocket: "\u706B\u7BAD",
    eyes: "\u773C\u775B",
    laugh: "\u5927\u7B11",
    hooray: "\u6B22\u547C",
    confused: "\u56F0\u60D1",
    heart: "\u7231\u5FC3",
    "thumbs up": "\u70B9\u8D5E",
    "thumbs down": "\u70B9\u8E29"
  };
  var ACTION_VERB_CN = {
    Updated: "\u66F4\u65B0",
    Pushed: "\u63A8\u9001",
    Created: "\u521B\u5EFA",
    Committed: "\u63D0\u4EA4",
    Authored: "\u7F16\u5199",
    Merged: "\u5408\u5E76",
    Closed: "\u5173\u95ED",
    Opened: "\u6253\u5F00",
    Starred: "\u661F\u6807",
    Forked: "\u590D\u523B",
    Joined: "\u52A0\u5165",
    "Last active": "\u6D3B\u8DC3",
    Edited: "\u7F16\u8F91",
    Reviewed: "\u5BA1\u67E5"
  };
  var NUM = "(\\d[\\d,]*(?:\\.\\d+)?[kK]?)";
  var UNIT = "(seconds?|minutes?|hours?|days?|weeks?|months?|years?)";
  var TIME_AGO = new RegExp(`^${NUM}\\s+${UNIT}\\s+ago$`);
  var ACTION_TIME_AGO = new RegExp(`^(Updated|Pushed|Created|Committed|Authored|Merged|Closed|Opened|Starred|Forked|Joined|Last active|Edited|Reviewed)\\s+${NUM}\\s+${UNIT}\\s+ago$`);
  var RULES = [
    // 「3 days ago」→「3 天前」
    (s) => {
      const m = TIME_AGO.exec(s);
      if (m) return `${m[1]} ${TIME_UNIT_CN[m[2]]}\u524D`;
      return null;
    },
    // 「Pushed 3 days ago」→「3 天前推送」
    (s) => {
      const m = ACTION_TIME_AGO.exec(s);
      if (m) return `${m[2]} ${TIME_UNIT_CN[m[3]]}\u524D${ACTION_VERB_CN[m[1]]}`;
      return null;
    },
    // 「3 unread notifications」→「3 条未读通知」
    (s) => {
      const m = new RegExp(`^${NUM}\\s+unread notifications?$`).exec(s);
      if (m) return `${m[1]} \u6761\u672A\u8BFB\u901A\u77E5`;
      return null;
    },
    // 计数：「N commits / stars / forks / branches / tags / releases / issues / PR / contributors ...」
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(commits?)$`, "i").exec(s);
      if (m) return `${m[1]} \u6B21\u63D0\u4EA4`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(stars?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u661F\u6807`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(forks?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u590D\u523B`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(branches?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u5206\u652F`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(tags?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u6807\u7B7E`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(releases?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u7248\u672C\u53D1\u5E03`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(issues?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u8BAE\u9898`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(pull requests?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u62C9\u53D6\u8BF7\u6C42`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(contributors?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4F4D\u8D21\u732E\u8005`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(followers?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4F4D\u5173\u6CE8\u8005`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(following)$`, "i").exec(s);
      if (m) return `${m[1]} \u4F4D\u6B63\u5728\u5173\u6CE8`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(watchers?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4F4D\u5173\u6CE8\u8005`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(participants?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4F4D\u53C2\u4E0E\u8005`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(comments?)$`, "i").exec(s);
      if (m) return `${m[1]} \u6761\u8BC4\u8BBA`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(replies?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u56DE\u590D`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(members?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4F4D\u6210\u5458`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(teams?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u56E2\u961F`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(repositories?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u4ED3\u5E93`;
      return null;
    },
    // 凭据/预算类计数（设置页）
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(tokens?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u4EE4\u724C`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(keys?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u5BC6\u94A5`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(OAuth apps?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A OAuth \u5E94\u7528`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(GitHub Apps?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A GitHub \u5E94\u7528`;
      return null;
    },
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(Account budgets?)$`, "i").exec(s);
      if (m) return `${m[1]} \u4E2A\u8D26\u6237\u9884\u7B97`;
      return null;
    },
    // 账户安全：'2 verified emails configured' → '已配置 2 个已验证邮箱'
    (s) => {
      const m = new RegExp(`^${NUM}\\s+verified emails? configured$`).exec(s);
      if (m) return `\u5DF2\u914D\u7F6E ${m[1]} \u4E2A\u5DF2\u9A8C\u8BC1\u90AE\u7BB1`;
      return null;
    },
    // 登录方式：'1 account connected' → '已连接 1 个账户'
    (s) => {
      const m = new RegExp(`^${NUM}\\s+accounts? connected$`).exec(s);
      if (m) return `\u5DF2\u8FDE\u63A5 ${m[1]} \u4E2A\u8D26\u6237`;
      return null;
    },
    // 用户主页：'Unstar owner/repo' → '取消星标 owner/repo'
    (s) => {
      const m = /^Unstar (.+)$/.exec(s);
      if (m) return `\u53D6\u6D88\u661F\u6807 ${m[1]}`;
      return null;
    },
    // 用户主页：'Block or report owner' → '屏蔽或举报 owner'
    (s) => {
      const m = /^Block or report (.+)$/.exec(s);
      if (m) return `\u5C4F\u853D\u6216\u4E3E\u62A5 ${m[1]}`;
      return null;
    },
    // 资料页社交链接：'Link to social profile 1' → '社交主页链接 1'
    (s) => {
      const m = /^Link to social profile (\d+)$/.exec(s);
      if (m) return `\u793E\u4EA4\u4E3B\u9875\u94FE\u63A5 ${m[1]}`;
      return null;
    },
    // 主题选项：'4 (Default)' → '4（默认）'
    (s) => {
      const m = /^(\d+) \(Default\)$/.exec(s);
      if (m) return `${m[1]}\uFF08\u9ED8\u8BA4\uFF09`;
      return null;
    },
    // 贡献提示：'First time contributing to owner/repo?' → '第一次向 owner/repo 贡献？'
    (s) => {
      const m = /^First time contributing to (.+)\?$/.exec(s);
      if (m) return `\u7B2C\u4E00\u6B21\u5411 ${m[1]} \u8D21\u732E\uFF1F`;
      return null;
    },
    // 资料链接 aria-label："View owner's profile" → '查看 owner 的资料'
    (s) => {
      const m = /^View (.+)'s profile$/.exec(s);
      if (m) return `\u67E5\u770B ${m[1]} \u7684\u8D44\u6599`;
      return null;
    },
    // 提交活动图日期 aria-label："Sunday, 10 May 2026, 0. Commits." → '2026年5月10日 星期日，0 次提交。'
    (s) => {
      const m = /^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday), (\d{1,2}) ([A-Za-z]+) (\d{4}), (\d+)\. Commits\.$/.exec(s);
      if (m && MONTH_CN[m[3]]) return `${m[4]}\u5E74${MONTH_CN[m[3]]}\u6708${m[2]}\u65E5 ${WEEK_CN[m[1]]}\uFF0C${m[5]} \u6B21\u63D0\u4EA4\u3002`;
      return null;
    },
    // pulse 页：'Excluding merges, 1 author has pushed 4 commits to main and 4 commits to all branches.'（main/master 兼容，数字可带千分位逗号）
    (s) => {
      const m = /^Excluding merges, ([\d,]+) author(?:s)? (?:has|have) pushed ([\d,]+) commit(?:s)? to (main|master) and ([\d,]+) commit(?:s)? to all branches\.$/.exec(s);
      if (m) return `\u6392\u9664\u5408\u5E76\u63D0\u4EA4\uFF0C${m[1]} \u4F4D\u4F5C\u8005\u5DF2\u5411 ${m[3]} \u63A8\u9001 ${m[2]} \u6B21\u63D0\u4EA4\uFF0C\u5411\u6240\u6709\u5206\u652F\u63A8\u9001 ${m[4]} \u6B21\u63D0\u4EA4\u3002`;
      return null;
    },
    // pulse 页：'On main, 9 files have changed and there have been 226 additions and 54 deletions.'（main/master 兼容，数字可带千分位逗号）
    (s) => {
      const m = /^On (main|master), ([\d,]+) file(?:s)? have changed and there have been ([\d,]+) addition(?:s)? and ([\d,]+) deletion(?:s)?\.$/.exec(s);
      if (m) return `\u5728 ${m[1]} \u5206\u652F\u4E0A\uFF0C${m[2]} \u4E2A\u6587\u4EF6\u5DF2\u66F4\u6539\uFF0C\u5171\u6709 ${m[3]} \u5904\u6DFB\u52A0\u548C ${m[4]} \u5904\u5220\u9664\u3002`;
      return null;
    },
    // Actions 页：'Today at  08:45' → '今天 08:45'
    (s) => {
      const m = /^Today at (.+)$/.exec(s);
      if (m) return `\u4ECA\u5929 ${m[1]}`;
      return null;
    },
    // pulse 页：'1 release published by 1 person' → '发布 1 个版本（1 人）'
    (s) => {
      const m = /^(\d+) release(?:s)? published by (\d+) person(?:s)?$/.exec(s);
      if (m) return `\u53D1\u5E03 ${m[1]} \u4E2A\u7248\u672C\uFF08${m[2]} \u4EBA\uFF09`;
      return null;
    },
    // pulse 页：'1 pull request merged by 1 person' → '合并 1 个拉取请求（1 人）'
    (s) => {
      const m = /^(\d+) pull requests? merged by (\d+) person(?:s)?$/.exec(s);
      if (m) return `\u5408\u5E76 ${m[1]} \u4E2A\u62C9\u53D6\u8BF7\u6C42\uFF08${m[2]} \u4EBA\uFF09`;
      return null;
    },
    // pulse 页：'Commits over the last year of owner/repo' → '过去一年 owner/repo 的提交'
    (s) => {
      const m = /^Commits over the last year of (.+)$/.exec(s);
      if (m) return `\u8FC7\u53BB\u4E00\u5E74 ${m[1]} \u7684\u63D0\u4EA4`;
      return null;
    },
    // 邮箱设置长句（含动态邮箱）："We'll remove your public profile email and use <noreply> when performing..."
    (s) => {
      const m = /^We'll remove your public profile email and use (.+) when performing web-based Git operations \(e\.g\. edits and merges\) and sending email on your behalf\. If you want command line Git operations to use your private email you must$/.exec(s);
      if (m) return `\u6211\u4EEC\u5C06\u5220\u9664\u4F60\u7684\u516C\u5F00\u8D44\u6599\u90AE\u7BB1\uFF0C\u5E76\u5728\u6267\u884C\u57FA\u4E8E\u7F51\u9875\u7684 Git \u64CD\u4F5C\uFF08\u5982\u7F16\u8F91\u548C\u5408\u5E76\uFF09\u4EE5\u53CA\u4EE3\u4F60\u53D1\u9001\u90AE\u4EF6\u65F6\u4F7F\u7528 ${m[1]}\u3002\u5982\u679C\u4F60\u5E0C\u671B\u547D\u4EE4\u884C Git \u64CD\u4F5C\u4F7F\u7528\u4F60\u7684\u79C1\u6709\u90AE\u7BB1\uFF0C\u5219\u5FC5\u987B`;
      return null;
    },
    // 邮箱设置长句（含动态邮箱）：'Emails you can use to sign in... All web-based Git operations will be linked to <noreply>.'
    (s) => {
      const m = /^Emails you can use to sign in to your account\. Your emails will not be used as the 'from' address for web-based Git operations, e\.g\. edits and merges\. All web-based Git operations will be linked to (.+)\.$/.exec(s);
      if (m) return `\u53EF\u7528\u4E8E\u767B\u5F55\u8D26\u6237\u7684\u90AE\u7BB1\u3002\u4F60\u7684\u90AE\u7BB1\u4E0D\u4F1A\u7528\u4F5C\u57FA\u4E8E\u7F51\u9875\u7684 Git \u64CD\u4F5C\uFF08\u5982\u7F16\u8F91\u548C\u5408\u5E76\uFF09\u7684\u53D1\u4EF6\u5730\u5740\u3002\u6240\u6709\u57FA\u4E8E\u7F51\u9875\u7684 Git \u64CD\u4F5C\u90FD\u5C06\u5173\u8054\u5230 ${m[1]}\u3002`;
      return null;
    },
    // 账单页：'Gross metered usage for August 1 - August 30, 2026.'（含英文月份 → 中文）
    (s) => {
      const m = /^Gross metered usage for ([A-Za-z]+) (\d{1,2}) - ([A-Za-z]+) (\d{1,2}), (\d{4})\.$/.exec(s);
      if (m && MONTH_CN[m[1]] && MONTH_CN[m[3]]) {
        return `\u8BA1\u91CF\u7528\u91CF\u603B\u989D\uFF08${MONTH_CN[m[1]]}\u6708${m[2]}\u65E5 - ${MONTH_CN[m[3]]}\u6708${m[4]}\u65E5\uFF0C${m[5]}\uFF09`;
      }
      return null;
    },
    (s) => {
      const m = /^Included usage discounts for ([A-Za-z]+) (\d{1,2}) - ([A-Za-z]+) (\d{1,2}), (\d{4})\.$/.exec(s);
      if (m && MONTH_CN[m[1]] && MONTH_CN[m[3]]) {
        return `\u5305\u542B\u7528\u91CF\u6298\u6263\uFF08${MONTH_CN[m[1]]}\u6708${m[2]}\u65E5 - ${MONTH_CN[m[3]]}\u6708${m[4]}\u65E5\uFF0C${m[5]}\uFF09`;
      }
      return null;
    },
    // 账单页：'0 GB used / 1 GB included' / '112 min used / 2,000 min included'
    (s) => {
      const m = /^([\d.]+) ([\w]+) used \/ ([\d.,]+) ([\w]+) included$/.exec(s);
      if (m) return `\u5DF2\u7528 ${m[1]} ${m[2]} / \u5305\u542B ${m[3]} ${m[4]}`;
      return null;
    },
    // 账单页：'Included usage limits reset in 15 days.'
    (s) => {
      const m = /^Included usage limits reset in (\d+) days?\.$/.exec(s);
      if (m) return `\u5305\u542B\u7528\u91CF\u9650\u989D\u5C06\u5728 ${m[1]} \u5929\u540E\u91CD\u7F6E\u3002`;
      return null;
    },
    // 账单页：'Cost calculated based on 0 Spark AI credits that exceed...'
    (s) => {
      const m = /^Cost calculated based on ([\d,]+) Spark AI credits? that exceed the AI credits usage included with your Copilot licenses\.$/.exec(s);
      if (m) return `\u57FA\u4E8E\u8D85\u51FA\u4F60\u7684 Copilot \u8BB8\u53EF\u8BC1\u6240\u542B AI \u79EF\u5206\u7528\u91CF\u7684 ${m[1]} \u4E2A Spark AI \u79EF\u5206\u8BA1\u7B97\u3002`;
      return null;
    },
    // 账单页：'Cost calculated based on additional 0 token units'
    (s) => {
      const m = /^Cost calculated based on additional ([\d,]+) token units?$/.exec(s);
      if (m) return `\u57FA\u4E8E\u989D\u5916\u7684 ${m[1]} \u4E2A\u4EE4\u724C\u5355\u4F4D\u8BA1\u7B97\u3002`;
      return null;
    },
    // 会话页：'Seen in JP, SG' → '曾在 JP、SG'
    (s) => {
      const m = /^Seen in (.+)$/.exec(s);
      if (m) return `\u66FE\u5728 ${m[1]}`;
      return null;
    },
    // 邮箱页：'Manage email a@b.com' → '管理邮箱 a@b.com'
    (s) => {
      const m = /^Manage email (.+)$/.exec(s);
      if (m) return `\u7BA1\u7406\u90AE\u7BB1 ${m[1]}`;
      return null;
    },
    // 邮箱页：'Delete a@b.com' → '删除 a@b.com'
    (s) => {
      const m = /^Delete (.+@.+)$/.exec(s);
      if (m) return `\u5220\u9664 ${m[1]}`;
      return null;
    },
    // 会话页：'View details of session from Tokyo last accessed August 17, 2026'
    (s) => {
      const m = /^View details of session from (.+) last accessed (.+)$/.exec(s);
      if (m) return `\u67E5\u770B\u6765\u81EA ${m[1]} \u7684\u4F1A\u8BDD\u8BE6\u60C5\uFF0C\u4E0A\u6B21\u8BBF\u95EE\u4E8E ${m[2]}`;
      return null;
    },
    // admin 导出：'Exports will be available for 7 days.'（兼容天数变体与可选前导句点/空白）
    (s) => {
      const m = /^\.?\s*Exports? will be available for (\d+) days?\.$/.exec(s);
      if (m) return `\u5BFC\u51FA\u6587\u4EF6\u5C06\u5728 ${m[1]} \u5929\u5185\u53EF\u7528\u3002`;
      return null;
    },
    // admin 继任者长句（@owner 在文本内，无 strong 拆分）：'By clicking "Add Successor" below, I acknowledge that I am the owner of the @owner account, and am authorizing...my GitHub Successor,'
    (s) => {
      const m = /^By clicking "Add Successor" below, I acknowledge that I am the owner of the (.+) account, and am authorizing GitHub to transfer content within that account to my GitHub Successor,$/.exec(s);
      if (m) return `\u70B9\u51FB\u4E0B\u65B9"\u6DFB\u52A0\u7EE7\u4EFB\u8005"\uFF0C\u5373\u8868\u793A\u6211\u786E\u8BA4\u81EA\u5DF1\u662F ${m[1]} \u8D26\u6237\u7684\u6240\u6709\u8005\uFF0C\u5E76\u6388\u6743 GitHub \u5C06\u8BE5\u8D26\u6237\u4E2D\u7684\u5185\u5BB9\u8F6C\u79FB\u7ED9\u6211\u7684 GitHub \u7EE7\u4EFB\u8005\uFF0C`;
      return null;
    },
    // 仓库设置：'0 collaborators' → '0 个协作者'
    (s) => {
      const m = /^(\d+) collaborators?$/.exec(s);
      if (m) return `${m[1]} \u4E2A\u534F\u4F5C\u8005`;
      return null;
    },
    // Copilot 设置：'0% used' → '已使用 0%'
    (s) => {
      const m = /^([\d.]+)% used$/.exec(s);
      if (m) return `\u5DF2\u4F7F\u7528 ${m[1]}%`;
      return null;
    },
    // Codespaces 设置：'Selected 0 repositories.' → '已选择 0 个仓库。'
    (s) => {
      const m = /^Selected ([\d,]+) repositories?\.$/.exec(s);
      if (m) return `\u5DF2\u9009\u62E9 ${m[1]} \u4E2A\u4ED3\u5E93\u3002`;
      return null;
    },
    // Copilot 入门步骤：'0/3 complete' → '已完成 0/3'
    (s) => {
      const m = /^(\d+)\/(\d+) complete$/.exec(s);
      if (m) return `\u5DF2\u5B8C\u6210 ${m[1]}/${m[2]}`;
      return null;
    },
    // Copilot 设置生效提示：'It can take up to 30 minutes for the changes to take effect. Restart your code editor for the changes to take effect immediately.'
    (s) => {
      const m = /^It can take up to (\d+) minutes? for the changes to take effect\. Restart your code editor for the changes to take effect immediately\.$/.exec(s);
      if (m) return `\u66F4\u6539\u6700\u591A\u53EF\u80FD\u9700\u8981 ${m[1]} \u5206\u949F\u624D\u80FD\u751F\u6548\u3002\u91CD\u542F\u4EE3\u7801\u7F16\u8F91\u5668\u53EF\u7ACB\u5373\u751F\u6548\u3002`;
      return null;
    },
    // Packages 设置：'No recoverable packages were found for owner.' → '未找到 owner 可恢复的软件包。'
    (s) => {
      const m = /^No recoverable packages were found for (.+)\.$/.exec(s);
      if (m) return `\u672A\u627E\u5230 ${m[1]} \u53EF\u6062\u590D\u7684\u8F6F\u4EF6\u5305\u3002`;
      return null;
    },
    // 仓库页星标提示：'1 user starred this repository' → '1 个用户给此仓库点了星标'
    (s) => {
      const m = /^(\d+) users? starred this repository$/.exec(s);
      if (m) return `${m[1]} \u4E2A\u7528\u6237\u7ED9\u6B64\u4ED3\u5E93\u70B9\u4E86\u661F\u6807`;
      return null;
    },
    // 图表 aria-label：'Bar chart with 2 bars.' → '包含 2 个条形的条形图'
    (s) => {
      const m = /^Bar chart with (\d+) bars?\.$/.exec(s);
      if (m) return `\u5305\u542B ${m[1]} \u4E2A\u6761\u5F62\u7684\u6761\u5F62\u56FE`;
      return null;
    },
    // 设置-仓库页 commit comments 后段（链接拆分，前导空白可变）：
    // 'are enabled or disabled by default for repositories you own. Individual repositories can override this default. Existing commit comments are not affected by this setting and will remain viewable, editable, and deletable.'
    (s) => {
      const m = /^\s*are enabled or disabled by default for repositories you own\. Individual repositories can override this default\. Existing commit comments are not affected by this setting and will remain viewable, editable, and deletable\.$/.exec(s);
      if (m) return "\u9ED8\u8BA4\u5BF9\u4F60\u62E5\u6709\u7684\u4ED3\u5E93\u542F\u7528\u8FD8\u662F\u7981\u7528\u3002\u5355\u4E2A\u4ED3\u5E93\u53EF\u4EE5\u8986\u76D6\u6B64\u9ED8\u8BA4\u503C\u3002\u73B0\u6709\u7684\u63D0\u4EA4\u8BC4\u8BBA\u4E0D\u53D7\u6B64\u8BBE\u7F6E\u5F71\u54CD\uFF0C\u5C06\u7EE7\u7EED\u4FDD\u6301\u53EF\u89C1\u3001\u53EF\u7F16\u8F91\u548C\u53EF\u5220\u9664\u3002";
      return null;
    },
    // 提交图 aria-label：'commits by owner' → '由 owner 提交'
    (s) => {
      const m = /^commits by (.+)$/.exec(s);
      if (m) return `\u7531 ${m[1]} \u63D0\u4EA4`;
      return null;
    },
    // 预算页 aria-label：'View actions for CustomerResource owner's budget' → '查看 CustomerResource owner 的预算操作'
    (s) => {
      const m = /^View actions for CustomerResource (.+)'s budget$/.exec(s);
      if (m) return `\u67E5\u770B CustomerResource ${m[1]} \u7684\u9884\u7B97\u64CD\u4F5C`;
      return null;
    },
    // 屏蔽用户字符计数：'250 characters remaining.' → '剩余 250 个字符。'
    (s) => {
      const m = /^(\d+) characters? remaining\.$/.exec(s);
      if (m) return `\u5269\u4F59 ${m[1]} \u4E2A\u5B57\u7B26\u3002`;
      return null;
    },
    // 安全分析确认弹窗（动态账户名）：
    // "You're about to disable private vulnerability reporting on all public repositories in owner."
    (s) => {
      const m = /^You're about to (disable|enable) (.+?) on all public repositories in (.+)\.$/.exec(s);
      if (m) {
        const raw = m[2];
        const cap = raw.charAt(0).toUpperCase() + raw.slice(1);
        const name = lookup(raw) ?? lookup(cap) ?? raw;
        return `\u4F60\u5373\u5C06\u5728 ${m[3]} \u7684\u6240\u6709\u516C\u5171\u4ED3\u5E93\u4E2D${m[1] === "disable" ? "\u7981\u7528" : "\u542F\u7528"} ${name}\u3002`;
      }
      return null;
    },
    // issue/PR 时间线日期：'on Nov 19, 2015' → '2015年11月19日'
    (s) => {
      const m = /^on ([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
      if (m && MONTH_CN[m[1]]) return `${m[3]}\u5E74${MONTH_CN[m[1]]}\u6708${m[2]}\u65E5`;
      return null;
    },
    // issue 时间线：'This user has previously committed to the vscode repository.'（动态仓库名）
    (s) => {
      const m = /^This user has previously committed to the (.+) repository\.$/.exec(s);
      if (m) return `\u6B64\u7528\u6237\u4E4B\u524D\u66FE\u5411 ${m[1]} \u4ED3\u5E93\u63D0\u4EA4\u8FC7\u3002`;
      return null;
    },
    // 用户名资料链接 aria-label：'@chrisdias's profile' → '@chrisdias 的资料'
    (s) => {
      const m = /^@(.+)'s profile$/.exec(s);
      if (m) return `@${m[1]} \u7684\u8D44\u6599`;
      return null;
    },
    // 仓库归属提示 aria-label：'You own owner/repo and are not a member of any organization'
    (s) => {
      const m = /^You own (.+) and are not a member of any organization$/.exec(s);
      if (m) return `\u4F60\u62E5\u6709 ${m[1]} \u4E14\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u7EC4\u7EC7`;
      return null;
    },
    // 主题页 title：'Topic: awesome-list' → '主题：awesome-list'
    (s) => {
      const m = /^Topic: (.+)$/.exec(s);
      if (m) return `\u4E3B\u9898\uFF1A${m[1]}`;
      return null;
    },
    // Pulse 页标题：'Insights: owner/repo' → '洞察：owner/repo'
    (s) => {
      const m = /^Insights: (.+)$/.exec(s);
      if (m) return `\u6D1E\u5BDF\uFF1A${m[1]}`;
      return null;
    },
    // 搜索计数：'19.4M results' → '19.4M 条结果'
    (s) => {
      const m = /^([\d.]+[KMB]?) results$/.exec(s);
      if (m) return `${m[1]} \u6761\u7ED3\u679C`;
      return null;
    },
    // 搜索分页 aria：'Page 7...' → '第 7 页...'
    (s) => {
      const m = /^Page (\d+)\.\.\.$/.exec(s);
      if (m) return `\u7B2C ${m[1]} \u9875...`;
      return null;
    },
    // 文件树 aria：'README.md, (File)' / 'src, (Directory)' → 'README.md（文件）'
    (s) => {
      const m = /^(.+), \((Directory|File)\)$/.exec(s);
      if (m) return `${m[1]}\uFF08${m[2] === "Directory" ? "\u76EE\u5F55" : "\u6587\u4EF6"}\uFF09`;
      return null;
    },
    // 提交列表 aria：'Copy full SHA for 176a773' → '复制完整 SHA：176a773'
    (s) => {
      const m = /^Copy full SHA for ([0-9a-f]+)$/.exec(s);
      if (m) return `\u590D\u5236\u5B8C\u6574 SHA\uFF1A${m[1]}`;
      return null;
    },
    // blob 统计：'77 lines (48 loc) · 6.67 KB' → '77 行（48 行代码）· 6.67 KB'
    (s) => {
      const m = /^(\d+) lines \((\d+) loc\) · ([\d.]+ KB)$/.exec(s);
      if (m) return `${m[1]} \u884C\uFF08${m[2]} \u884C\u4EE3\u7801\uFF09\xB7 ${m[3]}`;
      return null;
    },
    // Actions 运行计数：'8 workflow runs' → '8 个工作流运行'
    (s) => {
      const m = /^(\d+) workflow runs?$/.exec(s);
      if (m) return `${m[1]} \u4E2A\u5DE5\u4F5C\u6D41\u8FD0\u884C`;
      return null;
    },
    // 贡献图月份轴：'Jun '26' → '2026年6月'
    (s) => {
      const m = /^([A-Z][a-z]{2}) '(\d{2})$/.exec(s);
      if (m && MONTH_CN[m[1]]) return `20${m[2]}\u5E74${MONTH_CN[m[1]]}\u6708`;
      return null;
    },
    // 组织话题计数 aria：'Show 2 more topics' → '再显示 2 个主题'
    (s) => {
      const m = /^Show (\d+) more topics$/.exec(s);
      if (m) return `\u518D\u663E\u793A ${m[1]} \u4E2A\u4E3B\u9898`;
      return null;
    },
    // pulse 页列表：'3 Active pull requests' / '0 Merged pull requests' / '2 New issues'
    (s) => {
      const m = /^(\d+)\s+(Merged pull requests|Open pull requests|New issues|Closed issues|Active pull requests|Active issues)$/.exec(s);
      if (m) {
        const map = {
          "Merged pull requests": "\u5DF2\u5408\u5E76\u7684\u62C9\u53D6\u8BF7\u6C42",
          "Open pull requests": "\u5F85\u5904\u7406\u7684\u62C9\u53D6\u8BF7\u6C42",
          "New issues": "\u65B0\u8BAE\u9898",
          "Closed issues": "\u5DF2\u5173\u95ED\u7684\u8BAE\u9898",
          "Active pull requests": "\u6D3B\u8DC3\u7684\u62C9\u53D6\u8BF7\u6C42",
          "Active issues": "\u6D3B\u8DC3\u7684\u8BAE\u9898"
        };
        return `${m[1]} \u4E2A${map[m[2]]}`;
      }
      return null;
    },
    // Actions 指标页：'Showing data from 2026/8/1 to 21 分钟前' → '显示数据从 2026/8/1 到 21 分钟前'
    (s) => {
      const m = /^Showing data from (.+) to (.+)$/.exec(s);
      if (m) return `\u663E\u793A\u6570\u636E\u4ECE ${m[1]} \u5230 ${m[2]}`;
      return null;
    },
    // Topics 主题页：'Add a description, image, and links to the dsh-plugin topic page so that developers can more easily learn about it.'
    (s) => {
      const m = /^Add a description, image, and links to the (.+) topic page so that developers can more easily learn about it\.$/.exec(s);
      if (m) return `\u4E3A\u4E3B\u9898 ${m[1]} \u6DFB\u52A0\u63CF\u8FF0\u3001\u56FE\u7247\u548C\u94FE\u63A5\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u66F4\u8F7B\u677E\u5730\u4E86\u89E3\u5B83\u3002`;
      return null;
    },
    // Topics 主题页：'To associate your repository with the dsh-plugin topic, visit your repo's landing page and select "manage topics."'
    (s) => {
      const m = /^To associate your repository with the (.+) topic, visit your repo's landing page and select "manage topics\."$/.exec(s);
      if (m) return `\u8981\u5C06\u4F60\u7684\u4ED3\u5E93\u4E0E\u4E3B\u9898 ${m[1]} \u5173\u8054\uFF0C\u8BF7\u8BBF\u95EE\u4ED3\u5E93\u4E3B\u9875\u5E76\u9009\u62E9"\u7BA1\u7406\u4E3B\u9898"\u3002`;
      return null;
    },
    // Topics 主题页：'Here are 1,408 public repositories matching this topic...'
    (s) => {
      const m = /^Here are ([\d,]+) public repositories? matching this topic\.\.\.$/.exec(s);
      if (m) return `\u8FD9\u91CC\u6709 ${m[1]} \u4E2A\u5339\u914D\u6B64\u4E3B\u9898\u7684\u516C\u5171\u4ED3\u5E93...`;
      return null;
    },
    // 讨论帖：'Upvote: 1' → '赞同：1'
    (s) => {
      const m = /^Upvote: ([\d,]+)$/.exec(s);
      if (m) return `\u8D5E\u540C\uFF1A${m[1]}`;
      return null;
    },
    // 讨论帖：'Write a reply: 用户名, 时间' → '撰写回复：用户名, 时间'
    (s) => {
      const m = /^Write a reply: (.+)$/.exec(s);
      if (m) return `\u64B0\u5199\u56DE\u590D\uFF1A${m[1]}`;
      return null;
    },
    // 讨论帖：'react with rocket' → '用火箭回应'
    (s) => {
      const m = /^react with (.+)$/.exec(s);
      if (m) return `\u7528 ${EMOJI_CN[m[1]] ?? m[1]} \u56DE\u5E94`;
      return null;
    },
    // 讨论帖：'sakikoTGW reacted with rocket emoji' → 'sakikoTGW 用火箭表情回应'
    (s) => {
      const m = /^(.+) reacted with (.+) emoji$/.exec(s);
      if (m) return `${m[1]} \u7528 ${EMOJI_CN[m[2]] ?? m[2]} \u8868\u60C5\u56DE\u5E94`;
      return null;
    },
    // 讨论帖：'1 reaction' → '1 个回应'
    (s) => {
      const m = /^(\d+) reactions?$/.exec(s);
      if (m) return `${m[1]} \u4E2A\u56DE\u5E94`;
      return null;
    },
    // pulse 加粗拆分碎片：'1 author' → '1 位作者'
    (s) => {
      const m = /^(\d+) author(?:s)?$/.exec(s);
      if (m) return `${m[1]} \u4F4D\u4F5C\u8005`;
      return null;
    },
    // pulse 加粗拆分碎片：'4 commits to main and 4 commits to all branches.'
    (s) => {
      const m = /^(\d+) commit(?:s)? to main and (\d+) commit(?:s)? to all branches\.$/.exec(s);
      if (m) return `${m[1]} \u6B21\u63D0\u4EA4\u5230 main\uFF0C${m[2]} \u6B21\u63D0\u4EA4\u5230\u6240\u6709\u5206\u652F`;
      return null;
    },
    // pulse 加粗拆分碎片：'9 files have changed and there have been '
    (s) => {
      const m = /^(\d+) file(?:s)? have changed and there have been $/.exec(s);
      if (m) return `${m[1]} \u4E2A\u6587\u4EF6\u5DF2\u66F4\u6539\uFF0C\u5171\u6709 `;
      return null;
    },
    // pulse 加粗拆分碎片：'226 additions' / '54 deletions'
    (s) => {
      const m = /^(\d+) additions?$/.exec(s);
      if (m) return `${m[1]} \u5904\u6DFB\u52A0`;
      return null;
    },
    (s) => {
      const m = /^(\d+) deletions?$/.exec(s);
      if (m) return `${m[1]} \u5904\u5220\u9664`;
      return null;
    },
    // 筛选周期：'6 months' / '2 years'
    (s) => {
      const m = /^(\d+) months?$/.exec(s);
      if (m) return `${m[1]} \u4E2A\u6708`;
      return null;
    },
    (s) => {
      const m = /^(\d+) years?$/.exec(s);
      if (m) return `${m[1]} \u5E74`;
      return null;
    },
    // 贡献图日期（含月份转换）：「No contributions on August 10th.」「7 contributions on July 26th.」
    (s) => {
      const m = /^No contributions? on ([A-Za-z]+) (\d{1,2})(?:st|nd|rd|th)?\.$/.exec(s);
      if (m && MONTH_CN[m[1]]) return `${MONTH_CN[m[1]]}\u6708${m[2]}\u65E5\u65E0\u8D21\u732E`;
      return null;
    },
    (s) => {
      const m = /^(\d+) contributions? on ([A-Za-z]+) (\d{1,2})(?:st|nd|rd|th)?\.$/.exec(s);
      if (m && MONTH_CN[m[2]]) return `${m[1]} \u6B21\u8D21\u732E\u4E8E ${MONTH_CN[m[2]]}\u6708${m[3]}\u65E5`;
      return null;
    },
    // issues / PR 列表 tab：「23 Open」→「23 个待处理」「45 Closed」→「45 个已关闭」
    (s) => {
      const m = new RegExp(`^${NUM}\\s+(Open|Closed)$`).exec(s);
      if (m) return `${m[1]} \u4E2A${m[2] === "Open" ? "\u5F85\u5904\u7406" : "\u5DF2\u5173\u95ED"}`;
      return null;
    },
    // sudo 模式验证码（邮箱动态，保留原文）：
    // 「Enter the verification code sent to n***@163.com. If it doesn't appear within a few minutes, check your spam folder.」
    (s) => {
      const m = /^Enter the verification code sent to (.+)\. If it doesn't appear within a few minutes, check your spam folder\.$/.exec(s);
      if (m) return `\u8F93\u5165\u53D1\u9001\u5230 ${m[1]} \u7684\u9A8C\u8BC1\u7801\u3002\u5982\u679C\u51E0\u5206\u949F\u5185\u6CA1\u6709\u6536\u5230\uFF0C\u8BF7\u68C0\u67E5\u5783\u573E\u90AE\u4EF6\u6587\u4EF6\u5939\u3002`;
      return null;
    },
    // sudo 模式验证码（只有前半句时）
    (s) => {
      const m = /^Enter the verification code sent to (.+)\.$/.exec(s);
      if (m) return `\u8F93\u5165\u53D1\u9001\u5230 ${m[1]} \u7684\u9A8C\u8BC1\u7801\u3002`;
      return null;
    },
    // 删除仓库确认（带引号整句）：'To confirm, type "owner/repo" in the box below'
    (s) => {
      const m = /^To confirm, type "(.+)" in the box below$/.exec(s);
      if (m) return `\u8981\u786E\u8BA4\uFF0C\u8BF7\u5728\u4E0B\u65B9\u8F93\u5165\u6846\u4E2D\u8F93\u5165 "${m[1]}"`;
      return null;
    },
    // 删除仓库确认（无引号整句）
    (s) => {
      const m = /^To confirm, type (.+) in the box below$/.exec(s);
      if (m) return `\u8981\u786E\u8BA4\uFF0C\u8BF7\u5728\u4E0B\u65B9\u8F93\u5165\u6846\u4E2D\u8F93\u5165 ${m[1]}`;
      return null;
    },
    // 仓库设置页弹窗标题（动态仓库名）：'Make ismoss/github-zh-i18n private' / 'Delete ismoss/github-zh-i18n'
    (s) => {
      const m = /^(Make|Delete) ([\w.-]+\/[\w.-]+)( private)?$/.exec(s);
      if (m) {
        const suffix = m[3] ? " \u8BBE\u4E3A\u79C1\u6709" : "";
        return `${m[1] === "Make" ? "\u5C06" : "\u5220\u9664"} ${m[2]}${suffix}`;
      }
      return null;
    },
    // 仓库设置页分支保护计数（动态数字）：'0 branch protection rules' → '0 条分支保护规则'
    (s) => {
      const m = /^(\d+) branch protection rules?$/.exec(s);
      if (m) return `${m[1]} \u6761\u5206\u652F\u4FDD\u62A4\u89C4\u5219`;
      return null;
    },
    // 精细化令牌过期选项（含动态日期）：'30 days (Nov 19, 2026)' → '30 天（2026年11月19日）'
    (s) => {
      const m = /^(\d+) days? \(([A-Za-z]+) (\d{1,2}), (\d{4})\)$/.exec(s);
      if (m && MONTH_CN[m[2]]) return `${m[1]} \u5929\uFF08${m[4]}\u5E74${MONTH_CN[m[2]]}\u6708${m[3]}\u65E5\uFF09`;
      return null;
    },
    // 星期 + 完整日期：'Thursday, November 19, 2026' → '2026年11月19日 星期四'
    (s) => {
      const m = /^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday), ([A-Za-z]+) (\d{1,2}), (\d{4})$/.exec(s);
      if (m && MONTH_CN[m[2]]) return `${m[4]}\u5E74${MONTH_CN[m[2]]}\u6708${m[3]}\u65E5 ${WEEK_CN[m[1]]}`;
      return null;
    },
    // 精细化令牌页企业策略提示（组织名/天数动态，个人账户下组织名可能为空）：
    // 'The ismoss requires a maximum lifetime of 0 days for fine-grained personal access tokens. As an enterprise administrator you are exempted from this requirement.'
    (s) => {
      const m = /^The (.*?)requires a maximum lifetime of (\d+) days? for fine-grained personal access tokens\. As an enterprise administrator you are exempted from this requirement\.$/.exec(s);
      if (m) {
        const owner = m[1].trim() || "\u8BE5\u7EC4\u7EC7";
        return `${owner}\u8981\u6C42\u7CBE\u7EC6\u5316\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u7684\u6700\u957F\u6709\u6548\u671F\u4E3A ${m[2]} \u5929\u3002\u4F5C\u4E3A\u4F01\u4E1A\u7BA1\u7406\u5458\uFF0C\u4F60\u4E0D\u53D7\u6B64\u8981\u6C42\u9650\u5236\u3002`;
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
      return /^\d/.test(m[1]) ? `\u6700\u8FD1 ${period}\u5185\u4F7F\u7528\u8FC7` : `\u6700\u8FD1${period}\u5185\u4F7F\u7528\u8FC7`;
    },
    // 令牌最近使用时点：'Last used on Nov 19, 2026' → '上次使用于 2026年11月19日'
    (s) => {
      const m = /^Last used on ([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
      if (m && MONTH_CN[m[1]]) return `\u4E0A\u6B21\u4F7F\u7528\u4E8E ${m[3]}\u5E74${MONTH_CN[m[1]]}\u6708${m[2]}\u65E5`;
      return null;
    },
    // GitHub App 事件说明链接（事件名动态，先查词条再拼）：
    // 'Learn more about the Issue comment event' → '进一步了解议题评论事件'
    (s) => {
      const m = /^Learn more about the (.+) event$/.exec(s);
      if (m) {
        const name = lookup(m[1]) ?? m[1];
        return /[A-Za-z]/.test(name) ? `\u8FDB\u4E00\u6B65\u4E86\u89E3 ${name} \u4E8B\u4EF6` : `\u8FDB\u4E00\u6B65\u4E86\u89E3${name}\u4E8B\u4EF6`;
      }
      return null;
    },
    // 应用授权页：'You have granted 5 applications access to your account.'
    (s) => {
      const m = /^You have granted ([\d,]+) applications? access to your account\.$/.exec(s);
      if (m) return `\u4F60\u5DF2\u6388\u6743 ${m[1]} \u4E2A\u5E94\u7528\u8BBF\u95EE\u4F60\u7684\u8D26\u6237\u3002`;
      return null;
    },
    (s) => {
      const m = /^You have not granted any applications access to your account\.$/.exec(s);
      if (m) return "\u4F60\u5C1A\u672A\u6388\u6743\u4EFB\u4F55\u5E94\u7528\u8BBF\u95EE\u4F60\u7684\u8D26\u6237\u3002";
      return null;
    },
    // 应用安装范围：'Only allow this GitHub App to be installed on the @ismoss account.'
    (s) => {
      const m = /^Only allow this GitHub App to be installed on the (@.+) account\.$/.exec(s);
      if (m) return `\u4EC5\u5141\u8BB8\u6B64 GitHub \u5E94\u7528\u5B89\u88C5\u5728 ${m[1]} \u8D26\u6237\u4E0A\u3002`;
      return null;
    }
  ];
  function normalize(s) {
    return s.replace(/[\u2018\u2019]/g, "'").replace(/\u00A0/g, " ").replace(/[\u2013\u2014]/g, "-").replace(/[\u201C\u201D]/g, '"').replace(/\s+/g, " ").trim();
  }
  function lookup(trimmed) {
    const text = normalize(trimmed);
    const exact = DICT[text];
    if (exact !== void 0) {
      return exact === text ? null : exact;
    }
    for (const rule of RULES) {
      const r = rule(text);
      if (r !== null) return r;
    }
    return null;
  }
  function isKnownTerm(trimmed) {
    return DICT[normalize(trimmed)] !== void 0;
  }
  function contextual(trimmed, parent) {
    if (!parent) return null;
    if (trimmed === "Open" && parent.closest('.subnav-item, [data-hotkey="o"], [data-hotkey="p"]')) {
      return "\u5F85\u5904\u7406";
    }
    return null;
  }
  function translateTextNode(node) {
    const raw = node.nodeValue ?? "";
    const trimmed = raw.trim();
    if (!trimmed) return false;
    collectAll(trimmed);
    const translated = contextual(trimmed, node.parentElement) ?? lookup(trimmed);
    if (translated === null) {
      if (!isKnownTerm(trimmed)) {
        const parent = node.parentElement;
        record(trimmed, {
          url: typeof location !== "undefined" ? location.pathname + location.search : "",
          tag: parent ? parent.tagName : "",
          cls: parent && typeof parent.className === "string" ? parent.className : ""
        });
      }
      return false;
    }
    if (translated === trimmed) return false;
    const lead = raw.length - raw.trimStart().length;
    const tail = raw.length - raw.trimEnd().length;
    node.nodeValue = raw.slice(0, lead) + translated + raw.slice(raw.length - tail);
    return true;
  }

  // src/core/safe.ts
  var EXCLUDE_SELECTOR = [
    // 代码与代码块
    "pre",
    "code",
    "kbd",
    "samp",
    ".blob-code",
    ".highlight",
    ".CodeMirror",
    ".CodeMirror-code",
    ".file-info",
    // 用户输入区域（textarea/input 的正文文本豁免；select/option 是 UI 选项，允许翻译）
    "textarea",
    "input",
    "datalist",
    '[contenteditable="true"]',
    // 非内容元素
    "script",
    "style",
    "noscript",
    "template",
    "svg",
    "math",
    // 用户生成内容
    ".markdown-body",
    // README / Issue 正文 / 渲染后的评论
    ".comment-body",
    ".js-comment-body",
    ".js-issue-title",
    // Issue / PR 标题
    ".commit-title",
    // commit 消息标题（用户内容，如 "Fix #123" 绝不翻译）
    ".commit-desc",
    ".js-commit-title",
    '[data-testid="commit-row-item"]',
    // 新版 commit 列表行
    ".opened-by",
    // Issue / PR 行的「opened by X · 时间」元信息（用户内容）
    ".repo-description",
    // 仓库描述
    ".topic-tag",
    // 仓库主题标签（用户内容）
    ".Label",
    // 自定义标签（用户创建的 Label）
    ".author",
    // 作者名
    ".js-path-segment",
    // 文件路径
    // 用户内容链接：仓库名 / 用户名 / Issue / PR / Commit 标题的链接
    "[data-hovercard-type]"
  ];
  var PAGE_EXCLUDE = [
    // 仓库文件列表页：文件名行整块是用户内容（.react-directory-listing 为新版 React 容器）
    {
      match: /^\/[^/]+\/[^/]+\/?$/,
      selectors: [".react-directory-listing"]
    }
  ];
  function shouldSkipElement(el) {
    const path = typeof location !== "undefined" ? location.pathname : "";
    const inSettings = path.startsWith("/settings/");
    const selectors = inSettings ? EXCLUDE_SELECTOR.filter((s) => s !== ".Label") : EXCLUDE_SELECTOR;
    if (el.closest(selectors.join(","))) return true;
    for (const rule of PAGE_EXCLUDE) {
      if (rule.match.test(path) && el.closest(rule.selectors.join(","))) return true;
    }
    return false;
  }
  function shouldSkipTextNode(node) {
    const parent = node.parentElement;
    if (!parent) return true;
    return shouldSkipElement(parent);
  }

  // src/core/observer.ts
  var TRANSLATABLE_ATTRS = ["placeholder", "aria-label", "title"];
  var DONE_MARK = "data-gh-i18n-done";
  function translateAttributes(el) {
    for (const attr of TRANSLATABLE_ATTRS) {
      if (!el.hasAttribute(attr)) continue;
      const val = el.getAttribute(attr) ?? "";
      const trimmed = val.trim();
      if (!trimmed) continue;
      const translated = lookup(trimmed);
      if (translated !== null && translated !== trimmed) {
        el.setAttribute(attr, translated);
      } else if (translated === null) {
        if (!isKnownTerm(trimmed)) {
          record(trimmed, {
            url: typeof location !== "undefined" ? location.pathname + location.search : "",
            tag: el.tagName,
            cls: typeof el.className === "string" ? el.className : "",
            attr
          });
        }
      }
    }
    const tag = el.tagName;
    const type = (el.getAttribute("type") || "").toLowerCase();
    const isBtnValue = tag === "BUTTON" || tag === "INPUT" && (type === "submit" || type === "button");
    if (isBtnValue && el.hasAttribute("value")) {
      const v = (el.getAttribute("value") ?? "").trim();
      if (v) {
        const t = lookup(v);
        if (t !== null && t !== v) el.setAttribute("value", t);
      }
    }
  }
  function createWalker(root) {
    return document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          if (!(node.nodeValue ?? "").trim()) return NodeFilter.FILTER_REJECT;
          if (shouldSkipTextNode(node)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
  }
  function translateShadowRoot(root, force) {
    const shadow = root;
    if (!force && shadow.__ghI18nDone) return;
    shadow.__ghI18nDone = true;
    const walker = createWalker(root);
    let n;
    while ((n = walker.nextNode()) !== null) {
      if (n.nodeType === Node.TEXT_NODE) {
        translateTextNode(n);
      } else {
        const elm = n;
        translateAttributes(elm);
        if (elm.shadowRoot) translateShadowRoot(elm.shadowRoot, force);
      }
    }
  }
  function translateElement(el, force = false) {
    if (!force && el.hasAttribute(DONE_MARK)) return;
    translateAttributes(el);
    if (shouldSkipElement(el)) return;
    el.setAttribute(DONE_MARK, "1");
    const walker = createWalker(el);
    let n;
    while ((n = walker.nextNode()) !== null) {
      if (n.nodeType === Node.TEXT_NODE) {
        translateTextNode(n);
      } else {
        const elm = n;
        translateAttributes(elm);
        if (elm.shadowRoot) translateShadowRoot(elm.shadowRoot, force);
      }
    }
  }
  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!shouldSkipTextNode(node)) translateTextNode(node);
      return;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      translateElement(node);
    }
  }
  function translateRoot() {
    const body = document.body;
    if (!body) return;
    translateElement(body, true);
  }
  var pendingNodes = /* @__PURE__ */ new Set();
  var pendingAttrs = /* @__PURE__ */ new Set();
  var pendingRaf = 0;
  var rootObserver = null;
  function flush() {
    pendingRaf = 0;
    const batch = pendingNodes;
    pendingNodes = /* @__PURE__ */ new Set();
    for (const node of batch) {
      try {
        translateNode(node);
      } catch {
      }
    }
    const attrs = pendingAttrs;
    pendingAttrs = /* @__PURE__ */ new Set();
    for (const el of attrs) {
      try {
        translateAttributes(el);
      } catch {
      }
    }
  }
  function scheduleFlush() {
    if (pendingRaf) return;
    pendingRaf = requestAnimationFrame(flush);
  }
  function initObserver() {
    if (rootObserver) return;
    rootObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "childList") {
          for (const added of m.addedNodes) {
            pendingNodes.add(added);
          }
        } else if (m.type === "characterData" && m.target.nodeType === Node.TEXT_NODE) {
          pendingNodes.add(m.target);
        } else if (m.type === "attributes") {
          pendingAttrs.add(m.target);
        }
      }
      if (pendingNodes.size > 0 || pendingAttrs.size > 0) scheduleFlush();
    });
    rootObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["aria-label", "title", "placeholder"]
    });
  }
  var routeTimer = 0;
  function scheduleRouteRescan() {
    window.clearTimeout(routeTimer);
    routeTimer = window.setTimeout(() => {
      try {
        translateRoot();
      } catch {
      }
    }, 500);
  }
  function hookHistory() {
    const h = history;
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
    window.addEventListener("popstate", scheduleRouteRescan);
  }
  function initTranslation() {
    translateRoot();
    initObserver();
    hookHistory();
  }

  // src/index.ts
  function main() {
    try {
      initTranslation();
      initCollectorUI();
    } catch (err) {
      console.warn("[GitHub \u754C\u9762\u6C49\u5316] \u521D\u59CB\u5316\u5931\u8D25:", err);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main, { once: true });
  } else {
    main();
  }
})();
