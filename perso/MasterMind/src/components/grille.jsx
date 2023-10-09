import { useContext, useEffect, useState } from "react";
import { Flex, Button } from "@radix-ui/themes";
import AffSolution from "./affSolution";
//import AffProposition from "./affProposition";
import PionJoue from "./pionjoue";
import AffTry from "./affTry";
import { ActivColor } from "../contexts/level";



const Grille = ({nbLignes, combinaison}) => {

    const [activColor,_] = useContext(ActivColor);

    //const [proposition,setProposition] = useState((new Array()).fill((new Array(combinaison.length)).fill(-1))); 
    const [proposition,setProposition] = useState(new Array(combinaison.length).fill('NaC')); 
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
        
        for (let i = 0 ; i < (nbLignes - progression.length - 1) ; i++) {
                ret.push((new Array(combinaison.length)).fill(-2));
        
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
     console.log("proposition ")
      console.log(proposition)
    }, [proposition])

    return (
        <>
                <AffSolution sequ={firstLign()}/>
                <hr className="h-2 my-2 bg-gray-400 border-3 dark:bg-gray-700"/>
                
                {/* ajouter les lignes de progression */}

                {/* ajouter la ligne de proposition */}

                {/* {proposition.map( (couleur,i) => <AffProposition key={i} long={proposition.length} />)} */}

                <Flex justify="start" mb="3" align="center" style={{marginLeft: `${ 50 + (9 - proposition.length) * 38}px`}} >
                     {proposition.map( (color, i) => <PionJoue key={i} color={color} retInd={aJoue} ind={i} />)}
                     <Button ml="3" size="3">Valider</Button>
                </Flex>



                {/* ajouter les lignes restantes */}

                {(mkLigne()).map( (ligne,i) => <AffTry key={i} sequ={ligne} />)}

            
        </>
    )

}

export default Grille