import { useDispatch } from "react-redux"
import { changeMod, rmProduit } from "../productsSlice";

const ProductItem = ({article}) => {

    const dispatch = useDispatch();

    const rmProd = () => {

        dispatch(rmProduit(article.id))
    }

    const edit = () => {
        dispatch(changeMod(article.id))
    }

    return (
        <>
            <li>
                <div>{article.label}</div><div>{article.prix} € </div>
                
                <div className="grpbtn">
                    <button type="button" onClick={edit}>Modifier</button> 
                    <button type="button" onClick={rmProd} >Supprimer</button>
                </div>

            </li>
        
        </>
    )
}

export default ProductItem