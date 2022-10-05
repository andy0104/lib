import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schema-maps';
import { sequelize } from './models';

dotenv.config();

(async () => {
  const app = express();
  const port = process.env.NODE_PORT || 4001;
  const apolloServer = new ApolloServer({
    schema
  });
  await sequelize.authenticate();
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: '/graphql'
  });
  app.listen(port, () => {
    console.log(`Graphql server has started on express server on PORT 4001!!!`);
    console.log(`Genre service started on port ${port}`);
  });
})();