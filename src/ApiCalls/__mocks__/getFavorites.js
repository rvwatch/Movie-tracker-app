export const getFavorites = jest.fn().mockImplementation(() => {
  return Promise.resolve({ data: [{ movie: 'movie' }] });
});
