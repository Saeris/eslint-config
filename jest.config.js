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
  testEnvironment: `node`,
  verbose: true
};
