# Cursor Setup

## Prerequisites

- [Cursor](https://cursor.com) installed
- Agent mode enabled (Composer → Agent)

## Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/personal-os.git
   ```

2. **Open in Cursor:**
   ```bash
   cursor personal-os/
   ```

3. **Verify the rule loads:**
   Open Composer (Cmd+I / Ctrl+I) and switch to Agent mode. The `.cursor/rules/personal-os.mdc` rule loads automatically because `alwaysApply: true` is set.

4. **Run onboarding:**
   In Composer Agent mode, type:
   ```
   Read .claude/commands/onboard.md and walk me through the onboarding process.
   ```

5. **Daily usage:**
   ```
   /reflect    → "Read .claude/commands/reflect.md and run my morning reflection"
   /triage     → "Read .claude/commands/triage.md and process my inbox"
   /plan       → "Read .claude/commands/plan.md and help me plan my day"
   ```

## How It Works

Cursor reads `.cursor/rules/personal-os.mdc` on every interaction. This rule tells the agent to load `CLAUDE.md` for full instructions. The PARA folder structure, agent definitions, and command files all work the same — Cursor just uses different tool names.

### Key Differences from Claude Code

| Feature | Claude Code | Cursor | Workaround |
|---------|-------------|--------|------------|
| Sub-agents | `Agent` tool with model routing | Not available | Ask the agent to "switch to [role] mode" and read the agent definition |
| Slash commands | Native `/command` | Not native | Type the instruction: "Read `.claude/commands/reflect.md` and follow it" |
| MCP servers | `.claude/settings.json` | `.cursor/mcp.json` | Configure in Cursor's MCP config |
| Background tasks | Native | Not available | Run to completion |
| Context attachment | Automatic | Use `@file` syntax | Reference files with `@00-cockpit/dashboard.md` |

### Adding MCP Servers

Add to `.cursor/mcp.json`:

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

### Pro Tips

- **Pin key files:** Use `@00-cockpit/dashboard.md` to keep the dashboard in context
- **Use Plan mode:** Press `Shift+Tab` to enter Plan mode for complex tasks before executing
- **Rules are composable:** Add more `.mdc` files in `.cursor/rules/` for domain-specific rules
