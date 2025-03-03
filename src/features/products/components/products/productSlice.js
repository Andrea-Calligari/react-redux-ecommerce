import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cart : [],
    totalPrice: 0,
    filters
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;
            const existingProduct = state.products.cart.find((el)=> el.id === product.id);

            if(existingProduct){

            }
        },
        removeProduct:(state,action)=>{
            state.products.cart.filter

        }

    },



});
export default productSlice;