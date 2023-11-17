import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./TaskSlice";

const TaskForm = () => {
    const textRef = useRef() ;
    const distpatch = useDispatch() ;

    const handleSubmit= (event) => {
        event.preventDefault()
        distpatch(addTask(textRef.current.value))
    }


    return (
        <form onSubmit={handleSubmit}>
            <input ref={textRef} type="text" name="add" id="add" placeholder="Ajouter une tâche" />
        </form>
    )

}

export default TaskForm