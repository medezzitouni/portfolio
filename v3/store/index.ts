import { configureStore, ThunkAction, Action, ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { projectSlice } from "./sliceProjects";
import { createWrapper } from "next-redux-wrapper";
import { articleSlice } from "./sliceArticle";

const makeStore = () =>
  configureStore({
    reducer: {
      [projectSlice.name]: projectSlice.reducer,
      [articleSlice.name]: articleSlice.reducer
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export type AppThunkDispatch = ThunkDispatch<AppState, any, AnyAction>;

export const wrapper = createWrapper<AppStore>(makeStore);

// You are using legacy implementation. Please update your code: use createWrapper() and wrapper.useWrappedStore().