import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use your live Render backend URL
const RENDER_BACKEND_URL = 'https://yt-media-downloader.onrender.com';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: RENDER_BACKEND_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
});
// In production, make sure your frontend fetches from the full Render backend URL, not a relative /api path. 