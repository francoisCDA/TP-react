import { useContext, useEffect, useState } from "react";
import AffSolution from "./affSolution";
import AffTry from "./affTry";
import { ActivColor } from "../contexts/level";

const Grille = ({nbLignes, combinaison}) => {

    const [activColor,_] = useContext(ActivColor);

    const [proposition,setProposition] = useState([]); 
    const [progression,setProgression] = useState([]);


    const chkProp = () => {
        for (let i = 0 ; i < combinaison.length ; i++) {
            if (proposition[i] != combinaison[i]) return false ;
        }
        
        return true ;
    }

    const firstLign = () => {
        if (chkProp()) { return combinaison }

        return ((new Array(combinaison.length)).fill('NaC'))
    }

    const mkLigne = () => {
        
        
        let ret = [];
        

        for (let i = 0 ; i < nbLignes ; i++) {
            if (progression[i]) {
                ret.push(progression[i]);
            } else {
                ret.push((new Array(combinaison.length)).fill(-2));
            }
        }
        //console.log(ret);
    
        return ret;

    }

    const aJoue = (ind) => {
        
        const nextProp = [];


        for ( let [i,color] of proposition.entries() ) {

            if (i == ind) {nextProp.push(activColor)} else {nextProp.push(color)} 
        }
        setProposition(nextProp)
    }


    useEffect( () => {
        setProposition(((new Array(combinaison.length)).fill('NaC')))
        setProgression([((new Array(combinaison.length)).fill(-1))])
    }, [combinaison])


    
    useEffect( () => {
      //  setProgression([...progression,proposition])
     // console.log("proposition ")
    //   console.log(proposition)
    }, [proposition])

    return (
        <>
                <AffSolution sequ={firstLign()}/>
                <hr className="h-2 my-2 bg-gray-400 border-3 dark:bg-gray-700"/>
                
                {/* ajouter les lignes de progression */}

                {/* ajouter la ligne de proposition */}

                {/* ajouter les lignes restantes */}

                {(mkLigne()).map( (ligne,i) => <AffTry key={i} sequ={ligne} joue={aJoue} />)}

            
        </>
    )

}

export default Grille