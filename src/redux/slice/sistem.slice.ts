import { createSlice } from '@reduxjs/toolkit';

interface SistemState {
  darkMode: boolean;
}

const initialState: SistemState = {
  darkMode: true,
};

export const sistemSlice = createSlice({
  name: 'sistem',
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkMode } = sistemSlice.actions;
export default sistemSlice.reducer;
