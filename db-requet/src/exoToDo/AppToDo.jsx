import axios from "axios";
import { useEffect, useState } from "react"
import LiTache from "./LiTache";
import FormToDo from "./FormToDo";

const AppToDo = () => {

    const [todolst,settodolst] = useState([]);

    const [currenttache,setCurrentTache] = useState({});

    useEffect( () => {
        console.log("Hello Axios")
        axios.get("http://localhost:5000/personne")
        .then(reponse => {
          settodolst(reponse.data);
        })
        .catch(error => {
          console.error(error);
        })
        
    }, [])


    const editTache = (id) => {
        const tachetoedit = todolst.filter(tache => tache.id = id)
       setCurrentTache(tachetoedit);
    }

    const delTache = (id) => {
        
        axios.delete(`http://localhost:5000/todo/${id}`)
        .then(reponse => {
            console.dir(reponse.data)
        })
        .catch(error => {
            console.error(error)
        })

    }

    const addTache = () => {

    }


    return (
        <>
            <h1>Liste de tâches</h1>

            <FormToDo tache={currenttache} addTache={addTache} editTache={editTache} />
            
            <ul>
                { todolst.length == 0 ? <li>Il n'y a plus rien à faire</li> : todolst.map( (tache,i) => <LiTache tache={tache} editTache={editTache} delTache={delTache} />  )}
            </ul>
            
        </>


    )
}

export default AppToDo