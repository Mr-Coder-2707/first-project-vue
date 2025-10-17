import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/first-project-vue/', // For GitHub Pages compatibility
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
