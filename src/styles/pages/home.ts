import { styled } from "..";
import { Card } from "../../components/shared/Card";

export const Container = styled('div', {
  position: 'relative',
  height: "calc(100vh - 7.5rem)",
  margin: '0 auto',

  // overflow: 'hidden',

  background: '$blue-light',

  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',

  '@media (min-width: 660px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(660px, 1fr))'
  },

  '@media (min-width: 835px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(835, 1fr))'
  },
})

export const Content = styled('div', {
  width: '100%',
  maxWidth: '660px',
  marginLeft: 'auto',
  padding: '117px 2rem 0 2rem',
  
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',

  '.content-group': {
    marginTop: '2rem'
  },

  '.title': {
    fontFamily: '$sora',
    fontWeight: 700,
    fontSize: '4rem',
    lineHeight: '5.0625rem',
  
    color: '$title',
  },

  '.description': {
    fontFamily: '$segoeui',
    fontWeight: 400,
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    
    color: '$text',

    marginBottom: '1.5rem'
  },

  'button': {
    width: '21rem',
    height: '4.25rem',
    borderRadius: '999px',
    color: '$white',
    fontWeight: 700,
    backgroundColor: '#008BFE',
    border: 'none',
    outline: 'none'
  }
})

export const BackgroundImage = styled('div', {
  position: 'relative',
  
  '.bk, .bl': {
    position: 'absolute',
    transform: 'rotate(-15deg)',
    
    [`div`]: {
      marginBottom: '1rem',
    }
  },

  '.bk': {
    top: '-950px',
    // left: '130px',
    left: '-50px',
  },
  
  '.bl': {
    top: '-200px',
    left: '433px',
  }
})
