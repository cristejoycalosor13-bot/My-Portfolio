# Workflow: Release Check

## Agents

Primary: `release-manager`

Supporting: `qa-analyst`, `accessibility-performance`, `repo-steward`

## Steps

1. Review `git status --short`.
2. Inspect changed files.
3. Run `npm run build`.
4. Check deployment workflow and domain files if release settings changed.
5. Prepare a concise release summary.
6. Call out unverified areas.

## Done Means

- Build status is known.
- Changed scope is understood.
- The handoff makes deploy risk clear.

