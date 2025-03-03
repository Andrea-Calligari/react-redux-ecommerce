import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/products/components/productSlice';
import cartSlice from '../features/products/components/cart/cartSlice';

const store = configureStore({
    reducer:{
        products:  productSlice,
        cart: cartSlice,
    }

});

export default store;