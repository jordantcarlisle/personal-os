# 01-Projects

This folder holds every active project you're running. A project lives here while it has your attention and moves to `04-archives/` the moment it's done.

---

## What Qualifies as a Project

A project is work that meets **all three criteria**:

| Criterion | Description |
|-----------|-------------|
| **Multiple actions** | Can't be finished in one sitting — requires at least two sequential or dependent steps |
| **Clear "done" definition** | You'll know unambiguously when it's complete |
| **Target date** | Has a deadline or desired completion window |

### Contrast with Other Levels

| Type | Characteristics | Where It Lives |
|------|----------------|----------------|
| **Project** | Multi-step, has end state, time-bounded | `01-projects/` |
| **Area** | Ongoing responsibility, no end date, requires maintenance | `02-areas/` |
| **Single action** | Completable in one step, no dependencies | Dashboard next-actions or inbox |

**Examples:**

- "Launch Cipher MVP landing page" → Project (multi-step, has a done state, has a deadline)
- "Maintain engineering culture at SSK" → Area (ongoing, never "done")
- "Reply to Ramsey's email" → Single action (dashboard or inbox)

If you're unsure, ask: *"Will this ever be finished?"* If yes, it's a project. If it just continues, it's an area.

---

## How to Create a New Project

1. **Copy the template**
   ```
   cp 01-projects/_template.md 01-projects/your-project-name.md
   ```

2. **Rename and fill in the header fields**
   - Project name (clear noun phrase, not a verb)
   - One-sentence description of what success looks like
   - Status: `Planning`
   - Started date and Target date
   - Current phase

3. **Write the Desired Outcome**
   One paragraph describing what the world looks like when this project is complete. Be specific — vague outcomes produce vague work.

4. **Sketch the 13-Week Roadmap**
   Set a Result Goal (what you'll have at the end of 13 weeks), name why it matters, and place three milestone checkpoints with dates. You don't need all the details at the start — just enough to know the shape of the work.

5. **Define the first Next Action**
   This is non-negotiable. A project without a next action is stalled before it starts. The next action must be:
   - Physical and specific ("Draft the intro section" not "Work on the doc")
   - Completable in one session
   - Assigned to you or clearly Waiting For someone else

6. **Add it to the Dashboard radar**
   Open `00-cockpit/dashboard.md` and add the project to the Active Projects table with its target date and current next action.

---

## When a Project Is Done

A project is done when its Desired Outcome has been achieved and you can check it off with confidence.

**Completion checklist:**

- [ ] Desired Outcome is met
- [ ] All open next actions are either complete, cancelled, or transferred
- [ ] Waiting For items are resolved or noted
- [ ] Fill in the Retrospective section of the project file (5 minutes — worth it)
- [ ] Move the file to `04-archives/` with the date prefix: `2026-03-project-name.md`
- [ ] Remove from the Active Projects table in `00-cockpit/dashboard.md`
- [ ] Remove any calendar blocks tied to this project

**On the retrospective:** Even two sentences on what worked and what didn't compounds into real knowledge over time. Chronicle (memory-keeper) can mine these for patterns during quarterly reviews.

---

## Files in This Directory

| File | Purpose |
|------|---------|
| `_template.md` | Copy this to start every new project |
| `*.md` | One file per active project |
