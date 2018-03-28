import React from 'react';
import './Card.css';

const Card = ({ title, overview, date, vote, image }) => {
  return (
    <article
      className="card"
      style={{ background: `url('https://image.tmdb.org/t/p/w500/${image}')` }}
    >
      <h1>{title}</h1>
      <h3>{date}</h3>
      <p>{vote}</p>
      <p>{overview}</p>
    </article>
  );
};

export default Card;
