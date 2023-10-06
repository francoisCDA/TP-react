import { useState } from "react";

const Grille = (props) => {

    const[proposition,setProposition] = useState([]); // soit ici, pas besoin de context, la séquence retour est envoyée à la validation bouton, pas de réactivité, utilisation d'un formulaire select?

    const mkLigne = () => {
        
        let ret = ['première ligne'] ;

        for (let i = 0 ; i < props.nbLignes ; i++) {
            ret.push('ligne d essai ' + i);
        }

        return ret;

    }

    return (
        <>
                {(mkLigne()).map( (ligne,i) => <div key={i}>{ligne}</div>)}
        </>
    )

}

export default Grille