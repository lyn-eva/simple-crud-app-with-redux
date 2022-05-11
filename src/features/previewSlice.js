import { createSlice } from '@reduxjs/toolkit';

const previewSlice = createSlice({
  name: 'preview',
  initialState: { value: '' },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { update } = previewSlice.actions;
export const selectPreview = (state) => state.preview.value;
export default previewSlice.reducer;
