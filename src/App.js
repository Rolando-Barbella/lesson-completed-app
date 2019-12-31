import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons';

function App() {
  const [title] = useState('Mi aplicacion React');
  const [showTitle, setShowTile] = useState(true); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="Title">
          {showTitle &&
            title
          }
        </h3>
        <Button
         type="primary"
         onClick={() => setShowTile(!showTitle)}
        >
          {showTitle? 'Ocultar' : 'Mostrar'}
        </Button>
      </header>
    </div>
  );
}

export default App;
