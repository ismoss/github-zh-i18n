/**
 * 词库自检：扫描 zh-CN.json / glossary.json 中「值 == 键」的条目。
 *
 * 这类条目通常意味着：
 *  - 刻意保留原文的专有名词（如 Team、Pro —— 设计如此）
 *  - 或漏翻（需要人工确认）
 *
 * 用法：npm run check:dict
 */
const fs = require('fs');
const path = require('path');

const files = ['src/locales/zh-CN.json', 'src/locales/glossary.json'];

let found = [];
for (const f of files) {
  const obj = JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8'));
  for (const [key, val] of Object.entries(obj)) {
    if (key === val) found.push({ file: f, key });
  }
}

if (found.length === 0) {
  console.log('未发现「自身映射」条目 ✔');
} else {
  console.log(`发现 ${found.length} 个「值 == 键」条目（需人工确认是保留原文还是漏翻）：`);
  for (const { file, key } of found) {
    console.log(`  [${path.basename(file)}] ${key}`);
  }
  console.log('\n提示：Team/Pro/Webhooks 等为刻意保留的专有名词，可忽略；其余请确认。');
}
