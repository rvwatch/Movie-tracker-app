import { combineReducers } from 'redux';
import movies from './postMoviesReducer';
import user from './usersReducer';
import error from './errorReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  movies,
  user,
  error,
  favorites
});

export default rootReducer;
