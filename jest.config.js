// @ts-check
const { name } = require(`./package.json`);

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  displayName: name,
  coverageDirectory: `./coverage/`,
  collectCoverage: true,
  collectCoverageFrom: [
    // include
    `./src/**/*.js`,
    // exclude
    `!**/__mocks__/**/*`,
    `!**/__test__/**/*`,
    `!**/node_modules/**`
  ],
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["esbuild-jest"],
  },
  testEnvironment: `node`,
  verbose: true
};
