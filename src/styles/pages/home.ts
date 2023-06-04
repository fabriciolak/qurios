import { styled } from "..";

export const Container = styled('div', {
  maxWidth: '100%',
  margin: '0 auto',
  height: "calc(100vh - 7.5rem)",

  paddingTop: '7.5rem',
  backgroundColor: '$blue-light',

  '.center': {
    maxWidth: '1280px',
    margin: '0 auto',

    'h1, .footer': {
      maxWidth: '40.8125rem',
    }
  },

  '.footer': {
    marginTop: '32px',
    
    display: "flex",
    flexDirection: 'column',
    gap: '24px'
  },

  '.title': {
    fontFamily: '$sora',
    fontSize: '4rem',
    fontWeight: 700,
    lineHeight: '5.0625rem',
    color: '$title'
  },

  '.description': {
    fontFamily: '$segoeui',
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: '1.5rem',
  },

  'button': {
    width: '21rem',
    height: '4.25rem',
    borderRadius: '999px',
    backgroundColor: '#008BFE',
    color: '$white',

    border: 'none',
    outline: 'none',

    cursor: 'pointer'
  }
})
