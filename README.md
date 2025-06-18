<div align="center">

# 🎛️ ESLint Config

[![npm version][npm_badge]][npm]
[![CI status][ci_badge]][ci]

Personal collection of shareable [ESLint][eslint] Configs.

</div>

---

## 📦 Installation

```bash
npm install --save-dev @saeris/eslint-config eslint typescript
# or
yarn add -D @saeris/eslint-config eslint typescript
```

## 🔧 Usage

> .eslintrc.js

```typescript
// Required line to use shared plugins
require(`@saeris/eslint-config/patch`);

module.exports = {
  extends: [
    // import all of the rules:
    require.resolve("@saeris/eslint-config")

    // or import partial rulesets:

    // Vanilla ESLint rules, Import & Promise Plugins
    require.resolve("@saeris/eslint-config/base"),
    // Jest Plugin
    require.resolve("@saeris/eslint-config/jest"),
    // React, React-Hooks, and JSX-a11y Plugins
    require.resolve("@saeris/eslint-config/react"),
    // Typescript ESLint Plugin basic rules
    require.resolve("@saeris/eslint-config/typescript"),
    // Typescript-ESLint Plugin rules requiring Type Information
    require.resolve("@saeris/eslint-config/type-aware")
  ]
};
```

By default, the `type-aware` ruleset will look for some common Typescript configuration file names from the following:

- `tsconfig-eslint.json`
- `tsconfig.eslint.json`
- `tsconfig.json`

If none of the above are found, the parser will throw an error. If you have a custom `tsconfig` you would like to use, you can override the default setting by setting your ESLint config's `parserOptions.project` field, such as in this example:

> .eslintrc.js

```typescript
require(`@saeris/eslint-config/patch`);

module.exports = {
  extends: [require.resolve("@saeris/eslint-config/type-aware")],
  parserOptions: {
    project: "./path/to/your/config.json"
  }
};
```

## 🥂 License

Released under the [MIT license][license] © [Drake Costa][personal-website].

[npm]: https://www.npmjs.com/package/@saeris/eslint-config
[npm_badge]: https://img.shields.io/npm/v/@saeris/eslint-config.svg?style=flat
[ci]: https://github.com/saeris/eslint-config/actions/workflows/ci.yml
[ci_badge]: https://github.com/saeris/eslint-config/actions/workflows/ci.yml/badge.svg
[eslint]: https://eslint.org/
[license]: ./LICENSE.md
[personal-website]: https://saeris.gg
