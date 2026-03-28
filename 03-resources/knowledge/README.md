# Knowledge Base

The knowledge base is the institutional memory of this operating system. It grows over time through decisions made, lessons learned, and patterns recognized. The Memory Keeper agent is the primary writer here.

## Structure

```
knowledge/
├── decisions/   → What was decided, why, and when to revisit
└── lessons/     → What went wrong, root causes, prevention
```

## Decisions vs. Lessons

**Decisions** are forward-looking: they capture what was chosen and why, so future-you can understand past-you's reasoning. They are not about outcomes — they are about the quality of thinking at the time.

**Lessons** are backward-looking: they capture what happened (especially what went wrong), why it happened, and what to do differently. They are most valuable when written close to the event, while the specifics are fresh.

---

## How the Memory Keeper Writes Here

The Memory Keeper agent (Chronicle) writes to this knowledge base after:
- Important decisions are made (project direction, hiring, technology, strategy)
- Significant mistakes occur and the root cause is understood
- Patterns are recognized across multiple events
- A lesson is explicitly requested to be recorded

Chronicle uses the templates in `decisions/_template.md` and `lessons/_template.md`. Entries are written as standalone files with the naming convention `YYYY-MM-DD-short-title.md`.

---

## How to Find Information

**By date:** Filenames are prefixed with YYYY-MM-DD, so `ls -t` or a sorted directory view shows recency.

**By topic:** Each entry includes `### Tags` at the bottom with searchable keywords. Use grep:
```bash
grep -r "hiring" 03-resources/knowledge/
grep -r "#technology" 03-resources/knowledge/
```

**By category:** Each entry includes a `**Category:**` field. Common categories: `technology`, `hiring`, `strategy`, `process`, `product`, `personal`.

**By status:** Decision entries include `**Status:** Active | Superseded | Under Review`. Filter for active decisions:
```bash
grep -r "Status: Active" 03-resources/knowledge/decisions/
```

**Using QMD:** The local semantic search index covers all knowledge entries:
```bash
qmd query "what was decided about [topic]"
qmd search "[keyword]" -c knowledge
```

---

## How to Add Information

**For decisions:**
1. Copy `decisions/_template.md` to a new file: `decisions/YYYY-MM-DD-decision-title.md`
2. Fill in all sections — don't leave the rationale vague
3. Set a realistic review date (most decisions warrant a 6-month check-in)
4. Add searchable tags

**For lessons:**
1. Copy `lessons/_template.md` to a new file: `lessons/YYYY-MM-DD-lesson-title.md`
2. Write the root cause honestly — "we didn't have a process for X" beats "it was unclear"
3. Write the prevention section as a concrete action, not a platitude
4. Add tags that match the category where the lesson applies

---

## Maintenance Rules

**Every 6 months:**
- Review all `Status: Active` decisions. Are they still active? Have circumstances changed?
- Supersede any decisions that have been replaced by newer ones (update Status field and add a note pointing to the replacement)
- Check if any lessons have been resolved (new process in place, tool adopted, etc.) and mark them complete

**When you notice duplicates:**
- Consolidate into the more complete entry
- Archive or delete the duplicate
- Add a redirect note if the duplicate had a distinct search term

**When a decision is reversed:**
- Update `Status: Superseded` in the original file
- Add a line: `**Superseded by:** YYYY-MM-DD-new-decision.md`
- Write a new decision entry documenting the reversal and why

---

## Signal of a Healthy Knowledge Base

- Entries are specific enough that you'd understand them cold in 2 years
- Lessons have concrete prevention steps, not vague intentions
- Decisions have rationale beyond "it seemed right"
- Status fields are up to date
- You actually look things up here before reinventing wheels
