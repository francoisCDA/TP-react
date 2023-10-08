import { Flex, Box } from "@radix-ui/themes"
import './css/playedpion.css';

const PionJoue = ({color,retInd, ind}) => {

    const backInd = () => {
        retInd(ind);
    }

    const caseBox = () => {
        if (typeof color == 'string' ) {
            return <Box width="8" height="8" style={{backgroundColor: `${color}` }}></Box>    
        } 
        
        return <Box width="4" height="4" className="trou"></Box>    
    }


    return (
        <Flex width="9" height="7" mx="1" justify="center" align="center" style={{backgroundColor: 'grey'}} onClick={backInd}>
           {caseBox()}  
        </Flex> 
    )
}

export default PionJoue