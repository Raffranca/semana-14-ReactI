import Titulo from './componetes/Titulo';
import Mapedados from './componetes/Mapedados';
import React, {Componet} from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Titulo className= "mainha"> Oi, Mainha!!!</Titulo>
      <Titulo className="title">Meu Primeiro Projeto React do Zero</Titulo>
      
      <Mapedados/>
    </div>
  );
  
}

export default App;
