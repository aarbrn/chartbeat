import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='navBarContainer'>
        <ul className='navBarList'>
          <li className='navigationLinks'><Link to="/homepage" style={{textDecoration:'none', color:'white'}}><p>Home</p></Link></li>
          <li className='navigationLinks'><Link to="/about" style={{textDecoration:'none', color:'white'}}><p>About</p></Link></li>
          <li className='navigationLinks'><Link to="/contact" style={{textDecoration:'none', color:'white'}}><p>Contact</p></Link></li>
          <li className='navigationLinks'><Link to="/games" style={{textDecoration:'none', color:'white'}}><p>Games</p></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;