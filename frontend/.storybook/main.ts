import type { StorybookConfig } from '@storybook/react-webpack5';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve && (config.resolve.plugins = [new TsconfigPathsPlugin()]);
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;
