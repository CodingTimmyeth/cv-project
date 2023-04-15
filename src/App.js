import './App.css';
import React from 'react';
import Header from './components/Header';
import Peronsal from './components/Personal';
import Work from './components/Work';
import Education from './components/Education';
import Submit from './components/Submit';

function App() {

  return (
    <div>
      <Header/>
      <Peronsal/>
      <Work/>
      <Education/>
      <Submit />
    </div>
  );
}

export default App;
