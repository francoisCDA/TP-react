import { configureStore } from "@reduxjs/toolkit";
import mesProduitsSlice from './productsSlice';

export default configureStore ({
    reducer: {
        mesProduits: mesProduitsSlice
    }
})

