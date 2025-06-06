// @ts-check
import baseConfigs from "./base.js";
import nextConfigs from "./next.js";
import stylisticConfigs from "./stylistic.js";
import typeAwareConfigs from "./type-aware.js";
import vitestConfigs from "./vitest.js";

export default [
  ...baseConfigs,
  ...nextConfigs,
  ...stylisticConfigs,
  ...typeAwareConfigs,
  ...vitestConfigs
];
