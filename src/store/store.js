import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import favoritesReducer from "./slices/favoriteSlice";
import authReducer from "./slices/authSlice";
import ticketReducer from "./slices/ticketsSlice";
import userReducer from "./slices/userSlice";
import registrationMiddleware from "./middleware/registration/registrationMiddleware";
import authMiddleware from "./middleware/authMiddleware";

const rootReducer = combineReducers({
  post: postsReducer,
  favorite: favoritesReducer,
  auth: authReducer,
  tickets: ticketReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registrationMiddleware,
      authMiddleware,
    ]),
});
