import { defineConfig } from 'umi';

const repo = 'dumi-template-simple';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
});
