import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { searchMovies } from './omdb';
import AppRoutes from "./Routes";
import './App.css'


function App() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setSearchResults(results);
    setShowSearchResults(true);
  };

  return (
    <div className="App">
      <AppRoutes />
      <SearchBar onSearch={handleSearch} />
      {showSearchResults ? (
        <MovieList movies={searchResults} />
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default App;