import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio-/',
  server: {
    port: 5188,
    watch: {
      ignored: [
        '**/Screenshot*',
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.pdf',
        '**/node_modules/**'
      ]
    }
  }
});
