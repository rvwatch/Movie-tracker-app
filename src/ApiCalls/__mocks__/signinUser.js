export const signinUser = jest.fn().mockImplementation(() => {
  return Promise.resolve({ id: 2 });
});
