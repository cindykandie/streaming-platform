import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import FavoritesList from './components/FavoritesList';
import FeedbackForm from './components/FeedbackForm';

function Routes() {
    return (
      <Router>
        <Header />
        <Switch>
          <nav>
            <ul>
              <li>
                <Route exact path="/" component={SearchBar} />
              </li>
            
            <li>
              <Route exact path="/search/:query" component={MovieList} />
            </li>
            
            <li>
              <Route exact path="/movie/:id" component={MovieDetails} />
            </li>
            
            <li>
              <Route exact path="/favourites" component={FavoritesList} />
            </li>
            
            <li>
              <Route exact path="/contact" component={FeedbackForm} />
            </li>
            
            </ul>
          </nav>
        </Switch>
      </Router>
    );
  }
  export default Routes