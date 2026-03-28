---
title: Choose Your Tool
description: Personal OS works with Claude Code, Gemini CLI, OpenAI Codex, and Cursor. Here's how to pick the right one and what to expect from each.
---

Personal OS is built on plain markdown files. That means your AI coding tool — whichever one you use — can read the system, understand your context, and run the daily rituals. You don't need to switch to a new app or change how you work.

That said, different tools have meaningfully different capabilities, and the setup process varies. This page explains what each platform supports, what the trade-offs are, and how to pick.

## The Short Version

If you're new to AI coding tools and don't have a strong preference, start with **Claude Code**. It has full native support for everything the system uses — sub-agents, slash commands, MCP servers, and session hooks. Every other platform gets you 80-90% of the value with some manual workarounds.

If you're already using another tool and want to add Personal OS without switching, read the section for your platform below. The adapters are thin — they don't duplicate content, they just tell your agent where to find everything.

## Platform Comparison

| Capability | Claude Code | Gemini CLI | OpenAI Codex | Cursor |
|-----------|-------------|------------|--------------|--------|
| Sub-agents (specialist roles) | Native | Experimental | Limited | Sequential only |
| Slash commands (`/reflect`, `/plan`) | Native | Manual invocation | Manual invocation | Manual invocation |
| MCP servers | Native | Native | Native | Native |
| Session hooks | Native | Native | Manual | Limited |
| Background tasks | Native | No | No | No |
| Setup effort | Clone + run | Clone + configure | Clone + configure | Clone + configure |

"Manual invocation" means you tell the agent to read the command file and follow it, rather than typing a slash command. It works — it just requires a few extra words.

## Claude Code (Canonical)

Claude Code is the platform Personal OS was designed for. The system uses Claude Code's native features throughout:

- **Named sub-agents** live in `.claude/agents/` — the Chief of Staff routes to the Planner, Researcher, Executor, and others automatically based on what you're doing
- **Slash commands** (`/reflect`, `/triage`, `/plan`, etc.) invoke the right agent with the right instructions in one keystroke
- **MCP servers** connect external tools — calendar, email, Notion, health data — and the agent uses them during triage and planning
- **Session hooks** can run scripts before and after interactions (useful for backups and automations)
- **Memory** persists across sessions so your agent remembers past decisions and context

If you're starting fresh, this is the path of least resistance. Follow the [Install and Onboard](/getting-started/install-and-onboard) guide.

## Gemini CLI

Gemini CLI reads `GEMINI.md` from the project root at startup. Personal OS includes a `GEMINI.md` that loads the full instructions from `CLAUDE.md`. The setup is straightforward.

**What works natively:** File reading and writing, MCP servers (configured in `.gemini/settings.json`), session hooks.

**What requires manual invocation:** Slash commands. Instead of `/reflect`, you say:

```
Read .claude/commands/reflect.md and run my morning reflection.
```

**What's limited:** Sub-agents are experimental in Gemini CLI. The Chief of Staff will handle tasks sequentially rather than dispatching parallel specialists. For most daily use this doesn't matter — the commands still work, they just don't parallelize. For complex planning or research-heavy tasks, you'll notice the difference.

**Setup:** Clone the repo, `cd` into it, run `gemini`. The agent loads automatically. Then run onboarding:

```
Read .claude/commands/onboard.md and walk me through the onboarding process.
```

## OpenAI Codex CLI

Codex reads `AGENTS.md` from the project root. Personal OS keeps `AGENTS.md` as an exact mirror of `CLAUDE.md` — both files have identical content, maintained in sync automatically. Codex gets the same instructions as Claude Code.

**What works natively:** File reading and writing, MCP servers, command files.

**What requires manual invocation:** Same as Gemini CLI — no native slash commands. Tell the agent to read and follow the command file.

**What's limited:** Sub-agent support in Codex is partial. The system works, but specialist routing is less seamless. The Chief of Staff can still read agent definition files and "adopt" a specialist role sequentially.

**Setup:** Clone the repo, run `codex` from inside it. Then:

```
Read .claude/commands/onboard.md and walk me through the onboarding process.
```

## Cursor

Cursor uses `.cursor/rules/personal-os.mdc` to load instructions. This rule is pre-configured with `alwaysApply: true`, so it loads on every Composer Agent session without any additional setup.

**What works natively:** File reading and writing via `@file` references, MCP servers (configured in `.cursor/mcp.json`).

**What requires manual invocation:** All commands are manual. In Composer Agent mode:

```
Read .claude/commands/reflect.md and run my morning reflection.
```

You can reference files with Cursor's `@` syntax for more precision:

```
Read @.claude/commands/plan.md and help me build today's sprint using @00-cockpit/dashboard.md as context.
```

**What's limited:** No sub-agents and no background tasks. Cursor's agent works sequentially. This is fine for daily operations — reflection, triage, planning all work well. For large planning sessions or research-heavy work, you'll want to break the task into explicit steps.

**Setup:** Clone the repo, open it in Cursor, switch Composer to Agent mode, and start onboarding:

```
Read .claude/commands/onboard.md and walk me through the onboarding process.
```

## Connecting External Tools (MCP Servers)

All four platforms support MCP servers, which is how the system connects to your calendar, email, Notion, health data, and other external tools. The configuration location is different per platform:

| Platform | MCP Config Location |
|---------|-------------------|
| Claude Code | `.claude/settings.json` (project-level) or `~/.claude/settings.json` (global) |
| Gemini CLI | `.gemini/settings.json` |
| Codex CLI | `.codex/settings.json` |
| Cursor | `.cursor/mcp.json` |

MCP is optional at the start. You can run the core system — reflect, triage, plan — using only local files. Connecting external tools adds value over time (your triage scan becomes much richer when the agent can actually read your calendar and email), but it's not required to get started.

## If You're Switching Tools Later

The system is platform-agnostic by design. All your content — projects, habits, inbox, archives, identity statements — lives in the PARA folders as plain markdown. If you start on Gemini CLI and later switch to Claude Code, nothing moves. You just start the new tool, point it at the same folder, and continue.

The only thing that doesn't migrate automatically is MCP server configuration, which you'll need to set up fresh for the new platform.

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Root agent instructions (canonical) |
| `AGENTS.md` | Mirror of `CLAUDE.md` — read by Codex |
| `GEMINI.md` | Gemini CLI entry point — loads `CLAUDE.md` |
| `.cursor/rules/personal-os.mdc` | Cursor rule — loads agent instructions |
| `platform-adapters/` | Per-platform setup guides and tool mappings |

## Next Steps

- **[Install and Onboard](/getting-started/install-and-onboard)** — Clone the repo and run your first setup
- **[Your First Day](/getting-started/your-first-day)** — See what the system looks like in practice
