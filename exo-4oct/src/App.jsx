import { useState } from 'react'
import './App.css'
import MaTable from './components/maTable'
import MonForm from './components/monForm'

function App() {

  const [listing, setListing] = useState([{
    first: "Jean",
    last: "MARTIN",
    naissance: '1962-06-27'
  }])

  const addPerson = (data) => {
    setListing([...listing, data]);
  }
 
  return (
    <>
      <h1>Formulaire callback</h1>

      <MaTable listing={listing} /> 

      <MonForm monPush={addPerson} />

    </>
  )
}

export default App
