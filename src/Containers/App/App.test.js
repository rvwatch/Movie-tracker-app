import React from 'react';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import { getMovies } from '../../ApiCalls/getMovies';
import { getFavorites } from '../../ApiCalls/getFavorites';
import * as mock from '../../ApiCalls/unit-test/mockData';
import * as actions from '../../Actions';
import { createBrowserHistory } from 'history';
jest.mock('../../ApiCalls/getMovies');
jest.mock('../../ApiCalls/getFavorites');

describe('App', () => {
  let wrapper;
  let retrieveMovies;
  let signIn;
  let logout;
  let history;
  let favorites;
  let addFavorites;
  let user;
  beforeEach(() => {
    signIn = jest.fn();
    logout = jest.fn();
    user = mock.mockUser;
    addFavorites = jest.fn();
    favorites = mock.mockFavoritesArray;
    history = createBrowserHistory('/');
    retrieveMovies = jest.fn();
    wrapper = shallow(
      <App
        user={user}
        favorites={favorites}
        logout={logout}
        signIn={signIn}
        history={history}
        addFavorites={addFavorites}
        retrieveMovies={retrieveMovies}
      />,
      {
        disableLifecycleMethods: false
      }
    );
    localStorage.setItem('lastUser', JSON.stringify('Ricardo'));
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getMovies on componentDidMount', async () => {
    expect(getMovies).toHaveBeenCalled();
  });

  it('should call retrieveMovies after getMovies', async () => {
    expect(retrieveMovies).toHaveBeenCalled();
  });

  it('should call getLastUser', async () => {
    const spy = jest.spyOn(wrapper.instance(), 'getLastUser');
    expect(spy).toHaveBeenCalled();
  });

  it('should call signIn', async () => {
    expect(signIn).toHaveBeenCalled();
  });

  it('should call getFavorites', () => {
    expect(getFavorites).toHaveBeenCalled();
  });

  it('should call props.addFavorites', () => {
    expect(addFavorites).toHaveBeenCalled();
  });

  it('should call saveUser', () => {
    const spy = jest.spyOn(wrapper.instance(), 'saveUser');
    expect(spy).toHaveBeenCalled();
  });

  it('should getLast user from localStorage', () => {
    const expected = 'Ricardo';
    const results = wrapper.instance().getLastUser();
    expect(results).toEqual(expected);
  });

  it('should saveUser to localStorage', () => {
    wrapper.instance().saveUser(user);
    const results = wrapper.instance().getLastUser();
    expect(results).toEqual(user);
  });

  it('should logout a user', () => {
    const expected = {};
    const results = wrapper.instance().getLastUser();
    expect(results).toEqual('Ricardo');
    wrapper.instance().handleLogout();
    expect(localStorage).toEqual(expected);
  });
});

describe('mapStateToProps', () => {
  it('correctly maps users to props ', () => {
    const user = mock.mockUser;
    const expected = user;
    const mockState = { user };
    const mapped = mapStateToProps(mockState);
    expect(mapped.user).toEqual(expected);
  });

  it('correctly maps error to props ', () => {
    const error = 'error';
    const expected = error;
    const mockState = { error };
    const mapped = mapStateToProps(mockState);
    expect(mapped.error).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  // it('should call dispatch with correct params', () => {
  //   const mockDispatch = jest.fn();
  //   const mockMovies = cleanedMovie;
  //   const expected = actions.postMovies(mockMovies);
  //   const mapped = mapDispatchToProps(mockDispatch);
  //   mapped.retrieveMovies(mockMovies);
  //   expect(mockDispatch).toHaveBeenCalledWith(expected);
  // });
});
