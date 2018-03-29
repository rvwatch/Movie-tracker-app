import React from 'react';
import { SignIn } from './SignIn';
import { shallow } from 'enzyme';
import { signinUser } from '../../ApiCalls/signinUser';

describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    const mockEvent = { target: { value: 'ahhhhh', name: 'name' } };
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('name')).toEqual('ahhhhh');
  });

  it('should sign in a user', () => {
    const mockUser = { target: { email: 'a@a.com', password: 'pass' } };
    wrapper.instance().signinUser(mockUser);
  });
});
