import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import svgLoader from 'vite-svg-loader'

const appName = process.env.npm_package_name
const appVersion = process.env.npm_package_version
const commitHash = execSync('git rev-parse --short HEAD').toString().trim()

export default defineConfig({
  define: {
    __APP_NAME__: JSON.stringify(appName),
    __APP_VERSION__: JSON.stringify(`${appVersion}-${commitHash}`),
  },
  plugins: [
    vue(),
    UnoCSS(),
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
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
