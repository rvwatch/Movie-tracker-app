import { combineReducers } from 'redux';
import movies from './postMoviesReducer';
import user from './usersReducer';
import error from './errorReducer';
import favorite from './favoritesReducer';

const rootReducer = combineReducers({
  movies,
  user,
  error,
  favorite
});

export default rootReducer;
