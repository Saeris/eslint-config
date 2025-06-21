import stylistic, { type RuleOptions } from "@stylistic/eslint-plugin";
import type { Linter } from "eslint";

type StylisticRules = {
  [T in keyof RuleOptions]?: Linter.RuleEntry<RuleOptions[T]>;
};

/**
 * Stylistic https://github.com/eslint-stylistic/eslint-stylistic
 *
 * Last Reviewed: v4.4.1
 */
const configStylistic = {
  name: `stylistic`,
  plugins: { "@stylistic": stylistic },
  rules: {
    "@stylistic/array-bracket-newline": `off`, // results in unexpected wrapping behavior
    "@stylistic/array-bracket-spacing": `warn`,
    "@stylistic/array-element-newline": [
      `warn`,
      {
        consistent: true,
        multiline: true
      }
    ],
    "@stylistic/arrow-parens": [`warn`, `always`],
    "@stylistic/arrow-spacing": [
      `warn`,
      {
        before: true,
        after: true
      }
    ],
    "@stylistic/block-spacing": [`warn`, `always`],
    "@stylistic/brace-style": [`warn`, `1tbs`, { allowSingleLine: true }],
    "@stylistic/comma-dangle": [`warn`, `never`],
    "@stylistic/comma-spacing": [
      `warn`,
      {
        before: false,
        after: true
      }
    ],
    "@stylistic/comma-style": [`warn`, `last`],
    "@stylistic/computed-property-spacing": `warn`,
    "@stylistic/curly-newline": `warn`,
    "@stylistic/dot-location": [`warn`, `property`],
    "@stylistic/eol-last": `warn`,
    "@stylistic/function-call-argument-newline": [`warn`, `consistent`],
    "@stylistic/function-call-spacing": `warn`,
    "@stylistic/function-paren-newline": `off`, // results in unexpected wrapping behavior
    "@stylistic/generator-star-spacing": [
      `warn`,
      {
        before: false,
        after: true,
        method: {
          before: true,
          after: false
        }
      }
    ],
    "@stylistic/implicit-arrow-linebreak": `off`,
    "@stylistic/indent": `off`, // conflicts with prettier
    "@stylistic/indent-binary-ops": `off`, // conflicts with prettier
    "@stylistic/jsx-child-element-spacing": `warn`,
    "@stylistic/jsx-closing-bracket-location": [`warn`, `tag-aligned`],
    "@stylistic/jsx-closing-tag-location": [`warn`, `tag-aligned`],
    "@stylistic/jsx-curly-brace-presence": `off`,
    "@stylistic/jsx-curly-newline": `off`,
    "@stylistic/jsx-curly-spacing": [
      `warn`,
      `never`,
      {
        allowMultiline: false,
        spacing: { objectLiterals: `always` }
      }
    ],
    "@stylistic/jsx-equals-spacing": [`warn`, `never`],
    "@stylistic/jsx-first-prop-new-line": [`warn`, `multiline`],
    "@stylistic/jsx-function-call-newline": `off`,
    "@stylistic/jsx-indent-props": [`warn`, 2],
    "@stylistic/jsx-max-props-per-line": `off`,
    "@stylistic/jsx-newline": [
      `warn`,
      {
        prevent: true,
        allowMultilines: true
      }
    ],
    "@stylistic/jsx-one-expression-per-line": [`warn`, { allow: `single-child` }],
    "@stylistic/jsx-pascal-case": `off`,
    "@stylistic/jsx-props-no-multi-spaces": `off`,
    "@stylistic/jsx-quotes": [`warn`, `prefer-double`],
    "@stylistic/jsx-self-closing-comp": [
      `warn`,
      {
        component: true,
        html: true
      }
    ],
    "@stylistic/jsx-sort-props": `off`,
    "@stylistic/jsx-tag-spacing": `warn`,
    "@stylistic/jsx-wrap-multilines": `warn`,
    "@stylistic/key-spacing": `off`,
    "@stylistic/keyword-spacing": [
      `warn`,
      {
        before: true,
        after: true
      }
    ],
    "@stylistic/line-comment-position": `off`,
    "@stylistic/linebreak-style": `off`,
    "@stylistic/lines-around-comment": `off`,
    "@stylistic/lines-between-class-members": [
      `warn`,
      `always`,
      {
        exceptAfterSingleLine: true
      }
    ],
    "@stylistic/max-len": `off`, // results in unexpected wrapping behavior
    "@stylistic/max-statements-per-line": `off`,
    "@stylistic/multiline-ternary": [`warn`, `always-multiline`],
    "@stylistic/new-parens": `warn`,
    "@stylistic/newline-per-chained-call": `off`,
    "@stylistic/no-confusing-arrow": `off`,
    "@stylistic/no-extra-parens": `off`,
    "@stylistic/no-extra-semi": `warn`,
    "@stylistic/no-floating-decimal": `warn`,
    "@stylistic/no-mixed-operators": `off`, // conflicts with prettier
    "@stylistic/no-mixed-spaces-and-tabs": [`warn`, `smart-tabs`],
    "@stylistic/no-multi-spaces": [
      `warn`,
      {
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    "@stylistic/no-multiple-empty-lines": [`warn`, { max: 2 }],
    "@stylistic/no-tabs": `off`,
    "@stylistic/no-trailing-spaces": `warn`,
    "@stylistic/no-whitespace-before-property": `warn`,
    "@stylistic/nonblock-statement-body-position": `off`,
    "@stylistic/object-curly-newline": [
      `warn`,
      {
        ObjectExpression: {
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          multiline: true,
          consistent: true
        }
      }
    ],
    "@stylistic/object-curly-spacing": [`warn`, `always`],
    "@stylistic/object-property-newline": [
      `warn`,
      {
        allowAllPropertiesOnSameLine: false
      }
    ],
    "@stylistic/one-var-declaration-per-line": [`warn`, `initializations`],
    "@stylistic/operator-linebreak": `off`, // conflicts with prettier
    "@stylistic/padded-blocks": [`warn`, `never`],
    "@stylistic/padding-line-between-statements": `off`,
    "@stylistic/quote-props": [`warn`, `as-needed`],
    "@stylistic/quotes": [`warn`, `backtick`, { avoidEscape: true }],
    "@stylistic/rest-spread-spacing": [`warn`, `never`],
    "@stylistic/semi": [`warn`, `always`],
    "@stylistic/semi-spacing": [
      `warn`,
      {
        before: false,
        after: true
      }
    ],
    "@stylistic/semi-style": [`warn`, `last`],
    "@stylistic/space-before-blocks": `warn`,
    "@stylistic/space-before-function-paren": [
      `warn`,
      {
        anonymous: `never`,
        named: `never`,
        asyncArrow: `always`
      }
    ],
    "@stylistic/space-in-parens": [`warn`, `never`],
    "@stylistic/space-infix-ops": [`warn`, { int32Hint: false }],
    "@stylistic/space-unary-ops": [
      `warn`,
      {
        words: true,
        nonwords: false
      }
    ],
    "@stylistic/spaced-comment": [`warn`, `always`, { exceptions: [`?`] }],
    "@stylistic/switch-colon-spacing": [
      `warn`,
      {
        before: false,
        after: true
      }
    ],
    "@stylistic/template-curly-spacing": [`warn`, `never`],
    "@stylistic/template-tag-spacing": [`warn`, `never`],
    "@stylistic/type-annotation-spacing": `warn`,
    "@stylistic/type-generic-spacing": `off`, // conflicts with Prettier
    "@stylistic/type-named-tuple-spacing": `warn`,
    "@stylistic/wrap-iife": [`warn`, `any`],
    "@stylistic/wrap-regex": `off`,
    "@stylistic/yield-star-spacing": [
      `warn`,
      {
        before: false,
        after: true
      }
    ]
  } satisfies StylisticRules
} satisfies Linter.Config;

export default [configStylistic];
