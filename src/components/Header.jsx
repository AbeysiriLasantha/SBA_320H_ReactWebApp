import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='appTitle'> 
        <h1 className='movieMapTitle'> BoxOffice </h1> 
      </nav>

      <nav>
        <Link to="/" className="searchBtn">Search</Link>
        <Link to="/watchlist" className='addToListBtn'>Watchlist</Link>
      </nav>

    </header>

    
  );
};

export default Header;
