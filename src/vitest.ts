import vitest from "@vitest/eslint-plugin";
import type { Linter } from "eslint";

/**
 * Vitest https://github.com/vitest-dev/eslint-plugin-vitest
 *
 * Last Reviewed: v1.2.1
 */
const vitestConfig = {
  name: `vitest`,
  files: [`**/*.{spec,test}.{j,t}s?(x)`],
  plugins: { vitest },
  rules: {
    "vitest/consistent-test-filename": `off`,
    "vitest/consistent-test-it": `error`,
    "vitest/expect-expect": [
      `error`,
      { assertFunctionNames: [`expect`, `expect*`] }
    ],
    "vitest/max-expects": `off`,
    "vitest/max-nested-describe": `off`,
    "vitest/no-alias-methods": `warn`,
    "vitest/no-commented-out-tests": `warn`,
    "vitest/no-conditional-expect": `warn`,
    "vitest/no-conditional-in-test": `warn`,
    "vitest/no-conditional-tests": `warn`,
    "vitest/no-disabled-tests": `warn`,
    "vitest/no-duplicate-hooks": `error`,
    "vitest/no-focused-tests": `error`,
    "vitest/no-hooks": `off`,
    "vitest/no-identical-title": `error`,
    "vitest/no-import-node-test": `error`,
    "vitest/no-interpolation-in-snapshots": `error`,
    "vitest/no-large-snapshots": [`warn`, { maxSize: 32 }],
    "vitest/no-mocks-import": `error`,
    "vitest/no-restricted-matchers": `off`,
    "vitest/no-restricted-vi-methods": `warn`,
    "vitest/no-standalone-expect": `error`,
    "vitest/no-test-prefixes": `error`,
    "vitest/no-test-return-statement": `error`,
    "vitest/prefer-called-with": `warn`,
    "vitest/prefer-comparison-matcher": `warn`,
    "vitest/prefer-describe-function-title": `off`,
    "vitest/prefer-each": `warn`,
    "vitest/prefer-equality-matcher": `warn`,
    "vitest/prefer-expect-assertions": `off`,
    "vitest/prefer-expect-resolves": `warn`,
    "vitest/prefer-hooks-in-order": `warn`,
    "vitest/prefer-hooks-on-top": `warn`,
    "vitest/prefer-lowercase-title": `warn`,
    "vitest/prefer-mock-promise-shorthand": `warn`,
    "vitest/prefer-snapshot-hint": `warn`,
    "vitest/prefer-spy-on": `warn`,
    "vitest/prefer-strict-boolean-matchers": `warn`,
    "vitest/prefer-strict-equal": `off`, // Situational, sometimes toEqual is needed for potentially missing object keys
    "vitest/prefer-to-be": `off`,
    "vitest/prefer-to-be-falsy": `off`, // conflicts with to-be
    "vitest/prefer-to-be-object": `warn`,
    "vitest/prefer-to-be-truthy": `off`, // conflicts with to-be
    "vitest/prefer-to-contain": `warn`,
    "vitest/prefer-to-have-length": `warn`,
    "vitest/prefer-todo": `warn`,
    "vitest/prefer-vi-mocked": `warn`,
    "vitest/require-local-test-context-for-concurrent-snapshots": `warn`,
    "vitest/require-mock-type-parameters": `warn`,
    "vitest/require-to-throw-message": `off`, // unnecessary
    "vitest/require-top-level-describe": `error`,
    "vitest/valid-describe-callback": `error`,
    "vitest/valid-expect": `error`,
    "vitest/valid-expect-in-promise": `error`,
    "vitest/valid-title": `error`
  }
} satisfies Linter.Config;

export default [vitestConfig];
