---
title: Learning System
description: Build a structured curriculum, track study sessions, and integrate learning into your daily work.
---

## What

The Learning System module turns scattered reading and course-taking into a coherent curriculum with measurable progress. It adds a curriculum architecture to your system — organized by domain and tier — along with a learning tutor agent that runs structured study sessions, surfaces spaced repetition prompts, and connects your learning to your actual work. The `/study` command opens a session in any topic, pulling relevant context from your notes and highlighting where the material connects to things you're already doing.

## Why

Most knowledge workers consume content without a system. Books are read, courses are started, highlights are captured — and then none of it compounds. The Learning System module changes the relationship between consumption and application. Your agent tracks what you've studied, identifies gaps in your knowledge architecture, and surfaces connections you'd miss on your own. The key insight is that most professional learning happens through work: the module makes that implicit learning explicit, crediting it against a curriculum and identifying what dedicated study time should cover. Spaced repetition surfaces material right before it becomes relevant, not on a fixed schedule.

## What Gets Added

| Item | Path | Purpose |
|------|------|---------|
| Learning area folder | `02-areas/learning/` | Container for all curriculum files |
| Curriculum map | `02-areas/learning/curriculum.md` | Domain architecture with tiers and competency targets |
| Source inventory | `02-areas/learning/sources.md` | All books, courses, and resources mapped to curriculum domains |
| Mastery dashboard | `02-areas/learning/mastery-map.md` | Current status across domains and tiers |
| Active plan | `02-areas/learning/active-plan.md` | Quarterly focus, weekly study blocks, integration log |
| Agent definition | `02-areas/learning/agent.md` | Learning tutor agent configuration |

**Agent:** learning-tutor — runs study sessions, tracks progress, surfaces connections, and manages spaced repetition across your curriculum.

**Command:** `/study` — opens a study session. Specify a topic or let the agent suggest what's next based on your schedule and gaps.

## Integration Points

The learning module integrates into your daily loop at `/reflection`, where the agent surfaces one connection between yesterday's work and your curriculum — naming which domain you practiced, which mental models applied. This integration point is intentional: it reframes work as learning, not as a distraction from it.

During weekly review, the agent produces a learning synthesis: which domains got attention, what was missed, and what the next week's study blocks should cover. It also flags content opportunities — places where your learning could become something you share.

The module connects to your project work by mapping upcoming initiatives to curriculum domains. If you're about to start a machine learning project, the agent surfaces what gaps in your foundations are most likely to slow you down.

## Example Session

```
You: /study — I have 45 minutes. What's next?

Agent: Based on your active plan, you're in Week 3 of your biology foundations block.
Last session: Cell metabolism (2026-03-24). You flagged the electron transport chain as unclear.

Suggested session: Return to electron transport chain, then move to ATP synthesis.
Estimated: 35 minutes study + 10 minutes reflection/annotation.

Want to work through it together, or do you prefer to study independently and debrief afterward?
```