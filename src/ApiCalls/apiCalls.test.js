import * as Api from './apiCalls';

describe('fetchData', () => {
  let mockMovieData

  beforeEach(() => {

    mockMovieData = {results: [{
      original_language: "en",
      original_title: "Jumanji: Welcome to the Jungle",
      overview: "The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
      popularity: 101.350698,
      poster_path: "/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
      release_date: "2017-12-09",
      title: "Jumanji: Welcome to the Jungle",
      video: false,
      vote_average: 6.5,
      vote_count: 3115,
    }
  ]};
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve) => {
        resolve(mockMovieData);
      })
    }));
  });

  it('should fetch movie data', async () => {
    const expected = mockMovieData.results;
    const returnedMovies = await Api.fetchData();
    expect(returnedMovies).toEqual(expected)
  });

  it('throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    // const expected = 'error';
    const results = await Api.fetchData();
    expect(results).rejects.toEqual(Error('error'))
  });


})