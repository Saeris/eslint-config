// @ts-check
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require(`fs`);
const path = require(`path`);

const tsProjectDir = [`./tsconfig-eslint.json`, `./tsconfig.eslint.json`, `./tsconfig.json`]
  .map((file) => path.join(process.cwd(), file))
  .filter((file) => fs.existsSync(file));

const typescriptRules = /** @type {const} */ ({
  "@typescript-eslint/await-thenable": `error`,
  "@typescript-eslint/consistent-type-exports": "off",
  "@typescript-eslint/naming-convention": `off`,
  "@typescript-eslint/no-base-to-string": `error`,
  "@typescript-eslint/no-confusing-void-expression": [`error`, { ignoreArrowShorthand: true }],
  "@typescript-eslint/no-duplicate-type-constituents": "error",
  "@typescript-eslint/no-floating-promises": [`error`, { ignoreIIFE: true }],
  "@typescript-eslint/no-for-in-array": `error`,
  "@typescript-eslint/no-meaningless-void-operator": "error",
  "@typescript-eslint/no-misused-promises": `error`,
  "@typescript-eslint/no-mixed-enums": "error",
  "@typescript-eslint/no-redundant-type-constituents": "error",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": `warn`,
  "@typescript-eslint/no-unnecessary-condition": `warn`,
  "@typescript-eslint/no-unnecessary-qualifier": `warn`,
  "@typescript-eslint/no-unnecessary-type-arguments": `warn`,
  "@typescript-eslint/no-unnecessary-type-assertion": `warn`,
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unsafe-assignment": `off`,
  "@typescript-eslint/no-unsafe-call": `off`,
  "@typescript-eslint/no-unsafe-enum-comparison": "warn",
  "@typescript-eslint/no-unsafe-member-access": `off`,
  "@typescript-eslint/no-unsafe-return": `off`,
  "@typescript-eslint/non-nullable-type-assertion-style": `warn`,
  "@typescript-eslint/prefer-includes": `error`,
  "@typescript-eslint/prefer-nullish-coalescing": [
    `error`,
    {
      ignoreConditionalTests: true,
      ignoreMixedLogicalExpressions: true
    }
  ],
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/prefer-readonly": `off`,
  "@typescript-eslint/prefer-readonly-parameter-types": `off`,
  "@typescript-eslint/prefer-reduce-type-parameter": `warn`,
  "@typescript-eslint/prefer-regexp-exec": "error",
  "@typescript-eslint/prefer-return-this-type": "error",
  "@typescript-eslint/prefer-string-starts-ends-with": `warn`,
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
  "@typescript-eslint/require-array-sort-compare": `warn`,
  "@typescript-eslint/restrict-plus-operands": `error`,
  "@typescript-eslint/restrict-template-expressions": `warn`,
  "@typescript-eslint/strict-boolean-expressions": `off`,
  "@typescript-eslint/switch-exhaustiveness-check": `warn`,
  "@typescript-eslint/unbound-method": [`warn`, { ignoreStatic: true }]
});

const extensionRules = /** @type {const} */ ({
  "@typescript-eslint/dot-notation": [`error`, { allowKeywords: true }],
  "@typescript-eslint/no-implied-eval": `error`,
  "@typescript-eslint/no-throw-literal": `error`,
  "@typescript-eslint/require-await": `error`,
  "@typescript-eslint/return-await": `error`
});

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [require.resolve(`./typescript`)],
  parserOptions: {
    tsProjectDir: process.cwd(),
    project: tsProjectDir[0]
  },
  /**
   * Docs: https://typescript-eslint.io/rules/
   * Last Reviewed: v^6.4.1
   */
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: [`*.ts`, `*.tsx`],
      rules: {
        ...typescriptRules,
        ...extensionRules
      }
    }
  ]
};
