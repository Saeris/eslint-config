/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    require.resolve(`./base`),
    require.resolve(`./react`),
    require.resolve(`./jest`),
    require.resolve(`./type-aware`),
    require.resolve(`./typescript`)
  ]
};
