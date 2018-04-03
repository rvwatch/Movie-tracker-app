import React from 'react';
import { connect } from 'react-redux';
import { postToFavorites } from '../../ApiCalls/postToFavorites';
import * as Actions from '../../Actions/';
import { Link } from 'react-router-dom';
import { deleteFromFavorites } from '../../ApiCalls/deleteFromFavorites';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({
  movie,
  user,
  favorites,
  promptSignin,
  addFavorite,
  removeFavorite,
  movieType,
  cardClass
}) => {
  const { 
    title, 
    overview, 
    release_date, 
    vote_average, 
    poster_path 
  } = movie;

  const toggleFavorite = async movie => {
    if (!user.name) {
      const error = 'Please Sign In to Add Favorites';
      promptSignin(error);
    } else if (!favorites.find(fav => fav.movie_id === movie.movie_id)) {
      await postToFavorites({ ...movie, user_id: user.id });
      addFavorite(movie);
    } else {
      removeFavorite(movie.movie_id);
      deleteFromFavorites(movie.movie_id, user.id);
    }
  };

  return (
    <article
      className={`card ${cardClass}`}
      style={{
        background: `url('https://image.tmdb.org/t/p/w500/${poster_path}')`
      }}
    >
      <h1>{title}</h1>
      <Link to={`/${movieType}/${movie.movie_id}`}>Show More</Link>
      <button onClick={() => toggleFavorite(movie)}>Favorite</button>
    </article>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(Actions.addFavorite(movie)),
  removeFavorite: id => dispatch(Actions.removeFavorite(id)),
  promptSignin: error => dispatch(Actions.promptSignIn(error))
});

Card.propTypes = {
  movie: PropTypes.object,
  user: PropTypes.object,
  favorites: PropTypes.array,
  promptSignin: PropTypes.func,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
