import axios from "axios";
import { useEffect, useState } from "react"
import LiTache from "./LiTache";
import FormToDo from "./FormToDo";
//import styles from "./css/app.module.css"

const AppToDo = () => {

    const [todolst,settodolst] = useState([]);

    const [currenttache,setCurrentTache] = useState({});

    const updateToDoLst = () => {
        
        axios.get("http://localhost:5000/todo")
       .then(reponse => {
         //  console.log(reponse.data)
         settodolst(reponse.data);
       })
       .catch(error => {
         console.error(error);
       }) 
    }


    useEffect( () => {
        
        updateToDoLst();
        
    }, [])


    const editTache = (id) => {
       const tachetoedit = todolst.filter(tache => tache.id = id)
       
    }

    const delTache = (id) => {
        console.log("delTache");
        
        axios.delete(`http://localhost:5000/todo/${id}`)
        .then(reponse => {
            console.dir(reponse.data)
            updateToDoLst();
        })
        .catch(error => {
            console.error(error.data)
        })

    }

    const addTache = (titre,date) => {
        axios.post("http://localhost:5000/todo",{titre: titre, date: date})
        .then(reponse => {
          console.dir(reponse.data) 
          updateToDoLst();
        })
        .catch(error => {
          console.error(error)
        })
        
       
    }


    return (
        <>
            <h1>Liste de tâches</h1>

            <FormToDo addTache={addTache} editTache={editTache} />
            
            <ul>
                { todolst.length == 0 ? <li>Il n'y a plus rien à faire</li> : todolst.map( (tache,i) => <LiTache key={i} tache={tache} editTache={editTache} delTache={delTache} />  )}
            </ul>
            
        </>


    )
}

export default AppToDo