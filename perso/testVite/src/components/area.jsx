import { useState } from 'react'
import areaCSS from './css/area.module.css'
import Grille from './grille'
import Pions from './pions'
import Reglages from './reglages'

const Area = () => {

    const [level,setLevel] = useState({
        nbEssais: 7,
        lgSequence: 4,
        nbCouleurs: 6
    })


    const changeSetting = (data) => {
        console.log(data);
        setLevel(data);
    }

    return (
        <div className={areaCSS.container}>
            <div className={areaCSS.masterban}>
                <Grille nbLignes={level.nbEssais} largeur={level.lgSequence} />
            </div>
            <div className={areaCSS.subContainer}>
                <div className={areaCSS.bowl}>
                    <Pions nbCouleurs={level.nbCouleurs} />
                </div>
                <div className={areaCSS.setting}>
                    <Reglages setting={changeSetting} />
                </div>
            </div>
        </div>
    )
}

export default Area