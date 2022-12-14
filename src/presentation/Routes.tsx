import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CurrentWeather } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CurrentWeather />
  }
])

const Routes: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Routes
