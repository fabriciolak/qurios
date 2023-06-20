import { ReactNode, createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { api } from '../services/api'
import { AxiosError } from 'axios'

interface User {
  id?: string
  name?: string,
  username?: string
  email?: string
}

type SignInCredentialsType = { email: string, password: string }
type SignUpCredentialsType = { name: string, username: string, email: string, password: string }

interface AuthContextData {
  user: User
  isAuthenticated: boolean
  signIn(credentials: SignInCredentialsType): Promise<void>
  signUp(credentials: SignUpCredentialsType): Promise<void> 
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({})
  const isAuthenticated = !!user
  
  useEffect(() => {
    const token = Cookies.get('qurios-token')

    
    if (token) {
      api.get(`users/me`).then(response => {
        const { name, username, email, id } = response.data

        setUser(() => {
          return { name, username, email, id }
        })
      })
      // .catch(() => {        
      //   handleInvalidToken()
      // })
    }

  }, [])
  
  // function handleInvalidToken() {
  //   Cookies.remove('qurios-token')
  //   setUser({})
  //   window.location.href = '/app/login'
  // }

  async function signIn({ email, password }:SignInCredentialsType) {
    try {
      const { data } = await api.post('/sessions', {
        email,
        password
      })
      
      Cookies.set('qurios-token', data.token, {
        expires: 30,
        path: '/'
      })

      setUser({ email: email })

      api.defaults.headers['Authorization'] = `Bearer ${data.token}`

    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message)
      }
    }
  }

  async function signUp({ name, username, email, password }:SignUpCredentialsType) {
    try {
      const { data } = await api.post('/users', {
        name,
        username,
        email,
        password,
      })
      
      setUser({ email: data.email, name: data.name, username: data.username })

      await signIn({ email, password })
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message)
      }
    }
  }


  return (
    <AuthContext.Provider value={{
      user: user ? user : {},
      isAuthenticated,
      signIn,
      signUp
    }}>
      {children}
    </AuthContext.Provider>
  )
}
