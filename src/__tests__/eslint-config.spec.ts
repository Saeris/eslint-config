import path from "path";
import { ESLint } from "eslint";

describe(`eslint-config`, () => {
  it(`load config in ESLint to validate all rules are correct`, async () => {
    const overrideConfigFile = path.join(__dirname, `../index.js`); //?
    const project = path.join(__dirname, `../../tsconfig.json`); //?
    const cli = new ESLint({
      overrideConfigFile,
      overrideConfig: {
        parserOptions: {
          project
        },
        settings: {
          react: {
            version: `latest`
          }
        }
      },
      ignore: false,
      useEslintrc: false
    });

    const results = await cli.lintFiles(overrideConfigFile);
    const messages = results[0].messages; //?

    expect(messages).toStrictEqual([]);
  });
});
