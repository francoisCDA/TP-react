import { useState } from 'react'
import './App.css'
import MaTable from './components/maTable'
import MonForm from './components/monForm'
import FormUseRef from './components/formUseRef'

function App() {

  const [listing, setListing] = useState([])

  const addPerson = (data) => {
    setListing([...listing, data]);
  }
 
  const monLog = (dataLog) => {
    console.log(`username : ${dataLog[0]}, password: ${dataLog[1]}`);
  }


  return (
    <>
      <h1>Formualire UseRef</h1>

      <FormUseRef send={monLog} />      

      <h1>Formulaire callback</h1>

      <MaTable listing={listing} /> 

      <MonForm monPush={addPerson} />

    </>
  )
}

export default App
