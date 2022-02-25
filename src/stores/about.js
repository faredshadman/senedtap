import { createSlice } from "@reduxjs/toolkit";
export const aboutSlice = createSlice({
  name: "about",
  initialState: {
    activeTab: 1,
    click: false,
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setClick: (state) => {
      state.click = !state.click;
    },
  },
});
export const { setActiveTab, setClick } = aboutSlice.actions;
export default aboutSlice.reducer;
