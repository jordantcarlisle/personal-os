# 04-Archives

This folder is the permanent record of work completed, areas retired, resources superseded, and habits that ran their course. Nothing gets deleted — it gets archived.

---

## What Goes Here

| Type | When to Archive | Notes |
|------|----------------|-------|
| **Completed projects** | When the Desired Outcome is achieved and retrospective is written | Most common case |
| **Cancelled projects** | When a project is intentionally killed — scope changed, no longer relevant | Note why it was cancelled in the retrospective section |
| **Inactive areas** | When an ongoing responsibility ends (role change, life change, season shift) | Preserves context if you ever return to it |
| **Outdated resources** | When a playbook or template is replaced by a better version | Keep old version for reference, don't overwrite |
| **Retired habits** | When a habit is dropped or replaced — either successfully embedded or no longer relevant | Useful for pattern recognition during quarterly reviews |

---

## Naming Convention

All archived files are prefixed with their **completion or archival date** in ISO format:

```
YYYY-MM-[original-filename].md
```

**Examples:**
```
2026-03-cipher-brand-v1-design-sprint.md
2026-02-onboarding-flow-redesign.md
2025-12-q4-quarterly-review.md
2026-01-morning-cold-plunge-habit.md
```

This prefix ensures:
- Files sort chronologically in any file browser
- You can instantly see when something was completed
- The original name is preserved, so search still works

**Never rename** the original filename portion — only add the date prefix.

---

## Why Archive Instead of Delete

**History is an asset, not dead weight.** Here's why the archive matters:

1. **Retrospectives compound.** Chronicle (memory-keeper) can search across all archived project files to surface patterns — what you've consistently done well, where friction keeps appearing, how long similar projects actually take versus what you estimated.

2. **Context resurfaces unexpectedly.** A cancelled project from six months ago often contains research, decisions, and contacts that become directly relevant to a new initiative. Deleted files can't be searched.

3. **Quarterly reviews need data.** During quarterly reviews, reviewing completed projects in the archive is how you honestly assess your output — what shipped, what stalled, what was scope-creep.

4. **Habit archaeology.** Retired habits contain streak data and observations about what worked. When you return to a practice after a gap, that history tells you where to restart rather than starting from zero.

5. **Decision audit trail.** Notes & Decisions sections in project files document why choices were made at the time. Circumstances change, but knowing the original reasoning prevents revisiting decisions with incomplete context.

---

## Searching the Archive

Use QMD for fast local search across archived files:

```bash
# Keyword search
qmd search "keyword" -c archives

# Semantic search
qmd vsearch "what did I learn about landing pages" -c archives

# Hybrid (best quality)
qmd query "what worked in my previous launch projects" -c archives
```

Or ask Chronicle directly during a session — it can query the archive by topic, date range, or theme.

---

## What NOT to Archive Here

- Sensitive credentials or API keys (delete these, don't archive)
- Large binary files (renders, exports) — store externally and link from the archived file
- Duplicate versions of the same file — archive the final version only
