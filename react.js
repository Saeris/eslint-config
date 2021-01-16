module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    sourceType: "module"
  },
  env: {
    browser: true // necessary for window and document globals
  },
  plugins: [
    "jsx-a11y", // https://github.com/evcohen/eslint-plugin-jsx-a11y
    "react", // https://github.com/yannickcr/eslint-plugin-react
    "react-hooks" // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    /**
     * --- React https://github.com/yannickcr/eslint-plugin-react ---
     *
     * Last Reviewed: v^7.21.0
     *
     * -- Supported Rules https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules ---
     */

    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md */
    "react/boolean-prop-naming": ["error", { validateNested: true }],
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md */
    "react/button-has-type": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md */
    "react/default-props-match-prop-types": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md */
    "react/destructuring-assignment": ["warn", "always", { ignoreClassFields: true }],
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md */
    "react/display-name": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md */
    "react/forbid-component-props": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md */
    "react/forbid-dom-props": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md */
    "react/forbid-elements": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md */
    "react/forbid-foreign-prop-types": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md */
    "react/forbid-prop-types": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md */
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md */
    "react/no-access-state-in-setstate": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md */
    "react/no-adjacent-inline-elements": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md */
    "react/no-array-index-key": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md */
    "react/no-children-prop": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md */
    "react/no-danger": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md */
    "react/no-danger-with-children": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md */
    "react/no-deprecated": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md */
    "react/no-did-mount-set-state": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md */
    "react/no-did-update-set-state": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md */
    "react/no-direct-mutation-state": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md */
    "react/no-find-dom-node": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md */
    "react/no-is-mounted": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md */
    "react/no-multi-comp": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md */
    "react/no-redundant-should-component-update": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md */
    "react/no-render-return-value": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md */
    "react/no-set-state": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md */
    "react/no-string-refs": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md */
    "react/no-this-in-sfc": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md */
    "react/no-typos": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md */
    "react/no-unescaped-entities": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md */
    "react/no-unknown-property": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md */
    "react/no-unsafe": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md */
    "react/no-unused-prop-types": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md */
    "react/no-unused-state": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md */
    "react/no-will-update-set-state": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md */
    "react/prefer-es6-class": ["error", "always"],
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md */
    "react/prefer-read-only-props": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md */
    "react/prefer-stateless-function": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md */
    "react/prop-types": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md */
    "react/react-in-jsx-scope": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md */
    "react/require-default-props": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md */
    "react/require-optimization": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md */
    "react/require-render-return": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md */
    "react/self-closing-comp": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md */
    "react/sort-comp": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md */
    "react/sort-prop-types": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md */
    "react/state-in-constructor": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md */
    "react/static-property-placement": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md */
    "react/style-prop-object": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md */
    "react/void-dom-elements-no-children": "error",

    /**
     * JSX Specific Rules https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
     */

    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md */
    "react/jsx-boolean-value": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md */
    "react/jsx-child-element-spacing": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md */
    "react/jsx-closing-bracket-location": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md */
    "react/jsx-closing-tag-location": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md */
    "react/jsx-curly-brace-presence": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md */
    "react/jsx-curly-newline": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md */
    "react/jsx-curly-spacing": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md */
    "react/jsx-equals-spacing": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md */
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".tsx"]
      }
    ],
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md */
    "react/jsx-first-prop-new-line": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md */
    "react/jsx-fragments": ["warn", "syntax"],
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md */
    "react/jsx-handler-names": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md */
    "react/jsx-indent": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md */
    "react/jsx-indent-props": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md */
    //"react/jsx-key": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md */
    "react/jsx-max-depth": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md */
    "react/jsx-max-props-per-line": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md */
    "react/jsx-newline": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md */
    "react/jsx-no-bind": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md */
    "react/jsx-no-comment-textnodes": "off", // This rule prevents disabling linting rules with comments
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md */
    //"react/jsx-no-constructed-context-values": "warn",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md */
    "react/jsx-no-duplicate-props": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md */
    "react/jsx-no-literals": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md */
    "react/jsx-no-script-url": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md */
    "react/jsx-no-target-blank": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md */
    "react/jsx-no-undef": "off", // Tjos should be checked by Vanilla ESLint or Typescript
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md */
    "react/jsx-no-useless-fragment": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md */
    "react/jsx-one-expression-per-line": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md */
    "react/jsx-pascal-case": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md */
    "react/jsx-props-no-multi-spaces": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md */
    "react/jsx-props-no-spreading": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md */
    "react/jsx-sort-default-props": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md */
    "react/jsx-sort-props": "off",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md */
    "react/jsx-space-before-closing": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md */
    "react/jsx-tag-spacing": "off", // Autofixed by Prettier
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md */
    "react/jsx-uses-react": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md */
    "react/jsx-uses-vars": "error",
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md */
    "react/jsx-wrap-multilines": "off", // Autofixed by Prettier

    /**
     * --- React Hooks https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks ---
     *
     * Last Reviewed: v^4.2.0
     */

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    /**
     * --- JSX a11y https://github.com/jsx-eslint/eslint-plugin-jsx-a11y ---
     *
     * Last Reviewed: v^6.4.0
     *
     * --- Supported Rules https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules ---
     */

    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md */
    "jsx-a11y/alt-text": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md */
    "jsx-a11y/anchor-has-content": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md */
    "jsx-a11y/anchor-is-valid": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md */
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md */
    "jsx-a11y/aria-props": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md */
    "jsx-a11y/aria-proptypes": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md */
    "jsx-a11y/aria-role": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md */
    "jsx-a11y/aria-unsupported-elements": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md */
    "jsx-a11y/autocomplete-valid": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md */
    "jsx-a11y/click-events-have-key-events": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md */
    "jsx-a11y/heading-has-content": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md */
    "jsx-a11y/html-has-lang": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md */
    "jsx-a11y/iframe-has-title": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md */
    "jsx-a11y/img-redundant-alt": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md */
    "jsx-a11y/interactive-supports-focus": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md */
    "jsx-a11y/label-has-associated-control": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md */
    "jsx-a11y/lang": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md */
    "jsx-a11y/media-has-caption": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md */
    "jsx-a11y/mouse-events-have-key-events": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md */
    "jsx-a11y/no-access-key": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md */
    "jsx-a11y/no-autofocus": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md */
    "jsx-a11y/no-distracting-elements": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md */
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md */
    "jsx-a11y/no-noninteractive-element-interactions": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md */
    "jsx-a11y/no-noninteractive-tabindex": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md */
    "jsx-a11y/no-redundant-roles": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md */
    "jsx-a11y/no-static-element-interactions": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md */
    "jsx-a11y/role-has-required-aria-props": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md */
    "jsx-a11y/role-supports-aria-props": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md */
    "jsx-a11y/scope": "error",
    /** https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md */
    "jsx-a11y/tabindex-no-positive": "error"
  }
};
