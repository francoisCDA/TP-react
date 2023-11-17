import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import taskSlice from "./task/taskSlice";


export default configureStore({
    reducer: {
        auth: authSlice,
        task: taskSlice
    }
})