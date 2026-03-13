/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/physical-therapy/',
  plugins: [react()],
  server: {
    proxy: {
      '/physical-therapy/api/gemini': {
        target: 'https://pt-gemini-proxy.itzsid.workers.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/physical-therapy\/api\/gemini/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    include: ['tests/**/*.{test,spec}.{ts,tsx}'],
  },
})
