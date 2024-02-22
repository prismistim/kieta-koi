import type { Config } from '@nuxtjs/tailwindcss'
import daisyui from 'daisyui'

export default <Partial<Config>> {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['kosugi', 'sans-serif']
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      'mytheme': {
        'primary': '#7480ff',
        'secondary': '#ff52d9',
        'accent': '#00cdb7',
        'neutral': '#2a323c',
        'base-100': '#050505'
      }
    }]
  }
}
