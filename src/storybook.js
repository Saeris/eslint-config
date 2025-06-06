import storybook from 'eslint-plugin-storybook';

/**
 * Storybook https://github.com/storybookjs/eslint-plugin-storybook
 *
 * Last Reviewed: v0.12.0
 *
 * @satisfies {import("eslint").Linter.Config}
 */
const configStorybook = [
  {
    name: `storybook-global`,
    ignores: [`!.storybook`]
  },
  {
    name: `storybook`,
    files: [`**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)`],
    plugins: { storybook },
    rules: {
      'storybook/await-interactions': `error`,
      'storybook/context-in-play-function': `warn`,
      'storybook/csf-component': `warn`,
      'storybook/default-exports': `error`,
      'storybook/hierarchy-separator': `error`,
      'storybook/meta-inline-properties': `off`,
      'storybook/meta-satisfies-type': `warn`,
      'storybook/no-redundant-story-name': `error`,
      'storybook/no-title-property-in-meta': `error`,
      'storybook/no-uninstalled-addons': `error`,
      'storybook/prefer-pascal-case': `error`,
      'storybook/story-exports': `error`,
      'storybook/use-storybook-expect': `error`,
      'storybook/use-storybook-testing-library': `error`
    }
  }
];

export default [configStorybook];
