import { defineConfig } from "eslint/config";
import base from "./src/base.js";
import typeAware from "./src/type-aware.js";
import stylistic from "./src/stylistic.js";
import vitest from "./src/vitest.js";

export default defineConfig([
  base,
  stylistic,
  typeAware,
  vitest,
  {
    name: `project-exceptions`,
    rules: {
      "import-x/no-anonymous-default-export": `off`,
      "import-x/no-default-export": `off`
    }
  }
]);
