import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchMissions = createAsyncThunk("mission/fetchMissions", () =>
  axios
    .get("https://api.spacexdata.com/v3/missions")
    .then((response) => response.data)
);

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers:{
    join: {
      reducer: (state, action) => state.map((mission) => (mission.mission_id === action.payload ? {
        ...mission, reserved: true
      } : mission)),
      prepare: (id) =>({
        payload: id,
      }),
    },
    leave: {
      reducer: (state, action) => state.map((mission) => (
        mission.mission_id ===action.payload ? {
          ...mission, reserved: false
        } : mission
      )),
      prepare: (id) => ({
        payload: id
      }),
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled,
      (state, action) => (action.payload))
  },
});

const { join, leave } = missionSlice.actions;

export { fetchMissions, join, leave }
export default missionSlice.reducer;
