import { createSlice } from "@reduxjs/toolkit";
export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    firstMenuClick: false,
    firstSubMenuClick: false,
    secondSubMenuClick: false,
    thirdSubMenuClick: false,
  },
  reducers: {
    setFirstMenuClick: (state) => {
      state.firstMenuClick = !state.firstMenuClick;
    },
    setFirstSubMenuClick: (state) => {
      state.secondSubMenuClick = false;
      state.thirdSubMenuClick = false;
      state.firstSubMenuClick = !state.firstSubMenuClick;
    },
    setSecondSubMenuClick: (state) => {
      state.thirdSubMenuClick = false;
      state.secondSubMenuClick = !state.secondSubMenuClick;
    },
    setThirdSubMenuClick: (state) => {
      state.thirdSubMenuClick = !state.thirdSubMenuClick;
    },
    setOpenMenu: (state) => {
      state.firstMenuClick = false;
    },
    closeSubs: (state) => {
      state.firstSubMenuClick = false;
      state.secondSubMenuClick = false;
      state.thirdSubMenuClick = false;
    },
  },
});
export const {
  setTags,
  setCheckClick,
  setFirstMenuClick,
  setFirstSubMenuClick,
  setSecondSubMenuClick,
  setThirdSubMenuClick,
  setOpenMenu,
  closeSubs,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;
