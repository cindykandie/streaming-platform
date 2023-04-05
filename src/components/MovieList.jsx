import React from 'react';
import MovieListItem from './MovieListItem';

function MovieList(props) {
  return (
    <div>
      {props.movies.map((movie) => (
        <MovieListItem
          key={movie.imdbID}
          movie={movie}
          onAddToFavorites={props.onAddToFavorites}
          onRemoveFromFavorites={props.onRemoveFromFavorites}
          isFavorite={props.favorites.includes(movie.imdbID)}
        />
      ))}
    </div>
  );
}

export default MovieList;
