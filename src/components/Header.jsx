import React from 'react';
// import logo1 from '../assets/logo1.gif'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='appTitle'> 
        <h1 className='movieMapTitle'> BoxOffice </h1> 
        {/* <img src={logo1} alt="Logo" className="app-logo" /> */}

      </nav>
      
      <nav className='navLinks'>
        <Link className = 'searchBtn' to="/">Search</Link>
        <Link className = 'addToListBtn' to="/watchlist">Watchlist</Link>
      </nav>
    </header>

  );
};

export default Header;
