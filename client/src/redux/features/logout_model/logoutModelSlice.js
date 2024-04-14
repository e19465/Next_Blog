"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogoutModelOpen: false,
};

const logoutModelSlice = createSlice({
  name: "logout_modal",
  initialState,
  reducers: {
    openLogoutModal: (state) => {
      state.isLogoutModelOpen = true;
    },
    closeLogoutModal: (state) => {
      state.isLogoutModelOpen = false;
    },
  },
});

export const { openLogoutModal, closeLogoutModal } = logoutModelSlice.actions;
export default logoutModelSlice.reducer;
