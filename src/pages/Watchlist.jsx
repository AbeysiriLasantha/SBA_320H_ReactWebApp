import React from 'react';

const Watchlist = ({ watchlist, removeFromWatchlist }) => {
  return (
    <div>
      <h2>My Watchlist</h2>
      <div className="movie-grid">
        {watchlist.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button onClick={() => removeFromWatchlist(movie.imdbID)}>
              Remove from Watchlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
