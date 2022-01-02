// @ts-check

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [require.resolve(`./react`)],
  plugins: [
    `@next/next` // https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next
  ],
  rules: {
    /**
     * --- Next https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next ---
     *
     * Last Reviewed: v^12.0.4
     *
     * -- Supported Rules https://nextjs.org/docs/basic-features/eslint#eslint-plugin ---
     */
    /** https://nextjs.org/docs/messages/google-font-display */
    "@next/next/google-font-display": `error`,
    /** https://nextjs.org/docs/messages/google-font-preconnect */
    "@next/next/google-font-preconnect": `error`,
    /** https://nextjs.org/docs/messages/link-passhref */
    "@next/next/link-passhref": `error`,
    /** https://nextjs.org/docs/messages/no-css-tags */
    "@next/next/no-css-tags": `error`,
    /** https://nextjs.org/docs/messages/no-document-import-in-page */
    "@next/next/no-document-import-in-page": `error`,
    /** https://nextjs.org/docs/messages/no-head-import-in-document */
    "@next/next/no-head-import-in-document": `error`,
    /** https://nextjs.org/docs/messages/no-html-link-for-pages */
    "@next/next/no-html-link-for-pages": `error`,
    /** https://nextjs.org/docs/messages/no-img-element */
    "@next/next/no-img-element": `error`,
    /** https://nextjs.org/docs/messages/no-page-custom-font */
    "@next/next/no-page-custom-font": `error`,
    /** https://nextjs.org/docs/messages/no-sync-scripts */
    "@next/next/no-sync-scripts": `error`,
    /** https://nextjs.org/docs/messages/no-title-in-document-head */
    "@next/next/no-title-in-document-head": `error`,
    /** https://nextjs.org/docs/messages/no-unwanted-polyfillio */
    "@next/next/no-unwanted-polyfillio": `error`,
    /** https://nextjs.org/docs/messages/inline-script-id */
    "@next/next/inline-script-id": `error`,
    "@next/next/no-typos": `warn`,
    /** https://nextjs.org/docs/messages/next-script-for-ga */
    "@next/next/next-script-for-ga": `error`,
    "@next/next/no-script-in-document": `error`,
    "@next/next/no-script-in-head": `error`,
    "@next/next/no-duplicate-head": `error`
  },
  overrides: [
    {
      // Nextjs uses Default Exports as a convention for it's filesystem routing
      files: [`**/pages/**/*.{j,t}s?(x)`],
      rules: {
        "import/no-default-export": `off`,
        "import/no-anonymous-default-export": `off`
      }
    }
  ]
};
