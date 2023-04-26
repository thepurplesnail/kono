import './styling/App.scss';
import React from 'react';
import NavBar from './pages/navbar.jsx';
import History from './pages/history';
import Objectives from './pages/objectives';

import { Members } from './pages/members';
import { Awards } from './pages/awards';
import { Donations } from './pages/donations';

import { Routes, Route } from 'react-router-dom';

export const Home = () => {
  return(
    <div className="App" id = 'home'>
      <header className="App-header">
        <p className='web-title'>
          Kono Annual Presitigious Awards
        </p>
      </header>
      <History/>
      <Objectives/>
    </div>
  )
}

function App() {
  
  return (
    <div className='page'>
      <NavBar/>
      <>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/Members' element = {<Members/>}/>
          <Route path = '/Awards Night' element = {<Awards/>}/>
          <Route path = '/Donations' element = {<Donations/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
