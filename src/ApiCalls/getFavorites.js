export const getFavorites = async id => {
  try {
    const response = await fetch(`api/users/${id}/favorites`);
    const favoriteMovies = await response.json();
    return favoriteMovies;
  } catch (error) {
    throw new Error(error.message);
  }
};
