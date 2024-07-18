import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SearchState{
  name:string;
  searchVariant:[];
  searching:boolean;
}
const initialState:SearchState={
  name:'',
  searchVariant:[],
  searching:false,
};
export const searchSlice = createSlice({
  name:'search',
  initialState,
  reducers:{
    inputChange:(state,{payload:entered}:PayloadAction<string>)=>{
      state.name = entered;
    }
  },

});
export const searchReducer = searchSlice.reducer;