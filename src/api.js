const OMDB_API_KEY = '630fd072';

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`);
  const data = await response.json();

  if (data.Error) {
    throw new Error(data.Error);
  }

  return data;
};
