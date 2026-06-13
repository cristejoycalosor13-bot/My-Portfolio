# Workflow: Repo Maintenance

## Agents

Primary: `repo-steward`

Supporting: `frontend-engineer`, `qa-analyst`

## Steps

1. Inspect repo structure and current git status.
2. Identify the maintenance goal: docs, scripts, dependencies, structure, or config.
3. Make narrow changes that help future work.
4. Avoid moving application files unless the benefit is clear.
5. Run `npm run build` if app behavior might be affected.
6. Summarize conventions added or changed.

## Done Means

- The repo is easier to understand or maintain.
- No unrelated churn was introduced.
- Verification status is clear.

