import { Box, Flex } from '@radix-ui/themes'
import { useState, useEffect } from 'react'
import { Level, ActivColor } from './contexts/level'
import Pions from './components/pions'
import Reglages from './components/reglages'
import Grille from './components/grille'


//import './App.css'

function App() {

const [level,setLevel] = useState({
    nbEssais: 7,
    lgSequence: 5,
    nbCouleurs: 6
})

const [activColor, setActivColor] = useState('rgba(0, 0, 0, 0)')

const colorCodes = [
  '#FF0000',  // Rouge
  '#FFFF00',  // Jaune
  '#008000',  // Vert
  '#0000FF',  // Bleu
  '#FFA500',  // Orange
  '#800000',  // Marron

  '#800080',  // Violet
  '#FFC0CB',  // Rose
  '#00FFFF',  // Cyan
  '#008080',  // Teal
  '#FFFFFF',  // Blanc
  '#000000'   // Noir
];


const random = (nb) => {
  return colorCodes[Math.floor(Math.random()*nb)]
}

const newCombinaison = () => {
  const newComb = [];
  while (newComb.length < level.lgSequence) {newComb.push(random(level.nbCouleurs)) }
  return newComb;
}

const [combinaison,setCombinaison] = useState(newCombinaison());

useEffect( () => {
  setCombinaison(newCombinaison()); 
  setActivColor('rgba(0, 0, 0, 0)');
}, [level]);

//useEffect( () => { console.dir(combinaison); } , [combinaison]);



  return (
    <>
<ActivColor.Provider value={[activColor, setActivColor]}>
    <Flex gap="9" justify="center" align="center" className='h-[100vh] bg-slate-300'>
        <Flex width="100%" direction="column" justify="start" height="98%" ml="9" mt="3">
          <Grille nbLignes={level.nbEssais} combinaison={combinaison} />
        </Flex>
       
        <Flex className='w-[60%] mx-10 h-[100vh]' justify="between" direction="column" >
          <Box className=' mt-44 mx-auto w-96 h-96 bg-slate-400 relative'>
            <Pions colorCodes={colorCodes.slice(0,level.nbCouleurs)} />
          </Box>
          <Box className='mb-16 bg-slate-400'>
<Level.Provider value={[level,setLevel]}>
            <Reglages />
</Level.Provider>
          </Box>
        </Flex>
      </Flex>
</ActivColor.Provider>
  

    </>
  )
}

export default App
