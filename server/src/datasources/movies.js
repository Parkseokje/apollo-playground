import { RESTDataSource } from 'apollo-datasource-rest';

class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://yts.mx/api/v2/';
  }

  async getAllMovies(limit) {
    const response = await this.get('list_movies.json', { limit });
    return response.data.movies;
  }

  async getMovieDetail(id) {
    const response = await this.get('movie_details.json', { movie_id: id });
    return response.data.movie;
  }
}

export default MoviesAPI;
