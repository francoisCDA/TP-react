import { createSlice } from "@reduxjs/toolkit";

const mesProduitsSlice = createSlice( {
    name: "mesProduits",
    initialState: {
        articles: [],
        idForChange: 0
    },
    reducers: {
        addProduit: (state,action) => {
            const newArticle = {
                id: Date.now(),
                label: action.payload.label,
                prix: action.payload.prix
            }

            state.articles.push(newArticle)
        },
        rmProduit: (state, action) => {
            state.articles = state.articles.filter( article => article.id !== action.payload )
        },
        updProduit: (state, action) => {
            const article = state.articles.find( article => article.id == action.payload.id )
            article.label = action.payload.label;
            article.prix = action.payload.prix;
            
        },
        changeMod: (state, action) => {
            state.idForChange = action.payload;
        }
    }
})

export const {addProduit, rmProduit, updProduit, changeMod} = mesProduitsSlice.actions
export default mesProduitsSlice.reducer