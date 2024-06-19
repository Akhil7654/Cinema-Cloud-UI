import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice'; // Import the default export (the reducer)

export const store = configureStore({
  reducer: {
    home: homeReducer // Use the imported reducer
  }
});
