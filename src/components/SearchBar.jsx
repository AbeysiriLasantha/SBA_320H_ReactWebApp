// SearchBar.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchOption from './SearchOption';

const SearchBar = ({ setMovies }) => {
  const [title, setTitle] = useState('');
  const [searchType, setSearchType] = useState(''); // Add state for filtering options
  const [apiKey, setApiKey] = useState('');

  // Get the API key from the environment variable when the component mounts
  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    setApiKey(key);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (title) {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${title}&type=${searchType}&apikey=${apiKey}`
        );
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
      <div>
      <SearchOption searchType={searchType} setSearchType={setSearchType} />
      </div>
      
    </form>
  );
};

export default SearchBar;
