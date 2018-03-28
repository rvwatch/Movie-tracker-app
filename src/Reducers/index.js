import { combineReducers } from 'redux';
import movies from './postMoviesReducer';

const rootReducer = combineReducers({
  movies
});

export default rootReducer;
