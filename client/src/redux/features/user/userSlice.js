"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isFetchingUser: false,
  isErrorUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetchingUser = true;
    },

    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetchingUser = false;
    },

    loginFailure: (state) => {
      state.isFetchingUser = false;
      state.isErrorUser = true;
    },
    logout: (state) => {
      state.user = null;
      state.isFetchingUser = false;
      state.isErrorUser = false;
    },
    extraReducers: (builder) => {
      builder.addCase(PURGE, () => {
        return initialState;
      });
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
