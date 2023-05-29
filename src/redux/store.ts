import { configureStore } from '@reduxjs/toolkit';
import sistemSlice from './slice/sistem.slice';

export const store = configureStore({
  reducer: {
    sistem: sistemSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
