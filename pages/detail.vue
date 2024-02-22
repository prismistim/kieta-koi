<script setup lang="ts">
import MusicInfoCard from '@/components/Detail/MusicInfoCard/Index.vue'
import { sample } from '@/statics/music'


</script>

<template>
  <div>
    <MusicInfoCard :music="sample" />
  </div>
</template>
