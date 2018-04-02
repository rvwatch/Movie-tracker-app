import deleteFromFavorites from "../deleteFromFavorites";
import * as mock from "./mockData";

describe("deleteFromFavorites", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve();
        })
    }));
  });

  it("should call fetch with the correct params", () => {
    const movieid = 1;
    const userid = 2;
    const url = `api/users/2/favorites/1`;
    const fetchObject = {
      method: "DELETE"
    };

    deleteFromFavorites(movieid, userid);
    expect(window.fetch).toHaveBeenCalledWith(url, fetchObject);
  });

  it("should delete a movie when passed the movie and user id", async () => {
    const movieid = 1;
    const userid = 2;
    await expect(deleteFromFavorites(movieid, userid)).toEqual({});
    //HOW TO TEST THIS?
  });

  it("should throw an error if a new user cannot be created", () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500,
      message: 'error'
    }));
    const movieid = 1;
    const userid = 2;
    const expected = new Error ('error');
    expect(deleteFromFavorites(movieid, userid)).rejects.toEqual(expected);
  });
});