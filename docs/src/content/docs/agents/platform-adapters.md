---
title: Platform Adapters
description: How Personal OS runs on Gemini CLI, Codex, and Cursor — and what each platform can and can't do.
---

Personal OS is plain markdown. The content — agent definitions, slash commands, PARA folders — lives once and works with any AI coding agent that can read files. Claude Code is the canonical platform with full support. Thin adapters make the system usable on Gemini CLI, OpenAI Codex, and Cursor without duplicating any content.

## Platform Comparison

| Capability | Claude Code | Gemini CLI | Codex CLI | Cursor |
|-----------|-------------|------------|-----------|--------|
| Sub-agents (parallel) | Native | No — sequential | Limited | No — sequential |
| Slash commands | Native | Manual invocation | `.codex/commands/` | Rules-based |
| MCP servers | Native | Native | Native | Native |
| Session hooks | Native | Native | Manual | Limited |
| Background tasks | Native | No | No | No |

**The philosophy:** if your platform can't do X, the adapter explains how to get 80% of the value manually. No capability is completely lost — it's just executed differently.

## Claude Code (Canonical)

Claude Code is where Personal OS was designed to run. All features work as documented:

- Sub-agents defined in `.claude/agents/` are dispatched natively using the Agent tool
- Slash commands in `.claude/commands/` are invoked with `/command-name`
- MCP servers connect directly (Notion, calendar, health data, etc.)
- Session hooks in `.claude/settings.json` run automatically at session start
- Parallel agent dispatch is supported — the Chief of Staff can run multiple agents simultaneously

The root `CLAUDE.md` contains the full system prompt. The Chief of Staff reads it at the start of every session.

## Gemini CLI

The adapter for Gemini CLI lives in `platform-adapters/gemini-cli/` and a root `GEMINI.md` file at the repo root.

**How it works:** `GEMINI.md` tells Gemini CLI to read `CLAUDE.md` for the full system prompt, then adapt tool names per the mapping table. Gemini CLI has access to the same agent definition files — it reads them and adopts the behavioral persona sequentially rather than dispatching them as true sub-agents.

**Sub-agents:** If `experimental.enableAgents` is enabled in Gemini CLI settings, agents defined in `.gemini/agents/` can be invoked with `@agent-name`. Otherwise, the Chief of Staff reads the relevant `.claude/agents/*.md` file and switches behavioral modes inline.

**Tool name translation** (from `platform-adapters/gemini-cli/tool-mapping.md`):

| Claude Code | Gemini CLI |
|-------------|-----------|
| `Read` | `read_file` |
| `Write` | `write_file` |
| `Edit` | `replace` |
| `Glob` | `glob` |
| `Grep` | `grep_search` |
| `Bash` | `run_shell_command` |
| `WebSearch` | `google_web_search` |

Gemini CLI also provides `save_memory` (appends to `GEMINI.md`) and `list_directory` with no direct Claude Code equivalent.

## OpenAI Codex

The Codex adapter lives in `platform-adapters/codex/`. The root `AGENTS.md` mirrors `CLAUDE.md` exactly — Codex reads `AGENTS.md` as its primary instruction source.

**Sub-agents:** Codex has limited sub-agent support via `.codex/` directory conventions. The adapter includes command definitions in `.codex/commands/` that mirror `.claude/commands/`. Slash commands are invoked in Codex's native style.

**Key difference:** The `AGENTS.md` file is the canonical instruction mirror. Because Personal OS maintains CLAUDE.md and AGENTS.md as identical files (synced automatically every 30 minutes by a background process), Codex always has access to current instructions.

## Cursor

The Cursor adapter lives in `platform-adapters/cursor/`. Cursor uses `.cursor/rules/` for persistent instructions.

**How it works:** The adapter creates a Cursor rules file that points to `CLAUDE.md` and the relevant agent and command directories. Cursor reads these as context for its AI features. Sub-agents are not supported — Cursor executes agent behaviors sequentially as the Chief of Staff switches between behavioral modes inline.

**Best use:** Cursor's adapter works best for code-adjacent tasks — using Mason (executor) to write and edit files, using Flint (ruthless-reviewer) to review code, and using the core slash commands for daily operations. The full agent orchestration layer is limited compared to Claude Code.

## Adding a New Platform

The adapter structure is standardized. To add support for a new platform:

1. Create `platform-adapters/<platform-name>/`
2. Add `README.md` with setup steps specific to that platform
3. Add `tool-mapping.md` translating Claude Code tool names to platform equivalents
4. If the platform uses a root-level config file (like `GEMINI.md` or `AGENTS.md`), create it pointing to the canonical `CLAUDE.md`
5. Update the table in `platform-adapters/README.md`

No content duplication. Adapters reference canonical files — they never copy them.
