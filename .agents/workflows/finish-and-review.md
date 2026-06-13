# Workflow: Finish And Review

## Trigger Phrase

"Use agents to check and finish the work and you review their work."

## Agents

Primary: `orchestrator`

Supporting: choose from `frontend-engineer`, `design-director`, `content-editor`, `accessibility-performance`, `qa-analyst`, `release-manager`, and `repo-steward` based on the changed work.

## Steps

1. Inspect `git status --short` and identify all changed files.
2. Read the changed files and infer the user's intended outcome.
3. Assign relevant specialist roles:
   - `frontend-engineer` for implementation correctness.
   - `design-director` for visual and responsive polish.
   - `content-editor` for copy and portfolio story.
   - `accessibility-performance` for semantics, keyboard flow, motion, contrast, asset weight, and SEO basics.
   - `qa-analyst` for regressions and verification.
   - `release-manager` for deployment readiness.
   - `repo-steward` for documentation, structure, and dependency hygiene.
4. Let specialists finish obvious gaps while staying within the current scope.
5. Run available verification, usually `npm run build`.
6. Have the `orchestrator` review all specialist changes for consistency, overreach, and unresolved risk.
7. Hand off with a concise summary of what was finished, what was reviewed, and what remains unverified.

## Done Means

- Existing work is completed to a coherent stopping point.
- Specialist concerns have been checked.
- The orchestrator has done a final review pass.
- Build status and remaining risks are explicit.

