import styles from './css/cards.module.css'
import { useContext } from 'react';
import { CtxFilm } from './contexts/ctxFilm'


const CardItem = ({id}) => {

    const [films,_] = useContext(CtxFilm);
    const {url, titre, annee} = films[`${id}`];


    return (
        <div className="cards">
            <img src={url} alt="#" />
            <span>{titre}</span>
            <span>{annee}</span>
            <button type="button">Détails log</button>

        </div>
    )
}

export default CardItem;