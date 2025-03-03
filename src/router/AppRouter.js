import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../components/specific/products/ProductList';
import ProductDetails from '../components/specific/products/ProductDetails;
import Cart from '../components/specific/cart/Cart';
import CheckOut from '../components/specific/cart/CheckOut';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/products' element={<ProductList/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<CheckOut/>} />

    </Routes>
  )
}

export default AppRouter

