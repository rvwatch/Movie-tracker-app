import { combineReducers } from 'redux';
import movies from './postMoviesReducer';
import user from './usersReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  movies,
  user,
  error
});

export default rootReducer;
