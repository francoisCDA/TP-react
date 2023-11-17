import { useEffect, useState } from "react"
import AffArticlePanier from "./AffArticlePanier";


const Panier = () => {

    const [votrePanier, setVotrePanier] = useState([]);
    
    const [lstPrix, setLstPrix] = useState([]);
    
    const [prixTotal, setPrixTotal] = useState([]);

    
    useEffect( () => {

        let panier = JSON.parse(localStorage.getItem("TP-store_panier_utilisateur")) ?? {};

        const lstId = Object.keys(panier);

        const lstPanier = lstId.map( key => ( {id: key, quantite: panier[`${key}`] }) )

        setVotrePanier(lstPanier);
       

    }, [])

    const calcTotal = (prix) => {
       setLstPrix(prev => [...prev, prix]);
    }

    useEffect( () => {
        const valinit = 0
        const newprixtt = lstPrix.reduce( (somme, prix) => somme + prix, valinit);
        setPrixTotal(newprixtt);
    }, [lstPrix])


    return (
        <>
            <h1>Votre Panier</h1>

            <table>
                <thead>
                    <tr>
                        <th>Article</th>
                        <th>Quantité</th>
                        <th>Prix unitaire (HT)</th>
                        <th>Prix total (HT)</th>
                    </tr>
                </thead>
                <tbody>
                    {votrePanier.length == 0 ? <tr><td colSpan={3}>Panier vide</td></tr> : votrePanier.map( (article,i) => <AffArticlePanier key={i} pannier={article} calcTotal={calcTotal} /> ) }
                    {votrePanier.length > 0 && <tr><td colSpan={3}>Total HT :</td><td>{prixTotal}</td></tr>}
                    {votrePanier.length > 0 && <tr><td colSpan={3}>Total TTC :</td><td>{prixTotal * 1.2}</td></tr>}
                </tbody>

            </table>

        </>
    )
}

export default Panier