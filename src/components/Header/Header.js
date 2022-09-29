import { faCoffee, faClockFour } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='headerStyle'>
      <h1><FontAwesomeIcon icon={faClockFour}></FontAwesomeIcon> Activity in <span>Lockdown time</span></h1>
    </div >
  );
};

export default Header;