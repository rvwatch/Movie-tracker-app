import favoritesReducer from './favoritesReducer';
import { addFavorite, removeFavorite, addExistingFavs } from '../Actions';
import * as mock from '../ApiCalls/unit-test/mockData';

describe('favoritesReducer', () => {
  it('should return default state', () => {
    const expected = [];
    expect(favoritesReducer(undefined, {})).toEqual(expected);
  });

  it('should add favorites to state', () => {
    const movie = mock.mockFavorite;
    const expected = [mock.mockFavorite];
    expect(favoritesReducer(undefined, addFavorite(movie))).toEqual(expected);
  });

  it('should remove favorites from state', () => {
    const movie = mock.mockFavorite;
    const expected = [];
    expect(favoritesReducer(undefined, removeFavorite(movie))).toEqual(
      expected
    );
  });

  it('should get favorites from state', () => {
    const favorites = mock.mockFavoritesArray;
    const expected = mock.mockFavoritesArray;
    expect(favoritesReducer(undefined, addExistingFavs(favorites))).toEqual(
      expected
    );
  });
});
