import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['healthcheck.railway.app', 'spotifyscam-production.up.railway.app'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
