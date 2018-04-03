import React from 'react';
import { Route, withRouter } from 'react-router-dom';
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
            movie => Number(match.params.id) === movie.movie_id
          );
          return <SingleMovie movie={movie} lastPath="" />;
        }}
      />
      <Route
        exact
        path="/"
        render={() => {
          return <div>{renderCards}</div>;
        }}
      />
      <Route
        exact
        path="/favorites"
        render={() => {
          return <div>{renderCards}</div>;
        }}
      />

      <Route
        exact
        path="/favorites/:id"
        render={({ match }) => {
          const movie = props.favorites.find(
            movie => Number(match.params.id) === movie.movie_id
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
  location: PropTypes.object,
  favorites: PropTypes.array,
  movies: PropTypes.array
};

export default withRouter(connect(mapStateToProps)(CardContainer));
