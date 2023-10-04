import { useEffect, useState } from 'react'

import './App.css'
import FormChrono from './components/formChrono'
import Chronos from './components/chronos';
//import Chrono from './class/Chrono';

function App() {
  const [mesChronos, setMesChronos] = useState([]);
  const [compt,setCompt] = useState(0);
  //const [mesChronosNoms, setMesChronosNoms] = useState([]);

  const pushChrono = (chr) => {
  //  setMesChronosNom([...mesChronos, chr.nom]);
    let nom = chr.nom;
    let tps = chr.duree;
    console.log(nom,tps);
    setMesChronos([...mesChronos,chr])
  }
  
  // setMesChronos([...mesChronos, new Chrono(nom,tps)]);


  /* const timer = setInterval(() => {
  }, 100);
  */
 
// const chrono = () => {
   //setMesChronos(mesChronos.map( timer => timer - 100))
  //}
  
  //let temps  = setInterval(chrono,1000);

  useEffect( () => { console.dir(mesChronos) }, [mesChronos])
  
const monSlice = (ind) => {
  setMesChronos(mesChronos.filter( (chrono,i) => i != ind));
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
