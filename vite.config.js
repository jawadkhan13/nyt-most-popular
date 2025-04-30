import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';           

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // now `@nyt` will point to NYTDB service
      '@nyt': path.resolve(__dirname, 'src/services/NYTDB.js'),
    },
  },
});
