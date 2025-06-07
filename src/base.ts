// @ts-check
import { cwd } from "node:process";
import { parser } from "typescript-eslint";
import { importX, createNodeResolver } from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import pluginPromise from "eslint-plugin-promise";
import type { Linter } from "eslint";
import type { ESLintRules } from "eslint/rules";

/**
 * https://eslint.org/docs/latest/rules/#possible-problems
 */
const possibleProblems = {
  "array-callback-return": [
    `warn`,
    {
      allowImplicit: true,
      checkForEach: true
    }
  ],
  "constructor-super": `error`,
  "for-direction": `error`,
  "getter-return": `error`,
  "no-async-promise-executor": `error`,
  "no-await-in-loop": `error`,
  "no-class-assign": `error`,
  "no-compare-neg-zero": `error`,
  "no-cond-assign": [`error`, `always`],
  "no-const-assign": `error`,
  "no-constant-binary-expression": `error`,
  "no-constant-condition": `warn`,
  "no-constructor-return": `error`,
  "no-control-regex": `error`,
  "no-debugger": `warn`,
  "no-dupe-args": `error`,
  "no-dupe-class-members": `error`, // Enforced by TypeScript
  "no-dupe-else-if": `error`,
  "no-dupe-keys": `error`,
  "no-duplicate-case": `error`,
  "no-duplicate-imports": [`error`, { includeExports: true }],
  "no-empty-character-class": `error`,
  "no-empty-pattern": `error`,
  "no-ex-assign": `error`,
  "no-fallthrough": `error`,
  "no-func-assign": `error`,
  "no-import-assign": `error`,
  "no-inner-declarations": `error`,
  "no-invalid-regexp": `error`,
  "no-irregular-whitespace": `error`,
  "no-loss-of-precision": `error`,
  "no-misleading-character-class": `error`,
  "no-new-native-nonconstructor": `warn`,
  // "no-new-symbol": "error",
  "no-obj-calls": `error`,
  "no-promise-executor-return": `error`,
  "no-prototype-builtins": `error`,
  "no-self-assign": `error`,
  "no-self-compare": `error`,
  "no-setter-return": `error`,
  "no-sparse-arrays": `error`,
  "no-template-curly-in-string": `error`,
  "no-this-before-super": `error`,
  "no-unassigned-vars": `error`,
  "no-undef": `error`,
  "no-unexpected-multiline": `off`,
  "no-unmodified-loop-condition": `warn`,
  "no-unreachable": `error`,
  "no-unreachable-loop": `error`,
  "no-unsafe-finally": `error`,
  "no-unsafe-negation": `error`,
  "no-unsafe-optional-chaining": `error`,
  "no-unused-private-class-members": `warn`,
  "no-unused-vars": `warn`,
  "no-use-before-define": [`error`, { functions: false }],
  "no-useless-assignment": `error`,
  "no-useless-backreference": `error`,
  "require-atomic-updates": `error`,
  "use-isnan": `error`,
  "valid-typeof": `error`
} satisfies Partial<ESLintRules>;

/**
 * https://eslint.org/docs/latest/rules/#suggestions
 */
const suggestions = {
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
  "logical-assignment-operators": [`error`, `always`, { enforceForIfStatements: true }],
  "max-classes-per-file": `off`,
  "max-depth": `off`,
  "max-lines": `off`,
  "max-lines-per-function": `off`,
  "max-nested-callbacks": `off`,
  "max-params": `off`,
  "max-statements": `off`,
  // "multiline-comment-style": `off`,
  "new-cap": [`error`, { newIsCap: true }],
  "no-alert": `error`,
  "no-array-constructor": `off`, // Overriden by @typescript-eslint
  "no-bitwise": [`error`, { allow: [`~`] }],
  "no-caller": `error`,
  "no-case-declarations": `error`,
  "no-confusing-arrow": `off`,
  "no-console": `warn`,
  "no-continue": `error`,
  "no-delete-var": `error`,
  "no-div-regex": `error`,
  "no-else-return": `error`,
  "no-empty": `error`,
  "no-empty-function": [`error`, { allow: [`arrowFunctions`, `constructors`] }], // Overriden by @typescript-eslint
  "no-empty-static-block": `error`,
  "no-eq-null": `error`,
  "no-eval": `error`,
  "no-extend-native": `error`,
  "no-extra-bind": `error`,
  "no-extra-boolean-cast": `error`,
  "no-extra-label": `error`,
  // "no-extra-semi": "error",
  // "no-floating-decimal": `error`,
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
  // "no-mixed-operators": `off`,
  "no-multi-assign": `error`,
  "no-multi-str": `error`,
  "no-negated-condition": `error`,
  "no-nested-ternary": `off`,
  "no-new": `error`,
  "no-new-func": `error`,
  // "no-new-object": `error`,
  "no-new-wrappers": `error`,
  "no-nonoctal-decimal-escape": `error`,
  "no-object-constructor": `error`,
  "no-octal": `error`,
  "no-octal-escape": `error`,
  "no-param-reassign": `error`,
  "no-plusplus": `off`,
  "no-proto": `error`,
  "no-redeclare": `error`, // Overriden by @typescript-eslint
  "no-regex-spaces": `error`,
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
  // "one-var-declaration-per-line": [`error`, `always`],
  "operator-assignment": [`error`, `always`],
  "prefer-arrow-callback": `error`,
  "prefer-const": `off`,
  "prefer-destructuring": `off`,
  "prefer-exponentiation-operator": `error`,
  "prefer-named-capture-group": `warn`,
  "prefer-numeric-literals": `error`,
  "prefer-object-has-own": `error`,
  "prefer-object-spread": `error`,
  "prefer-promise-reject-errors": `error`,
  "prefer-regex-literals": `error`,
  "prefer-rest-params": `error`,
  "prefer-spread": `error`,
  "prefer-template": `error`,
  // "quote-props": [`error`, `as-needed`],
  radix: `error`,
  "require-await": `error`, // Overriden by @typescript-eslint
  "require-unicode-regexp": `off`,
  "require-yield": `error`,
  "sort-imports": `off`,
  "sort-keys": `off`,
  "sort-vars": `off`,
  // "spaced-comment": [`off`, `always`],
  strict: [`error`, `never`],
  "symbol-description": `error`,
  "vars-on-top": `error`,
  yoda: `error`
} satisfies Partial<ESLintRules>;

/**
 * https://eslint.org/docs/latest/rules/#layout--formatting
 */
const layoutAndFormatting = { "unicode-bom": `off` } satisfies Partial<ESLintRules>;

/**
 * ESlint https://github.com/eslint/eslint
 *
 * Last Reviewed: v9.28.0
 *
 */
const configBase = [
  {
    name: `parser`,
    languageOptions: {
      // @ts-expect-error
      parser,
      parserOptions: {
        projectService: { allowDefaultProject: [`*.js`, `*.mjs`, `*.ts`] },
        tsconfigRootDir: cwd()
      }
    }
  },
  {
    name: `base`,
    files: [`**/*.?(m|c)js?(x)`],
    /** Last reviewed: ESLint v^8.47.0 */
    rules: {
      ...possibleProblems,
      ...suggestions,
      ...layoutAndFormatting
    }
  },
  {
    name: `base-test-exceptions`,
    files: [`**/*.{spec,test}.{j,t}s?(x)`],
    rules: {
      "no-console": `off`,
      "no-undefined": `off`
    }
  }
] satisfies Linter.Config[];

/**
 * import-x https://github.com/un-ts/eslint-plugin-import-x
 *
 * Last Reviewed: v4.15.1
 *
 */
const configImport = [
  {
    name: `import-x`,
    // @ts-expect-error
    plugins: { "import-x": importX },
    settings: {
      "import-x/extensions": [`.cjs`, `.mjs`, `.js`, `.jsx`, `.cts`, `.mts`, `.ts`, `.tsx`],
      "import-x/resolver-next": [createTypeScriptImportResolver(), createNodeResolver()]
    },
    rules: {
      // Helpful warnings
      "import-x/export": `error`,
      "import-x/no-deprecated": `error`,
      "import-x/no-empty-named-blocks": `warn`,
      "import-x/no-extraneous-dependencies": `off`,
      "import-x/no-mutable-exports": `error`,
      "import-x/no-named-as-default": `warn`,
      "import-x/no-named-as-default-member": `warn`,
      "import-x/no-unused-modules": `error`,

      // Module systems
      "import-x/no-amd": `off`,
      "import-x/no-commonjs": `off`,
      "import-x/no-nodejs-modules": `off`,
      "import-x/no-import-module-exports": `warn`,
      "import-x/unambiguous": `off`,

      // Static analysis
      "import-x/default": `error`,
      "import-x/named": `error`,
      "import-x/namespace": `error`,
      "import-x/no-absolute-path": `error`,
      "import-x/no-cycle": `warn`,
      "import-x/no-dynamic-require": `error`,
      "import-x/no-internal-modules": `off`,
      "import-x/no-relative-packages": `warn`,
      "import-x/no-relative-parent-imports": `off`,
      "import-x/no-restricted-paths": `off`,
      "import-x/no-self-import": `error`,
      "import-x/no-unresolved": [
        `error`,
        {
          commonjs: true,
          ignore: [`^#.+$`]
        }
      ],
      "import-x/no-useless-path-segments": [`error`, { noUselessIndex: true }],
      "import-x/no-webpack-loader-syntax": `error`,

      // Style guide
      "import-x/consistent-type-specifier-style": `off`,
      "import-x/dynamic-import-chunkname": `off`,
      "import-x/exports-last": `off`,
      "import-x/extensions": `off`,
      "import-x/first": [`error`, `absolute-first`],
      "import-x/group-exports": `off`,
      "import-x/max-dependencies": `off`,
      "import-x/newline-after-import": `error`,
      "import-x/no-anonymous-default-export": `warn`,
      "import-x/no-default-export": `warn`,
      "import-x/no-duplicates": `error`,
      "import-x/no-named-default": `off`,
      "import-x/no-named-export": `off`,
      "import-x/no-namespace": `off`,
      "import-x/no-unassigned-import": `off`,
      "import-x/order": [
        `error`,
        {
          "newlines-between": `never`,
          pathGroups: [
            {
              pattern: `#*`,
              group: `internal`
            },
            {
              pattern: `#*/**`,
              group: `internal`
            }
          ],
          groups: [`builtin`, [`internal`, `external`], [`parent`, `sibling`], `index`]
        }
      ],
      "import-x/prefer-default-export": `off`
    }
  },
  {
    name: `import-x-storybook-exceptions`,
    // Storybook uses Default Exports as a convention in story files
    files: [`*.stories.{j,t}s?(x)`],
    rules: {
      "import-x/no-default-export": `off`,
      "import-x/no-anonymous-default-export": `off`
    }
  },
  {
    name: `import-x-config-exceptions`,
    files: [`*.config.?(m|c){j,t}s`],
    rules: {
      "import-x/no-default-export": `off`,
      "import-x/no-anonymous-default-export": `off`
    }
  }
] satisfies Linter.Config[];

/**
 * promise https://github.com/xjamundx/eslint-plugin-promise
 *
 * Last Reviewed: v7.2.1
 *
 */
const configPromise = {
  name: `promise`,
  plugins: { promise: pluginPromise },
  rules: {
    "promise/always-return": `error`,
    "promise/avoid-new": `off`,
    "promise/catch-or-return": [`error`, { terminationMethod: [`catch`, `finally`] }],
    "promise/no-callback-in-promise": `warn`,
    "promise/no-multiple-resolved": `error`,
    "promise/no-native": `off`,
    "promise/no-nesting": `warn`,
    "promise/no-new-statics": `error`,
    "promise/no-promise-in-callback": `warn`,
    "promise/no-return-in-finally": `error`,
    "promise/no-return-wrap": `error`,
    "promise/param-names": `error`,
    "promise/prefer-await-to-callbacks": `error`,
    "promise/prefer-await-to-then": `error`,
    "promise/valid-params": `error`
  }
} satisfies Linter.Config;

export default [...configBase, configImport, configPromise];
