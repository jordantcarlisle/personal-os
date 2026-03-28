---
title: Growing the System
description: How Personal OS evolves over time — adding modules, creating custom commands, building playbooks, and the compounding effect.
---

## The System Is Designed to Grow

Personal OS ships with a core and a set of optional modules. Most people activate two or three modules on day one. Over time, as your situation changes and your trust in the system deepens, you add more. This is intentional — a system you grow into is more durable than one you're handed and told to fill.

Growth happens in four ways: adding modules, building custom commands, creating playbooks, and accumulating knowledge. Each layer compounds on the ones before it.

## Adding Modules Over Time

You don't have to activate every module at once. In fact, adding too many modules before you've built the daily habit tends to create overhead rather than value. A better pattern:

Start with the core daily loop and one module that addresses your most obvious gap. Run it for two to four weeks until it feels natural. Then add the next module that would help most.

When you're ready to add a module, run `/onboard` again — the system detects what's configured and walks you through just the new module. Or activate manually by creating the module's area folder, dropping in the agent definition, and adding the files from the module's template.

Signs a module is worth adding:
- You find yourself manually tracking something that the module would automate
- A domain of your life is producing friction and doesn't have representation in the system
- You've mentioned the same type of context to your agent three or more times and it has no persistent memory of it

## Creating Custom Commands

Custom slash commands are the fastest way to make the system feel like yours. A slash command is a named workflow — a sequence of things your agent does when you say the word.

Some examples of custom commands users build:

`/deep-work` — sets a focus mode: checks the next 2 hours of calendar, silences non-urgent captures, queues the first task, and sets a timer.

`/project-review` — runs a structured review of a specific project: last action taken, what's pending, what's blocking, and what the next three actions should be.

`/team-prep` — before a team meeting, pulls recent context from each attendee's profile and drafts a lightweight agenda.

To create a custom command, add a skill file to `~/.claude/skills/` with the command name, a description of when to invoke it, and the instructions for what it does. The [skills documentation](/reference/custom-commands) covers the format in detail.

## Building Playbooks

Playbooks are reusable decision frameworks stored in `03-resources/playbooks/`. When you face a recurring decision or situation, writing it down once means your agent can surface it every time.

Good candidates for a playbook:
- How you evaluate new project opportunities (what signals say yes vs. no)
- How you approach a difficult conversation
- Your hiring rubric
- How you decide whether to delegate something
- Your weekly review ritual, customized to your situation

Playbooks compound because they encode your judgment in a retrievable form. Three months from now, when you're facing the same type of decision, your agent pulls the playbook instead of starting from scratch.

## The Compounding Effect

The system gets materially better in the first 90 days. Here is why:

In week one, your agent knows your name and your current projects. By week four, it knows your preferences, your patterns, and your recurring friction points. By week twelve, it has context on past decisions, a populated knowledge base, relationship history with your key contacts, and calibrated understanding of when to push and when to hold back.

Each session adds a small amount of context. Each playbook and decision log compounds that context into judgment. Each module adds a domain of awareness. The result is an operating system that fits you specifically — not because it was pre-built that way, but because you built it together over time.

The only failure mode is abandonment. Systems that get used get better. The daily loop is the hedge against that — it creates a forcing function for interaction, which is the fuel the system runs on.