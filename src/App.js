import './styling/App.scss';
import React from 'react';
import NavBar from './components/navbar.jsx';
import History from './pages/history';
import Objectives from './pages/objectives';

import { Members } from './pages/members';
import { Awards } from './pages/awards';
import { Donations } from './pages/donations';
import { Education } from './pages/education/education';
import { Universities } from './pages/education/universities';
import { Routes, Route } from 'react-router-dom';

export const Home = () => {
  return(
    <div className="App" id = 'home'>
      <header className="App-header">
        <h1 className='web-title'>
          Kono Annual Presitigious Awards
        </h1>
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
          <Route path = '/members' element = {<Members/>}/>
          <Route path = '/awards night' element = {<Awards/>}/>
          <Route path = '/donations' element = {<Donations/>}/>
          <Route path = '/donations/education' element = {<Education/>}/>
          <Route path = '/donations/education/universities' element = {<Universities/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
