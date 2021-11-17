import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface VariantsState {
  value: any;
}

const initialState: VariantsState = {
  value: 0,
};

export const VariantsSlice = createSlice({
  name: "variants",
  initialState,
  reducers: {
    setVariant: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const variantsActions = VariantsSlice.actions;

export default VariantsSlice.reducer;
