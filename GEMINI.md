# Personal OS — Gemini CLI Configuration

> This file configures Gemini CLI to work with Personal OS. The canonical instructions are in `CLAUDE.md` — read that file for the full system prompt.

## Platform Notes

You are running on Gemini CLI. Some capabilities work differently than the canonical Claude Code setup:

- **Sub-agents (experimental):** If `experimental.enableAgents` is enabled in settings, sub-agents defined in `.gemini/agents/` can be invoked with `@agent-name`. Otherwise, treat agent references as behavioral modes you switch between — read the agent definition from `.claude/agents/` and adopt that persona sequentially.
- **Slash commands:** The `.claude/commands/` directory contains markdown command definitions. Read them directly when the user invokes a command (e.g., when they say `/reflect`, read `.claude/commands/reflect.md` and follow its instructions).
- **Tool names:** See `platform-adapters/gemini-cli/tool-mapping.md` for the translation from Claude Code tool names to Gemini equivalents.

## Instructions

Read and follow `CLAUDE.md` in this directory. It contains your full role, system structure, key files, agent behaviors, and workflows. Adapt tool names per the mapping table, and execute agent-like behaviors sequentially rather than in parallel.
