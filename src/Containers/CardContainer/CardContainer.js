import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import PropTypes from 'prop-types';
import SingleMovie from '../../Components/SingleMovie/SingleMovie';

export const CardContainer = props => {
  const movieType =
    props.location.pathname === '/favorites' ? 'favorites' : 'movies';

  const renderCards = props[movieType].map(movie => {
    const cardClass = props.favorites.find(fav => fav.title === movie.title)
      ? 'selected'
      : '';

    return (
      <Card
        cardClass={cardClass}
        key={movie.title}
        movie={movie}
        movieType={movieType}
      />
    );
  });
  return (
    <section>
      <Route
        exact
        path="/movies/:id"
        render={({ match }) => {
          const movie = props.movies.find(
            movie => parseInt(match.params.id) === movie.movie_id
          );
          return <SingleMovie movie={movie} lastPath="" />;
        }}
      />
      <Route
        path="/"
        render={({ match }) => {
          return <div>{renderCards}</div>;
        }}
      />
      <Route
        exact
        path="/favorites"
        render={({ match }) => {
          return <div>{renderCards}</div>;
        }}
      />

      <Route
        exact
        path="/favorites/:id"
        render={({ match }) => {
          const movie = props.favorites.find(
            movie => parseInt(match.params.id) === movie.movie_id
          );
          return <SingleMovie movie={movie} lastPath="favorites" />;
        }}
      />
    </section>
  );
};

export const mapStateToProps = state => ({
  movies: state.movies,
  favorites: state.favorites,
  user: state.user
});

CardContainer.propTypes = {
  location: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(CardContainer));
