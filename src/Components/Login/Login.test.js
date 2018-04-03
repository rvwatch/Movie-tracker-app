import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';
import { createLocation } from 'history';

describe('Login', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot at /new-user', () => {
    const location = createLocation('/new-user');
    const wrapper = shallow(<Login location={location}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot at /signIn', () => {
    const location = createLocation('/signIn');
    const wrapper = shallow(<Login location={location}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
