import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useDispatch, useSelector } from 'react-redux';
import { disconnect, setAdmin, setAuthMode } from './auth/authSlice';

import Modal from './modal/Modal';
import FormConnect from './components/FormConnect';

import { AppBar, Button, Container, Box, Dialog, DialogContent,DialogContentText, DialogTitle,DialogActions, TextField, Rating, Typography } from '@mui/material';
import { useEffect, useRef,useState } from 'react';
import { axiosGetCollection, axiosPatchAlbum, axiosPostAlbum, setMode, setTarget, trierScoreCROI, trierScoreDCROI } from './eAlbums/eAlbumSlice';


import CardAlbum from './components/mapComp/CardAlbum';
import MenuFiltre from './components/MenuFiltre';


function App() {

  const admin = useSelector(state => state.auth.admin);
  const formSign = useSelector(state => state.auth.authMode);
  
  const formAlbum = useSelector(state => state.album.formMode);
  const albumArray = useSelector(state => state.album.albums);
  const filtreMode = useSelector(state => state.album.trieMode);
 
  const alTKey = useSelector(state => state.album.albumSelected);
  const alTget = alTKey ? albumArray[alTKey] : false ;

  const refnom = useRef();
  const refartist = useRef();
  const refdate = useRef();
  const refurl = useRef();
  const refprix = useRef();
  const [score,changeScore] = useState(0);

  const newscore = (newSc) => {
    changeScore(newSc);
  }
  
  const dispatch = useDispatch();

  const token = () => {
     const tok = localStorage.getItem("eAlbum_token");
     if (tok) {
      return token
     } else {
      return false
     }
  }

  const onclickaction = () => {
    
    if (token()) {
      dispatch(disconnect())
    } else {
      dispatch(setAuthMode("signIn"))
    }
  }

useEffect( () => {

  dispatch(axiosGetCollection());

  const tok = localStorage.getItem("eAlbum_token");

  if (tok) {
    dispatch(setAdmin(true));
  }

}, [])


  const sendAlbum = () => {
    
    const token = localStorage.getItem("eAlbum_token");
    const album = {
      title: refnom.current.value,
      releaseDate: refdate.current.value,
      artist: refartist.current.value,
      score: score,
      coverURL: refurl.current.value,
      price: refprix.current.value
    }
    const albumToEdit = alTKey ;


     if (formAlbum == "add") {
      dispatch(axiosPostAlbum({token, album}));
    } else {
      dispatch(axiosPatchAlbum({token,albumToEdit,album}))
    }
 
    closeModal();

  }

  const closeModal = () => {
    dispatch(setMode(''));
    dispatch(setTarget(false));
  }

  useEffect( () => {
    console.log('formAlbum : ',formAlbum);
    console.log('filtreMode : ',filtreMode);
    if (formAlbum == '') {
      changeScore(0);
      if (filtreMode != false) {
        setTimeout( () => {
          if (filtreMode == 'CROI' ) { dispatch(trierScoreCROI())}
          if (filtreMode == 'DCROI' ) { dispatch(trierScoreDCROI())}
          if (filtreMode == 'AZ' ) { dispatch(trierAZ())}
          if (filtreMode == 'ZA' ) { dispatch(trierZA())}
        },100)
      }
    }
  }, [formAlbum])


useEffect( () => {
  console.log('filtreMode : ',filtreMode)
}, [filtreMode])



  return (
    <>

    {formSign != "" &&   <Modal cbFermer={() => dispatch(setAuthMode(""))} ><FormConnect /></Modal> } 
    

    <Dialog open={!(formAlbum == '')}>
      <DialogTitle>{ formAlbum == 'add' ? 'Ajouter un Album' : 'Editer un album' }</DialogTitle>
      <DialogContent>
        <TextField sx={{mt:'0.4rem'}} label="Nom" fullWidth inputRef={refnom} defaultValue={ alTget ? alTget.title : ''} />
        <TextField sx={{mt:'0.4rem'}} label="Artiste" fullWidth inputRef={refartist} defaultValue={ alTget ? alTget.artist : ''} />
        <TextField sx={{mt:'0.4rem'}} type='date' fullWidth inputRef={refdate} defaultValue={ alTget ? alTget.releaseDate : ''} />
        <TextField sx={{mt:'0.4rem'}} label="URL Jaquette" fullWidth inputRef={refurl} defaultValue={ alTget ? alTget.coverURL : ''} />
        <TextField sx={{mt:'0.4rem'}} label="Prix" type='number' fullWidth inputRef={refprix} defaultValue={ alTget ? alTget.price : ''} />
        <Box sx={{display: 'flex', mt: '0.5rem', ml: '0.5rem'}}>
          <DialogContentText mr={'0.5rem'}>Note</DialogContentText>
          <Rating name="score" precision={0.5} onChange={(event,newValue) => newscore(newValue)} value={score}/>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={closeModal}>Annuler</Button>
        <Button onClick={sendAlbum}>{ formAlbum == 'add' ? 'Ajouter' : 'Mettre à jour' }</Button>
      </DialogActions>
    </Dialog>



    <Container>
        <header>
      <AppBar position='static' sx={{p: '0.5em', backgroundColor: 'DarkViolet' }} >
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Typography  variant="h6" component="div" sx={{ flexGrow: 1, mx: '1em' }}>
              eAlbum
            </Typography>
            <MenuFiltre />
          </Box>

          <Box>
            { admin && <Button sx={{display: 'inline-block'}} variant="contained" color='info' type='button' onClick={() => dispatch(setMode("add")) }>Ajouter un album</Button>}
            <Button sx={{display: 'inline-block', ml: '0.5em'}} variant="contained" color={admin ? 'warning' : 'success'} type='button' onClick={onclickaction} >{admin ? "Déconnexion" : "S'identifier"}</Button>
          </Box>  

        </Box>
      </AppBar>
        </header>



    <Container sx={{py: 4, display: 'flex', justifyContent: "center", flexWrap: 'wrap', backgroundColor: 'MidnightBlue'}}>
      {Object.keys(albumArray).map( cle => <CardAlbum key={cle} album={albumArray[cle]} idAlbum={cle} admin={admin} callBack={(rating) => changeScore(rating)} /> )}
    </Container>

    </Container>
    </>
  )
}

export default App
