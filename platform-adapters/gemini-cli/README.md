# Gemini CLI Setup

## Prerequisites

- [Gemini CLI](https://github.com/google-gemini/gemini-cli) installed
- A Google AI API key

## Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/personal-os.git
   cd personal-os
   ```

2. **Verify Gemini CLI reads the config:**
   ```bash
   gemini
   ```
   Gemini CLI automatically reads `GEMINI.md` from the project root. It will load the Personal OS instructions.

3. **Run onboarding manually:**
   Gemini CLI doesn't have native slash commands. Instead, tell the agent:
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

Gemini CLI reads `GEMINI.md` at startup, which tells it to load `CLAUDE.md` for full instructions. The system works the same way — it just uses Gemini's tool names instead of Claude Code's.

### Key Differences from Claude Code

| Feature | Claude Code | Gemini CLI | Workaround |
|---------|-------------|------------|------------|
| Sub-agents | `Agent` tool dispatches parallel workers | Experimental (`@agent-name`) | Ask the agent to "switch to strategic-planner mode" and handle tasks sequentially |
| Slash commands | `/reflect`, `/triage`, `/plan` | Not native | Tell the agent to read the command file: "Read `.claude/commands/reflect.md` and follow it" |
| MCP servers | `.claude/settings.json` | `.gemini/settings.json` | Configure in Gemini's own settings |
| Background tasks | Native | Not available | Run tasks to completion before starting new ones |

### Adding MCP Servers

Gemini CLI supports MCP natively. Add servers to your `.gemini/settings.json`:

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
