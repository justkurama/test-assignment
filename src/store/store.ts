import { configureStore } from '@reduxjs/toolkit';
import entityReducer from '../features/entitySlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    entity: entityReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;