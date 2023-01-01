import { PayloadAction } from './../node_modules/@reduxjs/toolkit/src/createAction';
// create slice for projects and another for categories 

import { createSlice, Action } from "@reduxjs/toolkit";
import { AppState } from "./index";
import { HYDRATE } from "next-redux-wrapper";
import { Category } from "../types";

const initialCategories: Category[] = [
    {
        name: 'All',
        active: true
    },
    {
        name: 'Professional',
        active: false
    },
    {
        name: 'Personal',
        active: false
    },
    {
        name: 'Contribution',
        active: false
    },
    {
        name: 'Github',
        active: false
    },
]

// Actual Slice
export const CategorySlice = createSlice({
  name: "categories",
  initialState : {
    data: initialCategories
  } ,
  reducers: {

    setActive: (state, action: PayloadAction<string>) => {
        state.data.forEach((cat) => cat.active = cat.name == action.payload ? true : false)
    },
    setInitialCat: (state) => {
        state.data = initialCategories;
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

export const { setActive, setInitialCat} = CategorySlice.actions;

export default CategorySlice.reducer;