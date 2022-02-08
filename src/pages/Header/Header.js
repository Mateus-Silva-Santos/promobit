import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">TMDB</Link>
        <div className='logo-bar'></div>
      </nav>
    </header>
  );
}

export default Header;