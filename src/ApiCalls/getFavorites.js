export const getFavorites = async id => {
  console.log('welcome to getFavs');

  try {
    console.log('TRY in to getFavs');
    const response = await fetch(`api/users/${id}/favorites`);
    const favoriteMovies = await response.json();
    return favoriteMovies;
  } catch (error) {
    console.log('CATCH to getFavs');
    throw new Error(error.message);
  }
};
