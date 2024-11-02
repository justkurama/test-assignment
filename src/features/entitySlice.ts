import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEntities, fetchEntity } from '../api/swapi';
import { EntityState, EntityType } from '../types/types';

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

export const getEntities = createAsyncThunk(
  'entities/getEntities',
  async ({ entity, page }: { entity: EntityType; page: number }) => {
    const data = await fetchEntities(entity, page);
    return { entity, results: data.results };
  }
);

export const getEntity = createAsyncThunk(
  'entities/getEntity',
  async ({ entity, id }: { entity: EntityType; id: string }) => {
    const data = await fetchEntity(entity, id);
    return { entity, data };
  }
);

const entitySlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEntities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEntities.fulfilled, (state, action) => {
        state.loading = false;
        state[action.payload.entity] = action.payload.results;
      })
      .addCase(getEntities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch entities';
      })
      .addCase(getEntity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEntity.fulfilled, (state, action) => {
        state.loading = false;
        // Handle the fetched entity data as needed
      })
      .addCase(getEntity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch entity';
      });
  },
});

export default entitySlice.reducer;