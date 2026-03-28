---
title: The Onboarding Questionnaire
description: What /onboard asks, why it asks it, and how your answers shape the system.
---

## What Happens During /onboard

Running `/onboard` starts a guided conversation — not a form. Your Chief of Staff asks questions, listens to your answers, and uses them to configure the system for your life. It takes about 15–20 minutes on first run. The output is a populated `CLAUDE.md` (your agent's standing instructions) and a set of seeded files across your Personal OS that reflect your actual context, not a generic template.

You can re-run `/onboard` at any time. The system will detect what's already configured and only ask about the gaps.

## The Questions and Why They Matter

**Your roles and contexts.** The system asks what "hats" you wear — work roles, side projects, family responsibilities, creative pursuits. This shapes how your agent prioritizes and context-switches. A CTO building a side business needs different defaults than a freelancer with one client or a student with a part-time job.

**Your current projects.** You'll walk through what you're actively working on: what you're trying to accomplish, what "done" looks like, and what's blocking you. This seeds your `01-projects/` folder and ensures your agent starts with real context rather than empty templates.

**Your time and energy rhythms.** When are you sharpest? When do you have protected time? The system uses this to make smarter scheduling suggestions — not just what to do, but when to do it based on the kind of work it demands.

**Your habits and identity.** What behaviors do you want to build? What does your ideal day look like? These answers populate `05-habits/identity.md` and `05-habits/tracker.md` — the documents your agent references when you need a reminder of what you're working toward.

**Your tools.** Which calendar, email client, note-taking app, and communication tools do you use? This drives which integrations get configured. If you don't use Slack, the agent won't try to scan it. If you're all-in on Notion, the knowledge base gets wired there.

**Your focus for this quarter.** What are your one to three most important outcomes for the next 90 days? These become your quarterly objectives and the filter your agent applies when you're overcommitted or unclear on priorities.

**Which modules to activate.** Based on your answers, the system recommends which optional modules fit your situation. You confirm or adjust. Modules can be added later — you don't have to activate everything on day one.

## What Gets Produced

By the end of `/onboard`, your system has:
- A configured `CLAUDE.md` with your name, roles, projects, and preferences
- Seeded project files for your active work
- A populated identity and habit tracker
- Configured integrations for your tools
- Activated modules matched to your situation
- A dashboard ready for your first real work session

The system is immediately usable — not something you have to "finish setting up" before it's worth running.

## If You Skip Onboarding

You can skip `/onboard` and configure manually. All the files exist; you fill them in. Most people find the conversation faster than editing markdown files cold. But if you're technical and prefer direct file editing, the [Personal Context](/making-it-yours/personal-context) guide covers how to do it by hand.