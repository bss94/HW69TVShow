import {Show} from '../types';
import {createSlice, Draft, Reducer} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {fetchShow} from './showThunk';

interface ShowState {
  show: Show;
  isFetching: boolean;
}

const initialState: ShowState = {
  show: {
    name: '',
    summary: '',
    id: 0,
    image: ''
  },
  isFetching: false
};

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    some: () => {
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShow.pending, (state: Draft<ShowState>) => {
      state.isFetching = true;
    });
    builder.addCase(fetchShow.rejected, (state: Draft<ShowState>) => {
      state.isFetching = false;
    });
    builder.addCase(fetchShow.fulfilled, (state: Draft<ShowState>, {payload: item}) => {
      state.isFetching = false;
      state.show = item;
    });
  }
});

export const showReducer: Reducer<ShowState> = showSlice.reducer;
export const selectShow = (state: RootState) => state.show.show;