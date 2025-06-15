<script setup lang="ts">
import { watch } from 'vue'
import { usePreferredDark } from '@vueuse/core'
import AppHeader from '@/components/AppHeader.vue'
import { useAppInfoStore } from './stores/app-info'

const appInfoStore = useAppInfoStore()
console.info(appInfoStore.name, appInfoStore.version)

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
</script>

<template>
  <AppHeader />
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>
