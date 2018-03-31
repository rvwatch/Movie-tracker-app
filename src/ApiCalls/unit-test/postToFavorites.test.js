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

  it("should call fetch with the correct params", async () => {

  });

  it("should return a favId if the fetch is successful", () => {

  });

  it("should throw an error if failed to fetch", () => {
    
  });
});
