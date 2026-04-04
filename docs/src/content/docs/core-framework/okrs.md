---
title: OKRs
description: How Personal OS uses Objectives and Key Results to set direction each quarter — and how the quarterly review template maps directly to the OKR framework.
---

Every 13 weeks, you set direction. Not a task list. Not a wish list. A small number of objectives with measurable results that tell you whether you hit them. This is the OKR framework — Objectives and Key Results — adapted for personal use on a 13-week cycle.

If you've used OKRs at work, the personal version is simpler. There's no alignment cascade, no cross-team dependencies, no quarterly business review. It's just you, deciding what matters most, defining what "done" looks like, and holding yourself accountable through the weekly review loop.

## The Structure

An OKR has two parts:

**The Objective** is qualitative. It describes what you want to achieve in language that's inspiring and directional. A good objective makes you feel something — it's the reason you'd get out of bed to work on this.

**Key Results** are quantitative. They describe how you'll know you achieved the objective. Each key result is specific, measurable, and has a clear finish line. If you can't tell whether you hit it, it's not a key result — it's a hope.

A complete OKR looks like this:

**Objective:** Build a real fitness foundation — not a burst of motivation, a sustainable practice.

- **KR1:** Train 4x/week for 12 consecutive weeks (48 sessions minimum)
- **KR2:** Hit 80kg back squat by end of cycle (current: 60kg)
- **KR3:** Complete one full rest-day protocol per week (mobility, sleep, nutrition)

The objective tells you *why*. The key results tell you *what specifically*. Together, they give you something you can track weekly and score honestly at the end of the quarter.

## How Many

Three to five objectives per quarter. Fewer is better. Each objective gets two to three key results. That's 6-15 measurable targets for 13 weeks — enough to drive real progress, few enough to actually focus.

If you have ten objectives, you have a wish list. If you have one, you might be avoiding the hard prioritization. Three is usually right for most people running a demanding life across multiple domains.

## Writing Good Objectives

Good objectives share a few qualities:

**They're outcome-oriented, not activity-oriented.** "Read more books" is an activity. "Build deep expertise in distributed systems" is an outcome — and it might involve reading, but also building, writing, and teaching.

**They're time-bound to 13 weeks.** An objective you can't meaningfully advance in one quarter is either too big (break it down) or too vague (make it concrete). The 13-week constraint forces specificity.

**They connect to your identity.** Check your `05-habits/identity.md` — your objectives should be things that the person you're becoming would naturally pursue. If there's a mismatch, either the objective or the identity statement needs updating.

**They span your important domains.** Don't put all five objectives in one area of life. If every objective is career-focused, your health and relationships will drift. The areas in `02-areas/` are a good check — are any critical areas completely unrepresented?

## Writing Good Key Results

Key results are where most people go wrong. The common failure is writing key results that are actually tasks.

**"Launch the new website" is a task.** It's binary — done or not — and it tells you nothing about quality or impact.

**"Publish the new site with 10 content pages, <2s load time, and 3 inbound links within 4 weeks of launch" is a set of key results.** Each one is independently measurable, and together they describe what a successful launch actually looks like.

A few tests for good key results:

- **Can you score it on a scale?** At the end of the quarter, you should be able to say "I hit 80% of this" — not just yes/no. Key results with numeric targets naturally support this.
- **Is it within your control?** "Get promoted" depends on other people. "Complete 3 high-visibility projects and present at 2 all-hands meetings" is within your control and likely leads to the same outcome.
- **Does it measure the outcome, not the effort?** "Spend 10 hours/week studying" measures effort. "Pass the certification exam" or "Build and deploy 3 projects using the new framework" measures outcome.

## How It Maps to the Template

The quarterly review template in `00-cockpit/quarterly-review.md` is built around OKRs, even though it uses slightly different labels. Here's the mapping:

| Template Field | OKR Concept | What to Write |
|---------------|-------------|---------------|
| **Objective** | The Objective | Qualitative, inspiring, directional |
| **Result goal** | Primary Key Result | The single most important measurable outcome |
| **Progress milestones** | Supporting Key Results | 2-3 measurable checkpoints across the 13 weeks |
| **Why it matters** | Context | Connects to identity, areas, or a larger goal |
| **Daily action** | Lead Measure | The repeatable input that drives the key results |

The "daily action" field deserves special attention. This is borrowed from *The 12 Week Year* concept of the 20-mile march — a consistent daily input that compounds over the quarter. If your KR is "write 30,000 words of the book," your daily action might be "write 500 words before 9am." The daily action is what makes the key result achievable rather than aspirational.

## Scoring

At the end of the quarter, score each objective 1-10 in the Objectives Review table. The scoring conversation should be honest:

- **8-10:** Hit or exceeded the key results. Real progress.
- **5-7:** Partial progress. Some key results hit, others missed. Worth examining why.
- **1-4:** Didn't happen. Either the objective was wrong, the key results were unrealistic, or execution broke down. All three are useful signals.

An average score of 6-7 across your objectives is healthy. It means you're setting ambitious-but-achievable targets. Consistent 9-10 scores mean you're sandbagging — set harder goals. Consistent 3-4 scores mean something structural is broken — either the goal-setting or the execution system.

The agent will prompt you through this scoring during Part 1 of the quarterly review. Be honest. The score is for you, not for a performance review.

## The Weekly Connection

OKRs aren't a set-and-forget exercise. They show up in three places during the week:

1. **Morning `/reflect`** connects today's Top 3 to your quarterly objectives. The agent asks: "How does today's work advance your objectives?" If the answer is "it doesn't," that's a signal.

2. **Weekly `/review`** checks project progress against key results. A project with no movement for two weeks is a stalled key result. The review surfaces this before it becomes a quarter-end surprise.

3. **Dashboard** in `00-cockpit/dashboard.md` shows your quarterly objectives as the top-level context for daily decisions. Every time you open the dashboard, you see what you committed to.

This weekly touchpoint is what separates OKRs that work from OKRs that get written in January and forgotten by February. The system keeps them in front of you.

## Common Mistakes

**Too many objectives.** Five is the hard cap. Three is usually right. Every objective you add dilutes focus on all the others.

**Key results that are actually tasks.** "Finish the migration" is a task. Break it into measurable outcomes: data migrated, tests passing, latency under threshold, zero rollback incidents in first week.

**No lead measures.** Objectives with key results but no daily actions are goals without a plan. The daily action is the lever. Without it, you're hoping outcomes materialize.

**All objectives in one domain.** Career tunnel vision is the most common version. Your areas of responsibility in `02-areas/` exist for a reason — check them.

**Objectives that don't connect to identity.** If an objective doesn't map to any identity statement in `05-habits/identity.md`, ask why you're pursuing it. External pressure? Guilt? Inertia? Those are weak fuels that won't sustain 13 weeks of effort.

## Key Files

- `00-cockpit/quarterly-review.md` — Where OKRs are set, scored, and reviewed
- `00-cockpit/dashboard.md` — Where current objectives are displayed daily
- `05-habits/identity.md` — Identity statements that objectives should align with
- `02-areas/` — Areas of responsibility that objectives should span

## Next Steps

- Read [Weekly and Quarterly Reviews](/core-framework/weekly-and-quarterly-reviews/) to understand the full review ritual where OKRs are set and scored
- Read [Identity and Habits](/core-framework/identity-and-habits/) to connect your objectives to who you're becoming
- Run your first quarterly review with the agent — it will walk you through setting OKRs using the template
