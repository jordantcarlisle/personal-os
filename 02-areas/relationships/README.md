# Relationship Management

> Track relationship health with importance tiers and decay thresholds so no critical connection goes cold by accident.

**Status:** Not activated

To activate this module, run `/onboard` and select "Relationship Management", or follow the manual setup guide in the docs.

---

## What Gets Set Up

- Contact framework with importance tiers (Critical / High / Medium / Low) and decay thresholds per tier
- Relationship strength tracking (Unbreakable / Strong / Growing / Weak / Decaying / Dormant)
- Relationship Manager agent (Nexus) with access to your contact database
- `/network` command for on-demand relationship health dashboards and outreach suggestions
- Contact health check baked into `/review` — decaying relationships surfaced every week before they become dormant
- Pre-meeting briefs pulled automatically before any meeting with a known contact

---

## What Your Agent Does For You

**Decay monitoring with specific contact context:**
> "Three relationships are approaching decay threshold this week. Highest priority: Marcus Chen — last contact was 34 days ago, he's tagged Critical. He mentioned he was evaluating a new platform when you last spoke. A short 'how did that go?' message would be high signal. Want me to draft it?"

**Pre-meeting briefs surfaced before you walk in:**
> "You have a call with Sarah in 40 minutes. Last met: 2026-01-14. She's working on expanding her team into a new market — you offered to connect her with a recruiter. That follow-through item is still open. Her interests: behavioral economics, trail running, team design. She tends to lead with context before getting to the ask — give her room."

**Post-meeting processing to keep the record current:**
> "You just finished your call with David. Want me to log notes? I can capture: what was discussed, any commitments made (yours and theirs), and update his Last Met date. Takes 60 seconds now, saves the context forever."

**Network health dashboard:**
> "Weekly relationship snapshot: 2 Critical contacts approaching decay, 1 High contact already past threshold, 14 contacts in 'Growing' strength. Your strongest cluster this month: former colleagues. Your most neglected cluster: advisors — last meaningful contact with your advisory group was 47 days ago on average."

---

## Source Materials

The Relationship Manager agent draws principles from:

- *Never Eat Alone* — Keith Ferrazzi (generosity-first networking, building real connections, the relationship action plan)
- *Give and Take* — Adam Grant (giver vs. taker dynamics, five-minute favors, the power of weak ties)
- *How to Win Friends and Influence People* — Dale Carnegie (genuine interest, remembering names, making people feel valued, conflict without antagonism)
