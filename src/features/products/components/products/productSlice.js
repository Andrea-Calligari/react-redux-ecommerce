import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: 1, name: 'Nike Simple', model: 'Cartoon', img: '/img/nike-court-bianche-nere.webp', description: 'A confortable shoe for running', price: 89.99, stock: 100, },
        { id: 2, name: 'Nike Air Force 1', model: 'Low Top Black', img: '/img/nike-court-bianche-rosse-schizzi-vernice-nera.webp', description: 'A timeless classic, versatile for any occasion.', price: 89.99, stock: 200 },
        { id: 3, name: 'Nike React Infinity Run', model: 'Running Shoes', img: '/img/nike-court-vision-rosa-nere-disegno-cartoon.webp', description: 'Perfect for running, providing ultimate comfort and support.', price: 139.99, stock: 120 },
        { id: 4, name: 'Nike ZoomX Vaporfly NEXT%', model: 'Racing', img: '/img/43829700-1_3.webp', description: 'The ultimate racing shoe for marathon runners.', price: 249.99, stock: 50 },
        { id: 5, name: 'Nike Free RN 5.0', model: 'Gym and Running', img: '/img/nike-basket.jpg', description: 'Lightweight and flexible, ideal for both running and gym workouts.', price: 109.99, stock: 180 },
        { id: 6, name: 'Nike Free RN 8.0', model: 'Gym and Running', img: '/img/nike_dx.jpg', description: 'Lightweight and flexible, ideal for both running and gym workouts.', price: 90.99, stock: 100 },
        { id: 7, name: 'Nike Air Max 90', model: 'Vintage', img: '/img/nike-air-max-90.webp', description: 'A timeless design with premium comfort for everyday wear.', price: 129.99, stock: 150 },
        { id: 8, name: 'Nike Air Zoom Pegasus 39', model: 'Running Shoes', img: '/img/nike-air-max-97.jpg', description: 'An all-around great running shoe with superb cushioning and comfort.', price: 119.99, stock: 200 },
        { id: 9, name: 'Nike Blazer Mid 77', model: 'Retro High Top', img: '/img/nike-air-max-270.jpg', description: 'A retro-style high-top for a bold, vintage look and ultimate comfort.', price: 109.99, stock: 120 },
        { id: 10, name: 'Nike Air VaporMax 2021', model: 'Running Shoes', img: '/img/nike-basket-black.jpg', description: 'Cutting-edge technology and style for the ultimate running experience.', price: 179.99, stock: 80 },
        { id: 11, name: 'Nike Zoom Freak 1', model: 'Basketball Shoes', img: '/img/nike-sb-green.jpg', description: 'Giannis Antetokounmpo’s signature shoe for explosive performance on the court.', price: 139.99, stock: 60 },
        { id: 12, name: 'Nike Air Zoom Alphafly NEXT%', model: 'Racing', img: '/img/scarpe-nike-azzurre.webp', description: 'Designed for elite runners, this is the shoe that helps you break records.', price: 299.99, stock: 70 },
        { id: 13, name: 'Nike LunarGlide 9', model: 'Running Shoes', img: '/img/nike-hot-step-2.webp', description: 'Great cushioning for long-distance runners, combining stability and flexibility.', price: 109.99, stock: 130 },
        { id: 14, name: 'Nike Air Max 270', model: 'Lifestyle Shoes', img: '/img/nike-offwhite.jpg', description: 'With an iconic Max Air cushioning unit, these shoes are perfect for casual wear.', price: 149.99, stock: 180 },
        { id: 15, name: 'Nike Tanjun', model: 'Lifestyle Shoes', img: '/img/nike-air-270.jpg', description: 'Lightweight and breathable, perfect for both running and daily wear.', price: 159.99, stock: 220 },
        { id: 16, name: 'Nike SB Dunk Low', model: 'Skateboarding', img: '/img/nike-air-force-1-mid.webp', description: 'A stylish and durable skateboarding shoe that combines form and function.', price: 99.99, stock: 150 },

    ],
    filters: {},
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filters = action.payload;

        }

    },



});
export const { setFilter } = productSlice.actions;
export default productSlice.reducer;