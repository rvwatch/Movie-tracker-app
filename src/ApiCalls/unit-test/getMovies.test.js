import {getMovies} from '../getMovies';
jest.mock('../fetchData')

describe('getMovies', () => {

  it.only('should call fetchData', async () => {
    const func = await getMovies();
    expect(fetchData).toHaveBeenCalled()
  })

  // it('should call cleanMovies', () => {
  //   getMovies();
  //   expect(fetchData).toHaveBeenCalled()
  // })
})