import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import favoritesReducer from "./slices/favoriteSlice";

const rootReducer = combineReducers({
  post: postsReducer,
  favorite: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
