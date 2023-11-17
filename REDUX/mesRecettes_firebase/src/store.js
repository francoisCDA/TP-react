import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import recettesSlice from "./recettes/recettesSlice";



export default configureStore({
    reducer: {
        auth: authSlice,
        recette: recettesSlice,
    }
})