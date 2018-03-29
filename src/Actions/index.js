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
