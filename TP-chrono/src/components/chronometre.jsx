import React, { useState, useEffect } from 'react';

const Chronometre = ({temps, rm, ind}) => {
  const [seconds, setSeconds] = useState(temps);

  
  useEffect(() => {
     const decompte = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
  
    return () => clearInterval(decompte);
  }, []);  


  useEffect(() => {
    if (seconds<= 0) { rm(ind) };
  }, [seconds])

  return (
    <>
      <span>Il reste : {seconds} secondes</span>
    </>
  );
};

export default Chronometre;
