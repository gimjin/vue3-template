import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { apis } from '@/request'

export const useUserInfoStore = defineStore('user-info', () => {
  const name = ref('')

  async function setUserInfo() {
    try {
      const res = await axios.get(apis.getUserInfo)

      if (res.data.code === 200) {
        name.value = res.data.name
      } else {
        throw new Error(res.data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    name,
    setUserInfo,
  }
})
