import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  preview: {
    host: true, // Bind to all addresses
    port: process.env.PORT || 4173,
    strictPort: true,
    allowedHosts: ['healthcheck.railway.app', 'spotifyscam-production.up.railway.app', 'spotify-prod.up.railway.app', 'spotifymusicback.up.railway.app'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
