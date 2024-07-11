import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {AuthApi} from "~auth/data/api";
import {tokenDataSource} from "~auth/data/tokenstore";

export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  initiated: boolean;
  error: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  initiated: false,
  error: "",
};

export const initAuthSlice = createAsyncThunk("auth/init", async () => {
  return await tokenDataSource.hasToken();
});

export const authentication = createAsyncThunk<
  any,
  {login: string; password: string}
>("auth/login", async (arg, {}) => {
  const data = await AuthApi.login(arg.login, arg.password);
  if (typeof data !== "string") {
    await tokenDataSource.setToken(data.token);
  } else {
    throw Error(data);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(initAuthSlice.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = action.payload;
      state.initiated = true;
    });
    builder.addCase(initAuthSlice.pending, state => {
      state.loading = true;
    });
    builder.addCase(initAuthSlice.rejected, state => {
      state.loading = false;
      state.initiated = true;
      state.isAuthenticated = false;
    });
    builder.addCase(authentication.rejected, (state, payload) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = payload.error.message ?? "";
    });
    builder.addCase(authentication.pending, state => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(authentication.fulfilled, (state, action) => {
      console.log("HERE", action.payload);
      state.loading = false;
      state.isAuthenticated = true;
    });
  },
});

// Action creators are generated for each case reducer function

export default authSlice.reducer;
