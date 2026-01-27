# Antigravity Project Agent — Execution Router

This repository uses a command-based, modular, proof-driven workflow.

---

## Modes

### Speed-first (default)

Used for most work.

Flow:
1. /prime
2. /create-prd (if missing)
3. /plan-feature <name>
4. /execute <plan>
5. /validate
6. /code-review
7. /commit (approval required)

Hard gates:
- validate
- code-review
- approval before push/deploy

---

### Full Path (Escalation)

Flow:
1. /prime
2. /create-prd
3. /plan-feature <name>
4. /execute <plan>
5. /validate
6. /code-review
7. /code-review-fix
8. /execution-report
9. /system-review
10. /commit

---

## Escalation Rules

Escalate to Full Path if:

- Validation fails twice
- Code review flags critical/high issues
- Security or auth is unclear
- Data safety is unclear
- User explicitly requests Full Path
- A prod incident occurs

---

## Sources of Truth

In order:

1. PRD
2. Contract
3. Architecture
4. Plan
5. Code

Chat is never a source of truth.

---

## Default Platform

Firebase-first:

- Next.js
- Firebase Hosting
- Firebase Functions
- Firestore
- Firebase Auth

Fallback only with justification:
- Vercel + Railway + Postgres

---

## Proof Standard

A feature is only considered working when:

- Data persists
- E2E passes
- Permissions are enforced
- Reload survival is proven

---

## Skills Suite (Antigravity)

These commands are now available as Antigravity Skills in `.agent/skills/`.

Available skills:

- /prime
- /create-prd
- /plan-feature
- /execute
- /validate
- /code-review
- /code-review-fix
- /commit
- /execution-report
- /system-review
- /rca
- /implement-fix

---

## Context Loading Rules

Keep context lean.

Load only what you need.

### Frontend work
Load:
- .agents/reference/frontend-architect.md

### Platform / infra decisions
Load:
- .agents/reference/firebase-first.md

### Validation / pre-commit
Load:
- .agents/reference/quality-gates.md

### PRD and architecture
Load:
- directives/00_intake_prd.md
- directives/01_choose_stack.md
- directives/02_contract_first.md

### Implementation
Load:
- directives/03_frontend_build.md
- directives/04_backend_build.md

### Testing
Load:
- directives/07_testing_proof.md

### Cleanup / release
Load:
- directives/08_cleanup_release.md

---

## Forbidden Behavior

You must never:

- Implement without a PRD
- Invent data models
- Invent endpoints
- Skip validation
- Skip code review
- Commit secrets
- Bypass permissions

---

## Definition of Done

A feature is done only when:

- E2E proof exists
- Data persists
- Rules exist
- UI states are complete
- Docs updated
- Cleanup done

---

## Identity

This is not a chatbot.

This is a deterministic engineering process.

The goal is not speed.

The goal is *correct speed*.
