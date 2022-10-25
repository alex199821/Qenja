import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./features/ui/uiSlice";
import productsSlice from "./features/products/productsSlice";
import cartSlice from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    ui: uiSlice,
    products: productsSlice,
    cart: cartSlice,
  },
});
