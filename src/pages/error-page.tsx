import { Link, useRouteError } from 'react-router-dom'
import { styled } from '../styles'
import { Button } from '../components/shared/Button'

type ErrorResponse = {
  data: string
  error: {
    message: string
    stack: string
  }
  internal: boolean
  status: number
  statusText: string
}

export function ErrorPage() {
  const error = useRouteError() as ErrorResponse

  return (
    <Container id='error-page'>
      <ErrorContainer>
        <h2>Something went wrong 😨</h2>
        <p>{error.status}</p>
        <p>{error.statusText}</p>

        <Button variant='tertiary' as={Link} to={`/`}>
          Voltar
        </Button>
      </ErrorContainer>
    </Container>
  )
}

const Container = styled('div', {
  width: '100%',
  // maxWidth: '480px',
  height: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const ErrorContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '16px'
})