import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='appTitle'> 
        <h1 className='movieMapTitle'> MovieMap </h1> 
      </nav>

      <nav>
        <Link to="/" className="button">Search</Link>
        <Link to="/watchlist" className="button">Watchlist</Link>
      </nav>

    </header>

    
  );
};

export default Header;
