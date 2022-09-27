import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../Redux/Rockets/rocketreducers';
import missionsReducer from '../Redux/mission/missionSlice';
// import counterReducer from '../features/counter/counterSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});
