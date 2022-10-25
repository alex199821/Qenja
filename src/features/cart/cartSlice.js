import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  subtotal: 0,
  itemsInCart: 0,
  finalOrder: [],
  sessionGoing: JSON.parse(localStorage.getItem("cart")) ? true : null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      return { ...state, cart: state.cart.concat(payload) };
    },
    removeFromCart: (state, { payload }) => {
      let newCart = state.cart.filter((item) => item.id !== payload);
      return { ...state, cart: newCart };
    },
    handleItemAmount: (state, { payload }) => {
      const { value, id } = payload;
      state.cart.find((item) => item.id == id).amount = value;
    },
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
    setFinalOrder: (state, { payload }) => {
      const newFinalOrder = {
        orderInformation: payload,
        cart: state.cart,
        total: state.subtotal,
      };
      return { ...state, finalOrder: newFinalOrder };
    },
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
  extraReducers: {},
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
