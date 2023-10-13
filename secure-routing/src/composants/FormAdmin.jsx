import { useEffect, useState } from "react"
import axios from "axios";
import Article from "./Article";


import { useNavigate } from "react-router-dom"


const FormAdmin = () => {

    const internetexplorer = useNavigate()


    const [reserve,setReserve] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:5001/magasin")
        .then(reponse => {
          setReserve(reponse.data);
        })
        .catch(error => {
          console.error("Erreur : ",error)
        })
     
    }, [])



    

    const deconnect = () => {
        localStorage.removeItem("TP-store_AdminConnected");
        internetexplorer('/');
    }

    const addArticle = () => {
        internetexplorer("/admin/article/new");
    }


    return (

        <>
            <h1>Hello Admin</h1>

            <h3>Articles en réserve</h3>

            <ul>
                 {setReserve.length == 0 ? <li>Chargement...</li> : reserve.map( (article,i) => <Article key={i} article={article} mode={'admin'} /> ) }
            </ul>



            <div><button type="button" onClick={addArticle}>Ajouter un article</button><button type="button" onClick={deconnect}>Déconnexion</button></div>

            
        </>
    )
}

export default FormAdmin