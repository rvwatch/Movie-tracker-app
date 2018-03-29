import apiKey from './apiKey';

export const fetchData = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('error');
  }
};

