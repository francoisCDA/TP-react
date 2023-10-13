import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AffArticlePanier = ({pannier,calcTotal}) => {

    const [article,setArticle] = useState({}) ;

    const netscape = useNavigate();


    useEffect( () => {

        axios.get(`http://localhost:5001/magasin/${pannier.id}`)
        .then(reponse => {
          const nextArticle = {label: reponse.data.label,quantite:pannier.quantite ,prixHT: reponse.data.prixHT};
          setArticle(nextArticle);

          calcTotal(pannier.quantite*reponse.data.prixHT);
        })

    }, [pannier])



    if ( !article.label ) {

        return ( <tr><td colSpan={3}>Chargement....</td></tr> )

    } else {

        return (
            <>
                <tr>
                    <td>{article.label}</td> 
                    <td>{article.quantite}</td>
                    <td>{article.prixHT}</td>
                    <td>{article.prixHT*article.quantite}</td>

                    <td><button type="button" onClick={ () => netscape(`/article/${pannier.id}`) }>Changer quantite</button></td>
                </tr>
            </>
        )

    }



}

export default AffArticlePanier

