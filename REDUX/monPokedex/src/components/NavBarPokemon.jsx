import { AppBar, Button, Link, Typography, Box, Dialog } from "@mui/material"
import Pokeball from "./Pokeball"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { resetPokedex } from "../slice/pokeSlice"
import ModalClear from "./menumodal/ModalClear"
import ModalPokeball from "./menumodal/ModalPokeball"


const NavBarPokemon = () => {

    const pokedex = useSelector(state => state.pokemon.pokedex)

    const dispatch = useDispatch();

    const [modale,setModale] = useState({bool: false, mode: ''});
    
  
    const openConfirm = () => {
        setModale({bool: true, mode: 'confirm'});
    }
    const openPokeball = () => {
        setModale({bool: true, mode: 'pokeball'})
    }

    
    const closeModal = () => {
        setModale({bool: false, mode: ''});
    }

    const clearPokedex = () => {
        dispatch(resetPokedex());
        closeModal();
    }

    
    return (
        <>
            <Dialog open={modale.bool} onClose={closeModal} aria-labelledby="labelModal">
                {modale.mode == 'confirm' && <ModalClear poketaille={pokedex.length} closeconfirm={closeModal} clearPokedex={clearPokedex} />}
                {modale.mode == 'pokeball' && <ModalPokeball pokedex={pokedex} closePokeball={closeModal} />}
            </Dialog>

            <AppBar position="static" sx={{p:'0.5em', backgroundColor: "beige", display:'flex', flexDirection: 'row', alignItems:'center'}} >

            <img style={{height: '5vh', width:'auto'}} src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="logo pokemon" />

            <Link href="https://www.pokemon.com/fr" variant="h4" sx={{ml:'1rem'}}>HOME</Link>

            <Typography variant="h4" sx={{mx: 'auto', color:"GrayText"}} >Mon Pokedex</Typography>

            <Box sx={{ml:'auto'}}>
                <Pokeball nmbrePoke={pokedex.length} />
            </Box>
            <Box sx={{ml:'1rem'}}>
                <Button variant='contained' sx={{mr:'1rem'}} color='warning' onClick={openConfirm}>Clear</Button>
                <Button variant='contained' sx={{mr:'1rem'}} color='primary' onClick={openPokeball}>Show</Button>
            </Box>

            </AppBar>
        </>
    )
}

export default NavBarPokemon