// @ts-check
import pluginJest from "eslint-plugin-jest";
import globals from "globals";

/**
 * Jest https://github.com/jest-community/eslint-plugin-jest
 *
 * Last Reviewed: v^4.10.0
 *
 * @type {import("eslint").Linter.Config[]}
 */
const configJest = [
  {
    name: `jest`,
    files: [`**/*.{spec,test}.{j,t}s?(x)`],
    languageOptions: { globals: { ...globals.jest } },
    plugins: { jest: pluginJest },
    rules: {
      "jest/consistent-test-it": `error`,
      "jest/expect-expect": [`error`, { assertFunctionNames: [`expect`] }],
      "jest/lowercase-name": `off`,
      "jest/no-alias-methods": `warn`,
      "jest/no-commented-out-tests": `warn`,
      "jest/no-conditional-expect": `warn`,
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
      "jest/no-restricted-matchers": `off`,
      "jest/no-standalone-expect": `error`,
      "jest/no-test-prefixes": `error`,
      "jest/prefer-expect-assertions": `off`,
      "jest/prefer-hooks-on-top": `warn`,
      "jest/prefer-spy-on": `warn`,
      "jest/prefer-strict-equal": `warn`,
      "jest/prefer-to-contain": `warn`,
      "jest/prefer-to-have-length": `warn`,
      "jest/require-to-throw-message": `error`,
      "jest/require-top-level-describe": `error`,
      "jest/valid-expect": `error`,
      "jest/valid-expect-in-promise": `error`,
      "jest/valid-title": `error`
    }
  }
];

export default [configJest];
