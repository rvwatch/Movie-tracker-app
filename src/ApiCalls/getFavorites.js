export const getFavorites = async (id) => {
  try {
    const response = await fetch(`api/users/${id}/favorites`);
    const favoriteMovies = response.json();
    console.log("iddddd", favoriteMovies);
    return favoriteMovies;
  } catch (error) {
    throw new Error(error.message);
  }
};
