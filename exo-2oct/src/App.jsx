import logo from './logo.svg';
import './App.css';
import Alert from './components/alert';
import MonTableau from './components/MonTableau';
import BtnAjout from './components/btnAjout';


function App() {

  let tablePersonne = [{
    prenom: "Robert",
    nom: "Martin",
    age: 65
  },{
    prenom: "Justine",
    nom: "William",
    age: 72
  },{
    prenom: "Robert",
    nom: "Georges",
    age: 59
  },{
    prenom: "Jean",
    nom: "Leclerc",
    age: 75
  },{
    prenom: "Bob",
    nom: "Albert",
    age: 61
  },{
    prenom: "John",
    nom: "Martin",
    age: 63
  },]

  return (
    <>

      <BtnAjout/>


      <MonTableau table={tablePersonne}/>

      <MonTableau />

      <Alert innerTxt = "Salut Banque !" couleur = 'blue' icone="bank"/>
      <Alert innerTxt = "Bonjour Calculatrice !" couleur = 'red' icone="calc"/>
      <Alert innerTxt = "Ciao Avion !" couleur= 'green' icone="avion" />

    </>
      
  );
}

export default App;
