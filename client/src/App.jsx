import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import User from './components/user';
import Home from './components/user/Home';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    
    <BrowserRouter>
      <SnackbarProvider>
        <Routes>
          <Route path='/' element={<Navigate to={"/user/home"} />} />

          <Route path='user' element={<User />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>

        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  )
}

export default App