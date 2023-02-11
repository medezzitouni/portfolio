import { PayloadAction } from './../node_modules/@reduxjs/toolkit/src/createAction';
// create slice for projects and another for categories 

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./index";
import { HYDRATE } from "next-redux-wrapper";
import { Project } from "@types";
import { Category } from "@types";
import { BASE_URL } from '~lib/constants';

// initial categories
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

// Initial projects
const initialProjects: Project[] = [
  {   
      title: 'SuperChat' ,
      year: '2019',
      image: BASE_URL + "/assets/superChat.png",
      link:  'https://superchat.onrender.com',
      body:  'SuperChat is a small project made with Express, Socket.io, Firestore, and JQuery. It&apos;s a One-room chat between all users with simple authentication system.',
      category: 'Personal'
  },
  {   
      title: 'Easylens' ,
      year: '2022 - 2021',
      image: BASE_URL + "/assets/easylens.png",
      link:  'https://app.easylens.ma',
      body:  'EasyLens aims to make the optician workflow easier by moving the process of ordering optic products online, providing qualitative and professional features that help the optician automate his daily tasks, manage his inventory, discover new products and suppliers, order, track orders, and more.',
      category: 'Professional'
  },
  {
      title: 'Ametys',
      year: '2020 - 2019',
      image: BASE_URL + "/assets/ametys.png",
      link:  'https://www.ametys.org/fr/index.html',
      body:  'Ametys solutions allow local authorities as well as public actors to create attractive web sites and portals adapted to the challenges and uses of citizens.Internally, they use Ametys products to create next-generation intranets and extranets: collaborative and connected to their business needs.',
      category: 'Professional'
  },
  {
      title: 'Walo',
      year: '2023 - 2021',
      image: BASE_URL + "/assets/walo.png",
      link:  'https://walo.app',
      body:  'Walo provides a solution to enhance the financial well-being of future generations through experiential learning. Not everyone has the chance to start their financial journey on the right foot. We created WALO to give every kid an opportunity to learn how to be financially health.',
      category: 'Professional'
  },
  // 
  {
    title: 'Lookinglass',
    year: '2022',
    image: BASE_URL + "/assets/lookinglass.png",
    link:  'https://lookinglass.ipagency.it',
    body:  'Lookinglass\'s goal is to create a multi-tenant web portal to manage insurance business for Insurance companies, but also MGA, Agencies and Brokers, using multi-level companies hiearchy..',
    category: 'Professional'
  }
]


// Actual Slice
export const projectSlice = createSlice({
  name: "projectState",
  initialState : {
    projects : initialProjects.sort(
      (p1: Project , p2: Project) => {
          return p1.year == p2.year ? 0 
                  : ( p1.year < p2.year ? 1 : -1)
      }
    ),
    categories: initialCategories
  },
  reducers: {

    // Action to set the authentication status
    setInitialProjects: (state) => {
      state.projects = initialProjects;
    },
    filterProjects: (state, action: PayloadAction<string>) => {
      state.projects = initialProjects.filter((project) => project.category == action.payload)
    },
    setActiveCat: (state, action: PayloadAction<string>) => {
      state.categories.forEach((cat) => cat.active = cat.name == action.payload ? true : false)
    },
    setInitialCat: (state) => {
        state.categories = initialCategories;
    }, 

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      // @ts-ignore
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.state,
        };
      },
    },

  },
});

export const { setInitialProjects, filterProjects, setActiveCat, setInitialCat} = projectSlice.actions;

export default projectSlice.reducer;