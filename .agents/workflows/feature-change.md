# Workflow: Feature Change

## Agents

Primary: `orchestrator`

Supporting: `product-strategist`, `design-director`, `frontend-engineer`, `qa-analyst`

## Steps

1. Clarify the user goal and define acceptance criteria.
2. Read the nearest existing components and data files.
3. Decide whether the change belongs in a section component, UI component, data file, or config.
4. Implement the smallest coherent version.
5. Review responsive behavior and visual consistency.
6. Run `npm run build`.
7. Summarize changed files, verification, and any follow-up.

## Done Means

- The feature is visible or usable where expected.
- It matches existing style and architecture.
- Build passes or the failure is documented.

