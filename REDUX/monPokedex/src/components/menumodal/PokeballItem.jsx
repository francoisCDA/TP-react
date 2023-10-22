import { Container, Box, Typography } from "@mui/material"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from "react-redux";
import { freePoke } from "../../slice/pokeSlice";

const PokeballItem = ({image,nom,taille,poids,ind}) => {

    const dispatch = useDispatch();

    const CSS = {
        container: {
            display:'flex',
            alignItems:'center',
            backgroundColor:'rgba(190, 210, 250, 0.7)',
            my: '0.3rem',
            borderRadius: '10px',
            '& div' : {
                mr: '1rem'
            },
            '& p:first-of-type' : {
                fontWeight: 'bold'
            },
            '& p:last-of-type' : {
                textTransform:'capitalize'
            }
        }
    }

    
    return (
        <Container sx={CSS.container}>
            <img src={image} alt="illustration de pokemon" />
            <Box>
                <Typography>Name</Typography>
                <Typography>{nom}</Typography>
            </Box>
            <Box>
                <Typography>Height</Typography>
                <Typography>{taille}</Typography>
            </Box>
            <Box>
                <Typography>Weight</Typography>
                <Typography>{poids}</Typography>
            </Box>
            <Box>
                <HighlightOffIcon color='error' sx={{ml:'1em'}} onClick={() => dispatch(freePoke(ind))} />
            </Box>
        </Container>
    )
}

export default PokeballItem