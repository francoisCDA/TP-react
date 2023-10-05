import React, { useState, useEffect } from 'react';
import dring from '../assets/mp3/BELLDoor.mp3'


const Chronometre = ({temps, rm, ind}) => {
  const [seconds, setSeconds] = useState(temps);

  const sonnerie= new Audio(dring);
  
  useEffect(() => {
     const decompte = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
    
    return () => {
      clearInterval(decompte);
      // decompte = undefined;
    }
  }, []);  
  
  
  useEffect(() => {
   
    if (seconds<= 0) { 
      sonnerie.play();
      rm(ind) };
  }, [seconds])

  return (
    <>
      <span>Il reste : {seconds} secondes</span>
      <progress value={temps-seconds} max={temps} ></progress>
    </>
  );
};

export default Chronometre;
