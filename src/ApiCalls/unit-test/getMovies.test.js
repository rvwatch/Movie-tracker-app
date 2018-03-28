import { getMovies } from '../getMovies';
import { fetchData } from '../fetchData';
import { cleanMovies } from '../cleanMovies';
jest.mock('../fetchData.js');
jest.mock('../cleanMovies.js');

describe('getMovies', () => {
  it('should call fetchData', async () => {
    await getMovies();
    expect(fetchData).toHaveBeenCalled();
  });
  it('should call cleanMovies', async () => {
    await getMovies();
    expect(cleanMovies).toHaveBeenCalled();
  });
});
