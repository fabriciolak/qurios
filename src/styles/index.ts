import { createStitches } from '@stitches/react'

export const {
  css,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    fonts: {
      roboto: 'Roboto, sans-serif',
      sora: 'Sora, sans-serif',
      segoeui: 'Segoe UI, sans-serif',
      segoeuiBold: 'Segoe UI Bold, sans-serif',
    },
    colors: {
      // Commons
      white: '#FFF',
      black: '#000',

     // Card
     'blue-light': 'hsla(207, 100%, 90%, 1)',
     'blue-dark': 'hsla(207, 100%, 50%, 1)',

     'red-light': 'hsla(0, 92%, 95%, 1)',
     'red-dark': 'hsla(0, 100%, 79%, 1)',

     'green-light': 'hsla(134, 74%, 91%, 1)',
     'green-dark': 'hsla(133, 98%, 39%, 1)',

     'gray-light': 'hsla(0, 0%, 94%, 1)',
     'gray-dark': 'hsla(0, 0%, 53%, 1)',

     'purple-light': 'hsla(284, 100%, 94%, 1)',
     'purple-dark': 'hsla(284, 100%, 50%, 1)',

     // Text
     title: 'hsla(228, 25%, 20%, 1)',
     text: 'hsla(216, 18%, 34%, 1)'
    },
  },
})