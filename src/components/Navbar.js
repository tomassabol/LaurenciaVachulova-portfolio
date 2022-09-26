import './Navbar.css';
import navbarlogo from '../assets/logo.png';
//import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar () {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

    return (
      <div className='Navbar'>
        <img src={navbarlogo } alt="logo"/>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
    )
}

export default Navbar;