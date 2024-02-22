import type { Music } from '@/types/music'

export const sample: Music = {
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