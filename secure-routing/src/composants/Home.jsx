import { useEffect, useState } from "react"
import axios from "axios";
import Article from "./Article";

const Home = () => {

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



    return (
        <>
            <h1>Accueil Magasin</h1>

            <h3>liste de nos articles</h3>
            <ul>
                 {setReserve.length == 0 ? <li>Chargement...</li> : reserve.map( (article,i) => <Article key={i} article={article} /> ) }
            </ul>

        </>
    )
}

export default Home