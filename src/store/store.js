// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import globalStringReducer from './globalStringSlice';

export const store = configureStore({
  reducer: {
    globalString: globalStringReducer,
  },
});
