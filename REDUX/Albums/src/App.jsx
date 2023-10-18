
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { disconnect, setAuthMode } from './auth/authSlice';

import Modal from './modal/Modal';
import FormConnect from './components/FormConnect';


function App() {

  const dispatch = useDispatch();

  const formulaire = useSelector(state => state.auth.authMode);

  const token = localStorage.getItem("eAlbum_token");

  return (
    <>

    {formulaire == "" && <Modal cbFermer={ () => dispatch(setAuthMode(""))} ><FormConnect /></Modal>  }

   

     <header><button type="button" onClick={() => dispatch( token ?  disconnect() : dispatch(setAuthMode("signIn")) )   } >{token ? "Déconnexion" : "S'identifier"}</button></header>


     <div>
      <h2>liste d'album</h2>
     </div>
    </>
  )
}

export default App
