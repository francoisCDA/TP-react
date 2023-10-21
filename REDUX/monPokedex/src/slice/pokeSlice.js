import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



function pokeExtractData(dataBrut) {

    const newPoke = {};

    newPoke.id = dataBrut.id
    newPoke.nom = dataBrut.name;
    newPoke.image = dataBrut.sprites.front_default;
    newPoke.height = dataBrut.height;
    newPoke.weight = dataBrut.weight;
    newPoke.xp = dataBrut.base_experience;
    newPoke.abilities = dataBrut.abilities.map( a => a.ability.name);
    newPoke.types = dataBrut.types.map( t => t.type.name);
    newPoke.moves = dataBrut.moves.map( m => m.move.name);

    return newPoke;
}


export const axiosGetPopulation = createAsyncThunk(
    "pokemon/axiosGetPopulation",
    async () => {
        try {
            const reponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3') ;
            return reponse.data.results
        } catch (error) {
            console.error(error.message);
        }
    }
)

export const axiosGetPokemonByURL = createAsyncThunk(
    "pokemon/axiosGetPokemonByURL",
    async ({ind,url}) => {
        try {
            const reponse = await axios.get(`${url}`) ;
            return {...reponse.data, id: ind}
        } catch (error) {
            console.log(error.message)
        }
    }
)



const pokeSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokeworld:[],
        pokeZoo:[],
        pokedex:[],
        pokedetail: false,
        pokeFiltres:[]
    },
    reducers: {
        addToPokedex: (state,action) => {
            state.pokedex.push(state.pokedetail);
        },
        resetZoo: (state,action) => {
            state.pokeZoo = [] ;
        },
        setPokeDetail: (state,action) => {
            state.pokedetail = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(axiosGetPopulation.fulfilled, (state,action) => {
            state.pokeworld = action.payload ;
        })
        builder.addCase(axiosGetPokemonByURL.fulfilled, (state,action) => {
            const pokeDataClean = pokeExtractData(action.payload)

            for (let type of pokeDataClean.types ) { 
                if (!state.pokeFiltres.includes(type)) {
                    state.pokeFiltres.push(type);
                }
            }
            
            state.pokeZoo.push(pokeDataClean);
        })
    }
    
})

export const { addToPokedex, resetZoo, setPokeDetail } = pokeSlice.actions
export default pokeSlice.reducer