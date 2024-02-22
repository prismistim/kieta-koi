<script setup lang="ts">
import type { Music } from '@/types/music'

const props = defineProps<{
  music: Music
}>()
</script>

<template>
  <div>
    <div class="text-lg">{{ props.music.genre }}</div>
    <div class="text-xl">{{ props.music.title }}</div>
    <div class="text-lg">{{ props.music.artist }}</div>
  </div>
</template>
