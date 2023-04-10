import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
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
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/search/:query" component={MovieList} />
        <Route exact path="/movie/:id" component={MovieDetails} />
        <Route exact path="/favourites" component={FavoritesList} />
        <Route exact path="/contact" component={FeedbackForm} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;