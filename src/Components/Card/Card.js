import React from "react";
import { connect } from "react-redux";
import { postToFavorites } from "../../ApiCalls/postToFavorites";
import * as Actions from "../../Actions/";
import { deleteFromFavorites } from "../../ApiCalls/deleteFromFavorites";
import "./Card.css";

const Card = ({
  movie,
  user,
  favorites,
  promptSignin,
  addFavorite,
  removeFavorite
}) => {
  const { title, overview, release_date, vote_average, poster_path } = movie;

  const toggleFavorite = async movie => {
    if (!user.name) {
      const error = "Please Sign In to Add Favorites";
      promptSignin(error);
    } else if (!favorites.find(fav => fav.movie_id === movie.movie_id)) {
      await postToFavorites({ ...movie, user_id: user.id });
      addFavorite( movie );
    } else {
      removeFavorite(movie.movie_id);
      deleteFromFavorites(movie.movie_id, user.id); 
    }
  };

  return (
    <article
      className="card"
      style={{
        background: `url('https://image.tmdb.org/t/p/w500/${poster_path}')`
      }}
    >
      <h1>{title}</h1>
      <h3>{release_date}</h3>
      <p>{vote_average}</p>
      <p>{overview}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
