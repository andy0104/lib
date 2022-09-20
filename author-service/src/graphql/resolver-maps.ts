import { merge } from 'lodash';
import { genreResolvers } from './resolvers/genre-resolvers';

const resolverMap = merge(genreResolvers);

export default resolverMap;