// redux/globalStringSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const globalStringSlice = createSlice({
  name: 'globalString',
  initialState,
  reducers: {
    setString: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setString } = globalStringSlice.actions;
// export default globalStringSlice.reducer;
export default globalStringSlice.reducer;

