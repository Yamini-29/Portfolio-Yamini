import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>

       
       <ul className='navmenu'>
          <li>Home</li>
          <li>AboutMe</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
       </ul>
       <div className='nav-connect'>Connect with Me</div>
    </div>
  );
};

export default Navbar;
