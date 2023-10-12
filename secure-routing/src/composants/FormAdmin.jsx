import { useNavigate } from "react-router-dom"


const FormAdmin = () => {

    const internetexplorer = useNavigate()

    const deconnect = () => {
        localStorage.removeItem("TP-store_AdminConnected");
        internetexplorer('/');
    }


    return (

        <>
            <h1>affiche un FormAdmin</h1>

            <h3>pour ajouter des articles / un bouton deconnection </h3>

            <div><button type="button" onClick={deconnect}>Déconnexion</button></div>

            
        </>
    )
}

export default FormAdmin