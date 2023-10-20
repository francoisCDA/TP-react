import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBarPokemon from './components/NavBarPokemon';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosGetPopulation } from './slice/pokeSlice';
import PokeCard from './components/PokeCard';

function App() {

  const dispatch = useDispatch()
  const population = useSelector(state => state.pokemon.pokeworld)

  useEffect( () => {

    dispatch(axiosGetPopulation());

  },[])

  useEffect( () => {
    console.log('population :', population.length)
    console.dir(population)
    
  },[population])


  return (
    <>
      <Container>
        <header>
          <NavBarPokemon />
        </header>

        <Container sx={{py: 4, display: 'flex', justifyContent: "center", flexWrap: 'wrap', backgroundColor: 'bisque'}}>
          { population.length == 0 ? <Container>Chargement</Container> : population.map( (pokemon,i) => <PokeCard key={i} pokemon={pokemon} filtre={''} /> ) }          
        </Container>

      </Container>
        
    </>
  )
}

export default App
