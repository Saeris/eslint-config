import parserBabel from "@babel/eslint-parser";
import { createNodeResolver, importX } from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import pluginPromise from "eslint-plugin-promise";
import pluginNext from "@next/eslint-plugin-next";
import globals from "globals";
import pluginJSXa11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import fs from "fs";
import path from "path";
import tseslint from "typescript-eslint";
import vitest from "@vitest/eslint-plugin";

//#region src/base.js
/**

* https://eslint.org/docs/latest/rules/#possible-problems

*

* @satisfies {Partial<import("eslint/rules").ESLintRules>}

*/
const possibleProblems = {
	"array-callback-return": ["warn", {
		allowImplicit: true,
		checkForEach: true
	}],
	"constructor-super": "error",
	"for-direction": `error`,
	"getter-return": `error`,
	"no-async-promise-executor": `error`,
	"no-await-in-loop": `error`,
	"no-class-assign": "error",
	"no-compare-neg-zero": `error`,
	"no-cond-assign": [`error`, `always`],
	"no-const-assign": "error",
	"no-constant-binary-expression": "error",
	"no-constant-condition": `warn`,
	"no-constructor-return": "error",
	"no-control-regex": `error`,
	"no-debugger": `warn`,
	"no-dupe-args": `error`,
	"no-dupe-class-members": "error",
	"no-dupe-else-if": `error`,
	"no-dupe-keys": `error`,
	"no-duplicate-case": `error`,
	"no-duplicate-imports": ["error", { includeExports: true }],
	"no-empty-character-class": `error`,
	"no-empty-pattern": `error`,
	"no-ex-assign": `error`,
	"no-fallthrough": "error",
	"no-func-assign": `error`,
	"no-import-assign": `error`,
	"no-inner-declarations": `error`,
	"no-invalid-regexp": `error`,
	"no-irregular-whitespace": `error`,
	"no-loss-of-precision": `error`,
	"no-misleading-character-class": `error`,
	"no-new-native-nonconstructor": "warn",
	"no-obj-calls": `error`,
	"no-promise-executor-return": `error`,
	"no-prototype-builtins": `error`,
	"no-self-assign": "error",
	"no-self-compare": "error",
	"no-setter-return": `error`,
	"no-sparse-arrays": `error`,
	"no-template-curly-in-string": `error`,
	"no-this-before-super": "error",
	"no-unassigned-vars": "error",
	"no-undef": "error",
	"no-unexpected-multiline": `off`,
	"no-unmodified-loop-condition": "warn",
	"no-unreachable": `error`,
	"no-unreachable-loop": `error`,
	"no-unsafe-finally": `error`,
	"no-unsafe-negation": `error`,
	"no-unsafe-optional-chaining": `error`,
	"no-unused-private-class-members": "warn",
	"no-unused-vars": "warn",
	"no-use-before-define": ["error", { functions: false }],
	"no-useless-assignment": "error",
	"no-useless-backreference": `error`,
	"require-atomic-updates": `error`,
	"use-isnan": `error`,
	"valid-typeof": `error`
};
/**

* https://eslint.org/docs/latest/rules/#suggestions

*

* @satisfies {Partial<import("eslint/rules").ESLintRules>}

*/
const suggestions = {
	"accessor-pairs": `error`,
	"arrow-body-style": [`error`, `as-needed`],
	"block-scoped-var": `error`,
	camelcase: [`error`, { properties: `never` }],
	"capitalized-comments": `off`,
	"class-methods-use-this": `off`,
	complexity: `off`,
	"consistent-return": `off`,
	"consistent-this": `off`,
	curly: [`error`, `multi-line`],
	"default-case": `error`,
	"default-case-last": `error`,
	"default-param-last": `error`,
	"dot-notation": [`error`, { allowKeywords: true }],
	eqeqeq: [`error`, `smart`],
	"func-name-matching": `off`,
	"func-names": `off`,
	"func-style": [
		`error`,
		`declaration`,
		{ allowArrowFunctions: true }
	],
	"grouped-accessor-pairs": `error`,
	"guard-for-in": `error`,
	"id-denylist": `off`,
	"id-length": `off`,
	"id-match": `off`,
	"init-declarations": `off`,
	"logical-assignment-operators": [
		"error",
		"always",
		{ enforceForIfStatements: true }
	],
	"max-classes-per-file": `off`,
	"max-depth": `off`,
	"max-lines": `off`,
	"max-lines-per-function": `off`,
	"max-nested-callbacks": `off`,
	"max-params": `off`,
	"max-statements": `off`,
	"new-cap": [`error`, { newIsCap: true }],
	"no-alert": `error`,
	"no-array-constructor": `off`,
	"no-bitwise": [`error`, { allow: [`~`] }],
	"no-caller": `error`,
	"no-case-declarations": `error`,
	"no-confusing-arrow": `off`,
	"no-console": "warn",
	"no-continue": `error`,
	"no-delete-var": `error`,
	"no-div-regex": `error`,
	"no-else-return": `error`,
	"no-empty": `error`,
	"no-empty-function": [`error`, { allow: [`arrowFunctions`, `constructors`] }],
	"no-empty-static-block": "error",
	"no-eq-null": `error`,
	"no-eval": `error`,
	"no-extend-native": `error`,
	"no-extra-bind": `error`,
	"no-extra-boolean-cast": "error",
	"no-extra-label": `error`,
	"no-global-assign": `error`,
	"no-implicit-coercion": `off`,
	"no-implicit-globals": `off`,
	"no-implied-eval": `error`,
	"no-inline-comments": `off`,
	"no-invalid-this": `off`,
	"no-iterator": `error`,
	"no-label-var": `error`,
	"no-labels": `error`,
	"no-lone-blocks": `error`,
	"no-lonely-if": `error`,
	"no-loop-func": `error`,
	"no-magic-numbers": `off`,
	"no-multi-assign": `error`,
	"no-multi-str": `error`,
	"no-negated-condition": `error`,
	"no-nested-ternary": `off`,
	"no-new": `error`,
	"no-new-func": `error`,
	"no-new-wrappers": `error`,
	"no-nonoctal-decimal-escape": `error`,
	"no-object-constructor": "error",
	"no-octal": `error`,
	"no-octal-escape": `error`,
	"no-param-reassign": `error`,
	"no-plusplus": `off`,
	"no-proto": `error`,
	"no-redeclare": `error`,
	"no-regex-spaces": "error",
	"no-restricted-exports": `off`,
	"no-restricted-globals": `off`,
	"no-restricted-imports": `off`,
	"no-restricted-properties": `off`,
	"no-restricted-syntax": `off`,
	"no-return-assign": [`error`, `always`],
	"no-script-url": `error`,
	"no-sequences": `error`,
	"no-shadow": `error`,
	"no-shadow-restricted-names": `error`,
	"no-ternary": `off`,
	"no-throw-literal": `error`,
	"no-undef-init": `error`,
	"no-undefined": `error`,
	"no-underscore-dangle": `off`,
	"no-unneeded-ternary": `error`,
	"no-unused-expressions": `off`,
	"no-unused-labels": `error`,
	"no-useless-call": `error`,
	"no-useless-catch": `error`,
	"no-useless-computed-key": `error`,
	"no-useless-concat": `error`,
	"no-useless-constructor": `error`,
	"no-useless-escape": `error`,
	"no-useless-rename": `error`,
	"no-useless-return": `error`,
	"no-var": `error`,
	"no-void": [`error`, { allowAsStatement: true }],
	"no-warning-comments": `off`,
	"no-with": `error`,
	"object-shorthand": [`error`, `properties`],
	"one-var": [`error`, `never`],
	"operator-assignment": [`error`, `always`],
	"prefer-arrow-callback": `error`,
	"prefer-const": `off`,
	"prefer-destructuring": `off`,
	"prefer-exponentiation-operator": `error`,
	"prefer-named-capture-group": `warn`,
	"prefer-numeric-literals": `error`,
	"prefer-object-has-own": "error",
	"prefer-object-spread": `error`,
	"prefer-promise-reject-errors": `error`,
	"prefer-regex-literals": `error`,
	"prefer-rest-params": `error`,
	"prefer-spread": `error`,
	"prefer-template": `error`,
	radix: `error`,
	"require-await": `error`,
	"require-unicode-regexp": `off`,
	"require-yield": `error`,
	"sort-imports": `off`,
	"sort-keys": `off`,
	"sort-vars": `off`,
	strict: [`error`, `never`],
	"symbol-description": `error`,
	"vars-on-top": `error`,
	yoda: `error`
};
/**

* https://eslint.org/docs/latest/rules/#layout--formatting

*

* @satisfies {Partial<import("eslint/rules").ESLintRules>}

*/
const layoutAndFormatting = { "unicode-bom": `off` };
/**

* @satisfies {import("eslint").Linter.Config[]}

*/
const configBase = [{
	files: [`**/*.?(m|c)js?(x)`],
	languageOptions: {
		parser: parserBabel,
		parserOptions: {
			ecmaVersion: "latest",
			ecmaFeatures: {
				jsx: true,
				modules: true
			},
			sourceType: `module`
		}
	},
	rules: {
		...possibleProblems,
		...suggestions,
		...layoutAndFormatting
	}
}, {
	files: [`**/*.{spec,test}.{j,t}s?(x)`],
	rules: {
		"no-console": `off`,
		"no-undefined": `off`
	}
}];
/**

* Docs: https://github.com/benmosher/eslint-plugin-import

* Last Reviewed: v2.25.2

*/
const configImport = [{
	plugins: { "import-x": importX },
	settings: {
		"import-x/extensions": [
			".cjs",
			".mjs",
			".js",
			".jsx",
			".cts",
			".mts",
			".ts",
			".tsx"
		],
		"import-x/resolver-next": [createTypeScriptImportResolver(), createNodeResolver()]
	},
	rules: {
		"import-x/export": `error`,
		"import-x/no-deprecated": `error`,
		"import-x/no-empty-named-blocks": "warn",
		"import-x/no-extraneous-dependencies": `off`,
		"import-x/no-mutable-exports": `error`,
		"import-x/no-named-as-default": `warn`,
		"import-x/no-named-as-default-member": `warn`,
		"import-x/no-unused-modules": `error`,
		"import-x/no-amd": `off`,
		"import-x/no-commonjs": `off`,
		"import-x/no-nodejs-modules": `off`,
		"import-x/no-import-module-exports": "warn",
		"import-x/unambiguous": `off`,
		"import-x/default": `error`,
		"import-x/named": `error`,
		"import-x/namespace": `error`,
		"import-x/no-absolute-path": `error`,
		"import-x/no-cycle": `warn`,
		"import-x/no-dynamic-require": `error`,
		"import-x/no-internal-modules": `off`,
		"import-x/no-relative-packages": "warn",
		"import-x/no-relative-parent-imports": "off",
		"import-x/no-restricted-paths": `off`,
		"import-x/no-self-import": `error`,
		"import-x/no-unresolved": [`error`, {
			commonjs: true,
			ignore: ["^#.+$"]
		}],
		"import-x/no-useless-path-segments": [`error`, { noUselessIndex: true }],
		"import-x/no-webpack-loader-syntax": `error`,
		"import-x/consistent-type-specifier-style": "off",
		"import-x/dynamic-import-chunkname": `off`,
		"import-x/exports-last": `off`,
		"import-x/extensions": `off`,
		"import-x/first": [`error`, `absolute-first`],
		"import-x/group-exports": `off`,
		"import-x/max-dependencies": `off`,
		"import-x/newline-after-import": `error`,
		"import-x/no-anonymous-default-export": `warn`,
		"import-x/no-default-export": `warn`,
		"import-x/no-duplicates": `error`,
		"import-x/no-named-default": `off`,
		"import-x/no-named-export": `off`,
		"import-x/no-namespace": `off`,
		"import-x/no-unassigned-import": `off`,
		"import-x/order": [`error`, {
			"newlines-between": `never`,
			pathGroups: [{
				pattern: "#*",
				group: "internal"
			}, {
				pattern: "#*/**",
				group: "internal"
			}],
			groups: [
				`builtin`,
				[`internal`, `external`],
				[`parent`, `sibling`],
				`index`
			]
		}],
		"import-x/prefer-default-export": `off`
	}
}, {
	files: [`*.stories.{j,t}s?(x)`],
	rules: {
		"import-x/no-default-export": `off`,
		"import-x/no-anonymous-default-export": `off`
	}
}];
/**

* Docs: https://github.com/xjamundx/eslint-plugin-promise

* Last Reviewed: v^6.1.1

*/
const configPromise = {
	plugins: { promise: pluginPromise },
	rules: {
		"promise/always-return": `error`,
		"promise/avoid-new": `off`,
		"promise/catch-or-return": [`error`, { terminationMethod: [`catch`, `finally`] }],
		"promise/no-callback-in-promise": `warn`,
		"promise/no-multiple-resolved": "error",
		"promise/no-native": `off`,
		"promise/no-nesting": `warn`,
		"promise/no-new-statics": `error`,
		"promise/no-promise-in-callback": `warn`,
		"promise/no-return-in-finally": `error`,
		"promise/no-return-wrap": `error`,
		"promise/param-names": `error`,
		"promise/prefer-await-to-callbacks": `error`,
		"promise/prefer-await-to-then": `error`,
		"promise/valid-params": `error`
	}
};
var base_default = [
	...configBase,
	configImport,
	configPromise
];

//#endregion
//#region src/react.js
/**

* React https://github.com/yannickcr/eslint-plugin-react

*

* Last Reviewed: v^7.21.0

*

* @satisfies {import("eslint").Linter.Config}

*/
const configReact = {
	files: [`**/*.{j,t}s?(x)`],
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
				modules: true
			},
			sourceType: `module`
		},
		globals: { ...globals.browser }
	},
	settings: { react: { version: `detect` } },
	plugins: { react: pluginReact },
	rules: {
		"react/boolean-prop-naming": [`error`, { validateNested: true }],
		"react/button-has-type": `warn`,
		"react/default-props-match-prop-types": `error`,
		"react/destructuring-assignment": [
			`warn`,
			`always`,
			{ ignoreClassFields: true }
		],
		"react/display-name": `warn`,
		"react/forbid-component-props": `off`,
		"react/forbid-dom-props": `off`,
		"react/forbid-elements": `off`,
		"react/forbid-foreign-prop-types": `off`,
		"react/forbid-prop-types": `off`,
		"react/function-component-definition": [`error`, {
			namedComponents: `arrow-function`,
			unnamedComponents: `arrow-function`
		}],
		"react/hook-use-state": "error",
		"react/iframe-missing-sandbox": "warn",
		"react/jsx-boolean-value": `warn`,
		"react/jsx-child-element-spacing": `warn`,
		"react/jsx-closing-bracket-location": `off`,
		"react/jsx-closing-tag-location": `off`,
		"react/jsx-curly-brace-presence": `off`,
		"react/jsx-curly-newline": `off`,
		"react/jsx-curly-spacing": `off`,
		"react/jsx-equals-spacing": `off`,
		"react/jsx-filename-extension": [`warn`, { extensions: [
			`.js`,
			`.jsx`,
			`.tsx`
		] }],
		"react/jsx-first-prop-new-line": `off`,
		"react/jsx-fragments": [`warn`, `syntax`],
		"react/jsx-handler-names": `warn`,
		"react/jsx-indent": `off`,
		"react/jsx-indent-props": `off`,
		"react/jsx-key": "warn",
		"react/jsx-max-depth": `off`,
		"react/jsx-max-props-per-line": `off`,
		"react/jsx-newline": `off`,
		"react/jsx-no-bind": [`warn`, {
			ignoreDOMComponents: true,
			allowArrowFunctions: true
		}],
		"react/jsx-no-comment-textnodes": `off`,
		"react/jsx-no-constructed-context-values": "off",
		"react/jsx-no-duplicate-props": `error`,
		"react/jsx-no-leaked-render": "error",
		"react/jsx-no-literals": `off`,
		"react/jsx-no-script-url": `error`,
		"react/jsx-no-target-blank": `error`,
		"react/jsx-no-undef": `off`,
		"react/jsx-no-useless-fragment": `off`,
		"react/jsx-one-expression-per-line": `off`,
		"react/jsx-pascal-case": `error`,
		"react/jsx-props-no-multi-spaces": `off`,
		"react/jsx-props-no-spreading": `off`,
		"react/jsx-sort-default-props": `off`,
		"react/jsx-sort-props": `off`,
		"react/jsx-space-before-closing": `off`,
		"react/jsx-tag-spacing": `off`,
		"react/jsx-uses-react": `error`,
		"react/jsx-uses-vars": `error`,
		"react/jsx-wrap-multilines": `off`,
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
		"react/no-unstable-nested-components": ["error", { allowAsProps: true }],
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
		"react/require-default-props": [`warn`, {
			forbidDefaultForRequired: true,
			functions: `defaultArguments`
		}],
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
	}
};
/**

* Docs: https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks

*

* Last Reviewed: v^5.0.0

*

* @satisfies {import("eslint").Linter.Config}

*/
const configReactHooks = {
	plugins: { "react-hooks": pluginReactHooks },
	rules: {
		"react-hooks/rules-of-hooks": `error`,
		"react-hooks/exhaustive-deps": `warn`
	}
};
/**

* Docs: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y

*

* Last Reviewed: v^6.6.0

*

* @satisfies {import("eslint").Linter.Config}

*/
const configJSXa11ly = {
	plugins: { "jsx-a11y": pluginJSXa11y },
	rules: {
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
	}
};
var react_default = [
	configReact,
	configReactHooks,
	configJSXa11ly
];

//#endregion
//#region src/next.js
/**

* Next https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next

*

* Last Reviewed: v^12.0.4

*

* @satisfies {import("eslint").Linter.Config[]}

*/
const configNext = [
	...react_default,
	{
		files: [`**/*.{j,t}s?(x)`],
		plugins: { "@next/next": pluginNext },
		rules: {
			"@next/next/google-font-display": `error`,
			"@next/next/google-font-preconnect": `error`,
			"@next/next/no-css-tags": `error`,
			"@next/next/no-document-import-in-page": `error`,
			"@next/next/no-head-import-in-document": `error`,
			"@next/next/no-html-link-for-pages": `error`,
			"@next/next/no-img-element": `error`,
			"@next/next/no-page-custom-font": `error`,
			"@next/next/no-sync-scripts": `error`,
			"@next/next/no-title-in-document-head": `error`,
			"@next/next/no-unwanted-polyfillio": `error`,
			"@next/next/inline-script-id": `error`,
			"@next/next/no-typos": `warn`,
			"@next/next/next-script-for-ga": `error`,
			"@next/next/no-duplicate-head": `error`
		}
	},
	{
		files: [`**/pages/**/*.{j,t}s?(x)`],
		rules: {
			"import-x/no-default-export": `off`,
			"import-x/no-anonymous-default-export": `off`
		}
	}
];
var next_default = configNext;

//#endregion
//#region src/typescript.js
const stylistic$1 = {
	"@typescript-eslint/adjacent-overload-signatures": `error`,
	"@typescript-eslint/array-type": [`error`, { default: `array-simple` }],
	"@typescript-eslint/ban-tslint-comment": `error`,
	"@typescript-eslint/class-literal-property-style": `off`,
	"@typescript-eslint/consistent-generic-constructors": "error",
	"@typescript-eslint/consistent-indexed-object-style": `off`,
	"@typescript-eslint/consistent-type-assertions": [`error`, { assertionStyle: `as` }],
	"@typescript-eslint/consistent-type-definitions": [`error`, `interface`],
	"@typescript-eslint/no-confusing-non-null-assertion": `error`,
	"@typescript-eslint/no-inferrable-types": [`warn`, {
		ignoreParameters: true,
		ignoreProperties: true
	}],
	"@typescript-eslint/prefer-for-of": `warn`,
	"@typescript-eslint/prefer-function-type": `off`
};
const typescriptRules$1 = {
	"@typescript-eslint/ban-ts-comment": `off`,
	"@typescript-eslint/consistent-type-imports": `error`,
	"@typescript-eslint/explicit-function-return-type": `warn`,
	"@typescript-eslint/explicit-member-accessibility": `off`,
	"@typescript-eslint/explicit-module-boundary-types": [`warn`],
	"@typescript-eslint/member-ordering": `off`,
	"@typescript-eslint/method-signature-style": [`off`, `property`],
	"@typescript-eslint/no-duplicate-enum-values": "error",
	"@typescript-eslint/no-dynamic-delete": `warn`,
	"@typescript-eslint/no-empty-object-type": [`warn`, { allowInterfaces: `with-single-extends` }],
	"@typescript-eslint/no-explicit-any": [`warn`, { ignoreRestArgs: true }],
	"@typescript-eslint/no-extra-non-null-assertion": `error`,
	"@typescript-eslint/no-extraneous-class": `off`,
	"@typescript-eslint/no-import-type-side-effects": "error",
	"@typescript-eslint/no-invalid-void-type": `warn`,
	"@typescript-eslint/no-misused-new": `error`,
	"@typescript-eslint/no-namespace": [`error`, {
		allowDeclarations: true,
		allowDefinitionFiles: true
	}],
	"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
	"@typescript-eslint/no-non-null-asserted-optional-chain": `error`,
	"@typescript-eslint/no-non-null-assertion": `off`,
	"@typescript-eslint/no-require-imports": `warn`,
	"@typescript-eslint/no-restricted-types": "off",
	"@typescript-eslint/no-this-alias": `error`,
	"@typescript-eslint/no-unnecessary-parameter-property-assignment": "warn",
	"@typescript-eslint/no-unnecessary-type-constraint": `warn`,
	"@typescript-eslint/no-unsafe-declaration-merging": "error",
	"@typescript-eslint/no-unsafe-function-type": "error",
	"@typescript-eslint/no-useless-empty-export": "error",
	"@typescript-eslint/no-wrapper-object-types": "warn",
	"@typescript-eslint/parameter-properties": "off",
	"@typescript-eslint/prefer-as-const": `warn`,
	"@typescript-eslint/prefer-enum-initializers": `error`,
	"@typescript-eslint/prefer-literal-enum-member": `error`,
	"@typescript-eslint/prefer-namespace-keyword": `off`,
	"@typescript-eslint/triple-slash-reference": [`error`, { types: `prefer-import` }],
	"@typescript-eslint/unified-signatures": `off`
};
const extensionRules$1 = {
	"class-methods-use-this": "off",
	"@typescript-eslint/class-methods-use-this": ["warn", {
		ignoreOverrideMethods: true,
		ignoreClassesThatImplementAnInterface: `public-fields`
	}],
	"default-param-last": "off",
	"@typescript-eslint/default-param-last": `error`,
	"init-declarations": "off",
	"@typescript-eslint/init-declarations": `off`,
	"max-params": "off",
	"@typescript-eslint/max-params": "error",
	"no-array-constructor": "off",
	"@typescript-eslint/no-array-constructor": `off`,
	"no-dupe-class-members": "off",
	"@typescript-eslint/no-dupe-class-members": `error`,
	"no-invalid-this": "off",
	"@typescript-eslint/no-invalid-this": "off",
	"no-loop-func": "off",
	"@typescript-eslint/no-loop-func": `error`,
	"no-magic-numbers": "off",
	"@typescript-eslint/no-magic-numbers": `off`,
	"no-redeclare": "off",
	"@typescript-eslint/no-redeclare": `error`,
	"no-restricted-imports": "off",
	"@typescript-eslint/no-restricted-imports": "off",
	"no-shadow": "off",
	"@typescript-eslint/no-shadow": `error`,
	"no-unused-expressions": "off",
	"@typescript-eslint/no-unused-expressions": `off`,
	"no-unused-vars": "off",
	"@typescript-eslint/no-unused-vars": [`error`, {
		vars: `local`,
		args: `none`,
		ignoreRestSiblings: true
	}],
	"no-use-before-define": "off",
	"@typescript-eslint/no-use-before-define": [`error`, {
		functions: true,
		classes: true
	}],
	"no-useless-constructor": "off",
	"@typescript-eslint/no-useless-constructor": `error`
};
/**

* Each of these rules have an equivalent in @typescript-eslint,

* so they must be turned off for compatibility

*

* @satisfies {import("eslint").Linter.Config}

*/
const configBaseOverrides = {
	files: [`**/*.ts?(x)`],
	rules: {
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

* --- Typescript https://github.com/typescript-eslint/typescript-eslint ---

*

* Last Reviewed: v^4.10.0

*

*/
const configTypescript = {
	files: [`**/*.?(m|c)ts?(x)`],
	plugins: { "@typescript-eslint": tseslint.plugin },
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname
		}
	},
	rules: {
		...stylistic$1,
		...typescriptRules$1,
		...extensionRules$1
	}
};
/**

* For tests we don't care about function return types

*/
const configTestOverides = tseslint.config({
	files: [`**/*.{spec,test}.{j,t}s?(x)`],
	rules: { "@typescript-eslint/explicit-function-return-type": `off` }
});
var typescript_default = [
	configTypescript,
	configBaseOverrides,
	configTestOverides
];

//#endregion
//#region src/type-aware.js
const tsProjectDir = [
	`./tsconfig-eslint.json`,
	`./tsconfig.eslint.json`,
	`./tsconfig.json`
].map((file) => path.join(process.cwd(), file)).filter((file) => fs.existsSync(file));
const stylistic = {
	"@typescript-eslint/non-nullable-type-assertion-style": `warn`,
	"@typescript-eslint/prefer-find": "error",
	"@typescript-eslint/prefer-includes": `error`,
	"@typescript-eslint/prefer-nullish-coalescing": [`error`, {
		ignoreConditionalTests: true,
		ignoreMixedLogicalExpressions: true
	}],
	"@typescript-eslint/prefer-optional-chain": "error",
	"@typescript-eslint/prefer-regexp-exec": "error",
	"@typescript-eslint/prefer-string-starts-ends-with": `warn`
};
const typescriptRules = {
	"@typescript-eslint/await-thenable": `error`,
	"@typescript-eslint/consistent-type-exports": "off",
	"@typescript-eslint/naming-convention": `off`,
	"@typescript-eslint/no-array-delete": "error",
	"@typescript-eslint/no-base-to-string": `error`,
	"@typescript-eslint/no-confusing-void-expression": [`error`, { ignoreArrowShorthand: true }],
	"@typescript-eslint/no-deprecated": "warn",
	"@typescript-eslint/no-duplicate-type-constituents": "error",
	"@typescript-eslint/no-floating-promises": [`error`, { ignoreIIFE: true }],
	"@typescript-eslint/no-for-in-array": `error`,
	"@typescript-eslint/no-meaningless-void-operator": "error",
	"@typescript-eslint/no-misused-promises": `error`,
	"@typescript-eslint/no-misused-spread": "error",
	"@typescript-eslint/no-mixed-enums": "error",
	"@typescript-eslint/no-redundant-type-constituents": "error",
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": `warn`,
	"@typescript-eslint/no-unnecessary-condition": `warn`,
	"@typescript-eslint/no-unnecessary-qualifier": `warn`,
	"@typescript-eslint/no-unnecessary-template-expression": "warn",
	"@typescript-eslint/no-unnecessary-type-arguments": `warn`,
	"@typescript-eslint/no-unnecessary-type-assertion": `warn`,
	"@typescript-eslint/no-unnecessary-type-conversion": "warn",
	"@typescript-eslint/no-unnecessary-type-parameters": "warn",
	"@typescript-eslint/no-unsafe-argument": "off",
	"@typescript-eslint/no-unsafe-assignment": `off`,
	"@typescript-eslint/no-unsafe-call": `off`,
	"@typescript-eslint/no-unsafe-enum-comparison": "warn",
	"@typescript-eslint/no-unsafe-member-access": `off`,
	"@typescript-eslint/no-unsafe-return": `off`,
	"@typescript-eslint/no-unsafe-type-assertion": "warn",
	"@typescript-eslint/no-unsafe-unary-minus": "error",
	"@typescript-eslint/prefer-readonly": `off`,
	"@typescript-eslint/prefer-readonly-parameter-types": `off`,
	"@typescript-eslint/prefer-reduce-type-parameter": `warn`,
	"@typescript-eslint/prefer-return-this-type": "error",
	"@typescript-eslint/promise-function-async": [`error`, {
		allowedPromiseNames: [`Thenable`],
		checkArrowFunctions: true,
		checkFunctionDeclarations: true,
		checkFunctionExpressions: true,
		checkMethodDeclarations: true
	}],
	"@typescript-eslint/related-getter-setter-pairs": "warn",
	"@typescript-eslint/require-array-sort-compare": `warn`,
	"@typescript-eslint/restrict-plus-operands": `error`,
	"@typescript-eslint/restrict-template-expressions": `warn`,
	"@typescript-eslint/return-await": "error",
	"@typescript-eslint/strict-boolean-expressions": `off`,
	"@typescript-eslint/switch-exhaustiveness-check": `warn`,
	"@typescript-eslint/unbound-method": [`warn`, { ignoreStatic: true }],
	"@typescript-eslint/use-unknown-in-catch-callback-variable": "warn"
};
const stylisticExtension = {
	"dot-notation": "off",
	"@typescript-eslint/dot-notation": "error"
};
const extensionRules = {
	"consistent-return": "off",
	"@typescript-eslint/consistent-return": "off",
	"no-implied-eval": "off",
	"@typescript-eslint/no-implied-eval": `error`,
	"no-throw-literal": "off",
	"@typescript-eslint/only-throw-error": "error",
	"prefer-destructuring": "off",
	"@typescript-eslint/prefer-destructuring": "error",
	"prefer-promise-reject-errors": "off",
	"@typescript-eslint/prefer-promise-reject-errors": "error",
	"require-await": "off",
	"@typescript-eslint/require-await": "error"
};
const configTypeAware = {
	files: [`**/*.?(m|c)ts?(x)`],
	languageOptions: { parserOptions: {
		tsProjectDir: process.cwd(),
		project: tsProjectDir[0]
	} },
	rules: {
		...stylistic,
		...typescriptRules,
		...stylisticExtension,
		...extensionRules
	}
};
var type_aware_default = [...typescript_default, configTypeAware];

//#endregion
//#region src/vitest.js
const vitestConfig = {
	files: [`**/*.{spec,test}.{j,t}s?(x)`],
	plugins: { vitest },
	rules: {
		"@vitest/consistent-test-filename": "warn",
		"@vitest/consistent-test-it": `error`,
		"@vitest/expect-expect": [`error`, { assertFunctionNames: [`expect`] }],
		"@vitest/max-expects": "off",
		"@vitest/max-nested-describe": "off",
		"@vitest/no-alias-methods": `warn`,
		"@vitest/no-commented-out-tests": `warn`,
		"@vitest/no-conditional-expect": `warn`,
		"@vitest/no-conditional-in-test": `warn`,
		"@vitest/no-conditional-tests": `warn`,
		"@vitest/no-disabled-tests": `warn`,
		"@vitest/no-done-callback": `error`,
		"@vitest/no-duplicate-hooks": `error`,
		"@vitest/no-focused-tests": `error`,
		"@vitest/no-hooks": `off`,
		"@vitest/no-identical-title": `error`,
		"@vitest/no-import-node-test": `error`,
		"@vitest/no-interpolation-in-snapshots": `error`,
		"@vitest/no-large-snapshots": [`warn`, { maxSize: 32 }],
		"@vitest/no-mocks-import": `error`,
		"@vitest/no-restricted-matchers": `off`,
		"@vitest/no-restricted-vi-methods": `warn`,
		"@vitest/no-standalone-expect": `error`,
		"@vitest/no-test-prefixes": `error`,
		"@vitest/no-test-return-statement": `error`,
		"@vitest/prefer-called-with": `warn`,
		"@vitest/prefer-comparison-matcher": `warn`,
		"@vitest/prefer-describe-function-title": `off`,
		"@vitest/prefer-each": `warn`,
		"@vitest/prefer-equality-matcher": `warn`,
		"@vitest/prefer-expect-assertions": `off`,
		"@vitest/prefer-expect-resolves": `warn`,
		"@vitest/prefer-hooks-in-order": `warn`,
		"@vitest/prefer-hooks-on-top": `warn`,
		"@vitest/prefer-lowercase-title": `warn`,
		"@vitest/prefer-mock-promise-shorthand": `warn`,
		"@vitest/prefer-snapshot-hint": `warn`,
		"@vitest/prefer-spy-on": `warn`,
		"@vitest/prefer-strict-boolean-matchers": `warn`,
		"@vitest/prefer-strict-equal": `warn`,
		"@vitest/prefer-to-be": `warn`,
		"@vitest/prefer-to-be-falsy": `warn`,
		"@vitest/prefer-to-be-object": `warn`,
		"@vitest/prefer-to-be-truthy": `warn`,
		"@vitest/prefer-to-contain": `warn`,
		"@vitest/prefer-to-have-length": `warn`,
		"@vitest/prefer-todo": `warn`,
		"@vitest/prefer-vi-mocked": `warn`,
		"@vitest/require-local-test-context-for-concurrent-snapshots": `warn`,
		"@vitest/require-mock-type-parameters": `warn`,
		"@vitest/require-to-throw-message": `error`,
		"@vitest/require-top-level-describe": `error`,
		"@vitest/valid-describe-callback": `error`,
		"@vitest/valid-expect": `error`,
		"@vitest/valid-expect-in-promise": `error`,
		"@vitest/valid-title": `error`
	}
};
var vitest_default = [vitestConfig];

//#endregion
//#region src/index.js
/**

* @satisfies {import('eslint').Linter.Config[]}

*/
var src_default = [
	...base_default,
	...next_default,
	...type_aware_default,
	...vitest_default
];

//#endregion
export { src_default as default };