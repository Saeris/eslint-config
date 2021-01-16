const typescriptConfig = {
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: [join(process.cwd(), "/tsconfig-eslint.json")]
  },
  plugins: [
    "@typescript-eslint" // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
  ],
  rules: {
    /**
     * --- Typescript https://github.com/typescript-eslint/typescript-eslint ---
     *
     * Last Reviewed: v^4.10.0
     *
     * -- Supported Rules https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules ---
     */

    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md */
    "@typescript-eslint/adjacent-overload-signatures": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md */
    "@typescript-eslint/array-type": ["error", { defaultOption: `array-simple` }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md */
    "@typescript-eslint/await-thenable": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md */
    "@typescript-eslint/ban-ts-comment": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md */
    "@typescript-eslint/ban-tslint-comment": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md */
    "@typescript-eslint/ban-types": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md */
    "@typescript-eslint/class-literal-property-style": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md */
    "@typescript-eslint/consistent-indexed-object-style": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md */
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "as" }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md */
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md */
    "@typescript-eslint/consistent-type-imports": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md */
    "@typescript-eslint/explicit-function-return-type": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md */
    "@typescript-eslint/explicit-member-accessibility": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md */
    "@typescript-eslint/explicit-module-boundary-types": ["warn"],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md */
    "@typescript-eslint/member-delimiter-style": [
      "off",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        }
      }
    ],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md */
    "@typescript-eslint/member-ordering": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md */
    "@typescript-eslint/method-signature-style": ["off", "property"],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md */
    "@typescript-eslint/naming-convention": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md */
    "@typescript-eslint/no-base-to-string": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md */
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md */
    "@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md */
    "@typescript-eslint/no-dynamic-delete": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md */
    "@typescript-eslint/no-empty-interface": [
      "warn",
      {
        allowSingleExtends: false
      }
    ],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md */
    "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md */
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md */
    "@typescript-eslint/no-extraneous-class": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md */
    "@typescript-eslint/no-floating-promises": ["error", { ignoreIIFE: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md */
    "@typescript-eslint/no-for-in-array": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md */
    "@typescript-eslint/no-implicit-any-catch": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md */
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        ignoreParameters: true,
        ignoreProperties: true
      }
    ],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md */
    "@typescript-eslint/no-invalid-void-type": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md */
    "@typescript-eslint/no-misused-new": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md */
    "@typescript-eslint/no-misused-promises": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md */
    "@typescript-eslint/no-namespace": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md */
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md */
    "@typescript-eslint/no-non-null-assertion": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md */
    "@typescript-eslint/no-parameter-properties": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md */
    "@typescript-eslint/no-require-imports": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md */
    "@typescript-eslint/no-this-alias": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md */
    "@typescript-eslint/no-type-alias": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md */
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md */
    "@typescript-eslint/no-unnecessary-condition": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md */
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md */
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md */
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md */
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md */
    "@typescript-eslint/no-unsafe-assignment": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md */
    "@typescript-eslint/no-unsafe-call": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md */
    "@typescript-eslint/no-unsafe-member-access": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md */
    "@typescript-eslint/no-unsafe-return": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md */
    "@typescript-eslint/no-var-requires": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md */
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md */
    "@typescript-eslint/prefer-as-const": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md */
    "@typescript-eslint/prefer-enum-initializers": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md */
    "@typescript-eslint/prefer-for-of": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md */
    "@typescript-eslint/prefer-function-type": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md */
    "@typescript-eslint/prefer-includes": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md */
    "@typescript-eslint/prefer-literal-enum-member": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md */
    "@typescript-eslint/prefer-namespace-keyword": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md */
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true
      }
    ],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md */
    "@typescript-eslint/prefer-optional-chain": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md */
    "@typescript-eslint/prefer-readonly": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md */
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md */
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md */
    "@typescript-eslint/prefer-regexp-exec": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md */
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md */
    "@typescript-eslint/prefer-ts-expect-error": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md */
    "@typescript-eslint/promise-function-async": [
      "error",
      {
        allowedPromiseNames: ["Thenable"],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true
      }
    ],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md */
    "@typescript-eslint/require-array-sort-compare": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md */
    "@typescript-eslint/restrict-plus-operands": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md */
    "@typescript-eslint/restrict-template-expressions": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md */
    "@typescript-eslint/strict-boolean-expressions": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md */
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md */
    "@typescript-eslint/triple-slash-reference": ["error", { types: "prefer-import" }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md */
    "@typescript-eslint/type-annotation-spacing": "warn",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md */
    "@typescript-eslint/typedef": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md */
    "@typescript-eslint/unbound-method": ["warn", { ignoreStatic: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md */
    "@typescript-eslint/unified-signatures": "off",

    /**
     * -- Extension Rules https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules ---
     */

    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md */
    "@typescript-eslint/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md */
    "@typescript-eslint/comma-dangle": ["error", "never"],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md */
    "@typescript-eslint/comma-spacing": ["error", { before: false, after: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md */
    "@typescript-eslint/default-param-last": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md */
    "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md */
    "@typescript-eslint/func-call-spacing": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md */
    "@typescript-eslint/indent": "off", // Incompatible with Prettier
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md */
    "@typescript-eslint/init-declarations": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md */
    "@typescript-eslint/keyword-spacing": ["error", { before: true, after: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md */
    "@typescript-eslint/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md */
    "@typescript-eslint/no-array-constructor": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md */
    "@typescript-eslint/no-dupe-class-members": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md */
    "@typescript-eslint/no-duplicate-imports": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md */
    "@typescript-eslint/no-empty-function": ["error", { allow: ["arrowFunctions", "constructors"] }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md */
    "@typescript-eslint/no-extra-parens": ["error", "functions"],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md */
    "@typescript-eslint/no-extra-semi": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md */
    "@typescript-eslint/no-implied-eval": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md */
    "@typescript-eslint/no-invalid-this": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md */
    "@typescript-eslint/no-loop-func": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md */
    "@typescript-eslint/no-loss-of-precision": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md */
    "@typescript-eslint/no-magic-numbers": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md */
    "@typescript-eslint/no-redeclare": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md */
    "@typescript-eslint/no-shadow": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md */
    "@typescript-eslint/no-throw-literal": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md */
    "@typescript-eslint/no-unused-expressions": "off",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md */
    "@typescript-eslint/no-unused-vars": ["error", { vars: "local", args: "none", ignoreRestSiblings: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md */
    "@typescript-eslint/no-use-before-define": ["error", { functions: true, classes: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md */
    "@typescript-eslint/no-useless-constructor": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md */
    "@typescript-eslint/quotes": ["error", "backtick", { avoidEscape: true }],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md */
    "@typescript-eslint/require-await": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md */
    "@typescript-eslint/return-await": "error",
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md */
    "@typescript-eslint/semi": "off", // Conflicts with Prettier
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md */
    "@typescript-eslint/space-before-function-paren": [
      "error",
      { anonymous: "never", named: "never", asyncArrow: "always" }
    ],
    /** https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md */
    "@typescript-eslint/space-infix-ops": ["error", { int32Hint: false }]
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        // Each of these rules have an equivalent in @typescript-eslint,
        // so they must be turned off for compatibility
        "brace-style": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "default-param-last": "off",
        "dot-notation": "off",
        "func-call-spacing": "off",
        indent: "off",
        "init-declarations": "off",
        "keyword-spacing": "off",
        "lines-between-class-members": "off",
        "no-array-constructor": "off",
        "no-dupe-class-members": "off",
        "no-duplicate-imports": "off",
        "no-empty-function": "off",
        "no-extra-parens": "off",
        "no-extra-semi": "off",
        "no-implied-eval": "off",
        "no-invalid-this": "off",
        "no-loop-func": "off",
        "no-loss-of-precision": "off",
        "no-magic-numbers": "off",
        "no-redeclare": "off",
        "no-shadow": "off",
        "no-throw-literal": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        quotes: "off",
        "require-await": "off",
        semi: "off",
        "space-before-function-paren": "off",
        "space-infix-ops": "off"
      }
    }
  ]
};

module.exports = typescriptConfig;
