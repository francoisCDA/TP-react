import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./components/TaskSlice";

// regroupe des slices 

export default configureStore ({
    reducer: {
        task: TaskSlice
        // possibilité d'importer tous les reducers définis 
    }
})