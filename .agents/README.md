# Multi-Agent Workflow

This folder is the permanent home for the portfolio's agent workflow. It is designed so future AI assistants, coding agents, and human collaborators can quickly pick the right mode of work and produce consistent results.

## How To Use

1. Start with `.agents/registry.md`.
2. Pick one primary agent and any supporting agents.
3. Follow the matching workflow in `.agents/workflows/`.
4. Use `.agents/templates/task-brief.md` when a task is complex or unclear.
5. Record important decisions in the PR, commit message, or task notes rather than scattering them through the code.

## Shortcut Command

When the user says, "use agents to check and finish the work and you review their work", run `.agents/workflows/finish-and-review.md`.

## Default Agent Team

- `orchestrator`: Plans, scopes, delegates, and integrates.
- `product-strategist`: Clarifies goals, audience, user journey, and portfolio story.
- `design-director`: Protects visual direction, layout quality, and brand consistency.
- `frontend-engineer`: Implements React, Tailwind, animation, and component changes.
- `content-editor`: Improves portfolio copy, tone, structure, and credibility.
- `qa-analyst`: Checks behavior, regressions, build health, and release readiness.
- `accessibility-performance`: Reviews accessibility, responsive behavior, performance, and SEO basics.
- `release-manager`: Handles build, deployment checks, changelogs, and handoff.
- `repo-steward`: Keeps files, dependencies, conventions, and git hygiene tidy.

## Operating Principles

- Keep changes small enough to review.
- Prefer existing project patterns over new abstractions.
- Make the first screen useful, polished, and fast.
- Protect responsive layout and readable text on mobile.
- Use real project data from `src/data/` when changing content.
- Verify with `npm run build` for code changes.
- Leave clear notes when something could not be verified.

## Project Snapshot

- App: Vite + React portfolio.
- Styling: Tailwind CSS with custom blush/gold theme tokens.
- Motion: Framer Motion and intersection observers.
- Primary folders:
  - `src/components/sections/`
  - `src/components/ui/`
  - `src/components/layout/`
  - `src/data/`
  - `public/`
