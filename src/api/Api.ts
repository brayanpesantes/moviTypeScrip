import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from "../config";

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
};

export default {
  fechMovies: async (searchterm: string, page: number) => {
    const endpoint = searchterm
      ? `${SEARCH_BASE_URL}&query=${searchterm}&page=${page}&include_adult=false`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fechMovie: async (movieId: string | number) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId: string | number) => {
    const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },
  getReuestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (
    requestToken: string,
    username: string,
    password: string
  ) => {
    const bodyData = {
      username,
      password,
    };
  },
};
