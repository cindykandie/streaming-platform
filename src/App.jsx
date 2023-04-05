import React, {useState} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { searchMovies } from './omdb';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };
  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
