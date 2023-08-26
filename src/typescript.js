// @ts-check
const typescriptRules = /** @type {const} */ ({
  "@typescript-eslint/adjacent-overload-signatures": `error`,
  "@typescript-eslint/array-type": [`error`, { default: `array-simple` }],
  "@typescript-eslint/ban-ts-comment": `off`,
  "@typescript-eslint/ban-tslint-comment": `error`,
  "@typescript-eslint/ban-types": `off`,
  "@typescript-eslint/class-literal-property-style": `off`,
  "@typescript-eslint/consistent-generic-constructors": "error",
  "@typescript-eslint/consistent-indexed-object-style": `off`,
  "@typescript-eslint/consistent-type-assertions": [`error`, { assertionStyle: `as` }],
  "@typescript-eslint/consistent-type-definitions": [`error`, `interface`],
  "@typescript-eslint/consistent-type-imports": `error`,
  "@typescript-eslint/explicit-function-return-type": `warn`,
  "@typescript-eslint/explicit-member-accessibility": `off`,
  "@typescript-eslint/explicit-module-boundary-types": [`warn`],
  "@typescript-eslint/member-delimiter-style": [
    `off`,
    {
      multiline: {
        delimiter: `semi`,
        requireLast: true
      },
      singleline: {
        delimiter: `semi`,
        requireLast: false
      }
    }
  ],
  "@typescript-eslint/member-ordering": `off`,
  "@typescript-eslint/method-signature-style": [`off`, `property`],
  "@typescript-eslint/no-confusing-non-null-assertion": `error`,
  "@typescript-eslint/no-duplicate-enum-values": "error",
  "@typescript-eslint/no-dynamic-delete": `warn`,
  "@typescript-eslint/no-empty-interface": [
    `warn`,
    {
      allowSingleExtends: false
    }
  ],
  "@typescript-eslint/no-explicit-any": [`warn`, { ignoreRestArgs: true }],
  "@typescript-eslint/no-extra-non-null-assertion": `error`,
  "@typescript-eslint/no-extraneous-class": `off`,
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-inferrable-types": [
    `warn`,
    {
      ignoreParameters: true,
      ignoreProperties: true
    }
  ],
  "@typescript-eslint/no-invalid-void-type": `warn`,
  "@typescript-eslint/no-misused-new": `error`,
  "@typescript-eslint/no-namespace": [`error`, { allowDeclarations: true, allowDefinitionFiles: true }],
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": `error`,
  "@typescript-eslint/no-non-null-assertion": `off`,
  "@typescript-eslint/no-require-imports": `warn`,
  "@typescript-eslint/no-this-alias": `error`,
  "@typescript-eslint/no-type-alias": `off`,
  "@typescript-eslint/no-unnecessary-type-constraint": `warn`,
  "@typescript-eslint/no-unsafe-declaration-merging": "error",
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/no-var-requires": `off`,
  "@typescript-eslint/parameter-properties": "off",
  "@typescript-eslint/prefer-as-const": `warn`,
  "@typescript-eslint/prefer-enum-initializers": `error`,
  "@typescript-eslint/prefer-for-of": `warn`,
  "@typescript-eslint/prefer-function-type": `off`,
  "@typescript-eslint/prefer-literal-enum-member": `error`,
  "@typescript-eslint/prefer-namespace-keyword": `off`,
  "@typescript-eslint/prefer-ts-expect-error": `warn`,
  "@typescript-eslint/sort-type-constituents": "warn",
  "@typescript-eslint/triple-slash-reference": [`error`, { types: `prefer-import` }],
  "@typescript-eslint/type-annotation-spacing": `warn`,
  "@typescript-eslint/typedef": `off`,
  "@typescript-eslint/unified-signatures": `off`
});

const extensionRules = /** @type {const} */ ({
  "@typescript-eslint/class-methods-use-this": [
    "warn",
    {
      ignoreOverrideMethods: true,
      ignoreClassesThatImplementAnInterface: true
    }
  ],
  "@typescript-eslint/default-param-last": `error`,
  "@typescript-eslint/indent": `off`, // Incompatible with Prettier
  "@typescript-eslint/init-declarations": `off`,
  "@typescript-eslint/no-array-constructor": `off`,
  "@typescript-eslint/no-dupe-class-members": `error`,
  "@typescript-eslint/no-empty-function": [`error`, { allow: [`arrowFunctions`, `constructors`] }],
  "@typescript-eslint/no-extra-semi": `off`,
  "@typescript-eslint/no-invalid-this": `off`,
  "@typescript-eslint/no-loop-func": `error`,
  "@typescript-eslint/no-loss-of-precision": `error`,
  "@typescript-eslint/no-magic-numbers": `off`,
  "@typescript-eslint/no-redeclare": `error`,
  "@typescript-eslint/no-restricted-imports": "off",
  "@typescript-eslint/no-shadow": `error`,
  "@typescript-eslint/no-unused-expressions": `off`,
  "@typescript-eslint/no-unused-vars": [`error`, { vars: `local`, args: `none`, ignoreRestSiblings: true }],
  "@typescript-eslint/no-use-before-define": [`error`, { functions: true, classes: true }],
  "@typescript-eslint/no-useless-constructor": `error`
});

const formattingRules = /** @type {const} */ ({
  "@typescript-eslint/block-spacing": "off",
  "@typescript-eslint/brace-style": "off",
  "comma-dangle": `off`,
  "@typescript-eslint/comma-dangle": [`error`, `never`],
  "comma-spacing": `off`,
  "@typescript-eslint/comma-spacing": [`error`, { before: false, after: true }],
  "func-call-spacing": `off`,
  "@typescript-eslint/func-call-spacing": `error`,
  indent: `off`,
  "@typescript-eslint/indent": `off`,
  "@typescript-eslint/key-spacing": "off",
  "@typescript-eslint/keyword-spacing": "off",
  "@typescript-eslint/lines-around-comment": "off",
  "lines-between-class-members": `off`,
  "@typescript-eslint/lines-between-class-members": [`error`, `always`, { exceptAfterSingleLine: true }],
  "@typescript-eslint/member-delimiter-style": "off",
  "no-extra-parens": `off`,
  "@typescript-eslint/no-extra-parens": [`error`, `functions`],
  "@typescript-eslint/object-curly-spacing": "off",
  "@typescript-eslint/padding-line-between-statements": "off",
  quotes: `off`,
  "@typescript-eslint/quotes": [`error`, `backtick`, { avoidEscape: true }],
  semi: `off`,
  "@typescript-eslint/semi": `off`, // Conflicts with Prettier
  "@typescript-eslint/space-before-blocks": "off",
  "space-before-function-paren": `off`,
  "@typescript-eslint/space-before-function-paren": [
    `error`,
    { anonymous: `never`, named: `never`, asyncArrow: `always` }
  ],
  "space-infix-ops": `off`,
  "@typescript-eslint/space-infix-ops": [`error`, { int32Hint: false }],
  "@typescript-eslint/type-annotation-spacing": "off"
});

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: [`@typescript-eslint/eslint-plugin`],
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
        ...extensionRules,
        ...formattingRules,
        // Each of these rules have an equivalent in @typescript-eslint,
        // so they must be turned off for compatibility
        "default-param-last": `off`,
        "dot-notation": `off`,
        "init-declarations": `off`,
        "no-array-constructor": `off`,
        "no-dupe-class-members": `off`,
        "no-duplicate-imports": `off`,
        "no-empty-function": `off`,
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
        "require-await": `off`
      }
    },
    {
      files: [`**/*.{spec,test}.{j,t}s?(x)`],
      rules: {
        "@typescript-eslint/explicit-function-return-type": `off`
      }
    }
  ]
};
