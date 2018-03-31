import postMoviesReducer from './postMoviesReducer';
import { postMovies } from '../Actions';
import * as mock from '../ApiCalls/unit-test/mockData';

describe('postMoviesReducer', () => {
  it('should return default state', () => {
    const expected = [];
    expect(postMoviesReducer(undefined, {})).toEqual(expected);
  });
  
  it('should add movies to state', () => {
    const expected = mock.cleanedMovie;
    const movies = mock.cleanedMovie;
    expect(postMoviesReducer(undefined, postMovies(movies))).toEqual(expected);
  });
});
