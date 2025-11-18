import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'></div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/settings'>Settings</Link>
            <Link to='/progress'>Progress</Link>
            <Link to='/profile'>Profile</Link>
        </div>
      
    </div>
  )
}

export default Navbar
