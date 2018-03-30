import React from 'react';
import { connect } from "react-redux";
import * as Actions from '../../Actions/';
import './Card.css';

const Card = ({movie, user}) => {
  const {title, overview, date, vote, image} = movie;

  // const toggleFavorite = movie => {
  //   const favMovie = {...movie, id: user.id};
  //   if (!user) {
      
  //   }
  // };

  return (
    <article
      className="card"
      style={{ background: `url('https://image.tmdb.org/t/p/w500/${image}')` }}
    >
      <h1>{title}</h1>
      <h3>{date}</h3>
      <p>{vote}</p>
      <p>{overview}</p>
      <button onClick={() => toggleFavorite(movie)}>Favorite</button>
    </article>
  );
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(Actions.addFavorite(movie)),
  removeFavorite: id => dispatch(Actions.removeFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
