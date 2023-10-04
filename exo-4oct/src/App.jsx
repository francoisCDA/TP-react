import { useState } from 'react'
import './App.css'
import MaTable from './components/maTable'
import MonForm from './components/monForm'
import FormUseRef from './components/formUseRef'

function App() {

  const [listing, setListing] = useState([])
  const [id, setId] = useState('')

  const addPerson = (data) => {
    setListing([...listing, data]);
  }
 
  const monLog = (dataLog) => {
    console.log(`username : ${dataLog[0]}, password: ${dataLog[1]}`);
    setId(<span>Bienvenu <strong>{dataLog[0]}</strong>, votre mot de passe secret est bien <strong>${dataLog[1]}</strong></span>)
  }


  return (
    <>
      <h1>Formulaire UseRef</h1>
      
      { id ? id : <FormUseRef send={monLog}  /> }       

      <h1>Formulaire callback</h1>

      <MaTable listing={listing} /> 

      <MonForm monPush={addPerson} />

    </>
  )
}

export default App
