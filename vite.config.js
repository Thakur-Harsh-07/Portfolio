import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true,
    rollupOptions: {
      input: './src/main.jsx',
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    proxy: {
      "/api": "https://portfolio-jhx3.onrender.com/", // the address that u serve in the backend 
    },
  },
  base: '/'
})

