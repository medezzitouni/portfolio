import { PayloadAction } from './../node_modules/@reduxjs/toolkit/src/createAction';
// create slice for projects and another for categories 

import { createSlice, Action } from "@reduxjs/toolkit";
import { AppState } from "./index";
import { HYDRATE } from "next-redux-wrapper";
import { Category } from "@types";

const initialArticles: Category[] = []

// Actual Slice
export const ArticleSlice = createSlice({
  name: "articles",
  initialState : {
    data: initialArticles
  } ,
  reducers: {

    setActive: (state, action: PayloadAction<string>) => {
        state.data.forEach((cat) => cat.active = cat.name == action.payload ? true : false)
    },
    setInitialCat: (state) => {
        state.data = initialArticles;
    }, 
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        // @ts-ignore    
        [HYDRATE]: (state, action) => {
            // state.categories = action.payload.state.category.categories;
            return {
                ...state,
                ...action.payload.state,
            }
        },
    },

  },
});

export const { setActive, setInitialCat} = ArticleSlice.actions;

export default ArticleSlice.reducer;