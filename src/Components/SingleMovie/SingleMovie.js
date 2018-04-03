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
      <h1 className='single-card-title'>{title}</h1>
      <div className='poster-container'>
        <img
          className="movie-poster"
          alt='movie poster'
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        />
        <div className='single-card-info'>
          <p className="overview">{overview}</p>
          <h3 className='single-card-date'>{release_date}</h3>
          <p className='single-card-vote'>{vote_average}</p>
        </div>
      </div>
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
