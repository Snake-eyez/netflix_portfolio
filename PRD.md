# PRD: Portfolio Platform Hardening (Performance, Security, Cleanup)

## 1. Executive Summary
This project needs a baseline hardening pass focused on performance, security, and maintainability. The current frontend is functional, but it ships a large initial bundle, includes inline third-party scripts in `index.html`, and has configuration patterns that can be tightened for safer deployments.

The MVP goal of this PRD is to deliver measurable improvements without changing core user-facing features. The result should be a faster first load, safer default security posture, and a cleaner, warning-free build pipeline.

## 2. Mission
Ship a safer and faster portfolio platform with minimal behavioral change.

Core principles:
- Keep user experience and page behavior intact.
- Prefer secure-by-default configuration.
- Reduce initial JavaScript and runtime overhead.
- Eliminate avoidable warnings and noisy technical debt.
- Keep the implementation simple and testable.

## 3. Target Users
- Site visitors loading pages on mobile/desktop networks.
- Site owner deploying with Firebase Hosting.
- Maintainers extending pages and content.

## 4. MVP Scope
### In Scope
- ✅ Route-level lazy loading and suspense fallback for page modules.
- ✅ Memoization of expensive client-side list transforms on large pages.
- ✅ Removal of inline analytics scripts from HTML template.
- ✅ Environment-based analytics and Firebase configuration.
- ✅ Hardening Firebase Hosting security headers.
- ✅ Cleanup of unused imports/variables causing build warnings.

### Out of Scope
- ❌ Full architecture migration away from CRA.
- ❌ Backend/auth redesign.
- ❌ UI redesign or major content rewrite.
- ❌ New analytics consent UX flows.

## 5. User Stories
- As a visitor, I want pages to load faster, so that I can browse content quickly.
- As a visitor, I want safer defaults, so that embedded scripts and cross-origin behavior are restricted.
- As a maintainer, I want environment-driven config, so that secrets/IDs are not hardcoded in templates.
- As a maintainer, I want clean builds, so that real regressions are easier to detect.
- As a maintainer, I want predictable hosting headers, so that security posture is consistent after deploy.

## 6. Core Architecture & Patterns
- Keep existing React + TypeScript + React Router architecture.
- Adopt code-splitting with `React.lazy` + `Suspense` for routes.
- Use small utility modules for env validation and analytics bootstrap.
- Keep Firebase Hosting config as the deployment security control point.

## 7. Tools/Features
- Route lazy loading for page components.
- Optional analytics initialization in production via environment flags.
- Firebase config sourced from `REACT_APP_*` variables.
- Security response headers and CSP in hosting config.
- ESLint warning cleanup (unused vars/imports).

## 8. Technology Stack
- React 18 + TypeScript
- React Router 6
- Firebase Hosting + Firestore
- CRA build (`react-scripts`)

## 9. Security & Configuration
- Remove inline script blocks from `public/index.html`.
- Define CSP in `firebase.json` and avoid inline JS requirements.
- Add HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy.
- Load analytics only when explicitly enabled via env vars.
- Read Firebase client config from env vars and fail fast on missing required values.

## 10. Success Criteria
- ✅ Production build passes with no ESLint warnings.
- ✅ Initial route JS payload is reduced via code-splitting.
- ✅ No inline analytics scripts remain in HTML template.
- ✅ Hosting config includes modern security headers.
- ✅ Newsletter flow still compiles and uses Firestore config successfully when env is set.

## 11. Implementation Phases
### Phase 1: Planning and Scaffolding
- ✅ Create PRD and implementation plan.
- ✅ Add helper modules for config/analytics.

### Phase 2: Performance and Security Implementation
- ✅ Apply lazy route loading.
- ✅ Move analytics and Firebase config to env-based modules.
- ✅ Add hosting security headers.

### Phase 3: Cleanup
- ✅ Remove unused imports and dead variables.
- ✅ Clean duplicate/invalid HTML head metadata.

### Phase 4: Validation and Review
- ✅ Run build/tests.
- ✅ Run code review report with findings and residual risks.

## 12. Risks & Mitigations
- Risk: CSP blocks required assets.  
  Mitigation: Add explicit allowlist for existing external dependencies (fonts, analytics endpoints when enabled).

- Risk: Missing env vars break Firebase init in production.  
  Mitigation: Validate and throw clear error with missing key names.

- Risk: Lazy loading introduces route regressions.  
  Mitigation: Build + manual route sanity checks.

## 13. Future Considerations
- Migrate to Vite/Next for deeper performance gains.
- Add consent management before analytics enablement.
- Add automated Lighthouse/Bundle CI budget gates.
- Add Firestore security rules deployment and emulator tests.

## 14. Appendix
- Primary files: `src/App.tsx`, `src/index.tsx`, `src/firebase.ts`, `public/index.html`, `firebase.json`, page components with warnings.
- Validation commands: `npm run build`, `npm test -- --watchAll=false`.
