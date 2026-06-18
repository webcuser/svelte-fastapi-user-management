import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      '/register': 'http://localhost:8000',
      '/login': 'http://localhost:8000'
    }
  }
});