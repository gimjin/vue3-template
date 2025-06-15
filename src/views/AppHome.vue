<script lang="ts" setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { apis } from '@/request'

onMounted(async () => {
  try {
    const res = await axios.get(apis.getUserInfo)
    console.info(res)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="app-home">
    <h1 class="cursor-pointer hover:text-red">Home</h1>
  </div>
</template>

<style lang="scss" scoped>
.app-home {
  color: var(--el-text-color-primary);
}
</style>
