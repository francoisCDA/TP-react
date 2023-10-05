import { useEffect, useState } from 'react'

import './App.css'
import FormChrono from './components/formChrono'
import Chronos from './components/chronos';


function App() {
  const [mesChronos, setMesChronos] = useState([]);
  const [compt,setCompt] = useState(0);


  const pushChrono = (chr) => {
    setMesChronos([...mesChronos,{...chr, id : compt}])
  }
  
  useEffect( () => { 
    console.dir(mesChronos) ;
    setCompt(prev => prev + 1) ;
  }, [mesChronos])
  
const monSlice = (ind) => {
  setMesChronos(mesChronos.filter( (chrono) => chrono.id != ind));
}


  return (
    <>
      <div className='container'>
        
        <FormChrono limite={mesChronos.length} newChrono={pushChrono} />

        <Chronos lstChronos={[...mesChronos]} rmCh={monSlice} />

      </div>
    </>
  )
}

export default App
