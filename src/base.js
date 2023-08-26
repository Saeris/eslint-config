// @ts-check

/** https://eslint.org/docs/latest/rules/#possible-problems */
const possibleProblems = /** @type {const} */ ({
  "array-callback-return": ["warn", {
    allowImplicit: true,
    checkForEach: true
  }],
  "constructor-super": "error",
  "for-direction": `error`,
  "getter-return": `error`,
  "no-async-promise-executor": `error`,
  "no-await-in-loop": `error`,
  "no-class-assign": "error",
  "no-compare-neg-zero": `error`,
  "no-cond-assign": [`error`, `always`],
  "no-const-assign": "error",
  "no-constant-binary-expression": "error",
  "no-constant-condition": `warn`,
  "no-constructor-return": "error",
  "no-control-regex": `error`,
  "no-debugger": `warn`,
  "no-dupe-args": `error`,
  "no-dupe-class-members": "error", // Enforced by TypeScript
  "no-dupe-else-if": `error`,
  "no-dupe-keys": `error`,
  "no-duplicate-case": `error`,
  "no-duplicate-imports": ["error", { "includeExports": true }],
  "no-empty-character-class": `error`,
  "no-empty-pattern": `error`,
  "no-ex-assign": `error`,
  "no-fallthrough": "error",
  "no-func-assign": `error`,
  "no-import-assign": `error`,
  "no-inner-declarations": `error`,
  "no-invalid-regexp": `error`,
  "no-irregular-whitespace": `error`,
  "no-loss-of-precision": `error`, // Overriden by @typescript-eslint
  "no-misleading-character-class": `error`,
  "no-new-native-nonconstructor": "warn",
  "no-new-symbol": "error",
  "no-obj-calls": `error`,
  "no-promise-executor-return": `error`,
  "no-prototype-builtins": `error`,
  "no-self-assign": "error",
  "no-self-compare": "error",
  "no-setter-return": `error`,
  "no-sparse-arrays": `error`,
  "no-template-curly-in-string": `error`,
  "no-this-before-super": "error",
  "no-undef": "error",
  "no-unexpected-multiline": `off`,
  "no-unmodified-loop-condition": "warn",
  "no-unreachable": `error`,
  "no-unreachable-loop": `error`,
  "no-unsafe-finally": `error`,
  "no-unsafe-negation": `error`,
  "no-unsafe-optional-chaining": `error`,
  "no-unused-private-class-members": "warn",
  "no-unused-vars": "warn",
  "no-use-before-define": ["error", {
    "functions": false
  }],
  "no-useless-backreference": `error`,
  "require-atomic-updates": `error`,
  "use-isnan": `error`,
  "valid-typeof": `error`,
})

/** https://eslint.org/docs/latest/rules/#suggestions */
const suggestions = /** @type {const} */ ({
  "accessor-pairs": `error`,
  "arrow-body-style": [`error`, `as-needed`],
  "block-scoped-var": `error`,
  camelcase: [`error`, { properties: `never` }],
  "capitalized-comments": `off`,
  "class-methods-use-this": `off`,
  complexity: `off`,
  "consistent-return": `off`,
  "consistent-this": `off`,
  curly: [`error`, `multi-line`],
  "default-case": `error`,
  "default-case-last": `error`,
  "default-param-last": `error`, // Overriden by @typescript-eslint
  "dot-notation": [`error`, { allowKeywords: true }], // Overriden by @typescript-eslint
  eqeqeq: [`error`, `smart`],
  "func-name-matching": `off`,
  "func-names": `off`,
  "func-style": [`error`, `declaration`, { allowArrowFunctions: true }],
  "grouped-accessor-pairs": `error`,
  "guard-for-in": `error`,
  "id-denylist": `off`,
  "id-length": `off`,
  "id-match": `off`,
  "init-declarations": `off`, // Overriden by @typescript-eslint
  "logical-assignment-operators": ["error", "always", { enforceForIfStatements: true }],
  "max-classes-per-file": `off`,
  "max-depth": `off`,
  "max-lines": `off`,
  "max-lines-per-function": `off`,
  "max-nested-callbacks": `off`,
  "max-params": `off`,
  "max-statements": `off`,
  "multiline-comment-style": `off`,
  "new-cap": [`error`, { newIsCap: true }],
  "no-alert": `error`,
  "no-array-constructor": `off`, // Overriden by @typescript-eslint
  "no-bitwise": [`error`, { allow: [`~`] }],
  "no-caller": `error`,
  "no-case-declarations": `error`,
  "no-confusing-arrow": `off`,
  "no-console": "warn",
  "no-continue": `error`,
  "no-delete-var": `error`,
  "no-div-regex": `error`,
  "no-else-return": `error`,
  "no-empty": `error`,
  "no-empty-function": [`error`, { allow: [`arrowFunctions`, `constructors`] }], // Overriden by @typescript-eslint
  "no-empty-static-block": "error",
  "no-eq-null": `error`,
  "no-eval": `error`,
  "no-extend-native": `error`,
  "no-extra-bind": `error`,
  "no-extra-boolean-cast": "error",
  "no-extra-label": `error`,
  "no-extra-semi": "error",
  "no-floating-decimal": `error`,
  "no-global-assign": `error`,
  "no-implicit-coercion": `off`,
  "no-implicit-globals": `off`,
  "no-implied-eval": `error`, // Overriden by @typescript-eslint
  "no-inline-comments": `off`,
  "no-invalid-this": `off`, // Overriden by @typescript-eslint
  "no-iterator": `error`,
  "no-label-var": `error`,
  "no-labels": `error`,
  "no-lone-blocks": `error`,
  "no-lonely-if": `error`,
  "no-loop-func": `error`, // Overriden by @typescript-eslint
  "no-magic-numbers": `off`, // Overriden by @typescript-eslint
  "no-mixed-operators": `off`,
  "no-multi-assign": `error`,
  "no-multi-str": `error`,
  "no-negated-condition": `error`,
  "no-nested-ternary": `off`,
  "no-new": `error`,
  "no-new-func": `error`,
  "no-new-object": `error`,
  "no-new-wrappers": `error`,
  "no-nonoctal-decimal-escape": `error`,
  "no-octal": `error`,
  "no-octal-escape": `error`,
  "no-param-reassign": `error`,
  "no-plusplus": `off`,
  "no-proto": `error`,
  "no-redeclare": `error`, // Overriden by @typescript-eslint
  "no-regex-spaces": "error",
  "no-restricted-exports": `off`,
  "no-restricted-globals": `off`,
  "no-restricted-imports": `off`,
  "no-restricted-properties": `off`,
  "no-restricted-syntax": `off`,
  "no-return-assign": [`error`, `always`],
  "no-script-url": `error`,
  "no-sequences": `error`,
  "no-shadow": `error`, // Overriden by @typescript-eslint
  "no-shadow-restricted-names": `error`,
  "no-ternary": `off`,
  "no-throw-literal": `error`, // Overriden by @typescript-eslint
  "no-undef-init": `error`,
  "no-undefined": `error`,
  "no-underscore-dangle": `off`,
  "no-unneeded-ternary": `error`,
  "no-unused-expressions": `off`, // Overriden by @typescript-eslint
  "no-unused-labels": `error`,
  "no-useless-call": `error`,
  "no-useless-catch": `error`,
  "no-useless-computed-key": `error`,
  "no-useless-concat": `error`,
  "no-useless-constructor": `error`, // Overriden by @typescript-eslint
  "no-useless-escape": `error`,
  "no-useless-rename": `error`,
  "no-useless-return": `error`,
  "no-var": `error`,
  "no-void": [`error`, { allowAsStatement: true }],
  "no-warning-comments": `off`,
  "no-with": `error`,
  "object-shorthand": [`error`, `properties`],
  "one-var": [`error`, `never`],
  "one-var-declaration-per-line": [`error`, `always`],
  "operator-assignment": [`error`, `always`],
  "prefer-arrow-callback": `error`,
  "prefer-const": `off`,
  "prefer-destructuring": `off`,
  "prefer-exponentiation-operator": `error`,
  "prefer-named-capture-group": `warn`,
  "prefer-numeric-literals": `error`,
  "prefer-object-has-own": "error",
  "prefer-object-spread": `error`,
  "prefer-promise-reject-errors": `error`,
  "prefer-regex-literals": `error`,
  "prefer-rest-params": `error`,
  "prefer-spread": `error`,
  "prefer-template": `error`,
  "quote-props": [`error`, `as-needed`],
  radix: `error`,
  "require-await": `error`, // Overriden by @typescript-eslint
  "require-unicode-regexp": `off`,
  "require-yield": `error`,
  "sort-imports": `off`,
  "sort-keys": `off`,
  "sort-vars": `off`,
  "spaced-comment": [`off`, `always`, { plugins: [`react`], exceptions: [`*`], markers: [`*`] }],
  strict: [`error`, `never`],
  "symbol-description": `error`,
  "vars-on-top": `error`,
  yoda: `error`,
})

/** https://eslint.org/docs/latest/rules/#layout--formatting */
const layoutAndFormatting = /** @type {const} */ ({
  "array-bracket-newline": [`error`, `consistent`], // Conflicts with Prettier
  "array-bracket-spacing": `error`,
  "array-element-newline": `off`,
  "arrow-parens": [`error`, `always`],
  "arrow-spacing": [`error`, { before: true, after: true }],
  "block-spacing": [`error`, `always`],
  "brace-style": [`error`, `1tbs`, { allowSingleLine: true }], // Overriden by @typescript-eslint
  "comma-dangle": [`error`, `never`], // Overriden by @typescript-eslint
  "comma-spacing": [`error`, { before: false, after: true }], // Overriden by @typescript-eslint
  "comma-style": [`error`, `last`],
  "computed-property-spacing": `error`,
  "dot-location": [`error`, `property`],
  "eol-last": `error`,
  "func-call-spacing": `error`, // Overriden by @typescript-eslint
  "function-call-argument-newline": [`error`, `consistent`],
  "function-paren-newline": [`off`, `consistent`],
  "generator-star-spacing": [
    `error`,
    {
      before: false,
      after: true,
      method: { before: true, after: false }
    }
  ],
  "implicit-arrow-linebreak": `off`,
  indent: `off`, // Incompatible with Prettier
  "jsx-quotes": [`error`, `prefer-double`],
  "key-spacing": `off`,
  "keyword-spacing": [`error`, { before: true, after: true }], // Overriden by @typescript-eslint
  "line-comment-position": `off`,
  "linebreak-style": `off`,
  "lines-around-comment": `off`,
  "lines-between-class-members": [`error`, `always`, { exceptAfterSingleLine: true }], // Overriden by @typescript-eslint
  "max-len": `off`,
  "max-statements-per-line": `off`,
  "multiline-ternary": "off", // Incompatible with Prettier
  "new-parens": `error`,
  "newline-per-chained-call": `off`,
  "no-mixed-spaces-and-tabs": [`error`, `smart-tabs`],
  "no-multi-spaces": [
    `error`,
    {
      exceptions: {
        Property: true,
        VariableDeclarator: true,
        ImportDeclaration: true
      }
    }
  ],
  "no-multiple-empty-lines": [`error`, { max: 2 }],
  "no-tabs": `off`,
  "no-trailing-spaces": `error`,
  "no-whitespace-before-property": `error`,
  "nonblock-statement-body-position": `off`,
  "object-curly-newline": [
    `error`,
    {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true }
    }
  ],
  "object-curly-spacing": [`error`, `always`],
  "object-property-newline": [`error`, { allowMultiplePropertiesPerLine: true }],
  "operator-linebreak": `off`,
  "padded-blocks": [`error`, `never`],
  "padding-line-between-statements": `off`,
  quotes: [`error`, `backtick`, { avoidEscape: true }], // Overriden by @typescript-eslint
  "rest-spread-spacing": [`error`, `never`],
  semi: `off`, // Conflicts with Prettier
  "semi-spacing": [`error`, { before: false, after: true }],
  "semi-style": [`error`, `last`],
  "space-before-blocks": `error`,
  "space-before-function-paren": [`error`, { anonymous: `never`, named: `never`, asyncArrow: `always` }], // Overriden by @typescript-eslint
  "space-in-parens": [`error`, `never`],
  "space-infix-ops": [`error`, { int32Hint: false }], // Overriden by @typescript-eslint
  "space-unary-ops": [`error`, { words: true, nonwords: false }],
  "switch-colon-spacing": [`error`, { before: false, after: true }],
  "template-curly-spacing": [`error`, `never`],
  "template-tag-spacing": [`error`, `never`],
  "unicode-bom": `off`,
  "wrap-iife": [`error`, `any`],
  "wrap-regex": `off`,
  "yield-star-spacing": [`error`, { before: false, after: true }],
})

/**
 * Docs: https://github.com/benmosher/eslint-plugin-import  
 * Last Reviewed: v2.25.2
 */
const importPlugin = /** @type {const} */ ({
  /** Helpful warnings */
  "import/export": `error`,
  "import/no-deprecated": `error`,
  "import/no-empty-named-blocks": "warn",
  "import/no-extraneous-dependencies": `off`,
  "import/no-mutable-exports": `error`,
  "import/no-named-as-default": `warn`,
  "import/no-named-as-default-member": `warn`,
  "import/no-unused-modules": `error`,

  /** Module systems */
  "import/no-amd": `off`,
  "import/no-commonjs": `off`,
  "import/no-nodejs-modules": `off`,
  "import/no-import-module-exports": "warn",
  "import/unambiguous": `off`,

  /** Static analysis */
  "import/default": `error`,
  "import/named": `error`,
  "import/namespace": `error`,
  "import/no-absolute-path": `error`,
  "import/no-cycle": `warn`,
  "import/no-dynamic-require": `error`,
  "import/no-internal-modules": `off`,
  "import/no-relative-packages": "warn",
  "import/no-relative-parent-imports": "off",
  "import/no-restricted-paths": `off`,
  "import/no-self-import": `error`,
  "import/no-unresolved": [`error`, { commonjs: true }],
  "import/no-useless-path-segments": [
    `error`,
    {
      noUselessIndex: true
    }
  ],
  "import/no-webpack-loader-syntax": `error`,

  /** Style guide */
  "import/consistent-type-specifier-style": ["error", "prefer-inline"],
  "import/dynamic-import-chunkname": `off`,
  "import/exports-last": `off`,
  "import/extensions": `off`,
  "import/first": [`error`, `absolute-first`],
  "import/group-exports": `off`,
  "import/max-dependencies": `off`,
  "import/newline-after-import": `error`,
  "import/no-anonymous-default-export": `warn`,
  "import/no-default-export": `warn`,
  "import/no-duplicates": `error`,
  "import/no-named-default": `off`,
  "import/no-named-export": `off`,
  "import/no-namespace": `off`,
  "import/no-unassigned-import": `off`,
  "import/order": [
    `error`,
    {
      "newlines-between": `never`,
      groups: [`builtin`, [`internal`, `external`], [`parent`, `sibling`], `index`]
    }
  ],
  "import/prefer-default-export": `off`,
})

/**
 * Docs: https://github.com/xjamundx/eslint-plugin-promise  
 * Last Reviewed: v^6.1.1
 */
const promisePlugin = /** @type {const} */ ({
  "promise/always-return": `error`,
  "promise/avoid-new": `off`,
  "promise/catch-or-return": [`error`, { terminationMethod: [`catch`, `finally`] }],
  "promise/no-callback-in-promise": `warn`,
  "promise/no-multiple-resolved": "error",
  "promise/no-native": `off`,
  "promise/no-nesting": `warn`,
  "promise/no-new-statics": `error`,
  "promise/no-promise-in-callback": `warn`,
  "promise/no-return-in-finally": `error`,
  "promise/no-return-wrap": `error`,
  "promise/param-names": `error`,
  "promise/prefer-await-to-callbacks": `error`,
  "promise/prefer-await-to-then": `error`,
  "promise/valid-params": `error`,
})

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    sourceType: `module`
  },
  env: {
    es2020: true, // sets parserOptions.ecmaVersion to 2020, but also required for usage of certain features like Promise without errors
    node: true // required to avoid getting errors for usage of `module.exports`
  },
  plugins: [
    `eslint-plugin-import`, // https://github.com/benmosher/eslint-plugin-import
    `eslint-plugin-promise` // https://github.com/xjamundx/eslint-plugin-promise
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [`.js`, `.jsx`, `.ts`, `.tsx`, `.json`]
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [`.ts`, `.tsx`]
    }
  },
  ignorePatterns: [`*.js`, `!./src/*.js`],
  /** Last reviewed: ESLint v^8.47.0 */
  rules: {
    ...possibleProblems,
    ...suggestions,
    ...layoutAndFormatting,
    /* --- Plugin Specific Rules ---*/
    ...importPlugin,
    ...promisePlugin
  },
  overrides: [
    {
      files: [`**/*.{spec,test}.{j,t}s?(x)`],
      rules: {
        "no-console": `off`,
        "no-undefined": `off`
      }
    },
    {
      // Storybook uses Default Exports as a convention in story files
      files: [`*.stories.{j,t}s?(x)`],
      rules: {
        "import/no-default-export": `off`,
        "import/no-anonymous-default-export": `off`
      }
    }
  ]
};
