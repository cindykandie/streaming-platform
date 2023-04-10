import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const currentState = useSelector((state)=> state);

  useEffect(()=>{
    console.log(currentState)
  }, [currentState])

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(searchTerm));
    console.log(searchTerm)
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

      <div>
        <h3>Search Results</h3>
        {currentState.movies?.movies && (
          <div className='movie-list'>
            {currentState.movies.movies.map((movie) => (
              <div className='movie-card' key= {movie.imdbID}>
                <img 
                src={movie.Poster}
                alt={`The movie titled: ${movie.Title}`} 
                />
                <div className='movie-card-body'>
                <h2 className='movie-card-title'>
                  ${movie.Title}
                </h2>
                <p >
                  <small className='movie-card-small'>
                    RELEASE YEAR: {movie.Year}
                  </small>
                </p>
                <p >
                  <small className='movie-card-small'>
                    IMDB ID: {movie.imdbID}
                  </small>
                </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;