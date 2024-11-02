import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api', // Base URL for SWAPI
});

// Fetch a list of entities with pagination
export const fetchEntities = async (entity: string, page: number) => {
  const response = await api.get(`/${entity}/?page=${page}`);
  return response.data;
};

// Fetch a single entity by ID
export const fetchEntity = async (entity: string, id: string) => {
  const response = await api.get(`/${entity}/${id}/`);
  return response.data;
};