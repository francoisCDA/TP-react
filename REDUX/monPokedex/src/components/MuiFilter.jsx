import { FormControl, FormHelperText, InputLabel, Select, Container, MenuItem } from "@mui/material"
import { useSelector } from "react-redux"

const MuiSelectFiltre = ({filtre, callback}) => {

    const pokefiltres = useSelector(state => state.pokemon.pokeFiltres)

    return (
        <Container maxWidth={"sm"} sx={{my:2}}>
            <FormControl fullWidth>
                <InputLabel id="filtre">Type</InputLabel>
                <Select
                    labelId="filtre"
                    id="filtre"
                    value={filtre}
                    label="Filtre"
                    onChange={(e) => callback(e.target.value)}
                    sx={{backgroundColor:'rgba(250,250,250,0.7)', textTransform:'capitalize', fontWeight:'bold'}}
                >
                    <MenuItem value={''}>Aucun filtre</MenuItem>
                    { pokefiltres.length != 0 && pokefiltres.map( (pf,i) => <MenuItem key={i} value={pf} sx={{textTransform:"capitalize"}} >{pf}</MenuItem> ) }
                </Select>
                <FormHelperText sx={{fontWeight:'bold'}}>Choisissez un type de pokemon</FormHelperText>
            </FormControl>
        </Container>   
    )
}

export default MuiSelectFiltre