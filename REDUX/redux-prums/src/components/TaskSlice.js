import { createSlice } from "@reduxjs/toolkit";

//  npm i @reduxjs/toolkit react-redux

// centraliser les actions de traitement de données

const taskSlice = createSlice( {
    name: "task",
    initialState: {
        tasks: [
            { id: 1, text: "Faire les courses", done: false },
            { id: 2, text: "Faire le menage", done: true },
          ],
          counterTask: 1
    },
    reducers: {
        // state <=> initialState
        // action : élément envoyé à notre store { type: "task/addTask", payload}
            // payload : objet contenant tous les paramètres de la fonction
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                text: action.payload,
                done: false
            }

            state.tasks.push(newTask)
            state.counterTask += 1
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter( task => task.id !== action.payload)
        },
        ToggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id == action.payload)
            task.done = !task.done 
        }

    }
})


export const {addTask, deleteTask, ToggleTask} = taskSlice.actions
export default taskSlice.reducer