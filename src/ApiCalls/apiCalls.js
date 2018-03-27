import apiKey from './apiKey';

export const fetchApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
  );
  const data = await response.json();
  console.log(data);
};
