import { useRef, useContext } from 'react';
import { CtxToDoList } from '../contexts/ctxtodolist';
import Tache from '../classs/list';
import styles from './css/formlist.module.css'



const FormList = () => {

    const [toDoList,setToDoList] = useContext(CtxToDoList)

    const refInputTache = useRef();
    const refInputDeadline = useRef();
    const refInputStatut= useRef();

    const addTask = (e) => {
        e.preventDefault();
        setToDoList([...toDoList,new Tache(refInputTache.current.value,refInputDeadline.current.value,refInputStatut.current.checked) ])
    }


    return (
        <form action="" onSubmit={addTask} className={styles.form}>
            <div className="grpForm">
                <label htmlFor="tache">Tâche</label>
                <input type="text" name="tache" id='tache' placeholder='tâche' ref={refInputTache} required />
            </div>
            <div className="grpForm">
                <label htmlFor="date">Date limite</label>
                <input type="date" name="date" id='date' ref={refInputDeadline} required />
            </div>
            <div className="grpForm">
                <label htmlFor="tache">Terminée</label>
                <input type="checkbox" name="tache" id='tache' placeholder='tâche' ref={refInputStatut}/>
            </div>
            <button>Enregistrer</button>

        </form>
    )
}

export default FormList