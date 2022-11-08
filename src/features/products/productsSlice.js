import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
const initialState = {
  productsList: [],
  filteredProductsList: [],
  searchValue: "",
  filterTypes: ["ALL"],
  selectedFilters: ["ALL"],
  isLoading: false,
};

// Thunk for fetching all products list
export const getAllProducts = createAsyncThunk(
  "allProducts/getProducts",
  async (_, thunkAPI) => {
    let url = `/products`;
    try {
      const resp = await customFetch.get(url, {});
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Reducer to create types in filter
    setFilterOptions: (state) => {
      let filterAr = [];
      state.productsList.map((product) => {
        filterAr = filterAr.concat([product.type]);
      });
      return {
        ...state,
        filterTypes: initialState.filterTypes.concat([...new Set(filterAr)]),
      };
    },
    // Reducer to set what will be searched in search graph
    setSearchValue: (state, { payload }) => {
      return { ...state, searchValue: payload };
    },
    // Reducer to return products list which is filtered via values in search graph
    filterBySearch: (state, { payload }) => {
      let filteredList = state.productsList.filter(
        (data) =>
          JSON.stringify(data.name)
            .toLowerCase()
            .indexOf(payload.toLowerCase()) !== -1
      );
      return { ...state, filteredProductsList: filteredList };
    },
    // Reducer to filter products list via filter types
    filterProducts: (state, { payload: { selected, value } }) => {
      if (selected && value !== "ALL") {
        let selectedFiltersAr = state.selectedFilters
          .filter((filter) => filter !== "ALL")
          .concat(value);

        const filteredProductsListAr = () => {
          let newAr = [];
          selectedFiltersAr.map((item) => {
            newAr = newAr.concat(
              state.productsList.filter((product) => product.type === item)
            );
          });
          return newAr;
        };

        return {
          ...state,
          selectedFilters: selectedFiltersAr,
          filteredProductsList: filteredProductsListAr(),
        };
      } else if (selected && value === "ALL") {
        let selectedFiltersAr = ["ALL"];
        return {
          ...state,
          selectedFilters: selectedFiltersAr,
          filteredProductsList: state.productsList,
        };
      } else {
        return {
          ...state,
          selectedFilters: state.selectedFilters.filter(
            (item) => item !== value
          ),
          filteredProductsList: state.filteredProductsList.filter(
            (item) => item.type !== value
          ),
        };
      }
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.productsList = payload;
      state.filteredProductsList = payload;
      state.isLoading = false;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      alert("There is Network Error, Operation Can not be executed...");
      console.log(payload);
      state.isLoading = false;
    },
  },
});

export const {
  setFilterOptions,
  filterProducts,
  setSearchValue,
  filterBySearch,
} = productsSlice.actions;
export default productsSlice.reducer;
