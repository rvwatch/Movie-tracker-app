import Card from './Card';
import React from 'react';
import { shallow } from 'enzyme';

describe('Card', () => {

  it('should match the snapshot', () => {
    const mockMovie = {
      date: 'Release Date: 2017-12-09',
      image: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
      overview:
        "Summary: The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
      title: 'Jumanji: Welcome to the Jungle',
      vote: 'Rating: 6.5'
    };
    const wrapper = shallow(<Card {...mockMovie}/>);
    expect(wrapper).toMatchSnapshot();
  });
});