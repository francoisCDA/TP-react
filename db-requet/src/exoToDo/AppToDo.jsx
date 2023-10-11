import axios from "axios";
import { useEffect, useState } from "react"
import LiTache from "./LiTache";
import FormToDo from "./FormToDo";
import { useParams } from "react-router-dom";
//import styles from "./css/app.module.css"

const AppToDo = () => {

    const param = useParams();

    const { idedit } = param ?? 'none' ;

    const [todolst,settodolst] = useState([]);

    const [currenttache,setCurrentTache] = useState('none');

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

    useEffect ( () => {
        if (idedit != 'none') {
            const tach = todolst.filter( tache => tache.id == idedit ) ;
            console.log('tach :', tach)
            setCurrentTache(tach);
        }

    }, [idedit])

/*     const editTache = (id) => {
       console.log("edit : ", id)
       const tachetoedit = todolst.filter(tache => tache.id = id)
        
       console.log(param.id);
    } */

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

    const updTache = (id, titre, date) => {
        axios.put(`http://localhost:5000/todo/${id}`,{titre: titre, date: date})
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

            <FormToDo addTache={addTache} editTache={currenttache} backEdit={updTache} />
            
            <ul>
                { todolst.length == 0 ? <li>Il n'y a plus rien à faire</li> : todolst.map( (tache,i) => <LiTache key={i} tache={tache} delTache={delTache} />  )}
            </ul>
            
        </>


    )
}

export default AppToDo