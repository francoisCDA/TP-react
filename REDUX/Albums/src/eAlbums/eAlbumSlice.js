import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FIREBASE_URL } from "../firebaseConfig";


export const axiosGetCollection = createAsyncThunk(
    "album/axiosGetCollection",
    async () => {
        try {
            const reponse = await axios.get(FIREBASE_URL);
            return [...reponse.data] ;
        } catch (error) {
            console.error(error)
        }
    }
)

export const axiosPostAlbum = createAsyncThunk(
    "album/axiosPostAlbum",
    async ({token,album}) => {
        try {
            const reponse = await axios.post(`${FIREBASE_URL}/eAlbums.json/?auth=${token}`,album)
            return reponse.data
        } catch (error) {
            console.error(error)
        }
    }

)



const eAlbumSlice = createSlice({
    name: "album",
    initialState: {
        albums:[],
        albumSelected: null,
        formMode: "show"
    },
    reducers: {
        setTarget: (state, action) => {
            state.albumSelected = action.payload ;
        },
        setMode: (state, action) => {
            state.formMode = action.payload ;
        }
    
    },
    extraReducers: (builder) => {
        builder.addCase(axiosGetCollection.fulfilled, (state,action) => {
            state.albums = action.payload;
        })
        builder.addCase(axiosPostAlbum.fulfilled, (state,action) => {
            console.log('pushAlbum : ',action.payload);
            state.albums.push(action.payload);
            console.log(state.albums);
        })
    }

})

export const { setTarget, setMode } = eAlbumSlice.actions
export default eAlbumSlice.reducer