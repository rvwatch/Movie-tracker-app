import { CardContainer, mapStateToProps } from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../ApiCalls/unit-test/mockData.js';
import { createLocation } from 'history';

describe('CardContainer', () => {
  let mockMovies;
  let mockFavs;
  beforeEach(() => {
    mockMovies = mock.cleanedMovie;
    mockFavs = mock.mockFavoritesArray;
  });
  it('should match the snapshot if on the home page', () => {
    const home = createLocation('/');
    const wrapper = shallow(
      <CardContainer location={home} movies={mockMovies} favorites={mockFavs}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if on Favorites Page', () => {
    const favorites = createLocation('/favorites');
    const wrapper = shallow(
      <CardContainer location={favorites} favorites={mockMovies} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot on /favorites/:id', () => {
    const favSingle = createLocation('/favorites/4');
    const wrapper = shallow(<CardContainer location={favSingle} movies={mockMovies} favorites={mockFavs}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot on /movies/:id', () => {
    const movieSingle = createLocation('/movies/3');
    const wrapper = shallow(<CardContainer location={movieSingle} movies={mockMovies} favorites={mockFavs}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('correctly maps movies to props', () => {
    const mockMovies = mock.cleanedMovie
    const expected = mockMovies;
    const mockState = { movies: mockMovies };
    const mapped = mapStateToProps(mockState);
    expect(mapped.movies).toEqual(expected);
  });

  it('correctly maps favorites to props', () => {
    const mockFavs = mock.mockFavoritesArray;
    const expected = mockFavs;
    const mockState = {favorites: mockFavs};
    const mapped = mapStateToProps(mockState);
    expect(mapped.favorites).toEqual(expected);
  });

  it('correctly maps user to props', () => {
    const mockUser = mock.mockUser;
    const expected = mockUser;
    const mockState = {user: mockUser};
    const mapped = mapStateToProps(mockState);
    expect(mapped.user).toEqual(expected);
  }); 
});
