import { cleanMovies } from './cleanMovies';
import { fetchData } from './fetchData';

export const getMovies = async () => {
  try {
  const movieData = await fetchData();
  console.log(movieData);
  // const cleanedMovies = cleanMovies(movieData);
  // return cleanedMovies
  } catch (error) {
    console.log('this sucks')
    throw new Error('error')
  }
}


 
