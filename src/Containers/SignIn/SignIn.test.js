import React from 'react';
import { SignIn } from './SignIn';
import { shallow } from 'enzyme';
import { signinUser } from '../../ApiCalls/signinUser';
import { getFavorites } from '../../ApiCalls/getFavorites';
jest.mock('../../ApiCalls/signinUser.js');
jest.mock('../../ApiCalls/getFavorites.js');

describe('Login', () => {
  let wrapper;
  let mockSignInDispatch;
  let mockValidSignIn;
  let mockInvalidSignIn;
  let mockAddExistingFavs;
  beforeEach(() => {
    mockSignInDispatch = jest.fn();
    mockValidSignIn = jest.fn();
    mockInvalidSignIn = jest.fn();
    mockAddExistingFavs = jest.fn();
    wrapper = shallow(
      <SignIn
        signInDispatch={mockSignInDispatch}
        validSignIn={mockValidSignIn}
        invalidSignIn={mockInvalidSignIn}
        addExistingFavs={mockAddExistingFavs}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    const mockEvent = { target: { value: 'ahhhhh', name: 'name' } };
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('name')).toEqual('ahhhhh');
  });

  it('should sign in a user', async () => {
    await wrapper.instance().handleSubmit();
    expect(signinUser).toHaveBeenCalled();
  });

  it('should call signInDispatch', async () => {
    await wrapper.instance().handleSubmit();
    expect(mockSignInDispatch).toHaveBeenCalled();
  });

  it('should call validSignIn', async () => {
    await wrapper.instance().handleSubmit();
    expect(mockValidSignIn).toHaveBeenCalled();
  });

  it('should run getFavorites fetch', async () => {
    await wrapper.instance().handleSubmit();
    await expect(getFavorites).toHaveBeenCalled();
  });

  it('should call addExistingFavs', async () => {
    await wrapper.instance().handleSubmit();
    expect(mockAddExistingFavs).toHaveBeenCalled();
  });

  it('should run invalidSignIn on error', async () => {
    mockSignInDispatch = jest.fn().mockImplementation(() => {
      throw new Error('Error');
    });
    wrapper = shallow(
      <SignIn
        signInDispatch={mockSignInDispatch}
        invalidSignIn={mockInvalidSignIn}
      />
    );
    await wrapper.instance().handleSubmit();
    expect(mockInvalidSignIn).toHaveBeenCalled();
  });
});
