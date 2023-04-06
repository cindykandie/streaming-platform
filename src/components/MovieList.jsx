import React from 'react';
import MovieListItem from './MovieListItem';
import '../App.css'

function MovieList(props) {
  console.log(`Props: {}` ); // log when the MovieList component is being rendered
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
