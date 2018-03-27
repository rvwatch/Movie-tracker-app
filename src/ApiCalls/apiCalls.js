import apiKey from './apiKey';

export const fetchData = async () => {
  try {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
  );
  const data = await response.json();
  return data.results
  } catch (error) {
    throw 'error'
  }
} 

export const getMovies = async () => {
  const movieData = await fetchData();
  console.log(movieData);
  // const cleanedMovies = cleanMovies(movieData);
  // return cleanedMovies
}

export const cleanMovies = (movieData) => {
  const cleanedMovies = movieData.map(movie => {

  })
}
 
