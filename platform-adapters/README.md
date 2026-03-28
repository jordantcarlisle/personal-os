# Platform Adapters

Personal OS is built on plain markdown — it works with any AI coding agent that can read files. The canonical configuration targets **Claude Code**, but thin adapters make it easy to use with other tools.

## Supported Platforms

| Platform | Status | What You Get |
|----------|--------|-------------|
| [Claude Code](claude-code/) | **Canonical** | Full support — sub-agents, slash commands, MCP, hooks |
| [Gemini CLI](gemini-cli/) | Adapter | Instructions + tool mapping. No sub-agents (sequential execution). |
| [OpenAI Codex](codex/) | Adapter | Instructions + tool mapping. Sub-agents supported. |
| [Cursor](cursor/) | Adapter | Instructions + tool mapping via `.cursor/rules/`. No sub-agents. |

## Architecture

All content lives once in canonical locations:

- **Instructions:** `CLAUDE.md` (root) + `AGENTS.md` (mirror)
- **Agent definitions:** `.claude/agents/*.md`
- **Slash commands:** `.claude/commands/*.md`
- **PARA folders:** `00-cockpit/` through `05-habits/`

Adapters **never duplicate content**. They point to the canonical files and provide:

1. **Setup README** — Step-by-step instructions for that platform
2. **Tool mapping** — Translation table from Claude Code tool names to platform equivalents

## Graceful Degradation

| Capability | Claude Code | Gemini CLI | Codex CLI | Cursor |
|-----------|-------------|------------|-----------|--------|
| Sub-agents | Native | No — sequential | Limited | No — sequential |
| Slash commands | Native | Manual invocation | `.codex/commands/` | Rules-based |
| MCP servers | Native | Native | Native | Native |
| Session hooks | Native | Native | Manual | Limited |
| Background tasks | Native | No | No | No |

**Philosophy:** If your tool can't do X, the setup guide explains how to get 80% of the value manually.

## Adding a New Platform

1. Create `platform-adapters/<platform-name>/`
2. Add `README.md` with setup steps
3. Add `tool-mapping.md` with tool name translations
4. If the platform needs a root-level config file (like `GEMINI.md`), create it
5. Update this README's table
