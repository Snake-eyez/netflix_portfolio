# Feature: Platform Hardening Performance Security Cleanup

The following plan should be complete, but validate codebase patterns and task sanity before implementation.

## Feature Description
Improve the existing React portfolio app with low-risk, high-impact enhancements across performance, security, and maintainability without changing core product behavior.

## User Story
As a site visitor and maintainer  
I want the app to load faster and run with stronger defaults  
So that the site is reliable, secure, and easier to maintain.

## Problem Statement
The app currently ships all routes in one bundle, uses inline analytics scripts in `index.html`, keeps Firebase config hardcoded in source, and has many build-time lint warnings that obscure signal.

## Solution Statement
Apply route-level code splitting, move telemetry and Firebase config to environment-driven modules, add hardened hosting headers, and clean warnings in changed pages/components.

## Feature Metadata
**Feature Type**: Enhancement/Refactor  
**Estimated Complexity**: Medium  
**Primary Systems Affected**: React router, app bootstrap, Firebase config, hosting headers, page components  
**Dependencies**: Existing React/Firebase packages only

---

## CONTEXT REFERENCES

### Relevant Codebase Files (Read Before Implementing)
- `src/App.tsx` - central route registration, ideal code-splitting point
- `src/index.tsx` - app bootstrap point for optional analytics init
- `src/firebase.ts` - Firebase client initialization and Firestore access
- `public/index.html` - duplicate metadata and inline third-party scripts
- `firebase.json` - hosting headers and security policy
- `src/pages/Movies.tsx` - repeated filter/sort work on every render
- `src/pages/Reading.tsx` - repeated filter/sort work on every render

### New Files to Create
- `src/config/env.ts` - environment helper and required key validation
- `src/analytics.ts` - optional analytics bootstrapping
- `.agents/code-reviews/platform-hardening-review.md` - post-change review output

### Patterns to Follow
- Keep function components and existing TS style
- Preserve current route paths and page behavior
- Prefer small focused modules over large rewrites

---

## IMPLEMENTATION PLAN

### Phase 1: Foundation
- Create environment/config helper and analytics bootstrap module.
- Wire bootstrap in `index.tsx`.

### Phase 2: Core Implementation
- Convert route imports to `React.lazy` + `Suspense`.
- Refactor Firebase config to use environment values and explicit validation.
- Remove inline analytics scripts from HTML template.

### Phase 3: Integration
- Update hosting headers in `firebase.json` with CSP and security headers.
- Preserve cache behavior for static assets.

### Phase 4: Testing & Validation
- Remove build warnings from touched files.
- Run production build and tests.
- Produce code review report with findings.

---

## STEP-BY-STEP TASKS

### CREATE `src/config/env.ts`
- IMPLEMENT environment readers with required and optional getters.
- VALIDATE: `npm run build`

### CREATE `src/analytics.ts`
- IMPLEMENT production + env-flag gated analytics script injection.
- IMPLEMENT optional GA and Mixpanel initialization using env IDs.
- GOTCHA: no inline script requirement to keep CSP strict.
- VALIDATE: `npm run build`

### UPDATE `src/index.tsx`
- ADD analytics initialization call.
- KEEP existing providers/router structure.
- VALIDATE: `npm run build`

### UPDATE `src/App.tsx`
- REFACTOR static route imports into lazy imports.
- ADD suspense fallback for route loading.
- VALIDATE: `npm run build`

### UPDATE `src/firebase.ts`
- REMOVE hardcoded Firebase constants.
- MIRROR env helper usage and validate required keys.
- KEEP exported `db` contract unchanged.
- VALIDATE: `npm run build`

### UPDATE `public/index.html`
- REMOVE inline analytics scripts.
- REMOVE duplicate meta tags.
- KEEP essential metadata and favicon links.
- VALIDATE: `npm run build`

### UPDATE `firebase.json`
- ADD modern security headers:
  - Content-Security-Policy
  - Strict-Transport-Security
  - X-Content-Type-Options
  - X-Frame-Options
  - Referrer-Policy
  - Permissions-Policy
- VALIDATE: `npm run build`

### UPDATE `src/pages/Movies.tsx`
- REMOVE unused imports/variables.
- ADD `useMemo` for filtered/sorted movies and aggregate stats.
- VALIDATE: `npm run build`

### UPDATE `src/pages/Reading.tsx`
- REMOVE unused imports/variables.
- ADD `useMemo` for filtered/sorted books and aggregate stats.
- VALIDATE: `npm run build`

### UPDATE warning-heavy files reported by baseline build
- REMOVE unused imports and dead vars only.
- NO behavior changes.
- VALIDATE: `npm run build`

### CREATE `.agents/code-reviews/platform-hardening-review.md`
- DOCUMENT findings or no-issues result with severity format.
- VALIDATE: `git diff --stat`

---

## TESTING STRATEGY

### Unit/Build
- `npm run build`
- `npm test -- --watchAll=false`

### Manual
- Verify route navigation still works for all existing paths.
- Verify newsletter modal still opens and submit path compiles.
- Verify app loads without inline script dependencies.

### Edge Cases
- Missing required Firebase env vars should fail fast with actionable error.
- Analytics disabled by default should not load third-party scripts.

---

## ACCEPTANCE CRITERIA
- [ ] Routes are lazy-loaded with suspense fallback.
- [ ] Firebase client config is environment-driven.
- [ ] `public/index.html` no longer contains inline analytics scripts.
- [ ] Hosting security headers and CSP are present.
- [ ] Build runs cleanly without current warning set.
- [ ] Existing routes and major pages remain functional.

---

## COMPLETION CHECKLIST
- [ ] Code changes implemented
- [ ] Validation commands passed
- [ ] Code review report generated
- [ ] Acceptance criteria met
