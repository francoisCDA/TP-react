import { useContext, useEffect, useState } from "react";
import { CtxToDoList } from "../contexts/ctxtodolist";
import styles from "./css/tache.module.css" 

const CpntTache = ({idTask}) => {

    const [toDoList,setToDoList] = useContext(CtxToDoList);

    const [maTache,setMaTache] = useState(toDoList.filter(task => task.id == idTask)[0]) ;

    //const maTache = toDoList.filter(task => task.id == idTask)[0];

    const setStatut = () => {
        setMaTache({...maTache,statut: true});
    }
    
    useEffect( () => {
                
        // pas indispençable, mais il me semble plus cohérent de remonter d'information,
        
        const ind = toDoList.find(task => task.id == idTask );
        
        let nextToDo = [...toDoList];
        nextToDo[ind] = maTache;
        setToDoList(nextToDo);

    }, [maTache])

    const rmTache = () => {
        const nextToDo = toDoList.filter( task => task.id !=  idTask);
        setToDoList(nextToDo);
    }


    const handleStatut = (e) => {
        if (maTache.statut) {
            return (
                <span>
                    <button onClick={rmTache}>Supprimer</button>
                </span>
            )
        } 

        return (
        <span className="grpForm">
            <label htmlFor={`${idTask}`}>Terminée</label>
            <input type="checkbox" name={`${idTask}`} id={`${idTask}`} placeholder='tâche' onChange={setStatut}/>
        </span>)
    }

    const urgence = () => {
        if (maTache.statut) {
            return styles.bleu ;
        }

        const hui = new Date();
        hui.setHours(0,0,0,0);
        const ddln = new Date(maTache.deadline);
        
        console.log(ddln);
        console.log(hui);
        console.log(ddln -hui);


        if ( ddln - hui > 650000000 ) { // plus d'une semaine (en mlilliseconde)
            return styles.vert ;    
        } 

        if ( ddln - hui  > 7500000 ) { 
            return styles.orange ;
        }

        if ( ddln -hui > 0 ) {
            return styles.rouge
        }

        return styles.noir

    }

    return (
        <li className={urgence()}><span>#{idTask} : {`${maTache.tache}`}</span> <span>date limite : {new Date(maTache.deadline).toLocaleDateString()}</span> {handleStatut(maTache.statut)} </li>
    )


}

export default CpntTache