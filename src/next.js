// @ts-check
import pluginNext from "@next/eslint-plugin-next";
import react from "./react.js";

/**
 * Next https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next
 *
 * Last Reviewed: v^12.0.4
 *
 * @satisfies {import("eslint").Linter.Config[]}
 */
const configNext = [
  ...react,
  {
    name: `next`,
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
    name: `next-import-x-exceptions`,
    files: [`**/pages/**/*.{j,t}s?(x)`],
    // Nextjs uses Default Exports as a convention for it's filesystem routing
    rules: {
      "import-x/no-default-export": `off`,
      "import-x/no-anonymous-default-export": `off`
    }
  }
];

export default [configNext];
