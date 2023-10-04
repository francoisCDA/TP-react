import styles from './css/reglage.module.css'

const Reglages = ({level, setting}) => {


    const changsetting = (newLevel) => {
        setting(newLevel);
    }

    let nbEss = '11';

    //changsetting({...level,nbEssais:(level.nbEssais++)})
    //changsetting({...level,nbEssais:(level.nbEssais--)})
    
    return(
        <div className={styles.container}>
            <div className={styles.blocSetting}>
                <button onClick={} type="button">&#8963;</button>
                <span>{nbEss}</span>
                <button onClick={} type="button">&#8964;</button>
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