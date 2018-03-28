import React from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';

const CardContainer = props => {
  const renderCards = props.movies.map(movie => {
    return <Card {...movie} />;
  });
  return <section>{renderCards}</section>;
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(CardContainer);
