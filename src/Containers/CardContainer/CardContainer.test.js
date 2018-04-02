import { CardContainer, mapStateToProps } from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';
import { createLocation } from 'history';

describe('CardContainer', () => {
  let mockMovies;
  beforeEach(() => {
    mockMovies = [
      {
        date: 'Release Date: 2017-12-09',
        image: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
        overview:
          "Summary: The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
        title: 'Jumanji: Welcome to the Jungle',
        vote: 'Rating: 6.5'
      }
    ];
  });
  it('should match the snapshot if on the home page', () => {
    const home = createLocation('/');
    const wrapper = shallow(
      <CardContainer location={home} movies={mockMovies} />
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
});

describe('mapStateToProps', () => {
  it('correctly maps movies to props', () => {
    const mockMovies = [
      {
        date: 'Release Date: 2017-12-09',
        image: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
        overview:
          "Summary: The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
        title: 'Jumanji: Welcome to the Jungle',
        vote: 'Rating: 6.5'
      }
    ];
    const expected = mockMovies;
    const mockState = { movies: mockMovies };
    const mapped = mapStateToProps(mockState);
    expect(mapped.movies).toEqual(expected);
  });
});
