import { useRef } from "react"
import { useDispatch } from "react-redux";
import { removeUser } from "../auth/authSlice";
import { BASE_DB_URL } from "../../firebaseConfig";
import { addtask } from "./taskSlice";

const TaskForm = ({user}) => {

    const refTache = useRef();
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newTask = {
            id: Date.now(),
            text: refTache.current.value,
            done: false
        }

        if (user.idToken) {
            try {
                const response = await fetch(`${BASE_DB_URL}/todoList.json?auth=${user.idToken}`, {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(newTask)
                })

                if(!response.ok){
                    throw new Error("problème avec le POST")
                }

                const data = await response.json()
                console.log(data)
                dispatch(addtask(newTask))
            } catch(error) {
                console.error(error.message);
            }
        }

    }

    return (
        <>
            <button onClick={() => dispatch(removeUser())}>Déconnexion</button>
            <form onSubmit={handleSubmit} >
                <input ref={refTache} type="text" placeholder="Ajouter une tâche" />
            </form>
        </>
    )
}

export default TaskForm