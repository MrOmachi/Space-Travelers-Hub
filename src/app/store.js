import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../Redux/Rockets/rocketreducers';
import missionsReducer, { fetchMissions } from '../Redux/mission/missionSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});

store.dispatch(fetchMissions());
