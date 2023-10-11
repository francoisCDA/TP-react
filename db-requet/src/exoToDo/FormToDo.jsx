import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

import styles from './css/form.module.css'


const FormToDo = ({addTache, editTache, backEdit}) => {

    
    
    const netscape = useNavigate();
    
    const add = () => {

        if (refButton.current.innerText == "Editer") {
            
            backEdit(editTache[0].id, refInputTitre.current.value, refInputDate.current.value)
            refButton.current.innerText = 'Ajouter tâche';

            netscape('/');
        } else {
            
            addTache(refInputTitre.current.value,refInputDate.current.value)
            
            refInputTitre.current.value = '';
            refInputDate.current.value = '';
            
            netscape('/');
        }
        
        
    }
    
    const refInputTitre = useRef() ;
    const refInputDate = useRef() ;
    const refButton = useRef() ;
    
    useEffect( () => {

        console.log('edittache du formulaire : ', editTache[0])

        if (editTache[0]) {
            refInputTitre.current.value = editTache[0].titre ?? '' ;
            refInputDate.current.value = editTache[0].date ;
            refButton.current.innerText = 'Editer';
            
        }

    }, [editTache])

    return (
        <form action="#" className={styles.formulaire}>
            
            <div className="grpInput">
                <label htmlFor="titre">Titre</label>
                <input ref={refInputTitre} type="text" id="titre" name="titre" />
            </div>
            <div className="grpInput">
                <label htmlFor="date">Deadline</label>
                <input ref={refInputDate} type="date" id="date" name="date"  />
            </div>
            <button ref={refButton} type="button" onClick={add}>Ajouter Tâche</button>
            
        </form>
    )

}

export default FormToDo