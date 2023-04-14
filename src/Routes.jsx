import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import FavoritesList from './components/FavoritesList';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/Header';

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/search/:query" element={<MovieList />} />
        <Route exact path="/movie/:id" element={<MovieDetails />} />
        <Route exact path="/favourites" element={<FavoritesList />} />
        <Route exact path="/contact" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;