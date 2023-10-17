import { useSelector } from 'react-redux'
import './App.css'
import SignForm from './components/SignForm'
import TaskForm from './components/task/Taskform'

function App() {
  const user = useSelector(state => state.auth.user)

  return (
    <>
      {
        user ?
          <TaskForm user={user}/> 
          :
          <SignForm />
        }

    </>
  )
}

export default App
