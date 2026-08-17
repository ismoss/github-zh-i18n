#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
收集数据去重合并工具（github-zh-i18n 配套）

两种模式：
  1. 行级去重（默认）：适用于手动整理的文本笔记/清单——按行去重，保留首次出现顺序，
     压缩连续空行。例：同一界面多个子 tab 反复收集导致的大段重复，一键消除。
  2. JSON 合并（--json）：适用于收集器「译」按钮导出的 JSON（可能多段拼接/多文件）——
     按 text 去重、count 累加，输出合并后的 JSON。

用法：
  python dedup-collector.py 文件.txt [文件2 ...] [-o 输出.txt]
  python dedup-collector.py --json 数据.json [-o 输出.json]
  python dedup-collector.py --stdin < 数据.txt     # 从标准输入读取

输出默认写到「输入文件名_dedup.同后缀」；用 -o 指定路径。
"""
import sys
import json
import argparse


# ---------------- 模式一：行级去重 ----------------

def dedup_lines(text: str, keep_blank: bool = False) -> str:
    seen = set()
    out: list[str] = []
    prev_blank = False
    for line in text.splitlines():
        if not line.strip():
            if keep_blank:
                out.append("")
            elif not prev_blank:
                out.append("")  # 连续空行压缩为一个
            prev_blank = True
            continue
        prev_blank = False
        key = line.rstrip()
        if key in seen:
            continue
        seen.add(key)
        out.append(line)
    # 去掉首尾多余空行
    while out and not out[0].strip():
        out.pop(0)
    while out and not out[-1].strip():
        out.pop()
    return "\n".join(out) + ("\n" if out else "")


# ---------------- 模式二：JSON 合并 ----------------

def parse_json_values(text: str):
    """容错解析：从文本中提取所有 JSON 值（支持多段数组拼接）"""
    decoder = json.JSONDecoder()
    results = []
    pos = 0
    n = len(text)
    while pos < n:
        while pos < n and text[pos] not in "[{":
            pos += 1
        if pos >= n:
            break
        try:
            obj, end = decoder.raw_decode(text, pos)
            results.append(obj)
            pos = end
        except json.JSONDecodeError:
            pos += 1
    return results


def extract_entries(data):
    """从任意结构提取条目：支持数组、{text:...}、{untranslated: [...]} 等"""
    entries = []
    if isinstance(data, dict):
        if "untranslated" in data:
            entries.extend(extract_entries(data["untranslated"]))
        elif "text" in data:
            entries.append(data)
        else:
            for v in data.values():
                entries.extend(extract_entries(v))
    elif isinstance(data, list):
        for item in data:
            entries.extend(extract_entries(item))
    return entries


def merge_json(entries) -> list[dict]:
    merged = {}
    for e in entries:
        text = e.get("text")
        if not text or not isinstance(text, str):
            continue
        item = merged.get(text)
        if item is None:
            merged[text] = {
                "count": int(e.get("count", 1)),
                "url": e.get("url", ""),
                "tag": e.get("tag", ""),
                "cls": e.get("cls", ""),
            }
        else:
            item["count"] += int(e.get("count", 1))
            for k in ("url", "tag", "cls"):
                if e.get(k) and not item[k]:
                    item[k] = e[k]
    return [{"text": t, **v} for t, v in sorted(merged.items(), key=lambda kv: -kv[1]["count"])]


# ---------------- 主流程 ----------------

def main() -> int:
    ap = argparse.ArgumentParser(description="收集数据去重合并工具")
    ap.add_argument("files", nargs="*", help="输入文件（可多个）")
    ap.add_argument("-o", "--output", help="输出文件路径")
    ap.add_argument("--json", action="store_true", help="JSON 合并模式")
    ap.add_argument("--stdin", action="store_true", help="从标准输入读取")
    ap.add_argument("--keep-blank", action="store_true", help="行级模式：保留所有空行")
    args = ap.parse_args()

    # 读取全部输入
    chunks: list[str] = []
    if args.stdin or not args.files:
        chunks.append(sys.stdin.read())
    else:
        for path in args.files:
            with open(path, "r", encoding="utf-8", errors="replace") as f:
                chunks.append(f.read())

    if args.json:
        # JSON 合并模式
        all_entries = []
        for text in chunks:
            for obj in parse_json_values(text):
                all_entries.extend(extract_entries(obj))
        if not all_entries:
            print("未解析到任何 JSON 条目")
            return 1
        merged = merge_json(all_entries)
        raw = len(all_entries)
        print(f"解析到条目: {raw}")
        print(f"去重后条目: {len(merged)}")
        print(f"消除重复:   {raw - len(merged)}")
        print(f"总出现次数: {sum(e['count'] for e in all_entries)}")
        out_text = json.dumps(merged, ensure_ascii=False)
        suffix = ".json"
    else:
        # 行级去重模式
        combined = "\n".join(chunks)
        lines_before = len(combined.splitlines())
        out_text = dedup_lines(combined, keep_blank=args.keep_blank)
        lines_after = len(out_text.splitlines())
        print(f"去重前行数: {lines_before}")
        print(f"去重后行数: {lines_after}")
        print(f"消除重复行: {lines_before - lines_after}")
        suffix = ".txt"

    if args.output:
        out_path = args.output
    elif args.files:
        src = args.files[0]
        out_path = src[: src.rfind(".")] + "_dedup" + (suffix if suffix else src[src.rfind("."):])
    else:
        print("--- 去重结果 ---")
        print(out_text)
        return 0

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(out_text)
    print(f"已输出: {out_path}（{len(out_text)} 字符）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
