import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import User from './components/user';
import Home from './components/user/Home';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import { SnackbarProvider } from 'notistack';
import Admin from './components/admin';
import AddProduct from './components/admin/AddProduct';
import Product from './components/user/Product';
import { UserProvider } from './context/UserContext';
import ProductbyCategory from './components/user/ProductbyCategory';

const App = () => {

  return (

    <BrowserRouter>
    <UserProvider>
      <SnackbarProvider>
       
        <Routes>
          <Route path='/' element={<Navigate to={"/user/home"} />} />

          <Route path='user' element={<User />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='product' element={<Product />} />
            <Route path='productbycategory/:category' element={<ProductbyCategory/>}/>
          </Route>

          <Route path='admin' element={<Admin/>}>
            <Route path='addproduct' element={<AddProduct/>}/>
          </Route>

        </Routes>
      </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App