import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/todoSlice'
 
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
});


