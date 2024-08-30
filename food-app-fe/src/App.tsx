import { useState } from 'react'
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import React from 'react';
import Login from './login/login';
import { Home } from './home/home';
import { OrderHome } from './orderHomePage/orderHome';
import OutletDetails from './outletDetails/outletDetails';
import Signup from './signup/signup';
import router from './Routes/router';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <RouterProvider router={router} />
  
   </>
  )
}

export default App
