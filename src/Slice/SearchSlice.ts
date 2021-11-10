import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/store";

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
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
export const { setSearchQuery } = SearchSlice.actions;

export const selectSearchQuery = (state: RootState) => state.search.value;

export default SearchSlice.reducer;
