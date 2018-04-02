import { signinUser } from "../signinUser";
import * as mock from "./mockData";

describe("signinUser", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            data: mock.mockUser
          })
      })
    );
  });

  it("should call fetch with the correct params", async () => {
    const url = `/api/users`;
    const fetchObject = {
      method: 'POST',
      body: JSON.stringify({
        email: 'r@r.r', 
        password: 'r'
      }), 
      headers: {
        'Content-Type': 'application/json'
      }
    };
    await signinUser(mock.mockUser);
    expect(window.fetch).toHaveBeenCalledWith(url, fetchObject);
  });

  it("should return a user object if the fetch succeeds", async () => {
    const mockData = {email:'r@r.r', password: 'r'};
    await expect(signinUser(mockData)).resolves.toEqual(mock.mockUser);
  });

  it("should throw an error if the sign in is not correct", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: "Email and Password do not match"
      })
    );
    const expected = new Error ('Email and Password do not match');
    await expect(signinUser(mock.mockUser)).rejects.toEqual(expected);
  });
});
