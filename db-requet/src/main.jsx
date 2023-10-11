import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import AppToDo from './exoToDo/AppToDo.jsx'

import { RouterProvider } from 'react-router-dom'
import viamichelin from './routes/route-todo'


ReactDOM.createRoot(document.getElementById('root')).render(
  //<AppToDo />
  <RouterProvider router={viamichelin} />
)
