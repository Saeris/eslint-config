// @ts-check

/**
 * Docs: https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
 * Last Reviewed: v^7.33.2
 */
const reactPlugin = /** @type {const} */  ({
  "react/boolean-prop-naming": [`error`, { validateNested: true }],
  "react/button-has-type": `warn`,
  "react/default-props-match-prop-types": `error`,
  "react/destructuring-assignment": [`warn`, `always`, { ignoreClassFields: true }],
  "react/display-name": `warn`,
  "react/forbid-component-props": `off`,
  "react/forbid-dom-props": `off`,
  "react/forbid-elements": `off`,
  "react/forbid-foreign-prop-types": `off`,
  "react/forbid-prop-types": `off`,
  "react/function-component-definition": [
    `error`,
    {
      namedComponents: `arrow-function`,
      unnamedComponents: `arrow-function`
    }
  ],
  "react/hook-use-state": "error",
  "react/iframe-missing-sandbox": "warn",
  "react/jsx-boolean-value": `warn`,
  "react/jsx-child-element-spacing": `warn`,
  "react/jsx-closing-bracket-location": `off`, // Autofixed by Prettier
  "react/jsx-closing-tag-location": `off`, // Autofixed by Prettier
  "react/jsx-curly-brace-presence": `off`,
  "react/jsx-curly-newline": `off`, // Autofixed by Prettier
  "react/jsx-curly-spacing": `off`, // Autofixed by Prettier
  "react/jsx-equals-spacing": `off`, // Autofixed by Prettier
  "react/jsx-filename-extension": [
    `warn`,
    {
      extensions: [`.js`, `.jsx`, `.tsx`]
    }
  ],
  "react/jsx-first-prop-new-line": `off`, // Autofixed by Prettier
  "react/jsx-fragments": [`warn`, `syntax`],
  "react/jsx-handler-names": `warn`,
  "react/jsx-indent": `off`, // Autofixed by Prettier
  "react/jsx-indent-props": `off`, // Autofixed by Prettier
  "react/jsx-key": "warn",
  "react/jsx-max-depth": `off`,
  "react/jsx-max-props-per-line": `off`,
  "react/jsx-newline": `off`, // Autofixed by Prettier
  "react/jsx-no-bind": `warn`,
  "react/jsx-no-comment-textnodes": `off`, // This rule prevents disabling linting rules with comments
  "react/jsx-no-constructed-context-values": "off",
  "react/jsx-no-duplicate-props": `error`,
  "react/jsx-no-leaked-render": "error",
  "react/jsx-no-literals": `off`,
  "react/jsx-no-script-url": `error`,
  "react/jsx-no-target-blank": `error`,
  "react/jsx-no-undef": `off`, // Should be checked by Vanilla ESLint or Typescript
  "react/jsx-no-useless-fragment": `off`, // Autofixed by Prettier
  "react/jsx-one-expression-per-line": `off`,
  "react/jsx-pascal-case": `error`,
  "react/jsx-props-no-multi-spaces": `off`, // Autofixed by Prettier
  "react/jsx-props-no-spreading": `off`,
  "react/jsx-sort-default-props": `off`,
  "react/jsx-sort-props": `off`,
  "react/jsx-space-before-closing": `off`, // Autofixed by Prettier
  "react/jsx-tag-spacing": `off`, // Autofixed by Prettier
  "react/jsx-uses-react": `error`,
  "react/jsx-uses-vars": `error`,
  "react/jsx-wrap-multilines": `off`, // Autofixed by Prettier
  "react/no-access-state-in-setstate": `error`,
  "react/no-adjacent-inline-elements": `off`,
  "react/no-array-index-key": `error`,
  "react/no-children-prop": `error`,
  "react/no-danger": `off`,
  "react/no-danger-with-children": `error`,
  "react/no-deprecated": `error`,
  "react/no-did-mount-set-state": `error`,
  "react/no-did-update-set-state": `error`,
  "react/no-direct-mutation-state": `error`,
  "react/no-find-dom-node": `error`,
  "react/no-invalid-html-attribute": "error",
  "react/no-is-mounted": `error`,
  "react/no-multi-comp": `off`,
  "react/no-namespace": "off",
  "react/no-object-type-as-default-prop": "error",
  "react/no-redundant-should-component-update": `error`,
  "react/no-render-return-value": `error`,
  "react/no-set-state": `off`,
  "react/no-string-refs": `error`,
  "react/no-this-in-sfc": `error`,
  "react/no-typos": `warn`,
  "react/no-unescaped-entities": `off`,
  "react/no-unknown-property": `warn`,
  "react/no-unsafe": `error`,
  "react/no-unstable-nested-components": ["error", { "allowAsProps": true }],
  "react/no-unused-class-component-methods": "warn",
  "react/no-unused-prop-types": `warn`,
  "react/no-unused-state": `warn`,
  "react/no-will-update-set-state": `error`,
  "react/prefer-es6-class": [`error`, `always`],
  "react/prefer-exact-props": "off",
  "react/prefer-read-only-props": `error`,
  "react/prefer-stateless-function": `error`,
  "react/prop-types": `off`,
  "react/react-in-jsx-scope": `off`,
  "react/require-default-props": `warn`,
  "react/require-optimization": `off`,
  "react/require-render-return": `error`,
  "react/self-closing-comp": `error`,
  "react/sort-comp": `off`,
  "react/sort-default-props": "off",
  "react/sort-prop-types": `off`,
  "react/state-in-constructor": `off`,
  "react/static-property-placement": `off`,
  "react/style-prop-object": `error`,
  "react/void-dom-elements-no-children": `error`
})

/**
 * Docs: https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
 * Last Reviewed: v^5.0.0
 */
const hooksPlugin = /** @type {const} */ ({
      "react-hooks/rules-of-hooks": `error`,
      "react-hooks/exhaustive-deps": `warn`,
})

/**
 * Docs: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y  
 * Last Reviewed: v^6.6.0
 */
const jsxA11yPlugin = /** @type {const} */ ({
  "jsx-a11y/alt-text": `error`,
  "jsx-a11y/anchor-ambiguous-text": "off",
  "jsx-a11y/anchor-has-content": `error`,
  "jsx-a11y/anchor-is-valid": `error`,
  "jsx-a11y/aria-activedescendant-has-tabindex": `error`,
  "jsx-a11y/aria-props": `error`,
  "jsx-a11y/aria-proptypes": `error`,
  "jsx-a11y/aria-role": `error`,
  "jsx-a11y/aria-unsupported-elements": `error`,
  "jsx-a11y/autocomplete-valid": `error`,
  "jsx-a11y/click-events-have-key-events": `error`,
  "jsx-a11y/heading-has-content": `error`,
  "jsx-a11y/html-has-lang": `error`,
  "jsx-a11y/iframe-has-title": `error`,
  "jsx-a11y/img-redundant-alt": `error`,
  "jsx-a11y/interactive-supports-focus": `error`,
  "jsx-a11y/label-has-associated-control": `error`,
  "jsx-a11y/lang": `error`,
  "jsx-a11y/media-has-caption": `error`,
  "jsx-a11y/mouse-events-have-key-events": `error`,
  "jsx-a11y/no-access-key": `error`,
  "jsx-a11y/no-aria-hidden-on-focusable": "warn",
  "jsx-a11y/no-autofocus": `error`,
  "jsx-a11y/no-distracting-elements": `error`,
  "jsx-a11y/no-interactive-element-to-noninteractive-role": `error`,
  "jsx-a11y/no-noninteractive-element-interactions": `error`,
  "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
  "jsx-a11y/no-noninteractive-tabindex": `error`,
  "jsx-a11y/no-redundant-roles": `error`,
  "jsx-a11y/no-static-element-interactions": `error`,
  "jsx-a11y/prefer-tag-over-role": "warn",
  "jsx-a11y/role-has-required-aria-props": `error`,
  "jsx-a11y/role-supports-aria-props": `error`,
  "jsx-a11y/scope": `error`,
  "jsx-a11y/tabindex-no-positive": `error`
})

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    sourceType: `module`
  },
  env: {
    browser: true // necessary for window and document globals
  },
  plugins: [
    `eslint-plugin-jsx-a11y`,
    `eslint-plugin-react`,
    `eslint-plugin-react-hooks`
  ],
  settings: {
    react: {
      version: `detect`
    }
  },
  rules: {
    ...reactPlugin,
    ...hooksPlugin,
    ...jsxA11yPlugin
  }
};
