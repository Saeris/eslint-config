import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [`./src/index.js`],
  clean: true,
  format: [`esm`],
  dts: true,
  outDir: `./dist`
});
