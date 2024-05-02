// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    // Output directory for production build
    outDir: 'dist',
    // Relative path to index.html from project root
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  // Additional configuration for serving on Netlify
  server: {
    // Base path for serving the application
    base: './',
    // Port to use for development (optional)
    port: 3000
  }
});
