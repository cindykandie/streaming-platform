import axios from 'axios';
import debounce from 'lodash.debounce';

const OMDB_API_KEY = '630fd072';

export const searchMovies = debounce(async (query) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
    const movies = response.data.Search;
    console.log(movies);
    return movies;
  } catch (error) {
    console.error(error);
  }
}, 500);


export const getMovie = debounce(async (id) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`);
    const movie = response.data;
    return movie;
  } catch (error) {
    console.error(error);
  }
}, 500);
