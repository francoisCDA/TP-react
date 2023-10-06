import { useContext, useEffect, useState } from "react";
import { CtxToDoList } from "../contexts/ctxtodolist";
import styles from "./css/tache.module.css" 
import Tache from "../classs/list";

const CpntTache = ({idTask}) => {

    const [toDoList,setToDoList] = useContext(CtxToDoList);

    const [maTache,setMaTache] = useState(toDoList.filter(task => task.id == idTask)[0]) ;

    //const maTache = toDoList.filter(task => task.id == idTask)[0];

    const setStatut = () => {
        setMaTache({...maTache,statut: true});
      // maTache.statut = true;

    }
    
    useEffect( () => {
        console.dir(maTache);
        
        
        const ind = toDoList.find(task => task.id == idTask );
        
        let nextToDo = [...toDoList];
        nextToDo[ind] = maTache;
        setToDoList(nextToDo);

    }, [maTache])

    const rmTache = () => {
        const ind = toDoList.find(task => task.id == idTask );
        const nextToDo = toDoList.filter( task => task.id !=  idTask);
        setToDoList(nextToDo);

    }


    const handleStatut = (statut) => {
        if (statut) {
            return (
                <button onClick={rmTache}>Supprimer</button>
            )
        } 

        return (
        <span className="grpForm">
            <label htmlFor="chtache">Terminée</label>
            <input type="checkbox" name="chtache" id='chtache' placeholder='tâche' onChange={setStatut}/>
        </span>)
    }

    return (
        <li className={styles.li}><span>{maTache.tache}</span> <span>date limite : {maTache.deadline}</span> {handleStatut(maTache.statut)} </li>
    )


}

export default CpntTache