import { useNavigate } from "react-router-dom"

const AcceRefuse = () => {

    const netscape = useNavigate()

    return (
        <>
            <h2>Echec de connexion</h2>
            <div><button type="button" onClick={() => netscape('/')}>Retour à l'accueil</button></div>
        </>
    )
}

export default AcceRefuse