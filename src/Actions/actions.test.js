import * as Actions from './index';
import * as mock from '../ApiCalls/unit-test/mockData';

describe('postMovies', () => {
  it('creates a type of POST_MOVIES', () => {
    const movies = mock.cleanedMovie;
    const expected = {
      type: 'POST_MOVIES',
      movies
    };
    expect(Actions.postMovies(movies)).toEqual(expected);
  });
});

describe("addUser", () => {
  it("creates a type of ADD_USER", () => {
    const user = mock.mockUser;
    const expected = {
      type: "ADD_USER",
      user
    };
    expect(Actions.addUser(user)).toEqual(expected);
  });
});

describe("signInAction", () => {
  it("creates a type of SIGN_IN", () => {
    const user = mock.mockUser;
    const expected = {
      type: "SIGN_IN",
      user
    };
    expect(Actions.signInAction(user)).toEqual(expected);
  });
});

describe("validSignIn", () => {
  it("creates a type of VALID_SIGNIN", () => {
    const error = 'error';
    const expected = {
      type: "VALID_SIGNIN",
      error
    };
    expect(Actions.validSignIn(error)).toEqual(expected);
  });
});

describe("invalidSignIn", () => {
  it("creates a type of INVALID_SIGNIN", () => {
    const error = "error";
    const expected = {
      type: "INVALID_SIGNIN",
      error
    };
    expect(Actions.invalidSignIn(error)).toEqual(expected);
  });
});

describe("promptSignIn", () => {
  it("creates a type of PROMPT_SIGNIN", () => {
    const error = "error";
    const expected = {
      type: "PROMPT_SIGNIN",
      error
    };
    expect(Actions.promptSignIn(error)).toEqual(expected);
  });
});

describe("logoutUser", () => {
  it("creates a type of LOGOUT_USER", () => {
    const expected = {
      type: "LOGOUT_USER"
    };
    expect(Actions.logoutUser()).toEqual(expected);
  });
});

describe("addFavorite", () => {
  it("creates a type of ADD_FAVORITE", () => {
    const movie = mock.cleanedMovie;
    const expected = {
      type: "ADD_FAVORITE",
      movie
    };
    expect(Actions.addFavorite(movie)).toEqual(expected);
  });
});

describe("removeFavorite", () => {
  it("creates a type of REMOVE_FAVORITE", () => {
    const id = 5;
    const expected = {
      type: "REMOVE_FAVORITE",
      id
    };
    expect(Actions.removeFavorite(id)).toEqual(expected);
  });
});

describe("addExistingFavs", () => {
  it("creates a type of GET_FAVORITES", () => {
    const favorites = [{}];
    const expected = {
      type: "GET_FAVORITES",
      favorites
    };
    expect(Actions.addExistingFavs(favorites)).toEqual(expected);
  });
});
