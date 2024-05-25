import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/IMDB-CLONE/', // Replace 'IMDB-CLONE' with your repository name
});
