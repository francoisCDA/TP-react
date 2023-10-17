import { useDispatch } from "react-redux"
import { disconnect } from "../auth/authSlice"
import { useNavigate } from "react-router-dom"

const LstRecettes = () => {

    const netscape = useNavigate()

    const dispatch = useDispatch()

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
                <div>maper les recettes</div>
             
            </div>
        
        </>
    )
}

export default LstRecettes