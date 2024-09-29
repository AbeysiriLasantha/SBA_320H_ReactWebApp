import React from 'react';

const MovieCard = ({ movie, addToWatchlist }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => addToWatchlist(movie)}>
        Add to Watchlist
      </button>
    </div>
  );
};

export default MovieCard;
