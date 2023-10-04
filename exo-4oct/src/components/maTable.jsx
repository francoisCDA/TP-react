const MaTable = ({listing}) => {

    return (
        <table>
            <thead> 
                <tr>
                    <td>Prenom</td>
                    <td>Nom</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {listing.map((personne,i) => <tr key={i} ><td>{personne.first}</td><td>{personne.last}</td><td>{personne.naissance}</td></tr>  )}
            </tbody>
        </table>
    )

}

export default MaTable

