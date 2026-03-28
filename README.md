# Personal OS

A personal operating system powered by AI agents.

---

This is a template repo and playbook for building an AI-powered personal operating system. It is built on the PARA method, Getting Things Done, Atomic Habits, and the 12 Week Year. Your AI agent becomes a Chief of Staff that helps you reflect, plan, triage inbound, track habits, and stay accountable to your commitments. The system lives entirely in markdown files, works with any AI coding tool, and is designed to compound over time — the longer you run it, the more context your agent has.

---

## Quick Start

1. Clone the repo: `git clone https://github.com/jordantcarlisle/personal-os.git`
2. Set up your AI tool — see [Platform Support](#platform-support) below for adapters
3. Run `/onboard` to personalize the system (name, roles, goals, habits)
4. Run `/reflect` to start your first day

---

## What's Inside

| Folder | Purpose |
|--------|---------|
| `00-cockpit` | Daily operations (dashboard, inbox, reviews) |
| `01-projects` | Active projects with defined outcomes |
| `02-areas` | Ongoing responsibilities + optional modules |
| `03-resources` | Playbooks, knowledge base, mental models |
| `04-archives` | Completed/inactive items |
| `05-habits` | Identity statements + habit tracking |

---

## The Daily Loop

Three rituals power the system. Run them consistently and the compounding begins immediately.

**`/reflect`** — Morning journaling (intentions, gratitude, energy), evening wins and lessons, habit logging. This is the heartbeat of the OS. Run it every morning and every evening.

**`/triage`** — Scan inbound (email, messages, calendar), process the inbox to zero, surface anything urgent before the day starts. Protects your attention from reactive mode.

**`/plan`** — Build the day's sprint (max 3-5 items), timebox each item onto the calendar, push back on overcommitment. The agent enforces a hard limit on daily commitments so you finish the day with wins, not half-started work.

---

## Optional Modules

The base system handles daily operations, projects, and habits. These modules extend it into specialized domains.

| Module | What It Adds |
|--------|-------------|
| Health Data Integration | Wearable data, morning health briefings, experiment tracking, biomarker synthesis |
| Learning System | Curriculum architecture, study sessions, spaced repetition, content-from-learning pipeline |
| Relationship Management | Contact tracking, relationship decay monitoring, meeting prep, network health reports |
| Financial Organization | Budget awareness, financial reviews, goal tracking, net worth snapshots |
| Brand & Content | Voice guide, content queue, social engagement coaching, audience building |
| Career & Role Management | 1:1 prep, stakeholder management, career capital tracking, role transitions |

---

## Agent Architecture

The system is built around named agent roles, each optimized for a specific domain. The Chief of Staff orchestrates — all other agents are invoked when the task calls for their specialty.

| Role | Purpose | Model Tier |
|------|---------|------------|
| Chief of Staff | Orchestrator — runs the daily loop, protects time, routes to specialists | Workhorse |
| Planner | Turns vague goals into structured plans with clear next actions | Reasoning |
| Researcher | Gathers external information before decisions or recommendations | Workhorse |
| Executor | Implements clearly defined tasks — code, docs, commands | Workhorse |
| Reviewer | Quality gate on output before delivery | Reasoning |
| Briefer | Condenses long content into crisp summaries | Speed |
| Time Manager | Calendar, scheduling, prioritization, overwhelm triage | Speed |
| Memory Keeper | Preserves decisions and context, retrieves past rationale | Speed |

Specialist agents (Health Analyst, Learning Tutor, Relationship Manager, etc.) activate automatically with their corresponding optional modules.

---

## Platform Support

The instruction files in this repo are written tool-agnostic. Platform adapters are provided for:

- **Claude Code** — reads `CLAUDE.md` in project root
- **Gemini CLI** — reads `GEMINI.md` (adapter provided)
- **Codex CLI** — reads `AGENTS.md` (included, mirrors `CLAUDE.md`)
- **Cursor** — reads `.cursorrules` (adapter provided)

Each adapter references the same underlying system. The OS works identically regardless of which tool you use.

---

## Built On

This system draws from decades of productivity research and practice. The frameworks that power it:

- PARA Method — Tiago Forte
- Getting Things Done — David Allen
- Atomic Habits — James Clear
- The 12 Week Year — Brian Moran
- Great by Choice / 20-Mile March — Jim Collins
- Deep Work — Cal Newport
- Plus 30+ additional source materials powering the specialist agents (health science, learning science, relationship psychology, financial planning, and more)

---

## Related Projects

- [obra/superpowers](https://github.com/obra/superpowers) — Skills framework (platform adapter pattern)
- [garrytan/gstack](https://github.com/garrytan/gstack) — Dev workflow slash commands
- [danielmiessler/PAI](https://github.com/danielmiessler/PAI) — Personal AI infrastructure

---

## License

MIT — see [LICENSE](./LICENSE)
