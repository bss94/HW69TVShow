import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiSearch, ApiSearchItem} from '../types';
import axiosApi from '../axiosApi';

export const fetchSearchVariants = createAsyncThunk<ApiSearchItem[],string>(
  'search/fetchSearchVariants',
  async (found)=>{
    const searchResponse = await axiosApi.get<ApiSearch[] | null>(`search/shows?q=${found}`);
    const search = searchResponse.data;
    if(!search){
      return [];
    }
    return search.map((el:ApiSearch)=>{
      return {
        name:el.show.name,
        id:el.show.id,
      }
    })
  }
)