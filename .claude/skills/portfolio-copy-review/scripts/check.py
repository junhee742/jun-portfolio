#!/usr/bin/env python3
"""포트폴리오 카피 자동 점검.

RUBRIC.md 의 [auto] 항목을 계산한다. LLM 없이 결정론적으로 동작한다.

    python3 .claude/skills/portfolio-copy-review/scripts/check.py
    python3 .claude/skills/portfolio-copy-review/scripts/check.py --json

종료 코드: high 심각도 적발이나 경계 위반이 있으면 1, 아니면 0.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from collections import Counter

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", ".."))
SKILL_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# 확인 환경을 넘어서는 표현. AGENTS.md "Do not inflate ... into production outcomes" 강제.
BOUNDARY_VIOLATIONS = [
    (r"전체 서비스\s*(의)?\s*(커버리지|코드 실행 범위)", "한 서비스 결과를 전체로 확대"),
    (r"(무중단|장애 0건|장애\s*없이)\s*(검증|달성|운영)", "로컬 검증을 운영 성과로 확대"),
    (r"재발\s*방지(했|에 성공)", "내부 검증을 재발 방지 성과로 확대"),
    (r"모든 (모바일|브라우저)\s*(환경)?\s*(호환|지원)", "8개 조합을 전체 호환으로 확대"),
    (r"운영\s*환경에\s*(배포|반영)\s*(완료|했습니다)", "미적용 건을 배포 완료로 표현"),
    (r"(고객|사용자)\s*만족도?\s*(향상|개선)", "측정하지 않은 성과 주장"),
]


def read(path: str) -> str:
    try:
        with open(os.path.join(ROOT, path), encoding="utf-8") as fh:
            return fh.read()
    except OSError:
        return ""


def collect_copy() -> tuple[str, list[str], list[str]]:
    """사이트에 공개되는 한국어 카피, 케이스 본문 문장, 헤딩을 모은다."""
    import glob

    sentences: list[str] = []
    headings: list[str] = []
    chunks: list[str] = []

    for path in sorted(glob.glob(os.path.join(ROOT, "src/content/work/*.mdx"))):
        with open(path, encoding="utf-8") as fh:
            raw = fh.read()
        body = re.sub(r"^---.*?---", "", raw, flags=re.S)
        body = re.sub(r"^import .*$", "", body, flags=re.M)
        body = re.sub(r"<[^>]+>", "", body)
        headings += re.findall(r"^##\s+(.+)$", body, flags=re.M)
        table_free = re.sub(r"^\|.*$", "", body, flags=re.M)
        chunks.append(table_free)
        for sentence in re.split(r"(?<=다\.)\s+", table_free):
            sentence = sentence.strip()
            if len(sentence) > 10 and re.search(r"[가-힣]", sentence):
                sentences.append(sentence)

    data = read("src/data/portfolio.ts")
    chunks.append(" ".join(re.findall(r'"([^"]{4,})"', data)))

    index = read("src/pages/index.astro")
    chunks.append(" ".join(re.findall(r">([^<>{}]{8,})<", index)))

    return "\n".join(chunks), sentences, headings


def numbers_in(text: str) -> set[str]:
    found = set()
    found |= set(re.findall(r"\d+\s*/\s*\d+", text))
    found |= set(re.findall(r"\d+(?:\.\d+)?%", text))
    found |= set(re.findall(r"\d[\d,]*\s*(?:개|건|명|줄|시간|초)", text))
    return {re.sub(r"\s+", "", f) for f in found}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", action="store_true", help="JSON 출력")
    args = parser.parse_args()

    with open(os.path.join(SKILL_DIR, "banned_phrases.json"), encoding="utf-8") as fh:
        cfg = json.load(fh)

    copy, sentences, headings = collect_copy()
    kr_len = len(re.sub(r"\s", "", copy))
    report: dict = {"chars": kr_len, "sentences": len(sentences), "headings": len(headings)}

    # --- 4. 표현: 금지 패턴 ---
    hits = {"high": [], "medium": []}
    for entry in cfg["phrases"]:
        pattern = entry["pattern"]
        flags = re.M if pattern.startswith("^") or pattern.endswith("$") else 0
        found = re.findall(pattern, copy, flags=flags)
        # note 에 임계가 적힌 항목은 그 횟수를 넘을 때만 발화한다. 1회는 문체가 아니라 우연이다.
        if len(found) >= entry.get("min_count", 1):
            hits[entry["severity"]].append(
                {"pattern": pattern, "count": len(found), "category": entry["category"], "fix": entry["fix"]}
            )
    report["banned"] = hits

    # 추상명사 밀도 — 도메인 용어로 굳은 표현은 제외한다
    stripped = copy
    for exempt in cfg.get("abstract_noun_exempt", []):
        stripped = stripped.replace(exempt, " ")
    density = {}
    for noun in cfg["abstract_nouns"]:
        n = stripped.count(noun)
        if n:
            density[noun] = n
    per_1000 = sum(density.values()) / max(kr_len, 1) * 1000
    report["abstract_nouns"] = {
        "counts": dict(sorted(density.items(), key=lambda kv: -kv[1])),
        "per_1000": round(per_1000, 2),
        "threshold": cfg["thresholds"]["abstract_noun_per_1000"],
        "over": per_1000 > cfg["thresholds"]["abstract_noun_per_1000"],
    }

    # 문말 편중
    endings = Counter()
    for sentence in sentences:
        m = re.search(r"([가-힣]{2,6})\.$", sentence)
        if m:
            endings[m.group(1)[-4:]] += 1
    top_share = (endings.most_common(1)[0][1] / len(sentences)) if sentences else 0
    report["endings"] = {
        "top": endings.most_common(3),
        "top_share": round(top_share, 3),
        "threshold": cfg["thresholds"]["sentence_ending_max_share"],
        "over": top_share > cfg["thresholds"]["sentence_ending_max_share"],
    }

    # 문두 반복
    firsts = Counter(s.split()[0] for s in sentences if s.split() and not s.startswith(("#", "-", "|")))
    repeated = {w: c for w, c in firsts.items() if c > cfg["thresholds"]["same_first_word_max"]}
    report["repeated_openers"] = repeated

    # --- 3. 구조 다양성 ---
    dupes = [h for h, c in Counter(headings).items() if c > 1]
    report["headings_unique"] = {"total": len(headings), "unique": len(set(headings)), "duplicates": dupes}

    # 케이스별 절 개수 편차 — 전부 같으면 잔여 템플릿으로 본다
    import glob as _glob

    section_counts = {}
    for path in sorted(_glob.glob(os.path.join(ROOT, "src/content/work/*.mdx"))):
        with open(path, encoding="utf-8") as fh:
            section_counts[os.path.basename(path)] = len(re.findall(r"^##\s+", fh.read(), flags=re.M))
    report["section_counts"] = section_counts
    varied = len(set(section_counts.values())) > 1

    # --- 1. 구체성 ---
    data = read("src/data/portfolio.ts")
    metrics = re.findall(r'metric:\s*"([^"]+)"', data)
    with_num = [m for m in metrics if re.search(r"\d", m)]
    report["specificity"] = {
        "items": len(metrics),
        "with_number": len(with_num),
        "without_number": [m for m in metrics if not re.search(r"\d", m)],
    }

    # --- 2. 근거 정합성 ---
    ledger = read("docs/provenance.md")
    report["provenance_exists"] = bool(ledger)
    missing = sorted(n for n in numbers_in(copy) if n not in numbers_in(ledger)) if ledger else []
    report["numbers_missing_from_ledger"] = missing

    violations = []
    for pattern, why in BOUNDARY_VIOLATIONS:
        if re.search(pattern, copy):
            violations.append(why)
    report["boundary_violations"] = violations

    # --- 5. 스캔 가능성 ---
    dist = read("dist/index.html")
    if dist:
        import html as htmllib

        main_html = re.search(r"<main.*?</main>", dist, flags=re.S)
        if main_html:
            body = main_html.group(0)
            # 접힌 <details> 는 스캔 부하가 아니다. 점진적 공개는 의도된 설계이므로 제외한다.
            visible = re.sub(r"<details.*?</details>", " ", body, flags=re.S)
            text = htmllib.unescape(re.sub(r"<[^>]+>", " ", visible))
            report["landing_chars"] = len(re.sub(r"\s", "", text))
            report["landing_chars_incl_collapsed"] = len(
                re.sub(r"\s", "", htmllib.unescape(re.sub(r"<[^>]+>", " ", body)))
            )
            report["landing_sections"] = len(re.findall(r"<section", body))

    # --- 점수 ---
    scores = {}
    scores["구체성"] = 5.0 if len(with_num) == len(metrics) else 4.5 if len(with_num) >= len(metrics) - 1 else 3.0
    if violations:
        scores["근거 정합성"] = 1.0 if len(violations) > 1 else 2.0
    elif not ledger:
        scores["근거 정합성"] = 1.0
    else:
        scores["근거 정합성"] = 5.0 if len(missing) == 0 else 4.0 if len(missing) <= 1 else 3.0
    if dupes:
        scores["구조 다양성"] = 3.0 if len(dupes) == 1 else 2.0
    else:
        # 헤딩이 전부 고유해도 모든 케이스의 절 개수가 같으면 잔여 템플릿이므로 4.0 상한
        scores["구조 다양성"] = 5.0 if varied else 4.0
    expr = 5.0 - 1.0 * len(hits["high"])
    med = len(hits["medium"]) + int(report["abstract_nouns"]["over"]) + int(report["endings"]["over"]) + int(bool(repeated))
    if not hits["high"]:
        expr = 5.0 if med == 0 else 4.0 if med <= 2 else 3.5 if med <= 4 else 3.0
    scores["표현"] = max(0.0, expr)
    lc = report.get("landing_chars", 0)
    sc = report.get("landing_sections", 99)
    scores["스캔 가능성"] = 5.0 if (lc and lc <= 2000 and sc <= 5) else 4.0 if lc and lc <= 3000 else 3.0
    total = round(sum(scores.values()), 1)
    report["scores"] = scores
    report["total"] = total

    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print(f"\n포트폴리오 카피 점검 — 한국어 {kr_len}자 / 문장 {len(sentences)}개 / 헤딩 {len(headings)}개\n")
        print(f"{'차원':14}{'점수':>6}")
        print("-" * 22)
        for k, v in scores.items():
            print(f"{k:14}{v:>6.1f}")
        print("-" * 22)
        print(f"{'총점':14}{total:>6.1f} / 25.0\n")

        if hits["high"]:
            print("[high] 즉시 수정")
            for h in hits["high"]:
                print(f"  - {h['pattern']}  {h['count']}회 [{h['category']}]")
                print(f"      → {h['fix']}")
        if hits["medium"]:
            print("[medium] 빈도 확인")
            for h in hits["medium"]:
                print(f"  - {h['pattern']}  {h['count']}회 [{h['category']}]")
        if violations:
            print("[경계 위반] 배포 금지")
            for v in violations:
                print(f"  - {v}")
        if dupes:
            print(f"[헤딩 중복] {dupes}")
        if repeated:
            print(f"[문두 반복] {repeated}")
        if report["abstract_nouns"]["over"]:
            print(f"[추상명사] 1000자당 {report['abstract_nouns']['per_1000']} (임계 {cfg['thresholds']['abstract_noun_per_1000']})")
            print(f"           {report['abstract_nouns']['counts']}")
        if report["endings"]["over"]:
            print(f"[문말 편중] 최다 {report['endings']['top_share']:.0%} (임계 {cfg['thresholds']['sentence_ending_max_share']:.0%})")
        if missing:
            print(f"[대장 누락] 카피에 있으나 docs/provenance.md 에 없는 수치: {missing}")
        if report["specificity"]["without_number"]:
            print(f"[수치 없는 항목] {report['specificity']['without_number']}")
        print()

    return 1 if (hits["high"] or violations) else 0


if __name__ == "__main__":
    sys.exit(main())
