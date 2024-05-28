"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPostDeleteModalOpen: false,
};

const postDeleteModalSlice = createSlice({
  name: "post_delete_modal",
  initialState,
  reducers: {
    openPostDeleteModal: (state) => {
      state.isPostDeleteModalOpen = true;
    },
    closePostDeleteModal: (state) => {
      state.isPostDeleteModalOpen = false;
    },
  },
});

export const { openPostDeleteModal, closePostDeleteModal } =
  postDeleteModalSlice.actions;
export default postDeleteModalSlice.reducer;
