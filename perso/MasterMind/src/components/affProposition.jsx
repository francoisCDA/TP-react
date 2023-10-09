const AffProposition = ({long}) => {

    return (
        <Flex justify="start" mb="3" align="center" style={{marginLeft: `${ 50 + (9 - long) * 38}px`}} >
            <PionJoue key={i} color={color} retInd={putColor} ind={i} />
            <Button ml="3" size="3">Valider</Button>
        </Flex>

    )
}

export default AffProposition