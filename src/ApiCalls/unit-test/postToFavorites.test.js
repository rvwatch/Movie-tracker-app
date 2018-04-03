import { postToFavorites } from '../postToFavorites';
import * as mock from './mockData';

describe('postToFavorites', () => {
  let movie;
  beforeEach(() => {
    movie = mock.movieInfo;
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve(1);
        })
    }));
  });

  it('should call fetch with the correct params', async () => {
    const url = `api/users/favorites/new`;

    const fetchObject = {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    await postToFavorites(movie);
    expect(window.fetch).toHaveBeenCalledWith(url, fetchObject);
  });

  it('should return a favId if the fetch is successful', async () => {
    const results = await postToFavorites(movie);
    const expected = 1;
    expect(results).toEqual(expected);
  });

  it('should throw an error if failed to fetch', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: 'error'
      })
    );
    const expected = Error('error');
    const results = postToFavorites(movie);
    expect(results).rejects.toEqual(expected);
  });
});
