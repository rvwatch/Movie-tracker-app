const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case "ADD_FAVORITE":
    return [...state, action.movie];
  case "REMOVE_FAVORITE":
    return state.filter(movie => movie.movie_id !== action.id);
  default: 
    return state;
  }
};

export default favoritesReducer;
