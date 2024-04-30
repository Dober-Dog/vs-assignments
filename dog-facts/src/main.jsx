import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FactContextProvider } from './components/FactContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FactContextProvider>
    <App />
  </FactContextProvider>
)
