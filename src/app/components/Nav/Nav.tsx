import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

interface NavProps {

}

const Nav: React.FC<NavProps> = () => {
  return (
    <div className='nav'>
      <Link to="/" className='nav-logo'>lazarbrnovic.ts 🦠</Link>
      <div className='nav-right'>
        <Link className="nav-link" to="/shopping-list">Namjernice</Link>
        <Link className="nav-link margin-left" to="/films">Filmovi</Link>
      </div>
    </div>
  );
};

export default Nav;