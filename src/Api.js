const BASE_KEY = "5bfc791c91416880e37ee52e65af3b2f";
export default class GetFilms {
  constructor() {}
  async getTrending() {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${BASE_KEY}`
    );
    return response.ok
      ? await response.json()
      : Promise.reject(new Error("Not Found"));
  }
  async SearchMovies(query) {
    const response = await fetch(
      `      https://api.themoviedb.org/3/search/movie?api_key=${BASE_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return response.ok
      ? await response.json()
      : Promise.reject(new Error("Not Found"));
  }
  async DetalFilm(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${BASE_KEY}&language=en-US`
    );
    return response.ok
      ? await response.json()
      : Promise.reject(new Error("Not Found"));
  }
  async getCast(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${BASE_KEY}&language=en-US`
    );
    return response.ok
      ? await response.json()
      : Promise.reject(new Error("Not Found"));
  }
  async getReviews(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${BASE_KEY}&language=en-US`
    );
    return response.ok
      ? await response.json()
      : Promise.reject(new Error("Not Found"));
  }
}
