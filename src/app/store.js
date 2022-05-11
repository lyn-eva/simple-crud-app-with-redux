import { configureStore } from '@reduxjs/toolkit';
import memberSlice from '../features/memberSlice';
import previewReducer from '../features/previewSlice';

export const store = configureStore({
  reducer: {
    preview: previewReducer,
    members: memberSlice,
  },
});
