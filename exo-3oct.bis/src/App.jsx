import logo from './logo.svg';
import './App.css';
import MonFormulaire from './component/monForm';
import FizzBuzz from './component/FizzBuzz';
import ExoUseEffect from './component/exoUseEffect';

function App() {
  return (
    <>

    <ExoUseEffect atrouver='60' />
    <hr />
    <FizzBuzz max='1000' />
    <hr />
    <MonFormulaire />
    
    </>
  );
}

export default App;
