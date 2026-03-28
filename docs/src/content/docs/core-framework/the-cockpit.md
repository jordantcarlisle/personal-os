---
title: The Cockpit
description: The 00-cockpit directory is your daily command center—where you orient each morning, capture everything, and run your weekly and quarterly reviews.
---

The `00-cockpit/` directory is the operational layer of Personal OS. If the PARA structure organizes where information lives, the cockpit is where you actually work each day. It's the first place the agent reads when you start a session, and the last place it updates before you close out.

Think of it like a physical cockpit: instruments show you what's happening, controls let you make adjustments, and everything important is within arm's reach.

## What's in the Cockpit

The cockpit contains four files, each serving a distinct function:

| File | Purpose | When the Agent Uses It |
|------|---------|----------------------|
| `dashboard.md` | Daily command center | Start of every session |
| `inbox.md` | Capture zone | Any time something new arrives |
| `weekly-review.md` | Weekly reflection template | Fridays, or at week's end |
| `quarterly-review.md` | Quarterly recalibration | Quarter-end, or when direction feels off |

## dashboard.md — The Daily Command Center

The dashboard is the single file that tells you and the agent what today looks like. It's read at the start of every session. It's updated after planning. It's the answer to "what should I be working on right now?"

A typical dashboard contains:

**Today's Focus** — Which hat are you wearing today (deep work, meetings, creative, administrative)? What's the primary context?

**Top 3 Objectives** — The three most important things to accomplish today. Not a task list—three outcomes. If today produces these three results, it was a good day regardless of what else happened.

**Sprint** — The concrete tasks you've committed to, with time estimates. This is where GTD's "next actions" land for the day.

**Waiting For** — Items blocked on others. Who, what, and when you last followed up. The agent scans this for items older than a week and surfaces them.

**On Deck** — What moves to tomorrow if today gets compressed. Having this pre-decided prevents end-of-day scrambling.

**Notes / Wins / Takeaways** — A free-form scratchpad for the day. Used during evening reflection to capture what actually happened.

The agent reads the dashboard at session start to understand your current load. If the Top 3 aren't set, it asks. If the sprint is empty, it helps populate it. If Waiting For has stale items, it flags them before you start working.

## inbox.md — The Capture Zone

The inbox is the lowest-friction entry point in the system. It exists for one reason: to capture things immediately so your brain can let go of them.

Nothing is too small or too half-formed for the inbox. A one-line note is enough:

```
- Look into async video tools for standup replacement
- Thank Marcus for the intro—follow up with context
- The pricing page copy feels off—revisit before launch
- Idea: write about technical debt as a leadership problem
```

The inbox has no required format. The agent can add items during conversation ("Want me to capture that?"). You can drop items in directly. The goal is zero friction on the input side.

Processing the inbox—deciding what each item means and where it belongs—happens separately, usually during weekly review or when the inbox starts to feel heavy. Processing is covered in [Getting Things Done](/core-framework/getting-things-done/).

The rule: inbox to zero is a weekly goal, not a daily one. Daily inbox maintenance creates anxiety. Weekly processing creates clarity.

## weekly-review.md — The Weekly Ritual

`weekly-review.md` is a template and a log. It contains the structured questions the agent walks you through each week, and it preserves the record of past reviews.

The weekly review template typically covers:

- What went well this week?
- What didn't go as planned?
- Inbox processed to zero?
- All active projects reviewed for clear next actions?
- Waiting For list audited?
- Habits reviewed?
- What are the Top 3 priorities for next week?

The agent doesn't just ask these questions—it reads the relevant files first. Before asking "do all active projects have clear next actions?", it scans `01-projects/` and surfaces any that don't. Before asking about habits, it pulls the current week's tracker.

This turns the weekly review from a retrospective checkbox exercise into a genuine system calibration.

## quarterly-review.md — The Quarterly Recalibration

The quarterly review operates at a higher altitude than the weekly. Where weekly reviews ask "did I execute well?", the quarterly asks "am I executing on the right things?"

The quarterly review covers:
- Project audit: what to keep, kill, or pivot
- Goals check: which quarterly objectives were hit, missed, or abandoned—and why
- Area health: are ongoing responsibilities actually being maintained?
- System health: is the OS itself working, or are there friction points to fix?
- Next quarter planning: what are the three to five things that matter most?

The agent brings data to this conversation: habit streaks, project completion rates, Waiting For patterns, recurring inbox items. The goal is an honest assessment, not a motivated one.

## How the Agent Uses the Cockpit

At the start of any session, the agent reads `dashboard.md` to understand:
- What's the current Top 3?
- What's on the sprint?
- What's been waiting too long?

When you mention anything new, it offers to capture it to `inbox.md`.

During planning sessions, it updates `dashboard.md` with the results—the Top 3 for the day, the sprint for the afternoon, any new Waiting For items.

At the end of sessions or days, it updates Notes / Wins with what happened.

The cockpit works because it's the agent's primary interface with your operating reality. Everything else in the system is organized for retrieval; the cockpit is organized for action.

## Key Files

- `00-cockpit/dashboard.md` — Start here every session
- `00-cockpit/inbox.md` — Capture everything here first
- `00-cockpit/weekly-review.md` — Run this every Friday
- `00-cockpit/quarterly-review.md` — Run this every quarter-end

## Next Steps

- Read [The Daily Loop](/core-framework/the-daily-loop/) to see how the cockpit fits into the morning and evening rituals
- Read [Weekly and Quarterly Reviews](/core-framework/weekly-and-quarterly-reviews/) for a detailed walkthrough of both review formats
- Open `00-cockpit/dashboard.md` and set your Top 3 for today
