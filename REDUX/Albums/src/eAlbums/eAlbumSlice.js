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
        albums:{},
        albumSelected: false,
        formMode: '',
        trieMode: false
    },
    reducers: {
        setTarget: (state, action) => {
            state.albumSelected = action.payload ;
        },
        setMode: (state, action) => {
            state.formMode = action.payload ;
        },
        trierAZ: (state, action) => {
            let titreList = Object.keys(state.albums).map( key => state.albums[key].title);
            titreList.sort();

            for (let cle in state.albums ) {
                state.albums[cle].order = titreList.indexOf(state.albums[cle].title)
            }
            state.trieMode = 'AZ' ;
        },
        trierZA: (state, action) => {
            let titreList = Object.keys(state.albums).map( key => state.albums[key].title);
            titreList.sort();
            titreList = titreList.reverse();

            for (let cle in state.albums ) {
                state.albums[cle].order = titreList.indexOf(state.albums[cle].title)
            }
            state.trieMode = 'ZA' ;
        },
        trierScoreCROI: (state, action) => {
            let scoreList = Object.keys(state.albums).map( key => state.albums[key].score);
            scoreList.sort((a,b) => a - b );

            for (let cle in state.albums ) {
                state.albums[cle].order = scoreList.indexOf(state.albums[cle].score)
            }
            state.trieMode = 'CROI' ;
        },
        trierScoreDCROI: (state, action) => {
            let scoreList = Object.keys(state.albums).map( key => state.albums[key].score);
            scoreList.sort((a,b) => b - a );

            for (let cle in state.albums ) {
                state.albums[cle].order = scoreList.indexOf(state.albums[cle].score)
            }               
            state.trieMode = 'DCROI' ;
        },
        trieClear: (state, action) => {
            for (let cle in state.albums ) {
                delete state.albums[cle].order ;
            }
            state.trieMode = false;
        }
    
    },
    extraReducers: (builder) => {
        builder.addCase(axiosGetCollection.fulfilled, (state,action) => {
            state.albums = action.payload;
        })
        builder.addCase(axiosPostAlbum.fulfilled, (state,action) => {
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

export const { setTarget, setMode, trieMode, trierScoreCROI, trierScoreDCROI, trierAZ, trierZA, trieClear } = eAlbumSlice.actions
export default eAlbumSlice.reducer