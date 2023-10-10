import { Box, Flex } from "@radix-ui/themes"

const Indices = ({nbBlanc,nbNoir}) => {

    return (
        <Flex direction="column" className=" bg-gray-200 h-[48]" style={{width: '100px'}} >
            <Flex>
                {(new Array(nbBlanc)).map( (rien,i) => <Box key={i} width="5" height="5" className="rounded-full bg-gray-900" ></Box>)}
            </Flex>
            <Flex>
                {(new Array(nbNoir)).map( (rien,i) => <Box key={i} width="5" height="5" className="rounded-full bg-gray-900" ></Box>)}
            </Flex>
        </Flex>

    )
}

export default Indices