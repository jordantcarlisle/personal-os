# Codex CLI Configuration

Codex CLI is supported as an adapter platform. The canonical agent definitions and commands live in `.claude/` — Codex reads `AGENTS.md` (root) for instructions.

## How It Works

- **Instructions:** Codex reads `AGENTS.md` (root), which mirrors `CLAUDE.md`. It also walks parent directories, concatenating any `AGENTS.md` files it finds.
- **Agent definitions:** Codex uses `.codex/agents/*.toml` for native sub-agents. Read the canonical `.claude/agents/` definitions for persona details.
- **Commands:** Codex has no custom slash commands. Use skills (`.agents/skills/`) or invoke manually: "Read `.claude/commands/reflect.md` and follow it"
- **Settings:** Add MCP servers and config to `.codex/config.toml`

See `platform-adapters/codex/README.md` for full setup instructions.
