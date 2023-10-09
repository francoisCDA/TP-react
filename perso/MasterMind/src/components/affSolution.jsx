import { Box, Flex } from "@radix-ui/themes";

import './css/playedpion.css';

const AffSolution = ({sequ}) => {

    const isColor = (color,i) => {
        if (color != 'NaC') return <Box key={i} width="9" height="9" mx="2" style={{backgroundColor: color}}></Box> 
    
        return <Box key={i} width="9" height="9" mx="2" className={"mystere"}></Box> 
    }

    return (
        <>
            <Flex justify="start" >
                {sequ.map( (color,i) => isColor(color,i))}
            </Flex>
        </>
    )
}

export default AffSolution