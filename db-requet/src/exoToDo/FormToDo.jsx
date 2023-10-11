import { useRef } from "react"

const FormToDo = ({tache, addTache}) => {

    const add = () => {

    }

    const refInputTitre = useRef() ;
    const refInputDate = useRef() ;


    return (
        <form action="#">
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