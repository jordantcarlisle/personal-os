---
title: Getting Things Done
description: How Personal OS implements David Allen's GTD methodology—capture, clarify, organize, reflect, engage—with an AI agent handling the heavy lifting.
---

David Allen's Getting Things Done methodology is built on a single insight: your brain is for *having* ideas, not *holding* them. Every open loop you're tracking mentally—the email you need to respond to, the thing you promised your colleague, the project that's stalled—consumes cognitive bandwidth. GTD's job is to drain those open loops into a trusted external system so your mind can focus on the work itself.

Personal OS implements GTD across five stages. The system handles the infrastructure; the agent handles the friction.

## The Five Stages

### 1. Capture

Everything goes into `00-cockpit/inbox.md` immediately. Tasks, ideas, things you were told, things you're worried about, half-formed project concepts. The only rule is that capture must be fast—if the act of recording something requires effort, you'll stop doing it.

The inbox is deliberately low-structure. A line item is enough:

```
- Follow up with Marcus about the API contract
- Book dentist appointment
- Idea: write a post about onboarding anti-patterns
- Research: better approaches to async standups
```

The agent can add items to the inbox during any conversation. When you mention something in passing—"I need to look into that pricing model"—the agent asks if you want it captured. Two seconds, done.

### 2. Clarify

Raw inbox items aren't actionable. Clarifying means processing each item through a short decision tree:

1. **Is it actionable?** If no—delete it, file it in `03-resources/` for reference, or move it to `04-archives/`. If yes, continue.
2. **What's the next physical action?** Not "work on the proposal"—"open the proposal doc and write the executive summary." Concrete, specific, completable in one sitting.
3. **Can I do it in two minutes?** If yes, do it now. If no, continue.
4. **Should someone else do it?** If yes, delegate and capture it as a Waiting For item. If no, continue.
5. **Does it belong to a project?** If yes, file the next action under that project. If no, put it on a standalone next actions list.

The agent helps with clarification during weekly reviews and whenever you explicitly ask to process your inbox. It will ask clarifying questions: "What's the outcome you want here?" and "What's the very next step?"

### 3. Organize

Clarified items land in the right place:

| Item Type | Where It Goes |
|-----------|--------------|
| Next action for a project | `01-projects/[project-name]/` next actions section |
| Standalone task | `00-cockpit/dashboard.md` today's sprint or next actions list |
| Waiting for someone | Waiting For section in `00-cockpit/dashboard.md` |
| Someday/maybe idea | `03-resources/ideas.md` or a dedicated someday list |
| Reference material | `03-resources/` in the appropriate subfolder |
| Completed/irrelevant | Deleted or moved to `04-archives/` |

The Waiting For list is easy to underestimate. Any time you delegate something or are blocked on someone else's response, log it: what you're waiting for, from whom, and when you asked. The agent flags items that have been sitting there too long.

### 4. Reflect

The GTD system degrades without regular review. Items go stale, projects drift, Waiting For items linger unnoticed. Reflection—specifically the weekly review—is what keeps the system trustworthy.

During the weekly review, the agent walks through:

- **Inbox to zero** — Every item processed, not just acknowledged
- **Project review** — Every active project has a clear next action
- **Waiting For audit** — Anything overdue gets a follow-up
- **Someday/maybe sweep** — Anything ready to activate moves to projects
- **Calendar review** — Upcoming week scanned for commitments to prepare for

Reflection is covered in full detail in [Weekly and Quarterly Reviews](/core-framework/weekly-and-quarterly-reviews/).

### 5. Engage

With a trusted system and a clear set of next actions, the question shifts from "what should I be doing?" to "what's the best use of my attention right now?" GTD offers three models for making that call:

- **Context** — What can I do given where I am and what tools I have?
- **Time available** — What fits in the time I have before my next commitment?
- **Energy level** — What matches my current cognitive capacity?
- **Priority** — Given the above, what has the highest leverage?

The agent surfaces this during daily planning. When you start a work session, it checks your dashboard, notes your Top 3 for the day, and helps you identify where to focus given your current calendar and energy.

## The Trusted System Principle

GTD only works if you actually trust the system. That means:

- **Everything is captured.** If you're still keeping open loops in your head because "it's faster," the system is leaking.
- **The inbox is processed regularly.** An inbox with 200 unprocessed items is just anxiety with better formatting.
- **Next actions are concrete.** Vague tasks ("deal with the vendor situation") don't get done. Specific ones do ("email Sarah to reschedule the vendor call for next Tuesday").
- **The weekly review happens.** Without it, the system drifts from reality within two weeks.

The agent's role is to make all four of these easier—faster capture, prompted processing, clearer next actions, and a structured weekly review ritual.

## Key Files

- `00-cockpit/inbox.md` — The capture zone
- `00-cockpit/dashboard.md` — Daily sprint, Waiting For, next actions
- `00-cockpit/weekly-review.md` — The reflection ritual template
- `01-projects/` — Active projects with next actions

## Next Steps

- Read [The Cockpit](/core-framework/the-cockpit/) to understand how the dashboard and inbox work together
- Read [The Daily Loop](/core-framework/the-daily-loop/) to see how GTD's engage stage plays out in practice
- Process your inbox right now—even if it's just five items
