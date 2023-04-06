import React, {useState} from "react";
import { Provider } from 'react-redux';

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
    <Provider>
      <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
    </Provider>
    
  );
}

export default App;
