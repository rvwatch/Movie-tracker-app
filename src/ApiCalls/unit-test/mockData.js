export const mockMovieData = {
  results: [
    {
      original_language: 'en',
      original_title: 'Jumanji: Welcome to the Jungle',
      overview:
        "The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
      popularity: 101.350698,
      poster_path: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
      release_date: '2017-12-09',
      title: 'Jumanji: Welcome to the Jungle',
      video: false,
      vote_average: 6.5,
      vote_count: 3115
    }
  ]
};

export const cleanedMovie = [
  {
    date: 'Release Date: 2017-12-09',
    id: 101.350698,
    image: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
    overview:
      "Summary: The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
    title: 'Jumanji: Welcome to the Jungle',
    vote: 'Rating: 6.5'
  }
];

export const movieInfo = {
  movie_id: '1',
  user_id: '24',
  title: 'hello',
  poster_path: '/hello',
  release_date: '04-01-18',
  vote_average: '-5',
  overview: 'Its not real'
};

export const mockUser = {
  id: '5',
  name: 'r',
  email: 'r@r.r',
  password: 'r'
};

export const mockFavorite = {
  date: 'Release Date: 2017-12-09',
  movie_id: 101.350698,
  image: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
  overview:
    "Summary: The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
  title: 'Jumanji: Welcome to the Jungle',
  vote: 'Rating: 6.5'
};

export const mockRemainingFavorite = {
  date: 'Release Date: 2018-10-5',
  movie_id: 10,
  image: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
  overview: 'Summary: The tables are turned as four teenagers.',
  title: 'Fantastic Fours',
  vote: 'Rating: 2.5'
};

export const mockFavoritesArray = [
  {
    date: 'Release Date: 2018-10-5',
    movie_id: 10,
    image: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
    overview: 'Summary: The tables are turned as four teenagers.',
    title: 'Fantastic Fours',
    vote: 'Rating: 2.5'
  },
  {
    date: 'Release Date: 2017-12-09',
    movie_id: 101.350698,
    image: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
    overview:
      "Summary: The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
    title: 'Jumanji: Welcome to the Jungle',
    vote: 'Rating: 6.5'
  }
];
