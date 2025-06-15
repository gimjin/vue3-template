import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppInfoStore = defineStore('app-info', () => {
  const name = ref(__APP_NAME__)
  const version = ref(__APP_VERSION__)

  return {
    name,
    version,
  }
})
