import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";


const ArticleDetails = () => {

    const chromium = useNavigate();
    
    const { id } = useParams();
    
  
    const [thisArticle,setThisArticle] = useState([]) ;
    
    const [quantity, setquantity] = useState(0);
    
    
    
    let panier = JSON.parse(localStorage.getItem("TP-store_panier_utilisateur")) ?? {};

    console.log("panier 1 ", panier);
    
    if (!panier[`${id}`]) {
        panier[`${id}`] = 0 ;
        console.log(`panier.${id} : ` ,panier[`${id}`]);
    } else {
        console.log("panier actuelle");
        console.dir(panier.id);
    }
    console.log("panier 2 ", panier.id);


    
    useEffect( () => {
        axios.get(`http://localhost:5001/magasin/${id}`)
        .then(reponse => {
            setThisArticle(reponse.data);
        })
        .catch(error => {
            console.error("Erreur : ",error)
        })
        
        console.log("panier.id", panier[`${id}`])
        
        setquantity(panier[`${id}`])

    }, [])


    useEffect(() => {
         console.log("quantity : ", quantity)

    }, [quantity]);


    const add = () => { 
        console.log("hey", quantity);
        if (quantity < thisArticle.disponible ) {
            console.log("hoo");
    
        const newQuantity = quantity + 1 ;
        setquantity(newQuantity);
        }   
        
    }

    const rm = () => { 
        if (quantity > 0 ) {
    
        const newQuantity = quantity - 1 ;
        setquantity(newQuantity);
        }
        
    }

    const saveState = () => {

        let panier = JSON.parse(localStorage.getItem("TP-store_panier_utilisateur")) ?? {};

        panier[`${id}`] = quantity ;

        if ( quantity == 0 ) { delete panier[`${id}`] }

        console.log("panier actuelle");
        console.dir(panier);

        const panierJson = JSON.stringify(panier);

        localStorage.setItem("TP-store_panier_utilisateur", panierJson);
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
                <button type="button" onClick={gohome}>Continuer vos achats</button>
                <button type="button" onClick={gopanier}>Voir le panier</button>
            </div>

        </>
    )
}

export default ArticleDetails