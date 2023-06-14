import { useRouteError } from 'react-router-dom'

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
    <div id='error-page'>
      <h2>Something went wrong 😨</h2>
      <p>{error.status}</p>
      <p>{error.statusText}</p>
    </div>
  )
}