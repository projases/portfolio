// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      external: ['/node_modules/.vite/deps/pexels.js?v=6e07c4d5']
    }
  },
  server: {
    base: './',
    port: 3000
  }
});
