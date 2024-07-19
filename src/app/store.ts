import {configureStore} from '@reduxjs/toolkit';
import {searchReducer} from '../store/searchSlice';
import {showReducer} from '../store/showSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    show: showReducer,
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;