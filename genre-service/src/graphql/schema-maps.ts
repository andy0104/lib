import 'graphql-import-node';
import { gql } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { buildSubgraphSchema } from '@apollo/subgraph';
import * as genreTypeDefs from './schema/genre.graphql';
import resolverMap  from './resolver-maps';

const gqlSchemas = gql`
  ${genreTypeDefs}
`;

const schema = buildSubgraphSchema([{
  typeDefs: gqlSchemas,
  resolvers: resolverMap
}]);

export default schema;