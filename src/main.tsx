import React from 'react'
import ReactDOM from 'react-dom/client'
import Cookies from 'js-cookie'
import { createBrowserRouter, LoaderFunctionArgs, redirect, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { AuthContextProvider } from './contexts/authContext.tsx'
import { globalStyles } from './styles/globalStyles.ts'
import { Register } from './pages/app/register.tsx'
import { Login } from './pages/app/login.tsx'
import { ErrorPage } from './pages/error-page.tsx'
import { Profile } from './pages/profile/index.tsx'
import { QuestionsPage } from './pages/questions/index.tsx'
import { ReplyPage } from './pages/reply/index.tsx'

globalStyles()

function publicGuestRoute(response: LoaderFunctionArgs) {
  const cookie = Cookies.get('qurios-token')
      
  if (cookie) {
    return redirect('/questions')
  }

  return response
}

function privateRoute(response: LoaderFunctionArgs) {
  const cookie = Cookies.get('qurios-token')
      
  if (!cookie) {
    return redirect('/app/login')
  }

  return response
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <ErrorPage />,
    loader: (response) => {
      return privateRoute(response)
    }
  },
  {
    path: '/questions',
    element: <QuestionsPage />,
    errorElement: <ErrorPage />,
    loader: (response) => {
      return privateRoute(response)
    }
  },
  {
    path: '/reply/:replyId',
    element: <ReplyPage />,
    errorElement: <ErrorPage />,
    loader: (response) => {
      return privateRoute(response)
    }
  },
  {
    path: '/app/login',
    element: <Login />,
    loader: (response) => {
      return publicGuestRoute(response)
    }
  },
  {
    path: '/app/register',
    element: <Register />,
    loader: (response) => {
      return publicGuestRoute(response)
    }
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
