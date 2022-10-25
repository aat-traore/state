import React, { useState,useEffect} from "react";
import Person from "./person";

const App = () => {
  const [ show , setShow] = useState()
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds +1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return( 
    <>
    
      {
         show ? <Person /> : null
      }
      
    <button onClick={() => {setShow(true) }}  style={{borderRadius:30,textAlign:"center"}}> <h1 >Afficher</h1>  </button>
    <button onClick={() => {setShow(false) }}  style={{borderRadius:30,textAlign:"center"}}> <h1 >Masquer</h1> </button>
    {seconds}


 
      
    </>
    
  )
  
};

export default App;
