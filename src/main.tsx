import React from 'react'
import ReactDOM from 'react-dom/client'
import { globalStyles } from './styles/globalStyles.ts'
import App from './App.tsx'

globalStyles()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
