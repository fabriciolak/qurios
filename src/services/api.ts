import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'

const cookieToken = Cookies.get('qurios-token')

const apiUrl = {
  dev: 'http://localhost:3333',
  prod: 'https://qurios-backend.onrender.com'
}

export const api = axios.create({
  baseURL: apiUrl.prod,
  headers: {
    'Authorization': `Bearer ${cookieToken}`
  }
})

api.interceptors.response.use(response => {
  return response
}, (error: AxiosError) => {
  if (error.response?.status === 401) {
    Cookies.remove('qurios-token')
    window.location.href = '/app/login'
  }

  return Promise.reject(error)  
})