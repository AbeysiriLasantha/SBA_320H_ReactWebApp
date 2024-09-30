import React from 'react';

const SearchOption = ({ searchType, setSearchType }) => {
  return (
    <div className="search-options">

      <label>
        <input
          type="radio"
          value=""
          checked={searchType === ""}
          onChange={() => setSearchType("")}
        />
        All
      </label>

      <label>
        <input
          type="radio"
          value="movie"
          checked={searchType === "movie"}
          onChange={() => setSearchType("movie")}
        />
        Movie
      </label>

      <label>
        <input
          type="radio"
          value="series"
          checked={searchType === "series"}
          onChange={() => setSearchType("series")}
        />
        Series
      </label>

      <label>
        <input
          type="radio"
          value="episode"
          checked={searchType === "episode"}
          onChange={() => setSearchType("episode")}
        />
        Episode
      </label>
      
    </div>
  );
};

export default SearchOption;
