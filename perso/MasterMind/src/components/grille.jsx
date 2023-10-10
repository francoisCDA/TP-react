import { useContext, useEffect, useState } from "react";
import { Flex, Button, Container } from "@radix-ui/themes";
import AffSolution from "./affSolution";
import { ActivColor } from "../contexts/level";
import AffLignesVides from "./affLignesVides";
import Place from "./place";
import AffProgression from "./affProgression";




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

    const mkLigneVides = () => {
        
        let ret = [];
        
        for (let i = 0 ; i < (nbLignes - progression.length ) ; i++) {
                ret.push((new Array(combinaison.length)).fill(-2));
        
        }
       // console.log(ret);
        return ret;

    }

    const evalProp = (prop) => {

        const propRmOk = prop.filter((couleur,i) => couleur != combinaison[i] ) ;

        const nbPointBlanc = combinaison.length - propRmOk.length ;
        
        const combiRmOK = combinaison.filter( (couleur,i) => couleur != prop[i] ) ;
        
        
        let nbPointNoir = 0 ;

        for ( let color of propRmOk ) {
            const iCoul = combiRmOK.indexOf(color) ;
            if (iCoul != -1) {
                nbPointNoir++ ;
                combiRmOK.splice(iCoul,1,'NaC');
            }
        }

        
        return { blanc : nbPointBlanc, noir : nbPointNoir}
    }


    const valideProposition = () => {

        setProgression(prev => [...prev, proposition]);

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
        // setProgression([((new Array(combinaison.length)).fill(-1))])
    }, [combinaison])

    useEffect( () => {
        setProposition(((new Array(combinaison.length)).fill('NaC')))
        
    }, [progression])
    
    
    useEffect( () => {
        //  setProgression([...progression,proposition])
        //console.log("proposition ")
        //console.log(proposition)
    }, [proposition])

    return (
        <>
            <Container style={{marginLeft: `${(9 - combinaison.length) * 38 + 30}px`}}>

                <AffSolution sequ={firstLign()}/>
                <hr className="h-2 my-2 bg-gray-400 border-3 dark:bg-gray-700"/>



                { (progression.length > 0) && progression.map( (prop,i) => <AffProgression key={i} ligne={prop} blEtNo={evalProp(prop)} /> ) }

                { (progression.length < nbLignes) &&

                <Flex mb="3">
                    { proposition.map( (couleur,i) => <Place key={i} couleur={couleur} playable={true} useCallback={aJoue} ind={i} />)}
                    { !chkProp() && <Button ml="3" size="3" disabled={proposition.includes('NaC')} onClick={valideProposition}>Valider</Button> }
                </Flex>
                }

                { (progression.length < nbLignes -1) && (mkLigneVides()).map( (ligne,i) => <AffLignesVides key={i} ligne={ligne} />)}

            </Container>
            
        </>
    )

}

export default Grille