import { configureStore } from '@reduxjs/toolkit';
import tableSlice from '../features/table/components/tableSlice';

const store = configureStore({
    reducer:{
        table:  tableSlice,
    }

});

export default store;