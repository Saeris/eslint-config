// @ts-check
import { cwd } from "node:process";
import parser from "@typescript-eslint/parser";
import type { Linter } from "eslint";

const configParser = {
  name: `parser`,
  languageOptions: {
    parser,
    parserOptions: {
      projectService: { allowDefaultProject: [`*.js`, `*.mjs`, `*.ts`] },
      tsconfigRootDir: cwd()
    }
  }
} satisfies Linter.Config;

export default configParser;
