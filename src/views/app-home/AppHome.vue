<script lang="ts" setup>
import { onMounted } from 'vue'
import { useUserInfoStore } from '@/stores/user-info'

const userInfoStore = useUserInfoStore()

onMounted(async () => {
  try {
    await userInfoStore.setUserInfo()
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="app-home">
    {{ userInfoStore.name || 'User' }}
  </div>
</template>

<style lang="scss" scoped>
.app-home {
  color: var(--el-text-color-primary);
}
</style>
