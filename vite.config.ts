import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  root: 'playground',
  resolve: {
    alias: {
      'reka-m3': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
