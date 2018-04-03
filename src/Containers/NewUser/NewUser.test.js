import React from 'react';
import { NewUser, mapDispatchToProps } from "./NewUser";
import { shallow } from 'enzyme';
import { addNewUser } from "../../ApiCalls/addNewUser";
import * as Actions from "../../Actions";
import * as mock from "../../ApiCalls/unit-test/mockData";
jest.mock('../../ApiCalls/addNewUser.js');

describe('Login', () => {
  let wrapper;
  let mockpostNewUser;
  let mockvalidSignIn;
  let mockinvalidSignIn;
  beforeEach(() => {
    mockpostNewUser = jest.fn();
    mockvalidSignIn = jest.fn();
    mockinvalidSignIn = jest.fn();
    wrapper = shallow(
      <NewUser 
        postNewUser={mockpostNewUser}
        validSignIn={mockvalidSignIn}
        invalidSignIn={mockinvalidSignIn}
      />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    const mockEvent = { target: { value: 'ahhhhh', name: 'name' } };
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('name')).toEqual('ahhhhh');
  });

  it('should add a new user', async () => {
    await wrapper.instance().handleSubmit();
    expect(addNewUser).toHaveBeenCalled();
  });

  it('should postNewUser', async () => {
    await wrapper.instance().handleSubmit();
    expect(mockpostNewUser).toHaveBeenCalled();
  });

  it("should postNewUser", async () => {
    await wrapper.instance().handleSubmit();
    expect(mockvalidSignIn).toHaveBeenCalled();
  });

  it("should run invalidSignIn on error", async () => {
    mockpostNewUser = jest.fn().mockImplementation(() => {
      throw new Error("Error");
    });
    wrapper = shallow(
      <NewUser
        postNewUser={mockpostNewUser}
        invalidSignIn={mockinvalidSignIn} 
      />);
    await wrapper.instance().handleSubmit();
    expect(mockinvalidSignIn).toHaveBeenCalled();
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch with correct params on postNewUser", () => {
    const mockDispatch = jest.fn();
    const user = mock.mockUser;
    const expected = Actions.addUser(user);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.postNewUser(user);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it("should call dispatch with correct params on invalidSignIn", () => {
    const mockDispatch = jest.fn();
    const error = "error";
    const expected = Actions.invalidSignIn(error);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.invalidSignIn(error);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it("should call dispatch with correct params on validSignIn", () => {
    const mockDispatch = jest.fn();
    const valid = "true";
    const expected = Actions.validSignIn(valid);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.validSignIn(valid);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});


