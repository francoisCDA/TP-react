import { useState, useEffect } from 'react'

import './App.css'
import { CtxFilm } from './components/contexts/ctxFilm'
import FormItem from './components/formItems';
//import { useEffect } from 'react';
import CardItem from './components/cardsItems'

function App() {

  const [videotek,setVideotek] = useState({}) ;

  
  
  return (
    <CtxFilm.Provider value={[videotek,setVideotek]}>
      <FormItem />
      
      { Object.keys(videotek).map( cle => <CardItem id={cle} key={cle} /> )}

    </CtxFilm.Provider>
  )
}

export default App
