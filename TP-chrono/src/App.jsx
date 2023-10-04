import { useState } from 'react'

import './App.css'
import FormChrono from '../components/formChrono'
import Chronos from '../components/chronos';

function App() {
  const [mesChronos, setMesChronos] = useState([]);
  const [mesChronosNoms, setMesChronosNoms] = useState([]);

  const pushChrono = (chr) => {
    setMesChronosNom([...mesChronos, chr.nom]);
    setMesChronos([...mesChronos, chr.duree]);
  }

  const timer = setInterval(() => {
    setMesChronos(mesChronos.map( timer => timer - 100))
  }, 100);




  return (
    <>
      <div className='container'>
        
        <FormChrono limite={mesChronos.length} newChrono={pushChrono} />

        <Chronos lstChronos={[[...mesChronosNoms],[...mesChronos]]} />

      </div>
    </>
  )
}

export default App
