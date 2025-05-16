const API_KEY = "716414f78ad1e1719ea2ea7e3be423a8";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const repsonse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await repsonse.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
