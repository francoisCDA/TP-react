import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  useEffect( () => {
    axios.get("http://localhost:5000/personne")
    .then(reponse => {
      console.dir(reponse);
    })
    .catch(error => {
      console.error(error);
    })
  }, [])

  const addPerson = () => {
    axios.post("http://localhost:5000/personne",{nom: "Alan", prenom: "Moore", age: 85})
    .then(reponse => {
      console.dir(reponse.data) // donner à récupérer localement pour pouvoir travialler avec le id
    })
    .catch(error => {
      console.error(error)
    })
  }

  const supprPerson = () => {
    axios.delete("http://localhost:5000/personne/4")
    .then(reponse => {
      console.dir(reponse.data)
    })
    .catch(error => {
      console.error(error)
    })
  }

  const updPerson = () => {
    axios.put("http://localhost:5000/personne/3",{nom: "Jobs", prenom: "Steeve", age: 66})
    .then(reponse => {
      console.dir(reponse.data) // donner à récupérer localement pour pouvoir travialler avec le id
    })
    .catch(error => {
      console.error(error)
    })
  }


  return (
    <>
        <button onClick={addPerson}>Add Person</button>
        <button onClick={updPerson}>Update Person</button>
        <button onClick={supprPerson}>Suppr Person</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
