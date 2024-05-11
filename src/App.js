import logo from './logo.svg';
import './App.css';
import React from 'react';
import PrimerComponente from './tiposcomponentes';


let nombre = "juan";
function App() {
  return (
   <>
   <PrimerComponente/>
   <h1>2 + 2 = {2+2} </h1>
    <p>Nombre: {nombre} </p>
   </>
  );
}

export default App;
