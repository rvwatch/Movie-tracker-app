import React from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';

export const CardContainer = props => {
  const renderCards = props.movies.map(movie => {
    return <Card key={movie.title} {...movie} />;
  });
  return <section>{renderCards}</section>;
};

export const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(CardContainer);
