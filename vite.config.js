// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    host: true
  },
  css: {
    postcss: './postcss.config.js'
  },
  base: '/',
  preview: {
    port: 3000
  }
})