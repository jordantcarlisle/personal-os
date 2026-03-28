# 03-Resources

The resources layer holds reusable reference material — frameworks, decisions, lessons, and templates that make you faster and smarter over time. Unlike projects (temporary) or areas (ongoing responsibilities), resources are domain knowledge that compounds.

## Structure

```
resources/
├── playbooks/    → Reusable decision frameworks and protocols
├── knowledge/    → Decisions log, lessons learned (written by Memory Keeper)
├── references/   → Mental models, book summaries, external frameworks
└── templates/    → Reusable templates for recurring work
```

## When to Use What

| Situation | Go Here |
|-----------|---------|
| Facing a hard decision | `playbooks/decision-framework.md` |
| Switching context between modes | `playbooks/context-switching.md` |
| Need to think more clearly | `references/mental-models.md` |
| Made an important decision | `knowledge/decisions/` |
| Learned from a mistake | `knowledge/lessons/` |
| Starting a recurring document | `templates/` |

## Playbooks

Playbooks are repeatable protocols built from hard-won experience. Use them when facing decisions or transitions that have patterns — not every situation is novel.

- **decision-framework.md** — Three-layer framework (Quick Filter → 10/10/10 → Full Template) for decisions of any size
- **context-switching.md** — Exit and entry rituals to protect deep work and reduce switching costs

## Knowledge Base

The knowledge base is the institutional memory of your operating system. The Memory Keeper agent writes here after important decisions and mistakes.

- **decisions/** — What was decided, why, and when to revisit it
- **lessons/** — What went wrong, root causes, and prevention

See `knowledge/README.md` for how to search, add, and maintain entries.

## References

Curated external frameworks and mental models, not raw notes. Everything here has been filtered for long-term usefulness.

- **mental-models.md** — 25+ mental models organized by category, each with a one-sentence definition and application example

## Templates

Blank starting points for recurring work. Using a template beats starting from scratch and reduces friction for high-value activities.

---

## Growing This Layer

The best playbooks come from real experience. When you solve a hard problem in a novel way, or discover a decision pattern that keeps recurring, codify it here. A resource that sits unused is just clutter — only add what you'll actually reach for.

Maintenance rule: If a resource hasn't been opened in 6 months and has no clear future use, archive it.
