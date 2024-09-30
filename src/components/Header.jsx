import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='appTitle'> 
        <h1> MovieMap </h1> 
        <h3> Mapping out Your Movie-Watching Journey! </h3>
      </nav>

      <nav>
        <Link to="/">Search</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>

    </header>

    
  );
};

export default Header;
