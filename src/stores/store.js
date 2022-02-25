import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories";
import statisticsReducer from "./statistics";
import aboutReducer from "./about";
import sidebarReducer from "./sidebar";
import docsReducer from "./docs";
export default configureStore({
  reducer: {
    categories: categoriesReducer,
    statistics: statisticsReducer,
    about: aboutReducer,
    sidebar: sidebarReducer,
    filterdocs: docsReducer,
  },
});
