import { createSlice } from "@reduxjs/toolkit";


const recettesSlice = createSlice({
    name: "recette",
    initialState: {
        formMode: "",
        recipies: [],
        selectedRecipe: null,
        ingredients: [],
        isLoading: false,
        error: null
    },
    reducers: {
        addRecette: (state, action) => {
            state.recipies.push(action.payload)
        },
        removeRecette: (state, action) => {
            state.recipies = state.recipies.filter( recette => recette.id != action.payload)
        },
        addIngredient: (state,action) => {
            state.ingredients.push(action.payload)
        },
    }
})

export const {addRecette, removeRecette, addIngredient} = recettesSlice.actions
export default recettesSlice.reducer