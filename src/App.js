import React, { useState, useEffect } from 'react';

export default function App() {
  
  const [hora, setHora] = useState(19);
  const [minuto, setMinuto] = useState(55);
  const [segundo,setSegundo] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
      const interval = setInterval(( )=>{
        setSegundo(segundo+1);
        if(segundo === 59){
          setSegundo(0);
          setMinuto(minuto+1);
          if(minuto === 60){
            setMinuto(0);
            setHora(hora+1);
          }
        }
      }, 1000);
      return() => clearInterval(interval);
    });
 

  return (
    <div>
      <h2 style={{textAlign:'center'}}>{hora}: {minuto}: {segundo}</h2>
    </div>
  );
}