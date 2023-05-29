import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SistemState {
  darkMode: boolean;
}

const initialState: SistemState = {
  darkMode: false,
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

export const darkModeActive = (state: RootState ) => state.sistem.darkMode;
export const { setDarkMode } = sistemSlice.actions;
export default sistemSlice.reducer;
