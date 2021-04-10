module.exports = {
  "{src}/**/*.{js,ts}": (filenames) => [
    `prettier --write ${filenames.join(` `)}`, // Applies code formatting
    `yarn lint --fix --quiet ${filenames.join(` `)}` // Lints & Applies automatic fixes to problems
  ]
};
