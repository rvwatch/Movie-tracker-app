import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { postToFavorites } from "../../ApiCalls/postToFavorites";
import * as Actions from "../../Actions/";
import { deleteFromFavorites } from "../../ApiCalls/deleteFromFavorites";

export const SingleMovie = (props) => {
  const { title, overview, release_date, vote_average, poster_path } = props.movie;

  const toggleFavorite = async (movie) => {
    if (!props.user.name) {
      const error = "Please Sign In to Add Favorites";
      props.promptSignin(error);
    } else if (!props.favorites.find(fav => fav.movie_id === movie.movie_id)) {
      await postToFavorites({ ...movie, user_id: props.user.id });
      props.addFavorite( movie );
    } else {
      props.removeFavorite(movie.movie_id);
      deleteFromFavorites(movie.movie_id, props.user.id); 
    }
  };

  return (
      <article className="single-card">
        <h1>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
        <h3>{release_date}</h3>
        <p>{vote_average}</p>
        <p>{overview}</p>
        <Link to={`/${props.lastPath}`}>
          <button>Back</button>
        </Link>
      </article>
  )
}

export const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(Actions.addFavorite(movie)),
  removeFavorite: id => dispatch(Actions.removeFavorite(id)),
  promptSignin: error => dispatch(Actions.promptSignIn(error))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleMovie));