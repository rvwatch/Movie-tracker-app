import React from 'react';
import { NewUser } from './NewUser';
import { shallow } from 'enzyme';

describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NewUser />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    const mockEvent = { target: { value: 'ahhhhh', name: 'name' } };
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('name')).toEqual('ahhhhh');
  });

  it('should ', () => {});
});
