import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBarPokemon from './components/NavBarPokemon';
import { Container,Box, Dialog } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { axiosGetPokemonByURL, resetZoo } from './slice/pokeSlice';
import PokeCardDumb from './components/PokeCardDumb';
import MuiSelectFiltre from './components/MuiFilter';
import PokeModal from './components/PokeModal';

import './index.css'

function App() {

  const dispatch = useDispatch()
  const pokeZoo = useSelector(state => state.pokemon.pokeZoo)
  const pokeDetail = useSelector(state => state.pokemon.pokedetail)

  const [filtre,setFiltre] = useState('');

  useEffect( () => {
   
    dispatch(resetZoo())

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=300')
    .then( reponse => {

      reponse.data.results.forEach( (poke,i) => {
        const requet = {
          ind: i+1,
          url: poke.url 
        }

      dispatch(axiosGetPokemonByURL(requet))

     });
       
    })
    .catch(error => {
        console.error('erreur : ', error)
    })

  },[])



  return (
    <>

      <Container maxWidth='xl' >
        <header>
          <NavBarPokemon />
        </header>
        

        { !pokeDetail ?
          <>
            <MuiSelectFiltre filtre={filtre} callback={(filtre) => setFiltre(filtre) } />
            
            <Box sx={{py: 4, display: 'flex', justifyContent: "center", flexWrap: 'wrap'}}>
                { pokeZoo.length == 0 ? <Container>Chargement</Container> : pokeZoo.map( (pokemon,i) => <PokeCardDumb key={i} pokemon={pokemon} filtre={filtre} /> ) }          
            </Box>
          </>
        :
          <PokeModal pokedetail={pokeDetail} />
        }

      </Container>
        
    </>
  )
}

export default App
