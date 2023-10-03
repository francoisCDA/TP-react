import { useState } from "react"

const MonFormulaire = () => {

    const [identite, setIdentite] = useState({
        first: "",
        last: ""
    })

    
 
 /*        const udpInput = (event) => {
     setIdentite({...identite, (event.target.dataKey) : event.target.value})
    } */
    
    const udpInputFirst = (event) => {
        setIdentite({...identite, first: event.target.value})
    }
    const udpInputLast = (event) => {
        setIdentite({...identite, last: event.target.value})
        }
    
    
    return (
        <>
            <div>
                <input type="text" dataKey="first" onInput={udpInputFirst} /><input type="text" dataKey="last" onInput={udpInputLast} />
            </div>
            <p>Bonjour {`${identite.first.charAt(0).toUpperCase() + identite.first.slice(1)} ${identite.last.toUpperCase()}`}, bienvenue sur l'application !</p>
        </>
    )


}

export default MonFormulaire;