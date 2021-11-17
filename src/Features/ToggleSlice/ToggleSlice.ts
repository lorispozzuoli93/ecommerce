import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToggleState {
  value: "none" | "in" | "out";
}

const initialState: ToggleState = {
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
