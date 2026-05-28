---
name: memo-reviewer
description: Use when the user has written a draft policy memo, briefing
  note, or short analytical document and wants structured critical feedback
  before sending it. Produces a written critique with explicit categories;
  does not rewrite the draft.
---

# Memo reviewer

A focused critique skill for short analytical documents (policy memos,
briefing notes, executive summaries, op-eds). Aimed at improving clarity
and rigour before the document is sent out.

## When to use

- The user has a draft of a memo, briefing, or short analytical piece.
- The user asks for "feedback", "review", "critique", or "what would you
  fix" on that draft.
- The user is about to send it / publish it / present it.

Do NOT use when:

- The user wants you to rewrite the draft. Just rewriting kills the
  learning loop. If they explicitly ask for a rewrite after the
  critique, that's fine.
- The document is a long-form paper (>10 pages) — this skill is for
  short pieces.

## What this skill produces

A markdown critique saved next to the source draft (e.g. if the draft is
`output/memo.md`, the critique goes to `output/memo-critique.md`).

The critique has six sections, each scored 1-5 with a one-line justification
and one concrete change suggested:

1. **Problem statement clarity** — Is it obvious what problem the memo
   addresses? Is the audience clear?
2. **Evidence quality** — Are claims supported? Are numbers cited with
   sources? Is the strength of evidence transparent?
3. **Argument structure** — Does each section follow from the previous?
   Are there logical gaps?
4. **Recommendation strength** — If the memo proposes action, is the
   recommendation specific, actionable, and proportionate to the evidence?
5. **Missing perspectives** — Whose voice is absent? What stakeholder
   would push back, and why?
6. **Writing clarity** — Sentence-level: jargon, passive voice, length.

## How to proceed

1. Read the draft fully before starting.
2. For each of the six categories, score 1-5 (5 = excellent) and write
   one sentence of justification plus one concrete suggested change.
3. End with an overall "biggest issue" (one paragraph) and "smallest wins"
   (three quick fixes the author can do in under 10 minutes).
4. Save to `output/<original-filename>-critique.md`.
5. Do not edit the draft itself unless explicitly asked.

## Rules

- Be specific. "Tighten the prose" is useless. "Sentence 3 of paragraph 2
  has 47 words and three subordinate clauses" is useful.
- Be adversarial but not mean. Imagine the toughest stakeholder reading
  this — what would they say?
- Flag missing citations explicitly. If a claim has no source, note it.
- Do not invent counter-evidence. If you think a claim is wrong but have
  no source, say "this claim should be verified" rather than asserting
  it's false.
