import style from './css/formchrono.module.css'
import { useRef } from "react"

const FormChrono = ({limite, newChrono}) => {

    const refNomChrono = useRef();
    const refDureeChrono = useRef();

    const sendBack = () => {
        console.log({nom: refNomChrono.current.value,duree:+refDureeChrono.current.value});
        newChrono({nom: refNomChrono.current.value,duree:+refDureeChrono.current.value,delai:+refDureeChrono.current.value})
    }


    return (

        
        <form action="" className={style.form}>
            <div className="grpForm">
                <label htmlFor="nom">nom du chrono</label>
                <input type="text" name="nom" id="nom" ref={refNomChrono} />
            </div>
        
            <div className="grpForm">
                <label htmlFor="duree">durée du chrono en seconde</label>
                <input type="number" name="duree" id="duree" ref={refDureeChrono} />
            </div>

            <button disabled={limite>4} type="button" onClick={sendBack}>Démarer</button>


        </form>
    )
}

export default FormChrono