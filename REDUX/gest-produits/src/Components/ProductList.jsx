import { useSelector } from "react-redux"
import ProductItem from './ProductItem'


const ProducList = () => {

    const lstProduits = useSelector( state => state.mesProduits.articles);


    return (
        <>
            <h1>Application de gestion de produits</h1>

            <ul>
                <li><div>Nom</div><div>Prix</div><div>Actions</div></li>
            { lstProduits.map( (article,i) => <ProductItem key={i} article={article} />) }

            </ul>
        </>
    )
}

export default ProducList