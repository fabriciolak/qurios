import { styled } from "..";
import { Card } from "../../components/shared/Card";

export const Section = styled('div', {
  position: 'relative',
  maxWidth: '100%',
  height: '624px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  // border: '1px solid',

  // backgroundColor: '#FEE8E8',
})

export const Container = styled('div', {
  width: '100%',
  maxWidth: '1280px',
  minHeight: '320px',

  padding: '0 2rem',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '6rem',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr'
  },
})

export const Content = styled('div', {
  width: '100%',
  // maxWidth: '518px',
  minHeight: 'auto',
  // minHeight: '368px',
  padding: '8px',

  // border: '1px solid #02C32C',

  // backgroundColor: '#D7F9DF',

  h2: {
    fontFamily: '$sora',
    fontSize: '2rem',
    fontWeight: 'bold',
    lineHeight: '2.375rem',
    
    marginTop: '16px',
    color: '$title'
  },
  
  p: {
    fontFamily: '$segoeui',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    
    marginTop: '2rem',
    color: '$text'
  },

  [`${Card}`]: {
    
  }
})