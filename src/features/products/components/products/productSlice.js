import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: 1, name: 'Nike Sticazzi', model: 'Cartoon', img: '/img/nike-court-bianche-nere.webp', description: 'A confortable shoe for running', price: 89.99, stock: 100, },
        { id: 2, name: 'Nike Air Force 1', model: 'Low Top Black', img: '/img/nike-court-bianche-rosse-schizzi-vernice-nera.webp', description: 'A timeless classic, versatile for any occasion.', price: 89.99, stock: 200 },
        { id: 3, name: 'Nike React Infinity Run', model: 'Running Shoes', img: '/img/nike-court-vision-rosa-nere-disegno-cartoon.webp', description: 'Perfect for running, providing ultimate comfort and support.', price: 139.99, stock: 120 },
        { id: 4, name: 'Nike ZoomX Vaporfly NEXT%', model: 'Racing', img: '/img/43829700-1_3.webp', description: 'The ultimate racing shoe for marathon runners.', price: 249.99, stock: 50 },
        { id: 5, name: 'Nike Free RN 5.0', model: 'Gym and Running', img: '/img/nike-basket.jpg', description: 'Lightweight and flexible, ideal for both running and gym workouts.', price: 109.99, stock: 180 },
        { id: 6, name: 'Nike Free RN 8.0', model: 'Gym and Running', img: '/img/nike_dx.jpg', description: 'Lightweight and flexible, ideal for both running and gym workouts.', price: 9.99, stock: 100 }
    ],
    cart: [],
    totalPrice: 0,
    filters: {},
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;
            const existingProduct = state.products.cart.find((el) => el.id === product.id);

            if (existingProduct) {

            }
        },
        removeProduct: (state, action) => {
            state.products.cart = state.products.cart.filter((el) => el.id !== action.payload);

        }

    },



});
export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;