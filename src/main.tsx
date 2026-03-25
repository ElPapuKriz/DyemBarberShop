import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { appRouter } from './router/barber.router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
