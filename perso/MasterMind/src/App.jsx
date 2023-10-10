import { Box, Container, Flex } from '@radix-ui/themes'
import { useState, useEffect } from 'react'
import { Level, ActivColor } from './contexts/level'
import Pions from './components/pions'
import Reglages from './components/reglages'
import Grille from './components/grille'

import styles from './components/css/app.module.css'
import './App.css'


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


  return (
    <>
<ActivColor.Provider value={[activColor, setActivColor]}>
    <Flex gap="9" justify="center" align="center" className='h-[100vh]'>
        <Flex width="100%" direction="column" justify="start" height="98%" ml="9" mt="3" style={{marginLeft: `${(9 - combinaison.length) * 38 + 30}px`}}>
          <Container className={styles.shadow}>
            <Grille nbLignes={level.nbEssais} combinaison={combinaison} />
          </Container>
          
        </Flex>
       
        <Flex className='w-[60%] mx-10 h-[100vh]' justify="between" direction="column" >
          <Box className={styles.shadow2}>
          <Box className=' mx-auto w-96 h-96 bg-slate-300 rounded-full relative' >
            <Pions colorCodes={colorCodes.slice(0,level.nbCouleurs)} />
          </Box>
          </Box>
        <Box className={styles.shadow3}>
          <Box className='mb-16 bg-slate-300 rounded-3xl px-9 py-4'>
<Level.Provider value={[level,setLevel]}>
  
            <Reglages />
</Level.Provider>
          </Box>
        </Box>
        </Flex>
      </Flex>
</ActivColor.Provider>
  

    </>
  )
}

export default App
