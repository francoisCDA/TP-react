import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { disconnect, setAuthMode } from './auth/authSlice';

import Modal from './modal/Modal';
import FormConnect from './components/FormConnect';

import { Button } from '@mui/material';

function App() {

  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const formulaire = useSelector(state => state.auth.authMode);

  const token = () => {
     const tok = localStorage.getItem("eAlbum_token");
     if (tok) {
      return token
     } else {
      return false
     }
  }

  const onclickaction = () => {
    if (token()) {
        dispatch(disconnect())
  } else {
        dispatch(setAuthMode("signIn"))
  }
}

  return (
    <>

    {formulaire != "" && <Modal cbFermer={ () => dispatch(setAuthMode(""))} ><FormConnect /></Modal>  }

   

     <header>
     <Button variant="contained" type='button' onClick={onclickaction}>{user ? "Déconnexion" : "S'identifier"}</Button>
     
      </header>


     <div>
      <h2>liste d'album</h2>
     </div>
    </>
  )
}

export default App
