import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../components/specific/products/ProductList';
import Cart from '../components/specific/cart/Cart';
import CheckOut from '../components/specific/cart/CheckOut';
import HomePage from '../pages/HomePage';
import ProductDetails from '../components/specific/products/ProductDetails';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductList />} />
      <Route path='/products/:id' element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<CheckOut />} />
      <Route path='/*' element={<NotFoundPage />} />

    </Routes>
  )
}

export default AppRouter

