# OpenAI Codex CLI — Tool Mapping

Personal OS instructions use Claude Code tool names as the canonical reference. When running on Codex CLI, translate as follows.

**Important:** Codex uses a lower-level tool abstraction than Claude Code. Instead of named tools like `Read` and `Write`, Codex primarily uses a `shell` tool and executes commands directly within a sandboxed environment.

## File Operations

| Claude Code | Codex CLI | Notes |
|-------------|----------|-------|
| `Read` | `shell` → `cat file.md` | No dedicated read tool — use shell commands |
| `Write` | `shell` → write via shell | No dedicated write tool — use shell commands |
| `Edit` | `shell` → `sed`, `patch`, etc. | No dedicated edit tool — use shell commands |
| `Glob` | `shell` → `find`, `ls` | No dedicated glob tool — use shell commands |
| `Grep` | `shell` → `grep`, `rg` | No dedicated search tool — use shell commands |

## Execution

| Claude Code | Codex CLI | Notes |
|-------------|----------|-------|
| `Bash` | `shell` | Primary tool — all operations go through shell |
| `Agent` | Native sub-agents | `.codex/agents/*.toml` with parallel thread support |

## Web

| Claude Code | Codex CLI | Notes |
|-------------|----------|-------|
| `WebSearch` | Web search (built-in) | Configurable: `disabled`, `cached`, or `live` in config.toml |
| `WebFetch` | `shell` → `curl` | Use shell commands for URL fetching |

## When Instructions Say...

| Instruction | What To Do |
|-------------|------------|
| "Dispatch to strategic-planner agent" | Use native sub-agent if defined in `.codex/agents/`, or read `.claude/agents/strategic-planner.md` and adopt that role |
| "Use the Agent tool" | Use Codex's native `/agent` command or thread spawning |
| "Run agents in parallel" | Codex supports parallel agents — configure `max_threads` in config.toml |
| "Use Read to check the file" | Use `shell` → `cat` or similar |
| "Use Bash to run the command" | Use `shell` |
