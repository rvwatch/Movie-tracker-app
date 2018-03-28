export const cleanMovies = movieData => {
  const cleanedMovies = movieData.map(movie => {
    const { title, overview, release_date, vote_average, poster_path } = movie;
    return {
      title,
      overview: `Summary: ${overview}`,
      date: `Release Date: ${release_date}`,
      vote: `Rating: ${vote_average}`,
      image: poster_path
    };
  });
  return cleanedMovies;
};
