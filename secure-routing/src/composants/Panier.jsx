import { useEffect, useState } from "react"
import AffArticlePanier from "./AffArticlePanier";


const Panier = () => {

    const [votrePanier, setVotrePanier] = useState([]);

    
    useEffect( () => {

        let panier = JSON.parse(localStorage.getItem("TP-store_panier_utilisateur")) ?? {};

      //  console.dir(panier);

      //  console.log("panier true : ", Object.keys(panier))

        const lstId = Object.keys(panier);

        const lstPanier = lstId.map( key => ( {id: key, quantite: panier[`${key}`] }) )

        setVotrePanier(lstPanier);
       

    }, [])


    useEffect( () => { 
        
        if (votrePanier.length > 0) {
 
            console.table(votrePanier);

        }



    }, [votrePanier])


    return (
        <>
            <h1>Votre Panier</h1>

            <table>
                <thead>
                    <tr>
                        <th>Article</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {votrePanier.length == 0 ? <tr><td colSpan={3}>Panier vide</td></tr> : votrePanier.map( (article,i) => <AffArticlePanier key={i} pannier={article} /> ) }
                </tbody>

            </table>

        </>
    )
}

export default Panier