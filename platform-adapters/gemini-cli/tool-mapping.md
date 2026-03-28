# Gemini CLI — Tool Mapping

Personal OS instructions use Claude Code tool names as the canonical reference. When running on Gemini CLI, translate as follows:

## File Operations

| Claude Code | Gemini CLI | Notes |
|-------------|-----------|-------|
| `Read` | `read_file` | Same capability — reads file contents (supports text, images, PDF) |
| `Write` | `write_file` | Same capability — creates or overwrites files |
| `Edit` | `replace` | Targeted text replacement in files |
| `Glob` | `glob` | Same capability — find files by pattern |
| `Grep` | `grep_search` | Same capability — regex search across files |

## Execution

| Claude Code | Gemini CLI | Notes |
|-------------|-----------|-------|
| `Bash` | `run_shell_command` | Execute shell commands |
| `Agent` | *Experimental* | Sub-agents supported via `.gemini/agents/*.md` (requires `experimental.enableAgents: true`) |

## Web

| Claude Code | Gemini CLI | Notes |
|-------------|-----------|-------|
| `WebSearch` | `google_web_search` | Google search |
| `WebFetch` | `web_fetch` | Fetch URL content |

## Other Gemini Tools

| Gemini CLI | Purpose | Claude Code Equivalent |
|-----------|---------|----------------------|
| `list_directory` | List directory contents | `Bash` → `ls` |
| `save_memory` | Append to GEMINI.md | No equivalent |
| `codebase_investigator` | Built-in code analysis sub-agent | `Agent` (Explore type) |

## When Instructions Say...

| Instruction | What To Do |
|-------------|------------|
| "Dispatch to strategic-planner agent" | If agents enabled, use `@strategic-planner`. Otherwise, read `.claude/agents/strategic-planner.md` and adopt that behavioral mode |
| "Use the Agent tool" | Execute sequentially, or use sub-agents if `experimental.enableAgents` is on |
| "Run agents in parallel" | Execute one at a time (parallel sub-agents not supported) |
| "Use Read to check the file" | Use `read_file` |
| "Use Bash to run the command" | Use `run_shell_command` |
| "Use Edit to modify the file" | Use `replace` |
