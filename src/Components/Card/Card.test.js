import { Card, mapDispatchToProps, mapStateToProps } from './Card';
import * as mock from '../../ApiCalls/unit-test/mockData';
import React from 'react';
import { shallow } from 'enzyme';
import * as Actions from '../../Actions';
import { postToFavorites } from '../../ApiCalls/postToFavorites';
import { deleteFromFavorites } from '../../ApiCalls/deleteFromFavorites';
jest.mock('../../ApiCalls/postToFavorites');
jest.mock('../../ApiCalls/deleteFromFavorites');

describe('Card', () => {
  let wrapper;
  let mockMovie;
  let toggleFavorite;
  let user;
  let favorites;
  let addFavorite;
  let promptSignin;
  let removeFavorite;
  let mockFav;
  beforeEach(() => {
    promptSignin = jest.fn();
    removeFavorite = jest.fn();
    user = mock.mockUser;
    addFavorite = jest.fn();
    mockFav = mock.mockRemainingFavorite;
    favorites = mock.mockFavoritesArray;
    toggleFavorite = jest.fn();
    mockMovie = mock.movieInfo;
    wrapper = shallow(
      <Card
        addFavorite={addFavorite}
        favorites={favorites}
        movie={mockMovie}
        user={user}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('toggleFavorite', () => {
    beforeEach(() => {
      wrapper.find('button').simulate('click');
    });
    it('should call postToFavorites', () => {
      const expected = { ...mockMovie, user_id: user.id };
      expect(postToFavorites).toHaveBeenCalledWith(expected);
    });

    it('should call addFavorite', () => {
      const expected = mockMovie;
      expect(addFavorite).toHaveBeenCalledWith(expected);
    });

    it('should call promptSignin if no user is present', () => {
      wrapper = shallow(
        <Card
          addFavorite={addFavorite}
          favorites={favorites}
          movie={mockMovie}
          promptSignin={promptSignin}
          user={{}}
        />
      );
      const expected = 'Please Sign In to Add Favorites';
      wrapper.find('button').simulate('click');

      expect(promptSignin).toHaveBeenCalledWith(expected);
    });

    it('should call removeFavorite', () => {
      wrapper = shallow(
        <Card
          addFavorite={addFavorite}
          favorites={favorites}
          movie={mockFav}
          removeFavorite={removeFavorite}
          promptSignin={promptSignin}
          user={user}
        />
      );
      const expected = mockFav.movie_id;
      wrapper.find('button').simulate('click');
      expect(removeFavorite).toHaveBeenCalledWith(expected);
    });

    it('should call deleteFromFavorites', () => {
      wrapper = shallow(
        <Card
          addFavorite={addFavorite}
          favorites={favorites}
          movie={mockFav}
          removeFavorite={removeFavorite}
          promptSignin={promptSignin}
          user={user}
        />
      );
      const expected = mockFav.movie_id;
      wrapper.find('button').simulate('click');
      expect(deleteFromFavorites).toHaveBeenCalledWith(expected, user.id);
    });
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

  it('correctly maps favorites to props ', () => {
    const favorites = mock.mockFavoritesArray;
    const expected = favorites;
    const mockState = { favorites };
    const mapped = mapStateToProps(mockState);
    expect(mapped.favorites).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with correct params on addFavorite', () => {
    const mockDispatch = jest.fn();
    const movie = mock.cleanedMovie;
    const expected = Actions.addFavorite(movie);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addFavorite(movie);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params on removeFavorite', () => {
    const mockDispatch = jest.fn();
    const id = 2;
    const expected = Actions.removeFavorite(id);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.removeFavorite(id);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with correct params on promptSignIn', () => {
    const mockDispatch = jest.fn();
    const error = 'error';
    const expected = Actions.promptSignIn(error);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.promptSignin(error);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
