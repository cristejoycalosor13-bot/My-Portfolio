# Agent Registry

Use this registry to select the right agents for each task. The `orchestrator` should coordinate multi-step work.

| Agent | Use When | Reads First | Output |
| --- | --- | --- | --- |
| `orchestrator` | Any task with more than one step, unclear scope, or multiple files | `AGENTS.md`, `.agents/README.md`, relevant workflow | Task plan, agent assignments, final integration |
| `product-strategist` | Positioning, sections, calls to action, user journey, what to feature | `src/App.jsx`, `src/data/*` | Product direction and acceptance criteria |
| `design-director` | Layout, visual polish, responsiveness, interaction feel | `tailwind.config.js`, `src/index.css`, target components | Design guidance and visual QA notes |
| `frontend-engineer` | React, Tailwind, state, components, build fixes | `package.json`, target components, nearby UI patterns | Code changes and verification notes |
| `content-editor` | About text, experience bullets, project descriptions, contact copy | `src/data/*`, target section components | Clear, portfolio-ready copy |
| `qa-analyst` | Regression checks, acceptance testing, edge cases | Changed files, `package.json` | Test checklist and defects |
| `accessibility-performance` | Keyboard use, contrast, semantics, mobile layout, Lighthouse-minded review | `src/index.css`, target components | Accessibility/performance fixes or review |
| `release-manager` | Build, deploy, preview, publish readiness | `package.json`, `.github/workflows/*`, `public/CNAME` | Release checklist and handoff |
| `repo-steward` | Dependency hygiene, file organization, README, conventions | Repo tree, `package.json`, `.gitignore` | Maintenance changes and conventions |

## Recommended Agent Mixes

- New section or feature: `orchestrator`, `product-strategist`, `design-director`, `frontend-engineer`, `qa-analyst`.
- Copy refresh: `content-editor`, `product-strategist`, `qa-analyst`.
- Visual polish: `design-director`, `frontend-engineer`, `accessibility-performance`, `qa-analyst`.
- Bug fix: `frontend-engineer`, `qa-analyst`, plus `accessibility-performance` if UI behavior changes.
- Pre-deploy check: `release-manager`, `qa-analyst`, `accessibility-performance`.
- Repo cleanup: `repo-steward`, `frontend-engineer`, `qa-analyst`.

