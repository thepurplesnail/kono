import './styling/App.scss';
import React from 'react';
import NavBar from './pages/navbar.jsx';
import History from './pages/history';
import Objectives from './pages/objectives';

function App() {
  return (
    <div className="App" id = 'home'>
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
