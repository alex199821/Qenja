import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  subtotal: 0,
  itemsInCart: 0,
  finalOrder: [],
  sessionGoing: JSON.parse(localStorage.getItem("cart")) ? true : null,
  isLoading: false,
  uploadIsLoading: false,
};
// Thunk to add new order to database of pending orders
export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (order, thunkAPI) => {
    console.log(order);
    try {
      const resp = await customFetch.post("/orders", order);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer to add new product to cart
    addToCart: (state, { payload }) => {
      return { ...state, cart: state.cart.concat(payload) };
    },
    // Reducer to remove product from cart
    removeFromCart: (state, { payload }) => {
      let newCart = state.cart.filter((item) => item.id !== payload);
      return { ...state, cart: newCart };
    },
    // Reducer to handle amount of item inside cart
    handleItemAmount: (state, { payload }) => {
      const { value, id } = payload;
      state.cart.find((item) => item.id == id).amount = value;
    },
    // Reducer to calculate and return final amount to pay
    setCart: (state) => {
      const subtotal = () => {
        let totalSum = 0;
        state.cart.map((item) => {
          const { price, amount } = item;
          totalSum = totalSum + price * amount;
        });
        return totalSum;
      };
      return { ...state, subtotal: subtotal() };
    },
    // Reducer to calculate amount of all items in cart
    setItemsInCart: (state) => {
      const itemsAmount = () => {
        let totalItems = 0;
        state.cart.map((item) => {
          const { amount } = item;
          totalItems = totalItems + amount;
        });
        return totalItems;
      };
      return { ...state, itemsInCart: itemsAmount() };
    },
    // Reducer to create final order with all necessary information
    setFinalOrder: (state, { payload }) => {
      const newFinalOrder = {
        orderInformation: payload,
        cart: state.cart,
        total: state.subtotal,
      };
      return { ...state, finalOrder: newFinalOrder };
    },
    // Reducer to clear all items and reset cart
    resetState: (state) => {
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
        subtotal: 0,
        itemsInCart: 0,
        finalOrder: [],
        sessionGoing: null,
      };
    },
  },
  extraReducers: {
    [addOrder.pending]: (state) => {
      state.uploadIsLoading = true;
    },
    [addOrder.fulfilled]: (state, { payload }) => {
      console.log("Success", payload);
      state.uploadIsLoading = false;
    },
    [addOrder.rejected]: (state, { payload }) => {
      alert("There is Network Error, Operation Can not be executed...");
      console.log(payload);
      state.uploadIsLoading = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  handleItemAmount,
  setCart,
  setItemsInCart,
  setFinalOrder,
  resetState,
} = cartSlice.actions;
export default cartSlice.reducer;
