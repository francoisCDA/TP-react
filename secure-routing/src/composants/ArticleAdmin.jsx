import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import { useEffect, useRef } from "react";


const ArticleAdmin = () => {

    const chromium = useNavigate() ;   

    const { id } = useParams();
    

    const refLabel = useRef();
    const refPrix = useRef();
    const refDispo = useRef();


    useEffect( () => {
        if (id != "new") {
            
            axios.get(`http://localhost:5001/magasin/${id}`)
            .then(reponse => {
    
                refLabel.current.value = reponse.data.label ;
                refPrix.current.value = reponse.data.prixHT ;
                refDispo.current.value = reponse.data.disponible ;
    
            })
            .catch(error => {
                console.error("Erreur : ",error)
            })
        }
       
    }, [])

    const updBDD = () => {
        
        if (id != "new") {

            axios.put(`http://localhost:5001/magasin/${id}`, {label : refLabel.current.value, prixHT: refPrix.current.value, disponible: refDispo.current.value} )
            .then(reponse => {
                console.log(reponse.data)
    
            })
            .catch(error => {
                console.error("Erreur : ",error)
            })

        } else (
            axios.post(`http://localhost:5001/magasin/`, {label : refLabel.current.value, prixHT: refPrix.current.value, disponible: refDispo.current.value} )
            .then(reponse => {
                console.log(reponse.data)
    
            })
            .catch(error => {
                console.error("Erreur : ",error)
            })

        )
                       
        
        chromium("/admin");
    }

    const suppr = () => {

        axios.delete(`http://localhost:5001/magasin/${id}`)
        .then(reponse => {
            console.log("article supprimé") 
        })
        .catch(error => {
            console.error("Erreur : ",error)
        })
        chromium("/admin");
    }


    return (
        <>
            <h1>détails du produit</h1>
            
            <form action="#"> 
                <div className="grpForm">
                    <label htmlFor="label">label</label>
                    <input type="text" id="label" name="label" ref={refLabel} />
                </div>
                <div className="grpForm">
                    <label htmlFor="prix">prix HT</label>
                    <input type="number" id="prix" name="prix" ref={refPrix} />
                </div>
                <div className="grpForm">
                    <label htmlFor="dispo">disponibilité</label>
                    <input type="text" id="dispo" name="dispo" ref={refDispo} />
                </div>

                <button type="button" onClick={updBDD} >Mettre à jour</button>
                <button type="button" onClick={suppr} >Supprimer article</button>

            </form>


        </>
    )
}



export default ArticleAdmin