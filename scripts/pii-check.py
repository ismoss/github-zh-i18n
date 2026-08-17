#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
提交前敏感信息扫描（防「开盒」）
=============================
扫描 git 已跟踪/待提交的文件，检测可能泄露的个人信息与凭证：

  1. 真实邮箱（排除 GitHub 官方域名 noreply.github.com / github.com / docs.github.com
     与正则示例占位符 a@b.com）
  2. 中国大陆手机号（1[3-9] 开头 11 位）
  3. 身份证号（17 位数字 + 校验位）
  4. 敏感文件名（state*.json / untranslated-auto.json / *.pem / id_rsa / .env 等）
  5. 常见凭证关键词（password= / api[_-]?key / token= / secret= 等）

用法：
  python scripts/pii-check.py          # 扫描 git 跟踪文件
  python scripts/pii-check.py --all    # 额外扫描 dist/ 产物

退出码：0 = 干净；1 = 命中（需处理后再提交）
"""
import json
import os
import re
import subprocess
import sys

# ---------- 规则 ----------
EMAIL_RE = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")
PHONE_RE = re.compile(r"(?<!\d)1[3-9]\d{9}(?!\d)")
IDCARD_RE = re.compile(r"(?<!\d)\d{17}[\dXx](?!\d)")
SECRET_RE = re.compile(
    r"(password\s*[=:]\s*['\"]?[^\s'\"']+|"
    r"api[_-]?key\s*[=:]\s*['\"][A-Za-z0-9_\-]{12,}['\"]|"
    r"token\s*[=:]\s*['\"][A-Za-z0-9_\-]{12,}['\"]|"
    r"secret\s*[=:]\s*['\"][A-Za-z0-9_\-]{12,}['\"]|"
    r"ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|"
    r"Bearer\s+[A-Za-z0-9_\-\.]{20,})"
)
SENSITIVE_NAMES = (
    "state.json", "untranslated-auto.json", "cookie", "credential", ".env",
    "id_rsa", "id_ed25519", ".pem", ".p12", "keychain", "token.json",
)
# 已知误报（代码字面量，非个人信息）
KNOWN_FALSE_POSITIVES = {"a@b.com", "2147483646", "50000", "60000", "404", "403"}


def git_tracked_files(root: str) -> list:
    """git ls-files 列出的已跟踪文件（不含 dist 产物时用）"""
    r = subprocess.run(["git", "-C", root, "ls-files"], capture_output=True, text=True)
    return [os.path.join(root, f) for f in r.stdout.splitlines() if f]


def scan_file(fp: str) -> list:
    hits = []
    # 跳过扫描器自身：SECRET_RE 的模式字面量会被自己匹配（经典自扫误报）
    if os.path.abspath(fp) == os.path.abspath(__file__):
        return hits
    try:
        with open(fp, encoding="utf-8", errors="replace") as f:
            content = f.read()
    except OSError:
        return hits
    # 文件名敏感
    base = os.path.basename(fp).lower()
    if any(s in base for s in SENSITIVE_NAMES):
        hits.append(f"敏感文件名: {os.path.basename(fp)}")
    # 邮箱（排除官方域名）
    for m in EMAIL_RE.findall(content):
        if m in KNOWN_FALSE_POSITIVES:
            continue
        if m.endswith(("noreply.github.com", "github.com", "docs.github.com", "example.com")):
            continue
        hits.append(f"邮箱: {m}")
    # 手机号 / 身份证
    for m in PHONE_RE.findall(content):
        if m not in KNOWN_FALSE_POSITIVES:
            hits.append(f"手机号: {m}")
    for m in IDCARD_RE.findall(content):
        hits.append(f"身份证: {m}")
    # 凭证关键词
    for m in SECRET_RE.findall(content):
        if m not in KNOWN_FALSE_POSITIVES:
            hits.append(f"疑似凭证: {m[:40]}")
    return hits


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # 项目根
    files = git_tracked_files(root)
    if "--all" in sys.argv and os.path.isdir(os.path.join(root, "dist")):
        files += [os.path.join(root, "dist", f) for f in os.listdir(os.path.join(root, "dist"))]

    total = 0
    # 检查根目录敏感文件是否已被 .gitignore 正确忽略（仅 git 仓库内有效；
    # 非仓库目录（如工作区副本）不参与提交，跳过该项）
    is_git_repo = os.path.isdir(os.path.join(root, ".git"))
    if not is_git_repo:
        print("（当前目录非 git 仓库，跳过 .gitignore 忽略检查——提交前请在 E 盘 git 仓库内运行本工具）")
    for sensitive in ("state.json", "untranslated-auto.json"):
        sp = os.path.join(root, sensitive)
        if not os.path.exists(sp):
            continue
        if not is_git_repo:
            continue
        r = subprocess.run(["git", "-C", root, "check-ignore", "-q", sensitive], capture_output=True)
        if r.returncode == 0:
            print(f"[{sensitive}] 存在但已被 .gitignore 忽略 ✓")
        else:
            total += 1
            print(f"[{sensitive}] ⚠️ 存在且未被忽略！会被 git add 提交，立即处理！")

    for fp in sorted(files):
        hits = scan_file(fp)
        for h in hits:
            total += 1
            print(f"[{os.path.relpath(fp, root)}] {h}")
    print("---")
    if total == 0:
        print("✅ 干净：未发现个人信息 / 登录态 / 凭证")
        return 0
    print(f"⚠️  命中 {total} 处，请处理后提交（如确为误报，加进 KNOWN_FALSE_POSITIVES）")
    return 1


if __name__ == "__main__":
    sys.exit(main())
