import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api', // Base URL for SWAPI
});

export default api;
