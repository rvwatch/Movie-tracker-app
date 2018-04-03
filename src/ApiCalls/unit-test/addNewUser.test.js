import { addNewUser } from '../addNewUser';
import * as mock from './mockData';

describe('addNewUser', () => {
  let user;
  beforeEach(() => {
    user = { name: 'a', email: 'a@a.a', password: 'a' };
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve({ ...user, id: 1 });
        })
    }));
  });

  it('should fetch with the correct params', async () => {
    const url = `/api/users/new`;

    const fetchObject = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    await addNewUser(user);
    expect(window.fetch).toHaveBeenCalledWith(url, fetchObject);
  });

  it('should return a user id on successful post', async () => {
    const expected = 1;
    const result = await addNewUser(user);
    expect(result).toEqual(expected);
  });

  it('should return a message if the email already exists', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: 'error'
      })
    );
    const expected = Error(
      `${user.email} already exists. Please enter a new email`
    );
    const result = addNewUser(user);
    expect(result).rejects.toEqual(expected);
  });

  it('should throw an error if a new user cannot be created', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve({ error: 'error' });
        })
    }));
    const expected = Error(
      `${user.email} already exists. Please enter a new email`
    );
    const result = addNewUser(user);
    expect(result).rejects.toEqual(expected);
  });
});
