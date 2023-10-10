import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
import { RouterProvider } from 'react-router-dom'
import Mappy from './app-mappy.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Mappy} />
  </React.StrictMode>

)
