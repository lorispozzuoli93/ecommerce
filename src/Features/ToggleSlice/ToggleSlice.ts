import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: "none" | "in" | "out";
}

const initialState: CounterState = {
  value: "none",
};

export const ToggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggle: (state, action: PayloadAction<"none" | "in" | "out">) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const toggleActions = ToggleSlice.actions;

export default ToggleSlice.reducer;
