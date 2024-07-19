import {createSlice, Draft, PayloadAction, Reducer} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {fetchSearchVariants} from './searchThunk';
import {ApiSearchItem} from '../types';

interface SearchState {
  searchValue: string;
  searching: boolean;
  searchVariants: ApiSearchItem[];
}

const initialState: SearchState = {
  searchValue: '',
  searching: false,
  searchVariants: []
};
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    inputChange: (state: RootState, {payload: value}: PayloadAction<string>) => {
      state.searchValue = value;
    },
    clearChange: (state: RootState) => {
      state.searchValue = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchVariants.pending, (state: Draft<SearchState>) => {
      state.searching = true;
    });
    builder.addCase(fetchSearchVariants.rejected, (state: Draft<SearchState>) => {
      state.searching = false;
    });
    builder.addCase(fetchSearchVariants.fulfilled, (state: Draft<SearchState>, {payload: items}) => {
      state.searching = false;
      state.searchVariants = items;
    });
  }
});
export const searchReducer: Reducer<SearchState> = searchSlice.reducer;
export const {inputChange, clearChange} = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search.searchValue;

export const selectVariants = (state: RootState) => state.search.searchVariants;