import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBarPokemon from './components/NavBarPokemon';
import { Container,Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { axiosGetPokemonByURL, axiosGetPopulation } from './slice/pokeSlice';
import PokeCard from './components/PokeCard';
import PokeCardDumb from './components/PokeCardDumb';

function App() {

  const dispatch = useDispatch()
  const population = useSelector(state => state.pokemon.pokeworld)
  const pokeZoo = useSelector(state => state.pokemon.pokeZoo)

  useEffect( () => {

    // dispatch(axiosGetPopulation());

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=3')
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

  useEffect( () => {
   // console.log('population Zoo :', pokeZoo.length)
    console.dir(pokeZoo[0])
    
  },[pokeZoo])


  return (
    <>
      <Container maxWidth='xl' >
        <header>
          <NavBarPokemon />
        </header>

        <Box sx={{py: 4, display: 'flex', justifyContent: "center", flexWrap: 'wrap', backgroundColor: 'bisque'}}>
          {/* { population.length == 0 ? <Container>Chargement</Container> : population.map( (pokemon,i) => <PokeCard key={i} pokemon={pokemon} ind={i} filtre={''} /> ) }           */}
          { pokeZoo.length == 0 ? <Container>Chargement</Container> : pokeZoo.map( (pokemon,i) => <PokeCardDumb key={i} pokemon={pokemon} /> ) }          
        </Box>

      </Container>
        
    </>
  )
}

export default App
