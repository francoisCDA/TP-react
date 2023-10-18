import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SIGN_IN_URL, SIGN_UP_URL } from "../firebaseConfig";


export const axiosSignUp = createAsyncThunk(
    "auth/axiosSignUp",
    async (identifiants) => {

        const credentials = {...identifiants, returnSecureToken: true}

        const reponse = await axios.post(SIGN_UP_URL,credentials);
        return reponse.data;
    }
)

export const axioSignIn = createAsyncThunk(
    "auth/axiosSignIn",
    async (identifiants) => {

        const credentials = {...identifiants, returnSecureToken: true}

        const reponse = await axios.post(SIGN_IN_URL,credentials);
        return reponse.data;
    }
)


const authSlice = createSlice({
   name: "auth",
   initialState: {
        user: null,
        authMode: ""
   },
   reducers: {
        setAuthMode : (state,action) => {
            state.authMode = action.payload
        },
        disconnect: (state,action) => {
            state.user = null
            localStorage.removeItem("eAlbum_token")
        }
   },
   extraReducers: (builder) => {
    builder.addCase(axiosSignUp.fulfilled, (state, action) => {
        localStorage.setItem("eAlbum_token",action.payload.idToken)
        state.user = action.payload
    })
    builder.addCase(axioSignIn.fulfilled, (state, action) => {
        localStorage.setItem("eAlbum_token",action.payload.idToken)
        state.user = action.payload
    }) 
   }
})

export const { setAuthMode, disconnect } = authSlice.actions
export default authSlice.reducer;