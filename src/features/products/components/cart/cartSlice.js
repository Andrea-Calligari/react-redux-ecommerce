import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    item: [],
    totalQuantity: 0,
    totalPrice: 0
}



const cartSLice = createSlice({
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



export const { addToCart, removeFromCart, updateQUantity, clearCart } = cartSLice.actions;
export default cartSLice.reducer;