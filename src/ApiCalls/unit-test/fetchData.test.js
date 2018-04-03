import { fetchData } from '../fetchData';
import * as mockData from './mockData';
describe('fetchData', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve(mockData.mockMovieData);
        })
    }));
  });

  it('should fetch movie data', async () => {
    const expected = mockData.mockMovieData.results;
    const returnedMovies = await fetchData();
    expect(returnedMovies).toEqual(expected);
  });

  it('throw an error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: 'error'
      })
    );
    const expected = Error('error');
    const results = fetchData();
    expect(results).rejects.toEqual(expected);
  });
});
