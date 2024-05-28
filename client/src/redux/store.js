"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import drawerReducer from "./features/drawer/drawerSlice";
import userReducer from "./features/user/userSlice";
import logoutReducer from "./features/logout_model/logoutModelSlice";
import postsReducer from "./features/posts/postsSlice";
import postDeleteReducer from "./features/post_delete_modal/postDeleteSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? require("redux-persist/lib/storage").default
    : createNoopStorage();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  drawer: drawerReducer,
  user: userReducer,
  logout_modal: logoutReducer,
  posts: postsReducer,
  post_delete_modal: postDeleteReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
