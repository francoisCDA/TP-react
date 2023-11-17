import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { BASE_DB_URL } from "../firebaseConfig";
import { addIngredient, addRecette } from "../recettes/recettesSlice";

const ChkToken = (props) => { 

    const user = useSelector(state => state.auth.user) ;
    const dispatch = useDispatch();


    async function getIngredients() {

        try {
            const reponse = await fetch(`${BASE_DB_URL}/ingredientSlice.json`);
    
            if (!reponse.ok) {
                throw new Error('Erreur de réseau : ' + reponse.status);
            }
    
            const data = await reponse.json();
    
           // console.log('données récupérées : ');
           // console.dir(data);

            const mesIngredients = Object.keys(data).map( key => data[key] );
           // console.log(mesIngredients);
    1
            mesIngredients.forEach( ingred => dispatch(addIngredient(ingred)) );
    
        } catch (error) {
            console.error('Erreur lors de la requète Fetch getIngredient', error);
        }

                
    }
    
    async function getRecettes() {
        try {
            const reponse = await fetch(`${BASE_DB_URL}/recettes.json`);
    
            if (!reponse.ok) {
                throw new Error('Get Fail : ' + reponse.status)
            }

            const data = await reponse.json();

            Object.keys(data.map( key => data[key] )).forEach( recet => dispatch(addRecette(recet)));
            
            

        } catch (error) {
            console.error('Erreur du fetch getRecettes ',error )
        }
        
    }


    if (user) {

        getIngredients();
        getRecettes();

        return (
            <>
                {props.children}
            </>
        )
    } else {
        return  <Navigate to={'/inconnu'} /> 
    }
}

export default ChkToken
