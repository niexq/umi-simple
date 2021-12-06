import { defineConfig } from 'umi';

const repo = 'umi-simple';

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
