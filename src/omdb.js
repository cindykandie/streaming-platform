import axios from 'axios';

const OMDB_API_KEY = '630fd072';

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
    const movies = response.data.Search;
    console.log(movies);
    return movies;
  } catch (error) {
    console.error(error);
  }
};