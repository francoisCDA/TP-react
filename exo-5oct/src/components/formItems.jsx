import styles from './css/formItem.module.css'
import { CtxFilm } from './contexts/ctxFilm'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import Film from '../classs/film'

const FormItem = () => {

    const [titre, setTitre] = useState('');
    const [annee, setAnnee] = useState('');
    const [pays, setPays] = useState('');
    const [genre, setGenre] = useState('');
    const [real, setReal] = useState('');
    const [url, setUrl] = useState('');
    
    const[films,setfilms] = useContext(CtxFilm);
    
    useEffect( () => {
        console.log(films);      
    }, [films])

    const ajoutFilm = (event) => {
        event.preventDefault();
        const objFilm = new Film(titre,annee,pays,genre,real,url)
        const dico = {...films} ;
        dico[objFilm.id] = objFilm ;
        setfilms(dico);
    }

    const settitre = (e) => { setTitre(e.target.value) }
    const setannee = (e) => { setAnnee(e.target.value) }
    const setpays = (e) => { setPays(e.target.value) }
    const setgenre = (e) => { setGenre(e.target.value) }
    const setreal = (e) => { setReal(e.target.value) }
    const seturl = (e) => { setUrl(e.target.value) }

    return (
        <form action="#" onSubmit={ajoutFilm} className={styles.form}>
            <img src={url ? url : 'https://media.istockphoto.com/id/1039351052/fr/vectoriel/film-et-film-festival-affiche-mod%C3%A8le-design-r%C3%A9tro-vintage-style-moderne.jpg?s=1024x1024&w=is&k=20&c=rGGLfmi3HF8WvsDjmez8m4I4LOvIozbYDziIlFqsJuU='} alt="" />
            <div>
                <label htmlFor="titre">Titre</label>
                <input type="text" name="titre" id="titre" value={titre} onChange={settitre} />
            </div>
            <div>
                <label htmlFor="annee">Annee</label>
                <input type="number" name="annee" id="annee" value={annee} onChange={setannee}/>
            </div>
            <div>
                <label htmlFor="pays">Pays</label>
                <input type="text" name="pays" id="pays" value={pays} onChange={setpays} />
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <input type="text" name="genre" id="genre" value={genre} onChange={setgenre} />
            </div>
            <div>
                <label htmlFor="realisateur">Réalisateur</label>
                <input type="text" name="realisateur" id="realisateur" value={real} onChange={setreal} />
            </div>
            <div>
                <label htmlFor="urlAffiche">Affiche</label>
                <input type="text" name="urlAffiche" id="urlAffiche" value={url} onChange={seturl} />
            </div>
            <button>Ajouter</button>
        </form>

    )
}

export default FormItem

