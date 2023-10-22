import { Button, DialogTitle, DialogContent, DialogActions } from "@mui/material"
import PokeballItem from "./PokeballItem"


const ModalPokeball = ({pokedex,closePokeball}) => {

    return (
        <>
            <DialogTitle variant="h4" id="labelModal" sx={{textAlign:'center'}}>Ma PokeBall</DialogTitle>
            <DialogContent>
                {pokedex.map( (pm,i) => <PokeballItem key={i} image={pm.image} nom={pm.nom} taille={pm.height} poids={pm.weight} ind={i} />)}
            </DialogContent>
            <DialogActions>
                <Button variant='contained' autoFocus onClick={closePokeball}>Fermer</Button>                    
            </DialogActions>

        </>
    )
}

export default ModalPokeball