import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { searchMovies } from './omdb';
import AppRoutes from "./Routes";
import './App.css'


function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
      <div className="App">
        <AppRoutes />
        <SearchBar onSearch = {handleSearch} />
        <MovieList movies={movies} />
      </div>
  );
}

export default App;