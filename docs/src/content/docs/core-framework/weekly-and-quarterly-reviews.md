---
title: Weekly and Quarterly Reviews
description: The most important rituals in Personal OS—how weekly reviews keep the system trustworthy and quarterly reviews keep you aimed at the right targets.
---

If you only implement one part of Personal OS, make it the weekly review.

Every other component of the system—PARA organization, GTD capture, identity-based habits, daily planning—degrades without regular review. Projects accumulate stale next actions. The inbox fills with unprocessed items. Waiting For items age past the point where follow-up feels natural. The dashboard diverges from reality. Within two weeks without a review, the system stops being trustworthy. Once that happens, you stop using it.

The weekly review is what prevents this. The quarterly review operates at a higher altitude and recalibrates direction rather than execution.

## The Weekly Review

The weekly review runs approximately 45-90 minutes, typically at week's end. The agent structures and facilitates the entire session.

### Why It's Non-Negotiable

Trust is the operative word. GTD's core premise is that your brain will relax its grip on open loops only if it trusts that the external system is capturing everything and will surface the right things at the right time. That trust is earned through demonstrated reliability—and the weekly review is what makes the system reliable.

A system you can trust is one you'll actually use. A system you don't trust becomes shelf furniture: it's there, you know it exists, but you work around it because it's proved unreliable too many times.

### The Review Structure

**1. Clear the Decks**

Before processing anything, close loose ends:
- Capture anything still rattling around in your head to the inbox
- File any loose papers, notes, or physical items if applicable
- Clear your desktop (digital and physical)

The goal is to start the review with a clean cognitive slate.

**2. Process Inbox to Zero**

Every item in `00-cockpit/inbox.md` gets a decision:

- Delete it (no longer relevant)
- Do it now (two minutes or less)
- Delegate it (and log to Waiting For)
- File it as reference material in `03-resources/`
- Convert it to a project next action
- Move it to Someday/Maybe

Zero doesn't mean everything is done—it means every item has been decided. A properly processed inbox item is either gone, delegated, or filed somewhere actionable.

**3. Review Active Projects**

The agent scans `01-projects/` and checks each project folder. For each project:

- Is there a clear next action?
- Is the next action actually next—or is it blocked?
- Has this project moved since last week?
- Should this still be active, or is it time to archive or kill it?

A project without a clear next action is the single most common reason work stalls. The weekly review exists partly to catch this.

**4. Audit Waiting For**

Review every item in the Waiting For list on `00-cockpit/dashboard.md`:

- What's the current status?
- Is a follow-up needed?
- Has anything been waiting long enough that it should be escalated or dropped?

A Waiting For item older than two weeks without a check-in is a system failure. Either you didn't follow up, or the item is no longer relevant—either way, it needs a decision.

**5. Review Habits**

The agent pulls the current week's habit tracker and surfaces the data:

- Which habits hit their targets?
- Which ones missed—and how many times?
- Any streaks worth acknowledging?
- Any habits that have consistently missed for three or more weeks (signal that the implementation is wrong, not the person)?

This isn't a performance review—it's calibration. If a habit is consistently missed, the question isn't "why didn't you do this?" but "is this habit scheduled at the right time, in the right context, in the right form?"

**6. Calendar Review**

Scan the upcoming week:
- What's already committed?
- What prep is needed for scheduled meetings?
- Are there any conflicts or tight transitions?
- Is there protected deep work time, or is the week all meetings?

The agent helps identify where to place sprint items given the calendar reality. This is where the Top 3 for the coming week emerge.

**7. Set Next Week's Priorities**

Close the review by setting the three most important outcomes for the coming week. Not a task list—three outcomes. Write them to the weekly review log and to `00-cockpit/dashboard.md`.

### Common Failure Modes

**The review that never finishes.** Getting pulled into doing tasks during the review instead of just reviewing them. The review is a meta-process—work on decisions, not work items. Flag things, process them; do them later.

**The review that skips projects.** Scanning only the inbox and calling it done. The project review is the most important step. An inbox at zero with stale projects is false clarity.

**The review that happens monthly.** Bi-weekly reviews are a hard floor. Monthly gaps are too long—the system drifts too far from reality before it gets recalibrated.

## The Quarterly Review

The quarterly review asks bigger questions. Where the weekly asks "did I execute well?", the quarterly asks "am I executing on the right things?"

It runs 2-4 hours, ideally at the end of each quarter. Many people do it on a Friday afternoon or Saturday morning, away from their normal workspace.

### The Review Structure

**1. Assess the Quarter**

Start with honest accounting:
- What were the three most important things you accomplished?
- What were the three biggest misses or incomplete items?
- Where did your time actually go versus where you planned it to go?

The agent can pull data here: how many projects were completed versus how many were started, habit performance across the 13-week period, recurring patterns in the weekly review notes.

**2. Project Audit**

Review every project in `01-projects/` with ruthless clarity:

- **Keep:** Active, right outcome, moving forward
- **Kill:** Not going to happen, no longer aligned, resources better spent elsewhere
- **Pause:** Real future potential but not now—move to `03-resources/` or Someday list
- **Pivot:** The outcome should change, but the effort is worth continuing

The project audit often reveals overcommitment: projects that exist on the list because removing them feels like giving up, rather than because they should be happening. A killed project that was never going to happen is a gift—it stops creating background guilt and frees attention for what's actually moving.

**3. Area Health Check**

Review each area in `02-areas/`:
- Is this area actually being maintained, or just existing?
- Are there any areas where neglect is starting to create problems?
- Are there any areas that should be promoted to projects for focused attention?

**4. Goals Recalibration**

Review your quarterly goals (set at the start of the quarter):
- What was accomplished?
- What wasn't—and should it carry forward, or be dropped?
- What should the next quarter's goals be?

Good quarterly goals are specific, outcomes-based, and few. Three to five goals is a quarter. Ten goals is a wish list.

**5. Identity and Systems Review**

Close the quarterly review by looking at the operating system itself:
- Is the identity file still accurate? Any statements to update or add?
- Is the habit stack serving you? Any habits to add, remove, or restructure?
- Are there any system friction points—things that consistently create resistance?

The quarterly review is one of the few times you work *on* the system rather than just *in* it.

### Setting Up the Next Quarter

The output of the quarterly review should be:
- A clean archive of completed or killed projects
- Clear quarterly goals written to `00-cockpit/quarterly-review.md`
- Updated dashboard for Monday
- Any system changes captured in a changelog or note

## Making Reviews Happen

The most common failure mode for both review types is simple: they don't happen. Scheduling them explicitly—a recurring Friday afternoon block for weeklies, a recurring Saturday morning for quarterlies—is more reliable than relying on intention.

The agent can help enforce this: if it's Friday and the weekly review hasn't happened, it will notice and ask. The question isn't whether reviews are worth doing—they are, demonstrably. The question is whether you've made them structurally inevitable rather than optionally aspirational.

## Key Files

- `00-cockpit/weekly-review.md` — Weekly review template and log
- `00-cockpit/quarterly-review.md` — Quarterly review template and log
- `00-cockpit/inbox.md` — Processed to zero during weekly review
- `01-projects/` — Reviewed for next actions every week
- `05-habits/tracker.md` — Reviewed for performance during weekly review

## Next Steps

- Schedule a recurring weekly review block on your calendar—Friday afternoon is a common choice
- Read [Getting Things Done](/core-framework/getting-things-done/) to understand the processing logic used during inbox-to-zero
- Run your first weekly review this week, even if abbreviated—the habit of doing it matters more than doing it perfectly
