import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ctxPanier } from "../context/panier";


const ArticleDetails = () => {

    const { id } = useParams();

    const [panierClient,setPanierClient]  = useContext(ctxPanier);

    const [thisArticle,setThisArticle] = useState([]) ;

    const [quantity, setquantity] = useState(0);
    
    const chromium = useNavigate();
    
    useEffect( () => {
        axios.get(`http://localhost:5001/magasin/${id}`)
        .then(reponse => {
          setThisArticle(reponse.data);
        })
        .catch(error => {
          console.error("Erreur : ",error)
        })

        let oldquantite = panierClient.filter( item => item.id == id)
        
        console.log(oldquantite.length);

        if (oldquantite.length == 0) { 
            setquantity(0);
        } else {
            setquantity(oldquantite.quantite);
        }
              
               
        console.log("quantity : ",quantity);
    }, [])

    const add = () => { 
    
        if (quantity < thisArticle.disponible ) {
    
        const newQuantity = quantity + 1 ;
        setquantity(newQuantity);
        }   
        console.log(quantity)
    }

    const rm = () => { 
        if (quantity > 0 ) {
    
        const newQuantity = quantity - 1 ;
        setquantity(newQuantity);
        }
        console.log(quantity)
    }

    const saveState = () => {
        let copiePanier = [...panierClient] ;
        copiePanier = copiePanier.filter( item => item.id != id );
        copiePanier[copiePanier.length] = {id: id, quantite: quantity};
        setPanierClient(copiePanier);
        console.log(copiePanier);
        localStorage.setItem("TP-store_PanierClient",JSON.stringify([...panierClient]));
    }

    const gohome = () => {
        saveState();
        chromium('/');
    }

    const gopanier = () => {
        saveState();
        chromium('/panier')
    }


    return (
        <>
            <h1>détails du produit</h1>
            <ul>
                <li>dénomination : <span>{thisArticle.label}</span></li>
                <li>Prix HT : <span>{thisArticle.prixHT}</span></li>
                <li>disponibilité : <span>{thisArticle.disponible}</span></li>
            </ul>
            <p>Quantité présente dans le panier : {quantity}</p>
           
            <div>
                <button type="button" onClick={add}>Ajouter au panier</button>
                <button type="button" onClick={rm}>Retirer du panier</button>
                <button type="button" onClick={gohome}>Retour à l'accueil</button>
                <button type="button" onClick={gopanier}>Voir le panier</button>
            </div>

        </>
    )
}

export default ArticleDetails