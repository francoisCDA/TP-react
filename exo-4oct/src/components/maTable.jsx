import styles from './css/table.module.css'

const MaTable = ({listing}) => {

    return (
        <table className={styles.table}>
            <thead> 
                <tr>
                    <td>Prenom</td>
                    <td>Nom</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {listing && listing.map((personne,i) => <tr key={i} className={styles.tr} ><td>{personne.first.toLowerCase()}</td><td>{personne.last.toUpperCase()}</td><td>{personne.naissance}</td></tr>  )}
            </tbody>
        </table>
    )

}

export default MaTable

