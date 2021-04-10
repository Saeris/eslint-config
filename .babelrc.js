module.exports = {
  sourceMaps: `inline`,
  presets: [require.resolve(`@babel/preset-typescript`)],
  presets: [
    [
      require.resolve(`@babel/preset-env`),
      {
        targets: { node: true },
        modules: `commonjs`,
        useBuiltIns: `usage`,
        corejs: 3
      }
    ]
  ]
};
