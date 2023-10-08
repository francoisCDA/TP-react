import React from 'react'
import ReactDOM from 'react-dom/client'
import '@radix-ui/themes/styles.css';
import App from './App.jsx'
import {  Theme } from '@radix-ui/themes'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme accentColor="mint" grayColor="gray" panelBackground="solid" scaling="100%" radius="full">
 
      <App />

    </Theme>
  </React.StrictMode>,
)