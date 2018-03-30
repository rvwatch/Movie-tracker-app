const postToFavorites = async (movie) => {
  console.log(movie);
  const { movie_id, user_id, title, poster_path, release_date, vote_average, overview } = movie;
  try {
    const response = await fetch('api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify({movie_id, user_id, title, poster_path, release_date, vote_average, overview}),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    console.log(response);
    const favId = await response.json();
    return favId;
  } catch (errs) {
    throw new Error(errs.message);
  }
}

export { postToFavorites };



