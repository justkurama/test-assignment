import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchFilms = async (page: number) => {
    const response = await axios.get(`${BASE_URL}/films/?page=${page}`);
    return response.data;
};

export const fetchFilm = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/films/${id}/`);
    return response.data;
};