import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchSpecies = async (page: number) => {
    const response = await axios.get(`${BASE_URL}/species/?page=${page}`);
    return response.data;
};

export const fetchSpecie = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/species/${id}/`);
    return response.data;
};