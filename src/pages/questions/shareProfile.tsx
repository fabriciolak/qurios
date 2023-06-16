import { styled } from "../../styles"

export function ShareProfile() {
  return (
    <>
      <Container>
        <p>Compartilhe seu Link</p>
        <span>https://qurios.vercel.app/fabricio</span>
      </Container>
    </>
  )
}

const Container = styled('div', {
  width: '100%',
  maxWidth: '48rem',
  height: '11.75rem',
  borderRadius: '16px',

  padding: '1rem',
  margin: '1rem 0',

  border: '2px solid $gray-light',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  backgroundColor: '$white',

  p: {
    fontSize: '1rem',
    lineHeight: '16px',
    fontWeight: '700',
    fontFamily: '$roboto'
  },

  span: {
    fontSize: '1.5rem',
    lineHeight: '1rem',
    fontWeight: '700',
    fontFamily: '$roboto',
    marginTop: '1.5rem',
    color: '$blue-dark'
  }
})