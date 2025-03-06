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
            //recupero il prodotto dall'action.payload
            const product = action.payload;
            // vedo se esiste il prodotto 
            const existingProduct = state.items.filter(el => el.id === product.id);
            // se esiste aggiungo la quantita
            if (existingProduct) {
                existingProduct.quantity += 1;
            }// seno aggiungo il prodotto e setto la proprieta quantity a 1 
            else {
                state.items.push({ ...product, quantity: 1 });
            }
            // aggiorno il prezzo totale e la quantita dei prodotti presente nel carrello
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

        },
        removeFromCart: (state, action) => {
            // recupero l'id del prodotto 
            const productId = action.payload;
            // recupero il prodotto
            state.items = state.items.filter((item) => item.id !== productId);

            // aggiorno il prezzo totale e la quantita dei prodotti presente nel carrello
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

        },
        updateQUantity: (state, action) => {
            //recuper productId e quantity dall'action.payload
            const { productId, quantity } = action.payload;
            // recupero il prodotto da items
            const product = state.items.find((item) => item.id === productId);
            // se esiste aggiorno la quantita
            if (product) {
                product.quantity = quantity;
            }
        },
        clearCart: (state) => {
            // resetto all'initialState
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
});



export const { addToCart, removeFromCart, updateQUantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;