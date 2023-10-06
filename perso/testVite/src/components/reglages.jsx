import { useContext, useState } from 'react';
import { Level } from '../contexts/level';
import styles from './css/reglage.module.css'

const Reglages = () => {

    const [level,setLevel] = useContext(Level);

    
    const setNbEssaisInc = () => {
        let nextLevel = {...level};
        if (nextLevel.nbEssais < 16 ) {nextLevel.nbEssais++;}
        setLevel(nextLevel);
    }

    const setNbEssaisDec = () => {
        let nextLevel = {...level};
        if (nextLevel.nbEssais > 5 ) {nextLevel.nbEssais--;}
        setLevel(nextLevel);
    }

    const setLgSequenceInc = () => {
        let nextLevel = {...level};
        if (nextLevel.lgSequence < 9 ) {nextLevel.lgSequence++;}
        setLevel(nextLevel);
    }

    const setLgSequenceDec = () => {
        let nextLevel = {...level};
        if (nextLevel.lgSequence > 4 ) {nextLevel.lgSequence--;}
        setLevel(nextLevel);
    }

    const setNbCouleursInc = () => {
        let nextLevel = {...level};
        if (nextLevel.nbCouleurs < 12 ) {nextLevel.nbCouleurs++;}
        setLevel(nextLevel);
    }

    const setNbCouleursDec = () => {
        let nextLevel = {...level};
        if (nextLevel.nbCouleurs > 5 ) {nextLevel.nbCouleurs--;}
        setLevel(nextLevel);
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.blocSetting}>
                <button onClick={setNbEssaisInc} type="button">&#8963;</button>
                <span>{level.nbEssais}</span>
                <button onClick={setNbEssaisDec} type="button">&#8964;</button>
            </div>
            <div className={styles.blocSetting}>
                <button onClick={setLgSequenceInc} type="button">&#8963;</button>
                <span>{level.lgSequence}</span>
                <button onClick={setLgSequenceDec} type="button">&#8964;</button>
            </div>
            <div className={styles.blocSetting}>
                <button onClick={setNbCouleursInc} type="button">&#8963;</button>
                <span>{level.nbCouleurs}</span>
                <button onClick={setNbCouleursDec} type="button">&#8964;</button>
            </div>


        </div>

    )
}

export default Reglages