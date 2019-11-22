# Refactor pat

1. Pull `typescript - 8f7bc765 - basic typescript`
2. Pick a file and rename from `.js` to `.ts`.
3. Fix `ts`/`eslint`

Although i would use with caution
, VSCode has a `Quick Fix...`: `Infer parameter types from usage`.

Generally speaking, explicit and implicit `any` is not allowed
, to encourage annotation.

I would suggest files that don't have large a large list of `.js` dependencies.

I would avoid things such as `mongodb`/`mongoose` models for now.

## Suggestions

- `app/bot/nlp/juxtapose.js`
- `app/bot/nlp/evaluate.js`
