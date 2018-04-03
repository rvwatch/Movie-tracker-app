import errorReducer from "./errorReducer";
import { invalidSignIn, validSignIn, promptSignIn } from "../Actions";

describe("errorReducer", () => {
  it("should return default state", () => {
    const expected = false;
    expect(errorReducer(undefined, {})).toEqual(expected);
  });

  it("should return an error on invalid sign in", () => {
    const error = 'error';
    const expected = 'error';
    expect(errorReducer(undefined, invalidSignIn(error))).toEqual(expected);
  });

  it("should return an error on valid sign in", () => {
    const error = "email already exists";
    const expected = "email already exists";
    expect(errorReducer(undefined, validSignIn(error))).toEqual(expected);
  });

  it("should return an error to prompt sign in", () => {
    const error = "please sign in to add favorites";
    const expected = "please sign in to add favorites";
    expect(errorReducer(undefined, promptSignIn(error))).toEqual(expected);
  });
});
