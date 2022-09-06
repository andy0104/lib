import Sequelize, { Model, ModelStatic, Op } from 'sequelize';
import {
  GenreInputs,
  GenreResultError,
  GenreFilter,
  FilterOptions
} from '../utilities/types/genre.types';
import Genre from '../models/Genre.model';

class GenreOperations<M extends Model> {
  private model;

  constructor(model: ModelStatic<M>) {
    this.model = model;
  }

  private async getAllGenres(filters: FilterOptions) {
    try {
      return await this.model.findAll({
        where: filters
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public async createGenre(args: GenreInputs): Promise<Genre|GenreResultError> {
    try {
      const genreResult = await Genre.create({
        genreName: args.name,
        genreStatus: args.status
      });
      return genreResult;
    } catch (e) {
      console.error(e);
      return Promise.resolve({
        code: 500,
        message: 'Internal server error'
      });
    }
  }

  public async genreFilter(filterOptions: GenreFilter) {
    const whereQuery: any = {};

    if (filterOptions.name) {
      whereQuery.genreName = Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('genreName')), 'like', filterOptions.name.toLowerCase());
    }

    return this.getAllGenres(whereQuery);
  }
}

export default GenreOperations;