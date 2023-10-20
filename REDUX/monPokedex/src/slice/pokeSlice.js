import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const axiosGetPopulation = createAsyncThunk(
    "pokemon/axiosGetPopulation",
    async () => {
        try {
            const reponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=300') ;
            return reponse.data.results
        } catch (error) {
            console.error(error.message);
        }
    }
)

export const axiosGetPokemonById = createAsyncThunk(
    "pokemon/axiosGetPokemonById",
    async (url) => {
        try {
            const reponse = await axios.get(`url`) ;
            return reponse.data
        } catch (error) {
            console.log(error.message)
        }
    }
)



const pokeSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokeworld:[],
        pokedex:[],
        pokedetail:[],
        pokecategorie:[]
    },
    reducers: {
        addToPokedex: (state,action) => {
            state.pokedex.push(state.pokedetail);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(axiosGetPopulation.fulfilled, (state,action) => {
          //  console.log(action.payload)
            state.pokeworld = action.payload ;
        })
        builder.addCase(axiosGetPokemonById.fulfilled, (state,action) => {
            state.pokedetail = action.payload ;
        })
    }
    
})

export const { addToPokedex } = pokeSlice.actions
export default pokeSlice.reducer