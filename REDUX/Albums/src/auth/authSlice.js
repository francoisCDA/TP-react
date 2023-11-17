import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SIGN_IN_URL, SIGN_UP_URL } from "../firebaseConfig";
import axios from "axios";


export const axiosSignUp = createAsyncThunk(
    "auth/axiosSignUp",
    async (identifiants) => {

        const credentials = {...identifiants, returnSecureToken: true}

        try {
            const reponse = await axios.post(SIGN_UP_URL,credentials);
            return reponse.data;
        } catch (error) {
            console.error(error);
        }
    }
)


export const axioSignIn = createAsyncThunk(
    "auth/axiosSignIn",
    async (identifiants) => {

        const credentials = {...identifiants, returnSecureToken: true}

        try {
            const reponse = await axios.post(SIGN_IN_URL,credentials);
            return reponse.data;
        } catch (error) {
            console.error(error)
        }
    }
)


const authSlice = createSlice({
   name: "auth",
   initialState: {
        admin: false,
        authMode: ""
   },
   reducers: {
        setAuthMode : (state,action) => {
            state.authMode = action.payload
        },
        disconnect: (state,action) => {
            state.admin = false ;
            localStorage.removeItem("eAlbum_token") ;
        },
        setAdmin : (state,action) => {
            state.admin = true ;
        }
   },
   extraReducers: (builder) => {
    builder.addCase(axiosSignUp.fulfilled, (state, action) => {
        localStorage.setItem("eAlbum_token",action.payload.idToken)
        state.admin = true
    })
    builder.addCase(axioSignIn.fulfilled, (state, action) => {
        localStorage.setItem("eAlbum_token",action.payload.idToken)
        state.admin = true
    }) 
   }
})

export const { setAuthMode, disconnect, setAdmin } = authSlice.actions
export default authSlice.reducer;