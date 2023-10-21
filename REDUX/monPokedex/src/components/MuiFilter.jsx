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
                >
                    <MenuItem value={''}>Aucun filtre</MenuItem>
                    { pokefiltres.length != 0 && pokefiltres.map( (pf,i) => <MenuItem key={i} value={pf} sx={{textTransform:"capitalize"}} >{pf}</MenuItem> ) }
                </Select>
                <FormHelperText>Filtrer par type de pokemon</FormHelperText>
            </FormControl>
        </Container>   
    )
}

export default MuiSelectFiltre