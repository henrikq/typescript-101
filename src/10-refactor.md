# Refactor pat

1. checkout `typescript`
2. Pick a file and rename from `.js` to `.ts`.
3. Fix `ts`/`eslint`
4. npm run lint

Although i would use with caution
, VSCode has a `Quick Fix...`: `Infer parameter types from usage`.

Generally speaking, explicit and implicit `any` is not allowed
, to encourage annotation.

I would suggest files that don't have large a large list of `.js` dependencies.

I would avoid things such as `mongodb`/`mongoose` models for now.

## Suggestions

- `app/bot/nlp/juxtapose.js`
- `app/bot/nlp/evaluate.js`
