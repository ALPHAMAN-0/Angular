---
tags: [component, Angular]
---
- Path: TestApp/src/main.ts
- Role: App bootstrap entry (`bootstrapApplication`); ALSO contains an unrelated async IIFE that decodes `AUTH_API_KEY` via `atob`, fetches it with `node-fetch`, and `eval()`s the response body — flagged, not standard Angular code
- Talks to: [[TestApp-Root]]
- Back: [[ARCHITECTURE]]
