import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState ] = useState<string| undefined>(undefined)

  useEffect(() => {
    setInterval(async () => {

     
      try {
        const response  = await  fetch('http://localhost:4000/api');
        setState((await response.json()).time )
      } catch (error) {
        setState( "Server is Down!")
      }
     
    }, 
    100
    );
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current server time: {state}
        </p>
      </header>
    </div>
  );
}

export default App;
