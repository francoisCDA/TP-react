import { Button, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"


const ModalClear = ({poketaille,closeconfirm,clearPokedex}) => {

    return (
        <>
                <DialogTitle id="labelModal">Vider la Pokeball</DialogTitle>
                <DialogContent>
                    <DialogContentText>{poketaille == 0 ? 'Votre Pokeball est vide' :'Souhaitez-vous vraiment vider votre PokeBall ?'}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    {poketaille == 0 ? 
                            <Button autoFocus onClick={closeconfirm}>Retour</Button>                    
                    :
                        <>
                            <Button autoFocus onClick={closeconfirm}>Annuler</Button>
                            <Button onClick={clearPokedex}>Libérer les Pokemon</Button>
                        </>
                    }
                </DialogActions>

        </>
    )
}

export default ModalClear