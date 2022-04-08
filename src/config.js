export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "751a3c51becf4c4a18eb0ab8fde6bc24";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) => `
${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}
`,
  getBannerMovie: (type) => `
  https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}
  `,
  getMovieDetail: (movieID) => `${tmdbEndpoint}/${movieID}?api_key=${apiKey}`,
  getMovieCredits: (movieID, type) =>
    `${tmdbEndpoint}/${movieID}/${type}?api_key=${apiKey}`,
  getMovieSearch: (query, page) =>
    `${tmdbEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
  imgMovieCard: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
