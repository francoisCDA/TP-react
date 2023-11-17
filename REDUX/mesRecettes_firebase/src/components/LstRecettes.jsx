import { useDispatch, useSelector } from "react-redux"
import { disconnect } from "../auth/authSlice"
import { useNavigate } from "react-router-dom"
import AffRecette from "./AffRecette"

const LstRecettes = () => {

    const netscape = useNavigate();

    const lesRecettes = useSelector(state => state.recette.recipies);
    const dispatch = useDispatch();

    const gohome = () => {
        dispatch(disconnect()),
        netscape('/');
    }

        
    return (
        <>
            <header><div>Mes Recettes</div><button type="button" onClick={gohome}>Déconnexion</button></header>


            <div className="mesRecettes">
                <div className="entete">

                    <span>Liste des recettes</span> 
                    <button type="button" onClick={() => netscape('/AddRecettes')} >Ajouter une recette</button> 

                </div>

                <hr />
                { lesRecettes.length == 0 ? <div>aucune recette</div> : lesRecettes.map( (recette,i) => <AffRecette key={i} recette={recette} />) }
             
            </div>
        
        </>
    )
}

export default LstRecettes