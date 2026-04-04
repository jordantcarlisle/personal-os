---
title: Building Your Own Agent
description: How to create a custom agent — file format, frontmatter, prompt structure, model selection, and when to build one.
---

Every agent in Personal OS is a plain markdown file in `.claude/agents/`. Creating a custom agent means writing that file. There's no code, no framework, no deployment step. The AI coding agent reads the file and adopts the role.

## When to Build a Custom Agent

Custom agents make sense when you have a recurring context that the core team doesn't cover well. Good candidates:

- **A specialized domain** where you want consistent principles applied — e.g., a technical writing style guide, a specific legal or compliance lens, or a particular coaching methodology
- **A client or project context** that requires a persistent persona — e.g., an agent that always has your client's brand voice and product context loaded
- **A recurring workflow** that involves pulling specific files, applying a structured process, and producing a defined output format

Don't build a custom agent for one-time work. The overhead of defining the role isn't worth it for tasks you'll only run once. Build an agent when you'd want the same behavior reliably across many sessions.

## The File Format

Agent files live at `.claude/agents/<agent-name>.md`. The filename becomes the agent's identifier. Use lowercase with hyphens — no spaces.

```markdown
---
name: agent-name
description: "One sentence explaining when the orchestrator should delegate to this agent."
model: sonnet
---

## Identity

**Name:** Agent Persona Name (Role Title)

*Tagline that captures the agent's essence.*

---

You are [Name], an expert [Role]. [One sentence on what you do.]

## Core Responsibilities

[List the specific tasks this agent owns. Be concrete — vague responsibilities produce vague behavior.]

## How You Work

[Step-by-step process for the agent's primary workflow. Numbered steps. The more specific, the better.]

## Operating Principles

[Behavioral rules. What the agent always does, never does, defaults to. These constrain behavior reliably.]
```

## Frontmatter Fields

**`name`** — Matches the filename. Used internally for routing. Required.

**`description`** — This is what the Chief of Staff reads when deciding whether to delegate. Write it to describe the delegation trigger, not the agent's identity. Good: `"Use when a draft needs voice review against the brand guide."` Bad: `"Brand agent for reviewing content."`

**`model`** — Choose based on what the work requires:

| Model | When to Use |
|-------|-------------|
| `opus` | Deep analysis, strategic judgment, quality gates where errors are expensive |
| `sonnet` | Implementation, synthesis, research — the default for most custom agents |
| `haiku` | Formatting, quick lookups, well-structured operations where speed matters |

Most custom agents should default to `sonnet`. Use `opus` only when the quality of reasoning directly affects an important outcome. Use `haiku` only for narrow, well-defined operations.

## Writing the Prompt

**Identity section:** Give the agent a name and a one-line tagline. This creates a stable behavioral anchor — the agent knows who it is, which reduces drift across long sessions.

**Core Responsibilities:** Be specific about what the agent owns. "Review drafts" is too vague. "Review drafts against the voice guide in `02-areas/brand/voice-guide.md` and score against the STEPPS framework" is specific enough to produce consistent behavior.

**How You Work:** Write a numbered process. If the agent runs a multi-step workflow — load context, choose a mode, execute, summarize — write those steps explicitly. Agents follow explicit process instructions reliably.

**Operating Principles:** These are behavioral rails. Use them for hard rules: what the agent always confirms before doing, what it never does without permission, what it defaults to when uncertain. The existing agents use principles like "ask before sending any message" and "never prescribe financial products" — concrete, unambiguous constraints.

## Linking to Source Files

Reference specific files in your vault that the agent should always read:

```markdown
## Context Files

Load these at the start of every session:
- `02-areas/brand/voice-guide.md` — brand voice and tone rules
- `02-areas/brand/content-queue.md` — pending content ideas
```

This makes the agent context-aware without requiring you to paste information into every conversation.

## Testing Your Agent

After writing the file, invoke the agent via the Chief of Staff: describe the task in a way that matches your description field, and confirm it delegates correctly. Run the agent through its primary workflow once and look for gaps — places where behavior was undefined and the agent made a choice you wouldn't have made. Add operating principles to close those gaps.

Agents improve through iteration. Start simple, observe the behavior, tighten the prompt based on what you see.
