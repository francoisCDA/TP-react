import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "./slice/pokeSlice";

export default configureStore({
    reducer: {
        pokemon: pokeSlice
    }

})