import axios from "axios"

const LiTache = ({tache, editTache, delTache}) => {
    
    const edit = () => {
        editTache(tache.id);
    }

    const suppr = () => {
        delTache(tache.id)
    }

    return (
        <li>{tache.id} {tache.titre} à terminer pour {tache.date} <button type="button" onClick={edit}>Edit</button> <button type="button" onClick={suppr}>Suppr</button> </li>
    )
}

export default LiTache