"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isPostsFetching: false,
  isPostsError: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsStart: (state) => {
      state.isPostsFetching = true;
    },

    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isPostsFetching = false;
    },

    getPostsFailure: (state) => {
      state.isPostsFetching = false;
      state.isPostsError = true;
    },
    extraReducers: (builder) => {
      builder.addCase(PURGE, () => {
        return initialState;
      });
    },
  },
});

export const { getPostsStart, getPostsSuccess, getPostsFailure } =
  postsSlice.actions;
export default postsSlice.reducer;
