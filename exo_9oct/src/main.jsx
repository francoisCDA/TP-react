import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import intineraires from './app-routes.jsx'

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';



ReactDOM.createRoot(document.getElementById('root')).render(
    <Theme  accentColor="bronze" grayColor="sand" radius="large" scaling="95%">
        <RouterProvider router={intineraires} />
    </Theme>

)
