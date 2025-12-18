import { cwd } from "node:process";
import type { Linter } from "eslint";
import globals from "globals";
import astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import pluginAstro from "eslint-plugin-astro";

const configAstro = [
  {
    name: `astro/base/plugin`,
    plugins: {
      astro: pluginAstro
    }
  },
  {
    name: `astro/base`,
    files: [`*.astro`, `**/*.astro`],
    languageOptions: {
      globals: {
        ...globals.node,
        // Astro object
        Astro: false,
        // JSX Fragment
        Fragment: false
      },
      parser: astroParser,
      sourceType: `module`,
      parserOptions: {
        parser: tsParser,
        projectService: { allowDefaultProject: [`*.js`, `*.mjs`, `*.ts`] },
        tsconfigRootDir: cwd(),
        extraFileExtensions: [`.astro`],
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // Possible Errors
      "astro/missing-client-only-directive-value": `error`,
      "astro/no-conflict-set-directives": `error`,
      "astro/no-deprecated-astro-canonicalurl": `error`,
      "astro/no-deprecated-astro-fetchcontent": `error`,
      "astro/no-deprecated-astro-resolve": `error`,
      "astro/no-deprecated-getentrybyslug": `error`,
      "astro/no-exports-from-components": `warn`,
      "astro/no-unused-define-vars-in-style": `error`,
      "astro/valid-compile": `error`,
      // Security Vulnerability
      "astro/no-set-html-directive": `warn`,
      // Best Practices
      "astro/no-set-text-directive": `warn`,
      "astro/no-unused-css-selector": `warn`,
      // Stylistic Issues
      "astro/prefer-class-list-directive": `warn`,
      "astro/prefer-object-class-list": `warn`,
      "astro/prefer-split-class-list": `warn`,
      "astro/sort-attributes": `off`,
      // A11Y Extension Rules
      "astro/jsx-a11y/alt-text": `error`,
      "astro/jsx-a11y/anchor-ambiguous-text": `off`,
      "astro/jsx-a11y/anchor-has-content": `error`,
      "astro/jsx-a11y/anchor-is-valid": `error`,
      "astro/jsx-a11y/aria-activedescendant-has-tabindex": `error`,
      "astro/jsx-a11y/aria-props": `error`,
      "astro/jsx-a11y/aria-proptypes": `error`,
      "astro/jsx-a11y/aria-role": `error`,
      "astro/jsx-a11y/aria-unsupported-elements": `error`,
      "astro/jsx-a11y/autocomplete-valid": `error`,
      "astro/jsx-a11y/click-events-have-key-events": `error`,
      "astro/jsx-a11y/control-has-associated-label": `error`,
      "astro/jsx-a11y/heading-has-content": `error`,
      "astro/jsx-a11y/html-has-lang": `error`,
      "astro/jsx-a11y/iframe-has-title": `error`,
      "astro/jsx-a11y/img-redundant-alt": `error`,
      "astro/jsx-a11y/interactive-supports-focus": `error`,
      "astro/jsx-a11y/label-has-associated-control": `error`,
      "astro/jsx-a11y/lang": `error`,
      "astro/jsx-a11y/media-has-caption": `error`,
      "astro/jsx-a11y/mouse-events-have-key-events": `error`,
      "astro/jsx-a11y/no-access-key": `error`,
      "astro/jsx-a11y/no-aria-hidden-on-focusable": `warn`,
      "astro/jsx-a11y/no-autofocus": `error`,
      "astro/jsx-a11y/no-distracting-elements": `error`,
      "astro/jsx-a11y/no-interactive-element-to-noninteractive-role": `error`,
      "astro/jsx-a11y/no-noninteractive-element-interactions": `error`,
      "astro/jsx-a11y/no-noninteractive-element-to-interactive-role": `error`,
      "astro/jsx-a11y/no-noninteractive-tabindex": `error`,
      "astro/jsx-a11y/no-redundant-roles": `error`,
      "astro/jsx-a11y/no-static-element-interactions": `error`,
      "astro/jsx-a11y/prefer-tag-over-role": `warn`,
      "astro/jsx-a11y/role-has-required-aria-props": `error`,
      "astro/jsx-a11y/role-supports-aria-props": `error`,
      "astro/jsx-a11y/scope": `error`,
      "astro/jsx-a11y/tabindex-no-positive": `error`,
      // Extension Rules
      "astro/semi": `warn`
    },
    processor: `astro/client-side-ts`
  },
  {
    // Define the configuration for `<script>` tag.
    // Script in `<script>` is assigned a virtual file name with the `.js` extension.
    name: `astro/base/javascript`,
    files: [`**/*.astro/*.js`, `*.astro/*.js`],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      sourceType: `module`
    },
    rules: {
      "prettier/prettier": `off`
    }
  },
  {
    // Define the configuration for `<script>` tag when using `client-side-ts` processor.
    // Script in `<script>` is assigned a virtual file name with the `.ts` extension.
    name: `astro/base/typescript`,
    files: [`**/*.astro/*.ts`, `*.astro/*.ts`],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: tsParser,
      sourceType: `module`,
      parserOptions: {
        projectService: { allowDefaultProject: [`*.js`, `*.mjs`, `*.ts`] },
        tsconfigRootDir: cwd()
      }
    },
    rules: {
      // If you are using "prettier/prettier" rule,
      // you don't need to format inside <script> as it will be formatted as a `.astro` file.
      "prettier/prettier": `off`
    }
  }
] as Linter.Config[];

/**
 * Astro https://github.com/ota-meshi/eslint-plugin-astro
 *
 * Last Reviewed: v1.3.1
 */

export default configAstro;
