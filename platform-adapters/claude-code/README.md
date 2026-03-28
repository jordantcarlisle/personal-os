# Claude Code Setup (Canonical)

Claude Code is the canonical platform for Personal OS. All agent definitions, slash commands, and instructions are written for Claude Code first.

## Prerequisites

- [Claude Code](https://claude.ai/code) installed
- A Claude API key or Claude Max subscription

## Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/personal-os.git
   cd personal-os
   ```

2. **Run onboarding:**
   ```
   /onboard
   ```
   This walks you through personalizing the system — identity, goals, habits, and integrations.

3. **Start using it:**
   ```
   /reflect    — Morning/evening reflection
   /triage     — Process inbox and prioritize
   /plan       — Plan your day or week
   ```

## What's Already Configured

| Component | Location | Notes |
|-----------|----------|-------|
| Main instructions | `CLAUDE.md` | Loaded automatically by Claude Code |
| Agent definitions | `.claude/agents/` | 7 core + 6 specialist agents |
| Slash commands | `.claude/commands/` | 11 core + 4 module commands |
| MCP servers | `.claude/settings.json` | Add your own integrations here |

## Adding MCP Servers

Edit `.claude/settings.json` to connect external tools:

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/mcp-server"],
      "env": { "NOTION_TOKEN": "your-token" }
    }
  }
}
```

## Tool Reference

Claude Code tools are the canonical names used throughout this project:

| Tool | Purpose |
|------|---------|
| `Read` | Read file contents |
| `Write` | Create or overwrite files |
| `Edit` | Make targeted edits to existing files |
| `Bash` | Execute shell commands |
| `Grep` | Search file contents (regex) |
| `Glob` | Find files by name pattern |
| `Agent` | Dispatch sub-agents for parallel work |
| `WebSearch` | Search the web |
| `WebFetch` | Fetch a URL |
