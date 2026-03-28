---
title: Core Commands
description: Reference for all core slash commands — /reflect, /triage, /plan, /review, /capture, /check-in, /debrief, /decide, /focus, /save, and /onboard.
---

Core commands power the daily and weekly loop. They're markdown files in `.claude/commands/` that the Chief of Staff reads and follows when you invoke them. Each command is a structured protocol — not a single prompt, but a multi-step workflow with clear inputs, process steps, and outputs.

## Daily Loop Commands

These four commands form the backbone of every workday.

### /reflect

Time-sensitive: the behavior changes based on when you run it.

**Morning flow** (before noon): Gratitude check, today's goal connected to quarterly objectives, Top 3 targets, energy level assessment. Outputs: Top 3 written to `00-cockpit/dashboard.md`, morning journal entry written to your journal store. If energy is high, routes toward deep work and hard decisions. If low, routes toward admin and lighter tasks.

**Evening flow** (after 5pm): Wins, lessons learned, gratitude, day rating 1-10, habit check against `05-habits/tracker.md`, journal entry. Prompts for tomorrow prep and captures anything new to inbox.

**Weekly addition** (last workday): Adds habit completion rates for the week, top 3 weekly wins, biggest lesson, and suggests running `/review`.

**Quarterly addition** (cycle end): Prompts reflection on quarterly objectives and suggests blocking 2-3 hours for a full quarterly review.

---

### /triage

Scans all inbound sources and synthesizes what needs your attention. Adapts to time of day.

**Morning triage** (full scan): Calendar — flags meetings in the next 2 hours, back-to-backs, conflicts. Email — surfaces top 3-5 urgent or decision-required items only. Messaging — @mentions and priority channel items. Inbox at `00-cockpit/inbox.md` — reports unprocessed count. Projects — flags any without a clear next action (GTD violation). Waiting For — flags items older than 2 weeks. Output: everything organized into Eisenhower quadrants so you know what to do first.

**Mid-day triage** (quick pulse): New urgent items since morning, new inbox captures, afternoon calendar check.

**Evening triage** (wind-down): Final urgent check, inbox processing opportunity, tomorrow handoff notes.

---

### /plan

Builds a focused, realistic daily sprint. Pushes back on overcommitment.

Process: reads dashboard and calendar in parallel, calculates available deep work hours (total hours minus meetings minus transitions minus breaks), applies Eisenhower prioritization, and builds a committed sprint of 3-5 items. The total estimated time of committed items must fit within available hours — if it doesn't, the command surfaces the math and asks you to cut. After planning, GTD compliance check runs across every active project in `01-projects/` to flag anything without a clear next action. Ends with timeboxing the sprint onto the calendar if connected.

---

### /review

The weekly review ritual. Block 60-90 minutes — this is not a quick check-in.

Four parts: **Get Clear** (process inbox to zero, mind sweep, calendar review for last week's follow-ups). **Get Current** (review every active project for next action and stale status, review areas, clear Waiting For, review Someday/Maybe). **Get Creative** (biggest win, biggest lesson, what to keep doing, what to change, happiness rating). **Commit** (top 3 non-negotiables for next week, what you're saying no to, weekly theme, dashboard update for Monday). Ends with `/save`.

---

## Capture and Processing

### /capture

Fastest path to your inbox. Takes whatever you just said and appends it to the Capture Zone in `00-cockpit/inbox.md` with no reformatting. Confirms capture, then asks: process now or save for later. If processing now, walks through the GTD checklist. If saving for later, done immediately — no friction.

### /check-in

Mid-day accountability pulse. 2 minutes. Reads today's Top 3 from dashboard, asks for status on each (Done / In Progress / Blocked / Not Started), surfaces any blockers, checks for new items that change the plan, and asks for an energy check. If energy has dropped, suggests rerouting — moving deep work to tomorrow and switching to lighter tasks for the afternoon.

---

## Meetings and Decisions

### /debrief

Extracts maximum value from a meeting you just had. Asks what the meeting was about and who attended. Walks through four captures: action items (yours go to inbox or dashboard, others' go to Waiting For with owner and date), decisions worth logging (offered to memory-keeper), people notes (anything notable about communication style or priorities), and project updates that affect active files in `01-projects/`. Ends with a follow-up sweep.

### /decide

Structured decision protocol that prevents analysis paralysis.

Quick filter first (30 seconds): Is this reversible? What's the cost of delay? Are you the right person to decide? If the decision passes the filter, runs 10/10/10 analysis — how you'd feel about it in 10 minutes, 10 months, 10 years. For important decisions, offers the full decision template: define with constraints and deadline, gather what you know and what's missing, evaluate options in a table, decide with explicit rationale, commit with a next action. Decision logged to `03-resources/knowledge/decisions/`.

---

## Focus and Persistence

### /focus

Starts a protected deep work session. Asks what you're focusing on and for how long (default 90 minutes). During the session, any unrelated thought you mention is silently captured to inbox — you're told it's captured and redirected. Non-urgent triage, habit reminders, and everything that can wait is suppressed. When the session ends, /focus summarizes what you worked on, surfaces what was captured during the session, and asks if you want to update the dashboard with what you accomplished.

### /save

Commits and pushes all changes to the remote git repository. Checks git status, reviews the diff, stages relevant files (avoiding sensitive files), writes a commit message following the category convention (`[cockpit]`, `[projects]`, `[areas]`, `[habits]`, `[resources]`, `[system]`, `[archive]`), commits, and pushes to origin main. Should be run at the end of any significant work session and always after weekly review.

---

## Setup

### /onboard

First-run setup. Walks through a 15-20 minute conversational questionnaire to personalize the system. Five blocks: Identity (roles, identity statements, role models, purpose), Goals (quarterly objectives, project creation), Habits (keystone habits, energy patterns), Tools (which integrations are available), Personal Context (stored in session memory for persistence). Writes outputs directly to the relevant files — `05-habits/identity.md`, `00-cockpit/dashboard.md`, `05-habits/tracker.md`. Ends with module activation — you choose which of the six optional modules to install.
