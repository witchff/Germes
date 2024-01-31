import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: '/src/api',
      assets: '/src/assets',
      application: '/src/application',
      context: '/src/context',
      hooks: '/src/hooks',
      routing: '/src/routing',
      shared: '/src/shared',
      styles: '/src/styles',
      types: '/src/types',
    },
  },
});
