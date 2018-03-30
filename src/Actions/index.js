export const postMovies = movies => ({
  type: 'POST_MOVIES',
  movies
});

export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const signInAction = user => ({
  type: 'SIGN_IN',
  user
});

export const validSignIn = error => ({
  type: 'VALID_SIGNIN',
  error
});

export const invalidSignIn = error => ({
  type: 'INVALID_SIGNIN',
  error
});

export const promptSignIn = error => ({
  type: 'PROMPT_SIGNIN',
  error
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});

export const addFavorite = (movie) => ({
  type: 'ADD_FAVORITE',
  movie
});

export const removeFavorite = (id) => ({
  type: 'REMOVE_FAVORITE',
  id
});

export const addExistingFavs = favorites => ({ 
  type: "GET_FAVORITES", 
  favorites 
});
