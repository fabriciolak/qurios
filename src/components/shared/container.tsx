import { styled } from "../../styles";

export const Container = styled('div', {
  width: '100%',
  maxWidth: '1440px',
  height: '7.5rem',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  flexDirection: "column",
  
  button: {
    marginLeft: 'auto'
  },

  padding: '0 2rem',
  border: '1px solid',

  variants: {
    size: {
      full: {
        maxWidth: '100%',
      }
    }
  }
})