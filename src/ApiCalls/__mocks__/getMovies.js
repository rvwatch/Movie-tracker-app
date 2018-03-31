import { cleanedMovie } from '../unit-test/mockData';

export const getMovies = jest.fn().mockImplementation(() => {
  return Promise.resolve({cleanedMovie});
});