<script setup lang="ts">
import type { Music } from '@/types/music'

const props = defineProps<{
  music: Music
}>()
</script>

<template>
  <div>
    <NuxtLink to="/detail">
      <div class="bg-neutral-900 rounded-md p-3 flex items-center space-x-4">
        <div>{{ props.music.versionHistory[0].versionNo }}</div>
        <div class="badge">{{ props.music.genre }}</div>
        <div>{{ props.music.artist }}</div>
        <div class="">{{ props.music.title }}</div>
      </div>
    </NuxtLink>
  </div>
</template>
