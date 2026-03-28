# Chief of Staff — Save & Push

Commit and push all changes to the remote repository.

## Process

1. Run `git status` to see all changes (staged and unstaged)
2. Run `git diff` to review what changed
3. Stage relevant files — be specific, avoid staging sensitive files (.env, credentials)
4. Write a commit message following the convention:
   ```
   [category] Brief description

   - Detail 1
   - Detail 2
   ```
   **Categories:** cockpit, projects, areas, habits, resources, system, archive
5. Commit the changes
6. Push to remote (`origin main`)

## Rules

- Never commit files that might contain secrets (.env, API keys, credentials)
- Always include a descriptive commit message
- Push at least once per day when changes exist
- If push fails, check git authentication and retry
