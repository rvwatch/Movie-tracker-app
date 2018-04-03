import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SingleMovie.css';

const SingleMovie = props => {
  const {
    title,
    overview,
    release_date,
    vote_average,
    poster_path
  } = props.movie;

  return (
    <article className="single-card">
      <h1>{title}</h1>
      <img
        className="movie-poster"
        alt='movie poster'
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
      <h3>{release_date}</h3>
      <p>{vote_average}</p>
      <p className="overview">{overview}</p>
      <Link className="close" to={`/${props.lastPath}`}>
        x
      </Link>
    </article>
  );
};

SingleMovie.propTypes = {
  movie: PropTypes.object,
  lastPath: PropTypes.string
};

export default SingleMovie;
