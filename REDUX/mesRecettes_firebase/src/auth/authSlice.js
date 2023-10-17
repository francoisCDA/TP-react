import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        authmode: ""
    },
    reducers: {
        setUser : (state,action) => {
            state.user = action.payload
        },
        disconnect : (state, action) => {
            state.uset = null
            localStorage.removeItem("mesRecettes_token")
        }
    }
})

export const {setUser, disconnect} = authSlice.actions
export default authSlice.reducer