const key = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  requestNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  requestComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
  requestHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  requestRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
  requestDocumantaries: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=99`,
};

export default requests;
