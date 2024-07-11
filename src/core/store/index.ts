import {configureStore, createAsyncThunk} from "@reduxjs/toolkit";

import authSlice, {initAuthSlice} from "~auth/repositories/store";
import clientSlice from "~client/repositories/store";

const initialActions = [initAuthSlice];

export const store = configureStore({
  reducer: {
    authSlice,
    clientSlice,
  },
});

export const initStore = createAsyncThunk(
  "store/init",
  async (_, {dispatch}) => {
    initialActions.map(value => dispatch(value()));
  },
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
