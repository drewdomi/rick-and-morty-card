import axios, { AxiosInstance } from "axios";

const url = "https://rickandmortyapi.com/api/character";

const api: AxiosInstance = axios.create({
  baseURL: url,
});

export default api;
