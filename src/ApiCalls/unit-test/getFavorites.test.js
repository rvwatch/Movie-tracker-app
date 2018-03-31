import { getFavorites } from "../getFavorites";
import * as mock from "./mockData";

describe("addNewUser", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        data: mock.mockFavoritesArray
      })
    }));
  });

  it("should call fetch with the correct params", () => {
    const id = 24;
    const url = `api/users/24/favorites`;

    getFavorites(id);
    expect(window.fetch).toHaveBeenCalledWith(url);

  });

  it("should return an array of favorites", async () => {
    const id = 1;
    const expected = {
      data: mock.mockFavoritesArray
    };

    await expect(getFavorites(id)).resolves.toEqual(expected);
  });

  it("should throw an error if the fetch fails", async() => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.reject({
        status: 500,
        message: 'error'
      }));
    const id = 1;
    const expected = new Error('error');

    await expect(getFavorites(id)).rejects.toEqual(expected);
  });{}
});
