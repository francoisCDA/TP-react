import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addProduit, changeMod, updProduit } from "../productsSlice";

const AddProduct = () => {
    
    const refLabel = useRef();
    const refPrix = useRef();

    const dispatch = useDispatch();

    const touslesarticle = useSelector(state => state.mesProduits.articles)
    const target = useSelector(state => state.mesProduits.idForChange)


    const envoyer = () => {

        if (target == 0) {
            dispatch(addProduit(
                {
                    label: refLabel.current.value,
                    prix: refPrix.current.value
                }
            ))
        } else {
            dispatch(updProduit(
                {
                    id: target,
                    label: refLabel.current.value,
                    prix: refPrix.current.value
                }
            ))
            dispatch(changeMod(0));
        }

        refLabel.current.value = '';
        refPrix.current.value= '';
    }


    useEffect( () => {

        if (target == 0 ) {
            refLabel.current.value = '';
            refPrix.current.value = '';
        } else {
            const cible = touslesarticle.find( article => article.id == target);
            refLabel.current.value = cible.label;
            refPrix.current.value = cible.prix;
        }

    }, [target])


    return (
        <>
            <h2>{ target == 0 ? "Ajouter" : "Editer"} un produit</h2>
            <form action="#">
                <div className="grpForm">
                    <label htmlFor="nom">Nom du produit</label>
                    <input type="text" id="nom" name="nom" ref={refLabel}/>
                </div>
                <div className="grpForm">
                    <label htmlFor="prix">Prix du produit</label>
                    <input type="text" id="prix" name="prix" ref={refPrix}/>
                </div>
                <button type="button" onClick={envoyer}>{ target == 0 ? "Ajouter" : "Editer" }</button>

            </form>
        </>
    )

}

export default AddProduct