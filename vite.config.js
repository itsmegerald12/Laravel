import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'vite-plugin-laravel';

export default defineConfig({
  plugins: [
    laravel(),
    vue(),
  ],
  build: {
    outDir: 'public/build', // Ensure this is the correct output directory
  },
});
