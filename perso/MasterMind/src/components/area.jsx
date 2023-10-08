import { useEffect, useState } from 'react'
import areaCSS from './css/area.module.css'
import Grille from './grille'
import Pions from './pions'
import Reglages from './reglages'

import { Level } from '../contexts/level'

const Area = () => {

    const [level,setLevel] = useState({
        nbEssais: 7,
        lgSequence: 5,
        nbCouleurs: 6
    })

    
    const random = (nb) => {
        return Math.round(Math.random()*nb)
    }
    
    const newCombinaison = () => {
        const newComb = [];
        while (newComb.length < level.lgSequence) {newComb.push(random(level.nbCouleurs)) }
        return newComb;
    }
    
    const [combinaison,setCombinaison] = useState(newCombinaison());

    useEffect( () => {setCombinaison(newCombinaison()); }, [level])

    useEffect( () => {console.dir(combinaison)}, [combinaison])

    const colorCodes = [
        '#FF0000',  // Rouge
        '#FFFF00',  // Jaune
        '#008000',  // Vert
        '#0000FF',  // Bleu
        '#FFA500',  // Orange
        '#800000',  // Marron
      
        '#800080',  // Violet
        '#FFC0CB',  // Rose
        '#00FFFF',  // Cyan
        '#008080',  // Teal
        '#FFFFFF',  // Blanc
        '#000000'   // Noir
    ];

    return (
            <div className={areaCSS.container}>

                <div className={areaCSS.masterban}>
                    <Grille nbLignes={level.nbEssais} largeur={level.lgSequence} combinaison={combinaison} />
                </div>

                <div className={areaCSS.subContainer}>
                    <div className={areaCSS.bowl}>
                        <Pions colorCodes={colorCodes.slice(0,level.nbCouleurs)} />
                    </div>
        <Level.Provider value={[level,setLevel]}>
                    <div className={areaCSS.setting}>
                        <Reglages/>
                    </div>
        </Level.Provider>

                </div>
            </div>
        
        
    )
}

export default Area