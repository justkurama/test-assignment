import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface EntityState {
    people: any[];
    films: any[];
    vehicles: any[];
    starships: any[];
    planets: any[];
    species: any[];
    loading: boolean;
    error: string | null;
}

const initialState: EntityState = {
    people: [],
    films: [],
    vehicles: [],
    starships: [],
    planets: [],
    species: [],
    loading: false,
    error: null,
};

export const getPeople = createAsyncThunk('entities/getPeople', async (page: number) => {
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    return response.data.results;
});

export const getFilms = createAsyncThunk('entities/getFilms', async () => {
    const response = await axios.get('https://swapi.dev/api/films/');
    return response.data.results;
});

export const getVehicles = createAsyncThunk('entities/getVehicles', async (page: number) => {
    const response = await axios.get(`https://swapi.dev/api/vehicles/?page=${page}`);
    return response.data.results;
});

export const getStarships = createAsyncThunk('entities/getStarships', async (page: number) => {
    const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
    return response.data.results;
});

export const getPlanets = createAsyncThunk('entities/getPlanets', async (page: number) => {
    const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
    return response.data.results;
});

export const getSpecies = createAsyncThunk('entities/getSpecies', async (page: number) => {
    const response = await axios.get(`https://swapi.dev/api/species/?page=${page}`);
    return response.data.results;
});

const entitySlice = createSlice({
    name: 'entities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPeople.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPeople.fulfilled, (state, action) => {
                state.loading = false;
                state.people = action.payload;
            })
            .addCase(getPeople.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch people';
            })
            .addCase(getFilms.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.films = action.payload;
            })
            .addCase(getFilms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch films';
            })
            .addCase(getVehicles.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getVehicles.fulfilled, (state, action) => {
                state.loading = false;
                state.vehicles = action.payload;
            })
            .addCase(getVehicles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch vehicles';
            })
            .addCase(getStarships.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getStarships.fulfilled, (state, action) => {
                state.loading = false;
                state.starships = action.payload;
            })
            .addCase(getStarships.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch starships';
            })
            .addCase(getPlanets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPlanets.fulfilled, (state, action) => {
                state.loading = false;
                state.planets = action.payload;
            })
            .addCase(getPlanets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch planets';
            })
            .addCase(getSpecies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSpecies.fulfilled, (state, action) => {
                state.loading = false;
                state.species = action.payload;
            })
            .addCase(getSpecies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch species';
            });
    },
});

export default entitySlice.reducer;