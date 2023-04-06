import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // import useNavigate hook
import { fetchMovies } from '../redux/moviesSlice';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // use useNavigate hook to get navigate function

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(searchTerm));
    navigate(`/search/${searchTerm}`); // use navigate to navigate
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;