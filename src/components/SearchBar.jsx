import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ setMovies }) => {
  const [title, setTitle] = useState('');
  const [apiKey, setApiKey] = useState("");

  // Get the API key from the environment variable when the component mounts
  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY
    //console.log("API Key:", key); 
    setApiKey(key);
  }, []); // Runs once on mount

  const handleSearch = async (e) => {
    e.preventDefault();

    if (title) {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`);
        setMovies(response.data.Search || []);  // Update the state in Home component
      } catch (error) {
        console.error("Error fetching movies:", error);
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
    </form>
  );
};

export default SearchBar;
