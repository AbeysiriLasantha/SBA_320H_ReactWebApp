import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const Home = ({ addToWatchlist }) => {
  const [movies, setMovies] = useState([]); // I have created a local storage here with a empty arraylist. 

  return (
    <div>
      <SearchBar setMovies={setMovies} />
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} addToWatchlist={addToWatchlist} />
        ))}
      </div>
    </div>
  );
};

export default Home;
