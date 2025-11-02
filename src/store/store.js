import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import favoritesReducer from "./slices/favoriteSlice";
import authReducer from "./slices/authSlice";
import authMiddleware from "./middleware/authMiddleware";

const rootReducer = combineReducers({
  post: postsReducer,
  favorite: favoritesReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authMiddleware]),
});
