import styles from './css/table.module.css'

const MaTable = ({listing}) => {

    return (
        <table className={styles.table}>
            <thead className={styles.thead}> 
                <tr>
                    <td>Prenom</td>
                    <td>Nom</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {listing && listing.map((personne,i) => <tr key={i} className={styles.tr} ><td>{personne.first}</td><td>{personne.last.toUpperCase()}</td><td>{personne.naissance}</td></tr>  )}
            </tbody>
        </table>
    )

}

export default MaTable

