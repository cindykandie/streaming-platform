import React from 'react';
import { useSelector } from 'react-redux';
import MovieListItem from './MovieListItem';

const FavouritesList = () => {
  const favourites = useSelector(state => state.favourites);

  return (
    <div>
      <h2>Favourites List</h2>
      {favourites.map((movie) => (
        <MovieListItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default FavouritesList;