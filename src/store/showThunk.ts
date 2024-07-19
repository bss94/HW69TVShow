import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiShow, Show} from '../types';
import axiosApi from '../axiosApi';


export const fetchShow = createAsyncThunk<Show,string>(
  'show/fetchShow',
  async (id)=>{
    const showResponse = await axiosApi.get<ApiShow | null>(`/shows/${id}`);
    const show = showResponse.data;
    if(!show){
      return;
    }
    return {
      id:show.id,
      image:show.image.medium,
      name:show.name,
      summary:show.summary,
    }
}
)