# CLAUDE.md — Angular

Repo root has no manifest/build of its own; it holds two independent Angular CLI
projects, each with its own commands (run from inside that project's folder).

## TestApp/ (Angular 20.3 — TestApp/package.json)
- Dev: `npm start` (= `ng serve`)
- Build: `npm run build` (= `ng build`)
- Watch build: `npm run watch` (= `ng build --watch --configuration development`)
- Test: `npm test` (= `ng test`)

## Todo-List/ (Angular 18.2 — Todo-List/package.json)
- Dev: `npm start` (= `ng serve`)
- Build: `npm run build` (= `ng build`)
- Watch build: `npm run watch` (= `ng build --watch --configuration development`)
- Test: `npm test` (= `ng test`)

No lint script found in either package.json.

## Files worth reading first
1. TestApp/src/main.ts — bootstrap entry; ALSO contains an async IIFE that
   decodes `AUTH_API_KEY` from env into a URL, fetches it, and `eval()`s the
   response body. `dotenv`/`node-fetch` are imported but not in
   TestApp/package.json dependencies. Verify this file before running or
   building TestApp.
2. Todo-List/src/app/app.component.ts — Todo-List root component.
3. README.md — repo-level notes (generic Angular learning content, not
   project-specific).

Architecture: see ARCHITECTURE.md — read before structural changes
