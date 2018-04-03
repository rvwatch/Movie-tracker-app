import React from 'react';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import { getMovies } from '../../ApiCalls/getMovies';
import { getFavorites } from '../../ApiCalls/getFavorites';
import * as mock from '../../ApiCalls/unit-test/mockData';
import * as Actions from '../../Actions';
import { createBrowserHistory, createLocation } from 'history';
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
    localStorage.setItem('lastUser', JSON.stringify('r'));
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
    const getLastUserSpy = jest.spyOn(wrapper.instance(), 'getLastUser');
    await wrapper.instance().componentDidMount();
    expect(getLastUserSpy).toHaveBeenCalled();
  });

  it('should call signIn', async () => {
    const expected = user.name;
    expect(signIn).toHaveBeenCalledWith(expected);
  });

  it('should call getFavorites', () => {
    expect(getFavorites).toHaveBeenCalled();
  });

  it('should call props.addFavorites', () => {
    expect(addFavorites).toHaveBeenCalled();
  });

  it('should call saveUser', async () => {
    const spy = jest.spyOn(wrapper.instance(), 'saveUser');
    await wrapper.instance().componentDidUpdate();
    expect(spy).toHaveBeenCalled();
  });

  it('should getLast user from localStorage', () => {
    const expected = user.name;
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
    expect(results).toEqual(user.name);
    wrapper.instance().handleLogout();
    expect(localStorage).toEqual(expected);
  });

  it('should render correctly on url set to home /', () => {
    const location = createLocation('/');
    wrapper = shallow(
      <App
        user={user}
        favorites={favorites}
        logout={logout}
        signIn={signIn}
        history={history}
        addFavorites={addFavorites}
        retrieveMovies={retrieveMovies}
        location={location}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly on url set to /favorites', () => {
    const location = createLocation('/favorites');
    wrapper = shallow(
      <App
        user={user}
        favorites={favorites}
        logout={logout}
        signIn={signIn}
        history={history}
        addFavorites={addFavorites}
        retrieveMovies={retrieveMovies}
        location={location}
      />
    );
    expect(wrapper).toMatchSnapshot();
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
  it('should call dispatch with correct params in retrieveMovies', () => {
    const mockDispatch = jest.fn();
    const movie = mock.cleanedMovie;
    const expected = Actions.postMovies(movie);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.retrieveMovies(movie);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call logout', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logout();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call dispatch with correct params on signIn', () => {
    const mockDispatch = jest.fn();
    const user = mock.mockUser;
    const expected = Actions.signInAction(user);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.signIn(user);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params on addFavorites', () => {
    const mockDispatch = jest.fn();
    const favorites = mock.mockFavoritesArray;
    const expected = Actions.addExistingFavs(favorites);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addFavorites(favorites);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
