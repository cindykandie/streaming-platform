import React from 'react';

const MovieListItem = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Released: {movie.releaseDate}</p>
      <img src={movie.poster} alt={`Poster for ${movie.title}`} />
    </div>
  );
};

export default MovieListItem;
