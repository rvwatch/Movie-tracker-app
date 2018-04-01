import { postToFavorites } from "../postToFavorites";
import * as mock from "./mockData";

describe("postToFavorites", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve();
        })
    }));
  });

  it("should call fetch with the correct params", async() => {
    const url = `api/users/favorites/new`;
    const movie = mock.movieInfo;
    const fetchObject = {
      method: 'POST',
      body: JSON.stringify(mock.movieInfo), 
      headers: {
        'Content-Type': 'application/json'
      }
    };
    await postToFavorites(mock.movieInfo);
    expect(window.fetch).toHaveBeenCalledWith(url, fetchObject);
  });

  it("should return a favId if the fetch is successful", async () => {
    // await expect(postToFavorites(mock.movieData)).resolves.toEqual({})
  });

  it("should throw an error if failed to fetch", () => {
    
  });
});
