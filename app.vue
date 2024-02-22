<script setup lang="ts">
import '@fontsource/kosugi'
import SiteHeader from '@/components/Header.vue'
</script>

<template>
  <NuxtLayout>
    <template #site-title>
      <SiteHeader />
    </template>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style lang="postcss">
body {
  @apply font-sans;
}
</style>