---
title: The PARA Method
description: How Personal OS organizes everything into Projects, Areas, Resources, and Archives—and why plain-text PARA beats every app-based alternative.
---

PARA (Projects, Areas, Resources, Archives) is the organizational backbone of Personal OS. Created by Tiago Forte, it solves a problem that kills most productivity systems: information sprawl. When notes, tasks, and reference material accumulate in different apps with no shared logic, the cognitive load of *finding things* begins to rival the load of *doing things*.

PARA fixes this with one rule: every piece of information belongs to exactly one of four categories, and those categories are defined by how *actionable* the information is right now.

## The Four Categories

**Projects** are efforts with a defined outcome and a deadline. A project is active—it has a clear finish line. "Redesign the onboarding flow" is a project. "Get better at design" is not.

**Areas** are ongoing responsibilities with no finish line. They require regular attention but don't complete. "Engineering" is an area. "Health" is an area. "Finances" is an area. If you can imagine neglecting it and having problems, it's probably an area.

**Resources** are reference material you might want someday. Topic libraries, playbooks, mental model collections, templates, research. No inherent urgency—just organized knowledge you've chosen to keep.

**Archives** are everything that's no longer active: completed projects, paused initiatives, deprecated reference material. Out of sight, but searchable when you need to retrace a decision.

## How PARA Maps to Personal OS

The folder structure makes the mapping literal:

| Folder | PARA Category | What Lives Here |
|--------|--------------|-----------------|
| `00-cockpit/` | Cockpit (meta-layer) | Dashboard, inbox, review rituals |
| `01-projects/` | Projects | One folder per active project |
| `02-areas/` | Areas | Ongoing responsibilities (health, finances, team) |
| `03-resources/` | Resources | Playbooks, templates, knowledge base, references |
| `04-archives/` | Archives | Completed projects, retired areas |
| `05-habits/` | Habits (meta-layer) | Identity file, habit tracker |

The `00-cockpit/` and `05-habits/` folders are unique to Personal OS—they sit *above* the PARA structure as operational layers. The cockpit is where you work *in* the system each day; habits is where you maintain the system's identity.

## Why This Structure Works With an AI Agent

App-based PARA implementations (Notion, Evernote, Obsidian vaults with plugins) tend to rot. The overhead of maintaining them exceeds the value of the organization itself. Three failure modes are common: databases get stale, tags drift out of consistency, and capture becomes friction-heavy when you need to configure a property every time you add a note.

Plain-text PARA in Personal OS sidesteps all three:

1. **The agent handles maintenance.** When you mention a new initiative during a morning session, the agent asks if it should become a project and creates the folder. When a project closes, the agent moves it to `04-archives/`. You don't manage the structure—you use it.

2. **Capture is a single file.** Everything lands in `00-cockpit/inbox.md` first. No metadata required. Processing happens later, deliberately, during a weekly review or when the inbox grows large enough to warrant attention.

3. **Plain text is permanent.** Markdown files don't break when apps update or companies pivot. The organizational logic lives in the folder hierarchy, not in a proprietary database format.

## What Goes Where: Examples

**Goes in `01-projects/`:**
- `q1-product-launch/` — has a ship date, has a finish line
- `hire-backend-engineer/` — active search, ends when hired
- `redesign-pricing-page/` — discrete deliverable

**Goes in `02-areas/`:**
- `02-areas/health/` — ongoing, never "done"
- `02-areas/finances/` — monthly review, continuous responsibility
- `02-areas/team/` — 1:1 notes, team health, never concludes

**Goes in `03-resources/`:**
- `03-resources/playbooks/decision-framework.md` — reusable, not tied to a project
- `03-resources/references/mental-models.md` — reference material
- `03-resources/templates/project-brief.md` — reused across projects

**Goes in `04-archives/`:**
- Completed project folders (moved verbatim, don't clean them up—the history is valuable)
- Retired area files that no longer apply

## The Classification Test

When you're unsure where something belongs, ask these questions in order:

1. Does it have an end date or finish line? → `01-projects/`
2. Is it an ongoing responsibility I need to maintain? → `02-areas/`
3. Is it reference material I might want someday? → `03-resources/`
4. Is it done, paused, or no longer relevant? → `04-archives/`

If none of these fit cleanly, it probably belongs in `00-cockpit/inbox.md` until you have time to decide.

## Key Files

- `01-projects/` — Your active project folders
- `02-areas/` — Your ongoing responsibility areas
- `03-resources/playbooks/` — Decision frameworks and protocols
- `04-archives/` — Completed and retired items
- `00-cockpit/inbox.md` — Capture first, classify later

## Next Steps

- Read [The Cockpit](/core-framework/the-cockpit/) to understand the operational layer that sits above PARA
- Read [Getting Things Done](/core-framework/getting-things-done/) to see how GTD's capture-clarify-organize loop maps onto this structure
- Open `01-projects/` and audit whether every folder has a clear finish line
