---
title: Brand & Content
description: Maintain your brand voice, manage a content queue, and build an audience systematically.
---

## What

The Brand & Content module adds the infrastructure for building a public presence to your Personal OS. It stores your brand voice guide, manages a content queue, tracks your posting cadence, and houses a brand strategist agent who helps you produce on-brand content, identify gaps in your output, and maintain consistency over time. The `/content` command surfaces your content queue, shows what's ready to post, and flags if your cadence has slipped.

## Why

Building an audience is a long game that requires consistent daily output. The obstacle isn't inspiration — it's the friction of context-switching from your primary work into content creation mode. The Brand & Content module reduces that friction by keeping your voice guide, content queue, and audience strategy inside the same system you use to plan your day. When a content idea surfaces during a work session, you capture it immediately. When it's time to post, you're not starting from scratch — you're choosing from a queue of pre-developed ideas that already match your voice. The domain benefits from agent support because brand consistency requires holding a lot of context: your tone, your audience, your current narrative arc, and what you've already said.

## What Gets Added

| Item | Path | Purpose |
|------|------|---------|
| Brand area folder | `02-areas/brand/` | Container for brand and content files |
| Voice guide | `02-areas/brand/voice-guide.md` | Tone, style, vocabulary, and what to avoid |
| Content queue | `02-areas/brand/content-queue.md` | Ideas at various stages: raw, drafted, ready |
| Audience strategy | `02-areas/brand/audience-strategy.md` | Target audience, engagement approach, platform priorities |
| Posting tracker | `02-areas/brand/posting-tracker.md` | Daily posting log and cadence metrics |
| Agent definition | `02-areas/brand/agent.md` | Brand strategist agent configuration |
| Content playbook | `03-resources/playbooks/content-creation.md` | Formats, hooks, and production process |

**Agent:** brand-strategist — drafts on-brand content, maintains voice consistency, manages the queue, and monitors posting cadence.

**Command:** `/content` — reviews the content queue, flags what's ready to post, and reports cadence against your target.

## Integration Points

The brand module connects to your daily loop through two light touchpoints. During `/reflection`, the agent checks your posting cadence and flags if you missed a day — early enough to still post before the day ends. When you're doing deep work in another domain (learning, a project, health research) and an insight surfaces that could become content, the agent offers to add it to the queue as a raw idea without breaking your focus.

During weekly review, the agent produces a content synthesis: posts published, engagement themes (if tracked), ideas ready to develop, and whether your current queue can sustain next week's cadence.

## Example Session

```
You: /content

Agent: Content queue — 2026-03-27

Ready to post (3):
- "The Kropotkin-Smith convergence" — drafted, reviewed, image ready
- "Why most health dashboards fail" — drafted, needs final edit
- "What a 82 readiness score actually means" — raw, needs development

Cadence: Posted 5 of 7 days this week. Missed Monday and Tuesday.
Target: Daily. Two-day gap is worth closing — Thursday + Friday posts recommended.

Want me to pull the top ready post for review?
```