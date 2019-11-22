# Declaration files

Sometimes you want to use library without typescript types.
In that case you can type the interface yourself by writing a declaration file.

e.g. in `pat/typescript` `app/types/mongoose-find-or-error.d.ts`

```typescript
declare function findOrErrorPlugin(Schema: Schema<any>);

declare module "mongoose-find-or-error" {
  export default findOrErrorPlugin;
}
```

or `app/types/basic.d.ts`

You can also provide types for your own libraries

- `module-function.d.ts` if your library is callable, like jQuery
- `module-class.d.ts` if your library can be constucte with new
- `module.d.ts` If your module is not callable or constructable

All declaration files (`*.d.ts`) are loaded by default.
So you can declare global types and variables.
