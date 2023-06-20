import { globalCss, keyframes } from '.'

const skeletonAnimation = keyframes({
  '0%': {
    backgroundColor: 'hsl(200, 20%, 70%)'
  },
  
  '100%': {
    backgroundColor: 'hsl(200, 20%, 95%)'
  }
})

const skeletonAnimationBorder = keyframes({
  '0%': {
    border: '1px solid hsl(200, 20%, 70%)'
  },
  
  '100%': {
    border: '1px solid hsl(200, 20%, 95%)'
  }
})

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
  },
  
  'body, input, textarea, button': {
    fontFamily: '$roboto',
    fontWeight: 'regular',
    fontSize: '1rem',
  },

  'a': {
    textDecoration: 'none'
  },

  '.skeleton': {
    opacity: '.7',
    animation: `${skeletonAnimation} 1s linear infinite alternate`
  },
  
  '.skeleton-text': {
    width: '100%',
    height: '.5em',
    marginBottom: '.25em',
    borderRadius: '.125em',
  },
  
  '.skeleton-text-full': {
    width: '100%',
    height: '100%',
    marginBottom: '.25em',
    borderRadius: '.125em',
  },
  
  '.skeleton-border': {
    animation: `${skeletonAnimationBorder} 1s linear infinite alternate`,
    border: '1px solid hsl(200, 20%, 95%)'
  },
  
  '.skeleton-text:last-child': {
    marginBottom: '0',
    width: '80%',
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

