import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchStarships = async (page: number) => {
    const response = await axios.get(`${BASE_URL}/starships/?page=${page}`);
    return response.data;
};

export const fetchStarship = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/starships/${id}/`);
    return response.data;
};