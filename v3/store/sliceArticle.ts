import { AppState } from '~store';
import { PayloadAction, PayloadActionCreator} from './../node_modules/@reduxjs/toolkit/src/createAction';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { ArticleType, ArticleFetch } from "@types";
import { AxiosResponse } from 'axios';
import client from '~lib/httpClient'


const initialArticles: ArticleType[] = []


interface UnknownError{ message: string }

export const fetchArticles = createAsyncThunk('artivles/fetchArticles', async () => {
  const fields = 'id,caption,media_type,media_url'
  const res: AxiosResponse = await client.get(`/me/media?fields=${fields}&access_token=${process.env.NEXT_PUBLIC_IG_TOKEN}`);
  return res.data.data;
});

// Actual Slice
export const articleSlice = createSlice({
  name: "articles",
  initialState : {
    data: initialArticles,
    loading: false,
    error: undefined
  },
  reducers: {
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: 
    
  },
  extraReducers: (builder: any)=> {
    builder.addCase([HYDRATE], (state: AppState, action: PayloadAction<any>) => {
        return {
            ...state,
            ...action.payload.state,
        }
    })
    builder.addCase(fetchArticles.pending, (state: ArticleFetch) => {
        state.loading = true;
      });
  
    builder.addCase(fetchArticles.fulfilled, (state: ArticleFetch, action: PayloadAction<ArticleType[]>) => {
      console.log('Fulfilled', action)
      state.loading = false;
      state.data = action.payload;
      state.error = null
    })

    builder.addCase(fetchArticles.rejected, (state: ArticleFetch, action: { error: UnknownError }) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message
    })
},
});

// export const {  } = articleSlice.actions;

export default articleSlice.reducer;