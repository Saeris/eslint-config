// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: [`jest`],
  env: { "jest/globals": true },
  overrides: [
    {
      files: [`**/*.{spec,test}.{j,t}s?(x)`],
      /**
       * Docs: https://github.com/jest-community/eslint-plugin-jest#rules
       * Last Reviewed: v^27.2.3
       */
      rules: {
        "jest/consistent-test-it": `error`,
        "jest/expect-expect": [
          `error`,
          {
            assertFunctionNames: [`expect`]
          }
        ],
        "jest/max-expects": "off",
        "jest/max-nested-describe": "off",
        "jest/no-alias-methods": `warn`,
        "jest/no-commented-out-tests": `warn`,
        "jest/no-conditional-expect": `warn`,
        "jest/no-conditional-in-test": "warn",
        "jest/no-deprecated-functions": `error`,
        "jest/no-disabled-tests": `warn`,
        "jest/no-done-callback": `error`,
        "jest/no-duplicate-hooks": `error`,
        "jest/no-export": `error`,
        "jest/no-focused-tests": `error`,
        "jest/no-hooks": `off`,
        "jest/no-identical-title": `error`,
        "jest/no-if": `error`,
        "jest/no-interpolation-in-snapshots": `error`,
        "jest/no-jasmine-globals": `error`,
        "jest/no-large-snapshots": [`warn`, { maxSize: 32 }],
        "jest/no-mocks-import": `error`,
        "jest/no-restricted-jest-methods": "off",
        "jest/no-restricted-matchers": `off`,
        "jest/no-standalone-expect": `error`,
        "jest/no-test-prefixes": `error`,
        "jest/no-test-return-statement": "error",
        "jest/no-untyped-mock-factory": "error",
        "jest/prefer-called-with": "warn",
        "jest/prefer-comparison-matcher": "error",
        "jest/prefer-each": "warn",
        "jest/prefer-equality-matcher": "warn",
        "jest/prefer-expect-assertions": `off`,
        "jest/prefer-expect-resolves": "error",
        "jest/prefer-hooks-in-order": "off",
        "jest/prefer-hooks-on-top": `warn`,
        "jest/prefer-lowercase-title": "error",
        "jest/prefer-mock-promise-shorthand": "error",
        "jest/prefer-snapshot-hint": "warn",
        "jest/prefer-spy-on": `warn`,
        "jest/prefer-strict-equal": `warn`,
        "jest/prefer-to-be": "warn",
        "jest/prefer-to-contain": `warn`,
        "jest/prefer-to-have-length": `warn`,
        "jest/prefer-todo": "warn",
        "jest/require-hook": "off",
        "jest/require-to-throw-message": `error`,
        "jest/require-top-level-describe": `error`,
        "jest/valid-describe-callback": "error",
        "jest/valid-expect": `error`,
        "jest/valid-expect-in-promise": `error`,
        "jest/valid-title": `error`
      }
    }
  ]
};
