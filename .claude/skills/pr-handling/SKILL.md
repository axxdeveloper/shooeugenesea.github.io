---
name: pr-handling
description: Handle GitHub PR workflow safely. Use when creating/updating PRs, especially to prevent adding commits to already merged PR branches; enforce opening a new branch/new PR after merge.
---

# PR Handling

## Core rule
If a PR is **MERGED** or **CLOSED**, do **not** keep pushing to that old PR branch for new work.

Always create a **new branch** from latest `master` and open a **new PR**.

## Required flow
1. Check PR status first:
   - `gh pr view <number> --json state,headRefName,baseRefName,url`
2. If state is `OPEN`:
   - continue on that PR branch only for the same scope.
3. If state is `MERGED` or `CLOSED`:
   - `git fetch origin_https master`
   - `git checkout -b <new-branch> origin_https/master`
   - apply changes, commit, push
   - create new PR

## Branch naming
Use one of:
- `fix/<topic>-YYYYMMDD`
- `feat/<topic>-YYYYMMDD`
- `skill/<topic>-YYYYMMDD`

## PR checklist
- PR scope is single-purpose and clear.
- PR title describes the actual change.
- PR body includes: what changed / why / risk & rollback.
- Reply to user with the **new PR link** (not old merged PR link).

## Anti-patterns (forbidden)
- Reusing merged PR link as if it contains new commits.
- Stacking unrelated fixes into an old PR branch after merge.
- Reporting old PR URL without checking PR state.
