import { AppBar, Button, Link, Typography, Box } from "@mui/material"
import Pokeball from "./Pokeball"


const NavBarPokemon = () => {




    
    return (
        <>
            <AppBar position="static" sx={{p:'0.5em', backgroundColor: "beige", display:'flex', flexDirection: 'row', alignItems:'center'}} >

            <img style={{height: '5vh', width:'auto'}} src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="logo pokemon" />

            <Link href="https://www.pokemon.com/fr" variant="h4" sx={{ml:'1rem'}}>HOME</Link>

            <Typography variant="h4" sx={{mx: 'auto', color:"GrayText"}} >Mon Pokedex</Typography>

            <Box sx={{ml:'auto'}}>
                <Pokeball nmbrePoke={2} />
            </Box>
            <Box sx={{ml:'1rem'}}>
                <Button variant='contained' sx={{mr:'1rem'}} color='warning'>Clear</Button>
                <Button variant='contained' sx={{mr:'1rem'}} color='primary'>Show</Button>
            </Box>

            </AppBar>
        </>
    )
}

export default NavBarPokemon