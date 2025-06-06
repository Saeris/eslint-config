import path from "path";
import { ESLint } from "eslint";
import { defineConfig } from "eslint/config";
import config from "..";

describe(`eslint-config`, () => {
  it(`load config in ESLint to validate all rules are correct`, async () => {
    const overrideConfigFile = path.join(__dirname, `../index.js`); //?
    const cli = new ESLint({
      // @ts-expect-error
      overrideConfig: defineConfig(config, {
        rules: {
          "import-x/no-anonymous-default-export": `off`,
          "import-x/no-default-export": `off`
        }
      }),
      ignore: false
    });

    const results = await cli.lintFiles(overrideConfigFile);
    const [{ messages }] = results; //?

    expect(messages).toStrictEqual([]);
  });
});
