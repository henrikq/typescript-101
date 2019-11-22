# typescript-101

Basic intro to typescript

## Follow along

Clone and install

```
git clone git@github.com:henrikq/typescript-101.git
cd typescript-101
npm ci
```

To run files, you can use `ts-node` :

```
npx ts-node hello-world.ts
```


## VSCode

Basic typescript support should already be installed by default

You might want these: 
- `dbaeumer.vscode-eslint` 
- `esbenp.prettier-vscode`@2.3.0 (latest has some issues)

, and this in your settings.json

```
    "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "typescript", "autoFix": true },
        { "language": "typescriptreact", "autoFix": true }
      ],
```

To run files i use `formulahendry.code-runner`
, and `npm install -g ts-node typescript`
, with the shortcut: `Ctrl+Alt+N`


## Atom (not tested)

Maybe install [atom-typescript](https://atom.io/packages/atom-typescript) i don't know

