import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getDocs = createAsyncThunk("docs/getDocs", async () => {
  return fetch("http://localhost:5500/docs").then((res) => res.json());
});

export const updateDocs = createAsyncThunk("docs/updateDocs", async (doc) =>
  fetch(`http://localhost:5500/docs/${doc.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...doc, fav: !doc.fav }),
  }).then((res) => res.json())
);

export const docsSlice = createSlice({
  name: "docs",
  initialState: {
    docs: [],
    filterDocs: [],
  },
  reducers: {
    filterDocs: (state, action) => {
      state.filterDocs = state.docs;
      state.filterDocs = state.filterDocs.filter(
        (doc) => doc.category === action.payload
      );
    },
    filterFav: (state) => {
      state.favDocs = state.docs;
      state.favs = state.favDocs.filter((doc) => doc.fav === true);
    },
    filterDocsLang: (state, action) => {
      state.filterDocs = state.docs;
      state.filterDocs = state.filterDocs.filter(
        (doc) => doc.lang === action.payload
      );
    },
  },
  extraReducers: {
    [getDocs.fulfilled]: (state, action) => {
      state.docs = action.payload;
      state.filterDocs = action.payload;
    },
    [updateDocs.fulfilled]: (state, action) => {
      let ind = state.filterDocs.findIndex(
        (elem) => elem.id === action.payload.id
      );
      state.filterDocs[ind] = action.payload;
      let favind = state.docs.findIndex(
        (elem) => elem.id === action.payload.id
      );
      state.docs[favind] = action.payload;
    },
  },
});

export const { filterDocs, filterDocsLang } = docsSlice.actions;
export default docsSlice.reducer;
