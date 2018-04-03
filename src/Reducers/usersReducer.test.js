import usersReducer from './usersReducer';
import * as Actions from '../Actions';
import * as mock from '../ApiCalls/unit-test/mockData';

describe('usersReducer', () => {
  it('should return default state', () => {
    const expected = {};
    expect(usersReducer(undefined, {})).toEqual(expected);
  });

  it('should add user to state', () => {
    const expected = mock.mockUser;
    const user = mock.mockUser;
    expect(usersReducer(undefined, Actions.addUser(user))).toEqual(expected);
  });

  it('should sign in a user', () => {
    const user = mock.mockUser;
    const { id, name, email } = user;
    const expected = { id, name, email };

    expect(usersReducer(undefined, Actions.signInAction(user))).toEqual(
      expected
    );
  });

  it('should logout a user', () => {
    const user = mock.mockUser;
    const expected = {};
    expect(usersReducer(user, Actions.logoutUser(user))).toEqual(expected);
  });
});
