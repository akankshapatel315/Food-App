import React, { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../login/login';
import ProtectedRoute from './ProtectedRoute';
import { Home } from '../home/home';
import Signup from '../signup/signup';
import Menu from '../outletDetails/menu';
import OutletDetails from '../outletDetails/outletDetails';


// const [isAuthenticated,setIsAuthenticated]=useState(true)

const isAuthenticated = false
// Create the router configuration
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: isAuthenticated ? <Home /> : <Login />,
      index: true
    },
    {
      path: '/signup',
      element: isAuthenticated ? <Home /> : <Signup />,
      index: true
    },
    {
      element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/menu',
          element: <OutletDetails />
        },
      ]
    },
    {
      path: '*',
      element: <p>404 Error - Nothing here...</p>
    }
  ]
);

export default router;