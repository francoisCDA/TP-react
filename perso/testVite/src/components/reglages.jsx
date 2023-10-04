import { useState } from 'react';
import styles from './css/reglage.module.css'

const Reglages = ({setting}) => {

    const [level,setLevel] = useState({
        nbEssais: 7,
        lgSequence: 4,
        nbCouleurs: 6
    })

    const changsetting = () => {
        setting({...level});
    }

    
    const setNbEssaisInc = () => {
        setLevel({...level,nbEssais: (level.nbEssais)++});
        console.log(level);
        changsetting();
    }


    const setNbEssaisDec = () => {
        setLevel({...level,nbEssais: level.nbEssais--});
        changsetting();
    }


    //changsetting({...level,nbEssais:(level.nbEssais++)})
    //changsetting({...level,nbEssais:(level.nbEssais--)})
    
    return(
        <div className={styles.container}>
            <div className={styles.blocSetting}>
                <button onClick={setNbEssaisInc} type="button">&#8963;</button>
                <span>{level.nbEssais}</span>
                <button onClick={setNbEssaisDec} type="button">&#8964;</button>
            </div>
            <div className={styles.blocSetting}>
                <button onClick={changsetting} type="button">&#8963;</button>
                <span>{level.lgSequence}</span>
                <button onClick={changsetting} type="button">&#8964;</button>
            </div>
            <div className={styles.blocSetting}>
                <button onClick={changsetting} type="button">&#8963;</button>
                <span>{level.nbCouleurs}</span>
                <button onClick={changsetting} type="button">&#8964;</button>
            </div>


        </div>

    )
}

export default Reglages