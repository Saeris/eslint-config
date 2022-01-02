// @ts-check

/**
 * @type {import("eslint").Linter.Config}
 */
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
  /** Last reviewed: ESLint v^7.15.0 */
  rules: {
    // --- Possible Errors https://eslint.org/docs/rules/#possible-errors ---

    /** https://eslint.org/docs/rules/for-direction */
    "for-direction": `error`,
    /** https://eslint.org/docs/rules/getter-return */
    "getter-return": `error`,
    /** https://eslint.org/docs/rules/no-async-promise-executor */
    "no-async-promise-executor": `error`,
    /** https://eslint.org/docs/rules/no-await-in-loop */
    "no-await-in-loop": `error`,
    /** https://eslint.org/docs/rules/no-compare-neg-zero */
    "no-compare-neg-zero": `error`,
    /** https://eslint.org/docs/rules/no-cond-assign */
    "no-cond-assign": [`error`, `always`],
    /** https://eslint.org/docs/rules/no-console */
    "no-console": `error`,
    /** https://eslint.org/docs/rules/no-constant-condition */
    "no-constant-condition": `warn`,
    /** https://eslint.org/docs/rules/no-control-regex */
    "no-control-regex": `error`,
    /** https://eslint.org/docs/rules/no-debugger */
    "no-debugger": `warn`,
    /** https://eslint.org/docs/rules/no-dupe-args */
    "no-dupe-args": `error`,
    /** https://eslint.org/docs/rules/no-dupe-else-if */
    "no-dupe-else-if": `error`,
    /** https://eslint.org/docs/rules/no-dupe-keys */
    "no-dupe-keys": `error`,
    /** https://eslint.org/docs/rules/no-duplicate-case */
    "no-duplicate-case": `error`,
    /** https://eslint.org/docs/rules/no-empty */
    "no-empty": `error`,
    /** https://eslint.org/docs/rules/no-empty-character-class */
    "no-empty-character-class": `error`,
    /** https://eslint.org/docs/rules/no-ex-assign */
    "no-ex-assign": `error`,
    /** https://eslint.org/docs/rules/no-extra-boolean-cast */
    "no-extra-boolean-cast": `error`,
    /** https://eslint.org/docs/rules/no-extra-parens */
    "no-extra-parens": [`error`, `functions`], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-extra-semi */
    "no-extra-semi": `off`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-func-assign */
    "no-func-assign": `error`,
    /** https://eslint.org/docs/rules/no-import-assign */
    "no-import-assign": `error`,
    /** https://eslint.org/docs/rules/no-inner-declarations */
    "no-inner-declarations": `error`,
    /** https://eslint.org/docs/rules/no-invalid-regexp */
    "no-invalid-regexp": `error`,
    /** https://eslint.org/docs/rules/no-irregular-whitespace */
    "no-irregular-whitespace": `error`,
    /** https://eslint.org/docs/rules/no-loss-of-precision */
    "no-loss-of-precision": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-misleading-character-class */
    "no-misleading-character-class": `error`,
    /** https://eslint.org/docs/rules/no-obj-calls */
    "no-obj-calls": `error`,
    /** https://eslint.org/docs/rules/no-promise-executor-return */
    "no-promise-executor-return": `error`,
    /** https://eslint.org/docs/rules/no-prototype-builtins */
    "no-prototype-builtins": `error`,
    /** https://eslint.org/docs/rules/no-regex-spaces */
    "no-regex-spaces": `error`,
    /** https://eslint.org/docs/rules/no-setter-return */
    "no-setter-return": `error`,
    /** https://eslint.org/docs/rules/no-sparse-arrays */
    "no-sparse-arrays": `error`,
    /** https://eslint.org/docs/rules/no-template-curly-in-string */
    "no-template-curly-in-string": `error`,
    /** https://eslint.org/docs/rules/no-unexpected-multiline */
    "no-unexpected-multiline": `off`,
    /** https://eslint.org/docs/rules/no-unreachable */
    "no-unreachable": `error`,
    /** https://eslint.org/docs/rules/no-unreachable-loop */
    "no-unreachable-loop": `error`,
    /** https://eslint.org/docs/rules/no-unsafe-finally */
    "no-unsafe-finally": `error`,
    /** https://eslint.org/docs/rules/no-unsafe-negation */
    "no-unsafe-negation": `error`,
    /** https://eslint.org/docs/rules/no-unsafe-optional-chaining */
    "no-unsafe-optional-chaining": `error`,
    /** https://eslint.org/docs/rules/no-useless-backreference */
    "no-useless-backreference": `error`,
    /** https://eslint.org/docs/rules/require-atomic-updates */
    "require-atomic-updates": `error`,
    /** https://eslint.org/docs/rules/use-isnan */
    "use-isnan": `error`,
    /** https://eslint.org/docs/rules/valid-typeof */
    "valid-typeof": `error`,

    // --- Best Practices https://eslint.org/docs/rules/#best-practices ---

    /** https://eslint.org/docs/rules/accessor-pairs */
    "accessor-pairs": `error`,
    /** https://eslint.org/docs/rules/array-callback-return */
    "array-callback-return": `warn`,
    /** https://eslint.org/docs/rules/block-scoped-var */
    "block-scoped-var": `error`,
    /** https://eslint.org/docs/rules/class-methods-use-this */
    "class-methods-use-this": `off`,
    /** https://eslint.org/docs/rules/complexity */
    complexity: `off`,
    /** https://eslint.org/docs/rules/consistent-return */
    "consistent-return": `off`,
    /** https://eslint.org/docs/rules/curly */
    curly: [`error`, `multi-line`],
    /** https://eslint.org/docs/rules/default-case */
    "default-case": `error`,
    /** https://eslint.org/docs/rules/default-case-last */
    "default-case-last": `error`,
    /** https://eslint.org/docs/rules/default-param-last */
    "default-param-last": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/dot-location */
    "dot-location": [`error`, `property`],
    /** https://eslint.org/docs/rules/dot-notation */
    "dot-notation": [`error`, { allowKeywords: true }], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/eqeqeq */
    eqeqeq: [`error`, `smart`],
    /** https://eslint.org/docs/rules/grouped-accessor-pairs */
    "grouped-accessor-pairs": `error`,
    /** https://eslint.org/docs/rules/guard-for-in */
    "guard-for-in": `error`,
    /** https://eslint.org/docs/rules/max-classes-per-file */
    "max-classes-per-file": `off`,
    /** https://eslint.org/docs/rules/no-alert */
    "no-alert": `error`,
    /** https://eslint.org/docs/rules/no-caller */
    "no-caller": `error`,
    /** https://eslint.org/docs/rules/no-case-declarations */
    "no-case-declarations": `error`,
    /** https://eslint.org/docs/rules/no-constructor-return */
    "no-constructor-return": `error`,
    /** https://eslint.org/docs/rules/no-div-regex */
    "no-div-regex": `error`,
    /** https://eslint.org/docs/rules/no-else-return */
    "no-else-return": `error`,
    /** https://eslint.org/docs/rules/no-empty-function */
    "no-empty-function": [`error`, { allow: [`arrowFunctions`, `constructors`] }], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-empty-pattern */
    "no-empty-pattern": `error`,
    /** https://eslint.org/docs/rules/no-eq-null */
    "no-eq-null": `error`,
    /** https://eslint.org/docs/rules/no-eval */
    "no-eval": `error`,
    /** https://eslint.org/docs/rules/no-extend-native */
    "no-extend-native": `error`,
    /** https://eslint.org/docs/rules/no-extra-bind */
    "no-extra-bind": `error`,
    /** https://eslint.org/docs/rules/no-extra-label */
    "no-extra-label": `error`,
    /** https://eslint.org/docs/rules/no-fallthrough */
    "no-fallthrough": `error`,
    /** https://eslint.org/docs/rules/no-floating-decimal */
    "no-floating-decimal": `error`,
    /** https://eslint.org/docs/rules/no-global-assign */
    "no-global-assign": `error`,
    /** https://eslint.org/docs/rules/no-implicit-coercion */
    "no-implicit-coercion": `off`,
    /** https://eslint.org/docs/rules/no-implicit-globals */
    "no-implicit-globals": `off`,
    /** https://eslint.org/docs/rules/no-implied-eval */
    "no-implied-eval": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-invalid-this */
    "no-invalid-this": `off`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-iterator */
    "no-iterator": `error`,
    /** https://eslint.org/docs/rules/no-labels */
    "no-labels": `error`,
    /** https://eslint.org/docs/rules/no-lone-blocks */
    "no-lone-blocks": `error`,
    /** https://eslint.org/docs/rules/no-loop-func */
    "no-loop-func": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-magic-numbers */
    "no-magic-numbers": `off`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-multi-spaces */
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
    /** https://eslint.org/docs/rules/no-multi-str */
    "no-multi-str": `error`,
    /** https://eslint.org/docs/rules/no-new */
    "no-new": `error`,
    /** https://eslint.org/docs/rules/no-new-func */
    "no-new-func": `error`,
    /** https://eslint.org/docs/rules/no-new-wrappers */
    "no-new-wrappers": `error`,
    /** https://eslint.org/docs/rules/no-nonoctal-decimal-escape */
    "no-nonoctal-decimal-escape": `error`,
    /** https://eslint.org/docs/rules/no-octal */
    "no-octal": `error`,
    /** https://eslint.org/docs/rules/no-octal-escape */
    "no-octal-escape": `error`,
    /** https://eslint.org/docs/rules/no-param-reassign */
    "no-param-reassign": `error`,
    /** https://eslint.org/docs/rules/no-proto */
    "no-proto": `error`,
    /** https://eslint.org/docs/rules/no-redeclare */
    "no-redeclare": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-restricted-properties */
    "no-restricted-properties": `off`,
    /** https://eslint.org/docs/rules/no-return-assign */
    "no-return-assign": [`error`, `always`],
    /** https://eslint.org/docs/rules/no-return-await */
    "no-return-await": `off`, // Conflicts with @typescript-eslint
    /** https://eslint.org/docs/rules/no-script-url */
    "no-script-url": `error`,
    /** https://eslint.org/docs/rules/no-self-assign */
    "no-self-assign": [`error`, { props: true }],
    /** https://eslint.org/docs/rules/no-self-compare */
    "no-self-compare": `error`,
    /** https://eslint.org/docs/rules/no-sequences */
    "no-sequences": `error`,
    /** https://eslint.org/docs/rules/no-throw-literal */
    "no-throw-literal": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-unmodified-loop-condition */
    "no-unmodified-loop-condition": `error`,
    /** https://eslint.org/docs/rules/no-unused-expressions */
    "no-unused-expressions": `off`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-unused-labels */
    "no-unused-labels": `error`,
    /** https://eslint.org/docs/rules/no-useless-call */
    "no-useless-call": `error`,
    /** https://eslint.org/docs/rules/no-useless-catch */
    "no-useless-catch": `error`,
    /** https://eslint.org/docs/rules/no-useless-concat */
    "no-useless-concat": `error`,
    /** https://eslint.org/docs/rules/no-useless-escape */
    "no-useless-escape": `error`,
    /** https://eslint.org/docs/rules/no-useless-return */
    "no-useless-return": `error`,
    /** https://eslint.org/docs/rules/no-void */
    "no-void": [`error`, { allowAsStatement: true }],
    /** https://eslint.org/docs/rules/no-warning-comments */
    "no-warning-comments": `off`,
    /** https://eslint.org/docs/rules/no-with */
    "no-with": `error`,
    /** https://eslint.org/docs/rules/prefer-named-capture-group */
    "prefer-named-capture-group": `warn`,
    /** https://eslint.org/docs/rules/prefer-promise-reject-errors */
    "prefer-promise-reject-errors": `error`,
    /** https://eslint.org/docs/rules/prefer-regex-literals */
    "prefer-regex-literals": `error`,
    /** https://eslint.org/docs/rules/radix */
    radix: `error`,
    /** https://eslint.org/docs/rules/require-await */
    "require-await": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/require-unicode-regexp */
    "require-unicode-regexp": `off`,
    /** https://eslint.org/docs/rules/vars-on-top */
    "vars-on-top": `error`,
    /** https://eslint.org/docs/rules/wrap-iife */
    "wrap-iife": [`error`, `any`],
    /** https://eslint.org/docs/rules/yoda */
    yoda: `error`,

    // --- Strict Mode https://eslint.org/docs/rules/#strict-mode ---

    /** https://eslint.org/docs/rules/strict */
    strict: [`error`, `never`],

    // --- Variables https://eslint.org/docs/rules/#variables ---

    /** https://eslint.org/docs/rules/init-declarations */
    "init-declarations": `off`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-delete-var */
    "no-delete-var": `error`,
    /** https://eslint.org/docs/rules/no-label-var */
    "no-label-var": `error`,
    /** https://eslint.org/docs/rules/no-restricted-globals */
    "no-restricted-globals": `off`,
    /** https://eslint.org/docs/rules/no-shadow */
    "no-shadow": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-shadow-restricted-names */
    "no-shadow-restricted-names": `error`,
    /** https://eslint.org/docs/rules/no-undef */
    "no-undef": `error`,
    /** https://eslint.org/docs/rules/no-undef-init */
    "no-undef-init": `error`,
    /** https://eslint.org/docs/rules/no-undefined */
    "no-undefined": `error`,
    /** https://eslint.org/docs/rules/no-unused-vars */
    "no-unused-vars": [`error`, { vars: `local`, args: `none`, ignoreRestSiblings: true }], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-use-before-define */
    "no-use-before-define": [`error`, { functions: true, classes: true }], // Overriden by @typescript-eslint

    // --- Stylistic Issues https://eslint.org/docs/rules/#stylistic-issues ---
    /** https://eslint.org/docs/rules/array-bracket-newline */
    "array-bracket-newline": [`error`, `consistent`], // Conflicts with Prettier
    /** https://eslint.org/docs/rules/array-bracket-spacing */
    "array-bracket-spacing": `error`,
    /** https://eslint.org/docs/rules/array-element-newline */
    "array-element-newline": `off`,
    /** https://eslint.org/docs/rules/block-spacing */
    "block-spacing": [`error`, `always`],
    /** https://eslint.org/docs/rules/brace-style */
    "brace-style": [`error`, `1tbs`, { allowSingleLine: true }], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/camelcase */
    camelcase: [`error`, { properties: `never` }],
    /** https://eslint.org/docs/rules/capitalized-comments */
    "capitalized-comments": `off`,
    /** https://eslint.org/docs/rules/comma-dangle */
    "comma-dangle": [`error`, `never`], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/comma-spacing */
    "comma-spacing": [`error`, { before: false, after: true }], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/comma-style */
    "comma-style": [`error`, `last`],
    /** https://eslint.org/docs/rules/computed-property-spacing */
    "computed-property-spacing": `error`,
    /** https://eslint.org/docs/rules/consistent-this */
    "consistent-this": `off`,
    /** https://eslint.org/docs/rules/eol-last */
    "eol-last": `error`,
    /** https://eslint.org/docs/rules/func-call-spacing */
    "func-call-spacing": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/func-name-matching */
    "func-name-matching": `off`,
    /** https://eslint.org/docs/rules/func-names */
    "func-names": `off`,
    /** https://eslint.org/docs/rules/func-style */
    "func-style": [`error`, `declaration`, { allowArrowFunctions: true }],
    /** https://eslint.org/docs/rules/function-call-argument-newline */
    "function-call-argument-newline": [`error`, `consistent`],
    /** https://eslint.org/docs/rules/function-paren-newline */
    "function-paren-newline": [`off`, `consistent`],
    /** https://eslint.org/docs/rules/id-denylist */
    "id-denylist": `off`,
    /** https://eslint.org/docs/rules/id-length */
    "id-length": `off`,
    /** https://eslint.org/docs/rules/id-match */
    "id-match": `off`,
    /** https://eslint.org/docs/rules/implicit-arrow-linebreak */
    "implicit-arrow-linebreak": `off`,
    /** https://eslint.org/docs/rules/indent */
    indent: `off`, // Incompatible with Prettier
    /** https://eslint.org/docs/rules/jsx-quotes */
    "jsx-quotes": [`error`, `prefer-double`],
    /** https://eslint.org/docs/rules/key-spacing */
    "key-spacing": `off`,
    /** https://eslint.org/docs/rules/keyword-spacing */
    "keyword-spacing": [`error`, { before: true, after: true }], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/line-comment-position */
    "line-comment-position": `off`,
    /** https://eslint.org/docs/rules/linebreak-style */
    "linebreak-style": `off`,
    /** https://eslint.org/docs/rules/lines-around-comment */
    "lines-around-comment": `off`,
    /** https://eslint.org/docs/rules/lines-between-class-members */
    "lines-between-class-members": [`error`, `always`, { exceptAfterSingleLine: true }], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/max-depth */
    "max-depth": `off`,
    /** https://eslint.org/docs/rules/max-len */
    "max-len": `off`,
    /** https://eslint.org/docs/rules/max-lines */
    "max-lines": `off`,
    /** https://eslint.org/docs/rules/max-lines-per-function */
    "max-lines-per-function": `off`,
    /** https://eslint.org/docs/rules/max-nested-callbacks */
    "max-nested-callbacks": `off`,
    /** https://eslint.org/docs/rules/max-params */
    "max-params": `off`,
    /** https://eslint.org/docs/rules/max-statements */
    "max-statements": `off`,
    /** https://eslint.org/docs/rules/max-statements-per-line */
    "max-statements-per-line": `off`,
    /** https://eslint.org/docs/rules/multiline-comment-style */
    "multiline-comment-style": `off`,
    /** https://eslint.org/docs/rules/multiline-ternary */
    "multiline-ternary": [`error`, `always-multiline`],
    /** https://eslint.org/docs/rules/new-cap */
    "new-cap": [`error`, { newIsCap: true }],
    /** https://eslint.org/docs/rules/new-parens */
    "new-parens": `error`,
    /** https://eslint.org/docs/rules/newline-per-chained-call */
    "newline-per-chained-call": `off`,
    /** https://eslint.org/docs/rules/no-array-constructor */
    "no-array-constructor": `off`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-bitwise */
    "no-bitwise": [`error`, { allow: [`~`] }],
    /** https://eslint.org/docs/rules/no-continue */
    "no-continue": `error`,
    /** https://eslint.org/docs/rules/no-inline-comments */
    "no-inline-comments": `off`,
    /** https://eslint.org/docs/rules/no-lonely-if */
    "no-lonely-if": `error`,
    /** https://eslint.org/docs/rules/no-mixed-operators */
    "no-mixed-operators": `off`,
    /** https://eslint.org/docs/rules/no-mixed-spaces-and-tabs */
    "no-mixed-spaces-and-tabs": [`error`, `smart-tabs`],
    /** https://eslint.org/docs/rules/no-multi-assign */
    "no-multi-assign": `error`,
    /** https://eslint.org/docs/rules/no-multiple-empty-lines */
    "no-multiple-empty-lines": [`error`, { max: 2 }],
    /** https://eslint.org/docs/rules/no-negated-condition */
    "no-negated-condition": `error`,
    /** https://eslint.org/docs/rules/no-nested-ternary */
    "no-nested-ternary": `off`,
    /** https://eslint.org/docs/rules/no-new-object */
    "no-new-object": `error`,
    /** https://eslint.org/docs/rules/no-plusplus */
    "no-plusplus": `off`,
    /** https://eslint.org/docs/rules/no-restricted-syntax */
    "no-restricted-syntax": `off`,
    /** https://eslint.org/docs/rules/no-tabs */
    "no-tabs": `off`,
    /** https://eslint.org/docs/rules/no-ternary */
    "no-ternary": `off`,
    /** https://eslint.org/docs/rules/no-trailing-spaces */
    "no-trailing-spaces": `error`,
    /** https://eslint.org/docs/rules/no-underscore-dangle */
    "no-underscore-dangle": `off`,
    /** https://eslint.org/docs/rules/no-unneeded-ternary */
    "no-unneeded-ternary": `error`,
    /** https://eslint.org/docs/rules/no-whitespace-before-property */
    "no-whitespace-before-property": `error`,
    /** https://eslint.org/docs/rules/nonblock-statement-body-position */
    "nonblock-statement-body-position": `off`,
    /** https://eslint.org/docs/rules/object-curly-newline */
    "object-curly-newline": [
      `error`,
      {
        ObjectExpression: { consistent: true },
        ObjectPattern: { consistent: true }
      }
    ],
    /** https://eslint.org/docs/rules/object-curly-spacing */
    "object-curly-spacing": [`error`, `always`],
    /** https://eslint.org/docs/rules/object-property-newline */
    "object-property-newline": [`error`, { allowMultiplePropertiesPerLine: true }],
    /** https://eslint.org/docs/rules/one-var */
    "one-var": [`error`, `never`],
    /** https://eslint.org/docs/rules/one-var-declaration-per-line */
    "one-var-declaration-per-line": [`error`, `always`],
    /** https://eslint.org/docs/rules/operator-assignment */
    "operator-assignment": [`error`, `always`],
    /** https://eslint.org/docs/rules/operator-linebreak */
    "operator-linebreak": `off`,
    /** https://eslint.org/docs/rules/padded-blocks */
    "padded-blocks": [`error`, `never`],
    /** https://eslint.org/docs/rules/padding-line-between-statements */
    "padding-line-between-statements": `off`,
    /** https://eslint.org/docs/rules/prefer-exponentiation-operator */
    "prefer-exponentiation-operator": `error`,
    /** https://eslint.org/docs/rules/prefer-object-spread */
    "prefer-object-spread": `error`,
    /** https://eslint.org/docs/rules/quote-props */
    "quote-props": [`error`, `as-needed`],
    /** https://eslint.org/docs/rules/quotes */
    quotes: [`error`, `backtick`, { avoidEscape: true }], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/semi */
    semi: `off`, // Conflicts with Prettier
    /** https://eslint.org/docs/rules/semi-spacing */
    "semi-spacing": [`error`, { before: false, after: true }],
    /** https://eslint.org/docs/rules/semi-style */
    "semi-style": [`error`, `last`],
    /** https://eslint.org/docs/rules/sort-keys */
    "sprt-keys": `off`,
    /** https://eslint.org/docs/rules/sort-vars */
    "sort-vars": `off`,
    /** https://eslint.org/docs/rules/space-before-blocks */
    "space-before-blocks": `error`,
    /** https://eslint.org/docs/rules/space-before-function-paren */
    "space-before-function-paren": [`error`, { anonymous: `never`, named: `never`, asyncArrow: `always` }], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/space-in-parens */
    "space-in-parens": [`error`, `never`],
    /** https://eslint.org/docs/rules/space-infix-ops */
    "space-infix-ops": [`error`, { int32Hint: false }], // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/space-unary-ops */
    "space-unary-ops": [`error`, { words: true, nonwords: false }],
    /** https://eslint.org/docs/rules/spaced-comment */
    "spaced-comment": [`off`, `always`, { plugins: [`react`], exceptions: [`*`], markers: [`*`] }],
    /** https://eslint.org/docs/rules/switch-colon-spacing */
    "switch-colon-spacing": [`error`, { before: false, after: true }],
    /** https://eslint.org/docs/rules/template-tag-spacing */
    "template-tag-spacing": [`error`, `never`],
    /** https://eslint.org/docs/rules/unicode-bom */
    "unicode-bom": `off`,
    /** https://eslint.org/docs/rules/wrap-regex */
    "wrap-regex": `off`,

    // --- ECMAScript 6 https://eslint.org/docs/rules/#ecmascript-6 ---

    /** https://eslint.org/docs/rules/arrow-body-style */
    "arrow-body-style": [`error`, `as-needed`],
    /** https://eslint.org/docs/rules/arrow-parens */
    "arrow-parens": [`error`, `always`],
    /** https://eslint.org/docs/rules/arrow-spacing */
    "arrow-spacing": [`error`, { before: true, after: true }],
    /** https://eslint.org/docs/rules/constructor-super */
    "constructor-super": `off`,
    /** https://eslint.org/docs/rules/generator-star-spacing */
    "generator-star-spacing": [`error`, { before: true, after: false }],
    /** https://eslint.org/docs/rules/no-class-assign */
    "no-class-assign": `error`,
    /** https://eslint.org/docs/rules/no-confusing-arrow */
    "no-confusing-arrow": `off`,
    /** https://eslint.org/docs/rules/no-const-assign */
    "no-const-assign": `error`,
    /** https://eslint.org/docs/rules/no-dupe-class-members */
    "no-dupe-class-members": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-duplicate-imports */
    "no-duplicate-imports": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-new-symbol */
    "no-new-symbol": `error`,
    /** https://eslint.org/docs/rules/no-restricted-exports */
    "no-restricted-exports": `off`,
    /** https://eslint.org/docs/rules/no-restricted-imports */
    "no-restricted-imports": `off`,
    /** https://eslint.org/docs/rules/no-this-before-super */
    "no-this-before-super": `error`,
    /** https://eslint.org/docs/rules/no-useless-computed-key */
    "no-useless-computed-key": `error`,
    /** https://eslint.org/docs/rules/no-useless-constructor */
    "no-useless-constructor": `error`, // Overriden by @typescript-eslint
    /** https://eslint.org/docs/rules/no-useless-rename */
    "no-useless-rename": `error`,
    /** https://eslint.org/docs/rules/no-var */
    "no-var": `error`,
    /** https://eslint.org/docs/rules/object-shorthand */
    "object-shorthand": [`error`, `properties`],
    /** https://eslint.org/docs/rules/prefer-arrow-callback */
    "prefer-arrow-callback": `error`,
    /** https://eslint.org/docs/rules/prefer-const */
    "prefer-const": `off`,
    /** https://eslint.org/docs/rules/prefer-destructuring */
    "prefer-destructuring": `off`,
    /** https://eslint.org/docs/rules/prefer-numeric-literals */
    "prefer-numeric-literals": `error`,
    /** https://eslint.org/docs/rules/prefer-rest-params */
    "prefer-rest-params": `error`,
    /** https://eslint.org/docs/rules/prefer-spread */
    "prefer-spread": `error`,
    /** https://eslint.org/docs/rules/prefer-template */
    "prefer-template": `error`,
    /** https://eslint.org/docs/rules/require-yield */
    "require-yield": `error`,
    /** https://eslint.org/docs/rules/rest-spread-spacing */
    "rest-spread-spacing": [`error`, `never`],
    /** https://eslint.org/docs/rules/sort-imports */
    "sort-imports": `off`,
    /** https://eslint.org/docs/rules/symbol-description */
    "symbol-description": `error`,
    /** https://eslint.org/docs/rules/template-curly-spacing */
    "template-curly-spacing": [`error`, `never`],
    /** https://eslint.org/docs/rules/yield-star-spacing */
    "yield-star-spacing": [`error`, { before: false, after: true }],

    /* --- Plugin Specific Rules ---*/

    /**
     * --- Import https://github.com/benmosher/eslint-plugin-import ---
     *
     * Last Reviewed: v^2.22.0
     *
     * -- Static Analysis https://github.com/benmosher/eslint-plugin-import#static-analysis ---
     */

    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md */
    "import/no-unresolved": [`error`, { commonjs: true }],
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md */
    "import/named": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md */
    "import/default": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md */
    "import/namespace": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md */
    "import/no-restricted-paths": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md */
    "import/no-absolute-path": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md */
    "import/no-dynamic-require": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md */
    "import/no-internal-modules": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md */
    "import/no-webpack-loader-syntax": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md */
    "import/no-self-import": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md */
    "import/no-cycle": `warn`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md */
    "import/no-useless-path-segments": [
      `error`,
      {
        noUselessIndex: true
      }
    ],
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md */
    "import/no-relative-parent-imports": `off`,

    /**
     * Helpful Warnings https://github.com/benmosher/eslint-plugin-import#helpful-warnings
     */

    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md */
    "import/export": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md */
    "import/no-named-as-default": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md */
    "import/no-named-as-default-member": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md */
    "import/no-deprecated": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md */
    "import/no-extraneous-dependencies": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md */
    "import/no-mutable-exports": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md */
    "import/no-unused-modules": `error`,

    /**
     * Module Systems https://github.com/benmosher/eslint-plugin-import#module-systems
     */

    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md */
    "import/unambiguous": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md */
    "import/no-commonjs": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md */
    "import/no-amd": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md */
    "import/no-nodejs-modules": `off`,

    /**
     * Style Guide https://github.com/benmosher/eslint-plugin-import#style-guide
     */

    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md */
    "import/first": [`error`, `absolute-first`],
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md */
    "import/exports-last": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md */
    "import/no-duplicates": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md */
    "import/no-namespace": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md */
    "import/extensions": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md */
    "import/order": [
      `error`,
      {
        "newlines-between": `never`,
        groups: [`builtin`, [`internal`, `external`], [`parent`, `sibling`], `index`]
      }
    ],
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md */
    "import/newline-after-import": `error`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md */
    "import/prefer-default-export": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md */
    "import/max-dependencies": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md */
    "import/no-unassigned-import": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md */
    "import/no-named-default": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md */
    "import/no-default-export": `warn`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md */
    "import/no-named-export": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md */
    "import/no-anonymous-default-export": `warn`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md */
    "import/group-exports": `off`,
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md */
    "import/dynamic-import-chunkname": `off`,

    /**
     * --- Promise https://github.com/xjamundx/eslint-plugin-promise ---
     *
     * Last Reviewed: v^4.2.0
     *
     * -- Rules https://github.com/xjamundx/eslint-plugin-promise#rules ---
     */

    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/catch-or-return.md */
    "promise/catch-or-return": [`error`, { terminationMethod: [`catch`, `finally`] }],
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-return-wrap.md */
    "promise/no-return-wrap": `error`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/param-names.md */
    "promise/param-names": `error`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/always-return.md */
    "promise/always-return": `error`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-native.md */
    "promise/no-native": `off`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-nesting.md */
    "promise/no-nesting": `warn`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-promise-in-callback.md */
    "promise/no-promise-in-callback": `warn`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-callback-in-promise.md */
    "promise/no-callback-in-promise": `warn`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/avoid-new.md */
    "promise/avoid-new": `off`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-new-statics.md */
    "promise/no-new-statics": `error`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-return-in-finally.md */
    "promise/no-return-in-finally": `error`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/valid-params.md */
    "promise/valid-params": `error`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-then.md */
    "promise/prefer-await-to-then": `error`,
    /** https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-callbacks.md */
    "promise/prefer-await-to-callbacks": `error`
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
