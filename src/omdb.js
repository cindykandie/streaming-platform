import axios from 'axios';

const OMDB_API_KEY = '630fd072';

export const searchMovies = (async (query) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
    const movies = response.data.Search;
    console.log(movies);
    return movies;
  } catch (error) {
    console.error(error);
  }
}, 500);


export const getMovie = (async (id) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`);
    const movie = response.data;
    return movie;
  } catch (error) {
    console.error(error);
  }
}, 500);
