import React from 'react';
import { NewUser } from './NewUser';
import { shallow } from 'enzyme';

describe('Login', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<NewUser />)
    expect(wrapper).toMatchSnapshot()
  });
})