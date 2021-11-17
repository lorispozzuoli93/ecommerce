import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: "",
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const searchActions = SearchSlice.actions;

export default SearchSlice.reducer;
