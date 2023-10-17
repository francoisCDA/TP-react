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

    const addRecette = () => {

        const newRecette = {

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
                console.dir(reponse);
                throw new Error("problème lors de l'ajout d'ingrédient");
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
                        {lstIngredients.length < 0 ? <option value={0}>pas d'ingrédient</option> : lstIngredients.map( (ingredient) => <OptionIngredient key={ingredient.id} ingredient={ingredient}  /> ) }
                        
                    </select>
                </div>
                <button type="button" onClick={addRecette}>valider</button>
            </form>

            <form action="#">
                <h2>Ajouter des ingrédients</h2>
                <div className="grpForm">
                    <label htmlFor="title">Nom de l'ingrédient'</label>
                    <input type="text" name="title" id="title" ref={refaddingredient} />
                </div>
                <button type="button" onClick={addIngre}>Ajouter</button>
            </form>
        </>
    )
}

export default FormRecettes