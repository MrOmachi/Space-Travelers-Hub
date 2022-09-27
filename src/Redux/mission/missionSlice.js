import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

const fetchMissions = createAsyncThunk('mission/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await response.json();
  return missions;
});

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    join: {
      reducer: (state, action) => state.map((mission) => (mission.mission_id === action.payload ? {
        ...mission, reserved: true,
      } : mission)),
      prepare: (id) => ({
        payload: id,
      }),
    },
    leave: {
      reducer: (state, action) => state.map((mission) => (
        mission.mission_id === action.payload ? {
          ...mission, reserved: false,
        } : mission
      )),
      prepare: (id) => ({
        payload: id,
      }),
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled,
      (state, action) => (action.payload));
  },
});

const missionState = (state) => state.missions;
const { join, leave } = missionsSlice.actions;

export {
  fetchMissions, join, leave, missionState,
};
export default missionsSlice.reducer;
