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
  // it('should add a new user to the database', async () => {
  //   window.fetch = jest.fn().mockImplementation;
  //   await addNewUser(mock.user);
  // });
});
