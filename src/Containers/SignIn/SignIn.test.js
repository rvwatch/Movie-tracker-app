import React from 'react';
import { SignIn } from './SignIn';
import { shallow } from 'enzyme';

describe('Login', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<SignIn />)
    expect(wrapper).toMatchSnapshot()
  });
})