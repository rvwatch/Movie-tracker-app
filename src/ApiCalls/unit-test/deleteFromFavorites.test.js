import deleteFromFavorites from '../deleteFromFavorites';
import * as mock from "./mockData";

describe('deleteFromFavorites', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve();
        })
    }));
  });

  it('should call fetch with the correct params', () => {

  });

  it('should delete a movie when passed the movie and user id', async () => {

  });

  it('should throw an error if a new user cannot be created', () => {

  });
});