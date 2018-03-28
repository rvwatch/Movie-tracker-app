import { cleanMovies } from '../cleanMovies';
import * as mock from './mockData';

describe('cleanMovies', () => {
  it('should return an array of cleaned movie objects', () => {
    const cleaned = cleanMovies(mock.mockMovieData.results);
    const expected = mock.cleanedMovie;
    expect(cleaned).toEqual(expected);
  });
});
