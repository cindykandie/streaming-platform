import React, {useState} from "react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { searchMovies } from './omdb';
import './App.css'


// You need to define a reducer function for your store
function reducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        [action.payload.imdbID]: action.payload
      };
    default:
      return state;
  }
}

// You need to create a store using the reducer function
const store = configureStore({reducer});

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchMovies(searchTerm);
    setMovies(results);
    console.log('Set movies successfully!');
  };

  const handleAddMovie = (movie) => {
    // You need to dispatch an action to add a movie to your store
    store.dispatch({ type: 'ADD_MOVIE', payload: movie });
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MovieList movies={movies} handleAddMovie={handleAddMovie} />
      </div>
    </Provider>
  );
}

export default App;