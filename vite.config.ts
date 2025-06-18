import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

const appName = process.env.npm_package_name
const appVersion = process.env.npm_package_version
const commitHash = execSync('git rev-parse --short HEAD').toString().trim()

export default defineConfig({
  base: './',
  define: {
    __APP_INFO__: JSON.stringify(`${appName}: ${appVersion}-${commitHash}`),
  },
  plugins: [
    vue(),
    svgLoader({
      svgo: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'https://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
