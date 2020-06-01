const resolvers = {
  Query: {
    movie: (_, { id }, { dataSources }) =>
      dataSources.moviesAPI.getMovieDetail(id),
    movies: (_, { limit = 10 }, { dataSources }) =>
      dataSources.moviesAPI.getAllMovies(limit),
  },
};

export default resolvers;
