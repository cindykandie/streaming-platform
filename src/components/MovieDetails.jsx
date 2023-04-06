import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(data => setMovie(data));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{movie.Title}</h3>
      <p>Plot: {movie.Plot}</p>
      <p>Cast: {movie.Actors}</p>
      <p>Rating: {movie.imdbRating}/10</p>
    </div>
  );
}

export default MovieDetails;
