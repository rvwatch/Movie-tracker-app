import { addNewUser } from '../addNewUser';
import * as mock from './mockData';

describe('addNewUser', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve();
        })
    }));
  });

  it('should add a new user to the database', async () => {
    window.fetch = jest.fn().mockImplementation;
    await addNewUser(mock.mockUser);
  });

  it('should return a message if the email already exists', () => {

  });

  it('should throw an error if a new user cannot be created', () => {

  });

});
