import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [watchlist, setWatchlist] = useState([]);  

  const addToWatchlist = (movie) => {
    setWatchlist((prevList) => [...prevList, movie]);
  };

  const removeFromWatchlist = (imdbID) => {
    setWatchlist((prevList) => prevList.filter(movie => movie.imdbID !== imdbID));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home addToWatchlist={addToWatchlist} />} />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />} />
      </Routes>
    </Router>
  );
};

export default App;
