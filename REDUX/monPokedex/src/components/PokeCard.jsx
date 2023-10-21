import axios from "axios"
import { useEffect, useState } from "react"
import { Card,Typography,Box, CardMedia, CardActions, CardContent } from "@mui/material"


const PokeCard = ({pokemon, ind, filtre}) => {

    const [monPokemon,setMonPokemon] = useState(false)



    useEffect(() => {


        axios.get(pokemon.url)
        .then( reponse => {

            const newPoke = {};

            newPoke.id = ind + 1;
            newPoke.nom = reponse.data.name;
            newPoke.image = reponse.data.sprites.front_default;

           // console.dir(newPoke);
            setMonPokemon(newPoke);

           // console.dir(reponse.data)
        })
        .catch(error => {
            console.error('erreur : ', error)
        })

    },[])


    return (
        <>
            
            {monPokemon && 
            <Card sx={{maxWidth: 300, borderRadius: '15px', m:'0.4rem' }}>
                 <Box sx={{display: 'flex', justifyContent:"center"}}>
                    <CardMedia component="img"  image={monPokemon.image} alt={`illustration de ${monPokemon.nom}`} sx={{width: '194px', height:'194px'}} /> 
                </Box>
                <CardContent>
                    <Box sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                        <Typography variant="h5">{`#${monPokemon.id}`}</Typography>
                        <Typography variant="h6" sx={{textTransform: "capitalize", mt:"0.7em"}}>{`${monPokemon.nom}`}</Typography>
                    </Box>
                </CardContent>
                
            </Card>
            }    
        </>
    )

}

export default PokeCard