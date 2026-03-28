---
title: Module Commands
description: Commands that activate with optional modules — /health, /study, /network, and /content.
---

Module commands extend the daily loop with domain-specific workflows. Each requires the corresponding module to be activated during onboarding. When you run a module command, the Chief of Staff delegates to the specialist agent for that domain — you get expert-level guidance rather than a general-purpose response.

## /health

**Requires:** Health Data Integration module
**Specialist:** Cipher (health-analyst)

Pulls your biometric data from connected sources and provides an actionable briefing. The command gathers sleep (duration, quality, deep and REM splits), recovery (HRV, resting heart rate, readiness score), and prior day activity data. It then interprets against your 7-day and 30-day baselines, flagging anything more than 15% off.

The morning briefing leads with a one-line summary — "Good recovery day" or "Below baseline — consider scaling back" — followed by key metrics with context rather than just numbers. If your sleep was below 7 hours, Cipher flags it per Walker's framework. If HRV is low, it suggests a recovery-focused day per Attia. Recommendations are evidence-based, not generic.

If you're running an active health experiment, `/health` reports protocol adherence, days into the experiment, and whether the trend matches expectations. It tells you when enough data exists to draw a conclusion.

**During `/review`:** Cipher switches to weekly synthesis mode — sleep averages and trend direction, exercise summary, notable patterns or correlations, and one focus recommendation for the week ahead.

---

## /study

**Requires:** Learning System module
**Specialist:** Sage (learning-tutor)

Starts a guided study session built on retrieval practice, spaced repetition, and Socratic questioning. When invoked, Sage loads your active study plan from `02-areas/learning/active-plan.md` and checks what was last studied for spaced repetition timing.

You choose a mode at the start:

- **Explore** — "I want to learn something new." Sage introduces new material with guided discovery, using analogical thinking and big-picture-first framing.
- **Study** — "I'm working through [topic]." Sage continues where you left off. Every session starts with retrieval: "Before we continue, what do you remember from last session?" Then interleaving mixes related concepts from adjacent domains.
- **Review** — "Quiz me." Sage pulls material studied 1, 3, 7, and 30 days ago and quizzes with increasing difficulty. Concepts are flagged as solid or needing more work.
- **Plan** — "Help me plan my learning." Curriculum mapping and schedule building.

After every session, Sage updates `02-areas/learning/active-plan.md` with progress and flags any insights that could become content. No external spaced repetition app required — Sage manages this conversationally.

---

## /network

**Requires:** Relationship Management module
**Specialist:** Nexus (relationship-manager)

Surfaces who to reach out to, preps you for upcoming meetings, and maintains relationship health. Nexus tracks contacts by importance tier with contact thresholds — Critical contacts every 14 days, High every 30, Medium every 90, Low every 180.

You choose a mode:

- **Check** — "How's my network?" Nexus reports contacts by tier, surfaces everyone in Decaying status (past their threshold), and suggests the top 3 outreach priorities for this week.
- **Prep** — "Prep me for my meeting with [name]." Nexus pulls their profile — interests, communication style, last interaction, open follow-through items — and suggests talking points.
- **Reach out** — "Who should I contact?" Top 5 contacts due for outreach, each with a suggested reason to connect. Nexus will draft the message if you ask. Per Ferrazzi: never reach out empty-handed.
- **Update** — "I just met with [name]." Updates last-contacted date, captures interaction notes, adjusts relationship strength if warranted.

**During `/review`:** Nexus automatically runs a network health report and asks who you connected with during the week to keep dates current.

---

## /content

**Requires:** Brand & Content module
**Specialist:** Signal (brand-strategist)

Manages your content pipeline — from idea to published post — while enforcing your voice. Signal starts every session by checking posting frequency against your last post date and loading your content queue from `02-areas/brand/content-queue.md`.

You choose a mode:

- **Scan** — "Find me something to post about." Signal surfaces the top 3 opportunities from your content queue, recent work or learning that could become content (Kleon's Show Your Work principle), or trending topics in your domain. Each option comes with an angle suggestion.
- **Draft** — "Help me write about [topic]." Signal interviews you first — "What's your angle? What's the one takeaway?" — then drafts in your voice per the voice guide. It never writes generic content without understanding your specific perspective.
- **Review** — "Check this draft." Signal checks against the voice guide and runs a STEPPS audit, scoring Social Currency, Triggers, Emotion, Public, Practical Value, and Stories on a 1-5 scale. Weak dimensions get specific improvement suggestions.
- **Plan** — "Plan this week's content." Pulls from last week's performance data, maps content queue ideas to platforms and posting times, and builds a 5-7 day content calendar.

Signal tracks your posting streak. If you've gone quiet, it flags the gap without judgment and surfaces the fastest path back to publishing.
