import { Button, Flex, Box } from "@radix-ui/themes"


import { useContext } from "react";
import { ActivColor } from "../contexts/level";
import PionJoue from "./pionjoue";

const AffTry = ({sequ, joue}) => {

    const [activColor,_] = useContext(ActivColor);


    const putColor = (ind) => {
        joue(ind);

        //refBox.current.style.backgroundColor = activColor ;
        //refBox.current.style.width = '12px' ;
        //refBox.current.style.height = '12px' ;
    }

    return (

        <Flex justify="start" mb="3" align="center" style={{marginLeft: `${ 50 + (9 - sequ.length) * 38}px`}} >
            {sequ.map( (color,i) => <PionJoue key={i} color={color} retInd={putColor} ind={i} /> )}
            {sequ[0] == -1 && <Button ml="3" size="3">Valider</Button>}
        </Flex>
    )
}

export default AffTry