// @ts-check
import { plugin } from "typescript-eslint";

const stylistic = {
  "@typescript-eslint/adjacent-overload-signatures": `error`,
  "@typescript-eslint/array-type": [`error`, { default: `array-simple` }],
  "@typescript-eslint/ban-tslint-comment": `error`,
  "@typescript-eslint/class-literal-property-style": `off`,
  "@typescript-eslint/consistent-generic-constructors": `error`,
  "@typescript-eslint/consistent-indexed-object-style": `off`,
  "@typescript-eslint/consistent-type-assertions": [`error`, { assertionStyle: `as` }],
  "@typescript-eslint/consistent-type-definitions": [`error`, `interface`],
  "@typescript-eslint/no-confusing-non-null-assertion": `error`,
  "@typescript-eslint/no-inferrable-types": [
    `warn`,
    {
      ignoreParameters: true,
      ignoreProperties: true
    }
  ],
  "@typescript-eslint/prefer-for-of": `warn`,
  "@typescript-eslint/prefer-function-type": `off`
};

const typescriptRules = {
  "@typescript-eslint/ban-ts-comment": `off`,
  "@typescript-eslint/consistent-type-imports": `error`,
  "@typescript-eslint/explicit-function-return-type": `warn`,
  "@typescript-eslint/explicit-member-accessibility": `off`,
  "@typescript-eslint/explicit-module-boundary-types": [`warn`],
  "@typescript-eslint/member-ordering": `off`,
  "@typescript-eslint/method-signature-style": [`off`, `property`],
  "@typescript-eslint/no-duplicate-enum-values": `error`,
  "@typescript-eslint/no-dynamic-delete": `warn`,
  // "@typescript-eslint/no-empty-interface": [`warn`, { allowSingleExtends: false }],
  "@typescript-eslint/no-empty-object-type": [`warn`, { allowInterfaces: `with-single-extends` }],
  "@typescript-eslint/no-explicit-any": [`warn`, { ignoreRestArgs: true }],
  "@typescript-eslint/no-extra-non-null-assertion": `error`,
  "@typescript-eslint/no-extraneous-class": `off`,
  "@typescript-eslint/no-import-type-side-effects": `error`,
  "@typescript-eslint/no-invalid-void-type": `warn`,
  "@typescript-eslint/no-misused-new": `error`,
  "@typescript-eslint/no-namespace": [
    `error`,
    {
      allowDeclarations: true,
      allowDefinitionFiles: true
    }
  ],
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": `error`,
  "@typescript-eslint/no-non-null-asserted-optional-chain": `error`,
  "@typescript-eslint/no-non-null-assertion": `off`,
  "@typescript-eslint/no-require-imports": `warn`,
  "@typescript-eslint/no-restricted-types": `off`,
  "@typescript-eslint/no-this-alias": `error`,
  // "@typescript-eslint/no-type-alias": `off`,
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": `warn`,
  "@typescript-eslint/no-unnecessary-type-constraint": `warn`,
  "@typescript-eslint/no-unsafe-declaration-merging": `error`,
  "@typescript-eslint/no-unsafe-function-type": `error`,
  "@typescript-eslint/no-useless-empty-export": `error`,
  // "@typescript-eslint/no-var-requires": `off`,
  "@typescript-eslint/no-wrapper-object-types": `warn`,
  "@typescript-eslint/parameter-properties": `off`,
  "@typescript-eslint/prefer-as-const": `warn`,
  "@typescript-eslint/prefer-enum-initializers": `error`,
  "@typescript-eslint/prefer-literal-enum-member": `error`,
  "@typescript-eslint/prefer-namespace-keyword": `off`,
  // "@typescript-eslint/prefer-ts-expect-error": `warn`,
  // "@typescript-eslint/sort-type-constituents": "warn",
  "@typescript-eslint/triple-slash-reference": [`error`, { types: `prefer-import` }],
  // "@typescript-eslint/typedef": `off`,
  "@typescript-eslint/unified-signatures": `off`
};

const extensionRules = {
  "class-methods-use-this": `off`,
  "@typescript-eslint/class-methods-use-this": [
    `warn`,
    {
      ignoreOverrideMethods: true,
      ignoreClassesThatImplementAnInterface: `public-fields`
    }
  ],
  "default-param-last": `off`,
  "@typescript-eslint/default-param-last": `error`,
  "init-declarations": `off`,
  "@typescript-eslint/init-declarations": `off`,
  "max-params": `off`,
  "@typescript-eslint/max-params": `error`,
  "no-array-constructor": `off`,
  "@typescript-eslint/no-array-constructor": `off`,
  "no-dupe-class-members": `off`,
  "@typescript-eslint/no-dupe-class-members": `error`,
  "no-invalid-this": `off`,
  "@typescript-eslint/no-invalid-this": `off`,
  "no-loop-func": `off`,
  "@typescript-eslint/no-loop-func": `error`,
  // "no-loss-of-precision": "off",
  // "@typescript-eslint/no-loss-of-precision": `error`,
  "no-magic-numbers": `off`,
  "@typescript-eslint/no-magic-numbers": `off`,
  "no-redeclare": `off`,
  "@typescript-eslint/no-redeclare": `error`,
  "no-restricted-imports": `off`,
  "@typescript-eslint/no-restricted-imports": `off`,
  "no-shadow": `off`,
  "@typescript-eslint/no-shadow": `error`,
  "no-unused-expressions": `off`,
  "@typescript-eslint/no-unused-expressions": `off`,
  "no-unused-vars": `off`,
  "@typescript-eslint/no-unused-vars": [
    `error`,
    {
      vars: `local`,
      args: `none`,
      ignoreRestSiblings: true
    }
  ],
  "no-use-before-define": `off`,
  "@typescript-eslint/no-use-before-define": [
    `error`,
    {
      functions: true,
      classes: true
    }
  ],
  "no-useless-constructor": `off`,
  "@typescript-eslint/no-useless-constructor": `error`
};

/**
 * Each of these rules have an equivalent in @typescript-eslint,
 * so they must be turned off for compatibility
 *
 * @satisfies {import("eslint").Linter.Config}
 */
const configBaseOverrides = {
  name: `typescript-base-exceptions`,
  files: [`**/*.ts?(x)`],
  rules: {
    //
    "brace-style": `off`,
    "comma-dangle": `off`,
    "comma-spacing": `off`,
    "default-param-last": `off`,
    "dot-notation": `off`,
    "func-call-spacing": `off`,
    indent: `off`,
    "init-declarations": `off`,
    "keyword-spacing": `off`,
    "lines-between-class-members": `off`,
    "no-array-constructor": `off`,
    "no-dupe-class-members": `off`,
    "no-duplicate-imports": `off`,
    "no-empty-function": `off`,
    "no-extra-parens": `off`,
    "no-extra-semi": `off`,
    "no-implied-eval": `off`,
    "no-invalid-this": `off`,
    "no-loop-func": `off`,
    "no-loss-of-precision": `off`,
    "no-magic-numbers": `off`,
    "no-redeclare": `off`,
    "no-shadow": `off`,
    "no-throw-literal": `off`,
    "no-unused-expressions": `off`,
    "no-unused-vars": `off`,
    "no-use-before-define": `off`,
    "no-useless-constructor": `off`,
    quotes: `off`,
    "require-await": `off`,
    semi: `off`,
    "space-before-function-paren": `off`,
    "space-infix-ops": `off`
  }
};

/**
 * Typescript https://github.com/typescript-eslint/typescript-eslint
 *
 * Last Reviewed: v8.33.1
 *
 */
const configTypescript = {
  name: `typescript`,
  files: [`**/*.?(m|c)ts?(x)`],
  plugins: { "@typescript-eslint": plugin },
  rules: {
    ...stylistic,
    ...typescriptRules,
    ...extensionRules
  }
};

/**
 * For tests we don't care about function return types
 */
const configTestOverides = {
  name: `typescript-test-exceptions`,
  files: [`**/*.{spec,test}.{j,t}s?(x)`],
  rules: { "@typescript-eslint/explicit-function-return-type": `off` }
};

export default [configTypescript, configBaseOverrides, configTestOverides];
