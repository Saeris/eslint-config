/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require(`fs`);
const path = require(`path`);

const tsProjectDir = [`./tsconfig-eslint.json`, `./tsconfig.eslint.json`, `./tsconfig.json`]
  .map((file) => path.join(process.cwd(), file))
  .filter((file) => fs.existsSync(file)); //?

// More info here: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [require.resolve(`./typescript`)],
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: tsProjectDir
  },
  rules: {
    /** Supported Rules requiring Type Information */

    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md */
    "@typescript-eslint/await-thenable": `error`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md */
    "@typescript-eslint/naming-convention": `off`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md */
    "@typescript-eslint/no-base-to-string": `error`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md */
    "@typescript-eslint/no-confusing-void-expression": [`error`, { ignoreArrowShorthand: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md */
    "@typescript-eslint/no-floating-promises": [`error`, { ignoreIIFE: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md */
    "@typescript-eslint/no-for-in-array": `error`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md */
    "@typescript-eslint/no-misused-promises": `error`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md */
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md */
    "@typescript-eslint/no-unnecessary-condition": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md */
    "@typescript-eslint/no-unnecessary-qualifier": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md */
    "@typescript-eslint/no-unnecessary-type-arguments": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md */
    "@typescript-eslint/no-unnecessary-type-assertion": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md */
    "@typescript-eslint/no-unsafe-assignment": `off`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md */
    "@typescript-eslint/no-unsafe-call": `off`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md */
    "@typescript-eslint/no-unsafe-member-access": `off`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md */
    "@typescript-eslint/no-unsafe-return": `off`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md */
    "@typescript-eslint/non-nullable-type-assertion-style": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md */
    "@typescript-eslint/prefer-includes": `error`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md */
    "@typescript-eslint/prefer-nullish-coalescing": [
      `error`,
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true
      }
    ],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md */
    "@typescript-eslint/prefer-readonly": `off`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md */
    "@typescript-eslint/prefer-readonly-parameter-types": `off`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md */
    "@typescript-eslint/prefer-reduce-type-parameter": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md */
    "@typescript-eslint/prefer-regexp-exec": `error`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md */
    "@typescript-eslint/prefer-string-starts-ends-with": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md */
    "@typescript-eslint/promise-function-async": [
      `error`,
      {
        allowedPromiseNames: [`Thenable`],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true
      }
    ],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md */
    "@typescript-eslint/require-array-sort-compare": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md */
    "@typescript-eslint/restrict-plus-operands": `error`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md */
    "@typescript-eslint/restrict-template-expressions": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md */
    "@typescript-eslint/strict-boolean-expressions": `off`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md */
    "@typescript-eslint/switch-exhaustiveness-check": `warn`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md */
    "@typescript-eslint/unbound-method": [`warn`, { ignoreStatic: true }],

    /** Extension Rules requiring type information */

    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md */
    "@typescript-eslint/dot-notation": [`error`, { allowKeywords: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md */
    "@typescript-eslint/no-implied-eval": `error`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md */
    "@typescript-eslint/no-throw-literal": `error`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md */
    "@typescript-eslint/require-await": `error`,
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md */
    "@typescript-eslint/return-await": `error`
  }
};
