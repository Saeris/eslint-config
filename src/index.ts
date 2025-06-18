// @ts-check
import astro from "./astro.js";
import base from "./base.js";
import jest from "./jest.js";
import next from "./next.js";
import react from "./react.js";
import stylistic from "./stylistic.js";
import typeAware from "./type-aware.js";
import typescript from "./typescript.js";
import vitest from "./vitest.js";

export default [...base, ...next, ...stylistic, ...typeAware, ...vitest];

export { astro, base, jest, next, react, stylistic, typeAware, typescript, vitest };
