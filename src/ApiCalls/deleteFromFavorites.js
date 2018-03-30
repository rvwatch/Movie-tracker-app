export const deleteFromFavorites = async (movieid, userid) => {
  try {
    await fetch(`api/users/${userid}/favorites/${movieid}`, {
      method: 'DELETE'
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
