export const cleanMovies = movieData => {
  const cleanedMovies = movieData.map(movie => {
    const {
      title,
      overview,
      release_date,
      vote_average,
      poster_path,
      popularity
    } = movie;
    return {
      title,
      movie_id: Math.floor(Math.random() * 100000),
      overview: `Summary: ${overview}`,
      release_date: `Release Date: ${release_date}`,
      vote_average: `Rating: ${vote_average}`,
      poster_path: poster_path
    };
  });
  return cleanedMovies;
};
