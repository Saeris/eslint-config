// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve(`./react`)],
  plugins: [`@next/next`],
  rules: {
    /**
     * Docs: https://nextjs.org/docs/basic-features/eslint#eslint-plugin
     * Last Reviewed: v^13.4.20
     */
    "@next/next/google-font-display": `error`,
    "@next/next/google-font-preconnect": `error`,
    "@next/next/inline-script-id": `error`,
    "@next/next/next-script-for-ga": `error`,
    "@next/next/no-assign-module-variable": "error",
    "@next/next/no-async-client-component": "error",
    "@next/next/no-before-interactive-script-outside-document": "error",
    "@next/next/no-css-tags": `error`,
    "@next/next/no-document-import-in-page": `error`,
    "@next/next/no-duplicate-head": `error`,
    "@next/next/no-head-element": "error",
    "@next/next/no-head-import-in-document": `error`,
    "@next/next/no-html-link-for-pages": `error`,
    "@next/next/no-img-element": `error`,
    "@next/next/no-page-custom-font": `error`,
    "@next/next/no-script-component-in-head": "error",
    "@next/next/no-styled-jsx-in-document": "error",
    "@next/next/no-sync-scripts": `error`,
    "@next/next/no-title-in-document-head": `error`,
    "@next/next/no-typos": `warn`,
    "@next/next/no-unwanted-polyfillio": `error`
  },
  overrides: [
    {
      // Nextjs uses Default Exports as a convention for it's filesystem routing
      files: [`**/pages/**/*.{j,t}s?(x)`, `**/app/**/*.{j,t}s?(x)`],
      rules: {
        "import/no-default-export": `off`,
        "import/no-anonymous-default-export": `off`
      }
    }
  ]
};
