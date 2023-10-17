import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: []
    },
    reducers: {
        addtask: ( state,action ) => {
            state.tasks.push(action.payload)
        }
    }
})

export const {addtask} = taskSlice.actions
export default taskSlice.reducer