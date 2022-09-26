import './App.css';
import React from 'react';
import teleport from './assets/teleport.png';
import Navbar from './components/Navbar';
//import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <div className='Home'>
        <Navbar />
        <div className='teleport-container'>
          <img src={teleport} alt="teleport"/>
        </div>
      </div>
      <Introduction />
    </div>
  );
}

export default App;
