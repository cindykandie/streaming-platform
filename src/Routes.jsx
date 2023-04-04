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
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/search/:query" component={MovieList} />
          <Route exact path="/movie/:id" component={MovieDetails} />
          <Route exact path="/favourites" component={FavoritesList} />
          <Route exact path="/contact" component={FeedbackForm} />
        </Switch>
      </Router>
    );
  }
  export default Routes