import './styling/App.scss';
import React from 'react';
import { useState } from 'react';
import NavBar from './components/navbar.jsx';
import { MobileNav }  from './components/mobile-nav';
import History from './pages/history';
import Objectives from './pages/objectives';

import { Members } from './pages/members';
import { Awards } from './pages/awards';
import { Donations } from './pages/donations/donations';
import { Education } from './pages/donations/education/education';
import { Medical } from './pages/donations/medical/medical';
import { Orphanages } from './pages/donations/orphanages';
import { Blinds } from './pages/donations/blinds';
import { Entertainments } from './pages/entertainments';
import { Soccer } from './pages/donations/soccer';
import { Chiefdoms } from './pages/donations/chiefdoms';

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
  const [isActive, setIsActive] = useState('');
  
  return (
    <div className='page'>
      <NavBar isActive = {isActive}/>
      <MobileNav handleClick = {() => setIsActive('is-active')}/>
      <>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/members' element = {<Members/>}/>
          <Route path = '/awards night' element = {<Awards/>}/>
          <Route path = '/donations' element = {<Donations/>}/>
          <Route path = '/donations/education' element = {<Education/>}/>
          <Route path = '/donations/medical' element = {<Medical/>}/>
          <Route path = '/donations/orphanages' element = {<Orphanages/>}/>
          <Route path = '/donations/the-blinds' element = {<Blinds/>}/>
          <Route path = '/donations/entertainments' element = {<Entertainments/>}/>
          <Route path = '/donations/soccer' element = {<Soccer/>}/>
          <Route path = '/donations/chiefdoms-villages' element = {<Chiefdoms/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
