import styles from './css/form.module.css'
import { useState } from "react"

const MonForm = ({monPush}) => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [naissance, setNaissance] = useState('');


    const envoyer = (sub) => {
        sub.preventDefault()

        monPush( {
            first,
            last,
            naissance
        })

    }

    
    return (
        <form action="#" onSubmit={envoyer} className={styles.form}>
            <div className={styles.subForm}>
                <label htmlFor="first" className={styles.label}>Prénom</label>
                <input type="text" name="first" id="first" placeholder="Prénom" value={first}  onInput={(e)=> setFirst(e.target.value)} />
                
            </div>
            <div className={styles.subForm}>
                <label htmlFor="last" className={styles.label}>Nom</label>
                <input type="text" name="last" id="last" placeholder="Nom" value={last} onInput={(e)=> setLast(e.target.value)} />

            </div>
            <div className={styles.subForm}>
                <label htmlFor="naissance" className={styles.label}>Date de Naissance</label>
                <input type="date" name="naissance" id="naissance" placeholder="Nom" value={naissance}  onInput={(e)=> setNaissance(e.target.value)} />

            </div>
            <button className={styles.button}>Ajouter</button>
        </form>
    )
}

export default MonForm