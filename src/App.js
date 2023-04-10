import './styling/App.scss';
import React from 'react';
import NavBar from './components/navbar.jsx';
import History from './components/history';
import Objectives from './components/objectives';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <p className='web-title'>
          Kono Annual Presitigious Awards
        </p>
      </header>
      <History/>
      <Objectives/>
    </div>
  );
}

export default App;
