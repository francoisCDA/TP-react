import Alert from "./alert";

const MonTableau = (props) => {

    let table = props.table;

    
    function retour() {
        
        if (table) {
            return (
            <table>
                <tr>
                  <th>Prenom</th>
                  <th>Nom</th>
                  <th>Age</th>
                </tr>
                
                {table.map( (element,i) => 
                    <tr key={i}>
                        <td>{element.prenom}</td>
                        <td>{element.nom}</td>
                        <td>{element.age}</td>
                    </tr>   
                )}
    
            </table>

            )
        } else {
            return (
                <Alert innerTxt = "Pas d'info à afficher" couleur = 'red' />

            )
        }
        
    }
    
    return (
        <>
            {retour()}
        </>
    )
}

export default MonTableau;