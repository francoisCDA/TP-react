import { useState, useEffect } from 'react'
import { CtxToDoList } from './contexts/ctxtodolist'
import FormList from './components/FormList'
import CpntTache from './components/CpntTache';


function App() {
  const [toDoList, setToDoList] = useState([]);

  useEffect( () => {
    console.dir(toDoList);
  }, [toDoList] )

  return (
    <>
  <CtxToDoList.Provider value={[toDoList, setToDoList]}>
        <FormList />
        {toDoList && toDoList.map( task => <CpntTache key={task.id} idTask={task.id} /> )}
  </CtxToDoList.Provider>
    </>
  )
}

export default App
