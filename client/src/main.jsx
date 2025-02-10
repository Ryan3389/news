import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import NewsPage from './pages/NewsPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error, page not found</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/news',
        element: <NewsPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
