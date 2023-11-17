import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import { BASE_DB_URL } from "../firebaseConfig";
import { addIngredient } from "../recettes/recettesSlice";
import { useDispatch, useSelector } from "react-redux";
import OptionIngredient from "./OptionIngredient";

const FormRecettes = () => {

    const netscape = useNavigate()

    const lstIngredients = useSelector(state => state.recette.ingredients);
    const dispatch = useDispatch();

    const reftitle = useRef();
    const refinstructions = useRef();
    const refcooktime = useRef();
    const refpreptime = useRef();
    const refingredients = useRef();
    const refaddingredient = useRef();

    const addRecet = async () => {

        const newRecette = {
            id: `${Date.now()}`,
            title: reftitle.current.value,
            instructions: refinstructions.current.value,
            cookTime: refcooktime.current.value,
            prepTime: refpreptime.current.value,
            ingredients: Array.from(refingredients.current.selectedOptions, option => option.value)
        }

        const montoken = localStorage.getItem("TP_recette_token")
        
        try {
            const reponse = await fetch(`${BASE_DB_URL}/recettes.json?auth=${montoken}`, {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(newRecette)
            })
            
            if (!reponse.ok) {
                throw new Error("Problème d'envoie de la recette" + reponse.status)
            }
            
            const data = await reponse.json();
            console.log(data);

            dispatch(addRecette(newRecette));

            netscape('/lesRecettes');

        } catch (error) {
            console.error(error.message)
        }
    }


    const addIngre = async () => {

        const newIngredient = {
            id: Date.now(),
            name: refaddingredient.current.value
        }

        const montoken = localStorage.getItem("TP_recette_token")

        try {
            const reponse = await fetch(`${BASE_DB_URL}/ingredientSlice.json?auth=${montoken}`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(newIngredient)
            })

            if (!reponse.ok) {
                throw new Error("problème lors de l'ajout d'ingrédient" + reponse.status);
            }

            const data = await reponse.json();
            console.log(data);

            dispatch(addIngredient(newIngredient));

        } catch(error) {
            console.error(error.message);
        }

    }


    return (
        <>
            <form>
                <h2>Ajouter une recette</h2>
                <div className="grpForm">
                    <label htmlFor="title">Nom de la recette</label>
                    <input type="text" name="title" id="title" ref={reftitle} />
                </div>
                <div className="grpForm">
                    <label htmlFor="instructions">Instructions</label>
                    <input type="text" name="instructions" id="instructions" ref={refinstructions} />
                </div>
                <div className="grpForm">
                    <label htmlFor="cooktime">Temps de cuisson</label>
                    <input type="number" name="cooktime" id="cooktime" ref={refcooktime} />
                </div>
                <div className="grpForm">
                    <label htmlFor="preptime">Temps de préparation</label>
                    <input type="text" name="preptime" id="preptime" ref={refpreptime} />
                </div>
                <div className="grpForm">
                    <label htmlFor="ingredients">Liste d'ingrédients</label>
                    <select name="ingredients" id="ingredients" ref={refingredients} multiple>
                        {lstIngredients.length < 0 ? <option value={0}>pas d'ingrédient</option> : lstIngredients.map( (ingredient,i) => <OptionIngredient key={i} ingredient={ingredient} /> ) }
                        
                    </select>
                </div>
                <button type="button" onClick={addRecet}>Ajouter recette</button>
            </form>

            <form action="#">
                <h2>Ajouter des ingrédients</h2>
                <div className="grpForm">
                    <label htmlFor="title">Nom de l'ingrédient'</label>
                    <input type="text" name="title" id="title" ref={refaddingredient} />
                </div>
                <button type="button" onClick={addIngre}>Ajouter ingrédient</button>
            </form>
        </>
    )
}

export default FormRecettes