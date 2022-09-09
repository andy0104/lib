import { IResolvers } from '@graphql-tools/utils';
import GenreServices from '../../services/genre.services';
import { GenreInputs, GenreResultError } from '../../utilities/types/genre.types';

export const genreResolvers: IResolvers = {
  CreateGenreResult: {
    __resolveType(obj: any, context: any, info: any) {
      // Check if return type has Genre obj
      if (obj.code) {
        return 'GenreNotAvailable';
      } else {
        return 'Genre';
      }
    }
  },
  Query: {
    async getGenres(_: void, args: void) {
      const genreServ = new GenreServices();
      return genreServ.getGenres();
    }
  },
  Mutation: {
    async createGenre(_: void, { genreInput }: { genreInput: GenreInputs }) {
      console.log(`Create args...`);
      console.log(genreInput);

      const genreServ = new GenreServices();
      const genreResult = await genreServ.createGenre(genreInput);

      return genreResult;
    }
  }
}