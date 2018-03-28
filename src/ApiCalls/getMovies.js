import { cleanMovies } from './cleanMovies';
import { fetchData } from './fetchData';

export const getMovies = async () => {
  const movieData = await fetchData();
  const cleanedMovies = cleanMovies(movieData);
  return cleanedMovies;
};
