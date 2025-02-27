import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {  // Any request that starts with "/api" will be proxied
        target: 'http://localhost:5000',  // Your backend URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')  // Removes "/api" prefix before forwarding
      }
    }
  }
});
