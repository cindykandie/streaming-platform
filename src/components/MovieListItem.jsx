import React from 'react';

function MovieListItem(props) {
  console.log(props.movie)
  const { Title, Year, Poster, imdbID } = props.movie;
  const handleAddToFavorites = () => {
    props.onAddToFavorites(imdbID);
  };

  const handleRemoveFromFavorites = () => {
    props.onRemoveFromFavorites(imdbID);
  };

  return (
    <div className="movie-item">
      <img src={Poster} alt={`${Title} poster`} />
      <div>
        <h3>{Title}</h3>
        <p>{Year}</p>
        {props.isFavorite ? (
          <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
        ) : (
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        )}
      </div>
    </div>
  );
}

export default MovieListItem;