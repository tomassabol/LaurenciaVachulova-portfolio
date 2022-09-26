import './App.css';
import React from 'react';
import teleport from './assets/teleport.png';
import Navbar from './components/Navbar';
//import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className='teleport'>
        <img src={teleport} alt="teleport"/>
      </div>
    </div>
  );
}

export default Home;
