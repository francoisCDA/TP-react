import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Box, Rating, IconButton, Button } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { axiosSupprAlbum, setMode, setTarget } from '../../eAlbums/eAlbumSlice';

//import { useEffect } from 'react'


const CardAlbum = ({album, idAlbum, admin}) => {

    // useEffect(() => {
    //     console.log(album.title)
    // }, [])

    const dispatch = useDispatch()


    const rmAlbum = () => {
        const token = localStorage.getItem("eAlbum_token");
        const albumToRm = idAlbum;

        //console.log(idAlbum);

        dispatch(axiosSupprAlbum({token,albumToRm}));
    }

    const editAlbum = () => {
        dispatch(setTarget(idAlbum))
        dispatch(setMode('edit'))
    }


    return (
        <Card sx={{maxWidth: 300, borderRadius: '15px', m:'0.4rem' }}>
            <CardHeader title={album.title} />
            <Box sx={{display: 'flex', justifyContent:"center"}}>
                
            <CardMedia component="img"  image={album.coverURL} alt={`couverture de l'album ${album.title}`} sx={{width: '194px', height:'194px'}} /> 
            </Box>

            <CardContent>
                <Box sx={{display: 'flex', justifyContent: "space-between", borderBottom : 1, py: '0.2rem'}}>
                    <Typography variant='body' fontSize="0.7rem" fontWeight="bolder">Artist:</Typography><Typography variant='body' fontSize="0.7rem">{album.artist}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: "space-between", borderBottom : 1, py: '0.2rem'}}>
                    <Typography variant='body' fontSize="0.7rem" fontWeight="bolder">Release date:</Typography><Typography variant='body' fontSize="0.7rem">{album.releaseDate}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: "space-between", borderBottom : 1, py: '0.2rem'}}>
                    <Typography variant='body' fontSize="0.7rem" fontWeight="bolder">Score:</Typography><Rating value={album.score} size='small' readOnly />
                </Box>
                <Box sx={{display: 'flex', justifyContent: "space-between", borderBottom : 1, py: '0.2rem'}}>
                    <Typography variant='body' fontSize="0.7rem" fontWeight="bolder">Prix:</Typography><Typography variant='body' fontSize="0.7rem">{album.price ?? 5} €</Typography>
                </Box>
            </CardContent>
            { admin && 
                <CardActions disableSpacing sx={{display:'flex', justifyContent: 'space-evenly'}} >
                    <IconButton aria-label='editer' onClick={editAlbum}><EditIcon  color='success' /></IconButton>
                    <IconButton aria-label='supprimer' onClick={rmAlbum} ><DeleteForeverIcon  color='error' /></IconButton>
                </CardActions>

            }
        </Card>
    )
}

export default CardAlbum