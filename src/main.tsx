import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <video className="fixed top-0 left-0 min-w-full min-h-full -z-1 object-cover" autoPlay muted playsInline loop>
        <source src="/bg.webm" type="video/webm" />
      </video>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
