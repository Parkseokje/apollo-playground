import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import MoviesAPI from './datasources/movies';
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    moviesAPI: new MoviesAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
