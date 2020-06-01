import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    language: String!
    rating: Float!
    medium_cover_image: String!
    description_intro: String!
  }

  type Query {
    movies(limit: Int): [Movie],
    movie(id: Int!): Movie
  }
`;

export default typeDefs;
