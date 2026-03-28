# Core Onboarding Questionnaire

These questions help your AI agent understand who you are, what you're working toward, and how to help you best. Take your time — the quality of your answers directly shapes how useful the system becomes.

Work through each block in order. Skip anything you're not ready to answer and return to it later.

---

## Block 1: Identity

*Your agent will use these answers to build your identity file (`05-habits/identity.md`) and calibrate how it talks to you, challenges you, and helps you stay accountable.*

**1. What are your most important roles in life?**

Examples: parent, engineer, creator, partner, leader, learner, founder, athlete, student

```
Your answer:
```

---

**2. For each role, complete this sentence: "I am someone who ___"**

Write in present tense — this is who you ARE, starting now. Not who you're trying to become, but who you're choosing to be.

Examples:
- Parent → "I am someone who shows up fully for my kids, even when I'm tired."
- Engineer → "I am someone who ships clean, readable code the first time."
- Creator → "I am someone who publishes before I feel ready."

```
Your answer:
```

---

**3. What old identities or self-limiting beliefs are you leaving behind?**

Name the stories that no longer serve you. Flip them into the new truth.

Examples:
- "I'm not a morning person" → "I wake up early because mornings are my power hours."
- "I'm bad at follow-through" → "I finish what I start."
- "I'm not technical enough" → "I learn what I need to learn."

```
Your answer:
```

---

**4. Who do you admire? For each person, what specifically do you emulate?**

Don't just list names. What is it about them — a quality, a way of operating, a philosophy — that you want to internalize?

Examples:
- Richard Feynman — explains complex things simply, stays curious at all costs
- Kobe Bryant — obsessive preparation, treats every rep as meaningful
- Naval Ravikant — long-term thinking, specific knowledge over credentials

```
Your answer:
```

---

## Block 2: Goals & Focus

*These answers populate your dashboard (`00-cockpit/dashboard.md`) and give the agent the context to help you prioritize ruthlessly.*

**5. What are you working toward this quarter? (Max 3-5 objectives)**

For each objective, answer three sub-questions:
- **Result goal:** What does "done" look like?
- **Why it matters:** What changes if you achieve this?
- **Progress milestones:** What are the 2-3 intermediate checkpoints?

```
Objective 1:
  Result goal:
  Why it matters:
  Milestones:

Objective 2:
  Result goal:
  Why it matters:
  Milestones:

Objective 3:
  Result goal:
  Why it matters:
  Milestones:
```

---

**6. What does your typical week look like?**

Include: work schedule, recurring meetings, family commitments, protected focus blocks, free time. The agent uses this to avoid scheduling tasks into blocks that are already claimed.

```
Monday:
Tuesday:
Wednesday:
Thursday:
Friday:
Saturday:
Sunday:

Recurring commitments (daily or weekly):
Protected blocks (do not schedule over):
```

---

**7. What's your biggest bottleneck right now?**

What one thing, if solved, would unlock the most progress across everything else? Be specific — "I'm overwhelmed" is a symptom; "I don't have a clear decision-making framework for what to say no to" is a bottleneck.

```
Your answer:
```

---

## Block 3: Habits

*These answers build your habit tracker (`05-habits/tracker.md`) and help the agent know when and how to check in.*

**8. What are 3-5 keystone habits you want to track daily?**

Keep this list small. These should be non-negotiable — the habits that, when done consistently, make everything else easier. Avoid aspirational additions that dilute the list.

Examples: morning workout, 8 hours sleep, no alcohol, daily writing, 10-minute meditation, one deep work block

```
Habit 1:
Habit 2:
Habit 3:
Habit 4 (optional):
Habit 5 (optional):
```

---

**9. What time do you wake up? What's your ideal morning routine?**

Describe the sequence, not just the activities. How long does each part take?

```
Wake-up time:

Morning sequence:
  [time] — activity (duration)
  [time] — activity (duration)
  [time] — activity (duration)

First work block starts at:
```

---

**10. When are you at your sharpest? When does your energy dip?**

This helps the agent route high-stakes cognitive work to your peak hours and administrative tasks to your low-energy windows.

```
Peak cognitive window (when you do your best thinking):
Secondary window (still good, less sharp):
Low-energy window (admin, email, light tasks only):
Post-lunch slump? (yes/no and approximate time):
Best time for creative work:
Best time for meetings:
```

---

## Block 4: Tools & Integrations

*These answers configure which external apps the agent can connect to on your behalf.*

**11. What calendar do you use?**

- [ ] Google Calendar
- [ ] Outlook / Microsoft 365
- [ ] Apple Calendar
- [ ] Other: ___

```
Primary calendar:
Any secondary calendars to be aware of:
```

---

**12. What email provider?**

- [ ] Gmail
- [ ] Outlook / Microsoft 365
- [ ] Fastmail
- [ ] Other: ___

```
Primary email:
```

---

**13. What messaging apps do you use for work?**

- [ ] Slack
- [ ] Microsoft Teams
- [ ] Discord
- [ ] Other: ___

```
Primary:
Secondary (if any):
Workspace/server name:
```

---

**14. Where do you keep notes and documents?**

- [ ] Notion
- [ ] Obsidian
- [ ] Google Docs / Drive
- [ ] Apple Notes
- [ ] Other: ___

```
Primary notes tool:
Any specific workspaces or vaults to be aware of:
```

---

**15. Do you use git?**

The system is git-backed by default — your ops repo is version-controlled and can be pushed to GitHub. If you're not a git user, the agent handles this invisibly. If you are, note any preferences.

- [ ] Yes — I use git regularly
- [ ] Somewhat — I know the basics
- [ ] No — handle it for me

```
GitHub username (if applicable):
Any preferences for commit style or branch naming:
```

---

## Block 5: Personal Context

*This is the context that makes the difference between a generic assistant and one that actually gets you. Be as brief or detailed as you want.*

**16. Share any core memories, formative experiences, or personal history that would help the agent understand you.**

This isn't a therapy intake — it's context. Where did you grow up? What shaped your values? What experiences made you who you are? What have you survived or overcome that informs how you operate today?

```
Your answer:
```

---

**17. What books have shaped your thinking?**

Even 3-5 titles helps the agent understand your worldview, the frameworks you reason from, and the kind of ideas that resonate with you.

```
Your answer:
```

---

**18. What's your educational background?**

Degrees, certifications, notable courses, bootcamps, self-study programs. This helps the agent calibrate explanations and identify gaps worth filling.

```
Formal education:
Certifications or professional training:
Notable self-study (courses, programs, autodidactic deep-dives):
```

---

**19. Anything else the agent should know to serve you well?**

Communication preferences, pet peeves, things previous tools got wrong, topics that are off-limits, how you prefer to receive feedback, anything at all.

```
Your answer:
```

---

## How Your Answers Are Used

Your responses feed directly into specific files in the operating system:

| Block | Destination |
|-------|-------------|
| Block 1 (Identity) | `05-habits/identity.md` — your identity stack and admiration models |
| Block 2 (Goals) | `00-cockpit/dashboard.md` — quarterly objectives, Top 3 seed material |
| Block 3 (Habits) | `05-habits/tracker.md` — daily habit tracking template |
| Block 4 (Tools) | Agent integration configuration — which external apps to connect |
| Block 5 (Personal Context) | Session memory layer — surfaces in planning and reflection |

Your answers are stored locally in your repo. Nothing is sent anywhere outside your machine and your configured integrations.

---

*After completing this questionnaire, run `/onboard` to have the agent process your answers and scaffold the relevant files.*
