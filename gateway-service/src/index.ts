import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  const port = process.env.NODE_PORT || '4000';
  const nodeEnv = process.env.NODE_ENV || 'development';

  try {
    const app = express();
    const gateway = new ApolloGateway({
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [{
          name: 'genre-service', 
          url: 'http://genre-service:4001/graphql'
        }],
      }),
      debug: nodeEnv === 'development',
      pollIntervalInMs: 10000
    });

    const graphServer = new ApolloServer({ gateway });
    await graphServer.start();
    graphServer.applyMiddleware({ app, path: '/graphql' });
    app.listen(port, () => console.log(`Gateway server started on port ${port}`));
  } catch (e) {
    console.error(e);
  }
})();
