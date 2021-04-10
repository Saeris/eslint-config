require(`./src/patch`);

module.exports = {
  extends: [
    require.resolve("./src/base"),
    require.resolve("./src/jest"),
    require.resolve("./src/typescript"),
    require.resolve("./src/type-aware")
  ]
};
