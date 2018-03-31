const postMoviesReducer = (state = [], action) => {
  switch (action.type) {
  case 'POST_MOVIES':
    return [...state, ...action.movies];
  default:
    return state;
  }
};

export default postMoviesReducer;
