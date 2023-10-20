import { Card,Typography,Box, CardMedia, CardActions, CardContent } from "@mui/material"




const PokeCardDumb = ({pokemon, filtre}) => {


    const displayFiltre = () => {
        if (filtre == '' || pokemon.types.includes(filtre) ) {
            return 'auto'
        } else {
            return 'none'
        }
    }

    return (
        <>
            
            <Card sx={{maxWidth: 300, borderRadius: '15px', m:'0.4rem', order: `${pokemon.id}`, display: `${displayFiltre()}` }}>
                 <Box sx={{display: 'flex', justifyContent:"center"}}>
                    <CardMedia component="img"  image={pokemon.image} alt={`illustration de ${pokemon.nom}`} sx={{width: '194px', height:'194px'}} /> 
                </Box>
                <CardContent>
                    <Box sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                        <Typography variant="h5">{`#${pokemon.id}`}</Typography>
                        <Typography variant="h6" sx={{textTransform: "capitalize", mt:"0.7em"}}>{`${pokemon.nom}`}</Typography>
                    </Box>
                </CardContent>
                
            </Card>
                
        </>
    )

}

export default PokeCardDumb