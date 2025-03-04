import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            
        },
        removeFromCart: (state, action) => {

        },
        updateQUantity: (state, action) => {

        },
        clearCart: (stat, action) => {

        }
    }
});



export const { addToCart, removeFromCart, updateQUantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;