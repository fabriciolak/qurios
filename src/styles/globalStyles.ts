import {globalCss} from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: '$white',
    color: '$text',
    '-webkit-font-smoothing': 'antialiased',
    height: '200vh',
  },
  
  'body, input, textarea, button': {
    fontFamily: '$roboto',
    fontWeight: 'regular',
    fontSize: '1rem',
  },

  '@font-face': [
    {
      fontFamily: 'Segoe UI',
      src: 'local("segoe-ui-bold"), url("/src/assets/fonts/segoe-ui.woff")'
    },
    {
      fontFamily: 'Segoe UI Bold',
      src: 'local("segoe-ui-bold"), url("/src/assets/fonts/segoe-ui-bold.woff")'
    }
  ]
})
