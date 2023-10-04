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
        <form action="#" onSubmit={envoyer}>
            <label htmlFor="first">Prénom</label>
            <input type="text" name="first" id="first" placeholder="Prénom" value={first}  onInput={(e)=> setFirst(e.target.value)} />
            <label htmlFor="last">Nom</label>
            <input type="text" name="last" id="last" placeholder="Nom" value={last} onInput={(e)=> setLast(e.target.value)} />
            <label htmlFor="naissance">Nom</label>
            <input type="date" name="naissance" id="naissance" placeholder="Nom" value={naissance}  onInput={(e)=> setNaissance(e.target.value)} />
            <button>Ajouter</button>
        </form>
    )
}

export default MonForm