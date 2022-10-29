import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
  navSidebarOpen: false,
  searchSidebarOpen: false,
  landingPage: [],
  landingIsLoading: true,
  aboutPage: [],
  aboutIsLoading: true,
  contacts: [],
  contactsIsLoading: true,
  shop: [],
  shopIsLoading: true,
};

export const getLandingPage = createAsyncThunk(
  "landingPage/getLandingPage",
  async (_, thunkAPI) => {
    // const { name, type, descripton } = thunkAPI.getState().getProducts;
    let url = `/landing`;
    try {
      const resp = await customFetch.get(url, {});
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const getAboutPage = createAsyncThunk(
  "aboutPage/getAboutPage",
  async (_, thunkAPI) => {
    let url = `/about`;
    try {
      const resp = await customFetch.get(url, {});
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    let url = `/contacts`;
    try {
      const resp = await customFetch.get(url, {});
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const getShop = createAsyncThunk("shop/getShop", async (_, thunkAPI) => {
  let url = `/shop`;
  try {
    const resp = await customFetch.get(url, {});
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

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
  extraReducers: {
    [getLandingPage.pending]: (state) => {
      state.landingIsLoading = true;
    },
    [getLandingPage.fulfilled]: (state, { payload }) => {
      state.landingPage = payload;
      state.landingIsLoading = false;
    },
    [getLandingPage.rejected]: (state, { payload }) => {
      console.log(payload);
      state.landingIsLoading = false;
    },
    [getAboutPage.pending]: (state) => {
      state.aboutIsLoading = true;
    },
    [getAboutPage.fulfilled]: (state, { payload }) => {
      state.aboutPage = payload;
      state.aboutIsLoading = false;
    },
    [getAboutPage.rejected]: (state, { payload }) => {
      console.log(payload);
      state.aboutIsLoading = false;
    },
    [getContacts.pending]: (state) => {
      state.contactsIsLoading = true;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.contactsIsLoading = false;
    },
    [getContacts.rejected]: (state, { payload }) => {
      console.log(payload);
      state.contactsIsLoading = false;
    },
    [getShop.pending]: (state) => {
      state.shopIsLoading = true;
    },
    [getShop.fulfilled]: (state, { payload }) => {
      state.shop = payload;
      state.shopIsLoading = false;
    },
    [getShop.rejected]: (state, { payload }) => {
      console.log(payload);
      state.shopIsLoading = false;
    },
  },
});

export const {
  openNavSidebar,
  closeNavSidebar,
  openSearchSidebar,
  closeSearchSidebar,
} = uiSlice.actions;
export default uiSlice.reducer;
