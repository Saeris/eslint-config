// @ts-check

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    require.resolve(`./base`),
    require.resolve(`./jest`),
    require.resolve(`./next`),
    require.resolve(`./react`),
    require.resolve(`./type-aware`),
    require.resolve(`./typescript`)
  ]
};
