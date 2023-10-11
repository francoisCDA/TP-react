import { useRef } from "react"

//import styles from './css/form.module.css'



const FormToDo = ({addTache}) => {

    const add = () => {
        
        addTache(refInputTitre.current.value,refInputDate.current.value)

        refInputTitre.current.value = '';
        refInputDate.current.value = '';

    }

    const refInputTitre = useRef() ;
    const refInputDate = useRef() ;


    return (
        <form action="#" >
            
            <div className="grpInput">
                <label htmlFor="titre">Titre</label>
                <input ref={refInputTitre} type="text" id="titre" name="titre" />
            </div>
            <div className="grpInput">
                <label htmlFor="date">Deadline</label>
                <input ref={refInputDate} type="date" id="date" name="date" />
            </div>
            <button type="button" onClick={add}>Ajouter Tâche</button>
            
        </form>
    )

}

export default FormToDo