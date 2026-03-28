# OpenAI Codex CLI Setup

## Prerequisites

- [Codex CLI](https://github.com/openai/codex) installed
- An OpenAI API key

## Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/personal-os.git
   cd personal-os
   ```

2. **Verify Codex reads the config:**
   ```bash
   codex
   ```
   Codex CLI automatically reads `AGENTS.md` from the project root (and any parent directories). This mirrors `CLAUDE.md` and provides the full Personal OS instructions.

3. **Run onboarding:**
   Codex doesn't support custom slash commands. Instead, tell the agent:
   ```
   Read .claude/commands/onboard.md and walk me through the onboarding process.
   ```

4. **Daily usage:**
   ```
   Read .claude/commands/reflect.md and run my morning reflection.
   Read .claude/commands/triage.md and help me process my inbox.
   Read .claude/commands/plan.md and help me plan my day.
   ```

## How It Works

Codex reads `AGENTS.md` at startup for project instructions. Personal OS keeps `AGENTS.md` as an exact mirror of `CLAUDE.md`, so both Claude Code and Codex get the same instructions.

### Key Differences from Claude Code

| Feature | Claude Code | Codex CLI | Workaround |
|---------|-------------|-----------|------------|
| Sub-agents | `Agent` tool with model routing | Native — `.codex/agents/*.toml` | Define agents in TOML format (see below) |
| Slash commands | `/reflect`, `/triage`, `/plan` | No custom commands | Invoke manually: "Read `.claude/commands/reflect.md`..." |
| Skills | N/A | `.agents/skills/` directories | Structure commands as skills for auto-discovery |
| MCP servers | `.claude/settings.json` (JSON) | `.codex/config.toml` (TOML) | Different format, same concept |
| Config format | `settings.json` | `config.toml` | TOML instead of JSON |
| Tool abstraction | Named tools (Read, Write, Edit) | `shell` tool + sandbox | Agent runs shell commands directly |
| Background tasks | Native | Not available | Run tasks to completion |

### Sub-Agent Configuration

Codex supports native sub-agents via `.codex/agents/*.toml`:

```toml
name = "strategic-planner"
description = "Use when goals lack clear next steps or large projects need decomposition."
developer_instructions = """
You are Atlas, an expert Strategic Planner. Read .claude/agents/strategic-planner.md
for your full persona and workflow instructions.
"""
model = "codex-1-reasoning"
sandbox_mode = "workspace-write"
```

Configure concurrency in `.codex/config.toml`:

```toml
[agents]
max_threads = 6
max_depth = 1
```

### Adding MCP Servers

Add to `.codex/config.toml`:

```toml
[mcp_servers.notion]
command = "npx"
args = ["-y", "@notionhq/mcp-server"]

[mcp_servers.notion.env]
NOTION_TOKEN = "your-token"
```
