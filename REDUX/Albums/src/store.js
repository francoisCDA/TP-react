import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import eAlbumSlice from "./eAlbums/eAlbumSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
        album: eAlbumSlice
    }
})