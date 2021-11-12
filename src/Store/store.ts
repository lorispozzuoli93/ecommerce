import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../Features/SearchSlice/SearchSlice";
import toggleReducer from "../Features/ToggleSlice/ToggleSlice";

export const store = configureStore({
  reducer: { search: searchReducer, toggle: toggleReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
