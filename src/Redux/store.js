import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketreducers';
import missionsReducer, { fetchMissions } from './mission/missionSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});

store.dispatch(fetchMissions());
