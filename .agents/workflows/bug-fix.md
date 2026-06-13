# Workflow: Bug Fix

## Agents

Primary: `frontend-engineer`

Supporting: `qa-analyst`, plus `accessibility-performance` for UI behavior bugs.

## Steps

1. Reproduce or infer the bug from code.
2. Locate the smallest responsible area.
3. Fix the cause, not only the symptom.
4. Check nearby behaviors for regressions.
5. Run `npm run build`.
6. Document what was fixed and how it was verified.

## Done Means

- The reported bug is addressed.
- Nearby behavior still works.
- Build passes or the failure is documented.

