import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FIREBASE_URL } from "../firebaseConfig";
import axios from "axios";


export const axiosGetCollection = createAsyncThunk(
    "album/axiosGetCollection",
    async () => {
        try {
            const reponse = await axios.get(`${FIREBASE_URL}/eAlbums.json`);
            return {...reponse.data} ;
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
          //  return {...album, id: reponse.data.name}
            return { id : reponse.data.name, album};
        } catch (error) {
            console.error(error)
        }
    }
)

export const axiosSupprAlbum = createAsyncThunk(
    "album/axiosSupprAlbum",
    async ({token,albumToRm}) => {
        try{
            const reponse = await axios.delete(`${FIREBASE_URL}/eAlbums/${albumToRm}.json?auth=${token}`)
            return albumToRm;
        } catch (error) {
            console.error(error)
        }
    }
)

export const axiosPatchAlbum = createAsyncThunk(
    "album/axiosPatchAlbum",
    async ({token,albumToEdit,album}) => {
        try {
            const reponse = await axios.patch(`${FIREBASE_URL}/eAlbums/${albumToEdit}.json/?auth=${token}`,album)
            return {albumToEdit,album};
        } catch (error) {
            console.error(error)
        }
    }
)



const eAlbumSlice = createSlice({
    name: "album",
    initialState: {
        albums:[],
        albumSelected: false,
        formMode: ''
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
            //console.log(action.payload);
            //state.albums.push(action.payload);
            state.albums[action.payload.id] = action.payload.album;
            state.formMode = '' ;
        })
        builder.addCase(axiosSupprAlbum.fulfilled, (state, action) => {
            delete state.albums[action.payload] ;
        })
        builder.addCase(axiosPatchAlbum.fulfilled, (state, action) => {
            state.albums[action.payload.albumToEdit] = action.payload.album ;
        })
    }

})

export const { setTarget, setMode } = eAlbumSlice.actions
export default eAlbumSlice.reducer