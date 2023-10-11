import { useNavigate } from "react-router-dom"

const LiTache = ({tache, delTache}) => {
    
    const netscape = useNavigate();

    const edit = () => {
        netscape(`/edit/${tache.id}`);
    }

    const suppr = () => {
        delTache(tache.id);
        netscape(`/`);
    }

    return (
        <li>{tache.id} {tache.titre} à terminer pour {tache.date} <button type="button" onClick={edit}>Edit</button> <button type="button" onClick={suppr}>Suppr</button> </li>
    )
}

export default LiTache