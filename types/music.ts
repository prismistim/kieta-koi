type VersionHistoryItem = {
  versionNo: number
  softwareVersion: string
  type: 'add' | 'update' | 'delete'
}

type Pattern = {
  difficulty: 'beginner' | 'normal' | 'hyper' | 'another' | 'black_another' | 'leggendaria'
  level: number
  notes?: number
  revision: number
}

export type Music = {
  id: number
  title: string
  artist: string
  bpm: {
    max: number
    min: number
  }
  genre: string
  versionHistory: VersionHistoryItem[]
  patterns: Pattern[]
}
