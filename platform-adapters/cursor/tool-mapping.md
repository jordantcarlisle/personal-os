# Cursor — Tool Mapping

Personal OS instructions use Claude Code tool names as the canonical reference. When running in Cursor, translate as follows:

## File Operations

| Claude Code | Cursor | Notes |
|-------------|--------|-------|
| `Read` | `read_file` | Same capability — reads file contents |
| `Write` | `write_file` | Same capability — creates or overwrites files |
| `Edit` | `edit_file` | Same capability — targeted edits to existing files |
| `Glob` | `file_search` | Find files by name pattern |
| `Grep` | `grep_search` | Regex search across file contents |

## Execution

| Claude Code | Cursor | Notes |
|-------------|--------|-------|
| `Bash` | `run_terminal_cmd` | Execute shell commands |
| `Agent` | *N/A* | No sub-agent support — execute sequentially |

## Search

| Claude Code | Cursor | Notes |
|-------------|--------|-------|
| `Grep` (content search) | `grep_search` | ripgrep-based search |
| `Glob` (file search) | `file_search` | Find files by name |
| — | `codebase_search` | Cursor-specific semantic search (no Claude Code equivalent) |

## Web

| Claude Code | Cursor | Notes |
|-------------|--------|-------|
| `WebSearch` | `web_search` | Web search |
| `WebFetch` | `browser` | Headless browser for URL content |

## When Instructions Say...

| Instruction | What To Do |
|-------------|------------|
| "Dispatch to strategic-planner agent" | Read `.claude/agents/strategic-planner.md` and adopt that behavioral mode |
| "Use the Agent tool" | Execute the task yourself, sequentially |
| "Run agents in parallel" | Execute tasks one at a time |
| "Use Read to check the file" | Use `read_file` |
| "Use Bash to run the command" | Use `run_terminal_cmd` |
| "Use Glob to find files" | Use `file_search` |
