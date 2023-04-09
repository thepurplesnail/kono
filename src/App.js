import './styling/App.css';
import React from 'react';
import NavBar from './components/navbar.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <p className='title'>
          Kono Annual Presitigious Awards
        </p>
        
      </header>
      <div>
        HELLO WORLD
      </div>
    </div>
  );
}

export default App;
