import { combineReducers } from 'redux';
import movies from './postMoviesReducer';
import user from './usersReducer';

const rootReducer = combineReducers({
  movies,
  user
});

export default rootReducer;
