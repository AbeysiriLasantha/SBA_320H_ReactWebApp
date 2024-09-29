import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Search</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>
    </header>
  );
};

export default Header;
