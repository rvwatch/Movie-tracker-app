const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case "ADD_FAVORITE":
    return [...state.favorites, action.movie];
  case "REMOVE_FAVORITE":
    return state.favorites.filter(movie => movie.id !== action.id);
  default: 
    return state;
  }
};

export default favoritesReducer;
