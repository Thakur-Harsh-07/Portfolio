import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    proxy: {
      "/api": "https://portfolio-jhx3.onrender.com/", // the address that u serve in the backend 
    },
  },
  base: './'
})

