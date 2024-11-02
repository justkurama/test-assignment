import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchVehicles = async (page: number) => {
    const response = await axios.get(`${BASE_URL}/vehicles/?page=${page}`);
    return response.data;
};

export const fetchVehicle = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/vehicles/${id}/`);
    return response.data;
};