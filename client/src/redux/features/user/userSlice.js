"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  payload: null,
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
      state.isErrorUser = false;
      const base64Url = action.payload.access.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      const payloadObject = JSON.parse(jsonPayload);
      state.payload = payloadObject;
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
