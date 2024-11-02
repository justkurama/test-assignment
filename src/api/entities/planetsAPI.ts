import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchPlanets = async (page: number) => {
    const response = await axios.get(`${BASE_URL}/planets/?page=${page}`);
    return response.data;
};

export const fetchPlanet = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/planets/${id}/`);
    return response.data;
};