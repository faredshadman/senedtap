import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getStatistics = createAsyncThunk(
  "statistics/getStatistics",
  async () => {
    return fetch("http://localhost:5500/statistics").then((res) => res.json());
  }
);

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    statistics: [],
  },
  extraReducers: {
    [getStatistics.fulfilled]: (state, action) => {
      state.statistics = action.payload;
    },
  },
});
export default statisticsSlice.reducer;
