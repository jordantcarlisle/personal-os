---
title: Core Team
description: The 8 core agents — what each does, when it's invoked, and which model tier it runs on.
---

The core team ships with every Personal OS installation. These eight agents cover the full operating loop: strategic thinking, research, execution, quality review, communication, time management, and memory. The Chief of Staff orchestrates all of them.

## Agent Reference

| Agent | Name | Model | Invoked When |
|-------|------|-------|-------------|
| `strategic-planner` | Atlas | Opus | Goals lack clear next steps, large initiatives need structure, quarterly planning |
| `research-scout` | Scout | Sonnet | Technology comparisons, tool evaluations, fact verification before recommendations |
| `executor` | Mason | Sonnet | Clearly defined tasks ready for implementation — code, docs, commands, files |
| `ruthless-reviewer` | Flint | Opus | Significant work is complete and needs a quality gate before shipping |
| `executive-briefer` | Reed | Haiku | Long content needs condensing, meeting notes need distilling, output is getting verbose |
| `calendar-priority-mgr` | Tempo | Sonnet | Morning planning, weekly review, calendar conflicts, prioritization or overwhelm |
| `memory-keeper` | Chronicle | Haiku | Decisions are made, lessons are learned, historical context is needed |
| `research-scout` | Scout | Sonnet | External research, competitive analysis, any question requiring verified facts |

---

## Atlas — Strategic Planner

Atlas transforms vague goals into concrete plans. When you say "I want to improve X" or "we should do something about Y," that's Atlas's cue. Every plan Atlas produces includes a result goal, progress milestones with dates, a risk register, and a single clear next action. Atlas uses the 12 Week Year decomposition pattern and will push back on goals that aren't specific or measurable.

**Model:** Opus — strategic errors compound over time.

## Scout — Research Scout

Scout gathers facts before recommendations are made. It prevents decisions based on outdated information or confident-sounding guesses. Scout cites sources with enough detail to verify, rates confidence explicitly (High / Medium / Low), and presents trade-offs rather than conclusions. When the Chief of Staff is about to recommend a tool or approach it isn't certain about, Scout runs first.

**Model:** Sonnet — thorough research at a sustainable cost.

## Mason — Executor

Mason takes clearly defined tasks and finishes them completely. No TODOs, no placeholders, no "I'll come back to this." Mason confirms before destructive operations, prefers simple implementations over clever ones, and reports what was done and why any decisions were made along the way. The strategic-planner → executor handoff is the most common delegation pattern in the system.

**Model:** Sonnet — implementation work is the workhorse category by volume.

## Flint — Ruthless Reviewer

Flint finds problems before they reach the real world. It reviews in priority order: security flaws, logic errors, error handling, performance, and maintainability. Flint never softens findings and always explains *why* something is a problem, not just that it is one. The output format is structured: CRITICAL → SERIOUS → ISSUES → OBSERVATIONS → VERDICT. Flint's model tier is pinned to Opus and should never be downgraded.

**Model:** Opus — the cost of a missed critical issue is always higher than the model cost.

## Reed — Executive Briefer

Reed cuts through noise. When output from other agents is getting long, or meeting notes need to become an action brief, Reed condenses it into a format a busy person can act on. Hard rules: summaries under 200 words, lead with the answer, no filler phrases, one page maximum. Dates, names, and numbers are always preserved — never generalized.

**Model:** Haiku — brevity is well-defined work.

## Tempo — Calendar Priority Manager

Tempo protects your most valuable resource: time and attention. During morning planning and weekly review, Tempo analyzes your calendar for overload, flags transitions under 15 minutes, calculates available deep work hours, and scores the day's alignment with your actual priorities. Tempo applies the Eisenhower matrix with Q2 (important, not urgent) as sacred ground and will surface the math when you're overcommitted — "You have 4 hours of meetings and are trying to commit to 6 hours of deep work."

**Model:** Sonnet — scheduling and prioritization require solid reasoning at high frequency.

## Chronicle — Memory Keeper

Chronicle prevents context loss. After important decisions, it documents the decision, the alternatives considered, the rationale, and a review trigger date. After mistakes, it captures what happened, the root cause, the impact, and how to prevent recurrence. Files land in `03-resources/knowledge/` using consistent templates. Chronicle also proactively flags when a decision is overdue for review or when the same mistake appears twice — signaling a systemic issue rather than a one-off.

**Model:** Haiku — memory operations are well-structured, high-frequency, and fast.
