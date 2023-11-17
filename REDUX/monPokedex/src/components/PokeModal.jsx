import { Box, Container, Button, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { addToPokedex, setPokeDetail } from "../slice/pokeSlice";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const PokeModal = ({pokedetail}) => {

    const dispatch = useDispatch();

    return (
        <>
        <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', margin:'auto', mt:'1em'}}>
            <Box sx={{display:'flex', justifyContent:'space-evenly', width:'100%'}}>
                <Box sx={{display:'flex', flexDirection:'column', p:'2em', backgroundColor:'rgba(250, 250, 250, 0.7)'}} >
                    <Typography variant="h4" sx={{color:'OrangeRed', fontWeight:'bolder', textAlign:'center'}}>{pokedetail.nom.toUpperCase()} </Typography>
                    <img height={'300px'} src={`${pokedetail.image}`} alt={`illustration d'un ${pokedetail.nom}`} />
                    <Button variant='contained' color='success' onClick={() => dispatch(addToPokedex(pokedetail))} ><AddCircleOutlineIcon sx={{mr:'0.3em'}}/>  Ajouter à la PokeBall</Button>
                    
                </Box>
                <Box sx={{p:'2em', backgroundColor:'rgba(250, 250, 250, 0.7)', borderRadius:'20px'}}>
                    <Typography variant="h4">HEIGHT</Typography>
                    <Typography variant="h6">{pokedetail.height}</Typography>
                    <Typography variant="h4">WEIGHT</Typography>
                    <Typography variant="h6">{pokedetail.weight}</Typography>
                    <Typography variant="h4">XP</Typography>
                    <Typography variant="h6">{pokedetail.xp}</Typography>
                    <Typography variant="h4">ABILITIES</Typography>
                    <Box sx={{my:1}}>
                    { pokedetail.abilities.map( (a,i) => <Typography key={i} variant="span" sx={{backgroundColor: 'Fuchsia', m:1,p:1, textTransform:'capitalize', fontWeight:'bold', borderRadius:'5px'}}>{a}</Typography>)}
                    </Box>
                    <Typography variant="h4">TYPE</Typography>
                    <Box sx={{my:1}}>
                    { pokedetail.types.map( (a,i) => <Typography key={i} variant="span" sx={{backgroundColor: 'MediumPurple', m:1,p:1, textTransform:'capitalize', fontWeight:'bold', borderRadius:'5px'}}>{a}</Typography>)}
                    </Box>

                </Box>
            </Box>
            <Box sx={{ backgroundColor:'rgba(250, 250, 250, 0.7)', borderRadius:'20px', mt:'1em', p:'2em'}}>
            <Typography variant="h4" >MOVES</Typography>
            <Box sx={{my:2, display:'flex', flexWrap:'wrap'}}>
                    { pokedetail.moves.map( (a,i) => <Typography key={i} variant="span" sx={{backgroundColor: 'SandyBrown', m:1,p:1, textTransform:'capitalize', fontWeight:'bold', borderRadius:'5px'}}>{a}</Typography>)}
                    </Box>
            </Box>

            <Container sx={{mt:'1em'}}>
                <Button variant='contained'  color='warning' size="large" onClick={() => {dispatch(setPokeDetail(false))}}><KeyboardReturnIcon sx={{mr:'0.3em'}}/> Back to list</Button>
            </Container>
            
        </Container>
        </>
    )
}

export default PokeModal