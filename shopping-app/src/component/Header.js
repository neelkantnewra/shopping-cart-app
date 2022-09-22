import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className='Container'>
    <div className='Navbar'>
        <div className='title'>Shopping Cart</div>
        <div className='Search-bar'><input type="text" placeholder="Search..."></input></div>
    </div>
    
    </div>
    
  )
}

export default Header