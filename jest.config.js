// @ts-check
/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  coverageDirectory: `./.coverage/`,
  collectCoverage: true,
  collectCoverageFrom: [
    // include
    `./src/**/*.js`,
    // exclude
    `!**/__mocks__/**/*`,
    `!**/__test__/**/*`,
    `!**/node_modules/**`
  ],
  testEnvironment: `node`,
  verbose: true
};
