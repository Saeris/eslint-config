import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: `eslint-config`,
    globals: true,
    watch: false
  }
});
