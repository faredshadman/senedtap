import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    return fetch("http://localhost:5500/categories").then((res) => res.json());
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
  },
  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default categoriesSlice.reducer;
