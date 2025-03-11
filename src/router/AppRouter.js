import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../components/specific/products/ProductList';
import CheckOut from '../components/specific/cart/CheckOut';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import SuccessPage from '../pages/SuccessPage';
import CancelPage from '../pages/CancelPage'; 

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductList />} />
      <Route path='/checkout' element={<CheckOut />} />
      <Route path='/success' element={<SuccessPage />} />  
      <Route path='/cancel' element={<CancelPage />} />    
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
