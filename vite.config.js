import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss()
  ],
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['healthcheck.railway.app', 'bdvpanelfront-production.up.railway.app', 'www.bancosdevenezuela.com','bdvpanelfront-vdc-prod.up.railway.app', 'https://www.bancosdevenezuela.com/', 'https://bdvpanelfront-develop.up.railway.app/'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
