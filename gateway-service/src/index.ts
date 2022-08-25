import express from 'express';
import { ApolloServer } from 'apollo-server-express';
// import { ApolloServer } from 'apollo-server';
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
          url: 'http://localhost:4001/graphql'
        }]
      })
    });

    const server = new ApolloServer({ gateway });
    await server.start();
    app.listen(port, () => console.log(`Gateway server started on port ${port}`));
  } catch (e) {
    console.error(e);
  }
})();
