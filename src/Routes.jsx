import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import FavoritesList from './components/FavoritesList';
import FeedbackForm from './components/FeedbackForm';
import NavBar from './components/NavBar';

function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/search/:query" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favourites" element={<FavoritesList />} />
        <Route path="/contact" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;