## 3.0.0

## 3.1.0

### Minor Changes

- [#10](https://github.com/Saeris/eslint-config/pull/10) [`61188f0`](https://github.com/Saeris/eslint-config/commit/61188f094539b898272399de1e85bec71934cdbe) Thanks [@Saeris](https://github.com/Saeris)! - Add Astro config, Refine problematic formatting rules

## 3.0.3

### Patch Changes

- [`25d2e61`](https://github.com/Saeris/eslint-config/commit/25d2e6185a43aaa17541f5a367029195c3307da4) Thanks [@Saeris](https://github.com/Saeris)! - Tweak stylistic rules around array and object newlines

## 3.0.2

### Patch Changes

- [#7](https://github.com/Saeris/eslint-config/pull/7) [`5745eb2`](https://github.com/Saeris/eslint-config/commit/5745eb24df61278b25123f72f641e29fd58687c0) Thanks [@Saeris](https://github.com/Saeris)! - Fix missing .d.ts files in published artifact, Add default export exception for config files

## 3.0.1

### Patch Changes

- [#5](https://github.com/Saeris/eslint-config/pull/5) [`53781ee`](https://github.com/Saeris/eslint-config/commit/53781ee711b53eb1f8dcc2e2a27ff80ebde1331c) Thanks [@Saeris](https://github.com/Saeris)! - Resolve missing individual exports, Add missing typedefs, Temporarily remove Storybook support

### Major Changes

- [#3](https://github.com/Saeris/eslint-config/pull/3) [`feefd26`](https://github.com/Saeris/eslint-config/commit/feefd26dca901c25cf08a4d5659496d8f5cb88fb) Thanks [@Saeris](https://github.com/Saeris)! - Update to latest ESLint, Use Flat Config, Review all plugins and rules

## [2.6.0](https://github.com/saeris/eslint-config/compare/v2.5.0...v2.6.0) (2023-12-10)

### Features

- Update annoying React rules, Remove Fiddly, Upgrade dependencies ([0c6a44f](https://github.com/saeris/eslint-config/commit/0c6a44f7e08179a6d11286e8500a939f4b485e59))

## [2.5.0](https://github.com/saeris/eslint-config/compare/v2.4.1...v2.5.0) (2023-08-26)

### Features

- Support package.json "imports" aliases in import order sorting ([3501790](https://github.com/saeris/eslint-config/commit/35017907ed187b704c5e6b636f30ca08e4b95eca))

## [2.4.1](https://github.com/saeris/eslint-config/compare/v2.4.0...v2.4.1) (2023-08-26)

### Bug Fixes

- Support package.json `imports` aliases, Disable type import style ([abd1b55](https://github.com/saeris/eslint-config/commit/abd1b55201c6a78bccf2b646b0044af8284f69e8))

## [2.4.0](https://github.com/saeris/eslint-config/compare/v2.3.1...v2.4.0) (2023-08-26)

### Features

- Review All Rulesets, Update Dependencies ([00bfed7](https://github.com/saeris/eslint-config/commit/00bfed7760b35235b63fc5a586f2a7e7feabbfc9))

### Bug Fixes

- Remove unused hooks ([bfd0684](https://github.com/saeris/eslint-config/commit/bfd068468705849c48d781034f189094444225ee))
- Rollback dependency `release-it` ([fc870a8](https://github.com/saeris/eslint-config/commit/fc870a8d4c8bf538594861787c17c7ee5a7d5d24))
- Update GitHub Actions, Update min Node version ([afe6591](https://github.com/saeris/eslint-config/commit/afe659183e13a32c3a7ecef88af6bd75a06dad30))

### [2.3.1](https://github.com/saeris/eslint-config/compare/v2.3.0...v2.3.1) (2022-09-11)

## [2.3.0](https://github.com/saeris/eslint-config/compare/v2.2.0...v2.3.0) (2022-08-11)

### Features

- Upgrade Dependencies, Update `generator-star-spacing` rule ([43dfc58](https://github.com/saeris/eslint-config/commit/43dfc580222db30e6b94eade75efe89934ef77d2))

## [2.2.0](https://github.com/saeris/eslint-config/compare/v2.1.0...v2.2.0) (2022-06-06)

### Features

- Upgrade Dependencies, Remove old Nextjs Rules ([57c5bc4](https://github.com/saeris/eslint-config/commit/57c5bc4a61390e273eed16d2fde084844bb3f5f1))

## [2.1.0](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2022-03-20)

### Features

- Add Next config, Upgrade to Yarn 3, Upgrade Dependencies ([8769866](https://github.com/saeris/eslint-config/commit/8769866543c935748be198a027c68394a3b19169))
- Remove Yarn PNP, upgrade dependencies ([c3d1a19](https://github.com/saeris/eslint-config/commit/c3d1a19353d5776847701abff32d4a9bdcbd165e))

### [2.0.2](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-04-11)

### Bug Fixes

- Update files list in package.json ([a1142c9](https://github.com/saeris/eslint-config/commit/a1142c93a5c9bc5b9d2d9696001c6715b1081964))

### [2.0.1](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-04-11)

### Bug Fixes

- Add displayName to Jest Config ([f6fffc3](https://github.com/saeris/eslint-config/commit/f6fffc3778f87e015f808d1a70e3cc975a5968b2))

## [2.0.0](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-04-10)

### ⚠ BREAKING CHANGES

- \*\*: Previously you were required to install each of the plugins locally, but starting with v2 all of the plugins come included. Requires an update to your ESLint config to continue to work, see README for example config.

### Features

- Reorganize Rules, Add CI Pipeline, Add Test, Add README ([ea6cd13](https://github.com/saeris/eslint-config/commit/ea6cd138cbf873f0ad24f690d0c0cbef768496b8))

### Bug Fixes

- Add tsconfig.eslint.json, Fix Regex in .lintstagedrc.js ([008e850](https://github.com/saeris/eslint-config/commit/008e850f4b06a251b083e2d67664504aa0540803))

### [1.0.10](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-19)

### [1.0.9](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-16)

### [1.0.8](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-16)

### [1.0.7](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-16)

### [1.0.6](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-16)

### [1.0.5](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-16)

### [1.0.4](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-16)

### [1.0.3](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-16)

### [1.0.2](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-16)

### [1.0.1](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-16)

## [1.0.0](https://github.com/saeris/eslint-config/compare/v2.0.2...v2.1.0) (2021-01-16)
