import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsList } from "../../utils/links";

const initialState = {
  productsList: ProductsList,
  filteredProductsList: ProductsList,
  filterTypes: ["ALL"],
  selectedFilters: ["ALL"],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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
  extraReducers: {},
});

export const { setFilterOptions, filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
