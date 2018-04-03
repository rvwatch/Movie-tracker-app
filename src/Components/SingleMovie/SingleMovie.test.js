import React from 'react';
import { shallow } from 'enzyme';
import SingleMovie from './SingleMovie';
import * as mock from '../../ApiCalls/unit-test/mockData.js';

describe('SingleMovie', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SingleMovie movie={mock.movieInfo}/>);
    expect(wrapper).toMatchSnapshot();
  });
});