<script setup lang="ts">
import MusicListItem from '@/components/Index/MusicList/Item.vue'
import type { Music } from '@/types/music'

const musics: Ref<Music[]> = ref([])

const template: Music = {
  id: 1,
  genre: 'J-POP',
  title: '夜に駆ける',
  artist: 'YOASOBI',
  bpm: {
    max: 180,
    min: 180
  },
  versionHistory: [{
    versionNo: 1,
    type: 'add',
    softwareVersion: 'J:A:A:1.0.0'
  }],
  patterns: [{
    level: 1,
    difficulty: 'beginner',
    revision: 1
  }]
}

onMounted(() => {
  const target = []
  
  for (let i = 0; i < 10; i++) {
    target.push(template)
  }

  musics.value = target
})

</script>

<template>
  <div class="space-y-4">
    <MusicListItem v-for="music in musics" :key="music.id" :music="music" />
  </div>
</template>