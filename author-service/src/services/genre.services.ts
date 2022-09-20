import Genre from '../models/Genre.model';
import GenreOperations from '../helpers/Genre.operations';
import { GenreInputs, GenreFilter, GenreResultError } from '../utilities/types/genre.types';

class GenreServices {
  private operations;
  constructor() {
    this.operations = new GenreOperations<Genre>(Genre);
  }

  public async getGenres() {
    return this.operations.genreFilter({});
  }

  public async getGenre(genreInput: GenreFilter) {
    const result = await this.operations.genreFilter(genreInput);
    return (result && result.length > 0) ? result[0] : null;
  }

  public async createGenre(args: GenreInputs) {
    let genreResultError: GenreResultError = {
      code: 500,
      message: 'Internal server error'
    };

    console.log('Genre create args: ', JSON.stringify(args));

    // Check if the genre is already created
    const addedgenres = await this.operations.genreFilter(args);

    if (addedgenres.length > 0) {
      genreResultError.code = 409;
      genreResultError.message = 'Genre is already added';
      return genreResultError;
    }

    return await this.operations.createGenre(args);
  }
}

export default GenreServices;