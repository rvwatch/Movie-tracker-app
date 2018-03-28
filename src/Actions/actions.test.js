import * as Actions from './index';
import * as mock from '../ApiCalls/unit-test/mockData';

describe('postMovies', () => {
  it('creates a type of POST_MOVIES', () => {
    const movies = mock.cleanedMovie;
    const expected = {
      type: 'POST_MOVIES',
      movies
    };
    expect(Actions.postMovies(movies)).toEqual(expected);
  });
});

// describe('postMovies', () => {

// });
