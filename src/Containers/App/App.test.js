import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { getMovies } from '../../ApiCalls/getMovies';
import { cleanedMovie } from '../../ApiCalls/unit-test/mockData';
import * as actions from '../../Actions';
jest.mock('../../ApiCalls/getMovies');


describe('App', () => {

  let wrapper;
  let mockRetrieveMovies;

  beforeEach(() => {
    mockRetrieveMovies = jest.fn();
    wrapper = shallow(
      <App retrieveMovies={mockRetrieveMovies}/>, 
      {disableLifecycleMethods: true});
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should call getMovies on componentDidMount', () => {
  //   wrapper.instance().componentDidMount();
  //   expect(getMovies).toHaveBeenCalled();
  // });

  // it('should call retrieveMovies on componentDidMount', async () => {
  //   await wrapper.instance().componentDidMount();
  //   expect(mockRetrieveMovies).toHaveBeenCalled();
  // });
});

describe('mapDispatchToProps', () => {

  // it('should call dispatch with correct params', () => {
  //   const mockDispatch = jest.fn();
  //   const mockMovies = cleanedMovie;
  //   const expected = actions.postMovies(mockMovies);
  //   const mapped = mapDispatchToProps(mockDispatch);
  //   mapped.retrieveMovies(mockMovies);
  //   expect(mockDispatch).toHaveBeenCalledWith(expected);

  // });
});


