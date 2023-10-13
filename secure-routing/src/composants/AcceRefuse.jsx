import { useNavigate } from "react-router-dom"


const AcceRefuse = () => {
    
    const netscape = useNavigate();

    const reconnect = () => {
        netscape('/vospapiers');
    }

    const gohome = () => {
        netscape('/');
    }

    return (
        <>
            <h1>Vous n'êtes pas authorisé à continuer</h1>

            <div><button type="button" onClick={reconnect}>Se reconnecter</button><button type="button" onClick={gohome}>Accueil</button></div>

            
        </>
    )
}

export default AcceRefuse