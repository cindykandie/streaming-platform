import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;
