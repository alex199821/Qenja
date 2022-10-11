import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  navSidebarOpen: false,
  searchSidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openNavSidebar: (state) => {
      state.navSidebarOpen = true;
    },
    closeNavSidebar: (state) => {
      state.navSidebarOpen = false;
    },
    openSearchSidebar: (state) => {
      state.searchSidebarOpen = true;
    },
    closeSearchSidebar: (state) => {
      state.searchSidebarOpen = false;
    },
  },
  extraReducers: {},
});

export const {
  openNavSidebar,
  closeNavSidebar,
  openSearchSidebar,
  closeSearchSidebar,
} = uiSlice.actions;
export default uiSlice.reducer;
