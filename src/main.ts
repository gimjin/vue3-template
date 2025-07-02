import { setupAxios } from './request'
import { createApp, watch } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import { usePreferredDark } from '@vueuse/core'

import 'minireset.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.scss'

setupAxios()

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

// theme
const isDark = usePreferredDark()
watch(
  isDark,
  (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  { immediate: true },
)

console.info(__APP_INFO__)
