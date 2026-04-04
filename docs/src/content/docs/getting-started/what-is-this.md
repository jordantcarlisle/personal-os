---
title: What Is This?
description: Personal OS is a markdown-based operating system for your life — integrating GTD, PARA, and Atomic Habits, powered by an AI Chief of Staff.
---

Most productivity systems fail the same way. You set them up carefully, use them for two weeks, and then life accelerates and the system falls apart — because maintaining the system itself became another job. You end up with a half-filled database, a neglected task manager, and the vague guilt of someone who knows better but can't keep up.

Personal OS is built around a different premise: the system should run itself, with your AI agent handling the overhead so you can focus on the actual work.

## What It Is

Personal OS is a markdown-based personal operating system — a folder structure, a set of files, and a collection of agent instructions that turn your AI coding tool into a Chief of Staff. The agent reads your files, knows your goals, tracks your habits, and runs structured rituals with you each day.

Everything lives in plain text. No SaaS subscriptions to maintain. No proprietary databases to migrate out of. Just folders and files that your agent can read, write, and reason over — and that you can open in any editor.

The folder structure organizes your life into five zones:

```
00-cockpit/     your daily command center (dashboard, inbox, reviews)
01-projects/    active projects with defined outcomes
02-areas/       ongoing responsibilities (work, health, finances, relationships)
03-resources/   playbooks, knowledge base, mental models
04-archives/    completed or inactive items
05-habits/      your identity statements and habit tracking
```

Your agent knows what lives where. When you say "I want to improve my sleep," it doesn't just give you a to-do item — it checks your quarterly goals, looks at your active projects, and helps you decide whether this belongs as a project with milestones or a habit to track.

## The Frameworks Behind It

Personal OS draws from four decades of productivity research, integrated into a single coherent system.

**GTD (Getting Things Done — David Allen)** provides the capture-and-clarify backbone. Nothing lives in your head. Everything goes into the inbox. The agent processes it with you: is this actionable? What's the next step? What project does it belong to? The result is a trusted system — you stop mentally tracking things because you know they're captured somewhere reliable.

**PARA (Building a Second Brain — Tiago Forte)** gives the folder architecture its logic. The distinction between Projects (finite, have an outcome) and Areas (ongoing, have a standard) is the most useful filing rule most people have never been taught. It answers the question "where does this go?" in under two seconds, every time.

**Atomic Habits (James Clear)** powers the identity layer. Your `05-habits/identity.md` file doesn't track what you do — it tracks who you're becoming. Each habit is anchored to an identity statement written in the present tense. You're not trying to read more; you are someone who reads daily. The agent reinforces this framing during every reflection session.

**OKRs + The 12 Week Year** set the planning cadence. Instead of annual goals that lose urgency by February, you operate on 13-week cycles using Objectives and Key Results — qualitative goals paired with measurable outcomes. Each cycle has 3-5 objectives with concrete key results, scored honestly at the end. The 12 Week Year (Brian Moran) provides the urgency of a short cycle; OKRs provide the structure for what "success" actually means. The agent holds you accountable to weekly progress against your key results, not just end-state hopes.

## Who It's For

Personal OS is designed for people managing multiple high-stakes domains simultaneously — a demanding job, a creative side project, a fitness practice, a family, continuous learning — who want their AI tools to actually help with the operating system of their life, not just answer one-off questions.

It's particularly useful if you:

- Have tried productivity systems before and found the maintenance cost too high
- Are already using Claude Code, Gemini CLI, Codex, or Cursor for technical work and want to extend that into your personal OS
- Prefer working in plain text over clicking through apps
- Want your AI agent to have real context about your goals and constraints — not just the current conversation

You don't need to be technical. The system is markdown files. If you can edit a text file, you can run this.

## What You Get

After running `/onboard` — a 15-20 minute setup conversation with your agent — the system is personalized to you:

- Your identity statements are written into `05-habits/identity.md`
- Your quarterly objectives are loaded into your dashboard
- Your keystone habits are in the tracker
- Your agent knows your energy patterns and when to route you toward deep work vs. admin
- Optional modules (health data, learning system, relationship management, and more) are activated based on your needs

After that, the daily loop is three commands:

- **`/reflect`** — Morning intentions and evening wins. The heartbeat of the system.
- **`/triage`** — Scan your inbound, surface what matters, process your inbox.
- **`/plan`** — Build a focused daily sprint the agent will push back on if you're overcommitting.

Run these consistently for two weeks. That's when the compounding starts — your agent has enough context to anticipate your patterns, surface stale projects before they become crises, and remind you of commitments you made three weeks ago.

## The Honest Trade-off

This is not a passive tool. The system compounds with use, which means it requires consistent use. If you run `/reflect` sporadically, your habit tracking will have gaps. If you stop processing your inbox, it fills up and the dashboard loses trust. The rituals need to become actual rituals.

The upside: once they are habits, they take 10-15 minutes in the morning and 10 minutes in the evening. The agent does the heavy lifting — reading files, surfacing patterns, writing updates — while you answer questions and make decisions.

## Key Files

| File | Purpose |
|------|---------|
| `00-cockpit/dashboard.md` | Your daily command center — Top 3 priorities, active projects, waiting-for items |
| `00-cockpit/inbox.md` | Capture zone — everything lands here before being processed |
| `05-habits/identity.md` | Who you're becoming — roles, identity statements, role models |
| `05-habits/tracker.md` | Daily habit log |
| `CLAUDE.md` | Agent instructions — the brain of the system |

## Next Steps

- **[Choose Your Tool](/getting-started/choose-your-tool)** — Pick the platform that works best for you
- **[Install and Onboard](/getting-started/install-and-onboard)** — Clone the repo and personalize your system
- **[Your First Day](/getting-started/your-first-day)** — Walk through what the first day actually looks like
