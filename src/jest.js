// @ts-check

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    "jest/globals": true // allows usage of jest globals to not error
  },
  plugins: [
    `eslint-plugin-jest` // https://github.com/jest-community/eslint-plugin-jest
  ],
  rules: {
    /**
     * --- Jest https://github.com/jest-community/eslint-plugin-jest ---
     * Last Reviewed: v^4.10.0
     *
     * --- Rules https://github.com/jest-community/eslint-plugin-jest#rules ---
     */

    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md */
    "jest/consistent-test-it": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md */
    "jest/expect-expect": [
      `error`,
      {
        assertFunctionNames: [`expect`]
      }
    ],
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name.md */
    "jest/lowercase-name": `off`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md */
    "jest/no-alias-methods": `warn`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md */
    "jest/no-commented-out-tests": `warn`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-expect.md */
    "jest/no-conditional-expect": `warn`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-deprecated-functions.md */
    "jest/no-deprecated-functions": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md */
    "jest/no-disabled-tests": `warn`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-done-callback.md */
    "jest/no-done-callback": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md */
    "jest/no-duplicate-hooks": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md */
    "jest/no-export": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md */
    "jest/no-focused-tests": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md */
    "jest/no-hooks": `off`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md */
    "jest/no-identical-title": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md */
    "jest/no-if": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md */
    "jest/no-interpolation-in-snapshots": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md */
    "jest/no-jasmine-globals": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md */
    "jest/no-jest-import": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md */
    "jest/no-large-snapshots": [`warn`, { maxSize: 32 }],
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md */
    "jest/no-mocks-import": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-restricted-matchers.md */
    "jest/no-restricted-matchers": `off`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md */
    "jest/no-standalone-expect": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md */
    "jest/no-test-prefixes": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md */
    "jest/prefer-expect-assertions": `off`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md */
    "jest/prefer-hooks-on-top": `warn`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md */
    "jest/prefer-spy-on": `warn`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md */
    "jest/prefer-strict-equal": `warn`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md */
    "jest/prefer-to-contain": `warn`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md */
    "jest/prefer-to-have-length": `warn`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-to-throw-message.md */
    "jest/require-to-throw-message": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md */
    "jest/require-top-level-describe": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md */
    "jest/valid-expect": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md */
    "jest/valid-expect-in-promise": `error`,
    /** https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md */
    "jest/valid-title": `error`
  }
};
