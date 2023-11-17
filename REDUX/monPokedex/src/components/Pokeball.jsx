import { Box, Typography } from "@mui/material"



const Pokeball = ({nmbrePoke}) => {

    const CSS = {
        text: {
            color:"GrayText",
        },
        boite: {
            width:'42px',
            height:'42px', 
            display:'flex', 
            justifyContent:'space-between',
            '&>p': {fontSize:'1.3em', fontWeight:'bolder'},
            '&>img': {width:'100%'}
        },
    }


    return (
        <Box>   
            <Box sx={CSS.boite}>
            <img src="src/assets/pokeball-icon-23.png" alt="illustration pokeball" />
            <Typography sx={CSS.text} >{nmbrePoke}</Typography> 
            </Box>
            <Typography sx={CSS.text} >Pokeball</Typography>
        </Box> 
    )
}

export default Pokeball