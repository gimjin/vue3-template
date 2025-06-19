<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/views/app-header/AppHeader.vue'

const keepAliveExclude = ref<string[]>([])
</script>

<template>
  <AppHeader />
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <KeepAlive :exclude="keepAliveExclude">
        <component :is="Component" />
      </KeepAlive>
    </template>
    <template v-else>
      <el-skeleton animated />
    </template>
  </RouterView>
</template>
