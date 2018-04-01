import { addNewUser } from "../addNewUser";
import * as mock from "./mockData";

describe("addNewUser", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve();
        })
    }));
  });

  it("should fetch with the correct params", async () => {
    const url = `/api/users/new`;
    const user = {name:'a', email: 'a@a.a', password:'a'};
    const fetchObject = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    };
    await addNewUser(user);
    expect(window.fetch).toHaveBeenCalledWith(url, fetchObject);
  });

  it("should add a new user to the database", async () => {

  });

  it("should return a message if the email already exists", () => {

  });

  // it("should throw an error if a new user cannot be created", async () => {
  //   window.fetch = jest.fn().mockImplementation(() => 
  //     Promise.reject({
  //       status: 500,
  //       message: 'error'
  //     }));
  //   const expected = new Error('error');

  //   await expect(addNewUser(mock.mockUser)).rejects.toEqual(expected);
  // });
});
