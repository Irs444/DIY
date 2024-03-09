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
import InteriorDesigning from './components/user/InteriorDesigning';
import Valentine from './components/user/Valentine';
import Decoration from './components/user/Decoration';
import GiftHamper from './components/user/GiftHamper';
import Details from './components/user/Details';
import Cart from './components/user/Cart';
import { ProductProvider } from './context/ProductContext';

const App = () => {

  return (

    <BrowserRouter>
    <ProductProvider>
    <UserProvider>
      <SnackbarProvider>
       
        <Routes>
          <Route path='/' element={<Navigate to={"/user/home"} />} />

          <Route path='user' element={<User />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='product' element={<Product />} />
            <Route path='cart' element={<Cart />} />

            <Route path='details/:id' element={<Details />} />
            <Route path='productbycategory/:category' element={<ProductbyCategory/>}/>
            <Route path='getinterior/:category' element={<InteriorDesigning/>}/>
            <Route path='getvalentine/:category' element={<Valentine/>}/>
            <Route path='getdecoration/:category' element={<Decoration/>}/>
            <Route path='getgift/:category' element={<GiftHamper/>}/>
          </Route>

          <Route path='admin' element={<Admin/>}>
            <Route path='addproduct' element={<AddProduct/>}/>
          </Route>

        </Routes>
      </SnackbarProvider>
      </UserProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App