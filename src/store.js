import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './features/ui/uiSlice';
export const store = configureStore({
  reducer: {
    ui: uiSlice,
  },
});
